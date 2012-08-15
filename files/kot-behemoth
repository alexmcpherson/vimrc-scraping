" System vimrc file for MacVim
"
" Maintainer:	Bjorn Winckler <bjorn.winckler@gmail.com>
" Last Change:	Sat Aug 29 2009

set nocompatible

" The default for 'backspace' is very confusing to new users, so change it to a
" more sensible value.  Add "set backspace&" to your ~/.vimrc to reset it.
set backspace+=indent,eol,start

" Disable localized menus for now since only some items are translated (e.g.
" the entire MacVim menu is set up in a nib file which currently only is
" translated to English).
set langmenu=none

filetype off

call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

set guifont=Menlo:h13
set go-=T
colo wombat256mod
syntax on
filetype plugin indent on
set tabstop=4
set smarttab
set shiftwidth=4
set autoindent
set expandtab

nmap <silent> ,t :CommandT<CR>
