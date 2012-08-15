" Load pathogen first
let g:pathogen_disabled = [ 'pathogen' ]    " don't load self 
call pathogen#infect()                      " load everyhting else
call pathogen#helptags()                    " load plugin help files

set nocompatible
set term=linux

" Gui
set guioptions-=aegimrLtT
set encoding=utf8

" syntax highlighting
syntax on
filetype on                 " enables filetype detection
filetype plugin on   " enables filetype specific plugins

" Keys
let mapleader = ","
let g:mapleader = ","

map <c-j> <c-w>j
map <c-k> <c-w>k
map <c-l> <c-w>l
map <c-h> <c-w>h

map <c-q> :bd<CR>
map <c-n> :bp<CR>
map <c-m> :bn<CR>

imap <C-H> <Left>
imap <C-J> <Down>
imap <C-K> <Up>
imap <C-L> <Right>

cmap <C-H> <Left>
cmap <C-J> <Down>
cmap <C-K> <Up>
cmap <C-L> <Right>

" Delete trailing whitespace
map <leader>ws :%s/\s*$//<CR>

" Indentation
set autoindent
set tabstop=4 softtabstop=4 shiftwidth=4 expandtab

" Moving
set scrolloff=5
set sidescroll=5

" Searching
set incsearch
set nohlsearch

" Visual
highlight Normal ctermbg=black
set cursorline
set t_Co=256

set number
set ruler
set wrap

let g:Powerline_symbols = 'unicode'
set laststatus=2

" colorpack
set background=dark
colorscheme wombat256

" => Moving around, tabs and buffers
"    ===============================
"
" Close all the buffers
map <Leader>ba :1,300 bd!<cr>

" When pressing <leader>cd switch to the directory of the open buffer
map <Leader>cd :cd %:p:h<cr>

" lusty
set hidden

" supertab
au FileType python set omnifunc=pythoncomplete#Complete
let g:SuperTabDefaultCompletionType = "context"
set completeopt=menuone,longest,preview

" => Files, backups and undo
"    =======================
"
" Turn backup off
set nobackup
set nowb
set noswapfile

" Persistent undo
try
    if MySys() == "windows"
      set undodir=C:\Windows\Temp
    else
      set undodir=~/.vim/undodir
    endif

    set undofile
catch
endtry

" Gundo
nnoremap <F5> :GundoToggle<CR>

autocmd FileType python map <buffer> <leader>88 :call Flake8()<CR>

" Utilities
" ==========
"
" When vimrc is edited, reload it
autocmd! bufwritepost .vimrc source ~/.vimrc
