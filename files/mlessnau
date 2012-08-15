set nocompatible                       " use all of Vim's features
set backupdir=/tmp                     " backup file directory
set directory=/tmp                     " swap file directory
set fileencoding=utf8                  " default file encoding
set wildmenu                           " bash like completion for files
set t_Co=256                           " enable 256 colors
set number                             " line numbers
set wrap                               " word wrap
set scrolloff=10                       " offset kept above/below to cursor position
set sidescrolloff=10                   " offset kept left/right to cursor position
set whichwrap+=<,>,[,]                 " enable line warping when using arrow keys
set list lcs=tab:·\ ,trail:¶,eol:¬     " whitespace markers
set title                              " set terminal title
set ttyfast                            " enable fast TTY support
set ttymouse=xterm2                    " mouse support for xterm
set mouse=a                            " enable mouse support
set hlsearch                           " highlight search matches
set incsearch                          " search matches as you type
set noexpandtab                        " use tabs
set smarttab                           " use smart tabbing
set shiftwidth=4                       " tab width (indentation)
set tabstop=4                          " tab stop width
set bs=indent,eol,start                " backspace over everything including linebreaks and indentation
set lazyredraw                         " disable rendering when macros are executed
let mapleader=","                      " redefine <leader>
syntax on                              " enable syntax highlighting
filetype plugin indent on              " enable filetype plugins and indentation

" NERDTree
let g:NERDTreeShowHidden=0             " show hidden files in NERTree by default
let g:NERDTreeWinSize=40               " set NERDTree width to 50 columns
autocmd VimEnter * NERDTree            " open NERDTree on startup
autocmd VimEnter * wincmd l            " focus on buffer

" MRU
"let MRU_File=~/.vim.mru
let MRU_Max_Entries=20
let MRU_Window_Height=14
let MRU_Max_Menu_Entries=20
map <leader>m :MRU<CR>

" colors
colorscheme mlessnau                   " colour scheme

" current line/column
set cursorline                         " highlight current line
hi CursorLine term=None cterm=None     " remove the underline
"set colorcolumn=80                     " put a marker at 80-th column

" ==== mappings ===============================================================

cmap w!! %!sudo tee > /dev/null %
map <CR> o
map ciu :set iskeyword-=_<CR>ciw<Esc>:set iskeyword+=_<CR>a

" Buffer navigation
map <Tab> <C-w>w

" NERDTree
map <leader>n :NERDTreeToggle<CR>

" Calendar
map <leader>c :CalendarH<CR>

" EasyMotion
map <leader>w <leader><leader>w
map <leader>W <leader><leader>b

" when using 'TERM=screen-256color' (tmux compat) vim cannot handle some key bindings anymore
if $TERM =~ '^screen-256color'
  map <Esc>OH <Home>
  map! <Esc>OH <Home>
  map <Esc>OF <End>
  map! <Esc>OF <End>
endif

" ==== commands ===============================================================

" by whilefalse
:command! -range=% Snip '<,'>w! /tmp/snippet
:command! Unsnip r /tmp/snippet
