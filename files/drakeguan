"
" drakeguan's vimrc
" Shuen-Huei (Drake) Guan <drake.guan@gmail.com>
" Fork me on GITHUB  https://github.com/drakeguan/vimrc
" 
"
"
" derived from vgod's vimrc
"
" vgod's vimrc
" Tsung-Hsiang (Sean) Chang <vgod@vgod.tw>
" Fork me on GITHUB  https://github.com/vgod/vimrc
"


" SECTION: Settings Prior to other settings{{{1
"============================================================
"
" For pathogen.vim: auto load all plugins in .vim/bundle
" NOTE: new pathogen has different way to start up.
filetype off
"call pathogen#runtime_append_all_bundles()
"call pathogen#helptags()
call pathogen#infect()


" auto reload vimrc when editing it
autocmd! bufwritepost .vimrc source ~/.vimrc


" SECTION: General Settings{{{1
"============================================================
set nocompatible            " not compatible with the old-fashion vi mode
set bs=2                    " allow backspacing over everything in insert mode
set history=50              " keep 50 lines of command line history
set ruler                   " show the cursor position all the time
set autoread                " auto read when file is changed from outside
set modeline                " enable modeline
set clipboard=unnamed       " yank to the system register (*) by default
set showmode                " Show current mode
set showcmd                 " Show (partial) command in the last line of the screen
set wildchar=<TAB>          " start wild expansion in the command line using <TAB>
set wildmenu                " wild char completion menu
set nobackup                " no *~ backup files
set wildignore=*.o,*.class,*.pyc    " ignore these files while expanding wild chars
set tm=500                  " time in milliseconds waited for a key/mapping to complete
syntax on                   " syntax highlight


" SECTION: Status line Settings{{{2
set laststatus=2
set statusline=\ %{HasPaste()}%<%-15.25(%f%)%m%r%h\ %w\ \ 
set statusline+=\ \ \ [%{&ff}/%Y] 
set statusline+=\ \ \ %<%20.30(%{hostname()}:%{CurDir()}%)\ 
set statusline+=%=%-10.(%l,%c%V%)\ %p%%/%L

function! CurDir()
    let curdir = substitute(getcwd(), $HOME, "~", "")
    return curdir
endfunction

function! HasPaste()
    if &paste
        return '[PASTE]'
    else
        return ''
    endif
endfunction


" SECTION: Search Settings{{{2
set hlsearch                " search highlighting
set incsearch               " incremental search
set showmatch               " Cursor shows matching
set ignorecase              " ignore case when searching
set smartcase               " ignore case if search pattern is all lowercase,case-sensitive otherwise


" SECTION: Filetype Settings{{{2
filetype on           " Enable filetype detection
filetype indent on    " Enable filetype-specific indenting
filetype plugin on    " Enable filetype-specific plugins


" SECTION: Color Settings{{{2
if has("gui_running")
" GUI color and font settings
    set guifont=Osaka-Mono:h20
"    set background=dark 
"    set t_Co=256          " 256 color mode
    set cursorline        " highlight current line
"    colors moria
    "colors wombat256
else
" terminal color settings
"    colors vgod
endif
set background=dark 
set t_Co=256          " 256 color mode
colors moria


" SECTION: Tab Page Settings{{{2
map <C-t><C-t> :tabnew<CR>
" new tab
map <C-t><C-w> :tabclose<CR>
" close tab

map <C-]> gT
" go to prev tab 
map <C-\> gt
" go to next tab


" SECTION: Window Settings{{{2
set wmw=0                     " set the min width of a window to 0 so we can maximize others 
set wmh=0                     " set the min height of a window to 0 so we can maximize others

nmap <C-J> <C-W>j<C-W>_
" move to and maximize the below split 
nmap <C-K> <C-W>k<C-W>_
" move to and maximize the above split 
nmap <C-H> <c-w>h<c-w><bar>
" move to and maximize the left split 
nmap <C-L> <c-w>l<c-w><bar>
" move to and maximize the right split


" SECTION: Encoding Settings{{{2
set encoding=utf-8                                  
set termencoding=utf-8
set fileencoding=utf-8
set fileencodings=ucs-bom,utf-8,big5,latin1

fun! ViewUTF8()
        set encoding=utf-8                                  
        set termencoding=big5
endfun

fun! UTF8()
        set encoding=utf-8                                  
        set termencoding=big5
        set fileencoding=utf-8
        set fileencodings=ucs-bom,big5,utf-8,latin1
endfun

fun! Big5()
        set encoding=big5
        set fileencoding=big5
endfun


" SECTION: <TAB> Settings{{{2
set expandtab               "replace <TAB> with spaces
set softtabstop=4 
set shiftwidth=4 

set autoindent              " auto indentation
set copyindent              " copy the previous indentation on autoindenting
set smarttab                " insert tabs on the start of a line according to context

" allow multiple indentation/deindentation in visual mode
vnoremap < <gv
vnoremap > >gv

au FileType make set noexpandtab


" SECTION: Sound Settings{{{2
set noerrorbells            " disable sound on errors
"set novisualbell            " disable visual bell
"set t_vb=


" SECTION: Other Settings{{{2
"Restore cursor to file position in previous editing session
set viminfo='10,\"100,:20,%,n~/.viminfo
au BufReadPost * if line("'\"") > 0|if line("'\"") <= line("$")|exe("norm '\"")|else|exe "norm $"|endif|endif

" set leader to ,
let mapleader=","
let g:mapleader=","

"" open the error console
"map <leader>cc :botright cope<CR> 
"" move to next error
"map <leader>] :cn<CR>
"" move to the prev error
"map <leader>[ :cp<CR>


" ,/ toggles search highlighting
nmap <leader>/ :set hls!<CR>

"" Bash like keys for the command line
cnoremap <C-A>      <Home>
cnoremap <C-E>      <End>
cnoremap <C-K>      <C-U>

" ,p toggles paste mode
nmap <leader>p :set paste!<BAR>set paste?<CR>


" SECTION: LargeFiles Settings{{{2
" LargeFile: Sets up an autocmd to make editing large files work with celerity
"   Author:		Charles E. Campbell, Jr.
"   Date:		Sep 23, 2008
"   Version:	4
" GetLatestVimScripts: 1506 1 :AutoInstall: LargeFile.vim

" ---------------------------------------------------------------------
" Load Once: {{{3
if exists("g:loaded_LargeFile") || &cp
 finish
endif
let g:loaded_LargeFile = "v4"
let s:keepcpo          = &cpo
set cpo&vim

" ---------------------------------------------------------------------
" Commands: {{{3
com! Unlarge			call s:Unlarge()
com! -bang Large		call s:LargeFile(<bang>0,expand("%"))

" ---------------------------------------------------------------------
"  Options: {{{3
if !exists("g:LargeFile")
 let g:LargeFile= 20	" in megabytes
endif

" ---------------------------------------------------------------------
"  LargeFile Autocmd: {{{3
" for large files: turns undo, syntax highlighting, undo off etc
" (based on vimtip#611)
augroup LargeFile
 au!
 au BufReadPre * call <SID>LargeFile(0,expand("<afile>"))
 au BufReadPost *
 \  if &ch < 2 && (getfsize(expand("<afile>")) >= g:LargeFile*1024*1024 || getfsize(expand("<afile>")) == -2)
 \|  echomsg "***note*** handling a large file"
 \| endif
augroup END

" ---------------------------------------------------------------------
" s:LargeFile: {{{4
fun! s:LargeFile(force,fname)
"  call Dfunc("LargeFile(force=".a:force." fname<".a:fname.">)")
  if a:force || getfsize(a:fname) >= g:LargeFile*1024*1024 || getfsize(a:fname) <= -2
   syn clear
   let b:eikeep = &ei
   let b:ulkeep = &ul
   let b:bhkeep = &bh
   let b:fdmkeep= &fdm
   let b:swfkeep= &swf
   set ei=FileType
   setlocal noswf bh=unload fdm=manual ul=-1
   let fname=escape(substitute(a:fname,'\','/','g'),' ')
   exe "au LargeFile BufEnter ".fname." set ul=-1"
   exe "au LargeFile BufLeave ".fname." let &ul=".b:ulkeep."|set ei=".b:eikeep
   exe "au LargeFile BufUnload ".fname." au! LargeFile * ". fname
   echomsg "***note*** handling a large file"
  endif
"  call Dret("s:LargeFile")
endfun

" ---------------------------------------------------------------------
" s:Unlarge: this function will undo what the LargeFile autocmd does {{{4
fun! s:Unlarge()
"  call Dfunc("s:Unlarge()")
  if exists("b:eikeep") |let &ei  = b:eikeep |endif
  if exists("b:ulkeep") |let &ul  = b:ulkeep |endif
  if exists("b:bhkeep") |let &bh  = b:bhkeep |endif
  if exists("b:fdmkeep")|let &fdm = b:fdmkeep|endif
  if exists("b:swfkeep")|let &swf = b:swfkeep|endif
  syn on
  doau FileType
"  call Dret("s:Unlarge")
endfun

" ---------------------------------------------------------------------
"  Restore: {{{3
let &cpo= s:keepcpo
unlet s:keepcpo





" SECTION: Programming Settings{{{1
"============================================================
"

" SECTION: Enable omni completion. (Ctrl-X Ctrl-O){{{2
autocmd FileType html,markdown      setlocal omnifunc=htmlcomplete#CompleteTags
autocmd FileType javascript         setlocal omnifunc=javascriptcomplete#CompleteJS
autocmd FileType xml                setlocal omnifunc=xmlcomplete#CompleteTags
autocmd FileType css                setlocal omnifunc=csscomplete#CompleteCSS
autocmd FileType c                  setlocal omnifunc=ccomplete#Complete
autocmd FileType java               setlocal omnifunc=javacomplete#Complete

" make CSS omnicompletion work for SASS and SCSS
autocmd BufNewFile,BufRead *.scss   setlocal ft=scss.css
autocmd BufNewFile,BufRead *.sass   setlocal ft=sass.css

" actionscript 3 file type
autocmd BufNewFile,BufRead *.as     setlocal ft=actionscript

" C/C++ specific settings
autocmd FileType c,cpp,cc  set cindent comments=sr:/*,mb:*,el:*/,:// cino=>s,e0,n0,f0,{0,}0,^-1s,:0,=s,g0,h1s,p2,t0,+2,(2,)20,*30

" Ctrl-[ jump out of the tag stack (undo Ctrl-])
"map <C-[> <ESC>:po<CR>

" ,g generates the header guard
"map <leader>g :call IncludeGuard()<CR>
"fun! IncludeGuard()
"   let basename = substitute(bufname(""), '.*/', '', '')
"   let guard = '_' . substitute(toupper(basename), '\.', '_', "H")
"   call append(0, "#ifndef " . guard)
"   call append(1, "#define " . guard)
"   call append( line("$"), "#endif // for #ifndef " . guard)
"endfun


" use syntax complete if nothing else available
if has("autocmd") && exists("+omnifunc")
  autocmd Filetype *
              \        if &omnifunc == "" |
              \                setlocal omnifunc=syntaxcomplete#Complete |
              \        endif
endif



" SECTION: Plugin Settings{{{1
"============================================================
"


" ------- vim-latex - many latex shortcuts and snippets {

" IMPORTANT: win32 users will need to have 'shellslash' set so that latex
" can be called correctly.
set shellslash
set grepprg=grep\ -nH\ $*
" OPTIONAL: Starting with Vim 7, the filetype of empty .tex files defaults to
" 'plaintex' instead of 'tex', which results in vim-latex not being loaded.
" The following changes the default filetype back to 'tex':
let g:tex_flavor='latex'

"}


" --- AutoClose - Inserts matching bracket, paren, brace or quote 
" fixed the arrow key problems caused by AutoClose
"if !has("gui_running")        
"   set term=linux
"   imap OA <ESC>ki
"   imap OB <ESC>ji
"   imap OC <ESC>li
"   imap OD <ESC>hi
"
"   nmap OA k
"   nmap OB j
"   nmap OC l
"   nmap OD h
"endif


" --- pydiction
let g:pydiction_location = $HOME."/.vim/bundle/pydiction/complete-dict"


" --- Command-T
"let g:CommandTMaxHeight = 15


" --- SuperTab
"let g:SuperTabDefaultCompletionType = "context"


" --- taglist
"nnoremap <silent> <F8> :TlistToggle<CR>
"let Tlist_Exit_OnlyWindow = 1
"let Tlist_GainFocus_On_ToggleOpen = 1


" --- tagbar
nnoremap <silent> <F8> :TagbarToggle<CR>


" --- conque
let g:ConqueTerm_TERM = 'xterm'


" --- ropevim
"if has('python')
"    let $PYTHONPATH .= ":".$HOME."/.vim/ropevim/pylibs"
"    source $HOME/.vim/ropevim/src/ropevim/ropevim.vim
"endif



" --- pylint
"   To disable calling Pylint every
"   time a buffer is saved put into .vimrc file
let g:pylint_onwrite = 0
"   Displaying code rate calculated by Pylint can be avoided by setting
let g:pylint_show_rate = 0
"   Openning of QuickFix window can be disabled with
"       let g:pylint_cwindow = 0



" vim: set fdm=marker:
