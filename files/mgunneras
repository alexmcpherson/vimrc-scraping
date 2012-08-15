" ---------------------------------------------------------------------------
"  Pathogen (must be set up before filetype detection)
" ---------------------------------------------------------------------------

" system's .vimrc calls filetype; turn it off here to force reload
filetype on " turn on to avoid non-zero exit code on OSX
filetype off
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()
filetype plugin indent on

" ---------------------------------------------------------------------------
"  General settings
" ---------------------------------------------------------------------------

set nocompatible

" Prevent security exploits
set modelines=0

" Lots of history
set history=1000

" Sane encoding
set encoding=utf-8


" ----------------------------------------------------------------------------
"  Backups
" ----------------------------------------------------------------------------

set nobackup               " do not keep backups after close
set nowritebackup          " do not keep a backup while working
set noswapfile             " don't keep swp files either
set backupdir=~/.vim/backup " store backups under ~/.vim/backup
set backupcopy=yes         " keep attributes of original file
set backupskip=/tmp/*,$TMPDIR/*,$TMP/*,$TEMP/*
set directory=~/.vim/swap,~/tmp,. " keep swp files under ~/.vim/swap
set undofile              " 7.3 feature

" ----------------------------------------------------------------------------
"  UI
" ----------------------------------------------------------------------------

set relativenumber         " show line numbers
"set number
set ruler                  " show the cursor position all the time
set scrolloff=3            " start scrolling before cursor at end
set noshowcmd              " don't display incomplete commands
set nolazyredraw           " turn off lazy redraw
set wildmenu               " turn on wild menu (better filename completion)
set wildmode=list:longest,full
set backspace=indent,eol,start
set whichwrap+=<,>,h,l,[,] " backspace and cursor keys wrap to
set shortmess=atI          " shorten messages
set report=0               " tell us about changes
set nostartofline          " don't jump to the start of line when scrolling
set linebreak              " wrap long lines between words

" ----------------------------------------------------------------------------
"  Visual Cues
" ----------------------------------------------------------------------------

syntax on                  " enable syntax highlighting
set t_Co=256
let loaded_matchparen=1    " don't hightlight matching brackets/braces
set laststatus=2           " always show the status line
set hlsearch               " highlight all search terms
set incsearch              " highlight search text as entered
set ignorecase             " ignore case when searching
set smartcase              " case sensitive only if capitals in search term
set colorcolumn=80        " not available until Vim 7.3
set visualbell             " shut the fuck up
set showmode               " Indicates input or replace mode at bottom
set showcmd                 
set hidden
set ttyfast
colorscheme molokai

" ----------------------------------------------------------------------------
"  Text Formatting
" ----------------------------------------------------------------------------

set wrap
set textwidth=79
set formatoptions=qrn1
set expandtab              " expand tabs to spaces
set softtabstop=2
set shiftwidth=2           " distance to shift lines with < and >
set ts=4                   " tab character display size
set autoindent

" ----------------------------------------------------------------------------
"  Autocommands
" ----------------------------------------------------------------------------

function! MakeExecutable()
  silent !chmod a+x %
endfunction

" on save, make file executable if has shebang line with '/bin/'
au BufWritePost * if getline(1) =~ "^#!/bin/" | :call MakeExecutable() | endif

" ---------------------------------------------------------------------------
"  Variables
" ---------------------------------------------------------------------------

let mapleader = ","
let g:ackprg="ack-grep\\ -H\\ --nocolor\\ --nogroup\\ --column" " for Ack plugin

" ----------------------------------------------------------------------------
"  Mappings
" ----------------------------------------------------------------------------

" Y to yank to end of line
map Y y$

" Ctrl-x to close current buffer
map <C-x> :q<CR>

" Press Space to turn off highlighting and clear any message already displayed.
nnoremap <silent> <Space> :nohlsearch<Bar>:echo<CR>

" move up and down by screen lines instead of text lines
nnoremap j gj
nnoremap k gk

" faster viewport scrolling
nnoremap <C-e> 3<C-e>
nnoremap <C-y> 3<C-y>

" easy file saving
map <C-s> :w<CR>

" easy ack
nnoremap <Leader>a :Ack 

" change directory to that of current file
cmap cdc cd %:p:h

" map Ctrl+n and Ctrl+p to jump between open buffers
nnoremap <C-n> :bnext<CR>
nnoremap <C-p> :bprevious<CR>

" ---------------------------------------------------------------------------
"  Split Navigation
" ---------------------------------------------------------------------------

" go left, right, up, down
nmap <C-h> <C-w>h
nmap <C-j> <C-w>j
nmap <C-k> <C-w>k
nmap <C-l> <C-w>l

" ---------------------------------------------------------------------------
"  Spell Checking
" ---------------------------------------------------------------------------

" ,ss toggles spell checking
map <Leader>ss :setlocal spell!<cr>

" spell checking shortcuts (next, prev, add, suggest)
map <Leader>sn ]s
map <Leader>sp [s
map <Leader>sa zg
map <Leader>s? z=

" ---------------------------------------------------------------------------
"  Handling Whitespace
" ---------------------------------------------------------------------------

"  strip trailing whitespace
map <Leader>ks :%s/\s\+$//g<CR>

"  convert tabs to spaces
map <Leader>kt :%s/\t/  /g<CR>

" ---------------------------------------------------------------------------
"  Copy/Paste Shortcuts
" ---------------------------------------------------------------------------

" copy to system clipboard
vmap <C-c> "+y

" paste in NORMAL mode from system clipboard (at or after cursor)
nmap <Leader>V "+gP
nmap <Leader>v "+gp

" paste in INSERT mode from Vim's clipboard (unnamed register)
imap vp <ESC>pa

" paste in INSERT mode from system clipboard
imap vv <ESC>"+gpa

" paste in COMMAND mode from Vim's clipboard (unnamed register)
cmap vp <C-r>"

" paste in COMMAND mode from system clipboard
cmap vv <C-r>+

" ----------------------------------------------------------------------------
"  Graphical
" ----------------------------------------------------------------------------

if has('gui_running')

  if system("uname") == "Darwin\n" " on OSX
    set guifont=Monaco
    set lines=70
    set columns=236
  else                         " on Ubuntu
    set guifont=Monospace\ 8
    winpos 1100 0              " put window at right edge of left monitor
    set lines=85
    set columns=140
  endif

  "colorscheme molokai
  set guioptions=gemc          " show menu, tabs, console dialogs

  set cursorline

  " --------------------------------------------------------------------------
  "  Highlight Trailing Whitespace
  " --------------------------------------------------------------------------

  " note that this inhibits the linebreak option so lines will wrap mid-word
  set list listchars=trail:.,tab:>.
  highlight SpecialKey ctermfg=DarkGray ctermbg=Black

  " --------------------------------------------------------------------------
  "  Tab Navigation
  " --------------------------------------------------------------------------

  set guitablabel=%N\ %t\ %M\ %r

  " quick open new tab
  map <Leader>t :tabnew<CR>

  " C-TAB and C-SHIFT-TAB cycle tabs forward and backward
  nmap <C-tab> :tabnext<CR>
  imap <C-tab> <C-o>:tabnext<CR>
  vmap <C-tab> <C-o>:tabnext<CR>
  nmap <C-S-tab> :tabprevious<CR>
  imap <C-S-tab> <C-o>:tabprevious<CR>
  vmap <C-S-tab> <C-o>:tabprevious<CR>

  " jump directly to tab
  let i=1
  while i<=9
    execute "map <Leader>".i." ".i."gt<CR>"
    let i+=1
  endwhile
endif


" ----------------------------------------------------------------------------
"  NERDTree
" ----------------------------------------------------------------------------

" Launch on startup if no file is openened
autocmd vimenter * if !argc() | NERDTree | wincmd p | endif

" Toggle visibility with F2
map <F2> :NERDTreeToggle<CR>

" Hide files
let NERDTreeIgnore = ['\.pyc$']

autocmd WinEnter * call s:CloseIfOnlyNerdTreeLeft()

" Close all open buffers on entering a window if the only
" buffer that's left is the NERDTree buffer
function! s:CloseIfOnlyNerdTreeLeft()
  if exists("t:NERDTreeBufName")
    if bufwinnr(t:NERDTreeBufName) != -1
      if winnr("$") == 1
        q
      endif
    endif
  endif
endfunction

