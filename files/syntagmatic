set nocompatible               " be iMproved
filetype off                   " required!

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()
Bundle 'gmarik/vundle'

Bundle 'kchmck/vim-coffee-script'

" Configuration file for vim
set modelines=0     " CVE-2007-2438

set backspace=2     " more powerful backspacing

" Don't write backup file if vim is being called by "crontab -e"
au BufWrite /private/tmp/crontab.* set nowritebackup
" Don't write backup file if vim is being called by "chpass"
au BufWrite /private/etc/pw.* set nowritebackup

set ai                    " auto indenting
set history=100           " keep 100 lines of history
set ruler                 " show the cursor position
syntax on                 " syntax highlighting
set hlsearch              " highlight the last searched term
filetype plugin indent on " use the file type plugins

" When editing a file, always jump to the last cursor position
autocmd BufReadPost *
\ if ! exists("g:leave_my_cursor_position_alone") |
\ if line("'\"") > 0 && line ("'\"") <= line("$") |
\ exe "normal g'\"" |
\ endif |
\ endif

colorscheme maroloccio

set tabstop=2
set expandtab
set shiftwidth=2
set softtabstop=2

set wildmenu
set wildmode=list:longest,full

map <Tab> :bn<CR>
map <C-Tab> :bp<CR>

