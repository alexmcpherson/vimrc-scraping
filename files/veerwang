"                      The file is seted for the edit programme!                               "
"											       "
"                                                                            Version:   1.00   "
"											       "

set t_Co=256

"set the backcolor type
set background=dark

"colo ron
"colo darkburn 
"colo wargrey
"colo simple-dark
"colo vividchalk 
"colo inkpot 
colo summerfruit256

"set the line number 
set nu

"set the syntax on
syntax on

"auto style in C program
set cin

"do not backup file when over-written file
set nobackup

"set short message cut 
set shortmess=atl

"set the tags file name
set tags=tags;

" turn the wild menu
set wildmenu

" turn off the error bell
set noerrorbells

set ignorecase

set autochdir

"set search result high light 
set hlsearch

"set ruler
set ruler

set so=7

"set no compatible mode of VIM
set nocompatible

"Set to auto read when a file is changed from the outside
set autoread

"Have the mouse enabled all the time:
set mouse=a

filetype plugin indent on
   
set nocp

"match {} setting
set showmatch
set matchtime=5

"set cursor line high light
"set cursorline

"set file code-write sets
set encoding=utf-8
set fileencoding=utf-8
set fencs=utf-8,gb18030,gbk,gb2312,cp936

"Set the lines of history
set history=400 

"Omnicomplete configrature
let OmniCpp_GlobalScopeSearch=1
let OmniCpp_NamespaceSearch=1
let OmniCpp_DisplayMode=1
let OmniCpp_ShowPrototypelnAbbr=1
let OmniCpp_ShowAccess=1
let OmniCpp_MayCompleteDot=1
let OmniCpp_MayCompleteArrow=1
let OmniCpp_MayCompleteScope=1

"set linestatus variables
function! CurDir()
let curdir = substitute(getcwd(), '/home/kevin/', "~/", "g")
return curdir
endfunction

"highlight statusline color setting
set ls=2
set statusline=
set statusline+=%1*\ type:%Y\ 
set statusline+=%2*\ format:%{&ff}:%{&fenc!=''?&fenc:&enc}\ 
set statusline+=%3*\ time:\ 
set statusline+=%{strftime(\"%Y-%m-%d\ %H:%M\")}\ 
set statusline+=%4*\ %03l,%03c\ +\ %L(%p%%)\ 
set statusline+=%5*\ %n%r%h%w\ %F%M\ 
hi User1 term=bold ctermfg=Black ctermbg=Yellow
hi User2 term=bold ctermfg=Yellow ctermbg=Black
hi User3 term=bold ctermfg=Black ctermbg=Yellow
hi User4 term=bold ctermfg=Yellow ctermbg=black
hi User5 term=bold ctermfg=Black ctermbg=Yellow

let Tlist_Use_Right_Window=1
let Tlist_File_Fold_Auto_Close=1
map to :TlistToggle<CR>
map time :!date<CR>

"Hot key define by me
let mapleader=","
nmap <leader>study :edit ~/study/study.txt <CR>
nmap <leader>w :w!<CR>

"Edit my confirature file
nmap <leader>c :edit ~/.vimrc <cr>
autocmd! bufwritepost .vimrc source ~/.vimrc
nmap <leader>g :edit ~/.gvimrc <cr>
autocmd! bufwritepost .gvimrc source ~/.gvimrc

"open help documentaion
nmap <leader>help :tab help<cr>

"show the version information
nmap <leader>ver :version<cr>

"Tab operation
nmap <leader>tn :tabnew<cr>
nmap <leader>tm :tabmove<cr>
nmap <leader>tc :tabclose<cr>
nmap <leader>te :tabedit

map <F4> :!ctags -R .<cr>
map <F5> :!ctags -R --c++-kinds=+p --fields=+iaSl --extra=+q .<cr>

" Favorite filetype
set ffs=unix,dos,mac
nmap <leader>fd :se ff=dos<cr>
nmap <leader>fu :se ff=unix<cr>

" VSTreeExplore used variables 
nmap <leader>vsp :VSTreeExplore<cr>
let g:treeExplDirSort=1
let g:treeExplWinSize=25
let g:treeExplVertical=1
let g:treeExplNoList=1
let g:treeExplmodifiable=1
let g:treeExplIndent=2

" Quickfix window
nmap <leader>co :cope<cr>
nmap <leader>clo :ccl<cr>
nmap <leader>cn :cn<cr>
nmap <leader>cp :cp<cr>

" fugitive key map
nmap <leader>gs :Gstatus<cr>

" BufExplorer
let g:bufExplorerDefaultHelp=0
let g:bufExplorerShowRelativePath=1
let g:bufExplorerSplitUp = 1
let g:bufExplorerVertical = 1
let g:bufExplorerSplitVertSize = 30 
let g:bufExplorerShowTabBuffer=1
" Let g:bufExplorerSplitBelow=1
nmap <leader>o :BufExplorer<cr>

" binary file edit 
nmap <leader>eb :%!xxd<cr>
nmap <leader>rb :%!xxd -r<cr>

" Shell bash plugin
nmap <leader>sh :ConqueTermTab bash<cr>

filetype off                   " required!
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" let Vundle manage Vundle
" required! 
Bundle 'gmarik/vundle'

" My Bundles here:
"
" original repos on github
Bundle 'tpope/vim-fugitive'
Bundle 'tpope/vim-rails.git'
Bundle 'vim-scripts/c.vim.git'
Bundle 'vim-scripts/SeeTab.git'
Bundle 'vim-scripts/a.vim.git'
Bundle 'vim-scripts/gtags.vim.git'
Bundle 'xolox/vim-session.git'
Bundle 'vim-scripts/taglist.vim.git'
Bundle 'vim-scripts/bufexplorer.zip.git'
Bundle 'aldmeris'
Bundle 'rygwdn/vim-conque.git'
Bundle 'echofunc.vim'
Bundle 'vtreeexplorer'
Bundle 'vim-scripts/bash-support.vim.git'
Bundle 'esukram/autocomplpop.vim.git'
Bundle 'calendar.vim--Matsumoto'
Bundle 'OmniCppComplete'
Bundle 'Align'
Bundle 'renamer.vim'

"color
Bundle 'simple-dark'
Bundle 'tpope/vim-vividchalk.git'
Bundle 'summerfruit256.vim'
Bundle 'inkpot'
"
" non github repos
Bundle 'git://gist.github.com/422503.git'
Bundle 'git://git.wincent.com/command-t.git'
"
" ...

filetype plugin indent on     " required!

nmap <leader>pll :BundleList <cr>
nmap <leader>pls :BundleSearch <cr>
nmap <leader>pli :BundleInstall <cr>
nmap <leader>plu :BundleInstall! <cr>
nmap <leader>plr :BundleClean <cr>

"
"  Brief help
" :BundleList          - list configured bundles
" :BundleInstall(!)    - install(update) bundles
" :BundleSearch(!) foo - search(or refresh cache
" first) for foo
" :BundleClean(!)      - confirm(or auto-approve)
" removal of unused bundles
"
" see :h vundle for more details or wiki for FAQ
" NOTE: comments after Bundle command are not
" allowed..
"

" for Align plugin
let g:BASH_MapLeader  = ','

"For auto rename plugin
nmap <leader>ren :Renamer <cr>
nmap <leader>ree :Ren <cr>

"visit the vim websize
nmap <leader>ftpvim :e ftp://anonymous@ftp.vim.org/pub/vim/patches/7.3/ <cr>

let g:netrw_winsize = 30
nmap <silent> <leader>fe :Sexplore!<cr>

" for ACP plugin
nmap <leader>acpe :AcpEnable <cr>
nmap <leader>acpd :AcpDisable <cr>

let $MYEMAIL="kevin.wang2004@hotmail.com"

" Save/load session function
let g:session_autoload = 1
let g:session_autosave = 1
set sessionoptions=blank,curdir,winpos,folds,tabpages,winsize,buffers,help,folds,resize
autocmd vimLeave * mks! $HOME/.vim/sessions/default.vim
