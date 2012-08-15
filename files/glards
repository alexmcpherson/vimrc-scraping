"vimrc

filetype off
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()
filetype plugin indent on

set nocompatible

set smartindent

set tabstop=2
set shiftwidth=2

set pastetoggle=<F10>

set background=dark
let g:molokai_original = 0
set t_Co=256

colorscheme molokai

set number ruler " Show line number

set hlsearch " Highlight searches
set ignorecase
set smartcase

set showmatch " Show matching braces

set smarttab
set expandtab

set noswapfile
set nobackup

set cursorline " show cursor line
set laststatus=2

set wrap
set linebreak

let mapleader = ","

syntax on

" Custom mappings
nmap <F12> :NERDTreeToggle<CR>
nmap <Leader>v :source $MYVIMRC<CR>

" Fix keycodes for GNU screen
map ^[[1~ <Home>
map ^[[4~ <End>
imap ^[[1~ <Home>
imap ^[[4~ <End>

" Paste toggle
nnoremap <F2> :set invpaste paste?<CR>
set pastetoggle=<F2>
set showmode

" Status line
augroup ft_statuslinecolor
    au!

    au InsertEnter * hi StatusLine ctermfg=196 guifg=#FF3145
    au InsertLeave * hi StatusLine ctermfg=130 guifg=#CD5907
augroup END

set statusline=%f    " Path.
set statusline+=%m   " Modified flag.
set statusline+=%r   " Readonly flag.
set statusline+=%w   " Preview window flag.

set statusline+=\    " Space.

"set statusline+=%#redbar#                " Highlight the following as a warning.
"set statusline+=%{SyntasticStatuslineFlag()} " Syntastic errors.
"set statusline+=%*                           " Reset highlighting.

set statusline+=%=   " Right align.

" File format, encoding and type.  Ex: "(unix/utf-8/python)"
set statusline+=(
set statusline+=%{&ff}                        " Format (unix/DOS).
set statusline+=/
set statusline+=%{strlen(&fenc)?&fenc:&enc}   " Encoding (utf-8).
set statusline+=/
set statusline+=%{&ft}                        " Type (python).
set statusline+=)

" Line and column position and counts.
set statusline+=\ (line\ %l\/%L,\ col\ %03c)

" MiniBufExpl configuration
let g:miniBufExplMapWindowNav = 1
let g:miniBufExplMapCTabSwitchBufs = 1
"let g:miniBufExplMapCTabSwitchWindows = 1

