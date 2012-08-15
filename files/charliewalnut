call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

set nocompatible

" Indentation settings, WebKit style
fun! UseWebKitStyle()
  set tabstop=4
  set shiftwidth=4
  set softtabstop=4
  set textwidth=0
  if version >= 730
    set colorcolumn=
  else
    if exists("w:m2")
      call matchdelete(w:m2)
      unlet w:m2
    endif
  endif
endfun
command! Wks call UseWebKitStyle()

" Indentation settings, Chromium style
fun! UseChromiumStyle()
  set tabstop=2
  set softtabstop=2
  set shiftwidth=2
  set textwidth=80
  if version >= 730
    set colorcolumn=80
  else
    if exists("w:m2")
      call matchdelete(w:m2)
      unlet w:m2
    endif
    let w:m2=matchadd('ErrorMsg', '\%>80v.\+', -1)
  endif
endfun
command! Crs call UseChromiumStyle()

" default to WebKit style
call UseWebKitStyle()

" general / code settings
syntax on
set cindent
set expandtab
set wildmode=longest,list,full
set ruler
set linebreak
autocmd BufEnter * lcd %:p:h
set tags=./tags;
set history=100
set autoread
set incsearch
set hlsearch
filetype plugin on
set backspace+=indent,eol,start

" Capslock is mapped to 'Help', so map it to Esc
map <Help> <Esc>
map! <Help> <Esc>
map <Insert> <Esc>
map! <Insert> <Esc>

nnoremap gp "+p
nnoremap gP "+P
vnoremap gy "+y

" Be quiet and don't make crap files
set noerrorbells
set nobackup
set nowb
set noswapfile

" Persistent undo (7.3+ only)
if version >= 730
    set undodir=~/.vim_runtime/undodir
    set undofile
endif

autocmd BufEnter ChangeLog set et
autocmd BufEnter ChangeLog set tw=120

" a.vim for obj-c and obj-c++
let g:alternateExtensions_mm = "h,cpp"
let g:alternateExtensions_m = "h"
let g:alternateExtensions_h = "cpp,c,cxx,cc,mm,m"
