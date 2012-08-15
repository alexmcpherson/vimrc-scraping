set tabstop=2
set shiftwidth=2
set expandtab
set autoindent
set lcs=tab:>-,trail:-,eol:$,nbsp:%,extends:>,precedes:<
set nobackup
set nowritebackup
set noswapfile
set statusline=%F%r%m%h%w\ %Y\ [%{&ff}]\ Line\ %l/%L\ [%p%%]\ Col\ %v
set laststatus=2
set enc=utf-8
set novisualbell
set nocompatible
set incsearch
set hlsearch

" pathogen bundles
call pathogen#infect()
call pathogen#helptags()

if has("gui_running")
  syntax on
  set lcs=tab:»·,trail:·,precedes:»,extends:«,eol:¶
  "set transp=8
  set lines=35
  set columns=95
  "set guifont=Bitstream_Vera_Sans_Mono:h10
  "set guifont=Glass_TTY_VT220:h20
  set guifont=Monaco:h20
  set guioptions-=T
  set guioptions+=m
  set list
  set nu
  set background=light
  "set background=dark
  let g:solarized_termtrans=1
  let g:solarized_termcolors=256
  let g:solarized_contrast="high"
  let g:solarized_visibility="high"
  "colorscheme solarized
  colorscheme desert
endif

filetype plugin indent on

map <leader>t :FuzzyFinderTextMate<CR>
noremap <leader>o <Esc>:CommandT<CR>
noremap <leader>O <Esc>:CommandTFlush<CR>
noremap <leader>m <Esc>:CommandTBuffer<CR>
map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>
map   <silent> <F5> mmgg=G'm
imap  <silent> <F5> <Esc> mmgg=G'm

"" Things to try:
" ack.vim
" surround
" pathogen
" vividchalk
" CommandT
" git://github.com/majutsushi/tagbar.git
" http://ethanschoonover.com/solarized
" tabular.vim to align text by separator
