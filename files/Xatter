call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

set nocompatible
let mapleader = ","

" Tabs ************************************************************************
"set sta " a <Tab> in an indent inserts 'shiftwidth' spaces
set autoread "diable read-only to write warnings

function! Tabstyle_tabs()
  " Using 4 column tabs
  set softtabstop=4
  set shiftwidth=4
  set tabstop=4
  set noexpandtab
endfunction

function! Tabstyle_spaces()
  " Use 2 spaces
  set softtabstop=2
  set shiftwidth=2
  set tabstop=2
  set expandtab
endfunction

call Tabstyle_spaces()

" Indenting *******************************************************************
set ai " Automatically set the indent of a new line (local to buffer)
set si " smartindent (local to buffer)

" Scrollbars ******************************************************************
set sidescrolloff=2
set numberwidth=4

" Windows *********************************************************************
set equalalways " Multiple windows, when created, are equal in size
set splitbelow splitright

" Cursor highlights ***********************************************************
"set cursorline
set cursorcolumn

" Searching *******************************************************************
set hlsearch  " highlight search
set incsearch  " Incremental search, search as you type
set ignorecase " Ignore case when searching 
set smartcase " Ignore case when searching lowercase

" Colors *****************************************************************
syntax on
"let g:solarized_termcolors=256

if has('gui_running')
  set background=light
else
  set background=dark
endif

if $TERM =~ '^xterm'
  set t_Co=256 
elseif $TERM =~ '^screen-bce'
  set t_Co=256            " just guessing
elseif $TERM =~ '^rxvt'
  set t_Co=88
elseif $TERM =~ '^linux'
  set t_Co=8
else
  set t_Co=16
endif

"colorscheme ir_black
colorscheme solarized 

" Status Line ************************************************************
set showcmd
set ruler

" File Specific Syntax Highlighting **************************************
" When starting to edit a file:
"   For Java, C, and C++ files set formatting of comments and set
"   C-indenting on.   For other files switch it off.
"   Don't change the sequence, it's important that the line with * comes first.
"if has("autocmd")
"    autocmd BufRead * set formatoptions=tcql nocindent comments&
"    autocmd BufRead *.java,*.c,*.cpp,*.h,*.cc,*.cs set formatoptions=ctroq cindent comments=sr:/**,mb:*,elx:*/,sr:/*,mb:*,elx:*/,://
"endif
filetype plugin indent on

"autocmd FileType html :set filetype=xhtml


" Insert New Line *************************************************************
map <S-Enter> O<ESC> " awesome, inserts new line without going into insert mode
map <Enter> o<ESC>
"set fo-=r " do not insert a comment leader after an enter, (no work, fix!!)


" Sessions ********************************************************************
" Sets what is saved when you save a session
set sessionoptions=blank,buffers,curdir,folds,help,resize,tabpages,winsize


" Invisible characters *********************************************************
set listchars=trail:.,tab:>-,eol:$
set nolist
:noremap <Leader>i :set list!<CR> " Toggle invisible chars

" Hard to type **********************************************************
"imap hh =>
"imap uu _
"imap UU _

" Omni Completion *******************************************************
imap <C-j> <C-X><C-O>
set completeopt=menuone
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags
autocmd FileType php set omnifunc=phpcomplete#CompletePHP
autocmd FileType c set omnifunc=ccomplete#Complete
autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete
autocmd FileType sql set omnifunc=sqlcomplete#Complete

" Misc settings *********************************************************
set backspace=indent,eol,start
set number " Show line numbers
set matchpairs+=<:>
set guifont=Lucida_Console:h9:cANSI
set autochdir " Automatically set the current directory when we change files 
behave mswin

" -----------------------------------------------------------------------------  
" |                              Plug-ins                                     |
" -----------------------------------------------------------------------------  
" autocomplpop ***************************************************************
" complete option
set complete=.,w,b,u,t,k
let g:AutoComplPop_CompleteOption = '.,w,b,u,t,k'
set complete=.
let g:AutoComplPop_IgnoreCaseOption = 0
let g:AutoComplPop_BehaviorKeywordLength = 2

" Ruby stuff ******************************************************************
"compiler ruby         " Enable compiler support for ruby
"map <F5> :!ruby %<CR>

" railsvim ***************************************************************
map <Leader>ra :AS<CR>
map <Leader>rs :RS<CR>

" MacVIM shift+arrow-keys behavior (required in .vimrc)
let macvim_hig_shift_movement = 1

" Bubble line up
nmap <S-Up> ddkP 
vmap <S-Up> [egv

" Bubble line down
nmap <S-Down> ddjP 
vmap <S-Down> ]egv


" Tabs ******************************************************************
imap <Leader>t <Esc>:tabnew<CR>
nmap <Leader>t :tabnew<CR>
nmap <C-Right> :tabn<CR>
nmap <C-Left> :tabp<CR>

" Tags ******************************************************************
imap <Leader>l <Esc>:Tlist<CR>
nmap <Leader>l :Tlist<CR>

" Folding ***************************************************************
set foldmethod=indent "fold based on indentation
set foldnestmax=10    "only 10 levels deep
set nofoldenable      "don't fold by default
set foldlevel=1       

" Are there machine local settings?
if filereadable(expand("~/vimrc.local"))
  source ~/vimrc.local
endif

if &diff
"  color default
endif
