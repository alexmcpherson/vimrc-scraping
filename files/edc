filetype off
filetype plugin indent on
set cinoptions=:0,(0,u0,W1s
set modelines=5
set formatoptions+=r
nmap <D-e> :NERDTree<CR>
nmap <D-E> :NERDTree 

"load pathogen
call pathogen#infect()

"coffee
"au BufWritePost *.coffee silent CoffeeMake! -b | cwindow | redraw!
au BufNewFile,BufReadPost *.coffee setl sw=4 ts=4 expandtab

"window 
let mapleader = ","
nmap <Leader>s :new<CR>
nmap <Leader>v :vne<CR>
nmap <Leader>o <C-w>o
nmap <Leader>c <C-w>c
nmap <Leader>j <C-w>j
nmap <Leader>k <C-w>k
nmap <Leader>h <C-w>h
nmap <Leader>l <C-w>l
nmap <Leader>t <C-w>t
nmap <Leader>p <C-w>p
nmap <Leader>x <C-w>x
"color override
hi Comment guifg=#aa4444 gui=italic
hi CursorColumn guibg=#292929 guifg=#ffffff ctermbg=233 ctermfg=230

"basic setup
set hidden
set ignorecase
set showmatch
"Command-t
nnoremap <silent> <Leader>t :CommandT<CR>
nnoremap <silent> <Leader>T :CommandTBuffer<CR>
set nobackup
set nocompatible
set cursorcolumn
syntax on
"color override
hi Comment guifg=#aa4444 gui=italic
hi CursorColumn guibg=#292929 guifg=#ffffff ctermbg=233 ctermfg=230
