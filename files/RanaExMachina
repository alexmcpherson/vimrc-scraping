" Disable the arrow keys. Use hjkl, bitchez!
inoremap  <Up>     <NOP>
inoremap  <Down>   <NOP>
inoremap  <Left>   <NOP>
inoremap  <Right>  <NOP>
noremap   <Up>     <NOP>
noremap   <Down>   <NOP>
noremap   <Left>   <NOP>
noremap   <Right>  <NOP>

" ######################
" vundle settings
" ######################
set nocompatible               " be iMproved
filetype off                   " required!

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" let Vundle manage Vundle
" required! 
Bundle 'gmarik/vundle'

" My Bundles here:

Bundle 'Syntastic'

Bundle 'The-NERD-tree'
map <F2> :NERDTreeToggle<CR>

Bundle 'LaTeX-Suite-aka-Vim-LaTeX'
au BufEnter *.tex set autowrite
let g:Tex_DefaultTargetFormat = 'pdf'
let g:Tex_MultipleCompileFormats = 'pdf'
let g:Tex_CompileRule_pdf = 'pdflatex -interaction=nonstopmode $*'
let g:Tex_GotoError = 1
"This setting controls whether Latex-Suite automatically creates manual folds for a file when it is opened. You can still use the \rf mapping to refresh/create folds even when this variable is set to zero. 
let g:Tex_AutoFolding = 0
"let g:Tex_ViewRule_pdf = '/Applications/Preview.app/Contents/MacOS/Preview'
let g:Tex_ViewRule_pdf = 'open -a Preview' 
let g:tex_flavor='latex'
"Ignore missing references too
let g:Tex_IgnoredWarnings =
            \'Underfull'."\n".
            \'Overfull'."\n".
            \'specifier changed to'."\n".
            \'You have requested'."\n".
            \'Missing number, treated as zero.'."\n".
            \'There were undefined references'."\n".
            \'Citation %.%# undefined'."\n".
            \'Reference %.%# undefined'
let g:Tex_IgnoreLevel = 8
"use \t to compile an open as pdf
map <leader>t <leader>ll <leader>lv 
" IMPORTANT: grep will sometimes skip displaying the file name if you
" search in a single file. This will confuse Latex-Suite. Set your grep
" program to always generate a file-name.
set grepprg=grep\ -nH\ $*

filetype plugin indent on     " required!
" ######################
" general settings
" ######################

"backspace working in vim 7.3
set bs=2

"F3 for paste
set pt=<F3>

"tell vim you have a dark background
set bg=dark

"moar colors
set t_Co=256

"make Line Numbers grey
hi LineNr ctermfg=darkgray

"mouse support
set mouse=nv

filetype plugin on
filetype indent on

"ignores case for searching unless u are searching for something with uppercase
set smartcase 

set shiftwidth=4

set encoding=utf-8

set tabstop=4

"use spaces for tab
set expandtab

"highlight search matches
"set hlsearch 

"While typing a search command, show where the pattern, as it was typed
set incsearch 

"Always show current position
set ruler 

"Turn on wildmenu
set wildmenu 

"filtes not shown in wild menu
set wildignore=*.o,*.obj,*.exe,*~,*.swp,*.log,*.out 

" Sets how many lines of history VIM has to remember
set history=700

" Fast saving
map <leader>w :w!<cr>

" Turn backup off, since all important stuff is in git anyway...
set nobackup
set nowb
set noswapfile

"no sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

" ######################
" programming settings
" ######################

"syntax highlighting on
syntax on

"distinguish between warnings and errors for gcc messages
let &errorformat="%f:%l:%c: %t%*[^:]:%m,%f:%l: %t%*[^:]:%m," . &errorformat  

"show line numbers
set number 

"auto indent
set ai 

"smart indent
set si 
