var casper = require("casper").create();
var url = "https://github.com/search?langOverride=VimL&language=&q=vimrc&repo=&type=Repositories&start_value=" + casper.cli.get(0);
var repoLinks = [];
var fileLinks = [];

function getRepoLinks() {
  var links = [];
  $("div.results .result h2 a").each(function(i,el){
    links.push(el.href);
  });
  return links
}

function findFile() {
  var url = false;
  $('td.content a').each(function(i,el){
    if (el.innerHTML === 'vimrc' || el.innerHTML === 'gvimrc') {
      url = el.href.replace('blob', 'raw');
    }
  });
  return url;
}


casper.start(url, function() {
    this.echo(url);
    this.echo("Loaded search results page");
    repoLinks = this.evaluate(getRepoLinks);
});

casper.then(function() {

  this.each(repoLinks, function(self, link){
    self.thenOpen(link, function() {
      var fileLink = this.evaluate(findFile);
      if (fileLink) fileLinks.push(fileLink)
    })
  });

});

casper.then(function(){
  this.each(fileLinks, function(self, fileLink) {
    self.thenOpen(fileLink, function() {
      var segments = fileLink.split('/');
      self.download(self.getCurrentUrl(), 'vimrcs/' + segments[segments.length - 5]);
    });
  });
});

casper.run();