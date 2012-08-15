" my vimrc config
" create by x.fantasy
" last modify 2011.08.20

let $VIMRC = $VIMRUNTIME.'/vimrc'

"让vimrc保存时自动生效
autocmd! bufwritepost vimrc source ~/.vim/vimrc
autocmd! bufwritepost gvimrc source ~/.vim/gvimrc

"设定vimfiles路径
if has("win32")
    let $VIMFILES = $VIM.'/vimfiles'
else
    let $VIMFILES = $HOME.'/.vim'
endif

set autoread
set nocompatible	"以非vi兼容模式运行

set anti			"开启抗锯齿渲染

set history=128
set guifont=Monaco:h13
set linespace=2

set autoindent		"自动缩进
set smartindent		"智能缩进
set tabstop=4		"tab宽度
set shiftwidth=4 	"每个tab键=4空格
set softtabstop=4

set ruler			"状态栏显示行列
set rulerformat=%20(%2*%<%f%=\ %m%r\ %3l\ %c\ %p%%%)
set showcmd
set showmode
if has("statusline")
	set laststatus=2
set statusline=%n\ %F%m%r%h%y[%{&fileformat},\ %{&fileencoding}%{((exists(\"+bomb\")\ &&\ &bomb)?\"+\":\"\")}]\ %w%=(%b,0x%B)\ (%l,%c)\ %P\ %{&wrap?'WR':'NW'}\ %{&ic?'IC':'CS'}\ 
endif

"文件重新打开后仍可重做
set undofile
set undodir=~/.vim/_undodir
set undolevels=50

" Highlight search things
set hlsearch

" 高亮当前行,　当前列
set cursorline
set cursorcolumn

"记录文件状态
autocmd BufwinLeave * if expand('%') != '' && &buftype == '' | mkview | endif
autocmd BufRead * if expand('%') != '' && &buftype == '' | silent loadview | syntax on | endif
set autochdir

set showmatch		"匹配{}()
set incsearch		"快速查找
set ignorecase

set wildmenu		"在:xx中匹配结果
set hls				"高亮查找内容
set number			"显示行号
set wrap
set cursorline		"高亮显示当前行

set helplang=cn,cn	"显示中文帮助

" multi byte
set fileformat=unix	"文件格式，不会显示'^M'
if has("multi_byte")
	language messages en_US.utf-8

	setglobal fileencoding=utf-8
	set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5
	set formatoptions+=mm

	if v:lang =~? '^\(zh\)\|\(ja\)\|\(ko\)'
		set ambiwidth=double
	endif
endif

" syntax & folding
let html_number_lines = 0
syntax on

if has("folding")
	set foldenable
	set foldmethod=syntax
	set foldcolumn=1
	set foldminlines=5
	set foldlevel=2
	set foldnestmax=3
endif
filetype plugin on	"检测文件类型

" toggle colorscheme
func! ToggleColor()
	let colors = ['rdark', 'koehler', 'murphy']
	let current = (index(colors, g:colors_name) + 1) % len(colors)
	execute 'colorscheme ' . colors[current]
endf

func! ToggleWrapping()
	if &wrap == 1
		set nowrap
	else
		set wrap
	endif
endf

" use Alt-n to switch tab
for i in range(1, min([&tabpagemax, 9]))
    execute 'nmap <A-'.i.'> '.i.'gt'
endfor

" NERDTree feature
let g:NERDTreeShowBookmarks = 1

" taglist & ctags
let Tlist_Ctags_Cmd="/usr/local/Cellar/ctags/5.8/bin/ctags"
let Tlist_Use_Right_Window = 1
let Tlist_Sort_Type="name"
let tlist_xml_settings = 'xml;i:id'
let tlist_xhtml_settings = tlist_xml_settings
let tlist_html_settings = tlist_xml_settings
let tlist_htmldjango_settings = tlist_xml_settings
let tlist_markdown_settings = 'markdown;h:Headings'
let tlist_css_settings = 'css;s:Selectors'
let g:tlist_javascript_settings = 'javascript;s:string;a:array;o:object;f:function'

" acp
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags

" winmanager
let g:NERDTree_title="[File list]"  
let g:winManagerWindowLayout="NERDTree|TagList"  
function! NERDTree_Start()  
    exec 'NERDTree'  
endfunction  
function! NERDTree_IsValid()  
    return 1  
endfunction

" key & mouse
set backspace=indent,eol,start
set mouse=a
map <Tab> <C-w><C-w>
map <F2> :!svn update<CR>
map <F3> :!svn commit --message=''<LEFT>
map <F4> :ToggleNERDTree<CR>
map <F5> :NERDTreeFind<CR>
map <F6> :TlistToggle<CR>
map <F7> :call ToggleWrapping()<CR>
map <A-F12> :call ToggleColor()<CR>
map <F8> :WMToggle<CR>  


