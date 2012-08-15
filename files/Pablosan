" Define buildfile as a ruby file
au BufReadPost buildfile set filetype=ruby

" Set NERDTree width
let g:NERDTreeWinSize = 60

" Switch between buffers without saving and while retaining mark and undo history
set hidden

" Move to mark keys should be swapped
nnoremap ' `
nnoremap ` '

" Set leader character to the spacebar
let mapleader=" "

" Add the cool little dots for spaces while in Insert mode
set list
set listchars=tab:·\ ,trail:·

" Get a list of files on Tab instead of autofilling the longest file
set wildmode=list:longest

" It's time to get with the new Millenia: set UTF-8 character encoding
set encoding=utf-8

" Needed for matchit.vim (at least) to work
filetype on
filetype plugin on
filetype indent on

" This must be first, because it changes other options as a side effect.
set nocompatible

" Indent Stuffs
set autoindent
set smartindent

" Tab Stuffs
set expandtab
set shiftwidth=2
set smarttab
set softtabstop=2
set tabstop=2

" File Stuffs
set autoread
set autowrite
set nobackup
set nowb

" Display Stuffs
set hlsearch
set showmatch
set fillchars=vert:\ ,stl:\ ,stlnc:\ 
set ruler                      " show the cursor position all the time
set showcmd                    " display incomplete commands
set laststatus=2
set title
set visualbell

" Nav Stuffs
set backspace=indent,eol,start " allow backspacing over everything in insert mode
set bsdir=last                 " Last accessed directory is default working directory
set history=1000               " keep 50 lines of command line history
set incsearch                  " do incremental searching
set scrolloff=8                " start scrolling when cursor is 8 lines from bottom

" Paste Toggle (stops <Command>-V paste from having indentation added)
nnoremap <F2> :set invpaste paste?<CR>
set pastetoggle=<F2>
set showmode

map <C-h> <C-W>h
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-l> <C-W>l
nmap <silent> <leader>h :silent :nohlsearch<CR>
nmap <silent> <leader>f :silent :FufFile<CR>
nmap <silent> <leader>n :silent :NERDTreeToggle<CR>
nmap <silent> <leader>bb :silent :bp<CR>
nmap <silent> <leader>bn :silent :bn<CR>

let g:miniBufExplMapWindowNavVim = 1
let g:miniBufExplMapWindowNavArrows = 1
let g:miniBufExplMapCTabSwitchBufs = 1
let g:miniBufExplModSelTarget = 1

syntax enable
colorscheme sand

