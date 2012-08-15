" Use Vim settings, rather then Vi settings.
set nocompatible

call pathogen#helptags()
call pathogen#runtime_append_all_bundles()

let g:miniBufExplMapWindowNavVim = 1 
let g:miniBufExplMapWindowNavArrows = 1 
let g:miniBufExplMapCTabSwitchBufs = 1
let g:miniBufExplModSelTarget = 1

autocmd VimEnter * :IndentGuidesEnable

set background=dark 
colorscheme ir_black
syntax on             " Syntax highlighting

let mapleader = "["

map <Leader>t :CommandT<CR>
map <Leader>rt :CommandTFlush<CR>
map <Leader>n :NERDTreeToggle<CR> " toggling for project tree window

" Indent lines with only whitespace
:inoremap <CR> <CR>x<BS>

let g:NERDTreeWinSize = 50

au BufNewFile,BufRead *.jst set filetype=html

set statusline=[%n]\ %<%.99f\ %h%w%m%r%y%{exists('g:loaded_rvm')?rvm#statusline():''}%=%-16(\ %l,%c-%v\ %)%P 

set expandtab
set shiftwidth=2
set softtabstop=2

" Dont create swp and backups
set noswapfile
set nobackup

set number

filetype plugin indent on

set autoindent

set history=50		" keep 50 lines of command line history
set ruler		      " show the cursor position all the time
set cursorline    " highlight the line that the cursor is on

nnoremap <silent> <C-Right> <c-w>l
nnoremap <silent> <C-Left> <c-w>h
nnoremap <silent> <C-Up> <c-w>k
nnoremap <silent> <C-Down> <c-w>j

set nobackup
set nowritebackup
set noswapfile

set wildignore+=*.png,*.jpg,*.jpeg,*.sp*,*.gif
