set nocompatible

call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

filetype off " force reloading *after* pathogen loaded
filetype plugin indent on " enable detection, plugins and indenting in one step
syntax on

set nowrap
set tabstop=4
set number
set shiftwidth=4
set expandtab
set shiftround
set showmatch
set ignorecase
set smartcase
set smarttab
set hlsearch
set incsearch
set backspace=2
set ruler
set scrolloff=4

set mouse=a

set fileformats="unix,dos,mac"
set formatoptions+=1

nnoremap / /\v
vnoremap / /\v

set undolevels=1000
set wildignore=*.swp,*.bak,*.pyc,*.o,*.class
set title
set visualbell
set noerrorbells

set termencoding=utf-8
set encoding=utf-8

set undolevels=1000
set undodir=~/.vim/.undo,/tmp

set nobackup
set noswapfile

set wildmenu
set wildmode:list,full

colorscheme bensday

nnoremap ; :

map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

nmap <silent> ,/ :nohlsearch<CR>

nnoremap q ZZ<Enter>
nnoremap Q :q!<Enter>

nnoremap j gj
nnoremap k gk

" Swap implementations of ` and ' jump to markers
" By default, ' jumps to the marked line, ` jumps to the marked line and
" column, so swap them
nnoremap ' `
nnoremap ` '

nmap <leader>y "+y
nmap <leader>Y "+yy
nmap <leader>p "+p
nmap <leader>P "+P

inoremap jk <Esc>

cmap w!! w !sudo tee % >/dev/null

let g:clang_use_library = 1
