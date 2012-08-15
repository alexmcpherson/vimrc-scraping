set nocompatible               " be iMproved
filetype off                   " required!

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" let Vundle manage Vundle
" required! 
Bundle 'gmarik/vundle'

" General 
Bundle 'Lokaltog/vim-easymotion'
Bundle 'rstacruz/sparkup', {'rtp': 'vim/'}
Bundle 'tpope/vim-rails.git'
Bundle 'L9'
Bundle 'FuzzyFinder'
Bundle 'altercation/vim-colors-solarized'
Bundle 'cschlueter/vim-ir_black'
Bundle 'scrooloose/nerdtree'
Bundle 'https://github.com/tpope/vim-fugitive.git'
Bundle 'git://git.wincent.com/command-t.git'
Bundle 'mutewinter/vim-indent-guides'
Bundle 'kien/ctrlp.vim'
Bundle 'scrooloose/syntastic'
Bundle 'kana/vim-smartinput'
Bundle 'sjl/clam.vim'

" Web
Bundle 'mattn/zencoding-vim'
Bundle 'HTML-AutoCloseTag'
Bundle 'juvenn/mustache.vim'
Bundle 'groenewege/vim-less'
Bundle 'Rykka/ColorV'
Bundle 'gregsexton/MatchTag'
Bundle 'wavded/vim-stylus'
Bundle 'JavaScript-Indent'
Bundle 'tangledhelix/vim-octopress'
Bundle 'tpope/vim-haml'

" Javascript / node / coffeescript 
Bundle 'pangloss/vim-javascript'
Bundle 'itspriddle/vim-jquery'
Bundle 'digitaltoad/vim-jade'
Bundle 'leshill/vim-json'
Bundle 'kchmck/vim-coffee-script'
Bundle 'manalang/jshint.vim'
Bundle 'mmalecki/vim-node.js'
Bundle 'lambdalisue/nodeunit.vim'

" Misc
Bundle 'vim-scripts/nginx.vim'

filetype plugin indent on     " required!
"
" Brief help
" :BundleList          - list configured bundles
" :BundleInstall(!)    - install(update) bundles
" :BundleSearch(!) foo - search(or refresh cache first) for foo
" :BundleClean(!)      - confirm(or auto-approve) removal of unused bundles
"
" see :h vundle for more details or wiki for FAQ
" NOTE: comments after Bundle command are not allowed..

" Javascript / Coffeescript / Node
au BufNewFile,BufRead *.less set filetype=less
au BufNewFile,BufRead *.coffee set filetype=coffee
au! BufRead,BufNewFile *.json set filetype=json 
au BufRead,BufNewFile *.ejs set filetype=html
au BufRead,BufNewFile *.eco set filetype=html
au BufNewFile,BufRead *.coffee set shiftwidth=4
au FileType javascript set shiftwidth=4
au BufNewFile,BufRead *.coffee set tabstop=4
au FileType javascript set tabstop=4
au BufNewFile,BufRead *.coffee set softtabstop=4
au FileType javascript set softtabstop=4

" Web
au BufNewFile,BufRead *.styl set filetype=stylus
au BufNewFile,BufRead *.stylus set filetype=stylus
au! BufWinEnter *.scss call colorv#preview("S")
au! bufwritepost *.scss call colorv#preview("S")
au! BufWinEnter *.styl call colorv#preview("S")
au! bufwritepost *.styl call colorv#preview("S")
autocmd BufNewFile,BufRead *.markdown setfiletype octopress

syntax enable
set background=dark
"colorscheme solarized
let g:solarized_termtrans=1
let g:solarized_termcolors=256

if has ('gui_running')
    if has('mac')
        set gfn=Monaco:h13
    else 
        set guifont=Monaco\ 13
    endif
    set guioptions+=LlRrbmT
    set guioptions-=LlRrbmT
endif
if has('statusline')
    set laststatus=2
    " Broken down into easily includeable segments
    set statusline=%<%f\    " Filename
    set statusline+=\ [%{&ff}/%Y]            " filetype
    set statusline+=\ [%{getcwd()}]          " current dir
endif

set tabstop=4
set softtabstop=4
set shiftwidth=4
set sts=4
set sw=4
set expandtab
set showmode                    " display the current mode
set smarttab                    " Smarter tab levels

set cursorline                  " highlight current line
hi cursorline guibg=#333333     " highlight bg color of current line
hi CursorColumn guibg=#333333   " highlight cursor

set nowritebackup
set nobackup
set directory=/tmp//            " prepend(^=) $HOME/.tmp/ to default path; use full path as backup filename(//)

set hlsearch                    " highlight search
set ignorecase                  " Do case in sensitive matching with
set smartcase                   " be sensitive when there's a capital letter

set nowrap
set textwidth=0                 " Don't wrap lines by default

set backspace=indent,eol,start  " more powerful backspacing

set showmatch                   " Show matching brackets.
set matchtime=5                 " Bracket blinking.
set laststatus=2                " Always show status line.
set ruler                       " Show ruler
set showcmd                     " Display an incomplete command in the lower right corner of the Vim window

set nolist                      " Display unprintable characters f12 - switches
set listchars=tab:·\ ,eol:¶,trail:·,extends:»,precedes:« " Unprintable chars mapping

