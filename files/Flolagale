" My vimrc file based on the vimrc example from Bram Moolenar
" and various tricks from here and there.
"
" Maintainer:   Florent Galland <florent1@caoutchoux.org>
" Last change:  2012 Mar 07
"

" Fisrt make sure that this file has the correct folding method.
set foldmethod=marker

" Then make sure to use English messages and help.
set helplang=en
if has('win32')
    language message en
endif

" PLUGINS MANAGEMENT {{{1
" Use the vundle plugin to manage all the installed plugins.

" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" Install Vundle if necessary.
" You must have git and cygwin installed.
let s:justvundled = 0
if has('win32')
    call system('dir %HOMEPATH%\vimfiles\bundle\vundle')
else
    call system('ls ~/.vim/bundle/vundle')
endif
if v:shell_error
    if has('win32')
        call system('mkdir %HOMEPATH%\vimfiles\bundle\vundle')
        call system('git clone https://github.com/gmarik/vundle.git %HOMEPATH%\vimfiles\bundle\vundle')
    else
        call system('mkdir -p ~/.vim/bundle/vundle')
        call system('git clone https://github.com/gmarik/vundle.git ~/.vim/bundle/vundle')
    endif
    if !v:shell_error
        let s:justvundled = 1
    endif
endif

if has('win32')
    set rtp+=%HOMEPATH%\vimfiles\bundle\vundle
else
    set rtp+=~/.vim/bundle/vundle/
endif
call vundle#rc()

" let Vundle manage Vundle
" required! 
Bundle 'gmarik/vundle'

" My Bundles here:
"
" original repos on github
Bundle 'ctrlp.vim'
Bundle 'Syntastic'
Bundle 'snipMate'
Bundle 'surround.vim'
" Bundle 'CmdlineComplete'
Bundle 'transpose-words'
Bundle 'kana/vim-smartinput'
Bundle 'taglist.vim'
Bundle 'Gundo'
Bundle 'AutoComplPop'
Bundle 'vim-indent-object'
Bundle 'scratch.vim'

" Color schemes.
Bundle 'github-theme'
Bundle 'molokai'
Bundle 'sexy-railscasts'
Bundle 'nelstrom/vim-mac-classic-theme'
Bundle 'altercation/vim-colors-solarized'
Bundle 'gmarik/ingretu'

" My own ones.
Bundle 'Flolagale/kamakou'
Bundle 'Flolagale/vimcolors'

" Enable file type detection.
" Use the default filetype settings, so that mail gets 'tw' set to 72,
" 'cindent' is on in C files, etc.
" Also load indent files, to automatically do language-dependent indenting.
filetype plugin indent on

" Now that all the bundles are defined, if Vundle was just installed here,
" retrieve all the bundles from github.
if s:justvundled
    :BundleInstall
endif

 " Brief help
 " :BundleList          - list configured bundles
 " :BundleInstall(!)    - install(update) bundles
 " :BundleSearch(!) foo - search(or refresh cache first) for foo
 " :BundleClean(!)      - confirm(or auto-approve) removal of unused bundles
 "
 " see :h vundle for more details or wiki for FAQ
 " NOTE: comments after Bundle command are not allowed..

" PLUGINS OPTIONS {{{1
" CtrlP
" Make the CtrlP cache persistent between sessions.
let g:ctrlp_clear_cache_on_exit = 0

" Use the parent directory o the current file as root directory.
let g:ctrlp_working_path_mode = 1

" DEFAULTS ANG GENERAL OPTIONS {{{1
" When started as "evim", evim.vim will already have done these settings.
if v:progname =~? "evim"
  finish
endif

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

if has("vms")
    set nobackup        " do not keep a backup file, use versions instead
else
    set backup               " keep a backup file
    set backupdir=$tmp,~/tmp " keep backups in a separate directory
    set writebackup
endif

set history=50      " keep 50 lines of command line history
set ruler       " show the cursor position all the time
set showcmd     " display incomplete commands
set incsearch       " do incremental searching

" Always show a bit of context around the current editing line.
set scrolloff=3

" For Win32 GUI: remove 't' flag from 'guioptions': no tearoff menu entries
let &guioptions = substitute(&guioptions, "t", "", "g")

" Don't use Ex mode, use Q for formatting
map Q gq

" CTRL-U in insert mode deletes a lot.  Use CTRL-G u to first break undo,
" so that you can undo CTRL-U after inserting a line break.
inoremap <C-U> <C-G>u<C-U>

" In many terminal emulators the mouse works just fine, thus enable it.
" if has('mouse')
  " set mouse=a
" endif

" Set terminal to have 256 colors.
set t_Co=256

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

colorscheme kamakou

" Set font and window size and position when GUI is running.
if has("gui_running")
  set guifont=Monaco
  " set lines=60 columns=132
  set lines=60 columns=157
  winpos 785 0
endif

set sessionoptions+=resize,winpos

" Only do this part when compiled with support for autocommands.
if has("autocmd")

  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
  au!

  " For all text files set 'textwidth' to 78 characters.
  autocmd FileType text setlocal textwidth=78

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  " Also don't do it when the mark is in the first line, that is the default
  " position when opening a file.
  autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif

  augroup END

else

  set autoindent        " always set autoindenting on

endif " has("autocmd")

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
  command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
          \ | wincmd p | diffthis
endif

" Set the case handling for searches. The couple ignoorecase + smartcase
" make the search case insensitive if the whole string after / is lower case,
" and case sensitive if there is at least one upper case letter in the string.
set ignorecase
set smartcase

" Options for the diff mode.
set diffopt=filler,vertical

" Set the defaults encoding and fileformats.
set encoding=utf8
set ffs=unix,dos

" Toggle Menu and Toolbar with F2.
set guioptions-=m
set guioptions-=T
map <silent> <F2> :if &guioptions =~# 'T' <Bar>
\set guioptions-=T <Bar>
\set guioptions-=m <bar>
\else <Bar>
\set guioptions+=T <Bar>
\set guioptions+=m <Bar>
\endif<CR>

" Set the option of the command line completion.
set wildmode=longest,full
set wildmenu

"  TEXT PRESENTATION {{{1
" Change tab width and alway use spaces.
set tabstop=4
set shiftwidth=4
set smarttab
set expandtab
retab

" Line numbering.
set number
hi LineNr ctermfg=3

" Set the 'lastest search' register to the empty string when entering insert
" mode. This makes disappear the hlsearch highlightening on entering the
" insert modeing.
"autocmd InsertEnter * let @/=""
"autocmd InsertLeave * let @/=""
" other option:
autocmd InsertEnter * set nohlsearch
autocmd InsertLeave * set hlsearch

" Handle the status line
set laststatus=2
set statusline=%<%-.40F\ %y%m%r%=\[%{&fenc}\]\ %-14.(%l,%c%V%)\ %P

" Put all the python highlightings on.
let python_highlight_all = 1

" For vim, python, c and cpp files set 'textwidth' to 80 characters.
autocmd FileType vim,python,c,cpp,sh setlocal textwidth=80

" For python files, set the formating options to autowrap the comments at 80
" characters and automatically insert the leading comment char.
autocmd FileType python,vim,sh setlocal formatoptions-=t formatoptions+=c formatoptions+=r formatoptions+=o formatoptions+=q formatoptions+=l

" Associate the *.jou files to the lisp syntax highlighting.
autocmd BufNewFile,BufRead *.jou set filetype=lisp

" Associate the *.plt files to the gnuplot syntax highlighting.
autocmd BufNewFile,BufRead *.plt set filetype=gnuplot

" Associate the *.wbjn files to the python syntax highlighting.
autocmd BufNewFile,BufRead *.wbjn set filetype=python

" Set the default size of the TagList plugin window.
let TList_WinWidth = 50

"  MAPPING AND SHORTCUTS {{{1
" Commenting and uncommenting functions, same mapping as in visual studio.
function! Comment()
    if &ft == 'python' || &ft == 'sh' || &ft == 'gnuplot' || &ft == 'conf'
        s/^\(\s*\)/\1# /
    elseif &ft == 'vim'
        s/^\(\s*\)/\1" /
    elseif &ft == 'cpp' || &ft == 'javascript'
        s/^\(\s*\)/\1\/\/ /
    elseif &ft == 'c'
        s/^\(\s*\)\(.*\)$/\1\/* \2 *\//
    elseif &ft == 'lisp' || &ft == 'scheme'
        s/^\(\s*\)/\1;; /
    elseif &ft == 'tex'
        s/^\(\s*\)/\1% /
    endif
endfunction
map <silent> <C-k><C-k> :call Comment()<CR>

" Note that the 'e' option of the substitute command means
" 'don't break command if no search string found'.
function! Uncomment()
    if &ft == 'python' || &ft == 'sh' || &ft == 'gnuplot' || &ft == 'conf'
        s/^\(\s*\)\(#\s*\)/\1/e
    elseif &ft == 'vim'
        s/^\(\s*\)\("\s*\)/\1/e
    elseif &ft == 'cpp' || &ft == 'javascript'
        s/^\(\s*\)\(\/\/\s*\)/\1/e
    elseif &ft == 'c'
        s/^\(\s*\)\/\* \(.*\) \*\/$/\1\2/e
    elseif &ft == 'lisp' || &ft == 'scheme'
        s/^\(\s*\)\(;;\s*\)/\1/e
    elseif &ft == 'tex'
        s/^\(\s*\)\(%\s*\)/\1/e
    endif
endfunction
map <silent> <C-k><C-u> :call Uncomment()<CR>

" Remap the shortcut to go to the tag corresponding to the word under the cursor.
map c]  <C-]>

" Shortcut to preview the tag corresponding to the word under the cursor in a
" preview window. Press Ctrl-W Ctrl-Z to close the preview windows.
map <silent> cp]  :ptag <C-R><C-W> <CR>

" Remap the key '²' to Esc.
imap ² <Esc>
imap jk <Esc>

" Windows like movements for long lines with wrap enabled:
noremap j gj
noremap k gk

" Toggle between the current and previously edited files.
" See 'alternate' topic in help.
map cù :b#<CR>

" Remap code completion to Ctrl+N and Ctrl+Space. 
"inoremap <C-Space> <C-n>

" Smart way to move between windows
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l

" Smart way to move windows themselves
map <M-j> <C-W><S-j>
map <M-k> <C-W><S-k>
map <M-h> <C-W><S-h>
map <M-l> <C-W><S-l>

" Add emacs mapping to navigate in command mode.
cnoremap <C-a> <Home>
cnoremap <C-e> <End>
cnoremap <C-p> <Up>
cnoremap <C-n> <Down>
cnoremap <C-b> <Left>
cnoremap <C-f> <Right>
cnoremap <M-b> <S-Left>
cnoremap <M-f> <S-Right>

" Due to refresh bug on Ubuntu, very often :redraw! has to be called to refresh
" the screen manually. Map it to \r for convinience.
map <leader>r :redraw!<CR>

" COMMANDS AND AUTOMATION {{{1
" Change tabs for spaces.
function! ChangeTabForSpaces()
    set expandtab
    retab
endfunction
autocmd BufWritePost *.py,*.vim call ChangeTabForSpaces()

" Generate ctags on demand.
function! GenerateTags()
    silent! !ctags -R --extra=+q --fields=+aimS --c-kinds=+p --c++-kinds=+p &
endfunction
command GenerateTags call GenerateTags()

" Generate ctags on saving.
autocmd BufWritePost *.cpp,*.h,*.c,*.py call GenerateTags()

" Command to set the vim working directory to the current edited file dir.
command ChangeDirToCurrentFileDir :cd %:p:h

" Command to open the currently edited file in sublime text.
command SublimeThatFile silent! !"C:\\Program Files\\Sublime Text 2\\sublime_text.exe" % &
