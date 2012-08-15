set nocompatible
set encoding=utf-8

set nonumber
set ruler
set cursorline
set showcmd

" Buffer
set hidden
" Autocmd BufEnter * silent! lcd %:p:h

" Whitespace stuff
set nowrap
set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab
set backspace=indent,eol,start

set list listchars=tab:\ \ ,trail:·
set listchars+=extends:>
set listchars+=precedes:<

" Searching
set hlsearch
set incsearch
set ignorecase
set smartcase

" Indent
set autoindent
set si
set cindent
set copyindent

" Backup
set nobackup
set nowb
set noswapfile

" Cursor highlight
set cursorline
set cursorcolumn

set gdefault

" Mouse
:set mouse=a

" Map leader
let mapleader=","

" Status bar
set laststatus=2
" set statusline=\ %{HasPaste()}%F%m%r%h\ %w\ \ CWD:\ %r%{CurDir()}%h\ \ \ Line:\ %l/%L:%c
function! CurDir()
    let curdir = substitute(getcwd(), '/Users/amir/', "~/", "g")
    return curdir
endfunction

function! HasPaste()
    if &paste
        return 'PASTE MODE  '
    else
        return ''
    endif
endfunction

" Font
set guifont=Menlo:h14

" Wild menu
set wildmenu
set wildmode=list:full

set so=7

" Use the arrows to something usefull
map <right> :bn<cr>
map <left> :bp<cr>

" Visual shifting (does not exit Visual mode)
vnoremap < <gv
vnoremap > >gv

" Syntaxsier navigation between split windows
nnoremap <c-j> <c-w>j
nnoremap <c-k> <c-w>k
nnoremap <c-h> <c-w>h
nnoremap <c-l> <c-w>l

" Fast saving and quit
nmap <leader>w :w!<cr>
nmap <leader>q :q!<cr>

" Quickly edit/reload the vimrc file
nmap <silent> <leader>ev :e $MYVIMRC<CR>
nmap <silent> <leader>sv :so $MYVIMRC<CR>

" Source the vimrc file after saving it
if has("autocmd")
    autocmd bufwritepost .vimrc source $MYVIMRC
endif

vmap Q gq
nmap Q gqap

" Fast Esc
imap jj <Esc>

" Bubbling
vmap <C-Up> xkP`[V`]
vmap <C-Down> xp`[V`]

" Syntax and indent by filetype
syntax on
filetype plugin indent on

" Default color scheme
set background=dark
color moria

" NERDtree
map <silent> <leader>z :NERDTreeToggle<CR>

" Remove trailing whitespaces before write
autocmd BufWritePre * :%s/\s\+$//e

" Include user's local vim config
if filereadable(expand("~/.vimrc.local"))
  source ~/.vimrc.local
endif

" Command-T
cnoremap %% <C-R>=expand('%:h').'/'<cr>
map <leader>e :edit %%
map <leader>v :view %%
map <leader>f :CommandTFlush<cr>\|:CommandT<cr>
map <leader>F :CommandTFlush<cr>\|:CommandT %%<cr>

map ,, <C-^>
