set nocompatible

syntax on
filetype plugin on

"pathogen
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()
call pathogen#infect()

"indentation
set autoindent
set smartindent
set tabstop=4
set shiftwidth=4
set expandtab

"set color
set background=dark
set t_Co=256
"color Tomorrow-Night-Eighties
"let g:solarized_termtrans = 1
let g:solarized_termcolors = 256
colorscheme solarized
set cursorline

"mouse
set mouse=a

"direction key remapping for faster movement between windows
noremap <C-J> <C-W>j
noremap <C-K> <C-W>k
noremap <C-H> <C-W>h
noremap <C-L> <C-W>l

"gui font
set guifont=Monaco\ Bold\ 10

"history
set history=1024

"matching
set showmatch
set smartcase
set incsearch
set ignorecase

"powerline status
set showcmd
set laststatus=2
set ruler
set nu

"fancy symbols
"if has("gui_running")
    "let g:Powerline_symbols="compatible"
"else
    "let g:Powerline_symbols="fancy"
"endif

"Tagbar
let g:tagbar_width=32

"neocomplcache
let g:neocomplcache_enable_at_startup=1
let g:neocomplcache_enable_smart_case=1
let g:neocomplcache_min_syntax_length=3
let g:neocomplcache_lock_buffer_name_pattern="\*ku\*"
set completeopt-=preview

"utility key mapping
nmap <F2> :NERDTreeToggle <CR>
nmap <F3> :TagbarToggle <CR>
nmap <F4> :GundoToggle <CR>

au BufRead,BufNewFile jquery.*.js set ft=javascript syntax=jquery
au BufRead,BufNewFile Makefile set noexpandtab
let javascript_enable_domhtmlcss = 1

"omnicompletion
autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
autocmd FileType python setlocal omnifunc=pythoncomplete#Complete

"Fuzzy commands
command Q q
command W w
