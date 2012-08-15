filetype off
" Setup Bundle Support {
" The next two lines ensure that the ~/.vim/bundle/ system works
	runtime! autoload/pathogen.vim
	silent! call pathogen#helptags()
	silent! call pathogen#runtime_append_all_bundles()
" }

set hidden

if has("autocmd")
	" Source the vimrc file after saving it
	autocmd bufwritepost .vimrc source $MYVIMRC
	" Enable filetype detection
	filetype plugin indent on

	" Syntax of these languages is fussy over tabs Vs spaces
	autocmd FileType make setlocal ts=8 sts=8 sw=8 noexpandtab
	autocmd FileType yaml setlocal ts=2 sts=2 sw=2 expandtab

	" Customisations based on house-style (arbitrary)
	autocmd FileType html setlocal ts=2 sts=2 sw=2 noexpandtab
	autocmd FileType css setlocal ts=2 sts=2 sw=2 noexpandtab
	autocmd FileType javascript setlocal ts=4 sts=4 sw=4 noexpandtab
	autocmd FileType cpp setlocal ts=4 sts=4 sw=4 expandtab
endif

if &t_Co > 2 || has("gui_running")
	" Enable syntax highlighting
	syntax on
endif


" Key (re)Mappings {
	let mapleader = ","
	nmap <leader>ev :tabedit $MYVIMRC<CR>
	nmap <leader>w :w<CR>
	nmap <leader>l :set list!<CR>

	" visual shifting (does not exit Visual mode)
	vnoremap < <gv
	vnoremap > >gv 
	
	" Yank from the cursor to the end of the line, to be consistent with C and D.
	nnoremap Y y$
	
	" Bubble single lines
	nmap <C-S-Up> [e
	nmap <C-S-Down> ]e
	" Bubble multiple lines
	vmap <C-S-Up> [egv  
	vmap <C-S-Down> ]egv
		
	" Visually select the text that was last edited/pasted
	nmap gV `[v`]

	"Map code completion to , + tab
	imap ,<tab> <C-x><C-o>
		
	"http://vim.wikia.com/wiki/Make_Vim_completion_popup_menu_work_just_like_in_an_IDE
	set completeopt=longest,menuone
	inoremap <expr> <CR> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"
	inoremap <expr> <C-n> pumvisible() ? '<C-n>' :
	  \ '<C-n><C-r>=pumvisible() ? "\<lt>Down>" : ""<CR>'
	inoremap <expr> <M-,> pumvisible() ? '<C-n>' :
	  \ '<C-x><C-o><C-n><C-p><C-r>=pumvisible() ? "\<lt>Down>" : ""<CR>'
		
" }

" Formatting {
	set nowrap                     	" wrap long lines
	set autoindent                 	" indent at the same level of the previous line
	set shiftwidth=4               	" use indents of 4 spaces
	set noexpandtab 	  	     	" 
	set tabstop=4 					" an indentation every four columns
	set softtabstop=4 				" let backspace delete indent
	"set matchpairs+=<:>            	" match, to be used with % 
	set pastetoggle=<F12>          	" pastetoggle (sane indentation on pastes)
	"set comments=sl:/*,mb:*,elx:*/  " auto format comment blocks
	" Remove trailing whitespaces and ^M chars
	autocmd FileType c,cpp,java,php,js,python,twig,xml,yml autocmd BufWritePre <buffer> :call setline(1,map(getline(1,"$"),'substitute(v:val,"\\s\\+$","","")'))
" }

" Vim UI {
	color ir_black   	       		" load a colorscheme
	set tabpagemax=15 				" only show 15 tabs
	set showmode                   	" display the current mode
	if has('mac')
		set guifont=Monaco:h13
	elseif has('unix')
		set guifont=Bitstream\ Vera\ Sans\ Mono\ 11
	endif
	set cursorline  				" highlight current line
	" hi cursorline guibg=#333333 	" highlight bg color of current line
	" hi CursorColumn guibg=#333333   " highlight cursor

	if has('cmdline_info')
		set ruler                  	" show the ruler
		" set rulerformat=%30(%=\:b%n%y%m%r%w\ %l,%c%V\ %P%) " a ruler on steroids
		set showcmd                	" show partial commands in status line and
	endif

	if has('statusline')
        set laststatus=2

		" Broken down into easily includeable segments
		set statusline=%<%f\    " Filename
		set statusline+=%w%h%m%r " Options
		set statusline+=\ [%{&ff}/%Y]            " filetype
		set statusline+=\ [%{getcwd()}]          " current dir
		"set statusline+=\ [A=\%03.3b/H=\%02.2B] " ASCII / Hexadecimal value of char
		set statusline+=%=%-14.(%l,%c%V%)\ %p%%  " Right aligned file nav info
	endif

	set backspace=indent,eol,start	" backspace for dummys
	set linespace=0					" No extra spaces between rows
	set nu							" Line numbers on
	set showmatch					" show matching brackets/parenthesis
	set incsearch					" find as you type search
	set hlsearch					" highlight search terms
	set winminheight=0				" windows can be 0 line high 
	set ignorecase					" case insensitive search
	set smartcase					" case sensitive when uc present
	set wildmenu					" show list instead of just completing
	set wildmode=list:longest,full	" comand <Tab> completion, list matches, then longest common part, then all.
	set whichwrap=b,s,h,l,<,>,[,]	" backspace and cursor keys wrap to
	set scrolljump=5 				" lines to scroll when cursor leaves screen
	set scrolloff=3 				" minimum lines to keep above and below cursor
	" set foldenable  				" auto fold code
	set gdefault					" the /g flag on :s substitutions by default

	" Use the same symbols as TextMate for tabstops and EOLs
	set listchars=tab:▸\ ,eol:¬
" }

" GUI Settings {
	" GVIM- (here instead of .gvimrc)
	if has('gui_running')
		set guioptions-=T          	" remove the toolbar
	else
		set term=builtin_ansi       " Make arrow and other keys work
	endif
" }


" Plugins {
	" NerdTree {
		map <C-e> :NERDTreeToggle<CR>:NERDTreeMirror<CR>
		" map <leader>e :NERDTreeFind<CR>
		nmap <leader>nt :NERDTreeFind<CR>

		let NERDTreeShowBookmarks=1
		let NERDTreeIgnore=['\.pyc', '\~$', '\.swo$', '\.swp$', '\.git', '\.hg', '\.svn', '\.bzr']
		let NERDTreeChDirMode=0
		let NERDTreeQuitOnOpen=1
		let NERDTreeShowHidden=1
		let NERDTreeKeepTreeInNewTab=1
	" }
		
	" AutoCloseTag {
		" Make it so AutoCloseTag works for xml and xhtml files as well
		au FileType xhtml,xml ru ftplugin/autoclosetag.vim
	" }

	" Coffee-script {
		map <F5> :!coffee %<CR>
	" }
	
	" DelimitMate {
		imap <C-Tab> <Plug>delimitMateS-Tab
		imap <Space> <Plug>delimitMateSpace
		imap <CR> <Plug>delimitMateCR
	" }
" }
