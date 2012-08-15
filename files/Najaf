call pathogen#infect()
" An example for a vimrc file.
"
" Maintainer:	Bram Moolenaar <Bram@vim.org>
" Last change:	2006 Nov 16
"
" To use it, copy it to
"     for Unix and OS/2:  ~/.vimrc
"	      for Amiga:  s:.vimrc
"  for MS-DOS and Win32:  $VIM\_vimrc
"	    for OpenVMS:  sys$login:.vimrc

" When started as "evim", evim.vim will already have done these settings.
if v:progname =~? "evim"
  finish
endif

" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

if has("vms")
  set nobackup		" do not keep a backup file, use versions instead
else
  set backup		" keep a backup file
endif
set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set incsearch		" do incremental searching

" For Win32 GUI: remove 't' flag from 'guioptions': no tearoff menu entries
" let &guioptions = substitute(&guioptions, "t", "", "g")

" Don't use Ex mode, use Q for formatting
map Q gq

" In many terminal emulators the mouse works just fine, thus enable it.
set mouse=a

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

" Only do this part when compiled with support for autocommands.
if has("autocmd")

  " Enable file type detection.
  " Use the default filetype settings, so that mail gets 'tw' set to 72,
  " 'cindent' is on in C files, etc.
  " Also load indent files, to automatically do language-dependent indenting.
  filetype plugin indent on

  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
  au!

  " For all text files set 'textwidth' to 78 characters.
  autocmd FileType text setlocal textwidth=78

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif

  augroup END

else

  set autoindent		" always set autoindenting on

endif " has("autocmd")

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
""command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
	 	\ | wincmd p | diffthis

map <C-J> <C-W>j<C-W>_
map <C-K> <C-W>k<C-W>_
set t_Co=256
set nohls
set encoding=utf-8
set fileencodings=utf-8
"source $HOME/Code/vim/supertab.vim
set smartindent
set tabstop=2
set shiftwidth=2
set expandtab
set nobackup
set noswapfile
syntax on
set nocompatible
filetype plugin on
filetype on
set nu
""set relativenumber
colors Mustang

"map <S-t> :NERDTree

let mapleader =","
let maplocalleader="\\"
nmap <Leader>n :NERDTreeToggle

nmap <C-h> :tabp
nmap <C-l> :tabn
nmap <Left> :tabp
nmap <Right> :tabn


"highlight code over 80 char per line
"highlight OverLength ctermbg=red ctermfg=white guibg=#592929
"match OverLength /\%81v.*/

"au BufNewFile,BufRead *.pde setf arduino
au BufNewFile,BufRead *.ino setf arduino
let g:CommandTMaxFiles=30000

"Stuff for markdown preview:

"nmap <Leader>r :!rake
"nmap <Leader>rs :!rake spec

:set guioptions-=m  "remove menu bar
:set guioptions-=T  "remove toolbar
:set guioptions-=r  "remove right-hand scroll bar
:set guioptions-=L  "remove right-hand scroll bar
:set gfn=Ubuntu\ Mono\ 12

"highlight OverLength ctermbg=red ctermfg=white guibg=#592929
"match OverLength /\%81v.\+/

au BufNewFile,BufRead Vagrantfile setf ruby

nmap <Leader>w :set textwidth=80
nnoremap <Leader>ev :vsplit $MYVIMRC<cr>
nnoremap <Leader>sv :source $MYVIMRC<cr>

" mappings for fugitive
nnoremap <Leader>gs :Gstatus<cr>
nnoremap <Leader>gb :Gblame<cr>
nnoremap <Leader>gd :Gdiff<cr>

" mappings for rails.vim
nnoremap <Leader>ra :AV<cr>
nnoremap <Leader>rr :RV<cr>
nnoremap <Leader>rc :Rinitializer<cr>

" mappings for .vim/ directory
nnoremap <Leader>vd :NERDTree~/.vim/

nnoremap <Leader>sl :vsplit<cr> <C-w>l

let g:indent_guides_guide_size = 1

" get out the bubbly!

" Bubble single lines
nmap <C-Up> ddkP
nmap <C-Down> ddp

" Bubble multiple lines
vnoremap <Up> xkP`[V`]
vnoremap <Down> xp`[V`]
vnoremap <Left> <gv
vnoremap <right> >gv

" gimme my transparent bg
hi Normal ctermbg=none
hi NonText ctermbg=none

nnoremap <Leader>ib :!ino build
nnoremap <Leader>iu :!ino upload
nnoremap <Leader>ia :!ino build && ino upload

set listchars=eol:$,trail:.
nnoremap <Leader>l :set list!

" Jumping tags like a boss
set tags=./tags,./tmp/tags
nnoremap <Leader>y :CommandTTag

" rails.vim
nnoremap <Leader>rt :Rtags


