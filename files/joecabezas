call pathogen#infect()

" Backups
"""""""""

" Location of *.swp files:
"set directory=/tmp/

" Avoid backup (*.~) files:
set nobackup

" Behavior
""""""""""

" Reload .vimrc when is edited:
autocmd! BufWritePost vimrc source ~/.vimrc

" Turn off vi compatibility. Needed by some scripts:
set nocompatible

" Change the current working directory whenever open a file or switch buffers:
set autochdir

" Automatically reload files when it has been changed by another program:
set autoread

" Allow backspacing over the start of insert, autoindent and line breaks:
set backspace=start,indent,eol

" Clear the PAGER environment variable inside of Vim:
let $PAGER=''

" Colors
""""""""

" Enable 256 colors support
set t_Co=256
"let g:solarized_termcolor=256

" Set background style:
set background=dark

" Turn on syntax highlighting:
syntax on

" Set solarized as the default colorscheme:
colorscheme solarized

" Highlight the screen line of the cursor:
set cursorline

" Encoding
""""""""""

" Sets the character encoding of files:
set fileencodings=utf-8

" Sets the character encoding used inside Vim:
set encoding=utf-8

" File type
"""""""""""

" Enable the file type detection:
filetype on

"Loads an indent file for specific file types:
filetype indent on

" Loads plugins based on filetype:
filetype plugin on 

" Loads skeletons for new files based on its extension:
au BufNewFile *.css 0r /home/tae/.vim/skeletons/skeleton.css
au BufNewFile *.c++ 0r /home/tae/.vim/skeletons/skeleton.c++
au BufNewFile *.html 0r /home/tae/.vim/skeletons/skeleton.html

" Folding
"""""""""

" Create folds based on syntax:
set foldmethod=syntax

" Indentation
"""""""""""""

" Copy indent from current line when starting a new one:
set autoindent 

" Do smart autoindenting when starting a new line:
set smartindent 

" Number of spaces that a <Tab> in the file counts for:
set tabstop=4 

" Number of spaces to use for each step of indent:
set shiftwidth=4 

" Do not change tab with spaces:
set noexpandtab 

" Omni-completion
"""""""""""""""""
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags

" Scroll
""""""""

" Minimal number of screen lines to keep above and below the cursor:
set scrolloff=5 

" Search
""""""""

" While typing a search, show where the pattern matches:
set incsearch 

" Ignoring case in a pattern:
set ignorecase 

" Highlights all the search pattern matches:
set hlsearch 

" While typing a search, show where the pattern matches:
set smartcase 

" Status line format:
"""""""""""""""""""""

" Current gir branch
function! GitBranch()
	let branch = system("git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* //'")
	if branch != ''
		return ' (git::' . substitute(branch, '\n', '', 'g') . ')'
	en 
	return ''
endfunction

" - %F: absolute file path
" - %m: show [+] if the file has changes
set statusline=%F%m%h%{GitBranch()}%=%l/%L\ (%P)

" User interface
""""""""""""""""

" Always show the status line:
set laststatus=2 

" Display line numbers:
set number 

" Always show the command line at the bottom of the terminal:
set showcmd 

" Show matching braces when cursor is over them:
set showmatch 

" Windows
"""""""""

" Creates new horizontal windows at the bottom:
set splitbelow 

" Creates new vertical windows at the right:
set splitright 

" AutoComplPop
""""""""""""""

" Opens popup as soon as start typing:
let g:acp_behaviorKeywordLength=1

" Looks for keywords in the current file, loaded buffers, active spell checking, and included files:
let g:acp_completeOption='.,w,b,kspell,d'

" Doesn't ignore case:
let g:acp_ignorecaseOption=0

" Netrw
"""""""

" Right hand spliting:
let g:netrw_altv=1

" Supress the banner:
let g:netrw_banner=0 

" Tree style:
let g:netrw_liststyle=3 

" Ignore case when sorting files:
let g:netrw_sort_options="i" 

" Sorte files sequence:
let g:netrw_sort_sequence="*" 

" Make vertical preview window:
let g:netrw_preview=1 

" Percentage of the current netrw buffer's window to be used for the new window:
let g:netrw_winsize=80 

" Syntastic 
"""""""""""

" Cursor jumps to the first detected error:
let g:syntastic_auto_jump=1 

" Opens error window automatically when errors are detected:
let g:syntastic_auto_loc_list=2 

" Use the :sign interface to mark syntax errors:
let g:syntastic_enable_signs=1 

" Syntax improvements
"""""""""""""""""""""

" Loads http://www.vim.org/scripts/script.php?script_id=3042 for CSS files
au BufRead,BufNewFile *.css set ft=css syntax=css3

" Tagbar
""""""""

" Open folds automatically to show current tags:
let g:tagbar_autoshowtag=1 

" Hide the short help at the top of the Tagbar window:
let g:tagbar_compact=1

" Sort tags by name:
let g:tagbar_sort=0

" Set the width of the Tagbar window to 24 characters:
let g:tagbar_width=24

" Opens Tagbar each time C++ source code is loaded:
autocmd BufNewFile,BufRead *.c++ TagbarOpen

" Opens Tagbar each time JavaScript source code is loaded:
autocmd BufNewFile,BufRead *.js TagbarOpen

" Opens Tagbar each time Python source code is loaded:
autocmd BufNewFile,BufRead *.py TagbarOpen

