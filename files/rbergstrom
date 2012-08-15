" General

set nocompatible
set background=dark
syntax on

filetype plugin indent on
set backspace=indent,eol,start
set backup
set backupdir=~/.vim/backup,~/vimfiles/backup
set clipboard+=unnamed
set directory=~/.vim/tmp,~/vimfiles/tmp
set fileformats=unix,dos,mac
set hidden
set noerrorbells
set wildmenu
set wildignore=*.dll,*.o,*.obj,*.bak,*.exe,*.pyc,*.jpg,*.gif,*.png
set wildmode=list:longest
set vb t_vb=

" UI Options

set cursorline
set incsearch
set laststatus=2
set lazyredraw
set list
set listchars=tab:>-,trail:-
set matchtime=5
set nohls
set nostartofline
set novisualbell
set ruler
set scrolloff=10
set showcmd
set showmatch
set sidescrolloff=10

" GUI Specific

if has("gui_running")
        colorscheme wombat
        set columns=120
        set lines=40
        set guifont=Consolas:h10
        set guioptions-=T
endif

" Text Formatting

set autoindent
set completeopt=
set expandtab
set formatoptions=rq
set ignorecase
set infercase
set nowrap
set shiftround
set smartcase
set smartindent
set shiftwidth=4
set softtabstop=4
set tabstop=8

" Folding

set foldenable
set foldmarker={,}
set foldmethod=marker
set foldlevel=100
set foldopen=block,hor,mark,percent,quickfix,tag

function SimpleFoldText()
        return getline(v:foldstart).' '
endfunction

set foldtext=SimpleFoldText

" TagList Plugin

let Tlist_Ctags_Cmd = 'E:\Users\rbergstrom\Documents\Code\ctags58\ctags.exe'
let Tlist_Auto_open=0
let Tlist_Compact_Format = 1
let Tlist_Exist_OnlyWindow = 1
let Tlist_Enable_Fold_Column = 0
let Tlist_Sort_Type = "name"

let tlist_aspjscript_settings = 'asp;f:function;c:class'
let tlist_aspvbx_settings = 'asp;f:function;s:sub'
let tlist_vb_setings = 'asp;f:function;c:class'

" MiniBuf Explorer

let g:miniBufExplMapWindowNavVim = 1
let g:miniBufExplMapWindowNavArrows = 1
let g:miniBufExplMapCTabSwitchBufs = 1
let g:miniBufExplModSelTarget = 1

