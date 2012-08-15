" organization:
"0. pathogen
"1. locale
"2. vim behavior
"3. key bindings
"4. vim ui
"5. plugins

" used plugins:
" AutoComplPop http://www.vim.org/scripts/script.php?script_id=1879
" VimClojure http://www.vim.org/scripts/script.php?script_id=2501
" zen-coding http://www.vim.org/scripts/script.php?script_id=2981
" snipMate http://www.vim.org/scripts/script.php?script_id=2540 
" YankRing http://www.vim.org/scripts/script.php?script_id=1234
" surround http://www.vim.org/scripts/script.php?script_id=1697
" LustyExplorer http://www.vim.org/scripts/script.php?script_id=1890
" LustyJuggler http://www.vim.org/scripts/script.php?script_id=2050
" pydiction http://www.vim.org/scripts/script.php?script_id=850
" pyflakes http://www.vim.org/scripts/script.php?script_id=2441
" IndentAnything http://www.vim.org/scripts/script.php?script_id=1839
" ftplugin:python && pytho_fn http://www.vim.org/scripts/script.php?script_id=30
" NERDCommenter http://www.vim.org/scripts/script.php?script_id=1218
" javascript indent http://www.vim.org/scripts/script.php?script_id=1840
" javascript syntax http://www.vim.org/scripts/script.php?script_id=1491
" matchit http://www.vim.org/scripts/script.php?script_id=39
" css-color http://www.vim.org/scripts/script.php?script_id=2150
" taglist http://www.vim.org/scripts/script.php?script_id=273
" rails http://www.vim.org/scripts/script.php?script_id=1567
" NERDTree http://www.vim.org/scripts/script.php?script_id=1658
"
" This must be first, because it changes other options as a side effect.
set nocompatible

"turn filetype detection off to avoid any error before pathogen loads all plugins
filetype off 
call pathogen#helptags()
call pathogen#runtime_append_all_bundles() 

" Multi-encoding setting, MUST BE IN THE BEGINNING OF .vimrc!
set fenc=utf-8
if has("multi_byte")
  " When 'fileencodings' starts with 'ucs-bom', don't do this manually
  " set bomb
  set fileencodings=utf-8,ucs-bom,chinese,taiwan,japan,korea,latin1
  " CJK environment detection and corresponding setting
  if v:lang =~ "^zh_CN"
    " Simplified Chinese, on Unix euc-cn, on MS-Windows cp936
    set encoding=chinese
    "set termencoding=chines
    if &fileencoding == ''
      set fileencoding=chinese
    endif
  elseif v:lang =~ "^zh_TW"
    " Traditional Chinese, on Unix euc-tw, on MS-Windows cp950
    set encoding=taiwan
    "set termencoding=taiwan
    if &fileencoding == ''
      set fileencoding=taiwan
    endif
  elseif v:lang =~ "^ja_JP"
    " Japanese, on Unix euc-jp, on MS-Windows cp932
    set encoding=japan
    "set termencoding=japan
    if &fileencoding == ''
      set fileencoding=japan
    endif
  elseif v:lang =~ "^ko"
    " Korean on Unix euc-kr, on MS-Windows cp949
    set encoding=korea
    "set termencoding=korea
    if &fileencoding == ''
      set fileencoding=korea
    endif
  endif
   " Detect UTF-8 locale, and override CJK setting if needed
  if v:lang =~ "utf8$" || v:lang =~ "UTF-8$"
    set encoding=utf-8
  endif
else
  echoerr 'Sorry, this version of (g)Vim was not compiled with "multi_byte"'
endif

"Behaviors
set autowrite
set autochdir
set autoread "autoreload external modification
" jump to the last position when reopening a file
au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
"au FocusLost * :wa " autosave when losing window focus

set autoindent
set smartindent
set backspace=indent,eol,start "allow backspacing over everything in insert mode
"set copyindent
set formatoptions+=mM " so that vim can reformat multibyte text (e.g. Chinese)
"set hidden " hide buffers rather than close it when :e
set hidden
set history=1000 "keep 50 lines of command line history
set incsearch
set mouse=a " use mouse in all modes 
set novisualbell "Use visual bell instead of beeping.
set report=0 " always report number of lines changed
set ignorecase
set smartcase
set shortmess=atI " shorten messages to avoid 'press a key' prompt 
set undolevels=1000
set wildmenu " type :h and press <Tab> to look what happens 
set wildignore+=*.swp,*.pyc,*.class
set tabstop=4
set textwidth=120
set shiftwidth=4
set expandtab
set smarttab

set foldenable " turn on folding 
set foldmethod=manual " make folding indent sensitive 
set foldlevel=100 " don't autofold anything (but I can still fold manually) 
set foldopen -=search " don't open folds when you search into them 
set foldopen -=undo " don't open folds when you undo stuff 
nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR>

set directory=~/.vim/swaps  "where to put swap file
if has("vms")
  set nobackup          " do not keep a backup file, use versions instead
else
  set backup            " keep a backup file
  set backupdir=.
endif

filetype on  
filetype plugin on
filetype plugin indent on
syntax on

"Key bindings

" clear highlighted searches
nmap <silent> ,/ :nohlsearch<CR>

" now use ; to issue a command
nnoremap ; :
let mapleader=","

" convinent key map for cut/paste from system clipboard
nnoremap <leader>P "+P
nnoremap <leader>p "+p
nnoremap <leader>g "+g

nmap <silent> B :bd<CR>

" turns off Vim’s crazy default regex characters
nnoremap / /\v
vnoremap / /\v

" Quickly edit/reload the vimrc file
nmap <silent> <leader>ev :e $MYVIMRC<CR>
nmap <silent> <leader>sv :so $MYVIMRC<CR>

nnoremap <silent> <F4> :execute 'NERDTreeToggle ' . getcwd()<CR>
nnoremap <silent> <F5> :TlistToggle<CR>
nnoremap <silent> <leader>M :MRU<CR>

nnoremap <up> <nop>
nnoremap <down> <nop>
nnoremap <left> <nop>
nnoremap <right> <nop>
inoremap <up> <nop>
inoremap <down> <nop>
inoremap <left> <nop>
inoremap <right> <nop>
nnoremap j gj
nnoremap k gk

nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" strips off all trailing spaces
nnoremap <leader>W :%s/\s\+$//<cr>:let @/=''<CR>
" sort css properties
nnoremap <leader>S ?{<CR>jV/^\s*\}?$<CR>k:sort<CR>:noh<CR>
nnoremap <silent> <F11> :YRShow<CR>
let @h = "yypVr"

" for tab operations
:nmap <C-S-tab> :tabprevious<cr>
:nmap <C-tab> :tabnext<cr>
:imap <C-S-tab> <ESC>:tabprevious<cr>i
:imap <C-tab> <ESC>:tabnext<cr>i
:nmap <C-t> :tabnew<cr>
:imap <C-t> <ESC>:tabnew<cr>i
:map <A-w> :tabclose<cr>

"----------------------

"UI
color molokai
set cmdheight=2 " use 2 screen lines for command-line 
set cursorline
set hlsearch
set linespace=3 " space it out a little more (easier to read) 
set lazyredraw " do not redraw while executing macros (much faster) 
set laststatus=2 "show status bar. 1 for hidden
set modelines=0
set number 
set showcmd "Show (partial) command in status line.
set showmatch 
set statusline=%F%m%r%h%w\ [FORMAT:%{&ff}]\ [TYPE:%Y]\ [HEX:\%02.2B]\ [%p%%]\ [LEN:%L] 
set so=3 "Minimal screen lines to keep above and below the cursor.
"set title "change the terminal's title
set wrap
set whichwrap+=<,>,h,l " allow backspace and cursor keys to wrap 

if has("gui_running")
    set guioptions=e
    set showtabline=2
endif

if has("gui_gtk2")
  "using different fonts for English and Chinese" 
  set guifont=Monaco\ 13
  set guifontwide=Lucida\ Console\ 13
endif

"Plugins

"autocmd BufNewFile *.py 0r ~/.vim/skeleton/skeleton.py
autocmd FileType python set complete+=k~/.vim/ftplugin/python_pydiction.vim "iskeyword+=.,(
autocmd FileType php let b:surround_45 = "<?php \r ?>"
let g:pydiction_location = '~/.vim/ftplugin/pydiction/complete-dict'
let g:acp_behaviorKeywordLength = 3
let g:LustyJugglerShowKeys = 'a'
"let g:LustyJugglerShowKeys = 1
let g:surround_108 = "\1chars: \1\r\1\1"
let Tlist_Show_One_File = 1
let vimclojure#HighlightBuiltins = 1
let vimclojure#WantNailgun = 1
let vimclojure#NailgunClient = '/home/winus/clj/vimclojure/client/ng'
let vimclojure#ParenRainbow = 1
let vimclojure#SplitPos = "bottom"
"let vimclojure#SplitSize = 20
"
let NERDChristmasTree=1
let NERDTreeChDirMode=2
let NERDTreeShowBookmarks=1

" for haskellmode
au BufEnter *.hs compiler ghc
let g:haddock_browser="/usr/bin/google-chrome"
let g:haddock_docdir="/usr/share/haddock-2.6.0/html/"

" for vimwiki

autocmd FileType vimwiki map <Leader>wt <Plug>VimwikiToggleListItem
autocmd FileType vimwiki map <Leader>wc <Plug>VimwikiMakeDiaryNote
