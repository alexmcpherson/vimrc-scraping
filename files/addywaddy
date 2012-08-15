" Vundle
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()
Bundle 'gmarik/vundle'
Bundle 'L9'
Bundle 'Lokaltog/vim-easymotion'
Bundle 'rstacruz/sparkup', {'rtp': 'vim/'}
Bundle 'tpope/vim-rails'
Bundle "mileszs/ack.vim"
Bundle "vim-scripts/Color-Sampler-Pack"
Bundle "motemen/git-vim"
Bundle "tpope/vim-haml"
Bundle "michaeljsmith/vim-indent-object"
Bundle "pangloss/vim-javascript"
Bundle "wycats/nerdtree"
Bundle "ddollar/nerdcommenter"
Bundle "tpope/vim-surround"
Bundle "vim-scripts/taglist.vim"
Bundle "tpope/vim-vividchalk"
Bundle "altercation/vim-colors-solarized"
Bundle "ervandew/supertab"
Bundle "tpope/vim-cucumber"
Bundle "timcharper/textile.vim"
Bundle "taq/vim-rspec"
Bundle "vim-scripts/ZoomWin"
Bundle "msanders/snipmate.vim"
Bundle "tpope/vim-markdown"
Bundle "tsaleh/vim-align"
Bundle "tpope/vim-unimpaired"
Bundle "vim-scripts/searchfold.vim"
Bundle "tpope/vim-endwise"
Bundle "wgibbs/vim-irblack"
Bundle "kchmck/vim-coffee-script"
Bundle "scrooloose/syntastic"
Bundle "ajf/puppet-vim"
Bundle "bdd/vim-scala"
Bundle "mattn/gist-vim"
Bundle "walm/jshint.vim"
Bundle "Lokaltog/vim-powerline"
Bundle "sickill/vim-pasta"
Bundle "kien/ctrlp.vim"
Bundle "jceb/vim-orgmode"
Bundle "vim-scripts/VimClojure"
Bundle "kchmck/vim-coffee-script"
Bundle "jpalardy/vim-slime"
Bundle "Raimondi/delimitMate"
Bundle "zatan/molokai.vim"
Bundle "seaofclouds/vim-colorx"

" Set the Leader key
let mapleader=","
let maplocalleader=","

map <M-CR> <C-]>

" 256 colors please
let &t_Co=256

" Resizing splits is still easier with the mouse, AFAIAC
:set mouse=a

syntax enable
set background=dark

set wrap
set nocompatible
set number
set ruler
syntax on
set encoding=utf-8
set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab
set list listchars=tab:\ \ ,trail:·

" Searching
set hlsearch
set incsearch
set ignorecase
set smartcase

" Tab completion
set wildmode=list:longest,list:full
set wildignore+=*.o,*.obj,.git,*.rbc,*.class,.svn,vendor/gems/*

" Status bar
set laststatus=2

" Without setting this, ZoomWin restores windows in a way that causes
" equalalways behavior to be triggered the next time CommandT is used.
" This is likely a bludgeon to solve some other issue, but it works
set noequalalways

" NERDTree configuration
let NERDTreeIgnore=['\.pyc$', '\.rbc$', '\~$']
map <Leader>n :NERDTreeToggle<CR>

" ZoomWin configuration
map <Leader><Leader> :ZoomWin<CR>

function s:setupWrapping()
  set wrap
  set wrapmargin=2
  set textwidth=72
endfunction

"function s:setupMarkup()
  "call s:setupWrapping()
  "map <buffer> <Leader>p :Hammer<CR>
"endfunction

" Thorfile, Rakefile, Vagrantfile and Gemfile are Ruby
au BufRead,BufNewFile {Gemfile,Rakefile,Vagrantfile,Thorfile,config.ru}    set ft=ruby

" md, markdown, and mk are markdown and define buffer-local preview
au BufRead,BufNewFile *.{md,markdown,mdown,mkd,mkdn} call s:setupMarkup()

" add json syntax highlighting
au BufNewFile,BufRead *.json set ft=javascript

" less css files
au BufRead,BufNewFile *.less set ft=css

au BufRead,BufNewFile *.txt call s:setupWrapping()

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

" load the plugin and indent settings for the detected filetype
filetype plugin indent on

" Opens an edit command with the path of the currently edited file filled in
" Normal mode: <Leader>e
map <Leader>e :e <C-R>=expand("%:p:h") . "/" <CR>

" Opens a tab edit command with the path of the currently edited file filled in
" Normal mode: <Leader>t
map <Leader>te :tabe <C-R>=expand("%:p:h") . "/" <CR>

" Inserts the path of the currently edited file into a command
" Command mode: Ctrl+P
cmap <C-P> <C-R>=expand("%:p:h") . "/" <CR>

" Unimpaired configuration
" Bubble single lines
nmap <C-Up> [e
nmap <C-Down> ]e
" Bubble multiple lines
vmap <C-Up> [egv
vmap <C-Down> ]egv

" Enable syntastic syntax checking
let g:syntastic_enable_signs=1
let g:syntastic_quiet_warnings=1

" gist-vim defaults
if has("mac")
  let g:gist_clip_command = 'pbcopy'
elseif has("unix")
  let g:gist_clip_command = 'xclip -selection clipboard'
endif
let g:gist_detect_filetype = 1
let g:gist_open_browser_after_post = 1

" Use modeline overrides
set modeline
set modelines=10

" Directories for swp files
"set backupdir=~/.vim/backup
"set directory=~/.vim/backup

" Sod backups and swaps
set nobackup
set noswapfile

" Turn off jslint errors by default
let g:JSLintHighlightErrorLine = 0

" MacVIM shift+arrow-keys behavior (required in .vimrc)
let macvim_hig_shift_movement = 1

" % to bounce from do to end etc.
runtime! macros/matchit.vim

" Show (partial) command in the status line
set showcmd

" Turn off those bells!
set noeb vb t_vb=
au GUIEnter * set vb t_vb=


" Powerline Fancy stuff
let g:Powerline_symbols = 'fancy'

colorscheme solarized


" Here's the vimclojure stuff. You'll need to adjust the NailgunClient
" setting if you're on windows or have other problems.
let vimclojure#FuzzyIndent=1
let vimclojure#HighlightBuiltins=1
let vimclojure#HighlightContrib=1
let vimclojure#DynamicHighlighting=1
let vimclojure#ParenRainbow=1
"let vimclojure#WantNailgun = 1
"let vimclojure#NailgunClient = $HOME . "/.bin/ng"

function! s:pbcopy()
  call system("pbcopy", getreg(""))
endfunction

command! -nargs=0 -bar CC call s:pbcopy()

function! s:pbpaste()
  call setreg("", system("pbpaste"))
endfunction

command! -nargs=0 -bar PP call s:pbpaste()

" Slime config
let g:slime_target = "tmux"

" For ClojureScript

au BufNewFile,BufRead *.cljs set filetype=clojure

" Disable git status for now
call Pl#Theme#RemoveSegment('fugitive:branch')
