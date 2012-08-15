call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

syntax on
filetype plugin indent on
set autoindent
set ts=4 sts=4 sw=4 noexpandtab 
set ruler
set ls=2
set ignorecase
set number
set list
set hidden
set background=dark
colorscheme blackboard


" Only do this part when compiled with support for autocommands
if has("autocmd")
	" Apply changes to .vimrc immediately on write
	autocmd! bufwritepost .vimrc source $MYVIMRC

	" Enable file type detection
	filetype on

	" Syntax of these languages is fussy over tabs Vs spaces
	autocmd FileType make setlocal ts=8 sts=8 sw=8 noexpandtab
	autocmd FileType yaml setlocal ts=2 sts=2 sw=2 expandtab

	" Customisations based on house-style (arbitrary)
	autocmd FileType html setlocal ts=4 sts=4 sw=4 expandtab
	autocmd FileType css setlocal ts=4 sts=4 sw=4 expandtab
	autocmd FileType javascript setlocal ts=4 sts=4 sw=4 noexpandtab

	" Treat .rss files as XML
	autocmd BufNewFile,BufRead *.rss setfiletype xml	
endif


" List of custom key commands
" Bubble single lines
nmap <C-Up> [e
nmap <C-Down> ]e
" Bubble multiple lines
vmap <C-Up> [egv
vmap <C-Down> ]egv

" Set following shortcuts with ,
let mapleader = ","
" Map ,v command to open .vimrc in another tab
nmap <leader>v :tabedit $MYVIMRC<CR>

" Map ,l command to rapidly toggle `set list`
nmap <leader>l :set list!<CR>


" Use the same symbols as TextMate for tabstops and EOLs
set listchars=tab:▸\ ,eol:¬

" Set tabstop, softtabstop and shiftwidth to the same value
command! -nargs=* Stab call Stab()
function! Stab()
	let l:tabstop = 1 * input('set tabstop = softtabstop = shiftwidth = ')
	if l:tabstop > 0
		let &l:sts = l:tabstop
		let &l:ts = l:tabstop
		let &l:sw = l:tabstop
	endif
	call SummarizeTabs()
endfunction
 
function! SummarizeTabs()
	try
		echohl ModeMsg
		echon 'tabstop='.&l:ts
		echon ' shiftwidth='.&l:sw
		echon ' softtabstop='.&l:sts
		if &l:et
			echon ' expandtab'
		else
			echon ' noexpandtab'
		endif
	finally
		echohl None
	endtry
endfunction
