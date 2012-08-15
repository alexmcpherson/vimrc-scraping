call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" ------------------------------------------------------------------------
" System setup
" ------------------------------------------------------------------------

set nocompatible
filetype plugin on
set nobackup      " turn backup off - most files are in git anyway
set nowritebackup " turn off writebackup
set noswapfile    " turn off creating .swpfiles everywhere
set vb            " no more dinging

" ------------------------------------------------------------------------
" Color / Syntax settings
" ------------------------------------------------------------------------

syntax on
au BufRead,BufNewFile *.less setfiletype less  " syntax .less = .css
colorscheme vividchalk

" ------------------------------------------------------------------------
" Text Formatting
" ------------------------------------------------------------------------

set autoindent    " automatic indent new lines
"set smartindent   " be smart about it. disabled-bad interaction w endwise
set tabstop=2     " set tabstop to 2 characters
set shiftwidth=2  " sw = shiftwidth
set expandtab     " turn tabs to spaces
set nosmarttab    " who knows
set textwidth=80  " wrap at 80 chars by default

" ------------------------------------------------------------------------
" UI
" ------------------------------------------------------------------------

set background=dark            " not as relevant with colorscheme defined
set ruler                      " show the cursor position all the time
set wildmenu                   " turn on wild menu
set backspace=indent,eol,start " backspace kills pretty much everything
set whichwrap+=h,l             " cursor keys wrap too!
set shortmess=filtIoOA         " hide the vim startup message
set nostartofline              " don't jump to start of line when scrolling
set title                      " expose currently editing file in title bar

" ------------------------------------------------------------------------
" Search
" ------------------------------------------------------------------------

set incsearch     " do incremental searches
set ignorecase    " case-insensitive search
set smartcase     " override ignorecase if the search pattern has UPPERCASE

" ------------------------------------------------------------------------
" Visual Cues
" ------------------------------------------------------------------------

set showmatch     "show matching brackets
set mat=5         " duration to show matching brace (1/10 sec)
set hlsearch      " highlight search matches

" ------------------------------------------------------------------------
" Remapping (and plugin aliases)
" ------------------------------------------------------------------------

" lead with ,
let mapleader = ','

map <F3> <ESC>:set paste!<RETURN>

" NERDTree options
map <F2> <ESC>:NERDTreeToggle<RETURN>
map <F7> <ESC>:NERDTreeFind<RETURN>
let NERDTreeIgnore          = ['\.pyc$','\.swp$']    "ignore compiled python files
let NERDTreeSplitVertical   = 1                      "and open as vsplit
let NERDTreeChDirMode       = 2                      "change working dir when I change root

" Command-T options
map <C-L> <ESC>:CommandT<RETURN>
map <C-P><C-P> <ESC>:CommandTFlush<RETURN>
" ignore rails plugins for command-t, and generated asset packaging
set wildignore=vendor/plugins/*,public/assets/*,solr/data/*,tmp/*

" Surround remappings
nmap s ysi
nmap S ysa
nmap s$ ys$
nmap sv gvs

" Scratch remapping
map <leader>s <ESC>:Sscratch<RETURN>

" ---------------------------------------------------------------------------
"  Strip all trailing whitespace in file
" ---------------------------------------------------------------------------

function! StripWhitespace ()
    exec ':%s/ \+$//gc'
endfunction
map <leader>w :call StripWhitespace ()<CR>

" ---------------------------------------------------------------------------
"  Make it easy to pull out a rough 'outline' of function declarations by
"  filetype
" ---------------------------------------------------------------------------

function! OpenOutlineView ()
  silent lvimgrep 'def ' %
  lopen
  set nomodified
endfunction
map <leader>o :call OpenOutlineView ()<CR>

function! InsertDebugger()
    " ~/vim/cpp/new-class.txt is the path to the template file
		call append('.', "require 'rubydebug'; debugger")
endfunction
map <leader>d :call InsertDebugger()<CR>


" ---------------------------------------------------------------------------
"  Useful tricks to remember for later
" ---------------------------------------------------------------------------

" autocmd FileType ruby set number    " set filetype-specific commands
autocmd BufWritePost,FileWritePost *.coffee :silent !coffee -c <afile>

