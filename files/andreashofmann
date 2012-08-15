" no vi compatibility
set nocompatible

" vundle setup
filetype off
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" vundle bundles
Bundle 'gmarik/vundle'
Bundle 'molokai'
Bundle 'pangloss/vim-javascript'
Bundle 'hallettj/jslint.vim'
Bundle 'michaeljsmith/vim-indent-object'
Bundle 'tpope/vim-fugitive'
Bundle 'kien/ctrlp.vim'
Bundle 'SirVer/ultisnips'
Bundle 'rstacruz/vim-ultisnips-css'
Bundle 'ap/vim-css-color'

" leader is ,
let mapleader=","

" vundle post setup
filetype plugin indent on

" enable syntax highlighting
syntax enable

" show line and column numbers
set number
set ruler

" Standard encoding
set encoding=utf8

" EOL character preference
set ffs=unix,dos,mac

" Use spaces instead of tabs
set expandtab
set smarttab
set shiftwidth=4
set tabstop=4

" Indentation
set ai
set si
set wrap

" show unwanted whitespace
set list listchars=tab:>-,trail:·,extends:>

" remove unwanted whitespace on save
autocmd BufWritePre * :%s/\s\+$//e

" color scheme
set t_Co=256
colorscheme molokai

" map ctrl+p to ,t
nnoremap <silent> <leader>t :CtrlP<cr>
