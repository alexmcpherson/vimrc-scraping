" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

"========== Display ==========
"
" Use solarized colorscheme
let g:solarized_termtrans=1
let g:solarized_termcolors=256
set t_Co=256
colorscheme solarized
if has('gui')
    set bg=light
else
    set bg=dark
endif
set guifont=Inconsolata:h14
syntax on                       " Enable syntax highlighting
set gcr=a:blinkon0              " Diable blinking cursor
set number                      " Show line numbers
set ruler                       " Show the cursor position all the time
set showmode                    " Show current mode

" Display tabs and trailling spaces    
set list listchars=tab:\ \ ,trail:·

" Hide toolbars and scrollbars in MacVim
set go-=T
set go-=r
set go-=L

" Allow backspace in insert mode
set backspace=indent,eol,start

set history=1000                " keep loads of command line history
set showcmd                     " display incomplete commands

" Don't use Ex mode, use Q for formatting
map Q gq

" CTRL-U in insert mode deletes a lot. Use CTRL-G u to first break undo,
" so that you can undo CTRL-U after inserting a line break.
inoremap <C-U> <C-G>u<C-U>



filetype plugin indent on

" For all text files set 'textwidth' to 78 characters.
"autocmd FileType text setlocal textwidth=78
"set linebreak
set autoindent                  " always set autoindenting on


" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
    command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
                \ | wincmd p | diffthis
endif

" ========== Turn off swap files ==========
set nobackup
set nowritebackup
set noswapfile

" ========== Searching ==========
set cpoptions+=$                " Show a $ at the end of a replace operation
set incsearch                   " Do incremental searching
set nohlsearch                  " Disable search result highlighting

" ========== Viminfo ==========
set viminfo='100,f1,<500        " Save up to 100 marks; enable uppercase marks
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
" More natural navigation for wrapped lines
nnoremap j gj
nnoremap k gk
" <leader><space> to un-highlight search matches
set scrolloff=3
set encoding=utf-8
set wrap
" IDE stuff
nnoremap <F5> :!python %<cr>
nnoremap <F6> :!ruby %<cr>
au Bufread,BufNewFile *.jade set filetype=jade
au Bufread,BufNewFile *.scss set filetype=scss
" Use system clipboard
set clipboard=unnamed
set hidden
nnoremap <C-Y> ggVGy
