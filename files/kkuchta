filetype off
call pathogen#infect()
call pathogen#helptags()
call pathogen#runtime_append_all_bundles()
filetype plugin on
"Turn on line numbering. Turn it off with "set nonu"
set nu 

"Set syntax on
syntax on

"Indent automatically depending on filetype
filetype indent on
set autoindent

"Case insensitive search
set ic

nnoremap j gj
nnoremap k gk

"Higlhight search
set hls

"Wrap text instead of being on one line
set lbr

set wildmode=list:longest

"Set up misc general settings
set encoding=utf-8
set scrolloff=3
set autoindent
set showmode
set showcmd
set hidden
set wildmenu
set visualbell
set cursorline
set ttyfast
set ruler
set backspace=indent,eol,start
set laststatus=2

set autoread                    "Reload files changed outside vim

"Turn off arrow navigation
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

"Semicolon same as colon
nnoremap ; :
vnoremap ; :

"Autosave all buffers when losing window focus
au FocusLost * :wa

"Mash j and k to escape.
inoremap jk <ESC>
inoremap kj <ESC>

let mapleader = ","

"set autochdir

"Tab settings.  TODO: make this more intelligent
set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab

"Show invisible characters
set list
set listchars=tab:▸\ ,eol:¬

"Toggle showing invisible characters with ,l
nnoremap ,l :set list!<CR>

autocmd User Rails let  g:fuzzy_roots = [RailsRoot()]

"Set line width to 80, with older version backup support.
if exists('+colorcolumn')
  set colorcolumn=80
else
  au BufWinEnter * let w:m2=matchadd('ErrorMsg', '\%>80v.\+', -1)
endif

set noswapfile
set nobackup
set nowb

if( exists("+undofile") )
    set undodir=/tmp
    set undofile
endif

"Cycle through buffers with ctrl-j and ctrl-k
map <C-j> :bprev<CR>
map <C-k> :bnext<CR>

",fj autoformats json
nnoremap <Leader>fj :%!python -m json.tool<Enter>
",fx autoformats xml
nnoremap <Leader>fx :%!xmllint --format -<ENTER>

"Set up command t
noremap <leader>o <Esc>:CommandT<CR>
noremap <leader>O <Esc>:CommandTFlush<CR>
noremap <leader>b <Esc>:CommandTBuffer<CR>

"Escape to cancel tab completion
inoremap <expr> <Esc>      pumvisible() ? "\<C-e>": "\<Esc>"
nnoremap <leader>d :NERDTreeToggle<cr>

"Escape to turn of highlighting.
noremap <silent> <leader><space> :noh<cr>:call clearmatches()<cr>

"shift-h and shift-l to beginning and end of line.
map H ^
map L $

"Set vim to use system clipboard for the default register
set clipboard=unnamed

"Map r to 'delete to black hole register'
"nnoremap r "_d
"vnoremap r "_d
"nnoremap rr "_dd

"Edit vimrc with leader-ev, and auto reload all buffers on vimrc write
nnoremap <leader>ev <C-w><C-v><C-l>:e $MYVIMRC<cr>
au! BufWritePost .vimrc source %

"Edit ~/TODO.txt
nnoremap <leader>et <C-w><C-v><C-l>:e ~/Dropbox/global/TODO.txt<cr>

set background=light
colorscheme solarized

"Map option-j and option-k to 10-up and 10-down.
"nnoremap ˚ 10k
"vnoremap ˚ 10k
"nnoremap ∆ 10j
"vnoremap ∆ 10j

" Toggle relative line numbers.
function! NumberToggle()
  if(&relativenumber == 1)
    set number
  else
    set relativenumber
  endif
endfunc
nnoremap <C-n> :call NumberToggle()<cr>

" Substitute shortcut
nnoremap <leader>s :%s//<left>

" Jump to end of line from insert mode
" FIXME
inoremap <c-a> <esc>I
inoremap <c-e> <esc>A

" w!! will write with sudo
cnoremap w!! w !sudo tee % >/dev/null

let NERDTreeMinimalUI = 1

noremap ∆ :m+<CR>
noremap ˚ :m-2<CR>
inoremap ∆ <Esc>:m+<CR>
inoremap ˚ <Esc>:m-2<CR>
vnoremap ∆ :m'>+<CR>gv
vnoremap ˚ :m-2<CR>gv

vnoremap < <gv
vnoremap > >gv

map <silent> <C-s> :NERDTree<CR><C-w>p:NERDTreeFind<CR>

" Make Y behave like other capitals
map Y y$
nnoremap Q @@

nnoremap <leader>ft :CommandTFlush<CR>
vnoremap <leader>h :TOhtml<CR>

" Add number text object
onoremap N :<c-u>call <SID>NumberTextObject(0)<cr>
xnoremap N :<c-u>call <SID>NumberTextObject(0)<cr>
onoremap aN :<c-u>call <SID>NumberTextObject(1)<cr>
xnoremap aN :<c-u>call <SID>NumberTextObject(1)<cr>
onoremap iN :<c-u>call <SID>NumberTextObject(1)<cr>
xnoremap iN :<c-u>call <SID>NumberTextObject(1)<cr>
 
function! s:NumberTextObject(whole)
 normal! v

 while getline('.')[col('.')] =~# '\v[0-9]'
     normal! l
 endwhile

 if a:whole
     normal! o

     while col('.') > 1 && getline('.')[col('.') - 2] =~# '\v[0-9]'
         normal! h
     endwhile
 endif
endfunction

