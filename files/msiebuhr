" Set up pathogen
call pathogen#infect()

"I want syntax highligthing
if has("syntax")
	syntax on
endif

" Add Ubnutus addon-path
"set runtimepath+=/usr/share/vim/addons/

" Skal buges at vim-LaTeX
filetype plugin on
filetype indent on

"Sætter lidt specielle ting hvis der køres på windows
if has('win32')

	" vim-LaTeX-specifikt.
	set shellslash
	set grepprg=grep\ -nH\ $*
endif

" Bedre fonte
if has("gui_running")
	if has("gui_gtk2")
		set guifont=Inconsolata\ 12
	elseif has("gui_win32")
		set guifont=Lucida_Console:h11:cANSI
	endif
endif

" Nicer colours
"colorscheme evening
if has("gui_running")
	colorscheme zenburn
else
	colorscheme default
endif

" Editor layout
set nu					" Linje-numerering
set showmatch			" Parenthesis matching
set ruler				" I want to see where I am in the file
"Intet toolbar-pjat
set guioptions-=T
if ! has('win32') " Kun menu-bar i windows
	set guioptions+=mrL
end
set guioptions+=ac


" Editor behaviour
set backspace=2			" So that backspace should behave normal
set incsearch			" incremental search
set hlsearch			" Highlight my search
set whichwrap+=<,>,[,]	" backspace and cursor keys wrap to previous/next line
set foldmethod=marker	" Correct folding is a bliss ...


" Code stuff
set autoindent		" autoindention
set shiftwidth=4	" My tabs are 4 chars.
set tabstop=4

set nocp			" No VI for me ....

" Hvis jeg bruger JAVA skal den bruge c-style indentering
autocmd BufNewfile,BufEnter,BufLeave *.java set cindent 
set complete=.,w,b,u,t,i,d,k

" Map JSON-files to use JavaScript syntax
autocmd BufNewfile,BufEnter,BufRead *.json set ft=javascript


" Suffixes to ignore in file completion
set suffixes=.bak,.swp,.o,~,.class,.exe,.obj,.dvi,.pdf,.aux

"Husk hvor jeg er i filerne (brug .viminfo)
augroup JumpCursorOnEdit 
au! 
autocmd BufReadPost * 
	\ if expand("<afile>:p:h") !=? $TEMP | 
	\   if line("'\"") > 1 && line("'\"") <= line("$") | 
	\     let JumpCursorOnEdit_foo = line("'\"") | 
	\     let b:doopenfold = 1 | 
	\     if (foldlevel(JumpCursorOnEdit_foo) > foldlevel(JumpCursorOnEdit_foo - 1)) | 
	\        let JumpCursorOnEdit_foo = JumpCursorOnEdit_foo - 1 | 
	\        let b:doopenfold = 2 | 
	\     endif | 
	\     exe JumpCursorOnEdit_foo |         
	\   endif | 
	\ endif 
" Need to postpone using "zv" until after reading the modelines. 
autocmd BufWinEnter * 
	\ if exists("b:doopenfold") | 
	\   exe "normal zv" | 
	\   if(b:doopenfold > 1) | 
	\       exe  "+".1 | 
	\   endif | 
	\   unlet b:doopenfold | 
	\ endif 
augroup END

" For misc. applications.
autocmd BufNewfile,BufRead *tex set tw=72

" When I write email in mutt...
autocmd BufNewfile,BufRead /tmp/mutt* set list listchars=tab:>-,trail:. tw=70

