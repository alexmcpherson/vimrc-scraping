

filetype off


let g:vundle_default_git_proto = 'git'

set runtimepath+=$HOME/.vim/bundle/vundle
call vundle#rc()

" buggy plugins
set rtp+=$home/.vim/vendor/increment

Bundle 'gmarik/vundle'

Bundle 'Lokaltog/vim-powerline'
Bundle 'Rip-Rip/clang_complete'
Bundle 'godlygeek/tabular'
Bundle 'groenewege/vim-less'
Bundle 'jnurmine/Zenburn'
Bundle 'juvenn/mustache.vim'
Bundle 'kchmck/vim-coffee-script'
Bundle 'kien/ctrlp.vim'
Bundle 'majutsushi/tagbar'
Bundle 'mattn/gist-vim'
Bundle 'mattn/zencoding-vim'
Bundle 'michaeljsmith/vim-indent-object'
Bundle 'mileszs/ack.vim'
Bundle 'msanders/snipmate.vim'
Bundle 'nathanaelkane/vim-indent-guides'
Bundle 'orftz/sbd.vim'
Bundle 'othree/html5.vim'
Bundle 'pangloss/vim-javascript'
Bundle 'puppetlabs/puppet-syntax-vim'
Bundle 'scrooloose/syntastic'
Bundle 'tpope/vim-commentary'
Bundle 'tpope/vim-fugitive'
Bundle 'tpope/vim-markdown'
Bundle 'tpope/vim-ragtag'
Bundle 'tpope/vim-rails'
Bundle 'tpope/vim-surround'
Bundle 'wincent/Command-T'
Bundle 'yaroot/Align'
Bundle 'yaroot/DrawIt'
Bundle 'yaroot/vim-endwise'
Bundle 'yaroot/vissort'
Bundle 'yaroot/wowlua.vim'
"Bundle 'bbommarito/vim-slim'
"Bundle 'digitaltoad/vim-jade'
"Bundle 'othree/xml.vim'
"Bundle 'tpope/vim-vividchalk'

" install from vim-scripts
Bundle 'DirDiff.vim'
Bundle 'Gundo'
Bundle 'Jinja'
Bundle 'Rainbow-Parenthesis'
Bundle 'TaskList.vim'
Bundle 'VimClojure'
Bundle 'YankRing.vim'
Bundle 'a.vim'
Bundle 'dbext.vim'
Bundle 'javacomplete'
Bundle 'mako.vim'
Bundle 'mako.vim--Torborg'
Bundle 'mru.vim'
Bundle 'muttrc.vim'
Bundle 'nginx.vim'
Bundle 'po.vim'
Bundle 'taglist.vim'
Bundle 'tir_black'
Bundle 'velocity.vim'

Bundle 'git://vim-latex.git.sourceforge.net/gitroot/vim-latex/vim-latex'

set nocp

" leader keybind
let mapleader=','

" Encoding stuffs
set nobomb
set encoding=utf-8
set fileformat=unix
set fileformats=unix,dos,mac
set fileencoding=utf-8
set fileencodings=ucs-bom,utf-8,gb-18030,gbk,gb2312,cp963,gb18030,big5,euc-jp,euc-kr,latin1

"au BufReadPost,BufNewFile * if !&readonly | setlocal nobomb fileformat=unix fileencoding=utf-8 | endif

set showmatch       " blink the matching bracket
set hls incsearch
set autoindent cindent nosmartindent
set tabstop=4       " 4 spaces indentation
set shiftwidth=4    " same
set softtabstop=4   " same
set expandtab smarttab " expand tab with spaces
set backspace=indent,eol,start  " smart backspacing
set history=200
set magic ruler
set number
if v:version>=703
    autocmd BufNewFile,BufRead * set relativenumber
else
    set number
endif
set wrap nolinebreak
set diffopt=filler,vertical " diff模式
set scrolloff=6 " 上下滚动留的最少行数
"set cmdheight=2

set completeopt=longest,menu

set textwidth=70
set wrapmargin=0
set formatoptions=croq

filetype plugin indent on
syntax on

" Status Line
set laststatus=2
"set statusline=\ %F%m%r%h\ %w\ \ CWD:\ %r%{getcwd()}%h\ \ \ Line:\ %l/%L:%c:
set statusline=\ \%F\ %m%r%h%w\ \ %y\ [%{&ff}]\ [%{&fileencoding}]\ [tw:%{&tw}]\ [%p%%]\ [%l/%L]\ [%c]

set wc=<tab>
set wildmenu
"set wildmode=list:longest
set wildmode=longest:full

if v:version>=703
    set undofile
    set undolevels=1000
    if has('win32')
        set undodir=$home\.vim\tmp\undo\\\\
    else
        set undodir=~/.vim/tmp/undo//
    endif
endif

if has('win32')
    set backupdir=$home\.vim\tmp\backup\\\\
    set directory=$home\.vim\tmp\backup\\\\
else
    set backupdir=~/.vim/tmp/backup//
    set directory=~/.vim/tmp/swap//
endif
set backup writebackup

set foldenable
set foldmethod=marker
set foldmarker={{{,}}}
set foldnestmax=5
set foldminlines=1
set foldlevel=0

set ttyfast

set background=dark
"colo solarized
"colo slate
"colo torte
"colo lucius
"colo moria
"colo wombat
if has('gui_running')
    colo tir_black
    set guioptions=
    set lines=55
    set columns=180

    if has('win32')
        set guifont=Monaco:h9
    elseif has('macunix')
        set guifont=Monaco:h14
    else
        set guifont=DejaVu\ Sans\ Mono\ 9
        set guifontwide=WenQuanYi\ Micro\ Hei\ Mono\ 10
        "set guifont=Monospace:h7:w3
    endif
else
    "set t_Co=256
    colo ir_black
endif


"set cuc
"set cul

"set list listchars=tab:▷⋅,trail:⋅,nbsp:⋅
hi SpecialKey guibg=NONE ctermbg=NONE
"hi SpecialKey guifg=#3a3a3a ctermfg=237

hi link luaOperator Conditional

let java_highlight_all=1
let java_highlight_functions="style"
let java_highlight_debug=1
let java_mark_braces_in_parens_as_errors=1
let java_space_errors=1
let java_comment_strings=1

let g:lisp_rainbow = 1
"runtime syntax/RainbowParenthesis.vim

runtime macros/matchit.vim

if (v:version>=703)
    au vimenter,colorscheme * hi ColorColumn ctermbg=234 guibg=#121212
    set colorcolumn=72,80
endif


"if executable('ctags')
"endif

nnoremap <C-C> :tabnew<CR>
nnoremap <C-N> :tabnext<CR>
nnoremap <C-P> :tabprevious<CR>
nnoremap <C-H> <C-W>h
nnoremap <C-J> <C-W>j
nnoremap <C-K> <C-W>k
nnoremap <C-L> <C-W>l
nnoremap <bs> :noh<CR>
vnoremap <leader>yy "+y
nnoremap <leader>pp "+p
nnoremap <leader>ft :set filetype=
nnoremap <leader>hex :%!xxd<CR>
nnoremap <leader>xeh :%!xxd -r<CR>
nnoremap <leader>2 :set t_Co=256<CR>
nnoremap <leader>8 :set t_Co=8<CR>

" ack on the fly
nnoremap <leader>a :Ack  <bs>

" TaskList
map <unique> <leader>tl <Plug>TaskList

" NERDTree toggle
"nnoremap <F11> :NERDTreeToggle<CR>
" taglist
"nnoremap <F12> :TlistToggle<CR>

" Command-T
nnoremap <unique> <silent> <Leader>tt :CommandT<CR>
nnoremap <unique> <silent> <Leader>tf :CommandTFlush<CR>
nnoremap <unique> <silent> <Leader>tb :CommandTBuffer<CR>

" ctrlp
nnoremap <leader>tp :CtrlP<CR>
let g:ctrlp_map = "<c-m-p>"
let g:ctrlp_working_path_mode = 0
let g:ctrlp_custom_ignore = {
  \ 'dir':  '\.git$\|\.hg$\|\.svn$\|\.yardoc$',
  \ 'file': '\.exe$\|\.so$\|\.dat$'
  \ }

" DirDiff
"Sets default exclude pattern:
let g:DirDiffExcludes = "CVS,*.git,*.svn,*.class,*.exe,.*.swp"
"Sets default ignore pattern:
let g:DirDiffIgnore = "Id:,Revision:,Date:"
"If DirDiffSort is set to 1, sorts the diff lines.
let g:DirDiffSort = 1
"Sets the diff window (bottom window) height (rows)
let g:DirDiffWindowSize = 10
"Ignore case during diff
let g:DirDiffIgnoreCase = 0

" snipMate
"let g:snips_trigger_key='<c-y>'
"let g:snips_trigger_key_backwards='<s-c->'

" indent guides
let g:indent_guides_auto_colors = 0
let g:indent_guides_start_level = 2
let g:indent_guides_guide_size  = 1

autocmd VimEnter,Colorscheme * :hi IndentGuidesOdd  guibg=#202520
autocmd VimEnter,Colorscheme * :hi IndentGuidesEven guibg=#202020

" disable Align mapping
let g:loaded_AlignMapsPlugin = "v41"

" yankring shits
let g:yankring_replace_n_pkey = ''
let g:yankring_replace_n_nkey = ''
let g:yankring_history_dir = "$HOME/.vim/tmp/"

if has('win32')
    let g:loaded_dbext_dbi = 1
    let g:loaded_dbext_auto = 1
    let g:loaded_dbext = 1
endif

if has('win32')
    let g:syntastic_mode_map = {}
    let g:syntastic_mode_map['mode'] = 'passive'
endif


" let g:clang_debug = 1
" if has('win32')
"     let g:clang_exec = '"path\to\clang.exe'
"     let g:clang_user_options = '-Ipath\to\include 2> NUL || exit 0"'
"     let g:clang_use_library = 1
"     let g:clang_library_path = 'path\to\dir\contains\libclang.dll'
" endif

