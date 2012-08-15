runtime bundle/vim-pathogen/autoload/pathogen.vim
call pathogen#infect()

set nocompatible " must be the first line
set smartindent
set smarttab
set softtabstop=4
set shiftwidth=4
set expandtab
set history=1000
set viminfo='20,<1000,s10,h
filetype on
filetype indent on
filetype plugin on
set laststatus=2
syntax enable
hi StatusLine ctermbg=white ctermfg=blue
set statusline=%<%f\    " Filename
set statusline+=%w%h%m%r " Options
set statusline+=%{fugitive#statusline()} "  Git Hotness
set statusline+=\ [%{getcwd()}]          " current dir
set statusline+=\ [%p%%] " Options

" puppet files
au BufRead,BufNewFile *.pp setfiletype puppet
au FileType puppet set ts=2 sw=2 sts=2 et list
au FileType puppet syn on

" python files
au BufRead,BufNewFile *.py setfiletype python
au FileType python set ts=4 sw=4 sts=4 et list
au FileType python syn on

" bash files
au BufRead,BufNewFile *.sh setfiletype sh
au BufRead,BufNewFile *.bash setfiletype sh
au FileType sh set ts=2 sw=2 sts=2 et list
au FileType sh syn on

" ruby files
au BufRead,BufNewFile *.rb setfiletype ruby
au BufRead,BufNewFile *.erb setfiletype ruby
au FileType ruby set ts=2 sw=2 sts=2 et list
au FileType ruby syn on

" css files
au BufRead,BufNewFile *.css setfiletype css
au FileType css set ts=2 sw=2 sts=2 et list
au FileType css syn on

" js files
au BufRead,BufNewFile *.js setfiletype js
au FileType js set ts=2 sw=2 sts=2 et list
au FileType js syn on

" html files
au BufRead,BufNewFile *.html setfiletype html
au BufRead,BufNewFile *.htm setfiletype html
au FileType html set ts=2 sw=2 sts=2 et list
au FileType html syn on

" markdown (md) files
au BufRead,BufNewFile *.md setfiletype markdown
au BufRead,BufNewFile *.markdown setfiletype markdown
au FileType markdown set ts=4 sw=4 sts=4 et list
au FileType markdown syn on
