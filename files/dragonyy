"call pathogen#infect()
"syntax on
"filetype plugin indent on
" 使用pathogen
" 有文件說pathogen要放在 filetype plugin indent on
" 之前（不過Github網頁上沒有這麼說，試看看
call pathogen#infect()

set nocompatible          " We're running Vim, not Vi!
  syntax on                 " Enable syntax highlighting
"  let g:html_use_css = 1
"  let g:html_use_encoding = "utf8"
"  let g:use_xhtml = 1
"  let g:rct_completion_use_fri = 1
  filetype plugin indent on " Enable filetype-specific indenting and plugins
  filetype plugin on

  " Load matchit (% to bounce from do to end, etc.)
  runtime! macros/matchit.vim

  augroup myfiletypes
  " Clear old autocmds in group
  autocmd!
  " autoindent with two spaces, always expand tabs
  autocmd FileType ruby,eruby,yaml set ai sw=2 sts=2 et
  augroup END
autocmd FileType * set noai | set tabstop=8 | set noexpandtab
autocmd FileType perl set ai |set softtabstop=2 | set sw=2 | set expandtab
autocmd FileType ruby set ai |set softtabstop=2 | set sw=2 | set expandtab | colorscheme vibrantink 
" | set omnifunc=rubycomplete#Complete
autocmd FileType yaml set ai |set softtabstop=2 | set sw=2 | set expandtab | colorscheme vibrantink
autocmd FileType yml set ai |set softtabstop=2 | set sw=2 | set expandtab
autocmd FileType xml set ai |set softtabstop=2 | set sw=2 | set expandtab | colorscheme vibrantink
autocmd FileType c set ai |set softtabstop=4 | set sw=4 | set expandtab
autocmd FileType cpp set ai |set softtabstop=4 | set sw=4 | set expandtab
autocmd FileType lua set ai |set softtabstop=3 | set sw=3 | set expandtab
" Cucumber
au Bufread,BufNewFile *.feature set filetype=gherkin
au! Syntax gherkin source ~/.vim/syntax/cucumber.vim
autocmd FileType gherkin set ai |set softtabstop=2 | set sw=2 | set expandtab | colorscheme vibrantink

"
set enc=utf-8
set fileencodings=utf-8,cp950,ucs-bom,default,latin1
"set termencoding=cp950
set termencoding=utf-8

" set abbreviation of rspec
ab XRS !spec -fs -c %
ab XRSS !spec %
ab acpe AutoComplPopEnable
ab acpd AutoComplPopDisable
" 990630 for AutoComplPop
let g:acp_completeOption='.,w,b,u,t,i,k'
let g:acp_behaviorSnipmateLength=1


" Taglist
nnoremap <silent> <f8> :TlistToggle<cr>
nnoremap <silent> <f9> :wincmd p<cr>
set tags=tags;

" For project plugin to enable F12
let g:proj_flags="imstg"

" 讓~ 可以運用到word上；不然就只有單一字元
set tildeop

