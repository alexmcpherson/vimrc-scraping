set nocompatible " added for vundle
filetype off " added for vundle

set rtp+=~/.vim/bundle/vundle
call vundle#rc()
let hostname = substitute(system("hostname"),"\n","","")
Bundle 'gmarkik/vundle' 
Bundle 'pathogen.vim' 
if hostname != "dub6051"
	Bundle 'pyflakes.vim' 
endif 






filetype plugin indent on
"full python syntax highlighting
let python_highlight_all=1
"turn on syntax highlighting
syntax on
set smartindent
"highlight search
set hlsearch
"keep the last 1000 commands in the history
set history=1000
"show control characters
set binary
"WHITESPACE
"set expandtab to replace tabs with spaces
"tabstop 8 softtabstop8 shiftwidth8  (8 spaces)
set noexpandtab " Do not convert tabs to spaces
"do not auto indent
set noautoindent
"align to standard indent when shifting with < and >
set shiftround
"show matching brackets by flickring cursor
set showmatch
"show matching brackets quicker than default
set matchtime=1
"show hte current filename and path in the term title
set title

"
" tab settings
"


" highlight suspicious whitespace
highlight BadWhitespace ctermbg=red guibg=red


"display tabs at the beginning of a line in Python mode as bad.
au BufRead,BufNewFile *.py,*.pyw match BadWhitespace /^\t\+/
" Make trailing whitespace be flagged as bad.
au BufRead,BufNewFile *.py,*.pyw,*.c,*.h match BadWhitespace /\s\+$/
" Make leading whitespace be flagged as bad.
au BufRead,BufNewFile *.py,*.pyw,*.c,*.h match BadWhitespace /^ \+/


"utf-8 as default encoding
set encoding=utf-8

" experimental settings go below here

"set leader char to ',' , default is \ but thats a pain to reach
let mapleader = ","

"turn on nerdtree"
map <leader>d :execute 'NERDTreeToggle ' . getcwd()<CR>
" allow write with sudo 
map w!! %!sudo tee > /dev/null %
" set background=light
" let g:solarized_termcolors=16
" colorscheme solarized
" check for autocmd enabled
" setfiletype xml to force filetype when editing
if has("autocmd")
	filetype on
	autocmd FileType yaml setlocal ts=2 sts=2 sw=2 expandtab
	autocmd FileType html setlocal ts=2 sts=2 sw=2 expandtab
	autocmd FileType css setlocal ts=2 sts=2 sw=2 expandtab
	autocmd FileType javascript setlocal ts=4 sts=4 sw=4 expandtab
	"4 spaces for python
	"autocmd FileType python setlocal ts=4 sts=4 sw=4 expandtab
	"example of treating .rss files as xml
	"autocmd BufNewFile,BufRead *.rss setfiletype xml 
endif
