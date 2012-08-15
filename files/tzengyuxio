" $Id$
"
" Maintainer:   Tzeng Yuxio <tzengyuxio(at)gmail(dot)com>
" Last Change:  2012 Apr 18
"
" To use it, copy it to
"     for Unix and OS X: $HOME/.vimrc
"  for MS-DOS and Win32: $HOME\_vimrc or $VIM\_vimrc

" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible               " be iMproved

" Configure Bundles
"-----------------------------------------------------------------------

filetype off                   " required!

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" let Vundle manage Vundle
" required! 
Bundle 'gmarik/vundle'

" My Bundles here:
"
" original repos on github
Bundle 'altercation/vim-colors-solarized'
Bundle 'Lokaltog/vim-powerline'
Bundle 'scrooloose/nerdtree'
Bundle 'scrooloose/nerdcommenter'
Bundle 'ervandew/supertab'
Bundle 'kien/ctrlp.vim'
Bundle 'Lokaltog/vim-easymotion'
Bundle 'jistr/vim-nerdtree-tabs'
Bundle 'nvie/vim-flake8'
" vim-scripts repos
" non github repos

filetype indent plugin on     " required!
"
" Brief help
" :BundleList          - list configured bundles
" :BundleInstall(!)    - install(update) bundles
" :BundleSearch(!) foo - search(or refresh cache first) for foo
" :BundleClean(!)      - confirm(or auto-approve) removal of unused bundles
"
" see :h vundle for more details or wiki for FAQ
" NOTE: comments after Bundle command are not allowed..

" Setting Options 
"-----------------------------------------------------------------------

" auto reload vimrc when editing it
autocmd! bufwritepost .vimrc source ~/.vimrc

set backspace=indent,eol,start

set nobackup      " do not keep a backup file
set noswapfile
set nowritebackup " Make a backup before overwriting a file.

" Can be overruled by using "\c" or "\C" in the pattern. ex: \/Cfoobar
set ignorecase    " ignore case when searching
set incsearch     " do incremental searching
set hlsearch      " highlight search things

set showmatch     " show matching bracets"
set matchtime=3   " how many tenths of a second to blink (default 5)

set foldmethod=syntax
set foldlevel=99

set switchbuf=usetab,newtab

" Colorscheme and GUI
"-----------------------------------------------------------------------

syntax on
if has('gui_running')
  set background=light
else
  set background=dark
endif
let g:solarized_termcolors=256
colorscheme solarized

set showtabline=2 " always display tab page labels
set number        " show line number
set laststatus=2  " always show the status line
set showcmd       " display incomplete commands
set cmdheight=2   " the height of command bar is 2 lines

if has('gui_running')
  autocmd GUIEnter * winpos 0 0 | set lines=999 columns=9999
  set guifont=Menlo:h12,Consolas:h12:cANSI,Monaco:h12
  set guioptions-=m "Remove menubar"
  set guioptions-=T "Remove toolbar"
  " fix the gui menu encoding problem
  if has("gui_win32")
    source $VIMRUNTIME/delmenu.vim
    source $VIMRUNTIME/menu.vim
  endif
endif

" Indentation
"-----------------------------------------------------------------------

" indent switches
set autoindent  " ai
"set smartindent " si
"set cindent     " cin - $VIMRUNTIME/indent/c.vim has included this
"set copyindent  " ci  - ci means copyindent, not cindent

" tabstop options
"   default : ts=8 sts=0 sw=8 noet nosta
"-----------------------------------------------------------------------
" ts  | tabstop     | Number of spaces that a <Tab> counts for.
" sts | softtabstop | Number of spaces that a <Tab> counts for <BS>.
" sw  | shiftwidth  | Number of spaces to use for step of (auto)indent.
" et  | expandtab   | Use some spaces to insert a <Tab>.
" sta | smarttab    | <Tab> inserts blanks according to sw, ts, or sts.
" tw  | textwidth

au BufNewFile,BufRead *.json set ft=javascript

au FileType vim    setlocal ts=2 et sw=2
au FileType python setlocal ts=8 et sw=4 sts=4 tw=79 foldmethod=indent

set modeline

" Language and Localization
"-----------------------------------------------------------------------

" locale language
language zh_TW.UTF-8

" vim encoding and file encoding list
set encoding=utf-8
set fileencodings=ucs-bom,utf-8,japan,prc,taiwan,latin1

" file and terminal encoding
set fileencoding=utf-8
set termencoding=utf-8

" Key Mapping
"-----------------------------------------------------------------------

" Don't use ALT keys for menus.
set winaltkeys=no

" Don't use Ex mode, use Q for formatting
map Q gq
" Press ENTER to start typing commands, just like online-game. ;)
map <CR> :

noremap <silent> <F2> a<C-R>=strftime("%Y-%m-%d %H:%M:%S")<CR><Esc>
noremap <silent> <F3> :NERDTreeTabsToggle<CR>
noremap <silent> <F4> za
noremap <silent> <F5> :set hlsearch!<CR>
" Toggle line numbers and fold column for easy copying:
noremap <silent> <F6> :set nonumber!<CR>:set foldcolumn=0<CR>

inoremap <silent> <F2> <C-R>=strftime("%Y-%m-%d %H:%M:%S")<CR>

" close buffer, window or tab
noremap <Leader>cb :bd<CR>
noremap <Leader>ct :tabclose<CR>
noremap <Leader>cw <C-W>c

" close all others, but keep only current
noremap <Leader>ot :tabonly<CR>   " only one tab left
noremap <Leader>ow <C-W>o         " only one window left

" easy version without keeping cursor position
vmap <Tab> >gv
vmap <S-Tab> <gv

" Reference for one control in different mode.
"noremap <C-Tab> <C-W>w
"inoremap <C-Tab> <C-O><C-W>w
"cnoremap <C-Tab> <C-C><C-W>w
"onoremap <C-Tab> <C-C><C-W>w

" Plugin Configurations
"-----------------------------------------------------------------------

"let g:Powerline_symbols='unicode'

