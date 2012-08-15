" ============================================================================
" Author: bentonq <bentonq@gmail.com>
" Created: 2012/06/15
" Modified: 2012/06/18
" ============================================================================

" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" General
" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Define the <leader> at the very beginning.
let mapleader=","
let g:mapleader=","

" When started as 'evim', evim.vim will already have done there settings.
if v:progname =~?"evim"
    finish
endif

" Not be compatible with vi.
set nocompatible

" Don't use Ex-mode, use Q for formatting.
map Q gq

" Make backspace working like 'backspace' in edit mode.
set backspace=indent,eol,start

" Enable file type dectection and loading the plugin and indent file.
filetype plugin indent on

" Don't pollute any folders.
set nobackup
set nowritebackup
set noswapfile

" Reload the file automatic when the file have been modified by other program.
set autoread
set autowrite

" Max history item number.
set history=50

" Always use utf-8 as character encoding.
set encoding=utf-8
set fileencoding=utf-8
set fileencodings=utf-8

" Fix gui menu garbled.
source $VIMRUNTIME/delmenu.vim
source $VIMRUNTIME/menu.vim

" Fix console message garbled.
language messages en_US.utf-8

" Restore cursor position
autocmd BufReadPost *
\ if line("'\"") > 1 && line("'\"") <= line("$") |
\   exe "normal! g`\"" |
\ endif

" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Layout Options
" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Show the line and column number of the cursor position.
set ruler

" Show (partial) command in the last line of the screen.
set showcmd

" Omni command will show a menu
set wildmenu

" Long line wrap settings.
set nowrap

" Don't hightlight current line.
set nocul

" Show line number.
set nu

" Completion window options.
set completeopt=menuone,menu,longest

" Hide scrollbar.
set guioptions-=r
set guioptions-=R
set guioptions-=l
set guioptions-=L
set guioptions-=b
set guioptions-=B

" Hide toolbar.
set guioptions-=t
set guioptions-=T

" Enable mouse in all modes.
if has('mouse')
    set mouse=a
endif

" Move among windows hotkey.
nnoremap <silent><C-h> <C-W>h
nnoremap <silent><C-l> <C-W>l
nnoremap <silent><C-j> <C-W>j
nnoremap <silent><C-k> <C-W>k

" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Edit Options
" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Tab settings.
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
set smarttab

" Smartindnet services well, don't need cindent.
set smartindent

" Keep cursor 5 lines away from the top or the bottom .
set scrolloff=5

" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Search Options
" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Incremental search.
set incsearch

" Hightlight searching keyword.
set hlsearch

" Don't ignore case when search and completion.
set noignorecase
set infercase

" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Theme Options
" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Enable syntax highlighting.
syntax enable

" Colors
let g:lucius_style="dark_dim"
colorscheme lucius

" Font family and size.
set guifont=Consolas:h11:cANSI

" Style of the command 'set list'.
set lcs=tab:@@,trail:^,eol:$

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Tags
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Gen tag command.
map <C-F12> :silent !ctags -R --c++-kinds=+p --fields=+iaS --extra=+q --language-force=c++ <CR><CR>

" Search 'tags' from the current folder up to the '/'.
set tags=./tags;

" Add pre-generate tags.
if has('win32')
    set tags+=$VIM/.vimdata/tags/cpp
    set tags+=$VIM/.vimdata/tags/gl
else
    set tags+=~/.vimdata/tags/cpp
    set tags+=~/.vimdata/tags/gl
endif

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Plugins
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" NERD_tree
let g:NERDTreeWinPos="right"
nnoremap <silent><F3> :NERDTreeToggle<CR>

" omnicppcomplete
let OmniCpp_DefaultNamespaces=["std", "_GLIBCXX_STD"]
let OmniCpp_ShowPrototypeInAbbr=1
let OmniCpp_MayCompleteScope=1
let OmniCpp_LocalSearchDecl=1

" tagbar
let g:tagbar_left=1
let g:tagbar_sort=0
nnoremap <silent><F2> :TagbarToggle<CR>

" fswitch
nnoremap <silent><F4> :FSHere<CR>
nnoremap <silent><s-F4> :FSSplitRight<CR>

" supertab
let g:SuperTabMappingForward='<s-tab>'
let g:SuperTabMappingBackward='<tab>'

" jQuery syntax
au BufRead,BufNewFile jquery.*.js set ft=javascript syntax=jquery
