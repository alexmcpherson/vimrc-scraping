"""""""""""""""""
" .vimrc by dm4 "
"               "
"""""""""""""""""

" pathogen.vim
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" indent
set expandtab
set autoindent
set smartindent
"set cindent
set ignorecase
set hls

" tab and space
set shiftwidth=4
set tabstop=4
set softtabstop=4
"autocmd BufReadPost,BufNewFile *.rb set sw=2 ts=2 softtabstop=2
autocmd BufReadPost,BufNewFile *.html set sw=2 ts=2 softtabstop=2

" backup info
set backup
set backupdir=$HOME/.vim/backup/
if exists("*mkdir") && !isdirectory($HOME."/.vim/backup")
    call mkdir($HOME."/.vim/backup")
endif

" undo
set undodir=~/.vim/undo/
set undofile

" set line break
set nowrap
set linebreak
"set showbreak=>>\ 

"
set nu
syntax on
set ruler
set mouse=a
set bs=2
set nocompatible
set showcmd

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
autocmd BufReadPost,BufNewFile httpd*.conf set filetype=apache

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
nmap <C-J>      ddp
nmap <C-K>      ddkP
nmap <Leader>n  :NERDTreeToggle<CR>
nmap <Leader>b  :e ++enc=big5<CR>
nmap <Leader>u  :e ++enc=utf-8<CR>
nmap <Leader>p  :set paste!<CR>
nmap <Leader>r  :set wrap!<CR>
nmap <Leader>ev :tabnew $MYVIMRC<CR>
nmap <Leader>h  :set hls!<CR>
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
set statusline+=[%{&encoding}]
set statusline+=\ \ 
set statusline+=[%{&ft!=''?&ft:'none'}]
set statusline+=\ \ 
set statusline+=Col\ %c,\ Line\ %l/%L
set statusline+=\ \ 
set statusline+=%p%%\ 

" prevent scratch window from omni complete
set completeopt=menu,longest

" NERDTree
let NERDTreeQuitOnOpen=1

" simplecommenter
let g:oneline_comment_padding = ''

" mojo
let mojo_highlight_data = 1
let mojo_disable_html = 1

" vimim
let g:vimim_cloud = -1
let g:vimim_custom_color = -1

" zencoding
let g:user_zen_settings = {
\  'indentation' : '    '
\}

" gist-vim
let g:gist_clip_command = 'pbcopy'
let g:gist_detect_filetype = 1
let g:gist_open_browser_after_post = 1

" vim-powerline
let g:Powerline_symbols = 'fancy'

" Save last postion
if has("autocmd")
   autocmd BufReadPost *
      \ if line("'\"") > 0 && line ("'\"") <= line("$") |
      \   exe "normal g'\"" |
      \ endif
endif

if has("gui_running")
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
