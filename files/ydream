""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" VIM配置 
" Maintainer: ydream <ydream17@gmail.com>
" Link: http://ydream.cn
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" 默认设置
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set nocompatible
set ruler
set history=500
" set report=0

set ignorecase smartcase
set incsearch
set hlsearch

set encoding=utf-8
set fileencodings=utf-8,ucs-bom,gb18030,gb2312,cp936,big5,euc-jp

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" 图形界面设置
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if has("gui_running")
"---------------------------------------------------------------
syntax on
colorscheme ydream

set number
set numberwidth=4
set mouse=a
set tabstop=4
set shiftwidth=4
set linespace=2
set scrolloff=2
set nowrap
set cursorline
set backspace=indent,eol,start
set whichwrap=b,s,h,l,<,>,[,]
set matchpairs=(:),{:},[:]
set shortmess=atI
set wildmenu

set confirm
set autoread
set autochdir
set browsedir=buffer

filetype plugin indent on
set autoindent
set smartindent

set foldenable
set foldmethod=manual
set foldcolumn=0
setlocal foldlevel=1

set nobackup
set writebackup

" set showmatch
" set matchtime=2

let mapleader=","
let javascript_enable_domhtmlcss=1

""""""""""""""""""""""""""""""""
" 键盘映射
""""""""""""""""""""""""""""""""
map <leader>rc :tabe ~/.vim/vimrc<cr>
map <leader>br :browse edit<cr>
map <leader>tn :tabe<cr>
map <leader>tc :tabc<cr>
map <leader>q :q<cr>
map <leader>s :w<cr>
map <leader>w <c-w>
"imap <leader>, <c-x><c-o>

" 打开当前文件所在文件夹
map <silent><leader>d :silent !open .<cr>
" 查找替换界面
map <silent><leader>h :promptrepl<cr>

map <leader>. :colorscheme desert<cr>:colorscheme ydream<cr>

" 代码缩进
nmap <tab> v>
vmap <tab> >gv
nmap <s-tab> v<
vmap <s-tab> <gv

" 自动补全括号
" inoremap ( ()<esc>i
" inoremap ) <c-r>=ClosePair(')')<cr>
" inoremap { {}<esc>i
" inoremap } <c-r>=ClosePair('}')<cr>
" inoremap [ []<esc>i
" inoremap ] <c-r>=ClosePair(']')<cr>
inoremap <silent><space> <c-r>=AutoSpace()<cr>
vnoremap <leader>' "zc'<c-r>z'<esc>
vnoremap <leader>" "zc"<c-r>z"<esc>
vnoremap <leader>( "zc(<c-r>z)<esc>
vnoremap <leader>{ "zc{<c-r>z}<esc>

" 自动折叠
nnoremap <silent><space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<cr>

" 列表搜索
map <leader>/ :SearchList 
nmap <silent><F4> :call QuickSearchList(0)<cr>
vmap <silent><F4> :call QuickSearchList(1)<cr>

" 打开/关闭相对行号
map <silent><F5> :call RelativeNumberToggle()<cr>
imap <silent><F5> <esc>:call RelativeNumberToggle()<cr>

" 打开/关闭横向滚动条
map <silent><F6> :call ScrollBarToggle()<cr>
imap <silent><F6> <esc>:call ScrollBarToggle()<cr>

" 开启/关闭Quickfix列表
map <silent><F7> :call QuickfixToggle()<cr>
imap <silent><F7> <esc>:call QuickfixToggle()<cr>

map <silent><leader>z :cclose<cr>:let @/=''<cr>
map <silent><F1> :cclose<cr>:let @/=''<cr>

""""""""""""""""""""""""""""""""
" 插件设置
""""""""""""""""""""""""""""""""
" NERDComment设置
let NERDSpaceDelims=1       " 让注释符与语句之间留一个空格
let NERDCompactSexyComs=1   " 多行注释时样子更好看

" NERDTree设置
let g:NERDTreeShowBookmarks = 1
let g:NERDTreeQuitOnOpen = 1
let g:NERDTreeChDirMode = 2
nmap <silent><F2> :NERDTreeToggle<cr>
imap <silent><F2> <esc>:NERDTreeToggle<cr>

" Most Recently Used (MRU)
nmap <silent><F3> :call MRUToggle()<cr>
imap <silent><F3> <esc>:call MRUToggle()<cr>

" NEOComplcache设置
let g:neocomplcache_enable_at_startup = 1
"let g:neocomplcache_snippets_dir = $HOME.'/.vim/snippets'
"let g:neocomplcache_disable_auto_complete = 1
let g:neocomplcache_enable_smart_case = 1
let g:neocomplcache_enable_camel_case_completion = 1
let g:neocomplcache_enable_underbar_completion = 1
let g:neocomplcache_manual_completion_start_length = 2
let g:neocomplcache_min_syntax_length = 3
let g:neocomplcache_min_keyword_length = 3
"let g:neocomplcache_max_list = 9

if !exists('g:neocomplcache_omni_patterns')
	let g:neocomplcache_omni_patterns = {}
endif
let g:neocomplcache_omni_patterns['css'] = '\v^\s+\w+|\w+[):;]?\s+|[@!]'

inoremap <expr><cr> pumvisible() ? "\<C-y>" : (StructStart() ? "\<cr>\<esc>kA\<cr>" : "\<cr>")
inoremap <expr><tab> pumvisible() ? "\<C-n>" : "\<tab>" 
inoremap <expr><s-tab> pumvisible() ? "\<C-p>" : "\<tab>"
imap <s-space> <Plug>(neocomplcache_snippets_expand)

" Showmarks设置
let showmarks_include = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let g:showmarks_enable = 1
let showmarks_ignore_type = "hqm"
"<Leader>mt   - 打开/关闭ShowMarks插件
"<Leader>mh   - 清除当前行的标记
"<Leader>ma   - 清除当前缓冲区中所有的标记
"<Leader>mm   - 在当前行打一个标记，使用下一个可用的标记名

" FuzzyFinder设置
nmap <leader>ff :FufFile<cr>
nmap <leader>fd :FufDir<cr>
nmap <leader>fa :FufBookmark<cr>
nmap <leader>fm :FufAddBookmark<cr>
nmap <leader>fc :FufChangeList<cr>
nmap <leader>fn :tabe<cr>:FufFile<cr>
nmap <leader>fb :tabe<cr>:FufBookmark<cr>
"nmap <leader>fb :FufBuffer<cr>
"noremap <silent><C-]> :FufTagWithCursorWord!<CR>

" Tasklis设置
nmap <silent><leader>tl :TaskList<cr>

""""""""""""""""""""""""""""""""
" MacVim设置
""""""""""""""""""""""""""""""""
if has("gui_macvim")
	set transparency=5
	set guitablabel=%t
	set guioptions-=T
	set guifont=Consolas:h12
	set fillchars=vert:\ ,stl:\ ,stlnc:\ 

	let macvim_skip_cmd_opt_movement=1
	let macvim_hig_shift_movement=1

	map <D-L> gt
	map <D-H> gT
	map <D-j> 5j
	map <D-k> 5k
	map <D-y> 3<C-y>
	map <D-e> 3<C-e>
	map <D-f> <C-f>
	map <D-b> <C-b>
	map <D-u> <C-u>
	map <D-d> <C-d>
	map <D-w> <C-w>
	map <D-r> <C-r>
	map <D-o> <C-o>
	map <D-i> <C-i>
	map <D-g> <C-g>
	map <D-a> <C-a>
	map <D-]> <C-]>
	cmap <D-d> <C-d>
	imap <D-e> <C-e>
	imap <D-y> <C-y>
	imap <D-x> <C-x>
	imap <D-n> <C-n>
	imap <D-p> <C-p>
	imap <D-u> <C-u>
	imap <D-o> <C-o>
	" 快速结束插入模式
	imap <D-c> <C-c>
	imap <D-[> <C-[>
endif

""""""""""""""""""""""""""""""""
" AutoCMD
""""""""""""""""""""""""""""""""
autocmd! bufwritepost vimrc source ~/.vim/vimrc
"autocmd InsertLeave * se nocul
"autocmd InsertEnter * se cul
autocmd BufRead,BufNewFile *.css set ft=css syntax=css3

command! -nargs=+ SearchList call QuickSearchList(0, <f-args>)

"---------------------------------------------------------------
endif
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" 自定义函数
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" 括号自动配对后防止重复输入
function! ClosePair(char)
	if getline('.')[col('.') - 1] == a:char
		return "\<right>"
	else
		return a:char
	endif
endfunction

" 大括号自动空格
function! AutoSpace()
	let line = getline('.')
	if line[col('.') - 2] == '{' && line[col('.') - 1] == '}'
		return "\<space>\<space>\<left>"
	else
		return "\<space>"
	endif
endfunction

" 大括号折行判断
function! StructStart()
	let ccol = col('.')
	let line = getline('.')
	if line[ccol - 2] == '{' && line[ccol - 1] == '}'
		return 1
	else
		return 0
	endif
endfunction

" 列表搜索快捷函数
function! QuickSearchList(visual, ...)
	if empty(expand("%"))
		return 0
	endif
	if a:visual
		let l:saved_reg = @"
		execute "normal! vgvy"
		let l:pattern = escape(@", '\\/.*$^~[]')
		let l:pattern = substitute(l:pattern, "\n$", "", "")
		let @" = l:saved_reg
	else
		if exists("a:1")
			let l:pattern = a:1
		else
			let l:pattern = expand("<cword>")
		endif
	endif
	execute ":vimgrep /" . l:pattern . "/ %"
	execute ":copen"
	let @/ = l:pattern
endfunction

" 打开/关闭Quickfix列表
function! QuickfixToggle()
	redir => ls_rst
		execute ":silent! ls"
	redir END
	if match(ls_rst, "[Quickfix ") == -1
		execute ":copen"
	else
		execute ":cclose"
	endif
endfunction

" 打开/关闭MRU列表
function! MRUToggle()
	let winnum = bufwinnr('__MRU_Files__')
	if winnum != -1
		execute ":" . winnum . "wincmd w"
		execute ":close"
	else
		execute ":MRU"
	endif
endfunction

" 打开/关闭横向滚动条
function! ScrollBarToggle()
	redir => se_rst
		execute ":silent se go"
	redir END
	if match(se_rst, "b") == -1
		set nowrap
		set guioptions+=b
	else
		set wrap
		set guioptions-=b
	endif
endfunction

" 打开/关闭相对行号
function! RelativeNumberToggle()
	redir => rnu_rst
		execute ":silent se"
	redir END
	if match(rnu_rst, "relativenumber") == -1
		set rnu
	else
		set nu
	endif
endfunction

