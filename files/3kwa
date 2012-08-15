" make sure language is default i.e. English
language C
set langmenu=none

" its vim no vi ;)
set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

" keep 50 lines of command line history
set history=50

" show the cursor position all the time
set ruler

" display incomplete commands
set showcmd

" enable the mouse
set mouse=a

" do incremental searching
set incsearch
set ignorecase
set smartcase
set showmatch
set hlsearch
" remove highlighted search in an easy \<space>
nnoremap <leader><space> :noh<cr>

" activate syntax highlighting
syntax enable

" highlights cursor line
set cursorline

" python style tabs
set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab

" http://stevelosh.com/blog/2010/09/coming-home-to-vim/
set encoding=utf-8
set scrolloff=3
set autoindent
set showmode
set showcmd
set hidden
set wildmenu
set wildmode=list:longest
set visualbell
set ttyfast
set laststatus=2
" set relativenumber


" set undofile
set wrap
set linebreak
set textwidth=0
" set formatoptions=qrn1
if has("gui_running")
    set colorcolumn=80
endif

" global substitution i.e. g not required in :%s/foo/bar/
set gdefault

" IDLE type execution
autocmd BufNewFile,BufRead *.py map <buffer> <F5> : w!<cr>:!python %<cr>
autocmd BufNewFile,BufRead *.py imap <buffer> <F5> <esc>:w!<cr>:!python %<cr>

" the very popular desert colorscheme for a reason
colorscheme desert

" don't need the toolbar in gVim
set guioptions-=T

" taglist
nnoremap <silent> <F2> :TlistToggle<CR>
set tags=./tags;

" text with 78 characters
autocmd BufRead *.txt set tw=78

" no end of line whitespace
autocmd BufWrite * silent! %s/[\r \t]\+$//

" omni completion
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS

" pylint (not on write)
autocmd FileType python compiler pylint
let g:pylint_onwrite = 0

" jslint
au FileType javascript set makeprg=jslint\ %

" NERDTree ignore
let NERDTreeIgnore=['\.pyc']
