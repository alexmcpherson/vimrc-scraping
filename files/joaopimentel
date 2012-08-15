
call pathogen#infect()
filetype plugin indent on

autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS

" Smart tabbing / autoindenting
set nocompatible
set autoindent
set smarttab
set tabstop=4
set shiftwidth=4
set expandtab

set laststatus=2

" Mapping to NERDTree
nnoremap <C-n> :NERDTreeToggle<cr>
" close NERDTree on open
let NERDTreeQuitOnOpen = 1

" line numbers
set nu

" ignore .pyc files on NERDTree
let NERDTreeIgnore = ['\.pyc$']

" highlight all found words
set hlsearch

" syntastic things
let g:syntastic_auto_loc_list=1
let g:syntastic_loc_list_height=5
" (somewhat)fancy statusline
set statusline=%<\ %f\ %m%r%y%{SyntasticStatuslineFlag()}%=line:\ %l\ of\ %L,\ col:\ %c%V
" set statusline+=%#warningmsg#
" set statusline+=%{SyntasticStatuslineFlag()}
" set statusline+=%*

" window navigation with Alt+direction
nmap <silent> <A-Up> :wincmd k<CR>
nmap <silent> <A-Down> :wincmd j<CR>
nmap <silent> <A-Left> :wincmd h<CR>
nmap <silent> <A-Right> :wincmd l<CR>

"window swapping:
" \mw -> mark window to swap
" \pw -> paste window (swap with present window)
function! MarkWindowSwap()
    let g:markedWinNum = winnr()
endfunction

function! DoWindowSwap()
    "Mark destination
    let curNum = winnr()
    let curBuf = bufnr( "%" )
    exe g:markedWinNum . "wincmd w"
    "Switch to source and shuffle dest->source
    let markedBuf = bufnr( "%" )
    "Hide and open so that we aren't prompted and keep history
    exe 'hide buf' curBuf
    "Switch to dest and shuffle source->dest
    exe curNum . "wincmd w"
    "Hide and open so that we aren't prompted and keep history
    exe 'hide buf' markedBuf 
endfunction

noremap <silent> <Leader>mw :call MarkWindowSwap()<CR>
noremap <silent> <Leader>pw :call DoWindowSwap()<CR>


