
"""""""""""" General """"""""""

set nocompatible

filetype off
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()
filetype plugin indent on

set nomodeline

set termencoding=utf-8
set encoding=utf-8

set ttyfast
set lazyredraw

"set autoread

set relativenumber

set switchbuf=useopen,usetab

let mapleader=","

" change to file directory when switching to a file buffer
autocmd BufEnter * silent! lcd %:p:h


"""""""""""" Persistency """"""""""""

set undofile
set undodir=~/.vimundo

set nobackup
set nowritebackup
set noswapfile

" Tell vim to remember certain things when we exit
"  '50   :  marks will be remembered for up to 50 previously edited files
"  "100  :  will save up to 100 lines for each register
"  :100  :  up to 100 lines of command-line history will be remembered
"  %     :  saves and restores the buffer list
"  n...  :  where to save the viminfo files
set viminfo='50,\"100,:100,n~/.viminfo
set history=1000


"""""""""""" Basic UI """"""""""""

set winaltkeys=no
set mouse=a

set scrolloff=3
set sidescrolloff=5
set sidescroll=1

set hidden
set confirm

set showmode
set showcmd

syntax on

set spr  " split right
set sb   " split below

set cmdheight=1
set winminheight=0

set shortmess=atIoOTts
set visualbell
set cursorline
set ruler

set statusline= "clear it first
set statusline=\ %{winnr()}:\ %<%.99f\ %h%w%m%r%{exists('*CapsLockStatusline')?CapsLockStatusline():''}%y%=%-16(\ %l,%c-%v\ %)%P

set laststatus=2  " Always display the status line

set clipboard+=unnamed
set clipboard+=+

" command-line editing
set wildmenu
set wildignore+=*.pyc,*.zip,*.gz,*.bz,*.tar,*.jpg,*.png,*.gif,*.avi,*.wmv,moc_*
set wildignore+=*.o,*.ogg,*.mp4,*.mov,*.class,*/.hg/*,*/.svn/*,*/docs/_*/*
set wildmode=list:longest

" we can't add this to wildignore, seems like fugitive has problems
" with it.
let g:ctrlp_custom_ignore = '\.git$'

";;;;; color scheme ;;;;;"

if has("gui_running")
  colorscheme molokai
  set guicursor=a:block-Cursor
  set guicursor+=n-v:blinkon0  " cursors shouldn't blink.
else
  colorscheme slate
endif


"""""""""""" Trailing whitespace """"""""""""

" configure list facility
highlight SpecialKey term=standout ctermbg=yellow guibg=yellow
set listchars=tab:>-,trail:~

" determine whether the current file has trailing whitespace
function! SetWhitespaceMode()
  let b:has_trailing_whitespace=!!search('\v\s+$', 'cwn')
  if b:has_trailing_whitespace
    " if yes, we want to enable list for this file
    set list
  else
    set nolist
  endif
endfunction

function! WhitespaceSaveHook()
  if !exists("b:has_trailing_whitespace")
    let b:has_trailing_whitespace=0
  endif
  if !b:has_trailing_whitespace
    call RTrim()
  endif
endfunction

" trim trailing whitespace in the current file
function! RTrim()
  %s/\v\s+$//e
  noh
endfunction

" trim trailing whitespace in the given range
function! RTrimRange() range
  exec a:firstline.",".a:lastline."substitute /\\v\\s+$//e"
endfunction

" after opening and saving files, check the whitespace mode
autocmd BufReadPost  * call SetWhitespaceMode()
autocmd BufWritePost * call SetWhitespaceMode()
" on save, remove trailing whitespace if there was already trailing whitespace
" in the file before
autocmd BufWritePre  * call WhitespaceSaveHook()

" strip whitespace manually
nmap <silent> <leader>W :call RTrim()<cr>
vmap <silent> <leader>W :call RTrimRange()<cr>


"""""""""""" Basic text editing """"""""""""

" wrapping
set wrap
set textwidth=79
set lbr " don't split words
set formatoptions=qrn1
set colorcolumn=85
set showbreak=…

" completion
set complete=.,w,b,t,i
"set completeopt=menu,longest,preview

" folding
set foldopen=block,insert,jump,mark,percent,quickfix,search,tag,undo
set foldmethod=indent
set foldlevel=20  " everything folded out by default

" movement
set whichwrap+=<,>,[,],h,l  " backspace and cursor can go lines up or down
set nostartofline
set backspace=indent,eol,start

" figure indentation on opening
autocmd BufReadPost * :silent !YAIFAMagic


"""""""""""" Indentation """"""""""""

set expandtab
set autoindent
set softtabstop=2
set shiftwidth=2
set shiftround

" EMACS-style indentation
"set cinkeys=0{,0},0),0#,!<Tab>,;,:,o,O,e
"set indentkeys=!<Tab>,o,O
"map <Tab> i<Tab><Esc>^

" fix EMACS-style indentation for misbehaving filetypes
"autocmd FileType * setlocal indentkeys+=!<Tab>


"""""""""""" Searching """"""""""""

set ignorecase
set smartcase
set gdefault  " global search by default
set incsearch
set showmatch
set hlsearch

" don't use special regex syntax
nnoremap / /\v
vnoremap / /\v

" break out of a search
nnoremap <leader><space> :noh<cr>


"""""""""""" NERDTree """"""""""""

nmap <leader>n :NERDTreeClose<CR>:NERDTreeToggle<CR>
nmap <leader>M :NERDTreeClose<CR>:NERDTreeFind<CR>
nmap <leader>N :NERDTreeClose<CR>


"""""""""""" Mappings """"""""""""

" Edit the vimrc file
nmap <silent> <leader>qe :e $MYVIMRC<CR>
nmap <silent> <leader>qs :so $MYVIMRC<CR>

" want to learn hjkl
nnoremap <up> <nop>
nnoremap <down> <nop>
nnoremap <left> <nop>
nnoremap <right> <nop>
inoremap <up> <nop>
inoremap <down> <nop>
inoremap <left> <nop>
inoremap <right> <nop>
vnoremap <up> <nop>
vnoremap <down> <nop>
vnoremap <left> <nop>
vnoremap <right> <nop>

" Remap j and k to act as expected when used on long, wrapped, lines
nnoremap j gj
nnoremap k gk

" faster movement
nmap <silent> <c-j> 4j
nmap <silent> <c-k> 4k

" optimize access to : commands
nnoremap ; :
vnoremap ; :

" enable some useful navigation bindings
cnoremap <c-a>      <home>
cnoremap <c-e>      <end>
cnoremap <c-h>      <left>
cnoremap <c-j>      <down>
cnoremap <c-k>      <up>
cnoremap <c-l>      <right>

" insert mode bindings
inoremap <c-a>      <esc>^i
inoremap <c-e>      <end>
inoremap <c-h>      <left>
inoremap <c-j>      <down>
inoremap <c-k>      <up>
inoremap <c-l>      <right>
inoremap <c-u>      <esc>c$

inoremap <c-o>      <esc>o
inoremap <c-cr>     <esc>O
inoremap <s-cr>     <esc>:call append(line('.')-1, '')<cr>i

" Enter to add empty lines
nmap <cr> o<esc>^c$<esc>
nmap <s-cr> :call append(line('.')-1, '')<cr>
nmap <c-cr> O<esc>^c$<esc>

" make a new section
nnoremap <leader>u o<esc>^c$<esc>O

" split two lines
nmap K i<Enter>

" duplicate line
nmap <leader>j yyp

" use Q for formatting the current paragraph (or visual selection)
vmap Q gq
nmap Q gqap

" use ,d (or ,dd or ,dj or 20,dd) to delete a line without
" adding it to the yanked stack (also, in visual mode)
nmap <silent> <leader>d "_d
vmap <silent> <leader>d "_d

" search / replace shortcut
nnoremap <leader>e :s//<left>

" jump to matching pairs easily, with Tab
omap <Tab> %

" folding
nnoremap <Space> za
vnoremap <Space> za

" nicer indentation
nnoremap < <<
nnoremap > >>
vnoremap < <gv
vnoremap > >gv

" quick yanking to the end of the line
nmap Y y$

" YankRing
nmap <leader>r :YRShow<CR>

" Gundo
nnoremap <f4> :GundoToggle<cr>

" Ack
nmap <leader>a :Ack<space>

" Scratch
nmap <leader>S :Sscratch<cr>

" OS copy and paste
map <leader>p "+p
vnoremap <leader>y "+y

" reselect pasted text
nnoremap <leader>v V`]

" exit insert / visual mode
inoremap jk <esc>
vnoremap v <esc>

" vertical split
nnoremap <leader>w <C-w>v<C-w>l

nmap <leader>gg :Git<space>
nmap <leader>gs :Gstatus<cr>
nmap <leader>ge :Gedit<cr>
nmap <leader>gd :Gdiff<cr>
nmap <leader>gc :Gcommit<cr>
nmap <leader>gb :Gbrowse<cr>
nmap <leader>gbl :Gblame<cr>
nmap <leader>gm :Gmove<cr>
nmap <leader>gq :Gremove<cr>
nmap <leader>gl :Glog<cr>
nmap <leader>gr :Gread<cr>
nmap <leader>gw :Gwrite<cr>
nmap <leader>gp :Git push<cr>

vmap <leader>gg :Git<space>
vmap <leader>gs :Gstatus<cr>
vmap <leader>ge :Gedit<cr>
vmap <leader>gd :Gdiff<cr>
vmap <leader>gc :Gcommit<cr>
vmap <leader>gb :Gbrowse<cr>
vmap <leader>gbl :Gblame<cr>
vmap <leader>gm :Gmove<cr>
vmap <leader>gq :Gremove<cr>
vmap <leader>gl :Glog<cr>
vmap <leader>gr :Gread<cr>
vmap <leader>gw :Gwrite<cr>
vmap <leader>gp :Git push<cr>

" move around splits easily
"nnoremap <c-h> <c-w>h
"nnoremap <c-j> <c-w>j
"nnoremap <c-k> <c-w>k
"nnoremap <c-l> <c-w>l

" easy switching between windows
nnoremap <leader>t <c-w><c-w>

" save shortcut
nnoremap <leader>s :w<cr>

" fuzzy finding
nnoremap <leader>f :CtrlP<cr>
nnoremap <leader>m :CtrlPMRU<cr>
nnoremap <leader>b :CtrlPBuffer<cr>
nnoremap <leader>qf :FufFile<cr>

" Sudo to write
cmap w!! w !sudo tee % >/dev/null
