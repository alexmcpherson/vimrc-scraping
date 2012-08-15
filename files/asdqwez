set nocompatible      " We're running Vim, not Vi!
set shiftwidth=4
set softtabstop=4
set expandtab
set number
set cindent
set smartindent
set autoindent
set guioptions=aAce
set modelines=0

syntax on             " Enable syntax highlighting
filetype on           " Enable filetype detection
filetype indent on    " Enable filetype-specific indenting
filetype plugin on    " Enable filetype-specific plugins
filetype plugin indent on

set nocp
call pathogen#infect()
call pathogen#helptags()

colorscheme xoria256

"sparkup 
let g:sparkupExecuteMapping='<D-e>'
"escape is too far 
:imap jj <Esc>
"easier increment/decrement
nnoremap + <C-a>
nnoremap _ <C-x>
"use comma for a leader key
let mapleader = ","
"one shift less
nnoremap ; :
"new vert split and switch to it
nnoremap <leader>w <C-w>v<C-w>l
"map comment key
map <D-/> gcc
"easier go to line
:nmap <CR> G
"faster quotes manipulation
map ciq ci"
map daq da"
map diq di"
"cmd+number for tabs
map <D-1> :tabn 1<CR>
map <D-2> :tabn 2<CR>
map <D-3> :tabn 3<CR>
map <D-4> :tabn 4<CR>
map <D-5> :tabn 5<CR>
map <D-6> :tabn 6<CR>
map <D-7> :tabn 7<CR>
map <D-8> :tabn 8<CR>
map <D-9> :tabn 9<CR>
"TextMate-like cmd+enter
imap <D-Enter> <Esc>o
"open html in safari
nmap <leader>sf :!open % -a Safari<CR>
"open file under cursor in a tab by default
map gf <c-w>gf
"remap nerdtree toggle
nmap <D-D> :execute 'NERDTreeToggle'<CR> 
let NERDTreeShowBookmarks=1
"indent 
map   <silent> <leader>aa mmgg=G`m^
imap   <silent> <leader>aa mmgg=G`m^
" Use control-[hjkl] to select the active split
nmap <silent> <c-k> :wincmd k<CR>                                                                                                                       
nmap <silent> <c-j> :wincmd j<CR>                                                                                                                       
nmap <silent> <c-h> :wincmd h<CR>                                                                                                                       
nmap <silent> <c-l> :wincmd l<CR>
" TextMate-like braces
inoremap {<cr> {<cr>}<c-o>O
inoremap [<cr> [<cr>]<c-o>O<tab>
inoremap (<cr> (<cr>)<c-o>O<tab>
" better html li indent
:let g:html_indent_inctags = "li,ul"
" Edit and reload .vimrc
nmap <leader>vr :tabedit $MYVIMRC<CR>
map <silent> <leader>vrr :source $MYVIMRC<CR>:filetype detect<CR>:exe ":echo 'vimrc reloaded'"<CR>
" command hjkl in insert mode
imap <D-h> <Left>
imap <D-j> <Down>
imap <D-k> <Up>
imap <D-l> <Right>
"ruby
autocmd Filetype ruby setlocal ts=2 sts=2 sw=2
map <Leader>r :w! <bar> !ruby %<CR>
