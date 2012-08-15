" We are not stuck back in 1976.
set nocompatible

runtime bundle/vim-pathogen.git/autoload/pathogen.vim
call pathogen#infect()
syntax enable
filetype plugin indent on

set smartindent
set autoindent

"{{{ Colorscheme
set background=dark
"}}}

"{ Useability/misc
" show (partial) command in status line
set showcmd
" show function arguments if any during autocompletion
set showfulltag
" show matching brackets a.o.
set showmatch
" while browsing through windows set non active non visable
set winminwidth=0
set winminheight=0
" when splittin open window below
set splitbelow
" number of commands and other things to remember
set history=50
" things to log in viminfo
set viminfo='50,/30,"50,
set complete=.,w,b,u,U,t,i,d,k,kspell
" set dict=/usr/share/dict/words
" set thesaurus
" wild
set wildmode=list:longest,full
set wildmenu
" when compeleting insert longest commen text
set completeopt=menu,menuone,longest,preview
"}
"{ Moving
" keep cursor in same column when moving cursor up and down
set nostartofline
" easy jumping from from end of one sentence to beggining of the next
set whichwrap=<,>,[,],b,s,h,l
" make backspace usable
set backspace=indent,eol,start
"for moving around between windows
imap <C-w> <C-o><C-w>
nmap <C-h> <C-w>h<C-w>_
nmap <C-j> <C-w>j<C-w>_
nmap <C-k> <C-w>k<C-w>_
nmap <C-l> <C-w>l<C-w>_
nmap <C-i> <C-w><
nmap <C-o> <C-w>>
"}

"{ Wrapping
" I don't care for wrapping text
set nowrap
" But here are some sensible settings if wrapping is needed
set showbreak=" \ "
" Indent after textwrap
set wrapmargin=2
" for emails this might be a good setting
"set textwidth=72
"}
"{ Search
set hlsearch
" highlight as you are typing a searchpattern
set incsearch
" set casesentitive search
set noignorecase
"}

"{ Tabs(\t) - I don't like 'em
" number of spaces in an indent tab
set shiftwidth=2
"number of spaces in a tab
set tabstop=2
set softtabstop=2
"inserts space characters whenever the tab key is pressed
set expandtab
"}

"{ Foldes 
"set foldclose=all
set foldmethod=marker
set foldnestmax=5
set foldminlines=4
set foldmarker={,}
" Movements that open folds
set foldopen=block,hor,mark,percent,quickfix,search,tag,undo
"}
"{ Backups
"write a backup before writing to a file
set writebackup
"wite content on file if its been modified
set autowriteall
"place to put Backups
set backupdir=~/.vim/backups
"}
"{ file formats
" I dont like wintendo
set fileformat=unix
set encoding=utf-8
set termencoding=iso-8859-1
"}

" { Misc (unsorted)
" Highlight current line
set cursorline
" do not update screen while running macros
set lazyredraw
" show tabs and trainling spaces
"set list
"in this mannor
"set listchars=trail:-
" report number of lines changed
set report=0

" keep lines/chars from the edge when moving
set scrolloff=10
set sidescrolloff=10

set formatoptions=rqo
" }


"plugins

" if needed I can overwrite my general vim settings on a system basis here
if filereadable($HOME."/.vimrc.local")
   source ~/.vimrc.local
endif

