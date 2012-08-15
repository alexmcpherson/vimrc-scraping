" active pathogen plugin
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" active vim-ruby plugin
set nocompatible
syntax on
filetype on
filetype indent on
filetype plugin on
compiler ruby

" vim user interface and style
set nu
set tabstop=4
set shiftwidth=4
colorscheme koehler
set hlsearch		" search highlighting
" remove highligt after search
nmap <silent> <C-N> :silent noh<CR>

" auto reload vimrc when editing it
autocmd! bufwritepost .vimrc source ~/.vimrc

" disable sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

