" .vimrc rebuilt from scratch
set nocompatible
" fix for debian autoenabling filetype detection before pathogen gets started
" see http://www.adamlowe.me/2009/12/vim-destroys-all-other-rails-editors.html
filetype off
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" ---------------------------------- look/feel ---------------------------------
" define a highlight for trailing whitespace before the colorscheme is pulled in
" to prevent it getting overwritten
" highlight ExtraWhitespace ctermbg=red guibg=red
autocmd ColorScheme * highlight ExtraWhitespace ctermbg=red guibg=red
" console support for 256 colours
set t_Co=256
" make zenburn user darker colours
let g:zenburn_high_Contrast = 1
colorscheme zenburn 
" turn on auto syntax highlight
syn on
set wildmenu
set wildmode=list:longest,full
" turn bells off
set noerrorbells
set vb t_vb=
" highlight current line
set cul 
set ruler
set laststatus=2

" ------------------------------- text handling -------------------------------
" convert tabs to spaces
set expandtab
" amount of whitespace to insert
set softtabstop=4
" width of a tab in spaces
set tabstop=4
set smarttab
" controls the spaces inserted when using indentation commands
set shiftwidth=4
set cindent
set autoindent
set notagbsearch
" show line numbers by default
set number
" repair wired terminal/vim settings
set backspace=start,eol,indent
" use incremental searching
set incsearch
" highlight whitespace at the end of a line, expect while typing at the end of 
" the line
match ExtraWhitespace /\s\+\%#\@<!$/
" ---------------------------------- buffers -----------------------------------
set hidden

" auto close the preview onmi complete buffer after we are done with it
autocmd CursorMovedI * if pumvisible() == 0 && bufname("%") != "[Command Line]"|pclose|endif
autocmd InsertLeave * if pumvisible() == 0 && bufname("%") != "[Command Line]"|pclose|endif

" --------------------------------- filetypes ----------------------------------
syntax on
filetype on
filetype plugin on
filetype indent on

" --------------------------------- filesystem ---------------------------------
" friendly menu when tabbing though file matches
set wildmenu
" stick backup files where they belong 
silent !mkdir ~/.vim_backup > /dev/null 2>&1
set backupdir=~/.vim_backup
set directory=~/.vim_backup
" Search upwards for a tags file
set tags=tags;

" -------------------------------- key mappings --------------------------------
" you will need your map leader
let mapleader = ","
source $HOME/.vim/keymaps.vim

" ---------------------------------- plugins -----------------------------------
" stop gap solution to somewhat isolate plugin-specific settings/key mappings
source $HOME/.vim/plugin-settings.vim

" Keep location-specific stuff isolated
if filereadable($HOME . "/.vimrc.local")
      exec 'source ~/.vimrc.local'
endif
