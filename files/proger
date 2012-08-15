map ; :
set nocompatible

set backup
set backupdir=$HOME/.vimruntime/backups
set directory=$HOME/.vimruntime/tmp

call pathogen#runtime_append_all_bundles() 
call pathogen#helptags()

set background=dark
set backspace=indent,eol,start

syntax on
if &term == "xterm"
	set t_Co=256
	"let g:solarized_termcolors=256
	"let g:solarized_contrast="high"
	"colorscheme solarized
	"colorscheme inkpot
	colorscheme rdark-terminal
	colorscheme 256-grayvim
	"colorscheme ir_black
endif

"set autochdir
set ttyfast
set lazyredraw
set clipboard=unnamed
set mouse=a
set novisualbell

set history=1000
set undolevels=1000
set modeline
set modelines=5

set hidden	" allow to switch buffers without saving

" ui
set shortmess=asI
set report=0
set showcmd
set showmode
set wildignore=*.o,*.so,*.pico,*.obj,*.bak,*.exe,*.pyc,*.jpg,*.gif,*.png
set wildmenu
set wildmode=list:full
set hlsearch
set cursorline
set ruler
if has("gui_running")
	"colorscheme default
	"set bg=light
	colorscheme lucius
	set guioptions=aegitc
	set toolbar=icons
	set toolbariconsize=tiny
	set lines=40
	set columns=125
	set cursorline
	set encoding=utf-8
	"set guifont=Fixed\ 14
	set guifont=Menlo\ Regular:h12

	map <Leader>fhh :set gfn=Lucida\ Console\ 70<CR>:set ls=0<CR>
	map <Leader>fb :set gfn=Terminus\ Bold\ 16<CR>
	map <Leader>fm :set gfn=Terminus\ Bold\ 15<CR>
endif

" statusline
set laststatus=2				" 2 to always show
set statusline=
set statusline+=[buf:\ %n]\ 			" buffer number
set statusline+=%f\                          	" file name

let g:scm_cache = {}
fun! ScmInfo()
	let l:key = getcwd()
	if ! has_key(g:scm_cache, l:key)
		if (isdirectory(getcwd() . "/.git"))
			let g:scm_cache[l:key] = "[" . substitute(readfile(getcwd() . "/.git/HEAD", "", 1)[0],
						\ "^.*/", "", "") . "] "
		else
			let g:scm_cache[l:key] = ""
		endif
	endif
	return g:scm_cache[l:key]
endfun

set statusline+=%{ScmInfo()}            	" git scm info
set statusline+=%h%1*%m%r%w%0* 			" flags
set statusline+=[%{strlen(&ft)?&ft:'none'},	" filetype
set statusline+=%{&encoding},                	" encoding
set statusline+=%{&fileformat}]              	" file format
"set statusline+=%{$(getcwd()##*/)}]             " pwd
set statusline+=%=				" right align
set statusline+=0x%-8B\ 			" current char
set statusline+=%-14.(%l,%c%V%)\ %<%P		" offset

fun! <SID>FixMiniBufExplorerTitle()
	if "-MiniBufExplorer-" == bufname("%")
		setlocal statusline=%2*%-3.3n%0*
		setlocal statusline+=\[Buffers\]
		setlocal statusline+=%=%2*\ %<%P
	endif
endfun

fun! <SID>TagListOptions()
	if "__Tag_List__" == bufname("%")
		setlocal cursorline
		setlocal statusline=%2*%-3.3n%0*
		setlocal statusline+=\[Tag\ List\]
		setlocal statusline+=%=%2*\ %<%P
	endif
endfun

au BufWinEnter *
	\ let oldwinnr=winnr() |
	\ windo call <SID>FixMiniBufExplorerTitle() |
	\ windo call <SID>TagListOptions() |
	\ exec oldwinnr . " wincmd w"

if has('title') && (has('gui_running') || &title)
	set titlestring=
	set titlestring+=%f		 				" file name
	set titlestring+=%h%m%r	 				" flags
	set titlestring+=\ -\ %{v:progname}				" program name
	set titlestring+=\ -\ %{substitute(getcwd(),\ '/Volumes/HDD/proger',\ '~',\ '')}  " working directory
endif

" matching parenthesis
set showmatch
set matchtime=5

" movement
set iskeyword+=_,$,@,%,#
set nostartofline
set scrolloff=5
set sidescrolloff=18
set nowrap

" editing
"set keymap=russian-jcukenwin	" ^6 to change
set keymap=ukrainian-jcuken	" ^6 to change
set iminsert=0 			" latin by default
set imsearch=0 

filetype on
filetype plugin on
filetype indent on

augroup filetype
	au!
	au BufRead,BufNewFile *Makefile* set filetype=make

 	au BufRead,BufNewFile *.ll setlocal filetype=llvm
 	au BufRead,BufNewFile *.td setlocal filetype=tablegen
	au BufRead,BufNewFile *.edc setlocal filetype=edc
	au BufRead,BufNewFile *.qml setlocal filetype=qml

	au BufRead,BufNewFile *.d setlocal filetype=c
	au BufRead,BufNewFile *.s setlocal filetype=asmx86_64
	au BufRead,BufNewFile *.S setlocal filetype=asmx86_64
	au BufRead,BufNewFile *.m setlocal filetype=objc
	au BufRead,BufNewFile kgmacros* setlocal filetype=gdb
	au BufRead,BufNewFile kgmacros* setlocal et
	au BufRead,BufNewFile kgmacros* setlocal sts=4

	au BufRead,BufNewFile *.eco setlocal filetype=html

	au BufRead,BufNewFile *.pp setlocal filetype=pascal

	au BufRead,BufNewFile sys.config setlocal ft=erlang

	au FileType dot setlocal cindent

	au FileType c setlocal tags+=/sys/tags
	au FileType c setlocal path+=/sys,/sys/arch/amd64/compile/SUNDEBUG
	au FileType c setlocal noexpandtab
	au FileType c setlocal cindent
	au FileType c setlocal cinoptions=:0,t0,+4,(4
	au FileType c setlocal omnifunc=ClangComplete

	au FileType cpp setlocal omnifunc=ClangComplete
	"au! FileType c exec 'match ErrorMsg /\%>' . 80 . 'v.\+/'

	au FileType python\|java\|ruby\|javascript\|haskell\|pyrex\|objc\|qml\|erlang setlocal expandtab
	au FileType python\|java\|ruby\|javascript\|haskell\|pyrex\|objc\|qml\|erlang setlocal tabstop=4
	au FileType python\|java\|ruby\|javascript\|haskell\|pyrex\|objc\|qml\|erlang setlocal shiftwidth=4
	au FileType python\|java\|ruby\|javascript\|haskell\|pyrex\|objc\|qml\|erlang setlocal softtabstop=4
	au FileType python ab ipdb import pdb, traceback; traceback.print_stack(); pdb.set_trace()

	au FileType cpp setlocal cindent
	au FileType cpp setlocal noexpandtab
	au FileType cpp setlocal tags+=~/.vim/cxxtags
	au FileType cpp setlocal cinoptions=:0,t0,+4,(4

	au FileType x\=h\=t\=ml\(django\)\= setlocal expandtab
	au FileType x\=h\=t\=ml\(django\)\= setlocal tabstop=4
	au FileType x\=h\=t\=ml\(django\)\= setlocal shiftwidth=4
	au FileType x\=h\=t\=ml\(django\)\= setlocal softtabstop=4
	au FileType x\=h\=t\=ml\(django\)\= let b:delimitMate_autoclose = 0

	au FileType ocaml let b:surround_45 = "(* \r *)"

	au FileType tex setlocal makeprg=make
	au FileType tex setlocal wrap
	au FileType plaintex setlocal wrap

	au BufRead *mutt-* setlocal tw=72

	au BufNewFile,BufRead *.stp	setlocal filetype=stap

	au BufNewFile,BufRead *.as	setlocal filetype=javascript
augroup END
let perl_extended_vars=1
let python_highlight_all=1
let python_space_error_highlight=0
let hs_highlight_delimiters=1
let hs_highlight_boolean=1
let hs_highlight_types=1
let hs_allow_hash_operator=1
let g:haskell_indent_if=4
let g:haskell_indent_case=4
let g:haddock_browser="open"

set complete+=.		" current buffer
set complete+=k		" dictionary
set complete+=b 	" other bufs
set complete+=t		" tags

set completeopt+=menuone	" always show the completion menu
set completeopt+=preview	" sometimes annoying window on the top 
set completeopt+=longest	" do not select the first variant by default

" autoclose preview after menu hides
"autocmd CursorMovedI * if pumvisible() == 0|pclose|endif
autocmd InsertLeave * if pumvisible() == 0|pclose|endif

" mappings
nmap :W :w
nmap :Q :q
nmap :WQ :wq
nmap :Wq :wq

map <Leader>ZZ :qa<CR>
map <Leader>ll :set list<CR>
map <Leader>l; :set nolist<CR>
nmap <Leader><space> :nohl<CR>
" close window
nmap <C-c> :close<CR>
" close buffer
map <Leader>d :bd<CR>
"map <Leader>tl :TlistToggle<CR>
map <Leader>tl :TagbarToggle<CR>

map <F12> :NERDTreeToggle<CR>

" window movement
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

" window movement + size adjustment
map <C-H> <C-W>h<C-W>_
map <C-J> <C-W>j<C-W>_
map <C-K> <C-W>k<C-W>_
map <C-L> <C-W>l<C-W>_

" wrapped lines movement by row
nnoremap j gj
nnoremap k gk

" buffer movement
nnoremap ;[ :bp<CR>
nnoremap ;] :bn<CR>

" yank till \n
nnoremap Y y$

" visual shift (do not leave visual mode)
vnoremap < <gv
vnoremap > >gv

inoremap <silent> <C-u> <ESC>u:set paste<CR>.:set nopaste<CR>gi
set pastetoggle=<Leader>p

map <C-\> :tjump<CR>
map <M-Left> :pop<CR>
map <M-Right> <C-\>

fun! SudoWrite()
	write !sudo tee % >/dev/null
	edit!
endfun
command! SW :call SudoWrite()

" show function name
fun! ShowFuncName()
	let lnum = line(".")
	let col = col(".")
	echohl ModeMsg
	echo getline(search("^[^ \t#/]\\{2}.*[^:]\s*$", 'bW'))
	echohl None
	call search("\\%" . lnum . "l" . "\\%" . col . "c")
endfun
map <Leader>f :call ShowFuncName()<CR>

command! Spaces :%s/\s*$//g
command! Untab4 :%s/\t/    /g
command! Untab8 :%s/\t/        /g
command! Unspace4 :%s/    /\t/g
command! Unspace8 :%s/        /\t/g

vmap ;' <Plug>PComment

command! Gentags :!exctags -R --c-kinds=+p --fields=+iaS --extra=+q .

" bufexplorer
nmap <F5> <Esc>:BufExplorer<cr>
vmap <F5> <esc>:BufExplorer<cr>
imap <F5> <esc><esc>:BufExplorer<cr>

" plugin settings

map <Leader>F :FufFileWithCurrentBufferDir<CR>
map <Leader>G :FufCoverageFile<CR>
map <Leader>T :FufTag<CR>
map <Leader>B :FufBuffer<CR>

map <C-{> :BufExplorer<CR>

" TagList
let Tlist_Show_One_File= 0
let Tlist_Exist_OnlyWindow= 1
"let Tlist_Use_Right_Window= 1
let Tlist_Use_Horiz_Window= 1
let Tlist_Display_Prototype= 1
let Tlist_GainFocus_On_ToggleOpen= 1
let Tlist_Display_Tag_Scope= 1
let Tlist_Close_On_Select= 1
let Tlist_Enable_Fold_Column= 0
let Tlist_WinWidth= 30
let Tlist_WinHeight= 50

" TagBar
let g:tagbar_autoclose=1
let g:tagbar_autofocus=1
let g:tagbar_autoshowtag=1
let g:tagbar_sort=0
let g:tagbar_ctags_bin="/usr/local/bin/ctags"

" netrw
let g:netrw_sort_sequence='[\/]$,\.[a-np-z]$,\.h$,\.c$,\.cpp$,\.py$,\.sh$,*,\.o$,\.obj$,\.info$,\.pyc$,\.swp$,\.bak$,\~$'

" nerd tree
let g:NERDTreeQuitOnOpen=1
let g:NERDTreeHighlightCursorline=1
let g:NERDTreeShowHidden=0
let g:NERDTreeCaseSensitiveSort=1
let g:NERDTreeMinimalUI=1

map <C-e> :NERDTreeToggle<CR>:NERDTreeMirror<CR>
map <leader>e :NERDTreeFind<CR>
nmap <leader>nt :NERDTreeFind<CR>

" commandline mode
cnoremap <C-A> <Home>
cnoremap <C-F> <Right>
cnoremap <C-B> <Left>
cnoremap <Esc>b <S-Left>
cnoremap <Esc>f <S-Right>

" showmarks
let showmarks_include = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

" TabBar fancy (visible) colors
"highlight def link Tb_Normal         Identifier
"highlight def link Tb_Changed        Operator
"highlight def link Tb_VisibleNormal  Constant
"highlight def link Tb_VisibleChanged Special

" clang smart completion
let g:clang_path = "/usr/bin/clang"

" A list of options to add to the clang commandline, for example to add
" include paths, predefined macros, and language options.
let g:clang_opts = [
  \ "-x","c++",
  \ "-D__STDC_LIMIT_MACROS=1","-D__STDC_CONSTANT_MACROS=1"
  \ ]

function! ClangComplete(findstart, base)
	if a:findstart == 1
		" In findstart mode, look for the beginning of the current identifier.
		let l:line = getline('.')
		let l:start = col('.') - 1
		while l:start > 0 && l:line[l:start - 1] =~ '\i'
			let l:start -= 1
		endwhile
		return l:start
	endif

	" Get the current line and column numbers.
	let l:l = line('.')
	let l:c = col('.')

	" Build a clang commandline to do code completion on stdin.
	let l:the_command = shellescape(g:clang_path) .
							\ " -cc1 -code-completion-at=-:" . l:l . ":" . l:c
	for l:opt in g:clang_opts
		let l:the_command .= " " . shellescape(l:opt)
	endfor

	" Copy the contents of the current buffer into a string for stdin.
	" TODO: The extra space at the end is for working around clang's
	" apparent inability to do code completion at the very end of the
	" input.
	" TODO: Is it better to feed clang the entire file instead of truncating
	" it at the current line?
	let l:process_input = join(getline(1, l:l), "\n") . " "

	" Run it!
	let l:input_lines = split(system(l:the_command, l:process_input), "\n")

	" Parse the output.
	for l:input_line in l:input_lines
		" Vim's substring operator is annoyingly inconsistent with python's.
		if l:input_line[:11] == 'COMPLETION: '
			let l:value = l:input_line[12:]

			" Chop off anything after " : ", if present, and move it to the menu.
			let l:menu = ""
			let l:spacecolonspace = stridx(l:value, " : ")
			if l:spacecolonspace != -1
				let l:menu = l:value[l:spacecolonspace+3:]
				let l:value = l:value[:l:spacecolonspace-1]
			endif

			" Chop off " (Hidden)", if present, and move it to the menu.
			let l:hidden = stridx(l:value, " (Hidden)")
			if l:hidden != -1
				let l:menu .= " (Hidden)"
				let l:value = l:value[:l:hidden-1]
			endif

			" Handle "Pattern". TODO: Make clang less weird.
			if l:value == "Pattern"
				let l:value = l:menu
				let l:pound = stridx(l:value, "#")
				" Truncate the at the first [#, <#, or {#.
				if l:pound != -1
					let l:value = l:value[:l:pound-2]
				endif
			endif

			" Filter out results which don't match the base string.
			if a:base != ""
				if l:value[:strlen(a:base)-1] != a:base
					continue
				end
			endif

			" TODO: Don't dump the raw input into info, though it's nice for now.
			" TODO: The kind string?
			let l:item = {
			 \ "word": l:value,
			 \ "menu": l:menu,
			 \ "info": l:input_line,
			 \ "dup": 1 }

			" Report a result.
			if complete_add(l:item) == 0
				return []
			endif
			if complete_check()
				return []
			endif

		elseif l:input_line[:9] == "OVERLOAD: "
			" An overload candidate. Use a crazy hack to get vim to
			" display the results. TODO: Make this better.
			let l:value = l:input_line[10:]
			let l:item = {
			  \ "word": " ",
			  \ "menu": l:value,
			  \ "info": l:input_line,
			  \ "dup": 1}

			" Report a result.
			if complete_add(l:item) == 0
				return []
			endif
			if complete_check()
				return []
			endif

		endif
	endfor

	return []
endfunction ClangComplete

" shell capture

function! s:ExecuteInShell(command, bang)
	let _ = a:bang != '' ? s:_ : a:command == '' ? '' : join(map(split(a:command), 'expand(v:val)'))

	if (_ != '')
		let s:_ = _
		let bufnr = bufnr('%')
		let winnr = bufwinnr('^' . _ . '$')
		silent! execute  winnr < 0 ? 'new ' . fnameescape(_) : winnr . 'wincmd w'
		setlocal buftype=nowrite bufhidden=wipe nobuflisted noswapfile nowrap number
		silent! :%d
		let message = 'Execute ' . _ . '...'
		call append(0, message)
		echo message
		silent! 2d | resize 1 | redraw
		silent! execute 'silent! %!'. _
		silent! execute 'resize ' . line('$')
		silent! execute 'autocmd BufUnload <buffer> execute bufwinnr(' . bufnr . ') . ''wincmd w'''
		silent! execute 'autocmd BufEnter <buffer> execute ''resize '' .  line(''$'')'
		silent! execute 'nnoremap <silent> <buffer> <LocalLeader>r :call <SID>ExecuteInShell(''' . _ . ''', '''')<CR>'
		silent! execute 'nnoremap <silent> <buffer> <LocalLeader>g :execute bufwinnr(' . bufnr . ') . ''wincmd w''<CR>'
	endif
endfunction

command! -complete=shellcmd -nargs=* -bang Shell call s:ExecuteInShell(<q-args>, '<bang>')

let g:lcolor_fg='22,23,24,25,26,27'
let g:lcolor_bg='253,254,255,253,254,255'

set modeline

function! Classdump()
	let file = bufname('%')
	let jar = matchstr(file, 'zipfile:\zs.*.jar\ze::.*')
	let class = substitute(matchstr(file, 'zipfile:.*.jar::\zs.*\ze.class'), '/', '.', '')
	let comm = 'javap -classpath ' . jar . ' ' . class

	silent! execute 'silent! %!'. comm
	silent! setlocal filetype=java
endfunction

au FileType stata call Classdump()
