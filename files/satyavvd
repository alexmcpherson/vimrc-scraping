" TODO: http://stackoverflow.com/questions/95072/what-are-your-favorite-vim-tricks/225852#225852

" General "{{{
set nocompatible " disable vi compatibility.
set history=256 " Number of things to remember in history.
set autowrite " Writes on make/shell commands
set autoread
"set timeoutlen=250 " Time to wait after ESC (default causes an annoying delay)
set clipboard+=unnamed " Yanks go on clipboard instead.
set pastetoggle=<F10> " toggle between paste and normal: for 'safer' pasting from keyboard
set tags=./tags;$HOME " walk directory tree upto $HOME looking for tags
" Modeline
set modeline
set modelines=5 " default numbers of lines to read for modeline instructions
" Backup
"set nowritebackup
"set nobackup
"set directory=/tmp// " prepend(^=) $HOME/.tmp/ to default path; use full path as backup filename(//)
" Buffers
"set hidden " The current buffer can be put to the background without writing to disk
" Match and search
set hlsearch " highlight search
set ignorecase " Do case in sensitive matching with
set smartcase " be sensitive when there's a capital letter
set incsearch "
" "}}}

" Formatting "{{{
set fo+=o " Automatically insert the current comment leader after hitting 'o' or 'O' in Normal mode.
set fo-=r " Do not automatically insert a comment leader after an enter
set fo-=t " Do no auto-wrap text using textwidth (does not apply to comments)

set nowrap
set textwidth=0 " Don't wrap lines by default
set wildmode=longest,list " At command line, complete longest common string, then list alternatives.

set backspace=indent,eol,start " more powerful backspacing

set tabstop=4 " Set the default tabstop
set softtabstop=4
set shiftwidth=4 " Set the default shift width for indents
set expandtab " Make tabs into spaces (set by tabstop)
set smarttab " Smarter tab levels

set autoindent
set cindent
set cinoptions=:s,ps,ts,cs
set cinwords=if,else,while,do,for,switch,case

syntax on " enable syntax
filetype plugin indent on " Automatically detect file types.
" "}}}

" Visual "{{{
set nonumber " Line numbers off
set showmatch " Show matching brackets.
set matchtime=5 " Bracket blinking.
set novisualbell " No blinking
set noerrorbells " No noise.
set laststatus=2 " Always show status line.
set vb t_vb= " disable any beeps or flashes on error
set ruler " Show ruler
set showcmd " Display an incomplete command in the lower right corner of the Vim window
set shortmess=atI " Shortens messages

set nolist " Display unprintable characters f12 - switches
set listchars=tab:·\ ,eol:¶,trail:·,extends:»,precedes:« " Unprintable chars mapping

set foldenable " Turn on folding
set foldmethod=marker " Fold on the marker
set foldlevel=100 " Don't autofold anything (but I can still fold manually)
set foldopen=block,hor,mark,percent,quickfix,tag " what movements open folds

set mouse-=a " Disable mouse
set mousehide " Hide mouse after chars typed

"set splitbelow
"set splitright
"set paste paste
set virtualedit=block


au BufWritePre /tmp/* setlocal noundofile
set undodir=~/.vim/undodir
set undofile
set undolevels=1000 "maximum number of changes that can be undone
set undoreload=10000 "maximum number lines to save for undo on a buffer reload


"colorscheme gmarik
" "}}}


" Command and Auto commands " {{{
" Sudo write
comm! W exec 'w !sudo tee % > /dev/null' | e!

"Auto commands
"au BufRead,BufNewFile {Gemfile,Rakefile,Capfile,*.rake,config.ru} set ft=ruby
"au BufRead,BufNewFile {*.md,*.mkd,*.markdown} set ft=markdown
"au BufRead,BufNewFile {COMMIT_EDITMSG} set ft=gitcommit

au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$") | execute "normal g'\"" | endif " restore position in file
" " }}}

" Key mappings " {{{
nnoremap <silent> <LocalLeader>rs :source ~/.vimrc<CR>
nnoremap <silent> <LocalLeader>rt :tabnew ~/.vim/vimrc<CR>
nnoremap <silent> <LocalLeader>re :e ~/.vim/vimrc<CR>
nnoremap <silent> <LocalLeader>rd :e ~/.vim/ <CR>

" Tabs
nnoremap <silent> <LocalLeader>[ :tabprev<CR>
nnoremap <silent> <LocalLeader>] :tabnext<CR>
" Duplication
vnoremap <silent> <LocalLeader>= yP
nnoremap <silent> <LocalLeader>= YP
" Buffers
nnoremap <silent> <LocalLeader>- :bd<CR>
" Split line(opposite to S-J joining line)
nnoremap <silent> <C-J> gEa<CR><ESC>ew

" map <silent> <C-W>v :vnew<CR>
" map <silent> <C-W>s :snew<CR>

nnoremap # :let @/='\<<C-R>=expand("<cword>")<CR>\>'<CR>:set hls<CR>
nnoremap * #

map <S-CR> A<CR><ESC>
"
" Control+S and Control+Q are flow-control characters: disable them in your terminal settings.
" $ stty -ixon -ixoff
noremap <C-S> :update<CR>
vnoremap <C-S> <C-C>:update<CR>
inoremap <C-S> <C-O>:update<CR>
"
" show/Hide hidden Chars
map <silent> <F12> :set invlist<CR>
"
" generate HTML version current buffer using current color scheme
map <silent> <LocalLeader>2h :runtime! syntax/2html.vim<CR>
" " }}}
"
autocmd BufReadPre *.pl :source ~/.vim/bundle/omniperl/ftplugin/omniperl.vim
autocmd FileType pl set omnifunc=perlcomplete#OmniPerl_Complete
autocmd FileType perl silent! :set nopaste

set runtimepath+=~/.vim/vundle.git/ " my dev version

" Plugins " {{{
call vundle#rc()

"Bundle "omniperl.vim"
 "trying this
 Bundle "YankRing.vim"
 Bundle "http://github.com/thinca/vim-quickrun.git"
 Bundle "http://github.com/thinca/vim-poslist.git"
 Bundle "http://github.com/mattn/gist-vim.git"
 Bundle "http://github.com/rstacruz/sparkup.git", {'rtp': 'vim/'}
 
 " Programming
 Bundle "jQuery"
 Bundle "rails.vim"
 
 " Snippets
 Bundle "http://github.com/gmarik/snipmate.vim.git"
 
 " Syntax highlight
 Bundle "cucumber.zip"
 Bundle "Markdown"
 
 " Git integration
 Bundle "git.zip"
 Bundle "fugitive.vim"
 
 " (HT|X)ml tool
 Bundle "ragtag.vim"
 
 " Utility
 Bundle "repeat.vim"
 Bundle "surround.vim"
 Bundle "SuperTab"
 Bundle "file-line"
 Bundle "Align"
 
 " FuzzyFinder
 Bundle "L9"
 Bundle "FuzzyFinder"
 let g:fuf_modesDisable = [] " {{{
 nnoremap <silent> <LocalLeader>h :FufHelp<CR>
 nnoremap <silent> <LocalLeader>2 :FufFileWithCurrentBufferDir<CR>
 nnoremap <silent> <LocalLeader>@ :FufFile<CR>
 nnoremap <silent> <LocalLeader>3 :FufBuffer<CR>
 nnoremap <silent> <LocalLeader>4 :FufDirWithCurrentBufferDir<CR>
 nnoremap <silent> <LocalLeader>$ :FufDir<CR>
 nnoremap <silent> <LocalLeader>5 :FufChangeList<CR>
 nnoremap <silent> <LocalLeader>6 :FufMruFile<CR>
 nnoremap <silent> <LocalLeader>7 :FufLine<CR>
 nnoremap <silent> <LocalLeader>8 :FufBookmark<CR>
 nnoremap <silent> <LocalLeader>* :FuzzyFinderAddBookmark<CR><CR>
 nnoremap <silent> <LocalLeader>9 :FufTaggedFile<CR>
 " " }}}
 
 " Zoomwin
 Bundle "ZoomWin"
 noremap <LocalLeader>o :ZoomWin<CR>
 vnoremap <LocalLeader>o <C-C>:ZoomWin<CR>
 inoremap <LocalLeader>o <C-O>:ZoomWin<CR>
 noremap <C-W>+o :ZoomWin<CR>
 
 " Ack
 Bundle "ack.vim"
 noremap <LocalLeader># "ayiw:Ack <C-r>a<CR>
 vnoremap <LocalLeader># "ay:Ack <C-r>a<CR>
 
 " tComment
 Bundle "tComment"
 nnoremap // :TComment<CR>
 vnoremap // :TComment<CR>
 
 " Command-T
 Bundle "git://git.wincent.com/command-t.git"
 let g:CommandTMatchWindowAtTop=1 " show window at top
 
 " Navigation
 Bundle "http://github.com/gmarik/vim-visual-star-search.git"
" 
" " }}}
"
"
"let g:SuperTabContextDefaultCompletionType = "<c-n>"
"let g:SuperTabDefaultCompletionType = "<C-n>"
"inoremap <Tab> <C-n>
"inoremap <C-n> <Tab>
let g:SuperTabDefaultCompletionType = "<C-n>"

let g:SuperTabMappingForward = "<Tab>"
let g:SuperTabMappingBackward = "<S-Tab>"


function! SmartComplete ()
    " Remember where we parked...
    let cursorpos = getpos('.')
    let cursorcol = cursorpos[2]
    let curr_line = getline('.')

    " Special subpattern to match only at cursor position...
    let curr_pos_pat = '\%' . cursorcol . 'c'

    " Tab as usual at the left margin...
    if curr_line =~ '\(\->\|::\)' . curr_pos_pat
        return "\<C-X>\<C-O>"
    else
        return "\<TAB>"
    endif
endfunction

" Remap <TAB> for smart completion on various characters...
inoremap <silent> <TAB>   <C-R>=SmartComplete()<CR>

let g:I=0
function! INC(increment)
let g:I =g:I + a:increment
return g:I
endfunction



nmap <C-l> :set invnumber <CR>
"set mouse=a
map <Tab><Tab> <C-W>w
nnoremap <F1><F1> :set invnu nu?<CR>    " use f5f5 to toggle search hilight
nnoremap <F5><F5> :set invhls hls?<CR>    " use f5f5 to toggle search hilight
nnoremap <F4><F4> :set invwrap wrap?<CR>  " use f4f4 to toggle wordwrap
nnoremap <F2><F2> :vsplit<CR>
nnoremap <F3><F3> <C-W>w
nnoremap <F6><F6> :set invpaste paste?<CR>
nnoremap <F7> mz:let g:I=0 \|sil\| .,.+24s/^/\=INC(1).'<TAB>'/<CR>:'z<CR>:set nohls<CR>
nnoremap <F7><F7> mz:let g:I=0 \|sil\| .,$s/^/\=INC(1).'<TAB>'/<CR>:'z<CR>:set nohls<CR>
nnoremap <F8> :'z,$s/^[0-9]\+<TAB>//<CR>:'z<CR>
"nmap \, <ESC>:%s/^\s*`\(.*\)`.*/\1,/g\|%g/^/-j<CR>$x0
nmap <leader>n :set invrelativenumber relativenumber?<CR>
"nmap \i <C-v>1000000jI <Esc>
"nmap \i <C-v>1000000jI <Esc>
nmap <leader>i :execute "normal <c-v><c-v>G".col(".")."\|"<cr>I <esc><esc>
nmap <leader>r :execute "normal <c-v><c-v>G".col(".")."\|d"<cr>
nmap <leader>I :execute "normal <c-v><c-v>gg".col(".")."\|"<cr>I <esc><esc>
nmap <leader>R :execute "normal <c-v><c-v>gg".col(".")."\|d"<cr>
vnoremap <silent> <leader>] :!perl processtable.pl<CR>
nnoremap <silent> <leader>] :% !perl processtable.pl<CR>
nnoremap <silent> <leader>, :%s/$/,/<CR>:%g/^/-j<CR>
vnoremap <silent> <leader>, :s/$/,/<CR>gv:g/^/-j<CR>

"vnoremap \S :!perl ~/sql-beautify.pl<CR>
vnoremap <silent> <leader>{ :call ACGP()<CR>
nnoremap <silent> <leader>{ :%call ACGP()<CR>
vnoremap <silent> <leader>} :call CGP()<CR>
nnoremap <silent> <leader>} :%call CGP()<CR>

nnoremap <leader>v :execute "normal <c-v><c-v>G".col(".")."\|"<cr>
nnoremap <leader>V :execute "normal <c-v><c-v>gg".col(".")."\|"<cr>
nnoremap \<c-g> :echo expand("%:p:s")<cr>
nnoremap <silent> <F8> :TlistToggle<CR>

set cot+=menuone " show preview of function prototype


vmap <c-a> mby:$<CR>o<Esc>map<Esc>:'a,$!awk '{sum+=$0}END{print "SUM:" sum}'<CR>dd:'b<CR>p
vmap <c-n> :<CR><Esc>:let i=1 <Bar> '<,'>g/\d/s/\d\+/\=i/ <Bar> let i=i+1<CR>:set nohlsearch<CR>:'< <CR>




highlight StatusLine guifg=darkred ctermbg=darkred ctermfg=blue
set statusline =%F%m%r%h%w\ [<F1>=nu]\ [<F2>='vsplit']\ [<F3>=]\ [<F4>=wrap]\ [<F5>=highlight]\ [<F6>=paste]\ [<F7>=num]\ [<F8>=remove\ num]\ [\\,=db\ cols]\ [\\S=SqlBeautify]\ [<Ca>=sum]\ [\\n=RelNo.]»
au BufWritePre /tmp/* setlocal noundofile
set undodir=~/.vim/undodir
set undofile
set undolevels=1000 "maximum number of changes that can be undone
set undoreload=10000 "maximum number lines to save for undo on a buffer reload

function! GetVisual() range
    let reg_save = getreg('"')
    let regtype_save = getregtype('"')
    let cb_save = &clipboard
    set clipboard&
    normal! ""gvy
    let selection = getreg('"')
    call setreg('"', reg_save, regtype_save)
    let &clipboard = cb_save
    return selection
endfunction

vmap zz :%s/<c-r>=GetVisual()<cr>/

function! GetMyPatternText() range
let reg_save = getreg('"')
let regtype_save = getregtype('"')
let cb_save = &clipboard
set clipboard&
"let patt = a:pattern 
let patt = getreg('/')
echo patt
"let patt = substitute(patt,'\','\\\\','g')
let firstline = 1
let lastline = line("$")
let linenum = 0
let finalstr = [ ' '  ]
for linenum in range(firstline, lastline)
    let cline = getline(linenum)
    let start = 0
    while start >= 0 && start < strlen(cline)
        let b = match(cline, patt, start)
        let e = matchend(cline, patt, start)
        if b != -1 && e != -1
            let matchedstring = matchstr(cline,patt,start)
"           echo b . ":" . e ." ->:" . matchedstring
            call add(finalstr,matchedstring)
        endif
        let start = e
    endwhile
endfor
"call setreg('"', finalstr, regtype_save)
"call setreg('".', finalstr, getregtype('".'))
let &clipboard = cb_save
let status = append("$",finalstr)
"echo finalstr
return finalstr
endfunction

nmap <leader>pp :call GetMyPatternText() <CR>
"noremap <Leader>m mmHmt:%s/<C-V><cr>//ge<cr>'tzt'm
imap <C-C> <C-R>=string(eval(input("Calculate: ")))<CR>

function! LookUpwards()
   "Locate current column and preceding line from which to copy...
   let column_num      = virtcol('.')
   let target_pattern  = '\%' . column_num . 'v.'
   let target_line_num = search(target_pattern . '*\S', 'bnW')

   "If target line found, return vertically copied character...

   if !target_line_num
      return ""
   else
      return matchstr(getline(target_line_num), target_pattern)
   endif
endfunction

"Reimplement CTRL-Y within insert mode...

imap <silent>  <C-Y>  <C-R><C-R>=LookUpwards()<CR>

function! ACGP (...) range
    let l:patt = input('Enter Fields Range :')
    let l:append = input('Enter Append String:')
    execute ":".a:firstline.",".a:lastline." !perl ~/processfields.pl "."\"".l:patt."\""." '".l:append."'"
endfunction

function! CGP (...) range
    let l:patt = input('Enter Fields Range :')
    execute ":".a:firstline.",".a:lastline." !perl ~/genfields.pl "."\"".l:patt."\""
endfunction

function! GP (...) range
    let l:patt = ""
    if( a:0 > 0 && ! empty(a:1) )
        let l:patt = a:1
    else
        let l:patt=getreg('/')
        if(empty(l:patt))
            echo "No Pattern defined..."
            let l:patt = input('Enter Pattern :')
        endif
    endif
    echo 'Pattern Searched for : ' . l:patt
    let l:count = 0
    for linenum in range(a:firstline, a:lastline)
    let cline = getline(linenum)
    let start = 0
    while start >= 0 && start < strlen(cline)
        let b = match(cline, l:patt, start)
        let e = matchend(cline, l:patt, start)
        if b != -1 && e != -1
            echo matchstr(cline,l:patt,start)
            let l:count+=1
        endif
        let start = e
    endwhile
endfor
echo "\nMatch Count : ".l:count
endfunction

nnoremap <leader>g :%call GP()<CR>
vnoremap <leader>g :call GP()<CR>


fun! s:VirtcolM1(mark)
"  call Dfunc("VirtcolM1(mark ".a:mark.")")
  let mark   = "'".a:mark

  let vekeep = &ve
  if virtcol(mark) <= 1
"   call Dret("VirtcolM1 0")
   return 0
  endif

  if &ve == "block"
   " works around a ve=all vs ve=block difference with virtcol()
   set ve=all
"   call Decho("temporarily setting ve=all")
  endif

"  call Decho("exe norm! `".a:mark."h")
  exe "norm! `".a:mark."h"

  let vc  = virtcol(".")
  let &ve = vekeep

"  call Dret("VirtcolM1 ".vc)
  return vc
endfun


fun! Calculate() range
  let firstline  = line("'<")
  let lastline   = line("'>")
  let firstcolm1 = s:VirtcolM1("<")
  let lastcolm1  = s:VirtcolM1(">")
"  call Decho("1: firstline=".firstline." lastline=".lastline." firstcolm1=".firstcolm1." lastcolm1=".lastcolm1)

  if(firstline > lastline)
   let firstline = line("'>")
   let lastline  = line("'<")
   if a:0 >= 1
    norm! `>
   endif
  else
   if a:0 >= 1
    norm! `<
   endif
  endif
"  call Decho("2: firstline=".firstline." lastline=".lastline." firstcolm1=".firstcolm1." lastcolm1=".lastcolm1)
   if firstcolm1 > lastcolm1
    let tmp        = firstcolm1
    let firstcolm1 = lastcolm1
    let lastcolm1  = tmp
   endif

let sum = 0.0
let avg = 0.0
let l:count = 0.0
let numbers = []
for linenum in range(firstline,lastline)
    let cline = getline(linenum)
    let length = lastcolm1 - firstcolm1
    let num = str2float(strpart(cline,firstcolm1,length))
    call add(numbers,num)
    if num != 0
        let l:count = l:count + 1.0
    endif
    let sum = sum + num
endfor
"echo numbers
"echo l:count
let avg = sum / l:count
let nummax = max(map(numbers,'str2nr(string(v:val))'))
let nummin = min(map(numbers,'str2nr(string(v:val))'))
let uniq = 0
echo "\nCount : ". string(str2nr(string(l:count))) . ' Sum : '. string(sum) . ' Avg : '. string(avg) . ' Max : '. string(nummax) . ' Min : '. string(nummin)."\n"
endfun

vnoremap <leader>e :call Calculate()<CR>

nmap <silent><leader>h :help maps.txt<CR>


"Add Help in Vim
"function! AddMyHelpTags()
"  exe 'echo -e "sfsed\t ~/Documents/mynotesfile.mytext\t/\*sfsed\*" >> ~/.vim/doc/tags'
"  exe 'echo -e "sfphone\t ~/Documents/mynotesfile.mytext\t/\*sfphone\*" >> ~/.vim/doc/tags'
"  exe 'sort ~/.vim/doc/tags > /tmp/foo.vim.tags'
"  exe 'mv -f /tmp/foo.vim.tags ~/.vim/doc/tags'
"endfunction

colorscheme koehler

" show EOL whitespace
let c_space_errors=1
highlight WhitespaceEOL ctermbg=red guibg=red
match WhitespaceEOL /\s\+$/
"let g:autoclose_on=1

" Open and close all the three plugins on the same time
nmap <F8>   :TrinityToggleAll<CR>

" Open and close the srcexpl.vim separately
nmap <F9>   :TrinityToggleSourceExplorer<CR>

" Open and close the taglist.vim separately
nmap <F10>  :TrinityToggleTagList<CR>

" Open and close the NERD_tree.vim separately
nmap <F11>  :TrinityToggleNERDTree<CR> 

if has("gui_mac") || has("gui_macvim")
  macmenu &File.New\ Tab     key=<Nop>
  map <silent><D-t> :FufFile **/<CR>
endif
map <silent><c-t> :FufFile **/<CR>

"let g:acp_enableAtStartup = 1
nmap <F3> :ConqueTermSplit bash<CR>

vnoremap <leader>s :SQLUFormatter<CR>





nmap <silent><leader>h :help maps.txt<CR>




"FUNCTION: s:GetTreeWinNum() {{{2
"gets the nerd tree window number for this tab
function! s:GetTreeWinNum()
    if exists("t:MatchExtractName")
        return bufwinnr(t:MatchExtractName)
    else
        return -1
    endif
endfunction


function! s:CloseMatchExtractTab()
    if winnr("$") != 1
        execute s:GetTreeWinNum() . " wincmd w"
        close
        execute "wincmd p"
    else
        :q  
    endif


endfunction


let s:matches = []
let s:firstmatches = []




fun! ExtractMatches() range




  let firstline  = line("'<")
  let lastline   = line("'>")
"echo firstline lastline a:firstline a:lastline
  if firstline != a:firstline && a:firstline > 0
     let firstline = a:firstline
  endif
  if lastline != a:lastline && a:lastline > 0
       let lastline = a:lastline
  endif
  let firstcolm1 = s:VirtcolM1("<")
  let lastcolm1  = s:VirtcolM1(">")


     if firstline ==  lastline
          let firstline = a:firstline
          let lastline = a:lastline
     endif
"  call Decho("1: firstline=".firstline." lastline=".lastline." firstcolm1=".firstcolm1." lastcolm1=".lastcolm1)
 
  if(firstline > lastline)
   let firstline = line("'>")
   let lastline  = line("'<")
   if a:0 >= 1
    norm! `>
   endif
  else
   if a:0 >= 1
    norm! `<
   endif
  endif
"  call Decho("2: firstline=".firstline." lastline=".lastline." firstcolm1=".firstcolm1." lastcolm1=".lastcolm1)
   if firstcolm1 > lastcolm1
    let tmp        = firstcolm1
    let firstcolm1 = lastcolm1
    let lastcolm1  = tmp
   endif
"echo firstcolm1 lastcolm1
   if firstcolm1 == lastcolm1
          let firstcolm1=0
          let lastcolm1=0
   endif


"   echo ">"  firstcolm1 lastcolm1
    let l:patt = ""
    if( a:0 > 0 && ! empty(a:1) )
        let l:patt = a:1
    else
        let l:patt=getreg('/')
        if(empty(l:patt))
            echo "No Pattern defined..."
            let l:patt = input('Enter Pattern :')
        endif
    endif
    echo 'Pattern Searched for : ' . l:patt


for linenum in range(firstline,lastline)
     let lastcol = lastcolm1
    let cline = getline(linenum)
     if lastcol < 1
          let lastcol = strlen(cline)
     endif
    let length = lastcol - firstcolm1
     let start = 0
     let str = string(strpart(cline,firstcolm1,length))
    while start >= 0 && start < strlen(str)
        let b = match(str, l:patt, start)
        let e = matchend(str, l:patt, start)
        if b != -1 && e != -1
               let mlist = []
"echo cline.",".b.",".e
"echo strpart(cline,b,e-b)
"echo start
               let mlist = matchlist(str,l:patt,start-1)
"               echo mlist
               call add(s:matches, mlist)
               if start == 0
                    call add(s:firstmatches,mlist)
               endif
        endif
        let start = e
    endwhile
endfor


if  s:GetTreeWinNum() == -1
     let t:MatchExtractName =  localtime() . '_MatchExtract_'
     silent! execute 'topleft vertical 52 new '.t:MatchExtractName
     let t:TabOpen = 1
     execute s:GetTreeWinNum() . " wincmd w"
endif
call GetAllMatches()
endfunction


fun! GetAllMatches()
"echo len(matches)
"echo 'len--->'.len(matches[0])
let old_h = @h
let @h = ""
let index = 1
while index < len(s:matches)
     "echo join(matches[index])
     let list = s:matches[index]
     let string = ""
     for ele in list
          if ele != ''
               let string =  string . ele . ", "
          endif
     endfor
     let string = substitute(string,', $',"","")
     "let string =  join(list,', ')
     let @h = @h . string . "\n"
     let index = index + 1
endwhile
"let @h = @h ."\n\n". string(s:firstmatches)
"let @h =  string(matches)
"echo s:firstmatches
if  s:GetTreeWinNum() != -1
     if winnr("$") != 1
          execute s:GetTreeWinNum() . " wincmd w"
     endif
     execute "normal! \<ESC>:%d\<CR>"
set nu
set nowrap
silent! put h
"execute "normal! Go\<CR>\<C-R>\<C-R>=s:firstmatches"
let @h = old_h
endif
endfun




fun! GetFirstMatches()
"echo len(matches)
"echo 'len--->'.len(matches[0])
let old_h = @h
let @h = ""
let index = 1
while index < len(s:firstmatches)
    "echo join(matches[index])
    let list = s:firstmatches[index]
    let string = ""
    for ele in list
        if ele != ''
            let string =  string . ele . ", "
        endif
    endfor
    let string = substitute(string,', $',"","")
    "let string =  join(list,', ')
    let @h = @h . string . "\n"
    let index = index + 1
endwhile
if  s:GetTreeWinNum() != -1
     if winnr("$") != 1
          execute s:GetTreeWinNum() . " wincmd w"
     endif
execute "normal! \<ESC>:%d\<CR>"
silent! put h
"execute "normal! Go\<CR>\<C-R>\<C-R>=s:firstmatches"
let @h = old_h
endif
endfun









"Format SQL http://www.vim.org/scripts/script.php?script_id=492
vmap <silent>sf :SQLUFormatter<CR>
vnoremap <silent> \t :!perl tableAscii.pl ascii 0<CR>
vnoremap <silent> \T :!perl tableAscii.pl ascii 1<CR>
vnoremap <silent> \H :!perl tableAscii.pl html<CR>
nnoremap <silent> \t :% !perl tableAscii.pl ascii 0<CR>
nnoremap <silent> \T :% !perl tableAscii.pl ascii 1<CR>
nnoremap <silent> \H :% !perl tableAscii.pl html<CR>


vnoremap <silent> <leader><F2> :call ExtractMatches()<CR>
nnoremap <silent> <leader><F2> :1,$call ExtractMatches()<CR>












" vim: ft=vim :

