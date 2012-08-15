set nocompatible

"Set options {{{

"Look and feel
set number
syntax on
set background=dark
colorscheme solarized
set ruler
set autowrite

"formatting
"tabs are 2 characters, and aren't spaces
set tabstop=2
set shiftwidth=2
set softtabstop=2
set autoindent
set backspace=indent,eol,start
set textwidth=0

"searching
set incsearch
set hlsearch
set gdefault

"history
set history=50
set undolevels=1000

"folding
set foldmethod=marker

set completeopt=longest,menuone,preview
inoremap <expr> <M-,> pumvisible() ? '<C-n>' :
			\ '<C-x><C-o><C-n><C-p><C-r>=pumvisible() ? "\<lt>Down>" : ""<CR>'
set autowrite
set showcmd

"}}}

"Auto commands {{{

" When editing a file, always jump to the last known cursor position.
" Don't do it when the position is invalid or when inside an event handler
" (happens when dropping a file on gvim).
autocmd BufReadPost *
  \ if line("'\"") > 0 && line("'\"") <= line("$") |
  \   exe "normal g`\"" |
  \ endif

"Remove any trailing whitespace that is in the file
autocmd BufRead,BufWrite * if ! &bin | silent! %s/\s\+$//ge | endif
"Disable automatic comment insertion
autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions-=o
"}}}

"Mappings {{{
"leader
let mapleader = ","
let maplocalleader = "\\"

"vimrc quick edit
nnoremap <Leader>ev :vsplit $MYVIMRC<cr>
nnoremap <Leader>sv :source $MYVIMRC<cr>

"i don't want to reach!
inoremap jk <esc>

nnoremap <Leader>hl :nohl<cr>
"window navigation
noremap <c-j> <c-w>j
noremap <c-k> <c-w>k
noremap <c-l> <c-w>l
noremap <c-h> <c-w>h

"NERDTREE
nnoremap <Leader>nt :NERDTreeToggle<cr>

"Vimux
nnoremap <Leader>tp :PromptVimTmuxCommand<cr>
nnoremap <Leader>tg :InspectVimTmuxRunner<cr>
nnoremap <Leader>tx :CloseVimTmuxPanes<cr>
vnoremap <Leader>ts "vy :call RunVimTmuxCommand(@v)<CR>
"}}}

"Python {{{

au BufRead,BufNewFile *.py,*.pyw set tabstop=4
au BufRead,BufNewFile *.py,*pyw set shiftwidth=4
au BufRead,BufNewFile *.py,*pyw set softtabstop=4
au BufRead,BufNewFile *.py,*.pyw set expandtab

let python_highlight_all=1

highlight BadWhitespace ctermbg=red guibg=red

"Display tabs at the beginning of a line in Python mode as bad.
au BufRead,BufNewFile *.py,*.pyw match BadWhitespace /^\t\+/
" Make trailing whitespace be flagged as bad.
au BufRead,BufNewFile *.py,*.pyw,*.c,*.h match BadWhitespace /\s\+$/

au BufNewFile *.py,*.pyw,*.c,*.h set fileformat=unix

"}}}

"Ruby {{{

au BufRead,BufNewFile *.rb set tabstop=2
au BufRead,BufNewFile *.rb set shiftwidth=2
au BufRead,BufNewFile *.rb set softtabstop=2
au BufRead,BufNewFile *.rb set expandtab

"}}}

"Clojure{{{

"VimClojure options
let g:vimclojure#ParenRainbow=1
let g:vimclojure#DynamicHighlighting=1

"}}}

"Vundle {{{
filetype off

set rtp+=~/.vim/bundle/vundle/.
call vundle#rc()
Bundle 'gmarik/vundle'

"Bundles
Bundle 'tpope/vim-fugitive'
Bundle 'scrooloose/nerdtree'
Bundle 'scrooloose/syntastic'
Bundle 'tpope/vim-surround'
Bundle 'hallison/vim-markdown'
Bundle 'jQuery'
Bundle 'Shougo/neocomplcache'
Bundle 'Shougo/neocomplcache-snippets-complete'
Bundle 'Shougo/vimproc'
Bundle 'Shougo/vimshell'
Bundle 'tpope/vim-commentary'
Bundle 'VimClojure'
Bundle 'benmills/vimux'
Bundle 'ctrlp.vim'
Bundle 'html5.vim'
Bundle 'emilkje/sparkup-bundle'
Bundle 'groenewege/vim-less'
Bundle 'hallison/vim-ruby-sinatra'
Bundle 'altercation/vim-colors-solarized'

filetype plugin indent on
set ofu=syntaxcomplete#Complete
"}}}

"neocomplcache {{{
" Use neocomplcache.
let g:neocomplcache_enable_at_startup = 1
" Use smartcase.
let g:neocomplcache_enable_smart_case = 1
" Use camel case completion.
let g:neocomplcache_enable_camel_case_completion = 1
" Use underbar completion.
let g:neocomplcache_enable_underbar_completion = 1
" Set minimum syntax keyword length.
let g:neocomplcache_min_syntax_length = 1
let g:neocomplcache_lock_buffer_name_pattern = '\*ku\*'
"automatically select first
let g:neocomplcache_enable_auto_select = 1

" Define dictionary.
let g:neocomplcache_dictionary_filetype_lists = {
    \ 'default' : '',
    \ 'vimshell' : $HOME.'/.vimshell_hist',
    \ 'scheme' : $HOME.'/.gosh_completions'
    \ }

" Define keyword.
if !exists('g:neocomplcache_keyword_patterns')
  let g:neocomplcache_keyword_patterns = {}
endif
let g:neocomplcache_keyword_patterns['default'] = '\h\w*'

" Plugin key-mappings.
imap <C-k>     <Plug>(neocomplcache_snippets_expand)
smap <C-k>     <Plug>(neocomplcache_snippets_expand)
inoremap <expr><C-g>     neocomplcache#undo_completion()
inoremap <expr><C-l>     neocomplcache#complete_common_string()

" <TAB>: completion.
inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : "\<TAB>"
" <C-h>, <BS>: close popup and delete backword char.
inoremap <expr><C-h> neocomplcache#smart_close_popup()."\<C-h>"
inoremap <expr><BS> neocomplcache#smart_close_popup()."\<C-h>"
inoremap <expr><C-y>  neocomplcache#close_popup()
inoremap <expr><C-e>  neocomplcache#cancel_popup()

" Enable heavy omni completion.
if !exists('g:neocomplcache_omni_patterns')
  let g:neocomplcache_omni_patterns = {}
endif
let g:neocomplcache_omni_patterns.ruby = '[^. *\t]\.\w*\|\h\w*::'
let g:neocomplcache_omni_patterns.c = '\%(\.\|->\)\h\w*'
"}}}

