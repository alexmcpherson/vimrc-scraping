" All system-wide defaults are set in $VIMRUNTIME/debian.vim (usually just
" /usr/share/vim/vimcurrent/debian.vim) and sourced by the call to :runtime
" you can find below.  If you wish to change any of those settings, you should
" do it in this file (/etc/vim/vimrc), since debian.vim will be overwritten
" everytime an upgrade of the vim packages is performed.  It is recommended to
" make changes after sourcing debian.vim since it alters the value of the
" 'compatible' option.

" This line should not be removed as it ensures that various options are
" properly set to work with the Vim-related packages available in Debian.
runtime! debian.vim

" Uncomment the next line to make Vim more Vi-compatible
" NOTE: debian.vim sets 'nocompatible'.  Setting 'compatible' changes numerous
" options, so any other options should be set AFTER setting 'compatible'.
"set compatible

" Vim5 and later versions support syntax highlighting. Uncommenting the next
" line enables syntax highlighting by default.
syntax on

" If using a dark background within the editing area and syntax highlighting
" turn on this option as well
set background=dark

" Uncomment the following to have Vim jump to the last position when
" reopening a file
if has("autocmd")
  au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
    \| exe "normal g'\"" | endif
endif

" Uncomment the following to have Vim load indentation rules according to the
" detected filetype. Per default Debian Vim only load filetype specific
" plugins.
if has("autocmd")
  filetype indent on
endif

" The following are commented out as they cause vim to behave a lot
" differently from regular Vi. They are highly recommended though.
" set showcmd		" Show (partial) command in status line.
set showmatch		" Show matching brackets.
set ignorecase		" Do case insensitive matching
set smartcase		" Do smart case matching
set incsearch		" Incremental search
set autowrite		" Automatically save before commands like :next and :make
"set hidden             " Hide buffers when they are abandoned
"set mouse=a		" Enable mouse usage (all modes) in terminals

set paste
set nu
set smartindent
set ruler
set laststatus=2
set listchars=tab:>-,trail:-,eol:$,extends:>,precedes:<,nbsp:%

" folding
"set fdm=marker
"set fmr={,}

" set noeol
set bin
set noeol

" highlight all not useable whitespaced at end of line
highlight WhitespaceEOL ctermbg=red guibg=red
match WhitespaceEOL /\s\+$/

set enc=utf-8

"map <F10> :set nu<cr>
"map <F9> :set nonu<cr>
"map <TAB> :set nu<cr>
"map <F12> :only<cr>
"inset hallo
"map <F2> ihallo

" set global vars
let g:numbers=1
let g:wordwrap=0
let g:lists=0

" functions
" function to show linenumbers or to hide
function Showlinenumbers()
if g:numbers == 1
  set nonu
  let g:numbers=0
else
  set nu
  let g:numbers=1
endif
endfunction

" function for wordwrap
function Showwordwrap()
if g:wordwrap == 1
  set nowrap
  let g:wordwrap=0
else
  set wrap
  let g:wordwrap=1
endif
endfunction

" function for list special chars
function Showlists()
if g:lists == 1
  set nolist
  let g:lists=0
else
  set list
  let g:lists=1
endif
endfunction

" function for switching background
function SwitchBackground()
if g:background == 1
  set background=dark
  let g:background=0
else
  set background=light
  let g:background=1
endif
endfunction

" make key mapings
map <F10> :call Showlinenumbers()<cr>
map <F9> :call Showwordwrap()<cr>
map <F8> :call Showlists()<cr>

" open/close folding
map <F5> za
map <F6> zA

" remove unused whitespaces
map <F7> :%s/\s\+$//<cr>

" switching background
map <F4> :call SwitchBackground()<cr>

" indent xml
map <F2> <Esc>:1,$!xmllint --format -<CR>

" indent with mark text again after indent
vmap > >gv
vmap < <gv

" Source a global configuration file if available
" XXX Deprecated, please move your changes here in /etc/vim/vimrc
if filereadable("/etc/vim/vimrc.local")
  source /etc/vim/vimrc.local
endif

