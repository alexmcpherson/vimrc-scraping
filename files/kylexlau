""""""""""""""""""""
" General
""""""""""""""""""""
set nocompatible
set autoread

set history=500

" encoding
set encoding=utf-8
set fileencodings=utf-8,gb18030,gb2312,gbk,cp936,ucs-bom,latin1
set termencoding=utf-8

" enable mouse in many terminal emulators
if has("mouse")
  set mouse=a
endif

" file and backup
set nobackup
set nowritebackup
set noswapfile

" folding
set foldenable
set foldlevel=0

" filetype
filetype plugin on
filetype indent on

" set <leader>
let mapleader = ","
let g:mapleader = ","

" fast svaing and quiting
nmap <leader>w :w!<cr>
nmap <leader>f :find<cr>
nmap <leader>x :wq<cr>

" fast reloading and editing of the .vimrc
map <leader>s :source ~/prj/vim/vimrc<cr>
map <leader>e :e! ~/prj/vim/vimrc<cr>
autocmd! bufwritepost vimrc source ~/prj/vim/vimrc

""""""""""""""""""""
" Colors and Fonts
""""""""""""""""""""
" when terminal has colors, syntax on.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

" font
if has("win32")
  set guifont=Consolas:h11:cANSI
  "set guifontwide=YaHei\ Consolas\ Hybrid:h11
  "set guifont=Monaco:h10:cANSI
  "set guifont=Courier\ New:h12:cANSI
endif

" color scheme 
if has("gui_running")
  colorscheme elflord
else
  set background=dark
  colorscheme zellner
endif

" highlight current
if has("gui_running")
  set cursorline
  hi cursorline guibg=#333333
  hi CursorColumn guibg=#333333
endif

""""""""""""""""""""
" File formats
""""""""""""""""""""
" favorite filetypes
set ffs=unix,dos,mac

nmap <leader>fd :set ff=dos<cr>
nmap <leader>fu :set ff=unix<cr>

""""""""""""""""""""
" User interface
""""""""""""""""""""
" get rid of toolbar, scrollbar and menu
set go=

" wild menu: ^D to completion
set wildmenu

" scorlloff, 7 lines on top when moving vertical
set scrolloff=7

" show current position
set ruler

" show line number
set number

" commandbar height
set cmdheight=1

" lazy redraw
set lazyredraw

" change buffer without saving
set hidden

" set backspace
set backspace=eol,start,indent

" igore case when searching
set ignorecase

" incremental search and highlight search
set incsearch

" magic on
set magic

" no sound on error
set noerrorbells
set novisualbell

" match time
set matchtime=2

""""""""""""""""""""
" Status line
""""""""""""""""""""
" always show the statusline
set laststatus=2

function! CurDir()
  let curdir = substitute(getcwd(), '/home/kyle/', "~/", "g")
  return curdir
endfunction

" format the statusline
set statusline=\ %F%m%r%h\ %w\ \ CWD:\ %r%{CurDir()}%h\ \ \ Line:\ %l/%L:%c


""""""""""""""""""""""""""
" Moving around and tabs
""""""""""""""""""""""""""
" space to / and a-space to ?
map <space> /
map <a-space> ?

" move within windows
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l

" arrow to switch buffer
map <right> :bn<cr>
map <left> :bp<cr>

" tab config
map <leader>tn :tabnew %<cr>
map <leader>te :tabedit
map <leader>tc :tabclose<cr>
map <leader>tm :tabmove
try
  set switchbuf=usetab
  set showtabline=2
catc
endtry

""""""""""""""""""""
" Text options
""""""""""""""""""""
" tab
set expandtab
set shiftwidth=2
set smarttab

map <leader>t2 :set shiftwidth=2<cr>
map <leader>t4 :set shiftwidth=4<cr>

autocmd FileType html,python,ruby,vim,javascript setl shiftwidth=2
autocmd FileType html,python,ruby,vim,javascript setl tabstop=2

" indent
set autoindent
set smartindent
set cindent
set wrap

" line
set linebreak
set textwidth=78

"""""""""""""""""""""""
" Plugin configuration
"""""""""""""""""""""""
" runtimepath
if has("win32")
  set runtimepath=~/prj/vim/vimfiles,d:\prog\vim/vimfiles,d:\prog\vim\vim72
elseif has("unix")
  set runtimepath=~/prj/vim/vimfiles,/usr/share/vim/vim72
endif

" supertab
"
" minibuf explorer
let g:miniBufExplMapWindowNavVim = 1
let g:miniBufExplMapWindowNavArrows = 1
let g:miniBufExplMapCTabSwitchBufs = 1
let g:miniBufExplModSelTarget = 1

" tasklist
map T :TaskList<CR>
map P :TlistToggle<CR>

"""""""""""""""""""""""
" MISC
"""""""""""""""""""""""
" remove the windows ^M
noremap <Leader>m mmHmt:%s/<C-V><cr>//ge<cr>'tzt'm

" paste toggle - when pasting something in, don't indent.
set pastetoggle=<F3>

