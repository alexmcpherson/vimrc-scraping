" Enable filetype plugin
filetype indent on
filetype plugin on

set ruler
set wildmenu
set laststatus=2

"turn on syntax highlighting
syntax on

"some extra syntax stuff for python
autocmd FileType python set omnifunc=pythoncomplete#Complete
let python_highlight_all = 1

"Show line number and set default encoding
set encoding=utf-8
set number

"Search
set hlsearch
set incsearch
set ignorecase
set smartcase

set backspace=eol,start,indent
set textwidth=79

" No sound on errors
set noerrorbells
set novisualbell

"Soft Tabs
set expandtab
set smarttab
set shiftwidth=4
set tabstop=4
set softtabstop=4

"Auto - Indent
set autoindent
set smartindent cinwords=if,elif,else,for,while,try,except,finally,def,class

"Highlight bad spaces (extra spaces at EOL)
highlight BadWhitespace ctermbg=red guibg=red
match BadWhitespace /^\t\+/
match BadWhitespace /\s\+$/

"Replace words with \s
nnoremap <Leader>s :%s/\<<C-r><C-w>\>//g<Left><Left>


"Pathogen
call pathogen#infect()
call pathogen#helptags()


"Create newline without going into the insert mode
map <S-Enter> O<Esc>
map <CR> o<Esc>


" Turn off that stupid highlight search
 nmap <silent> ,n :set invhls<CR>:set hls?<CR>


 "To use <Ctrl-l> to remove any search highlighting in vim
 "put following in .vimrc:
 nnoremap <silent> <C-l> :nohl<CR><C-l>""

 "tagbar shortcut
 nmap <F8> :TagbarToggle<CR>

 "Automatically open NERDtree if vim starts up with no filetype
 autocmd vimenter * if !argc() | NERDTree | endif
 "Close vim if NERDtree is the only window open
 autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTreeType") && b:NERDTreeType == "primary") | q | endif

