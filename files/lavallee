
set nocompatible

" enable pathogen plugin before we do anything else
call pathogen#infect()

" big history
set history=1000

" encodings
set termencoding=utf-8
set encoding=utf-8
set fileencoding=utf-8

" configure status line
set ruler laststatus=2 

" configure line numbers
set number
:highlight LineNr term=bold cterm=bold ctermfg=LightGrey ctermbg=DarkGrey gui=NONE guifg=DarkGrey guibg=NONE
set cursorline

" search configuration
set hlsearch incsearch ignorecase smartcase magic

" indentation options
set autoindent smartindent

" tab depth and expansion option defaults
set expandtab tabstop=4 shiftwidth=4 softtabstop=4

" set textwidth=78

set autoread autowrite nobackup ttyfast viminfo='20,\"500
set backspace=indent,eol,start notimeout clipboard=

" allow reading of .vimrc in current working directory
set exrc

" navigation - keep 5 lines above or below cursor on screen
set scrolloff=5

" show matching bracket if it's on the screen
set showmatch

" file completion 
set wildmenu
set wildmode=list:longest

" don't kill buffers
set hidden

syntax enable
syntax on
syntax sync fromstart

" color scheme
set background=dark
colorscheme solarized

" clear highlighted searches
noremap <C-l> :nohls<CR><C-l>
noremap! <C-l> <Esc>:nohls<CR><C-l>a

" Enable filetype plugin
filetype plugin on
filetype indent on

" Set to auto read when a file is changed from the outside
set autoread

" Use ack for grepping
set grepprg=ack

" Code folding
set foldenable
set foldmethod=marker
set foldlevel=100
set foldopen=block,hor,mark,percent,quickfix,tag
function! SimpleFoldText() " {
    return getline(v:foldstart).' '
endfunction " }
set foldtext=SimpleFoldText()

" When vimrc is edited, reload it
" if you install this somewhere other than ~/.vim, you'll need to change the
" last argument
autocmd! bufwritepost vimrc source ~/.vim/vimrc

map <C-Tab> :bnext<cr>
map <C-S-Tab> :bprevious<cr>


" HTML (tab width 2 chr, no wrapping)
autocmd FileType html set sw=2
autocmd FileType html set ts=2
autocmd FileType html set sts=2
autocmd FileType html set textwidth=0
" Python (tab width 4 chr, wrap at 79th char)
autocmd FileType python set sw=4
autocmd FileType python set ts=4
autocmd FileType python set sts=4
autocmd FileType python set textwidth=79
" CSS (tab width 2 chr, wrap at 79th char)
autocmd FileType css set sw=2
autocmd FileType css set ts=2
autocmd FileType css set sts=2
autocmd FileType css set textwidth=79
" JavaScript (tab width 4 chr, wrap at 79th)
autocmd FileType javascript set sw=4
autocmd FileType javascript set ts=4
autocmd FileType javascript set sts=4
autocmd FileType javascript set textwidth=79
