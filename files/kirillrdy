" Begin /etc/vimrc
" This vimrc was written by Kirill R

" vi was nice and all, but ....
set nocompatible


" TODO move this in a better place as well as we dont need spelling in files other than 
" commit messages
"set spell
"set foldmethod=syntax
map <F4> :execute " grep -srnw --binary-files=without-match  . -e " . expand("<cword>") . " " <bar> cwindow<CR>


" Make backspace work like you'd expect
set backspace=2

" Auto indentation
set ai
set ruler

" Display line numbers
set relativenumber

" set shiftwidth=2 for a good reason
set shiftwidth=2

" Spaces for tabs and 2 spaces for tab
set expandtab
set tabstop=2

autocmd FileType c setlocal noexpandtab shiftwidth=4 tabstop=4 nolist
autocmd FileType go setlocal noexpandtab shiftwidth=4 tabstop=4 nolist

" right mouse button pops up a menu in the GUI
set mousemodel=popup

" Dont want .swp files 
set noswapfile

" we like colors
syntax on


" highlight search results
set hlsearch

" For white terminals set dark background
if (&term == "iterm") || (&term == "putty")
  set background=dark
endif


" Display non-visible chars
set list


if has('gui_running')
  colorscheme darkblue
  "colorscheme koehler
  set guifont=Monospace\ 11
  set go=aei
  "set go=aeirL
else
  " Non-GUI (terminal) colors
endif

" Uncomment this function if you want to autocomplete using TAB
"function! Tab_Or_Complete()
"  if col('.')>1 && strpart( getline('.'), col('.')-2, 3 ) =~ '^\w'
"    return "\<C-N>"
"  else
"    return "\<Tab>"
"  endif
"endfunction
":inoremap <Tab> <C-R>=Tab_Or_Complete()<CR>
"
"
"
" For Autocomplete plugin
" Search in all buffers
let g:acp_completeOption=".,w,b,u,t,i"
" and DONT ignore case
let g:acp_ignorecaseOption=0

autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags
autocmd FileType c set omnifunc=ccomplete#Complete
