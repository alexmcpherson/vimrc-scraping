" Abel Mathew .vimrc 

set nocompatible 
syntax on 

filetype on
filetype indent on
filetype plugin on
set nocp 

colorscheme dante
set t_Co=256

" Set an orange cursor in insert mode, and a red cursor otherwise.
" " Works at least for xterm and rxvt terminals.
" " Does not work for gnome terminal, konsole, xfce4-terminal.
if &term =~ "xterm\\|rxvt"
	:silent !echo -ne "\033]12;red\007"
	let &t_SI = "\033]12;orange\007"
	let &t_EI = "\033]12;red\007"
	autocmd VimLeave * :!echo -ne "\033]12;red\007"
endif

highlight Pmenu ctermbg=238 gui=bold
highlight visual ctermbg=4
"set autochdir 
set backspace=indent,eol,start
set nobackup 
set nowritebackup 
set noswapfile 
set fileformats=unix,dos,mac
set iskeyword +=_,$,@,%,# 

set cursorline
set vb
set incsearch 
set matchtime=5 
set nohlsearch 
set number
set ruler 
set showmatch 
set showmode
set showcmd 
"set statusline=%F%m%r%h%w[%L][%{&ff}]%y[%p%%][%04l,%04v]
set stl=%f\ %m\ %r\ Line:\ %l/%L[%p%%]\ Col:\ %c\ Buf:\ #%n\ [%b][0x%B]
set scrolloff=8
set rnu

set completeopt= "test this one out you might not like it 
set formatoptions=rq "automatically insert comment wrappers on return
set infercase
set nowrap
set tabstop=4
set softtabstop=4
set shiftwidth=4
set textwidth=80
set noexpandtab 

set foldenable
set foldmarker={,}
set foldmethod=indent 
set foldlevel=100

"tags
set tags+=~/tags/impbus
set tags+=~/tags/bidder
set tags+=~/tags/systags

" OmniCppComplete
 let OmniCpp_NamespaceSearch = 1
 let OmniCpp_GlobalScopeSearch = 1
 let OmniCpp_ShowAccess = 1
 let OmniCpp_ShowPrototypeInAbbr = 1 " show function parameters
 let OmniCpp_MayCompleteDot = 1 " autocomplete after .
 let OmniCpp_MayCompleteArrow = 1 " autocomplete after ->
 let OmniCpp_MayCompleteScope = 1 " autocomplete after ::
 let OmniCpp_DefaultNamespaces = ["std", "_GLIBCXX_STD"]
 " automatically open and close the popup menu / preview window
 au CursorMovedI,InsertLeave * if pumvisible() == 0|silent! pclose|endif
 set completeopt=menuone,menu,longest,preview

"mappings 
let mapleader = "," 
map <F6> :!ctags -R --sort=1 --fields=+iaS --extra=+q --c++-kinds=+defgmpstu -f ~/tags/bidder /home/amathew/source/bidder/ |  ctags -R --sort=1 --fields=+iaS --extra=+q --c++-kinds=+defgmpstu -f ~/tags/impbus /home/amathew/source/impbus/<CR> 
map <F5> :!cscope -R -b <CR> :cs reset <CR>
map <F7> :make -j 4<CR>
nnoremap <F2> :set rnu!<CR>

map <Leader>lt :TlistToggle <CR>
"map <Leader>nt :NERDTree <CR> 
"possible the greatest map ever found 
nnoremap ; :
noremap % v%

autocmd FileType php noremap <C-L> :!/usr/bin/php -l %<CR>

"*******************************************
""*******************************************
"****** INSERT MODE REMAPPINGS *************
""*******************************************
"*******************************************
inoremap jj <ESC>

"Easier splits navigation - Remapped Caps Lock to Control
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

if has("gui_running")
	colorscheme void
    set lines=64
    set guifont=Consolas\ 10
    set guioptions-=T
	set mousehide
endif

