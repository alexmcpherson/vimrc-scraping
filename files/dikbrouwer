set nocompatible               " be iMproved
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
Bundle 'tpope/vim-surround'
Bundle 'tpope/vim-markdown'
Bundle 'tpope/vim-git'
Bundle 'tpope/vim-commentary'
Bundle 'Lokaltog/vim-easymotion'
Bundle 'rstacruz/sparkup', {'rtp': 'vim/'}
Bundle 'msanders/snipmate.vim'
Bundle 'robhudson/snipmate_for_django.git'
Bundle 'dikbrouwer/Vim-Snippets'
Bundle 'ervandew/supertab'
Bundle 'git://git.wincent.com/command-t.git'
Bundle 'scrooloose/nerdtree.git'

" tslime (send output to tmux window)
Bundle 'https://github.com/jgdavey/tslime.vim.git'

" Vim Ack
Bundle 'mileszs/ack.vim'

" File types
Bundle 'vim-scripts/pep8'
Bundle 'klen/python-mode'
Bundle 'vim-scripts/django.vim.git'
"Bundle 'kevinw/pyflakes-vim'
"Bundle 'rainerborene/vim-pony'
Bundle 'groenewege/vim-less'
Bundle 'kchmck/vim-coffee-script.git'
Bundle 'vim-scripts/nginx.vim.git'

Bundle 'vim-easymotion.git'

" Python mode options
"let g:pymode_lint_write = 0
let g:pymode_lint_checker = "pyflakes"

" Powerline
Bundle 'Lokaltog/vim-powerline'
" Note: need a patched font to do custom powerline symbols
"let g:Powerline_symbols = 'fancy'

" Colorschemes
Bundle 'dikbrouwer/Vim-Colorschemes'
Bundle 'tomasr/molokai'
Bundle 'altercation/vim-colors-solarized'
Bundle 'wgibbs/vim-irblack'

" Customize solarized colorscheme
let g:solarized_contrast = "high"
let g:solarized_visibility = "normal"
let g:solarized_termcolors = 256
let g:solarized_termtrans = 1

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

" Prevent pylint from throwing unintended errors
let g:pymode_lint_message = 0

"set modelines=0
let mapleader = ","

" Color scheme and font
set background=dark
" colorscheme molokai_black
colorscheme solarized
set guifont=Menlo:h14
"set background=light
"colorscheme github
"set guifont=Menlo:h14

" Tab settings
set expandtab
set ts=2 sts=2 sw=2

" Syntax Highlighting on
syntax on

" Filetype settings
autocmd FileType python set ts=4 sts=4 sw=4 omnifunc=pythoncomplete#Complete ft=python.django textwidth=79 foldmethod=indent foldlevel=99
let python_highlight_all = 1
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType html set textwidth=200
autocmd FileType htmldjango set ft=htmldjango.html textwidth=200
" autocmd FileType html set ft=htmldjango.html ts=2 sts=2 sw=2 textwidth=200 omnifunc=htmlcomplete#CompleteTags
" autocmd FileType htmldjango set ts=2 sts=2 sw=2 textwidth=200 omnifunc=pythoncomplete#Complete
"autocmd FileType htmldjango source ~/.vim/bundle/sparkup/ftplugin/html/sparkup.vim
"autocmd FileType htmldjango set omnifunc=pythoncomplete#Complete ft=html.htmldjango
" autocmd FileType htmldjango set omnifunc=htmlcomplete#CompleteTags|set textwidth=200

" Custom filetypes for specific files
autocmd BufRead,BufNewFile Vagrantfile set ft=ruby
autocmd BufRead,BufNewFile /etc/nginx/* set ft=nginx

" show incomplete command in the lower right corner for when i forget insane vim commands
set showcmd

" Configure supertab and helpful code completion (Python)
let g:SuperTabDefaultCompletionType = "context"
set completeopt=menuone,longest,preview


" * General Settings
scriptencoding utf-8
set encoding=utf-8
set scrolloff=3
set autoindent
set showmode
set showcmd
set hidden
set wildmenu
set wildmode=list:longest
set visualbell
set cursorline
set ttyfast
set ruler
set backspace=indent,eol,start
set laststatus=2
set numberwidth=3
set nowrap
try
    set relativenumber
    set undofile
catch
    set number
endtry

" Tame searching/moving
set ignorecase
set smartcase
"set gdefault " global serach replace not working if set as default?
set incsearch
set showmatch
set hlsearch
nnoremap <leader><space> :noh<cr>
nnoremap <tab> %
vnoremap <tab> %

" Set the terminal title
set title

" Set to auto read when a file is changed from the outside
set autoread

" Make saving easier
set autowrite
autocmd BufLeave,FocusLost * silent! wall
nmap <leader>w :w!<cr>
nmap <M-s> <ESC> :w<CR>

" Enter command mode when focus is lost
au FocusLost,TabLeave * call feedkeys("\<C-\>\<C-n>")

" Folding
set nofoldenable
set fdm=indent

" Strip all trailing whitespace
nnoremap <leader>W :%s/\s\+$//<cr>:let @/=''<CR>

" Fold tag
nnoremap <leader>ft Vatzf

" Reselected pasted text
nnoremap <leader>v V`]

" Search
nnoremap <leader>a :Ack 

" When pressing <leader>cd switch to the directory of the open buffer
map <leader>cd :cd %:p:h<cr>

" Easier window navigation
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" Command-T
" let g:CommandTMaxHeight = 15
set wildignore+=*.o,*.obj,.git,*.pyc,*.orig,*.swp,*.un~
noremap <leader>y :CommandTFlush<cr>

" Execute Pyhton file being edited with LEADER ee
map <buffer> <leader>ee :w<CR>:!/usr/bin/env python % <CR>

" Center screen around cursor with SPACE
nmap <space> zz

" JSlint highlighting
map <Leader>l :JSLintLight<CR>

" Open current document in browser
map <Leader>p :!open %<CR><CR>

" Shortcut to copy to clipboard
map <Leader>vv "*y

" Shortcut to compile coffeescript
noremap <leader>cw :w<CR>:!coffee -c %<CR>

" Set yankring history file dir
let g:yankring_history_dir = '$HOME/.vim'

" Enable Sparkup for lightning-fast HTML editing
let g:sparkupExecuteMapping = '<leader>e'
let g:sparkupNextMapping = '<c-x>' " Prevent issues with tabbing/tab-expansion

" Toggle NERDTree
noremap <Leader>d :NERDTreeToggle<CR>

" Customize status line
set statusline=%<%F%h%m%r%h%w%y\ col:%c%V\ line:%l\,%L\ %P

if has("gui_running")
    set guioptions=egmrt
    set guioptions-=r
endif

" Reload vimrc if anything is written to it
au! BufWritePost .vimrc source %

" tslime bindings
vmap <C-c><C-c> <Plug>SendSelectionToTmux
nmap <C-c><C-c> <Plug>NormalModeSendToTmux
nmap <C-c>r <Plug>SetTmuxVars

" Add the virtualenv's site-packages to vim path
" py << EOF
" import os.path
" import sys
" import vim
" if 'virtual_env' in os.environ:
"     project_base_dir = os.environ['virtual_env']
"     sys.path.insert(0, project_base_dir)
"     activate_this = os.path.join(project_base_dir, 'bin/activate_this.py')
"     execfile(activate_this, dict(__file__=activate_this))
" eof
