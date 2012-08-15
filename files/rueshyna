
call pathogen#infect('~/.vim/bundle')
syntax on
filetype plugin indent on

colorscheme rues

set shell=/bin/bash     " Use bash shell
set showcmd             " Show (partial) command in status line.
set showmatch           " Show matching brackets.
set smartcase           " Do smart case matching
set nu                  " Line number
set list                " Print unprintable characters
set listchars=tab:>\.,trail:\.,eol:¬,nbsp:% " set unprintable characters
set expandtab           " Set tag to space
"set mouse=a
set enc=utf8
"set spell spelllang=en_us

ca tb tabnew

" map key
map j gj
map k gk
nmap + <C-W>+
nmap - <C-W>-
nmap <Right>  <C-w>>
nmap <Left>  <C-w><

" set indent
set sw=2
set cino=
set autoindent          " Auto indent

" tagbar config
let g:tagbar_autofocus = 2
let g:tagbar_width = 30

" set folding
set foldnestmax=3
set foldcolumn=3
loadview

" vim for pig
augroup filetypedetect 
    au BufNewFile,BufRead *.pig set filetype=pig syntax=pig 
augroup END 

" vim for latex
let g:tex_flavor='latex'

" set snipmate
let g:snippets_dir="~/.vim/bundle/snipmate/snippets/,~/.vim/custom/snipmate/"
