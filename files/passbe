" -- passbe vim configuration --

" General

set nocompatible						" Explicitly get out of vi-compatible mode
set history=1000						" Sets how many lines of history VIM has to remember
set autoread							" Set to auto read when a file is changed from the outside
set so=7							" Set 7 lines to the cursors - when moving vertical
set wildmenu							" Turn on wild menu
set wildmode=longest:full					" Make wild menu more like bash completion
set ruler							" Always show current position
set hidden							" Change buffers without saving
set autochdir							" Switch to the current file directory 

set backspace=indent,eol,start					" Set backspace config
set whichwrap+=<,>,h,l						" ^^
set ignorecase							" Ignore case when searching
set smartcase							" ^^
set hlsearch							" Highlight search items
set incsearch							" Make search act like search in modern browsers

setlocal spell spelllang=en_au					" Turn on spelling

set magic							" Set magic on, for regular expressions
set showmatch							" Show matching brackets when text indicator is over them
set mat=2							" How many tenths of a second to blink

set noerrorbells						" No sound
set novisualbell						" ^^
set t_vb=							" ^^
set tm=500							" ^^

syntax enable							" Enable syntax
set gfn=Deja\ Vu\ Sans\ Mono\ 8. 				" Set font
set shell=/bin/bash						" Set shell
set fileformats=unix,mac,dos					" Set file formats
set fileformat=unix						" Set main file format
set encoding=utf8						" Set encoding
set background=dark						" Set background colour
set number							" Show line numbers		
set showcmd							" Show command being typed
set linespace=1							" Extra pixels between lines
set laststatus=2						" Enable status line always

set nobackup							" No backup files
set nowb							" ^^
set noswapfile							" ^^
set undodir=~/.vim/undo						" Set undo directory

set expandtab							" No real tabs
set shiftwidth=4						" Auto indent amount
set tabstop=4							" Real tabs
set smarttab							" Smart tabs
set ai								" Auto indent
set si								" Smart indent

set ttyfast							" Faster terminal connection
set cpoptions+=$						" Replacement character

" GUI

if has("gui_running")
	set guioptions-=T 					" Turn off GUI toolbar
        set t_Co=256						" Allow 256 colours
endif

let g:solarized_termcolors=256                                  " Degrade solarized when in terminal mode
let g:solarized_menu=0                                          " Disable menu
colorscheme solarized 						" Set colorscheme (set after general config)

" Mappings

map Q gq							" Don't use Ex mode, use Q for formatting
noremap <tab> :bnext<CR>					" Buffer next
noremap <S-tab> :bprev<CR>					" Buffer previous
map <F4> :redraw!<CR>						" Redraw
noremap ` :bw<CR>						" Buffer Destroy

map <C-j> <C-W>j						" Smart way to move between windows
map <C-k> <C-W>k						" ^^
map <C-h> <C-W>h						" ^^
map <C-l> <C-W>l						" ^^

nnoremap <silent> <F3>      :call ToggleWrap()<CR>		" Toggles wrap
vnoremap <silent> <F3> <C-C>:call ToggleWrap()<CR>		" ^^
inoremap <silent> <F3> <C-O>:call ToggleWrap()<CR>		" ^^

nmap <silent> ; :NERDTreeToggle ~/projects/<CR>                 " Toggle NERDTree
map <F2> :%s/\r//g<cr>  					" Remove DOS returns ^M
nnoremap <CR> :noh<CR><CR>                                      " Clear last search pattern

cnoremap <C-A> <Home>						" Bash like keys for the command line
cnoremap <C-E> <End>						" ^^
cnoremap <C-K> <C-U>						" ^^
cnoremap <C-P> <Up>						" ^^
cnoremap <C-N> <Down>						" ^^

" Functions

function ToggleWrap()						" Wrap function
    set wrap!
    echo &wrap ? 'Wrap On' : 'Wrap Off'
endfunc

" Vundle
filetype off                                                    " Set filetype off (required for Vundle)
set rtp+=~/.vim/bundle/vundle/                                  " Set Vundle path
call vundle#rc()                                                " Execute Vundle
Bundle 'gmarik/vundle'                                          
Bundle 'altercation/vim-colors-solarized'                       
Bundle 'tpope/vim-surround'                                     
Bundle 'scrooloose/nerdtree'                                    
Bundle 'Lokaltog/vim-powerline'
Bundle 'vim-scripts/AutoComplPop'
Bundle 'tpope/vim-repeat'
Bundle 'tpope/vim-commentary'
Bundle 'git://repo.or.cz/vcscommand'
filetype plugin indent on                                       " Requried for Vundle

" Plugins

let g:NERDTreeIgnore = ['.git', '.svn']				" NERDTree Options
let g:NERDTreeQuitOnOpen = 1
let g:NERDTreeShowHidden = 1
let g:NERDTreeWinSize = 30
let g:NERDTreeMinimalUI = 0
let g:NERDTreeDirArrows = 1

