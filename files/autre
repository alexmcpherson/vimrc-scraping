" my .vimrc
" vim: nowrap fdm=marker

" Folding cheet sheet
" zR    open all folds
" zM    close all folds
" za    toggle fold at cursor position
" zj    move down to start of next fold
" zk    move up to end of previous fold

" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible
filetype off " required by vundler

set rtp+=~/.vim/vundle.git/
call vundle#rc()

" bundles {{{1
Bundle 'tpope/vim-fugitive'
Bundle 'tpope/vim-markdown'
Bundle 'vim-scripts/Command-T'
Bundle 'autre/Rainbow-Parenthsis-Bundle'
Bundle 'vim-scripts/matchit.zip'
Bundle 'nuclearsandwich/vim-latex'
Bundle 'altercation/vim-colors-solarized'
Bundle 'ervandew/supertab'
Bundle 'vim-scripts/slimv.vim'
Bundle 'wlangstroth/vim-racket'
Bundle 'Lokaltog/vim-powerline'
Bundle 'scrooloose/nerdtree'
Bundle 'majutsushi/tagbar'
Bundle 'scrooloose/syntastic'
"}}}

filetype on " bring it back on

let s:os = substitute(system('uname'), '\n', '', '')

" General settings {{{1
set encoding=utf-8
set fileencoding=utf-8
set fileformat=unix
set history=1000
set title
set dir=/tmp
set backup
exec "set backupdir=" . "$HOME/.bak"
set autoread " Set to auto read when a file is changed from the outside
set ruler " show the cursor position all the time
set showcmd " display incomplete commands
set backspace=indent,eol,start " allow backspacing over everything in insert mode

set wildmenu " wmenu for file/command completion
set wildignore+=classes,build,.hg,.git,*.class,*.jar,*.o,*.hi,*.pyc,*~
set wildchar=<TAB>
set shellslash " use / rather than \ for filenames

set hls " hilight searches by default
set incsearch " do incremental searching
set ignorecase " case insensitive search
set smartcase " "case-sensitive if there are upper-case letters in the search pattern
set magic "Set magic on, for regular expressions

set showmatch " bouncy parens, must have
set nolazyredraw " don't redraw while executing macros
set splitright
set list listchars=tab:▸\ ,trail:·
set ttymouse=xterm2 " magic stuff to enable the mouse
set mouse=a
set mousemodel=popup
set scrolloff=2 " minimum lines between cursor and window edge
set laststatus=2
set statusline=\ %m%f%r%h\ %y\ \ %=%(%l,\ %c%)
set statusline+=\ %{exists('g:loaded_fugitive')?fugitive#statusline():''}

set tabstop=8 " how many spaces for one tab?
set softtabstop=4 " emulating tab insertion
set shiftwidth=4 " number of spaces for each indent
set expandtab " turn tabs into spaces
set cindent
set autoindent
set clipboard+=unnamed " Put contents of unnamed register in system clipboard

au FocusLost * :wa " save file when losing focus
" }}}

" Gui fonts & colors {{{1
if has('gui_running')
  " Remove GUI menu and toolbar
  set guioptions-=m
  set guioptions-=T

  set t_Co=256

  if s:os == "Darwin"
    set guifont=Inconsolata:h16
  else
    set guifont=Inconsolata\ 13
  endif
endif

set background=dark
colorscheme molokai
" }}}

" Basic mappings {{{
" With a map leader it's possible to do extra key combinations
" like <leader>w saves the current file
let mapleader = ","
let maplocalleader = "\\"

map == :call IndentStayPut()<cr>

" Fast saving/opening
nmap <leader>w :w!<cr>
nmap <leader>q :q!<cr>
nmap <leader>wq :wq<cr>
nmap <leader>tt :tabe<cr>

" no fucking arrows
map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>
imap <up> <nop>
imap <down> <nop>
imap <left> <nop>
imap <right> <nop>

" Move by screen lines rather than actual lines
map j gj
map k gk
map <S-Down> <Down>

inoremap <F1> <ESC>
nnoremap <F1> <ESC>
vnoremap <F1> <ESC>

" Bash like keys for the command line
cnoremap <c-a> <home>
cnoremap <c-e> <end>
cnoremap <c-k> <c-U>

cnoremap <c-p> <up>
cnoremap <c-n> <down>

" Smart way to move between windows
map <c-j> <c-w>j
map <c-k> <c-w>k
map <c-h> <c-w>h
map <c-l> <c-w>l

" work around the breakage between tmux and command-t
" when issuing ,t and then arrow key.
map <Esc>[B <Down>
"}}}

" Highlighting, syntax, indentation {{{
filetype off " necessary on some Linux distros for pathogen to properly load bundles
filetype on
filetype plugin on
filetype indent on
syntax on
" }}}

" Plugin stuff {{{

" command-t
nmap <silent> ,r :CommandT<cr>
let g:CommandTMaxHeight=20

" solarized config
let g:solarized_termtrans=1
let g:solarized_termcolors=256
let g:solarized_contrast="high"
let g:solarized_visibility="high"

let g:tex_flavor='latex'

" slimv/lisp
if s:os == "Darwin"
    let g:slimv_python='/usr/local/bin/python'
    let g:slimv_swank_cmd = '!osascript -e "tell application \"Terminal\" to do script \"sbcl --load ~/.vim/bundle/slimv.vim/slime/start-swank.lisp\""'
else
    let g:slimv_python='/usr/bin/python2'
endif

" tagbar
if s:os == "Darwin"
    let g:tagbar_ctags_bin='/usr/local/bin/ctags'
endif

let g:tagbar_width=28 " Default is 40, seems too wide
" Display panel with \y (or ,y)
noremap <silent> <Leader>y :TagbarToggle<cr>

" syntastic
let g:syntastic_enable_signs=1
let g:syntastic_quiet_warnings=1
" }}}

" Language specific {{{
au FileType c setl softtabstop=8 shiftwidth=8 noet
au FileType sh setl softtabstop=8 shiftwidth=8 noet
au FileType python :ToggleRaibowParenthesis
au FileType javascript :ToggleRaibowParenthesis
au FileType lisp :ToggleRaibowParenthesis
au BufRead,BufNewFile *.json setl filetype=javascript
au FileType lisp,scheme setlocal equalprg=lispindent.lisp " proper lisp indentation
au FileType html setl softtabstop=2 shiftwidth=2
au FileType html set omnifunc=htmlcomplete#CompleteTags
au FileType xml setl softtabstop=2 shiftwidth=2
au FileType tex setl grepprg=grep\ -nH\ $* sw=2 iskeyword+=:
au FileType css set omnifunc=csscomplete#CompleteCSS
" }}}

" Various helpers {{{
" on .vimrc change, auto source
autocmd! Bufwritepost $MYVIMRC source $MYVIMRC

" When editing a file, always jump to the last known cursor position.
autocmd BufReadPost *
      \ if line("'\"") > 0 && line("'\"") <= line("$") |
      \   exe "normal! g`\"" |
      \ endif

" reformat file
fun! IndentStayPut()
  let oldLine=line('.')
  normal(gg=G)
  execute ':' . oldLine
endf
" }}}
