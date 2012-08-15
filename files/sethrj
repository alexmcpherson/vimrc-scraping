" Seth R. Johnson
" https://github.com/sethrj/SRJ-Vim-Resources

" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

set number
set sw=4 ts=4
" set the syntax highlighting, colors
set background=dark

" set window size
set lines=55
set columns=85 "so that, with 1000-9999 line files, it's 80 chars wide

set scrolloff=2
set wildmode=list:longest
set ignorecase
set smartcase

set incsearch

set noerrorbells
set novisualbell
set t_vb=

set wrap
set lbr "line break: don't break middle of a word

set sidescroll=5
set laststatus=1

set keywordprg=":help"

"remember marks
set viminfo='100,f1
"*************** VIM LATEX ************
filetype plugin on
filetype indent on
set grepprg=grep\ -nH\ $*
let g:tex_flavor='latex'
let g:tex_isk='48-57,a-z,A-Z,192-255,:'
"**************************************

set foldlevel=1

"use shift-option-command type stuff on the mac
"let macvim_hig_shift_movement = 1
  nn   <S-D-Left>     <S-Home>
  vn   <S-D-Left>     <S-Home>
  ino  <S-D-Left>     <S-Home>
  nn   <S-M-Left>     <S-C-Left>
  vn   <S-M-Left>     <S-C-Left>
  ino  <S-M-Left>     <S-C-Left>

  nn   <S-D-Right>    <S-End>
  vn   <S-D-Right>    <S-End>
  ino  <S-D-Right>    <S-End>
  nn   <S-M-Right>    <S-C-Right>
  vn   <S-M-Right>    <S-C-Right>
  ino  <S-M-Right>    <S-C-Right>

  nn   <S-D-Up>       <S-C-Home>
  vn   <S-D-Up>       <S-C-Home>
  ino  <S-D-Up>       <S-C-Home>

  nn   <S-D-Down>     <S-C-End>
  vn   <S-D-Down>     <S-C-End>
  ino  <S-D-Down>     <S-C-End>

" allow backspacing over everything in insert mode
set backspace=indent,eol,start
set whichwrap+=<,>,h,l

"set noautoindent

"keep vim from screwing up creation dates, labels, etc.
set nowb

"set nobackup    " do not keep a backup file, use versions instead
"set backupcopy "no"

set history=50    " keep 50 lines of command line history
set showcmd    " display incomplete commands
set incsearch    " do incremental searching

" Don't use Ex mode, use Q for formatting
map Q gq<Right>
"
if &t_Co > 2 || has("gui_running")
" Switch syntax highlighting on, when the terminal has colors
  syntax on
" Also switch on highlighting the last used search pattern.
  set hlsearch
endif
"
"set list

set ruler
"set rulerformat=

" automatically remove trailing whitespace before write
function! StripTrailingWhitespace()
  normal mZ
  %s/\s\+$//e
  if line("'Z") != line(".")
    echo "Stripped whitespace\n"
  endif
  normal `Z
endfunction

" Only do this part when compiled with support for autocommands.
if has("autocmd")
  augroup sourceAu
    autocmd!
    "auto-reload .vimrc on edit
"    autocmd BufWritePost .vimrc source %
  augroup END

  " My custom autocommands
  augroup sethAu
    autocmd!

    " Hide invisibles if we recognize the filetype
"    autocmd BufRead,BufNewFile * setlocal nolist

    "fortran include files
    autocmd BufRead,BufNewFile *.txt  setf text

    "fortran include files
    autocmd BufRead,BufNewFile *.i90  setf fortran

    "correctly recognize latex files
    autocmd BufNewFile,BufRead *.tex,*.sty,*.dtx,*.ltx,*.bbl setf tex

    "SCons files are python
    autocmd BufRead,BufNewFile SConstruct set filetype=python
    autocmd BufRead,BufNewFile SConscript set filetype=python

    "for matlab files
    autocmd BufRead,BufNewFile *.m setlocal sw=4 ts=4
    autocmd BufRead,BufNewFile *.m setlocal expandtab

    "i files are SWIGs
    autocmd BufRead,BufNewFile *.i,*.swg set filetype=cpp

    "i files are SWIGs
    autocmd BufRead,BufNewFile *.cuh set filetype=cuda

    " verse of the day
    autocmd BufRead,BufNewFile .votd setlocal expandtab
    autocmd BufRead,BufNewFile .votd setlocal textwidth=80

    au BufNewFile,BufRead Doxyfile,Doxyfile.in setfiletype doxygen

	" strip whitespace
	autocmd BufWritePre *.cpp,*.hpp,*.i,*.py :call StripTrailingWhitespace()
  augroup END

   "built-in vim functions
  augroup vimrcEx
    autocmd!

    " When editing a file, always jump to the last known cursor position.
    " Don't do it when the position is invalid or when inside an event handler
    " (happens when dropping a file on gvim).
    autocmd BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$") |   exe "normal g`\"" | endif

  augroup END
endif " has("autocmd")
