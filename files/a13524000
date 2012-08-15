call pathogen#infect()
set ruler
set number
set showmode
set shiftwidth=4
set tabstop=4
set backspace=2
set incsearch
set hls
set nocompatible
set showcmd
set autoindent
set cindent
set cursorline
set title
"set colorcolumn=80
set guifontset=8x16,kc15f,-*-16-*-big5-0 
"set fenc=big5 enc=big5 tenc=utf8
"set fenc=gb2312 enc=gb2312 tenc=utf8
set foldmethod=indent
set foldlevel=10
"autocmd BufEnter * call DoWordComplete()
syntax on
"set t_Co=256
colorscheme desert
"colorscheme evening
"colorscheme default
"set background=light
"set background=dark

highlight Comment ctermfg=darkcyan
highlight Search term=reverse ctermbg=4 ctermfg=7

" encodings
set fileencodings=utf-8,big5
set termencoding=utf-8
set encoding=utf-8

" map
nmap <F12> <esc>:TlistToggle<CR><C-w>h
imap <F12> <esc>:TlistToggle<CR><C-w>h
nmap <F9> <esc>:set list!<CR>
imap <F9> <esc>:set list!<CR>
nmap <F7> gT
nmap <F8> gt

" status line
set laststatus=2 "ls=2
set statusline=%<%F "file name
set statusline+=\ [%{&fileencoding},%{&fileformat}]
set statusline+=\ %m "modified
set statusline+=%= "
set statusline+=%h%r\ %-19([%p%%]\ %3l,%02c%03V%)%y
highlight StatusLine term=bold,reverse cterm=bold,reverse

" persistent undo
set undofile
set undodir=~/.vim/undodir
set undolevels=1000

" wil
set wildmode=longest:full
set wildmenu

" filetype
filetype on
filetype indent on
filetype plugin on

" list
set nolist
set listchars=tab:>-,trail:-

" tab indent
imap <S-Tab> <C-o><<
vmap <Tab> >
vmap <S-Tab> <

" Syntastic
let g:syntastic_python_checker = 'pyflakes'
