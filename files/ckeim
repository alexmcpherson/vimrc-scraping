filetype off
call pathogen#runtime_append_all_bundles()
filetype plugin indent on

set nocompatible
set modelines=0

set guifont=Menlo
let mapleader = ","

set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab

set encoding=utf-8
set scrolloff=3
set autoindent
set showmode
set showcmd
set hidden
set wildmenu
set wildmode=list:longest
set visualbell
"set cursorline
set ttyfast
set ruler
set backspace=indent,eol,start
set laststatus=2
set formatoptions=qrn1

nnoremap / /\v
vnoremap / /\v
set ignorecase
set smartcase
set gdefault
set incsearch
set showmatch
set hlsearch
nnoremap <leader><space> :noh<cr>
nnoremap <tab> %
vnoremap <tab> %

set laststatus=2

" Display the working git branch in the status bar
set statusline=%F%m%r%h%w
set statusline+=%{fugitive#statusline()}

map <F2> :NERDTreeToggle<CR>

" True FS, (hide scrollbars
set guioptions-=L
set guioptions-=r
set guioptions-=t

" Always show line numbers
set number

" Disable wordwrap
set nowrap

"set list
"set listchars=tab:▸\ ,eol:¬

"map <S-Enter> O<Esc>
"map <CR> o<Esc>

nnoremap <leader>ft Vatzf
nnoremap <leader>S ?{<CR>jV/^\s*\}?$<CR>k:sort<CR>:noh<CR>
nnoremap <leader>w <C-w>v<C-w>l

if exists(":Tabularize")
  nmap <Leader>a= :Tabularize /=<CR>
  vmap <Leader>a= :Tabularize /=<CR>
  nmap <Leader>a: :Tabularize /:\zs<CR>
  vmap <Leader>a: :Tabularize /:\zs<CR>
endif

nnoremap <leader>a :Ack
map <F8> :!/usr/bin/ctags -R --c++-kinds=+p --fields=+iaS --extra=+q .<CR>

nmap <Leader>nt :tabnew<CR>

nnoremap <leader>c<space> :NERDComToggleComment

augroup userruby
  au! BufRead,BufNewFile *.ru setfiletype ruby
  au! BufRead,BufNewFile Gemfile setfiletype ruby
  au! BufRead,BufNewFile Capfile setfiletype ruby
augroup END

augroup userphp
  au! BufRead,BufNewFile *.ctp setfiletype php
augroup END

map <leader><tab> :tabn <CR>
map <leader>p<tab> :tabp <CR>

set t_Co=256
colorscheme kraihlight
syntax on
