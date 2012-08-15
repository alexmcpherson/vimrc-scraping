set nocompatible
filetype off

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

"-------------------------
" bundles
"-------------------------
" let Vundle manage Vundle, required!
" :BundleList          - list configured bundles
" :BundleInstall(!)    - install(update) bundles
" :BundleSearch(!) foo - search(or refresh cache first) for foo
" :BundleClean(!)      - confirm(or auto-approve) removal of unused bundles
"
" see :h vundle for more details or wiki for FAQ
" NOTE: comments after Bundle command are not allowed.

Bundle 'gmarik/vundle'

" syntax, color
Bundle 'vim-ruby/vim-ruby'
Bundle 'elzr/vim-json'
Bundle 'tpope/vim-markdown'
Bundle 'tpope/vim-git'

" git
Bundle 'tpope/vim-fugitive'

" editing
Bundle 'tpope/vim-surround'
Bundle 'nelstrom/vim-visual-star-search'

" file managers
Bundle 'kien/ctrlp.vim'
Bundle 'scrooloose/nerdtree'

"-------------------------
" text format
"-------------------------

filetype plugin indent on
syntax on
set number
set softtabstop=2
set shiftwidth=2
set tabstop=2
set autoindent        " continue indent on next line
set expandtab         " use spaces instead of tabs

"-------------------------
" terminal options
"-------------------------

colorscheme twilight
set title
set ttyfast
set scrolloff=3       " number of lines to show around curser
set ruler             " show curser position
set background=dark
set hidden            " hide buffers instead of closing
set hlsearch          " highlight search results
set ignorecase        " ignore case when searching
set noswapfile        " use version control!
set nobackup          " use version control!
set vb                " beeping is for the road runner
set pastetoggle=<F2>  " option to disable vim smartness when pasting
set laststatus=2
set statusline=
set statusline+=%-3.3n\                      " buffer number
set statusline+=%f\                          " filename
set statusline+=%h%m%r%w                     " status flags
set statusline+=\[%{strlen(&ft)?&ft:'none'}] " file type
set statusline+=\ %{fugitive#statusline()}   " fugitive
set statusline+=%=                           " right align remainder
set statusline+=0x%-8B                       " character value
set statusline+=%-14(%l,%c%V%)               " line, character
set statusline+=%<%P                         " file position

"-------------------------
" autcomd
"-------------------------

if has ("autocmd")    " only do if compiled with autocmd support
  autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal g`\"" |
    \ endif
endif                 " has autocmd
