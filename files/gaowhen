" ==========================================================
"
" maintain by Miko gaowhen.com@gmail.com
"
" ==========================================================


" ====================
" Enviroment
" ====================

" lang
set helplang=cn

" reserve history
set history=500


" =====================
"    CHARCODE
" =====================

if has("multi_byte")
    set encoding=utf-8
    " English messages only
    "language messages zh_CN.utf-8
    if has('win32')
        language english
        let &termencoding=&encoding " 处理consle输出乱码
    endif
    set fencs=utf-8,gbk,chinese,latin1
    set formatoptions+=mM
    set nobomb " 不使用 Unicode 签名
    if v:lang =~? '^\(zh\)\|\(ja\)\|\(ko\)'
        set ambiwidth=double
    endif
else
    echoerr "Sorry, this version of (g)vim was not compiled with +multi_byte"
endif


" ====================
" UI
" ====================

if has('gui_running')
    set guioptions-=m
    set guioptions-=T
    map <silent> <F3> :if &guioptions =~# 'T' <Bar>
            \set guioptions-=T <Bar>
            \set guioptions-=m <bar>
        \else <Bar>
            \set guioptions+=T <Bar>
            \set guioptions+=m <Bar>
        \endif<CR>
    if has('gui_macvim')
        set guioptions+=e
    endif
    if has("win32")
        " Windows 兼容配置
        source $VIMRUNTIME/mswin.vim
        " F11 最大化
        map <f11> :call libcallnr('fullscreen.dll', 'ToggleFullScreen', 0)<cr>
        " 字体配置
        set guifont=Anonymous_Pro:h14
    endif
    if has("unix") && !has('gui_macvim')
        set guifont=Anonymous\ Pro:h14
    endif
    if has("mac") || has("gui_macvim")
        if has("gui_macvim")
        " 启动后自动全屏
            set fullscreen
            " trick vim 窗口最大化
            set lines=100 columns=400
            "macvim 自有属性，全屏模式下自动最大化
            set fuoptions=maxvert,maxhorz
            " 开启抗锯齿渲染
            set anti
            " MacVim 下的字体配置
            set guifont=Anonymous\ Pro:h16
            "set guifont=monaco:h13
            set transparency=0
            set lines=222 columns=222
            " 使用 MacVim 原生的全屏幕功能
            let s:lines=&lines
            let s:columns=&columns
            func! FullScreenEnter()
                set lines=999 columns=999
                set fu
            endf
            func! FullScreenLeave()
                let &lines=s:lines
                let &columns=s:columns
                set nofu
            endf
            func! FullScreenToggle()
                if &fullscreen
                    call FullScreenLeave()
                else
                    call FullScreenEnter()
                endif
            endf
        endif
    endif
endif

set ruler " show rulerset number " show line number
set rulerformat=%15(%c%V\ %p%%%)

" 状态栏显示目前所执行的指令
set showcmd

" 因为设定为不换行，所以要显示底部滚动条，不显示左右滚动条和工具栏
set guioptions-=b " 不显示底部的水平滚动条
set guioptions-=r " 隐藏右侧垂直滚动条
set guioptions-=l " 隐藏左侧垂直滚动条
set guioptions-=T " 不显示工具栏
set guioptions-=L " 不显示垂直分割窗口左侧的垂直滚动条


" =====================
" 主题配色
" =====================

if has('syntax')
    " 保证语法高亮
    syntax on
    if has('gui_running')
        colorscheme yytextmate
        let g:colors_name="yytextmate"
    endif
endif

"Highlight current
if has("gui_running")
    set cursorline
    set cursorcolumn
    hi cursorline guibg=#0D142C
    hi CursorColumn guibg=#0D142C
else
    " fold colors
    hi Folded cterm=none ctermbg=none ctermfg=4
    hi FoldColumn cterm=none ctermbg=none ctermfg=4
endif


" ====================
" GLOBAL CONFIG
" ====================
"
" 使用空格来替换tab
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set smarttab

" 自动设置 tab 宽度
autocmd FileType javascript setlocal expandtab shiftwidth=4 tabstop=4 softtabstop=4
autocmd FileType python setlocal expandtab shiftwidth=4 tabstop=4 softtabstop=4 textwidth=79
autocmd FileType ruby setlocal expandtab shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType yaml setlocal expandtab shiftwidth=2 tabstop=2 softtabstop=2
autocmd FileType jade setlocal expandtab shiftwidth=2 tabstop=2 softtabstop=2

" 缩进
set autoindent " 设置自动缩进
set smartindent " 设置智能缩进
" 自动重新读入
set autoread " 当文件在外部被修改，自动更新该文件
" 设定在任何模式下鼠标都可用
" set mouse
" 插入模式下使用 <BS>、<Del> <C-W> <C-U>
set backspace=indent,eol,start

" 代码折叠
set foldmethod=indent
set nowrap

"带有如下符号的单词不要被换行分割
set iskeyword+=_,$,@,%,#,-" 显示tab和空格
set list

" 设置tab和空格样式
set listchars=tab:\|\ ,nbsp:%,trail:-

" 设定行首tab为灰色
highlight LeaderTab guifg=#666666

" 匹配行首tab
match LeaderTab /\t/

" 搜索时无视大小写
set ignorecase
" 高亮显示结果
set hlsearch
" 在输入要搜索的文字时，vim会实时匹配
set incsearch


"cliboard seting
set clipboard+=unnamed " set clipboard

" 重启后撤销历史可用 persistent undo
" Set hidden to undo buffer
set hidden
set undofile
set undolevels=1000
set undodir=~/.undodir
au BufWritePre ~/.undodir/* setlocal noundofile


" 控制台响铃
set noerrorbells
" close visual bell
set novisualbell
set vb t_vb=

" 设置相对行号
"set nu
set rnu

" =====================
" AutoCmd 自动运行
" =====================

if has("autocmd")
    filetype plugin indent on " 打开文件类型检测
    augroup vimrcEx " 记住上次文件位置
        au!
        autocmd FileType text setlocal textwidth=80
        autocmd BufReadPost *
                    \ if line("'\"") > 0 && line("'\"") <= line("$") |
                    \   exe "normal g`\"" |
                    \ endif
    augroup END

    " JavaScript 语法高亮
    au FileType html,javascript let g:javascript_enable_domhtmlcss = 1
    au BufRead,BufNewFile *.js setf jquery
    " 给各语言文件添加 Dict
    if has('win32')
        au FileType php setlocal dict+=$VIM/vimfiles/dict/php_funclist.dict
        au FileType css setlocal dict+=$VIM/vimfiles/dict/css.dict
        au FileType javascript setlocal dict+=$VIM/vimfiles/dict/javascript.dict
    else
        au FileType php setlocal dict+=~/.vim/dict/php_funclist.dict
        au FileType css setlocal dict+=~/.vim/dict/css.dict
        au FileType javascript setlocal dict+=~/.vim/dict/javascript.dict
    endif
    " 格式化 JavaScript 文件
    au FileType javascript map <f3> :call g:Jsbeautify()<cr>
    " CSS3 语法支持
    au BufRead,BufNewFile *.css set ft=css syntax=css3
    " 增加 Objective-C 语法支持
    au BufNewFile,BufRead,BufEnter,WinEnter,FileType *.m,*.h setf objc
    " 将指定文件的换行符转换成 UNIX 格式
    au FileType php,javascript,html,css,python,vim,vimwiki set ff=unix
    autocmd BufRead * :lcd! %:p:h
endif

" 自动载入VIM配置文件
autocmd! bufwritepost vimrc source $MYVIMRC

" 关闭VIM的时候保存会话，按 F5 读取会话
set sessionoptions=buffers,sesdir,help,tabpages,winsize
au VimLeave * mks! ~/Session.vim
nmap <F5> :so ~/Session.vim<CR>

"在保存文件时自动去除无效空白，包括行尾空白和文件最后的空行
" Remove trailing whitespace when writing a buffer, but not for diff files.
" From: Vigil
" @see http://blog.bs2.to/post/EdwardLee/17961
function RemoveTrailingWhitespace()
    if &ft != "diff"
        let b:curcol = col(".")
        let b:curline = line(".")
        silent! %s/\s\+$//
        silent! %s/\(\s*\n\)\+\%$//
        call cursor(b:curline, b:curcol)
    endif
endfunction
autocmd BufWritePre * call RemoveTrailingWhitespace()


" 自动补全括号
inoremap ( <c-r>=OpenPair('(')<CR>
inoremap ) <c-r>=ClosePair(')')<CR>
inoremap { <c-r>=OpenPair('{')<CR>
inoremap } <c-r>=ClosePair('}')<CR>
inoremap [ <c-r>=OpenPair('[')<CR>
inoremap ] <c-r>=ClosePair(']')<CR>
inoremap < <c-r>=OpenPair('<')<CR>
inoremap > <c-r>=ClosePair('>')<CR>
function! OpenPair(char)
    let PAIRs = {
                \ '{' : '}',
                \ '[' : ']',
                \ '(' : ')',
                \ '<' : '>'
                \}
    if line('$')>2000
        let line = getline('.')

        let txt = strpart(line, col('.')-1)
    else
        let lines = getline(1,line('$'))
        let line=""
        for str in lines
            let line = line . str . "\n"
        endfor

        let blines = getline(line('.')-1, line("$"))
        let txt = strpart(getline("."), col('.')-1)
        for str in blines
            let txt = txt . str . "\n"
        endfor
    endif
    let oL = len(split(line, a:char, 1))-1
    let cL = len(split(line, PAIRs[a:char], 1))-1

    let ol = len(split(txt, a:char, 1))-1
    let cl = len(split(txt, PAIRs[a:char], 1))-1

    if oL>=cL || (oL<cL && ol>=cl)
        return a:char . PAIRs[a:char] . "\<Left>"
    else
        return a:char
    endif
endfunction
function! ClosePair(char)
    if getline('.')[col('.')-1] == a:char
        return "\<Right>"
    else
        return a:char
    endif
endf

inoremap ' <c-r>=CompleteQuote("'")<CR>
inoremap " <c-r>=CompleteQuote('"')<CR>
function! CompleteQuote(quote)
    let ql = len(split(getline('.'), a:quote, 1))-1
    let slen = len(split(strpart(getline("."), 0, col(".")-1), a:quote, 1))-1
    let elen = len(split(strpart(getline("."), col(".")-1), a:quote, 1))-1
    let isBefreQuote = getline('.')[col('.') - 1] == a:quote

    if '"'==a:quote && "vim"==&ft && 0==match(strpart(getline('.'), 0, col('.')-1), "^[\t ]*$")
        " for vim comment.
        return a:quote
    elseif "'"==a:quote && 0==match(getline('.')[col('.')-2], "[a-zA-Z0-9]")
        " for Name's Blog.
        return a:quote
    elseif (ql%2)==1
        " a:quote length is odd.
        return a:quote
    elseif ((slen%2)==1 && (elen%2)==1 && !isBefreQuote) || ((slen%2)==0 && (elen%2)==0)
        return a:quote . a:quote . "\<Left>"
    elseif isBefreQuote
        return "\<Right>"
    else
        return a:quote . a:quote . "\<Left>"
    endif
endfunction



" =====================
" HOT KEYS
" =====================

"设置','为leader快捷键
let mapleader = ","
let g:mapleader = ","

"设置快速保存和退出
"快速保存为,s
"快速退出（保存）为,w
"快速退出（不保存）为,q
nmap <leader>s :w!<cr>
nmap <leader>w :wq!<cr>
nmap <leader>q :q!<cr>
nmap <C-t>   :tabnew<cr>
nmap <C-p>   :tabprevious<cr>
nmap <C-n>   :tabnext<cr>
nmap <C-k>   :tabclose<cr>
nmap <C-Tab> :tabnext<cr>


" 按下 Q 不进入 Ex 模式，而是退出
nmap q :x<cr>

" 打开日历快捷键
" map ca :Calendar<cr>" 快速修改 vimrc 文件

" 快速重载入 vimrc
nmap <leader>s : source ~/.vim/vimrc <CR>
" 快速编辑 vimrc
nmap <leader>e : e ~/.vim/vimrc <CR>
map <silent> <leader>rc :tabe ~/.vim/vimrc<cr>

" 选中一段文字并全文搜索这段文字
vnoremap  *  y/<C-R>=escape(@", '\\/.*$^~[]')<CR><CR>
vnoremap  #  y?<C-R>=escape(@", '\\/.*$^~[]')<CR><CR>
map <leader>jt  <Esc>:%!json_xs -f json -t json-pretty<CR>

if has("gui_macvim")
    " Set input method off
    set imdisable
    " 如果为空文件，则自动设置当前目录为桌面
    lcd ~/Desktop/
endif

" 可视化模式下使用 tab 和 shift-tab 缩进
nmap <tab>      v>
nmap <s-tab>    v<
vmap <tab>      >gv
vmap <s-tab>    <gv


" =====================
" PLUGIN CONFIG
" =====================

" Use spacebar toggle fold
nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR>

" NERDTree
map td :NERDTreeToggle <CR>
" 显示 NERDTree Bookmark
let NERDTreeShowBookmarks=1

" 设置 burexploer 快捷键
nmap <C-e> :BufExplorer<cr>
nmap <f2>  :BufExplorer<cr>


" =====================
" PLUGIN MANAGMENT
" =====================
"
set wildmenu
set wildmode=longest:full,full

" use vundle manage plugins
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" status bar
set laststatus=2
set statusline=%t\ %1*%m%*\ %1*%r%*\ %1*%h%*\ %1*%w%*%=\ [%{VimBuddy()}]\ [%Y:%{toupper(&ff)}:%{toupper(&fenc!=''?&fenc:&enc)}]\ [ASCII:%b]\ [%l%2*/%L(%p%%)%*,%v]


" let Vundle manage Vundle
Bundle 'gmarik/vundle'
" other plugins
Bundle 'scrooloose/nerdtree'
Bundle 'bufexplorer.zip'
Bundle 'nathanaelkane/vim-indent-guides'
Bundle 'jsbeautify'
Bundle 'undofile.vim'
Bundle 'Rainbow-Parenthsis-Bundle'
Bundle 'tpope/vim-git'
Bundle 'tpope/vim-fugitive'
Bundle 'tpope/vim-haml'
Bundle 'Lokaltog/vim-powerline'
Bundle 'statianzo/vim-jade'
Bundle 'msanders/snipmate.vim'
" Bundle 'myusuf3/numbers.vim'
Bundle 'Lokaltog/vim-easymotion'
Bundle 'skammer/vim-css-color'
Bundle 'nono/vim-handlebars'
Bundle 'mako.vim'
