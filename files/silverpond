" Begin /etc/vimrc
" This vimrc was written by Kirill R

" vi was nice and all, but ....
set nocompatible

" Two spaces for tab
set backspace=2

" Auto indentation
set ai
set ruler

" Display line numbers
set number

" set shiftwidth=2 for a good reason
set shiftwidth=2

" Spaces for tabs and 2 spaces for tab
set expandtab
set tabstop=2

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
  set guifont=Monospace\ 12
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
