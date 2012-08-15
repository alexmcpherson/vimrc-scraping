" " " " " " " " " " " " " " " " " " " "
"  A comfortable .vimrc (for MacVim)  "
"        Maintained by SUN, Li        "
"         http://MrSunLi.com          "
"      http://github.com/sun-li       "
" " " " " " " " " " " " " " " " " " " "

" I tend to comment 'why' (rather than 'what') for following settings 
" Please use ':h' to check 'what' those settings mean

" -------------------- Dependencies --------------------
" Assuming following plug-ins have been installed
"   pathogen
"   vim-powerline
"   vim-unimpaired
"   command-t
"   tagbar
"   tabular
"   nerdtree
"   snipmate
"   supertab
"   ack
" Assuming 'molokai' color scheme has been installed

" -------------------- General --------------------

" This .vimrc file target to MacVim
set nocompatible

" Preventing security risk
set modelines=0

" More comfortable leader key
let mapleader = ","

" Remove ALL autocommands for the current group if .vimrc is loaded twice
autocmd!

" -------------------- Plug-in Pathogen --------------------

call pathogen#infect()
call pathogen#helptags()

" -------------------- MacVim Special --------------------

if has("gui_macvim")
    " Removing unnecessary GUI elements
    set guioptions-=T
    set guioptions-=r
    set guioptions-=R
    set guioptions-=l
    set guioptions-=L
    set guioptions-=b

    " Mac style shift key
    let macvim_hig_shift_movement = 1

    " Making use full screen
    set fuoptions=maxvert,maxhorz
endif

" -------------------- Display --------------------

colorscheme molokai

" Menlo does not have enough line space
set linespace=1

set lines=60
set columns=85
set colorcolumn=80

" More comfortable cursor
set scrolloff=3
set gcr=n-v:blinkon0
set nocursorline

" Easier for in-screen jumping
set relativenumber

" Displaying more information on status bar
set showmode
set showcmd
set ruler
set laststatus=2

" Soft-wrap long text and show a break symbol
set wrap
set linebreak
set showbreak=…

" Checking invisible characters
nmap <silent> <leader>l :set list!<CR>
" Using the same symbols as TextMate for tabstops and EOLs
set listchars=tab:▸\ ,eol:¬

" -------------------- Mode --------------------

" Alternative way to go back normal mode
inoremap jk <ESC>
cnoremap jk <ESC>

" Go back normal mode automatically
autocmd CursorHoldI * stopinsert
autocmd InsertEnter * let updaterestore=&updatetime | set updatetime=10000
autocmd InsertLeave * let &updatetime=updaterestore

" -------------------- Motion --------------------

" More natural up and sown
nnoremap j gj
nnoremap k gk

" More comfortable for browsing text
nmap <Space> <PageDown>
nmap <S-Space> <PageUp>
nmap <S-UP> 3<C-Y>
nmap <S-DOWN> 3<C-E>

" Assuming vim-unimpaired.vim has been installed
" and C-up and C-down are disabled in System preference -> Keyboard
" Bubble single lines
nmap <C-Up> [e
nmap <C-Down> ]e
" Bubble multiple lines
vmap <C-Up> [egv
vmap <C-Down> ]egv

" Easier for cursor moving
set whichwrap+=<,>,h,l

" Moving to center screen on next/previous selection
nnoremap n nzz
nnoremap N Nzz
nnoremap * *zz
nnoremap # #zz
" also last and next jump
nnoremap <C-o> <C-o>zz
nnoremap <C-i> <C-i>zz

" -------------------- Editing --------------------

" No need to follow legacy vi command
nnoremap Y y$

" Toggle UPPER CASE, lower case and Title Case
function! TwiddleCase(str)
  if a:str ==# toupper(a:str)
    let result = tolower(a:str)
  elseif a:str ==# tolower(a:str)
    let result = substitute(a:str,'\(\<\w\+\>\)', '\u\1', 'g')
  else
    let result = toupper(a:str)
  endif
  return result
endfunction
vnoremap ~ ygv"=TwiddleCase(@")<CR>Pgv

" More comfortable Enter
nnoremap <CR> i<cr><esc>

" More comfortable BACKSPACE.  No duplicate with 'x'
nnoremap <BS> kJ

" Talk to system clipboard
nnoremap <leader>y "*y
nnoremap <leader>yy "*yy
nnoremap <leader>p "*p

" Faster QuickFix
nnoremap <leader>n :cn<cr>
nnoremap <leader>cp :cp<cr>
nnoremap <leader>cl :ccl<cr>

" -------------------- Coding --------------------

set encoding=utf-8

syntax on

filetype plugin on
filetype indent on

set omnifunc=syntaxcomplete#Complete

autocmd filetype python set omnifunc=pythoncomplete#Complete
autocmd filetype python setlocal makeprg=python3\ %

" Using space instead of tab (especially useful for Python)
set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab

set autoindent
set smartindent
set backspace=indent,eol,start

set wildmenu
set wildmode=list:longest

" More comfortable searching options
set ignorecase
set smartcase
set gdefault
set incsearch
set showmatch
set hlsearch

" Removing searching results quickly
nnoremap <silent> <leader><space> :noh<cr>

set foldmethod=indent
set nofoldenable
set foldnestmax=10
set foldlevel=2
set foldignore=

" Exporting source code to html
let html_number_lines=1
let html_use_css=1
let use_xhtml=1

" -------------------- Windows and tabs --------------------

" Split new window in a more comfortale way
nnoremap <leader>sh :leftabove vnew<cr>
nnoremap <leader>sl :rightbelow vnew<cr>
nnoremap <leader>sk :leftabove new<cr>
nnoremap <leader>sj :rightbelow new<cr>

" More comfortable to navigate multi-window
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-h> <C-w>h
nnoremap <C-l> <C-w>l

" Make use desktop space
func! SingleWindow()
    set columns=85

    wincmd o
endfunc

func! DualWindow()
    " One extra column for window's border
    set columns=171

    if winnr('$')==1
        vnew
        wincmd x
        wincmd l
    endif

    wincmd =
endfunc

func! TriWindow()
    " Two extra column for window's border
    set columns=257

    " Assuming TriWindow always after DualWindow, not SingleWindow
    if winnr('$')==2
        vnew
        wincmd x
        wincmd l
    endif

    wincmd =
endfunc

nnoremap <leader>1 :call SingleWindow()<cr>
nnoremap <leader>2 :call DualWindow()<cr>
nnoremap <leader>3 :call TriWindow()<cr>


" -------------------- Spell checking --------------------

map <leader>ss :setlocal spell!<cr>
map <leader>sn ]s
map <leader>sp [s
map <leader>sa zg
map <leader>sc z=

" -------------------- Buffers --------------------

set hidden
set autoread

" Version control tools can do better job than VIM
set nobackup
set nowb
set noswapfile

" Quickly switch buffers
nnoremap <silent> ;; <C-^>

" Close file/buffer, keep window
nnoremap <silent> <leader>q :bd<cr>

nnoremap <silent> <leader>w :w<cr>
" Remove trailing whitespaces befoew save it
nnoremap <silent> <leader>W :%s/\s\+$//ge<cr>:w<cr>

nnoremap <leader>z :q<cr>

" Auto chagne working folder to current file's one
autocmd BufEnter * if expand("%:p:h") !~ '^/tmp' | silent! lcd %:p:h | endif

" Auto-save
"autocmd FocusLost * :wa

" Delete trailing white space on save, useful for Python and CoffeeScript
func! DeleteTrailingWS()
  exe "normal mz"
  %s/\s\+$//ge
  exe "normal `z"
endfunc
autocmd BufWrite *.py     : call DeleteTrailingWS()
autocmd BufWrite *.coffee : call DeleteTrailingWS()
autocmd BufWrite *.md     : call DeleteTrailingWS()

" Return to last edit position when opening files
autocmd BufReadPost *
     \ if line("'\"") > 0 && line("'\"") <= line("$") |
     \   exe "normal! g`\"" |
     \ endif

" Remember status of VIM
set viminfo^=%

" Twisting .vimrc easily
nnoremap <leader>ev :e $MYVIMRC<cr>
autocmd bufwritepost .vimrc source %

" -------------------- Help Window --------------------

autocmd filetype help set relativenumber
autocmd filetype help nnoremap <buffer><cr> <c-]>
autocmd filetype help nnoremap <buffer><bs> <c-T>

" -------------------- Plug-in Powerline --------------------

" Enabling font patcher for plug-in vim-powerline
let g:Powerline_symbols = 'fancy'
" 'Menlo for Powerline' is a font patcher for vim-powerline on MacVim
set guifont=Menlo\ for\ Powerline:h12

" Reload color [ https://github.com/Lokaltog/vim-powerline/issues/28 ]
autocmd bufwritepost .vimrc call Pl#Load()
autocmd BufDelete * call Pl#Load()

" -------------------- Plug-in Command-T --------------------

let g:CommandTMaxHeight = 30

" Open file
noremap <leader>o :CommandT<cr>
noremap <leader>O :CommandTFlush<cr>\|:CommandT<cr>

" Open buffer
nnoremap <leader>b :CommandTBuffer<cr>

" -------------------- Plug-in NerdTree --------------------

nnoremap <leader>d :NERDTreeToggle<cr>

let NERDTreeQuitOnOpen=1
let NERDTreeWinPos='right'

" -------------------- Plug-in Tagbar --------------------

nnoremap <leader>t :TagbarToggle<cr>

" Saving space
let g:tagbar_autoclose = 1
let g:tagbar_compact = 1
let g:tagbar_expand = 1

" -------------------- Plug-in Tabular --------------------

nmap <Leader>a= :Tabularize /=<CR>
vmap <Leader>a= :Tabularize /=<CR>
nmap <Leader>a: :Tabularize /:<CR>
vmap <Leader>a: :Tabularize /:<CR>
nmap <Leader>a:: :Tabularize /:\zs<CR>
vmap <Leader>a:: :Tabularize /:\zs<CR>
nmap <Leader>a# :Tabularize /#<CR>
vmap <Leader>a# :Tabularize /#<CR>
nmap <Leader>a, :Tabularize /,<CR>
vmap <Leader>a, :Tabularize /,<CR>
nmap <Leader>a<Bar> :Tabularize /<Bar><CR>
vmap <Leader>a<Bar> :Tabularize /<Bar><CR>

" -------------------- Plug-in snipMate --------------------

let g:snipMate = {}
let g:snipMate.scope_aliases = {}
let g:snipMate.scope_aliases['ruby'] = 'ruby,ruby-rails'
let g:snipMate.scope_aliases['javascript'] = 'javascript,javascript-jquery'

" -------------------- Plug-in SuperTab --------------------

let g:SuperTabDefaultCompletionType = "context"

" -------------------- Plug-in PyDoc --------------------

let g:pydoc_highlight=0

