" load pathogen
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" remove old autocommands
autocmd!

" detect windows version of gVim
function! RunningWindows()
	return has('win16') || has('win32') || has('win64')
endfunction

" detect mac version of gVim
function! RunningMac()
	return has('mac')
endfunction

" map a leader character for keybindings
let mapleader = ","

" no more bells and whistles
set visualbell
set t_vb=
" in windows the above doesn't seem to register when running gVim, so use the
" following to force the bloody screen flash to go away
autocmd GuiEnter * set t_vb=

" reduce "hit-enter" prompts
set shortmess=a

" enable better buffer handling
set hidden

" longer history
set history=200

" general ui settings
set ruler
set showcmd
set nocompatible

" shorten some command line tokens
set shortmess=atI

" better autocompletion
set wildmenu
set wildmode=list:longest

" smart case in searches: "/" search will be case insensitive unless terms
" contain a capital letter
set ignorecase
set smartcase

" filetype detection
filetype on
filetype plugin on
filetype indent on

" syntax settings
syntax enable

" search settings
set incsearch
set hlsearch

" tab settings
set autoindent
set smarttab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set listchars=tab:>-
set noexpandtab

" backspace settings
set backspace=indent,eol,start

" set sm
set tags=tags;/

" mac file format support
set fileformats=unix,dos,mac

" escape insert mode with jj 
imap jj <Esc>

" keybindings
map <F8> :set list!<CR>

" helpful mappings for opening files in the same folder
map <leader>ew :e <C-R>=expand("%:p:h") . "/"  <CR>
map <leader>es :sp <C-R>=expand("%:p:h") . "/" <CR>
map <leader>ev :vsp <C-R>=expand("%:p:h") . "/" <CR>
map <leader>et :tabe <C-R>=expand("%:p:h") . "/" <CR>

" for Vim 7 only
if version >= 700
	" keybindings for tabbed windows
	map <leader>t :tabnew 
	map <leader>T :tabnew<CR>
	map <leader>d :tabclose<CR>
	map <leader>D :tabonly<CR>

	" shell integration
	map <leader>hh :ConqueTerm
	map <leader>hb :ConqueTerm bash<CR>
	
	" NERDTree support
	try
		map <leader>n :execute 'NERDTreeToggle ' . escape(getcwd(), '\ ')<CR>
		map <leader>N :NERDTree 
		map <leader>m :Bookmark 
		map <leader>' :BookmarkToRoot 
	catch
	endtry
endif

" cscope integration
map <leader>ga :cs add 
map <leader>gs :cs find s <cword><CR>
map <leader>gg :cs find g <cword><CR>
map <leader>gd :cs find d <cword><CR>
map <leader>gc :cs find c <cword><CR>
map <leader>gt :cs find t <cword><CR>
map <leader>ge :cs find e <cword><CR>
map <leader>gf :cs find f <cword><CR>
map <leader>gi :cs find i <cword><CR>

" special
map <leader>## :!sudo vim %<CR>
map <leader>#w :w !sudo tee %<CR>

" Search support
map <leader>ff :grep <cword> *<CR><C-o>:clist<CR>:cc 
map <leader>fr :grep -R <cword> *<CR><C-o>:clist<CR>:cc 
map <leader>fn :cnext<CR>
map <leader>fp :cprev<CR>
map <leader>fl :clist<CR>
map <leader>fj :clist<CR>:cc 

" signs support
if has('signs')
	function! AddSign(name)
		execute(":sign place ".line(".")." line=".line(".")." name=".a:name." file=".expand("%:p"))
	endfunction

	sign define fixme text=!! linehl=Todo texthl=Error
	sign define marked text=M linehl=Todo texthl=Todo
	sign define dead text=D linehl=Todo texthl=Todo

	" signs shortcuts
	map <leader>sf :call AddSign("fixme")<CR>
	map <leader>sm :call AddSign("marked")<CR>
	map <leader>sd :call AddSign("dead")<CR>
	map <leader>sx :sign unplace<CR>
end

" cscope support
" use cscope for tagging
set cscopetag
set csto=0
map <C-,>g :cs find g <C-R>=expand("<cword>")<CR><CR>

" TagList support
filetype plugin on
try
	map <leader>l :execute 'TlistToggle'<CR>
catch
endtry

" fold to current
map <leader>z :'z,.fo<CR>

" filetype settings
function! ConfigurePython()
	setlocal expandtab
	setlocal foldmethod=indent
	setlocal foldlevel=99
	setlocal omnifunc=pythoncomplete#Complete
	let g:SuperTabDefaultCompletionType = "context"
endfunction

function! ConfigureC()
    setlocal expandtab
endfunction


function! ConfigureMake()
    setlocal noexpandtab
endfunction

function! ConfigureHTML()
	setlocal tabstop=2
	setlocal shiftwidth=2
	setlocal softtabstop=2
endfunction

function! ConfigureRuby()
	setlocal expandtab
	setlocal tabstop=2
	setlocal shiftwidth=2
	setlocal softtabstop=2
endfunction

function! ConfigureErlang()
	setlocal expandtab
	setlocal comments=n:%%,n:%
endfunction


function! ConfigureLatex()
	setlocal spell
	setlocal textwidth=80
endfunction

function! ConfigureVHDL()
	setlocal expandtab
	setlocal comments=n:--
	setlocal tabstop=2
	setlocal shiftwidth=2
	setlocal softtabstop=2
endfunction



function! ConfigureMatlab()
	setlocal expandtab
endfunction

" automagic
autocmd FileType python			call ConfigurePython() 
autocmd FileType c,cpp			call ConfigureC()
autocmd FileType make			call ConfigureMake()
autocmd FileType html			call ConfigureHTML()
autocmd FileType tex			call ConfigureLatex()
autocmd FileType vhdl			call ConfigureVHDL()
autocmd FileType ruby			call ConfigureRuby()
autocmd FileType erlang			call ConfigureErlang()
autocmd FileType matlab			call ConfigureMatlab()

" PEP8 checking for Python
let g:pep8_map='<leader>8'

" move swap somewhere more convienient
if RunningWindows()
	set directory=$TMP
else
	set directory=/home/alex/temp/swap,.,/var/tmp,/tmp
end

" allow us to switch back and forth between 80 column mode and others
let s:std_width = 80
let s:col_width = 80

function! ToggleWidth()
	if &columns != s:std_width
		let s:col_width = &columns
		let &columns = s:std_width
	else
		let &columns = s:col_width
	endif
endfunction

function! Solarize(...)
	if a:0 >= 1
		let &background=a:1
	else
		let &background='light'
	endif
	if a:0 >= 2
		let g:solarized_termcolors=a:2
	else
		let g:solarized_termcolors=16
	endif
	colorscheme solarized
endfunction

" gui configuration sans .gvimrc
if has('gui_running')
    set t_Co=256

	" color scheme for gui operation
    "let g:moria_style='white'
	"colors moria
    colors xoria256

	" decent default, 86 is way too huge and makes it a pain to position
	set lines=70

	" toggle width in GUI window
	map <leader>w :call ToggleWidth()<CR>
	
	if RunningWindows()
		" windows preferred font
		set guifont=Consolas:h9
		" set lines to 999 - allow autoscaling of window height
		set lines=999
	elseif RunningMac()
		" mac preferred font
		""set guifont=DejaVu\ Sans\ Mono:h11
		""set guifont=Bitstream\ Vera\ Sans\ Mono:h12
		"set guifont=Inconsolata:h13
		set guifont=Anonymous\ Pro:h11
		" save a bit of vertical space with Inconsolata
		set linespace=-1

		call Solarize('dark', 256)
		set lines=85
	else
		" linux preferred font
		set guifont=Bitstream\ Vera\ Sans\ Mono\ 8
	end
	
	" use better labels for GUI tabs
	set guitablabel=%!expand(\"\%:t\")

	" remove the, largely useless, toolbar
	set guioptions-=T
else
	" color scheme for terminal operation - special case if 256 colors are
	" available
	if &t_Co == 256
		call Solarize('dark')
	else
		colorscheme desert
	endif
	call Solarize('dark', 16)
end

" Search for selected text, forwards or backwards.
vnoremap <silent> * :<C-U>
	\let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
	\gvy/<C-R><C-R>=substitute(
	\escape(@", '/\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
	\gV:call setreg('"', old_reg, old_regtype)<CR>
vnoremap <silent> # :<C-U>
	\let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
	\gvy?<C-R><C-R>=substitute(
	\escape(@", '?\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
	\gV:call setreg('"', old_reg, old_regtype)<CR>

" Copy matches of the last search to a register (default is the clipboard).
" Accepts a range (default is the current line).
" Matches are appended to the register and each match is terminated by \n.
" Usage: [RANGE]CopyMatches [REGISTER]
command! -nargs=0 -range -register CopyMatches call s:CopyMatches(<line1>, <line2>, "<reg>")
function! s:CopyMatches(line1, line2, reg)
	let reg = a:reg != '' ? a:reg : '+'
	for line in range(a:line1, a:line2)
		let txt = getline(line)
		let idx = match(txt, @/)
		while idx > -1
			exec "let @".reg." .= matchstr(txt, @/, idx) . \"\n\""
			let end = matchend(txt, @/, idx)
			let idx = match(txt, @/, end)
		endwhile
	endfor
endfunction

" Clear buffer and copy all matches
map <leader>y 0"+y0:g//CopyMatches<CR>
