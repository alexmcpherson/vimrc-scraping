"""""""""""""""""
" .vimrc by dm4 "
"               "
"""""""""""""""""

" pathogen.vim
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" About tab and indent
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set autoindent
set smartindent
"set cindent
set ignorecase

" backup info
set backup
set backupdir=$HOME/.vim/backup/
if exists("*mkdir") && !isdirectory($HOME."/.vim/backup")
    call mkdir($HOME."/.vim/backup")
endif

" set line break
set wrap
set linebreak
set showbreak=>>\ 

"
set nu
syntax on
set ruler
set mouse=a
set bs=2
set nocompatible

" mininum split window size
set winminheight=0
set winminwidth=0

" auto reload vimrc
autocmd! BufWritePost *vimrc source %

" set foldmethod
set fdm=indent
autocmd BufReadPost * exe "normal zR"

" set filetype
autocmd BufReadPost,BufNewFile *.tt set filetype=html

" key mapping
let mapleader=","
nmap ; :
vmap ; :
imap <C-D>      <DEL>
nmap <F7>       :w<CR>:!perl %<CR>
nmap <C-L>      :set nu!<CR>
nmap <C-n>      gt
nmap <C-p>      gT
imap <C-a>      <HOME>
imap <C-e>      <END>
imap <C-f>      <RIGHT>
imap <C-b>      <LEFT>
nmap <Leader>n  :NERDTreeToggle<CR>
nmap <Leader>b  :e ++enc=big5<CR>
nmap <Leader>u  :e ++enc=utf-8<CR>
nmap <Leader>p  :set paste!<CR>
nmap <Leader>w  :set wrap!<CR>
" for fakeclip
vmap <Leader>v  "+y
" ctrl-tab only works on gui
nmap <C-Tab>    gt
" auto indent
nmap <C-i>      gg=G``
" hexHighlight plugin
nmap <Leader>h :call HexHighlight()<CR>
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
if $TERM == "xterm-color"
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
set statusline+=[%{&encoding}]
set statusline+=\ \ 
set statusline+=[%{&ft!=''?&ft:'none'}]
set statusline+=\ \ 
set statusline+=Col\ %c,\ Line\ %l/%L
set statusline+=\ \ 
set statusline+=%p%%

" Save last postion
if has("autocmd")
   autocmd BufReadPost *
      \ if line("'\"") > 0 && line ("'\"") <= line("$") |
      \   exe "normal g'\"" |
      \ endif
endif

" for eclim
"let g:EclimProjectTreeAutoOpen=1

" for Rainbow
"let g:hlrainbow="{[("
"autocmd BufNewFile,BufReadPost *.c,*.cpp,*.C,*.m,*.mm,*.h,*.hpp  Rainbow

if has("gui")
    " set colors
    colors dm4
    set cursorline

    " window size
    set lines=30
    set columns=80

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
        set guifont=Monaco:h15
        " set CMD+ENTER fullscreen
        set fuopt=maxhorz,maxvert
        " for eclim <cmd + shift + L>
        "map <D-L> :ProjectList<CR>
        "map <D-C> :ProjectCreate
        "map <D-E> :ProjectTree<CR>
        "map <D-D> :ProjectDelete
    endif
endif
