" Vundle Goes First ----------------------------------
set nocompatible               " be iMproved
filetype off                   " required!

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" let Vundle manage Vundle
" required!
Bundle 'gmarik/vundle'

" My Bundles here:
"
Bundle 'scrooloose/nerdtree'
Bundle 'css3'
Bundle 'bufexplorer.zip'
Bundle 'scrooloose/nerdcommenter'
Bundle 'digitaltoad/vim-jade'
Bundle 'altercation/vim-colors-solarized'
Bundle 'kien/ctrlp.vim'
Bundle 'rstacruz/sparkup', {'rtp': 'vim/'}
Bundle 'Shougo/neocomplcache'

filetype plugin indent on     " required!
" Vundle End -----------------------------------------

" Nemo's Basic Sittings ------------------------------
let mapleader=","
imap jj <Esc>
set t_Co=256
syntax on
set nowrap
set nobackup
set noswapfile
set hidden
set virtualedit=block
set fdm=marker

" Spaces ---------------------------------------------
set shiftwidth=4
set tabstop=4
set expandtab
autocmd BufNewFile,BufRead * set shiftwidth=4
autocmd BufNewFile,BufRead * set tabstop=4
autocmd BufNewFile,BufRead *.jade set shiftwidth=2
autocmd BufNewFile,BufRead *.jade set tabstop=2

" Indenting ------------------------------------------
set ai " Automatically set the indent of a new line (local to buffer)
" set si " smartindent	(local to buffer)

" Searching ------------------------------------------
set hlsearch  " highlight search
set incsearch  " incremental search, search as you type
set ignorecase " Ignore case when searching
set smartcase " Ignore case when searching lowercase

" Status Line ----------------------------------------
set showcmd
set ruler " Show ruler

" Sound ----------------------------------------------
set visualbell
set noerrorbells

" Insert New Line Method
map <S-Enter> O<ESC>
map <Enter> o<ESC>

" Highlighting ---------------------------------------
highlight WhitespaceEOL ctermbg=red guibg=grey
match WhitespaceEOL /\s\+$/

" NERDTree -------------------------------------------
:noremap <leader>n :NERDTreeToggle<CR>

" BufExplorer ----------------------------------------
:noremap <leader>f :BufExplorer<CR>

" neocomplcache --------------------------------------
let g:neocomplcache_enable_at_startup = 1
let g:neocomplcache_enable_auto_select = 1

" omni completion ------------------------------------
autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags
