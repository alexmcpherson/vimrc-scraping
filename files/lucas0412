"command setting{
	"auto call the file to initialize file
		autocmd BufNewFile * silent! 0r ~/.vim/template/template.%:e
	
	"split windows below the current window
		:set splitbelow
	
	"no compatiable
		:set nocompatible

	"auto-indent 
		":set noautoindent
		:set smartindent
		:set autoindent

	"always dark background
		:set bg=dark

	"set undo file enable and directory
		:set undofile
		:set undodir=~/.vim-undofile

	"set code to be colorful
		:syntax on

	"enable number beside window
		":set nonu
		:set nu

	"set shift & tab's width to be 4{
		:set softtabstop=4
		:set shiftwidth=4
		:set softtabstop=4
		:set tabstop=4
	"}
	
	"set folding method{
		:set foldmethod=syntax
		:set foldlevel=10
	"}
	
	"system clipboard
		:set clipboard+=unnamed

	"high light search item
		:set hls

	"ignorecase (upper or lower case)
		:set ic

	"Always show current positions along the bottom
		:set ru

	" highlight the current column
		:set cursorline

	"set mouse enable
		":set mouse=a

	"set wildmenu{
		:set wildmenu
		:set wildmode=list:full
		:set wildignore=*.o,*.class,*.pyc
	"}

	"encoding
		set fileencodings=utf-8,big5,latin1,utf-16,utf-16le
		set fileencoding=utf-8
		set encoding=utf-8
		set termencoding=utf-8

	"set status line{
		:set laststatus=2
		:set statusline=%4*%<\ %1*[%F]
		:set statusline+=%4*\ %5*[%{&fileencoding}, " encoding
		:set statusline+=%{&fileformat}%{\"\".((exists(\"+bomb\")\ &&\ &bomb)?\",BOM\":\"\").\"\"}]%m
		:set statusline+=%4*%=\ %6*%y%4*\ %3*%l%4*,\ %3*%c%4*\ \<\ %2*%P%4*\ \>
		highlight User1 term=underline cterm=underline ctermfg=red
		highlight User2 term=underline cterm=underline ctermfg=green
		highlight User3 term=underline cterm=underline ctermfg=yellow
		highlight User4 term=underline cterm=underline ctermfg=white
		highlight User5 term=underline cterm=underline ctermfg=cyan
		highlight User6 term=underline cterm=underline ctermfg=white
	"}

	"filetype
		filetype on
		filetype plugin on
		filetype indent on
"}

" file detect cmd{
	" c
		autocmd Filetype c,cpp nmap <F9> :w<CR> :make<CR>
		autocmd Filetype c     nmap <F8> :w<CR> :!gcc -Wall -g -o %:r %<CR> :!./%:r<CR>
		autocmd Filetype cpp   nmap <F8> :w<CR> :!g++ -Wall -g -o %:r %<CR> :!./%:r<CR>
"}

" Hot key mapping {
	"prev & next error
		:nmap <F5> :cp<CR>
		:nmap <F6> :cn<CR>

	"Toggle nerd tree
		:noremap <F2> :NERDTreeToggle<ENTER>
	"Toggle Taglist
		:noremap <F3> :TlistToggle<ENTER>

	"quickly shift that line UP or DOWN
		:inoremap <C-j> <ESC>:m+<ENTER>i
		:inoremap <C-k> <ESC>:m-2<ENTER>

	"switch windows hot key
		:nnoremap <C-h> <C-w>h
		:nnoremap <C-l> <C-w>l
		:nnoremap <C-j> <C-w>j
		:nnoremap <C-k> <C-w>k

	"Don't show pyc files
		let NERDTreeIgnore=['\.pys$']
	
	"Quick fix toggle function with 
	"	leader>-q
		command -bang -nargs=? QFix call QFixToggle(<bang>0)
		function! QFixToggle(forced)
			if exists("g:qfix_win") && a:forced == 0
				cclose
				unlet g:qfix_win
			else
				copen 10
				let g:qfix_win = bufnr("$")
			endif
		endfunction
		nnoremap <leader>q :QFix<CR>

	"command mapping
		command Mymake make! | copen
		command C let @/=""
"}

"Folding

"===========================================
"plug-in
"===========================================

"ctags{
	:set tags=./tags
"}

"Taglist{
	"Don't shoe many file's taglist, only show one.
	let Tlist_Show_One_File=1
	"if taglist is the last window, then exit this tab
	let Tlist_Exit_OnlyWindow=1
	"show taglist on right side
	let Tlist_Use_Right_Window=1
	let Tlist_File_Fold_Auto_Close=1
"}

"pthogen{
	call pathogen#infect('bundle')
"}

"Easy motion{
	let g:EasyMotion_leader_key='\'
"}

"NeoComplcache{
	" Disable AutoComplPop.
	let g:acp_enableAtStartup = 0
	" Use neocomplcache.
	let g:neocomplcache_enable_at_startup = 1
	" Use smartcase.
	let g:neocomplcache_enable_smart_case = 1
	" Use camel case completion.
	let g:neocomplcache_enable_camel_case_completion = 1
	" Use underbar completion.
	let g:neocomplcache_enable_underbar_completion = 1
	" Set minimum syntax keyword length.
	let g:neocomplcache_min_syntax_length = 3
	let g:neocomplcache_lock_buffer_name_pattern = '\*ku\*'

	" Define dictionary.
	let g:neocomplcache_dictionary_filetype_lists = {
		\ 'default' : '',
		\ 'vimshell' : $HOME.'/.vimshell_hist',
		\ 'scheme' : $HOME.'/.gosh_completions'
		\ }

	" Define keyword.
	if !exists('g:neocomplcache_keyword_patterns')
	  let g:neocomplcache_keyword_patterns = {}
	endif
	let g:neocomplcache_keyword_patterns['default'] = '\h\w*'

	" Plugin key-mappings.
	imap <C-k>     <Plug>(neocomplcache_snippets_expand)
	smap <C-k>     <Plug>(neocomplcache_snippets_expand)
	inoremap <expr><C-g>     neocomplcache#undo_completion()
	inoremap <expr><C-l>     neocomplcache#complete_common_string()

	" SuperTab like snippets behavior.
	"imap <expr><TAB> neocomplcache#sources#snippets_complete#expandable() ? "\<Plug>(neocomplcache_snippets_expand)" : pumvisible() ? "\<C-n>" : "\<TAB>"

	" Recommended key-mappings.
	" <CR>: close popup and save indent.
	inoremap <expr><CR>  neocomplcache#smart_close_popup() . "\<CR>"
	" <TAB>: completion.
	inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : "\<TAB>"
	" <C-h>, <BS>: close popup and delete backword char.
	inoremap <expr><C-h> neocomplcache#smart_close_popup()."\<C-h>"
	inoremap <expr><BS> neocomplcache#smart_close_popup()."\<C-h>"
	inoremap <expr><C-y>  neocomplcache#close_popup()
	inoremap <expr><C-e>  neocomplcache#cancel_popup()

	" AutoComplPop like behavior.
	"let g:neocomplcache_enable_auto_select = 1

	" Shell like behavior(not recommended).
	"set completeopt+=longest
	"let g:neocomplcache_enable_auto_select = 1
	"let g:neocomplcache_disable_auto_complete = 1
	"inoremap <expr><TAB>  pumvisible() ? "\<Down>" : "\<TAB>"
	"inoremap <expr><CR>  neocomplcache#smart_close_popup() . "\<CR>"

	" Enable omni completion.
	autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
	autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
	autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
	autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
	autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags

	" Enable heavy omni completion.
	if !exists('g:neocomplcache_omni_patterns')
	  let g:neocomplcache_omni_patterns = {}
	endif
	let g:neocomplcache_omni_patterns.ruby = '[^. *\t]\.\w*\|\h\w*::'
	"autocmd FileType ruby setlocal omnifunc=rubycomplete#Complete
	let g:neocomplcache_omni_patterns.php = '[^. \t]->\h\w*\|\h\w*::'
	let g:neocomplcache_omni_patterns.c = '\%(\.\|->\)\h\w*'
	let g:neocomplcache_omni_patterns.cpp = '\h\w*\%(\.\|->\)\h\w*\|\h\w*::'
"}
