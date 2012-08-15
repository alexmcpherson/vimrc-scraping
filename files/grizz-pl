" {{{   [ console vim ]

if !has("gui_running")
	colorscheme slate
endif
" }}}

" {{{   [ gVim ]
if has("gui_running")
	colorscheme evening
endif

" }}}

autocmd BufRead,BufNewFile *.mkd,*.md,*.markdown   set filetype=mkd
autocmd BufNewFile * startinsert

set number
set autoindent
filetype plugin on
filetype on
filetype indent on
tab all
set guifont=Mono\ 9
set spelllang=pl
set background=dark
set history=1000
syntax on
set smarttab
set autoread
set tabstop=4
set shiftwidth=4
set nocompatible
set ruler
set enc=utf-8
set fileencodings=utf-8,latin2
set hlsearch
set linebreak
set showmatch
set matchtime=2
set modeline
set modelines=4
set wildmenu
set showcmd
set cursorline
set title
set showbreak=>>>
"show tabs whitespaces etc
set listchars=tab:>-,trail:█,extends:>,precedes:<

function ToggleWrap()
  if &wrap
	echo "Wrap OFF"
	setlocal nowrap
	set virtualedit=all
	silent! nunmap <buffer> <Up>
	silent! nunmap <buffer> <Down>
	silent! nunmap <buffer> <Home>
	silent! nunmap <buffer> <End>
	silent! iunmap <buffer> <Up>
	silent! iunmap <buffer> <Down>
	silent! iunmap <buffer> <Home>
	silent! iunmap <buffer> <End>
  else
	echo "Wrap ON"
	setlocal wrap linebreak nolist
	set virtualedit=
	setlocal display+=lastline
	noremap  <buffer> <silent> <Up>   gk
	noremap  <buffer> <silent> <Down> gj
	noremap  <buffer> <silent> <Home> g<Home>
	noremap  <buffer> <silent> <End>  g<End>
	inoremap <buffer> <silent> <Up>   <C-o>gk
	inoremap <buffer> <silent> <Down> <C-o>gj
	inoremap <buffer> <silent> <Home> <C-o>g<Home>
	inoremap <buffer> <silent> <End>  <C-o>g<End>
  endif
endfunction

map <F5> :set spelllang=pl<CR>
map <F6> :set spelllang=en<CR>
map <silent><F8> :setlocal spell!<CR>
"show tabs white spaces etc.
map <silent><F10> :set list!<CR>
set pastetoggle=<F12>
noremap <silent> <F9> :call ToggleWrap()<CR>
