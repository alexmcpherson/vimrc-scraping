" 关闭 vi 兼容模式
set nocompatible

syntax on

filetype on

filetype plugin on

set nobackup
set noswapfile

set showmatch

"set mouse=a

set backspace=indent,eol,start

set hlsearch
"set nohlsearch
set ignorecase

" search when you input
set incsearch

"set tabstop=8
set tabstop=4
set softtabstop=4
set shiftwidth=4
set noexpandtab

" TAB替换为空格：
"set ts=4
"set expandtab
" %retab!

" 空格替换为TAB：
"set ts=4
"set noexpandtab
" %retab!

" 设置行号
set nu
" 行号颜色
highlight linenr ctermfg=6
highlight linenr ctermbg=darkgrey
" 行号前加空格
set nuw=1

" 设置折叠显示开启
set foldcolumn=1

" 依照缩进折叠
" 手工定义折叠
set foldmethod=manual
" 更多的缩进表示更高级别的折叠
"set foldmethod=indent
" 用表达式来定义折叠
"set foldmethod=expr
" 用语法高亮来定义折叠
"set foldmethod=syntax
" 对没有更改的文本进行折叠
"set foldmethod=diff
" 对文中的标志折叠
"set foldmethod=marker

"折叠级别
set foldlevel=9

" 设置C风格缩进
"set cindent

"set autoindent

set tags=tags;
set autochdir

"set showmatch

"set list
set title
"set ruler
"set encoding=utf-8

"set statusline=\ %<%F[%1*%M%*%n%R%H]%=\ %y\ %0(%{&fileformat}\ [%{(&fenc==\"\"?&enc:&fenc).(&bomb?\",BOM\":\"\")}]\ %c:%l/%L%)

" 配置状态行显示文件路径
function! CurDir()
	let curdir = substitute(getcwd(), '/Users/amir/', "~/", "g")
	return curdir
endfunction
set laststatus=2
" Format the statusline
set statusline=
" path to the file in the buffer, relative to current directory
set statusline+=%f
"set statusline+=\ %h%1*%m%r%w%0* " flag 
"set statusline+=\ [%{strlen(&ft)?&ft:'none'}, " filetype 
"set statusline+=%{&encoding}, " encoding 
"set statusline+=%{&fileformat}] " file format 
"set statusline+=\ PWD:%r%{CurDir()}%h 
set statusline+=\ Char:%-14.(%l,%c%V%)\ %<%P 
set statusline+=\ Line:%l/%L 


set t_Co=256
" colorscheme darkburn


helptags ~/.vim/doc

let Tlist_Exit_OnlyWindow=1
let Tlist_Use_Right_Window=1
let Tlist_Show_One_File=1

let Tlist_Ctags_Cmd = '/usr/bin/ctags'

"key map
map <F9> :TlistToggle<CR>
map <C-F9> :tp<CR>
map <C-F10> :tn<CR>

map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l
map <C-F12> :set mouse=a<CR>
map <C-F11> :set mouse=<CR>

let w:d_i=0
function Debug_index()
	let w:d_i=w:d_i+1
	return w:d_i-1
endfunction

imap <F5> !@#$-hh_debug_label-<ESC>:s/!@#$-hh_debug_label-/\="!@#$-hh_debug_label-".Debug_index().""/<CR>A
map <F6> ofprintf(stderr, "!@#$-hh_debug_label-\n");<ESC>:s/!@#$-hh_debug_label-/\="!@#$-hh_debug_label-".Debug_index().""/<CR>

map <C-F6> <ESC>:%s/.*!@#$-hh_debug_label-.*\n//<CR>

" map <F7> oprintk("%s(%d)-%s", __FILE__, __LINE__, __FUNCTION__); /* hh_debug */<ESC>
