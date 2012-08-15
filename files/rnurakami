" Configuration file for vim
set modelines=0		" CVE-2007-2438

" Normally we use vim-extensions. If you want true vi-compatibility
" remove change the following statements
set nocompatible	" Use Vim defaults instead of 100% vi compatibility
set backspace=2		" more powerful backspacing

" Don't write backup file if vim is being called by "crontab -e"
au BufWrite /private/tmp/crontab.* set nowritebackup
" Don't write backup file if vim is being called by "chpass"
au BufWrite /private/etc/pw.* set nowritebackup
syntax on
set number
set autoindent
set smartindent
set cindent
set noexpandtab
filetype on
filetype indent on
filetype plugin on
filetype off
 
set rtp+=~/.vim/vundle.git/
call vundle#rc()
Bundle 'rails.vim'
Bundle 'vim-ruby/vim-ruby'
Bundle 'The-NERD-tree'
Bundle 'project.vim'
Bundle 'quickrun'

filetype on
filetype indent on
filetype plugin on
