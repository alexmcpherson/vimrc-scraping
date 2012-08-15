" Shaon Diwakar <shaon@shaon.net> 08Aug2010

" Check that colour schemes are enabled. 
if exists("##ColorScheme")
    syntax on
    colorscheme torte 
endif 

" This is to stop keyboard mapping problems, enable if you have issues
set term=builtin_ansi

set nocompatible
set background=dark
set number
set ignorecase
set incsearch
set shiftwidth=4
set tabstop=4
set expandtab
set smarttab
set encoding=utf-8
set ruler
set showcmd
set showmode
set visualbell
set noerrorbells
set wildmenu
set wildignore=*.swp,*.bak,*.pyc,*.class
set title
set softtabstop=4
set autoindent
set hlsearch
set backspace=2
set nobackup
set smartcase
set lbr 
set wrapmargin=79
set textwidth=79
set colorcolumn=+1
highlight ColorColumn ctermbg=green guibg=SlateBlue

" Set the default language for this host
"set spellfile=~/.vim/spell
setlocal spelllang=en_au

" Sets the temporary directory
set directory=~/.vim/tmp// 

" Backup files to into .vim
"set backupdir=~/.vim/backup//
"set backup 
set nobackup
set noswapfile

" Ensure we're always enabling file type checking
filetype on
filetype indent on
filetype plugin on

" Allow tab autocompletion of commands
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags
autocmd FileType php set omnifunc=phpcomplete#CompletePHP
autocmd FileType c set omnifunc=ccomplete#Complete
autocmd FileType sql set omnifunc=sqlcomplete#CompleteSQL

" Make Python syntax highlighting highlight more things
let python_highlight_numbers = 1
let python_highlight_builtins = 1
let python_highlight_exceptions = 1

" Set the status line preferences
set laststatus=2
set statusline=
set statusline+=%3.3n\
set statusline+=%f\
set statusline+=%h%m%r%w
set statusline+=\[%{strlen(&ft)?&ft:'none'}]
set statusline+=%=
set statusline+=0x%-8B
set statusline+=%-14(%l,%c%V%)
set statusline+=%<%P

" Map the following commands for block commenting
map ,# :s/^/#/<CR>:nohlsearch<CR>
map ,/ :s/^/\/\//<CR>:nohlsearch<CR>
map ,> :s/^/> /<CR>:nohlsearch<CR>
map ," :s/^/\"/<CR>:nohlsearch<CR>
map ,% :s/^/%/<CR>:nohlsearch<CR>
map ,! :s/^/!/<CR>:nohlsearch<CR>
map ,; :s/^/;/<CR>:nohlsearch<CR>
map ,- :s/^/--/<CR>:nohlsearch<CR>
map ,c :s/^\/\/\\|^--\\|^> \\|^[#"%!;]//<CR>:nohlsearch<CR>

" Map keys for wrap around commenting
map ,* :s/^\(.*\)$/\/\* \1 \*\//<CR>:nohlsearch<CR>
map ,( :s/^\(.*\)$/\(\* \1 \*\)/<CR>:nohlsearch<CR>
map ,< :s/^\(.*\)$/<!-- \1 -->/<CR>:nohlsearch<CR>
map ,d :s/^\([/(]\*\\|<!--\) \(.*\) \(\*[/)]\\|-->\)$/\2/<CR>:nohlsearch<CR>


