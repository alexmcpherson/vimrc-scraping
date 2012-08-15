" vimrc =====================================================================
" vim run commands file
"
" To use this file as the .vimrc file in linux, run the following command
" from the e13n directory:
" ln -s ./vimrc $HOME/.vimrc
" 
" Ben Clark
" benjoeclark@gmail.com
"
" Sources for this file include:
" $VIMRUNTIME/vimrc_example.vim
" Alan Lafon http://blog.dispatched.ch/2009/05/24/vim-as-python-ide/
"
" To be consistent, command keys are labeled as:
" <BS> = backspace
" ===========================================================================

" Turn off vi compatibility mode to use the benefits of being vi iMproved
set nocompatible

" Allow <BS> to delete whitespace at the start of the line, a line break,
" and the character just before Insert mode started
set backspace=indent,eol,start

" Keep the last 50 commands and searches for later use
set history=50

" Perform search as the search text is being completed
set incsearch

" Indetation settings =======================================================
" Keep the previous line's indentation level
"set autoindent
" Start indenting after certain programming-specific lines
"set smartindent
" Use filetype indenting
filetype plugin on
filetype indent on
" Replace tabs with correct number of spaces
set expandtab
" Number of spaces that a tab represents
set tabstop=4
" Number of spaces for autoindenting
set shiftwidth=4
" Number of spaces for a tab during editing operations
set softtabstop=4

" Status info ===============================================================
" Display the current cursor position in the lower right corner
set ruler
" Display a command that has not been completely specified beside the ruler
set showcmd
" When autocompleting, show options in a menu above the command prompt
" with the current selection higlighted
set wildmenu

" Makefile sanity
autocmd BufEnter ?akefile* set noet ts=4 sw=4

" Syntax highlighting if colors are available
"   t_Co is the flag representing number of colors
"   has() returns 1 if the feature is supported
if &t_Co > 2 || has("gui_running")
    syntax on
    set hlsearch
endif

" Keep Dropbox from constantly saving files being worked on
" Save swap files in ~/tmp directory
set dir=~/tmp
" Save backup files in the ~/tmp directory
set backupdir=~/tmp,~/

" Set up column coloring
set colorcolumn=80
hi ColorColumn ctermbg=darkgrey
