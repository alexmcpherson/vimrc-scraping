"VIMRC FILE
"BY GREGORY OLADIPO

"pathogen calls (goes at top)
  call pathogen#runtime_append_all_bundles()
  call pathogen#helptags()

"for LustyExplorer
:let g:LustyExplorerSuppressRubyWarning = 1
:let g:LustyExplorerAlwaysShowDotFiles = 1
set hidden

"dont behave like VI
set nocp
set bs=indent,eol,start

"need to allow for comments to be indented
filetype plugin indent on
  
"PLUGINS
  "solarized colortheme
    syntax enable
    colorscheme solarized

    if has('gui_running')
    set background=dark
      else
        set background=light
      endif

  "toggle Gundo
  nnoremap <F5> :GundoToggle<CR>
  "NERDTree
  "toggle hidden files...
    let NERDTreeShowHidden=1

"AUTOCMDS
  if has ("autocmd")
    "these break syntax highlighting...need to fix...
    autocmd bufwritepost .vimrc source $MYVIMRC
    autocmd bufwritepost .gvimrc source $MYGVIMRC
    "nice to have an autocmd here for snippets...
  endif

  if has("autocmd")
    "Enable file type detection and local settings...
    filetype on
  endif

"ALL MAPPINGS...
"edit VIMRC on the fly
let mapleader = ","
nmap <leader>v :tabedit $MYVIMRC<CR>
nmap <leader>g :tabedit ~/.vim/gvimrc<CR>

"window movement mappings
nmap <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
nmap <C-l> <C-w>l

" bubble single lines
nmap <D-k> ddkP
nmap <D-j> ddp
" bubble visual lines
vmap <D-k> xkP'[V']
vmap <D-j> xp'[V']

"ins-completion mappings
inoremap ^L ^X^L
inoremap ^F ^X^F
inoremap ^K ^N^P

"add to end of mappings for repeat.vim
silent! call repeat#set("\<Plug>MyWonderfulMap", v:count)

"indentation
set autoindent
set smartindent

"set the title
set title
"tabbing and shifting
set ts=2 sts=2 sw=2 tw=80 expandtab

"tab settings and indentation!
set ts=2
set sw=2
set sts=2
set ai

"tab completion
set complete=.,w,b,t

"command height
set ch=3
"show line number
set nu
"momentary shows closing and opening elements
set showmatch
"mousehide
set mh
set mouse-=a
"antialias fonts
set anti
"setting line break
set tw=85
"help height
set hh=15
"equal windows
set ea
"each window
set ruler
"remove search highlighting
set nohls
set incsearch
