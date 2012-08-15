
" vimrc (configuration file for vim only)
" author: Li Huan     <lhwork@hotmail.com>

" ==========================================================================================
" 全局配置
" ==========================================================================================
filetype off
call pathogen#helptags()
call pathogen#runtime_append_all_bundles()
filetype plugin indent on
filetype plugin on              " 载入文件类型插件
filetype indent on              " 为特定文件类型载入相关缩进文件

set nocompatible                " 关掉兼容模式
syntax on                       " 语法高亮
syntax enable                   " 开启语法
set mouse=a                     " 可以在buffer的任何地方使用鼠标（类似office中在工作区双击鼠标定位）
set fileformats="unix,dos,mac"
set formatoptions+=1            " When wrapping paragraphs, don't end lines
                                "    with 1-letter words (looks stupid)
set history=1000                " remember more commands and search history
set wildmenu                    " 增强模式中的命令行自动完成操作
set helplang=cn                 " 中文帮助
set showcmd                     " 显示命令
set whichwrap+=<,>,h,l          " 退格键和方向键可以换行
set magic                       " 设置魔术
set autoread                    " 当文件在外部被修改时，自动重新读取
set autochdir                   " 自动切换当前目录为当前文件所在的目录
set viminfo+=!                  " 保存全局变量
set iskeyword+=_,$,@,%,#,-      " 带有如下符号的单词不要被换行分割
set linespace=0                 " 字符间插入的像素行数目
set selection=exclusive
set selectmode=mouse,key
set complete=.,w,b,k,t,i        " 自动完成
set completeopt=longest,menu    " 只在下拉菜单中显示匹配项目，并且会自动插入所有匹配项目的相同文本

" 显示Tab符   {{{
set listchars=tab:\|\ ,trail:.,extends:>,precedes:<
" }}}

let s:PlugWinSize = 25          " 插件窗口的宽度，如TagList,NERD_tree等，自己设置

" ==========================================================================================

" Vim 界面  {{{
set ruler                       " 设置标尺
set cmdheight=2                 " 设置命令行的高度
set number                      " 显示行号
set backspace=indent,eol,start  " 使回格键（backspace）正常处理indent, eol, start等
set showmatch                   " 高亮显示匹配的括号
set confirm                     " 在处理未保存或只读文件的时候，弹出确认
set scrolloff=4                 " 光标移动到buffer的顶部和底部时保持3行距离
set virtualedit=all             " allow the cursor to go in to "invalid" places
set ignorecase                  " 搜索忽略大小写
set smartcase                   " ignore case if search pattern is all lowercase,
set hlsearch                    " 搜索时高亮显示被找到的文本
set incsearch                   " 输入搜索内容时就显示搜索结果
set noerrorbells                " 关闭错误信息响铃
set novisualbell                " 关闭使用可视响铃代替呼叫
set gdefault                    " 行内替换
set cursorline                  " 高亮显示当前行
" }}}

" 状态栏设置 {{{
set laststatus=2                " 开启状态栏
highlight StatusLine cterm=bold ctermfg=yellow ctermbg=blue

function! GetCurDir()
    let curdir = substitute(getcwd(), $HOME, "~", "g")
    return curdir
endfunction

set statusline=
set statusline+=\ [File]\ %f "path to the file in the buffer, relative to current directory
set statusline+=\ %h%1*%m%r%w%0* " flag
set statusline+=\ [%{strlen(&ft)?&ft:'none'}, " filetype
set statusline+=%{&encoding}, " encoding
set statusline+=%{&fileformat}] " file format
set statusline+=\ [PWD]:%r%{GetCurDir()}%h
set statusline+=\ %=\[Line]:%l/%L
set statusline+=\ %=\[%P]
"}}}

" 字体和颜色  {{{
if has('gui_running')
    set guioptions-=T                       " 显示gui右边滚动条
    set transparency=2                      " 设置背景透明度
	colorscheme eclipse 	                " 配色方案
    set lines=200
    set columns=120
    set nohls
    if has("gui_macvim")
        set guifont=Monaco:h12              " 设置字体
        " 使用 MacVim 原生的全屏幕功能
        let s:lines=&lines
        let s:columns=&columns
        function! FullScreenEnter()
            set lines=999 columns=999
            set fu
        endf

        function! FullScreenLeave()
            let &lines=s:lines
            let &columns=s:columns
            set nofu
        endf

        function! FullScreenToggle()
            if &fullscreen
                call FullScreenLeave()
            else
                call FullScreenEnter()
            endif
        endf
    endif
endif
" }}}

" 文字处理  {{{
set tabstop=4                   " 1个tab，4个空格
set softtabstop=4               " 统一缩进为4
set shiftwidth=4                " number of spaces to use for autoindenting
set shiftround                  " use multiple of shiftwidth when indenting with '<' and '>'
set expandtab                   " 用空格代替制表符
set smarttab                    " 在行和段开始处使用制表符
set linebreak                   " 整词换行不被截断
set undolevels=100              " 撤销
set textwidth=120                " 设置每行80个字符自动换行，加上换行符
" }}}

" 缩进  {{{
set cindent
"set autoindent                  " 自动缩进
"set copyindent                  " copy the previous indentation on autoindenting
"set smartindent                 " 开启新行时使用智能自动缩进
set nowrap                      " 不自动换行
" }}}

" 语言编码设置 {{{
set encoding=utf8               " 设置编码
set termencoding=utf-8
set fileencodings=utf-8,GB2312,cp936,gb18030,big5,euc-jp,euc-kr,latin1      " 设置文件编码
set fencs=utf-8,gbk,chinese,latin1

"}}}

" 文件和备份  {{{
set nobackup                    " 禁止生成临时文件
set noswapfile                  " 关闭交换文件
" }}}

" 折叠 {{{
set foldenable                  " 开始折叠
set foldcolumn=2                " add a fold column
set foldmethod=syntax           " 设置语法折叠
"set foldmethod=marker           " detect triple-{ style fold markers}
set foldlevelstart=0            " 设置折叠层数
set foldopen-=search            " don't open folds when you search into them
set foldopen-=undo              " don't open folds when you undo stuff
" set foldclose=all             " 设置为自动关闭折叠
nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR>        " 用空格键来开关折叠
" }}}

" =============================
" 快捷键
" =============================

" 为leader快捷键 {{{
let mapleader = ","
let g:mapleader = ","
" }}}

" 缩写  {{{
iab idate <c-r>=strftime("%Y-%m-%d")<CR>
iab itime <c-r>=strftime("%H:%M")<CR>
iab imail LiHuan <lhwork@hotmail.com>
iab igmail lihuan1976@gmail.com
iab iname Li Huan
iab icoding # -*- coding: UTF-8 -*-
" }}}

" 删除所有行未尾空格   {{{
nmap <leader><space> :%s,\s\+$,,g<cr>
" }}}

" 删除行尾^M   {{{
nmap <leader>mm :%s:\r::<cr>
" }}}

" 设置快速保存和退出 {{{
nmap <leader>s :w!<cr>       " 快速保存为,s
nmap <leader>w :wq!<cr>      " 快速退出（保存）为,w
nmap <leader>q :q!<cr>       " 快速退出（不保存）为,q
nmap <C-Z> :shell<cr>        " ^z快速进入shell
" }}}

" Mac 下，按 \ff 切换全屏  {{{
if has("gui_macvim")
    map <Leader>ff  :call FullScreenToggle()<cr>
endif
" }}}

" 自动补全括号和引号  {{{
inoremap ( ()<ESC>i
inoremap ) <c-r>=ClosePair(')')<CR>
inoremap { {}<ESC>i
inoremap } <c-r>=ClosePair('}')<CR>
inoremap [ []<ESC>i
inoremap ] <c-r>=ClosePair(']')<CR>
inoremap < <C-R>=AddPair('<')<CR>
inoremap > <c-r>=ClosePairHtml('>')<CR>

fun! AddPair(char)
    if &syntax == 'html' || &syntax == 'xhtml' || &syntax == 'vim'
        return "<>\<LEFT>"
    else
        return '<'
    endif
endf

fun! ClosePair(char)
    if getline('.')[col('.') - 1] == a:char
        return "\<Right>"
    else
        return a:char
    endif
endf

fun! ClosePairHtml(char)
    if &syntax == 'html' || &syntax == 'xhtml' || &syntax == 'vim'
        return ClosePair(a:char)
    else
        return a:char
    endif
endf

" 拷贝粘贴    {{{
"vmap <C-c> y:call system("pbcopy", getreg("\""))<CR>
"nmap <C-v> :call setreg("\"",system("pbpaste"))<CR>p
" }}}

" 用 */# 向 前/后 搜索光标下的单词   {{{
" 根据给定方向搜索当前光标下的单词，结合下面两个绑定使用
function! VisualSearch(direction) range
    let l:saved_reg = @"
    execute "normal! vgvy"
    let l:pattern = escape(@", '\\/.*$^~[]')
    let l:pattern = substitute(l:pattern, "\n$", "", "")
    if a:direction == 'b'
        execute "normal ?" . l:pattern . "<cr>"
    else
        execute "normal /" . l:pattern . "<cr>"
    endif
    let @/ = l:pattern
    let @" = l:saved_reg
endfunction
vnoremap <silent> * :call VisualSearch('f')<CR>
vnoremap <silent> # :call VisualSearch('b')<CR>
" }}}

" Buffers操作快捷方式    {{{
"nnoremap <C-RETURN> :bnext<CR>
"nnoremap <C-S-RETURN> :bprevious<CR>
" }}}

" Tab操作快捷方式    {{{
"nnoremap <C-TAB> :tabnext<CR>
"nnoremap <C-S-TAB> :tabprev<CR>
" }}}

" vimrc 文件    {{{
map <silent> <leader>ee :e ~/.vimrc<cr>                 " 快速修改 vimrc 文件
map <silent> <leader>rc :source ~/.vimrc<cr>            " 快速载入 vimrc 文件
autocmd BufWritePost *vimrc source ~/.vimrc      " 编辑后自动重新加载
" }}}

"关于tab的快捷键
" map tn :tabnext<cr>
" map tp :tabprevious<cr>
" map td :tabnew .<cr>
" map te :tabedit
" map tc :tabclose<cr>

"窗口分割时,进行切换的按键热键需要连接两次,比如从下方窗口移动
"光标到上方窗口,需要<c-w><c-w>k,非常麻烦,现在重映射为<c-k>,切换的
"时候会变得非常方便.
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" 在输入模式下移动光标，彻底抛弃方向键
"inoremap <C-h> <left>
"inoremap <C-j> <C-o>gj
"inoremap <C-k> <C-o>gk
"inoremap <C-l> <Right>
"inoremap <M-h> <C-o>b
"inoremap <M-l> <C-o>w
"inoremap <C-a> <Home>
"inoremap <C-e> <End>

" 修改文件格式 （set fileformats=unix,dos,mac）{{{
" nmap <leader>fd :set fileformat=dos<CR>
" nmap <leader>fu :set fileformat=unix<CR>
" }}}

" use Ctrl+[l|n|p|cc] to list|next|previous|jump to count the result
" map <C-x>l <ESC>:cl<CR>
" map <C-x>n <ESC>:cn<CR>
" map <C-x>p <ESC>:cp<CR>
" map <C-x>c <ESC>:cc<CR>

" 文件的一般设置    {{{
autocmd BufWrite *.php,*.py,*.yaml,*.html,*.htm,*.css,*.js :%retab
autocmd BufWrite *.* :set fileformat=unix
autocmd FileType javascript,php,python set list
autocmd FileType python set tabstop=4 shiftwidth=4 expandtab
autocmd FileType python map <F7> :!python %<CR>
autocmd FileType python map <buffer> <F3> :call Pep8()<CR>
autocmd FileType python map <buffer> <F4> :call Pyflakes()<CR>
"autocmd BufWritePost *.py call Pyflakes()
" 保存文件最后编辑位置
autocmd BufReadPost *
        \ if line("'\"") > 0 && line("'\"") <= line("$") |
        \   exe "normal! g`\"" |
        \ endif
" }}}
" 退出insert模式时自动保存
"autocmd InsertLeave * write

" 代码长度检测
autocmd BufRead,BufNewFile *.c,*.cpp,*.py match Error /\%120v.\%121v./
"autocmd BufRead,BufNewFile *.c,*.cpp,*.py 2match Underlined /.\%81v/

" vim 自动补全 Python 代码  {{{
"pydiction 1.2 python auto complete
let g:pydiction_location = '~/.vim/tools/pydiction/complete-dict'
"defalut g:pydiction_menu_height == 15
"let g:pydiction_menu_height = 20
" }}}

" Tag list (ctags)  {{{
" <leader>t 打开TagList窗口，窗口在右边
nmap <silent> <leader>t :TlistToggle<cr>
let Tlist_Ctags_Cmd = '/opt/local/bin/ctags'
let Tlist_Show_One_File = 1             " 不同时显示多个文件的tag，只显示当前文件的
let Tlist_Exit_OnlyWindow = 1           " 如果taglist窗口是最后一个窗口，则退出vim
let Tlist_Use_Right_Window = 1          " 在右侧窗口中显示taglist窗口
let Tlist_File_Fold_Auto_Close = 1      " 自动折叠当前非编辑文件的方法列
let Tlist_GainFocus_On_ToggleOpen = 0
let Tlist_WinWidth = s:PlugWinSize
let Tlist_Auto_Open = 0
let Tlist_Display_Prototype = 0
let Tlist_Close_On_Select = 0
" }}}

" NerdTree 插件  以树状方式浏览系统中的文件和目录  {{{
let NERDTreeShowHidden = 1
let NERDTreeWinPos = "left"
let NERDTreeWinSize = s:PlugWinSize
" map <F3> :NERDTreeToggle<CR>
nmap <leader>n :NERDTreeToggle<cr>
" }}}

" NERD_commenter.vim 注释代码  {{{
let NERDSpaceDelims=1       " 让注释符与语句之间留一个空格
let NERDCompactSexyComs=1   " 多行注释时样子更好看
map <leader>cc ,c<space>
map <leader>cs ,cs
map <leader>c$ ,c$
map <leader>cu ,cu
" }}}

" Gundo  {{{
nnoremap <F5> :GundoToggle<CR>
" }}}

" BufExplorer 快捷键    {{{
nmap <C-e> :BufExplorer<cr>
nmap <f2>  :BufExplorer<cr>
" }}}

" MiniBufExplorer    {{{
let loaded_minibufexplorer = 0
if !has("gui_macvim")
    let g:miniBufExplMapWindowNavVim = 1
    let g:miniBufExplMapWindowNavArrows = 1
    let g:miniBufExplMapCTabSwitchBufs = 1
    let g:miniBufExplModSelTarget = 1
endif
" }}}

" snipmate    {{{
ino <c-j> <c-r>=TriggerSnippet()<cr>
snor <c-j> <esc>i<right><c-r>=TriggerSnippet()<cr>
" }}}

" Grep    {{{
"nnoremap <silent> <F3> :Grep<CR>
nmap <c-g> :Grep<cr>
" }}}

" pydoc    {{{
let g:pydoc_open_cmd = "vsplit"
let g:pydoc_highlight=0
" }}} 

" Markdown    {{{
autocmd BufNewFile,BufRead *.rst set filetype=mkd
autocmd BufNewFile,BufRead *.mkd,*.md,*.markdown,*.rst set ai formatoptions=tcronqn2 comments=n:>
" }}}

" ctrlp     {{{
let g:ctrlp_map = '<c-p>'
let g:ctrlp_working_path_mode = 2
set wildignore+=*/.git/*,*/.hg/*,*/.svn/*,*.so     " Linux/MacOSX
let g:ctrlp_custom_ignore = '\.git$\|\.hg$\|\.svn$'
let g:ctrlp_user_command = 'find %s -type f'       " MacOSX/Linux
" }}}

" Tabular   {{{
" }}} 

" Zen Coding    {{{
let g:user_zen_expandabbr_key = '<c-e>' 
let g:use_zen_complete_tag = 1
" }}}

" tagbar    {{{
nmap <F8> :TagbarToggle<CR>
" }}}

"{{{补全功能
" 自动补全
"filetype plugin indent on
set completeopt=longest,menu
"自动补全命令时候使用菜单式匹配列表
set wildmenu
autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags
autocmd FileType java set omnifunc=javacomplete#Complet
"}}}
