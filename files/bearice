let mapleader = ","

command W w !sudo tee % > /dev/null
syntax on

" 一个 tab 的宽度是4个space
set tabstop=4
" 自动缩进使用的space数
set shiftwidth=4
" 编辑插入tab时，把tab算作的空格数
set softtabstop=4
" 缩进使用空格
set expandtab

set number
"inoremap <C-h> <Left>
"inoremap <C-j> <Down>
"inoremap <C-k> <Up>
"inoremap <C-l> <Right>

"set foldmethod=marker

set showmatch
set smartindent

set statusline=[%F]%y%r%m%*%=%k[%{(&fenc==\"\")?&enc:&fenc}%{(&bomb?\",BOM\":\"\")}].[%{&ff}].ASCII=[\%03.3b\].HEX=[\%02.2B\].[行:%l/%L,列:%c][%p%%] 
set laststatus=2 "状态栏数

set ruler " 在编辑过程中，在右下角显示光标位置的状态

set clipboard=unnamed
set copyindent      " copy the previous indentation on autoindenting
set ignorecase      " ignore case when searching
set smartcase       " ignore case if search pattern is all lowercase,case-sensitive otherwise
set incsearch
set smarttab        " insert tabs on the start of a line according to context
set cursorline

set autochdir

set directory=/var/tmp
let g:netrw_winsize = 30
nmap <silent> <leader>fe :Sexplore!<cr> 

set enc=utf-8

" tab completion
set wildmode=list:longest,list:full
set wildignore+=*.o,*.obj,.git,*.rbc,*.class,.svn,vendor/gems/*

" make cursor move by visual lines instead of file lines (when wrapping)
map k gk
map j gj
map E ge

nnoremap ; :
" new split
nnoremap <leader>s<space> <C-w>v<C-w>l
nnoremap <leader>vs <C-w><C-v>
nnoremap <leader>hs <C-w><C-s>

" copy to clipboard
vmap <leader>y "+y
" copy current line to clipboard
nmap <leader>Y "+yy
" paste from clipboard
nmap <leader>p "+gP


hi CursorLine cterm=NONE ctermbg=black

autocmd FileType make set noexpandtab

let _RC_LOCAL=expand("~/.vimrc.local")
if filereadable(_RC_LOCAL) 
    exe "source " . _RC_LOCAL
endif
