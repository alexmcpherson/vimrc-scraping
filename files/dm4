"""""""""""""""""
" .vimrc by dm4 "
"               "
"""""""""""""""""

" vundle settings
filetype off
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()
Bundle 'gmarik/vundle'

" bundles
Bundle 'dm4/vim-boshiamy'
Bundle 'Lokaltog/vim-easymotion'
Bundle 'scrooloose/nerdtree'
Bundle 'msanders/snipmate.vim'
Bundle 'tpope/vim-surround'
Bundle 'sjl/gundo.vim'
Bundle 'simplecommenter'
Bundle 'AutoComplPop'
Bundle 'hexHighlight.vim'

" indent
set expandtab
set autoindent
set smartindent
set cindent
set ignorecase
set hls

" tab and space
set shiftwidth=4
set tabstop=4
set softtabstop=4

" backup info
set backup
set backupdir=$HOME/.vim/backup/
if exists("*mkdir") && !isdirectory($HOME."/.vim/backup")
    call mkdir($HOME."/.vim/backup")
endif

" undo
set undofile
set undodir=~/.vim/undo/
if exists("*mkdir") && !isdirectory($HOME."/.vim/undo")
    call mkdir($HOME."/.vim/undo")
endif

" set line break
set nowrap
set linebreak
"set showbreak=>>\ 

" other settings
set nu
syntax on
set ruler
set mouse=a
set bs=2
set nocompatible
set showcmd
set clipboard=unnamed

" mininum split window size
set winminheight=0
set winminwidth=0

" auto reload vimrc
autocmd! BufWritePost *vimrc source %

" set filetype
autocmd BufReadPost,BufNewFile *.tt set filetype=html
autocmd BufReadPost,BufNewFile httpd*.conf set filetype=apache

" set indent
"autocmd BufReadPost,BufNewFile *.rb set sw=2 ts=2 softtabstop=2
"autocmd BufReadPost,BufNewFile *.html set sw=2 ts=2 softtabstop=2

" Show diff when git commit
autocmd FileType gitcommit DiffGitCached

" Highlight trailing spaces
highlight ExtraWhitespace ctermbg=red guibg=red
match ExtraWhitespace /\s\+$/
autocmd BufWinEnter * match ExtraWhitespace /\s\+$/
autocmd InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
autocmd InsertLeave * match ExtraWhitespace /\s\+$/
autocmd BufWinLeave * call clearmatches()

" for taglist
"autocmd BufWritePost *.cpp silent exe "!exctags -R --c++-kinds=+p --fields=+iaS --extra=+q ."
"autocmd BufWritePost *.h silent exe "!exctags -R --c++-kinds=+p --fields=+iaS --extra=+q ."

" Save last postion
if has("autocmd")
   autocmd BufReadPost *
      \ if line("'\"") > 0 && line ("'\"") <= line("$") |
      \   exe "normal g'\"" |
      \ endif
endif

" key mapping
let mapleader=","
nmap ; :
vmap ; :
nmap j gj
nmap k gk
imap <C-D>      <DEL>
nmap <F7>       :w<CR>:!perl %<CR>
nmap <C-L>      :set nu!<CR>
nmap <C-n>      gt
nmap <C-p>      gT
imap <C-a>      <HOME>
imap <C-e>      <END>
imap <C-f>      <RIGHT>
imap <C-b>      <LEFT>
nmap <C-J>      ddp
nmap <C-K>      ddkP
nmap <Leader>n  :NERDTreeToggle<CR>
nmap <Leader>g  :GundoToggle<CR>
nmap <Leader>b  :e ++enc=big5<CR>
nmap <Leader>u  :e ++enc=utf-8<CR>
nmap <Leader>p  :set paste!<CR>
nmap <Leader>r  :set wrap!<CR>
nmap <Leader>ev :tabnew $MYVIMRC<CR>
nmap <Leader>h  :set hls!<CR>
nmap <Leader>s  :w<CR>:source %<CR>

" for fakeclip
vmap <Leader>v  "+y

" ctrl-tab only works on gui
nmap <C-Tab>    gt

" hexHighlight plugin
nmap <Leader>l :call HexHighlight()<CR>

" Show syntax highlighting groups for word under cursor
nmap <C-C> :call <SID>SynStack()<CR>
function! <SID>SynStack()
    if !exists("*synstack")
        return
    endif
    echo map(synstack(line('.'), col('.')), 'synIDattr(v:val, "name")')
endfunc

" Encoding
set fileencodings=utf-8,big5,euc-jp,gbk,euc-kr,utf-bom,iso8859-1

" Detect filetype
filetype on
filetype indent on
filetype plugin on

" color setting
if $TERM == "xterm-256color" || $TERM == "screen-256color"
    " set 256 colors
    set t_Co=256
    colors dm4
    set cursorline
elseif $TERM == "xterm"
    set t_Co=16
endif

" set status line
set laststatus=2
set statusline=%{(&paste)?'[p]':''}
set statusline+=%m%f
set statusline+=%=
set statusline+=(%{mode()})
set statusline+=\ \ 
set statusline+=[%{&fenc}]
set statusline+=\ \ 
set statusline+=[%{&ft!=''?&ft:'none'}]
set statusline+=\ \ 
set statusline+=Col\ %c,\ Line\ %l/%L
set statusline+=\ \ 
set statusline+=%p%%\ 

" prevent scratch window from omni complete
set completeopt=menu,menuone,longest,preview
autocmd CursorMovedI * if pumvisible() == 0|pclose|endif
autocmd InsertLeave * if pumvisible() == 0|pclose|endif
set previewheight=2

" NERDTree
let NERDTreeQuitOnOpen=0

" simplecommenter
let g:oneline_comment_padding = ''

" vimim
let g:vimim_cloud = -1
let g:vimim_custom_color = -1

" zencoding
let g:user_zen_settings = {
\  'indentation' : '    '
\}

" clang_complete
let g:clang_snippets = 1
let g:clang_complete_copen = 0
let g:clang_snippets_engine = 'snipmate'

" vjde for android
let g:vjde_lib_path = '/usr/local/Cellar/android-sdk/r18/platforms/android-15/android.jar'


if has("gui_running")
    " set colors
    colors dm4
    set cursorline
    set guifont=Monaco:h17

    " window size
    set lines=100
    set columns=90

    " hide tool bar
    set guioptions+=c
    set guioptions-=e
    set guioptions-=T
    set guioptions-=m
    set guioptions-=r
    set guioptions-=R
    set guioptions-=l
    set guioptions-=L

    " disable input manager
    set imdisable
    set antialias

    if has("gui_macvim")
        " set CMD+ENTER fullscreen
        set fuopt=maxhorz,maxvert
        " for eclim <cmd + shift + L>
        "map <D-L> :ProjectList<CR>
        "map <D-C> :ProjectCreate
        "map <D-E> :ProjectTree<CR>
        "map <D-D> :ProjectDelete
    endif
endif
