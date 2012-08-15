" Begin /etc/vimrc
" This vimrc was written by Kirill R

filetype on

" Indenting *******************************************************************
set ai " Automatically set the indent of a new line (local to buffer)
set si " smartindent (local to buffer)


" Scrollbars ******************************************************************
set sidescrolloff=2
set numberwidth=4


" Windows *********************************************************************
set equalalways " Multiple windows, when created, are equal in size
set splitbelow splitright

" Vertical and horizontal split then hop to a new buffer
:noremap <Leader>v :vsp^M^W^W<cr>
:noremap <Leader>h :split^M^W^W<cr>


" Cursor highlights ***********************************************************
set cursorline
"set cursorcolumn

set rnu!
" Searching *******************************************************************
set hlsearch  " highlight search
set incsearch  " Incremental search, search as you type
set ignorecase " Ignore case when searching 
set smartcase " Ignore case when searching lowercase

" Line Wrapping ***************************************************************
set nowrap
set linebreak  " Wrap at word



set nocompatible
set backspace=2
set ai
set ruler

" set shiftwidth=2 for a good reason
set shiftwidth=2

set expandtab
set tabstop=2

set mousemodel=popup          " right mouse button pops up a menu in the GUI

" Colors **********************************************************************
"set t_Co=256 " 256 colors
colorscheme ir_black

syntax on
set hlsearch
"if (&term == "iterm") || (&term == "putty")
  set background=dark
"endif

map <F2> :NERDTreeToggle<CR>

map <C-y> :FufCoverageFile<CR>

autocmd BufRead,BufNewFile *.js,*.json setlocal makeprg=jslint\ --vim\ \%

" For Autocomplete plugin
" Search in all buffers
let g:acp_completeOption=".,w,b,u,t,i"
" and DONT ignore case
let g:acp_ignorecaseOption=0

" -----------------------------------------------------------------------------  
" |                               Startup                                     |
" -----------------------------------------------------------------------------  
" Open NERDTree on start
"autocmd VimEnter * exe 'NERDTree' | wincmd l


" End /etc/vimrc
