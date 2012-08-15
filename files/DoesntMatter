"=============================
" Appearance
"=============================

" Set Terminal colors to 256
set t_Co=256

" Use dark background for better readability
set background=dark

" Use leo as colorscheme
" Change colorschemes manually with :colo $schemename
" My favourite ones are leo,candycode,desert256,relaxedgreen
colorscheme leo

"=============================
" Coding-Style adjustments
"=============================

" Set 4 whitespaces as tab
set expandtab
set shiftwidth=4
set tabstop=4

"=============================
" Miscellaneous
"=============================

" Turn on UTF-8 encoding
set encoding=utf8

"=============================
" Plugin adjustments
"=============================

" TTrCodeAssistor plugin
" Enable plugin and set tag file
let g:TTrCodeAssistor_AutoStart=1
:set tags=~/.vim/tmp/tags

"=============================
" Usability features
"=============================

" Hide cursor when editing
set mousehide

" Case insensitive matching for search
set ignorecase

" Incremental search
set incsearch

" This shows what you are typing as a command
set showcmd

" Returns to indent of previous line
" Probably this should be turned off for some actions
set autoindent

" Show line numbers
set number

" Change the directory to the one of the current file
" This feature works automatically for each buffer
autocmd BufEnter * lcd %:p:h

"=============================
" Useful mappings
"=============================

" Switch to matching object and highlight code between
" Example '{' and '}'
" To use press the % key
noremap % v%

" Tlist lists all functions and similar things
" Ctags has to be installed for this feature
" To use press the space key
noremap <space> :Tlist<CR>

" Mappings for window resizing
" To use press Alt + the arrow keys
map <A-Up> <C-w>-
map <A-Down> <C-w>+
map <A-Left> <C-w><
map <A-Right> <C-w>>

" Mappings for window switching
" To use press Ctrl + the arrow keys
map <C-Up> <C-w>k
map <C-Down> <C-w>j
map <C-Left> <C-w>h
map <C-Right> <C-w>l

"=============================
" Useful functions
"=============================

" Function to delete trailing whitespaces
" To use type :call DeleteTrailingWS()
function! DeleteTrailingWS()
  %s/\s\+$//ge
endfunction

" Function to replace tabs with four spaces 
" To use type :call TabsToSpaces()
function! TabsToSpaces()
  %s/\t/    /ge
endfunction

" Function to replace Dos with Unix line endings
" To use type :call Dos2Unix()
function! Dos2Unix()
  :%s/\r//ge
endfunction

" Function to allow using tabs in files
" To use type :call AllowTabs()
function! AllowTabs()
  set expandtab!
endfunction

" Function to enhance copy and paste actions
" To use type :call Paste()
function! Paste()
  set autoindent!
endfunction

"=============================
" Statusline adjustments
"=============================

" Always show the statusline
set laststatus=2

" Format the statusline
set statusline=\ %{HasPaste()}%F%m%r%h\ %w\ \ CWD:\ %r%{CurDir()}%h\ \ \ Line:\ %l/%L:%c

" Needed functions for formatting
function! CurDir()
    let curdir = getcwd()
    return curdir
endfunction

function! HasPaste()
    if &paste
        return 'PASTE MODE  '
    else
        return ''
    endif
endfunction
