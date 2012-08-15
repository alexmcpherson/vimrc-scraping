" All system-wide defaults are set in $VIMRUNTIME/debian.vim (usually just
" /usr/share/vim/vimcurrent/debian.vim) and sourced by the call to :runtime
" you can find below.  If you wish to change any of those settings, you should
" do it in this file (/etc/vim/vimrc), since debian.vim will be overwritten
" everytime an upgrade of the vim packages is performed.  It is recommended to
" make changes after sourcing debian.vim since it alters the value of the
" 'compatible' option.
" 关于taglist
let Tlist_Show_One_File=1
let Tlist_Exit_OnlyWindow=1
" 去掉vi一致性
set nocompatible
"解决中文乱码
"let &termencoding=&encoding 
"set fileencodings=utf-8,gb2312,gbk,gb18030,ucs-bom,cp936
"编码设置
set encoding=utf-8
set langmenu=zh_CN.UTF-8
language message zh_CN.UTF-8
let &termencoding=&encoding
set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1
" 新添加的配置参数
"set mouse=a
set wrap
"autocmd VimEnter * NERDTree
"autocmd BufEnter * NERDTreeMirror
syntax on
set cmdheight=3
set autowrite
set number
set showcmd
set lcs=tab:>-,trail:-
set list
set showmode
set title
set ruler
set encoding=utf-8
set fileencoding=utf-8
set nobackup
set expandtab
set shiftwidth=4
set smarttab
set fdm=manual
"set fdc=4
set nowrap
set hlsearch
set incsearch
" 设置行号
set number
" 检测文件类型
filetype on
filetype plugin on
filetype indent on
" 记录历史的行数
set history=500
" This line should not be removed as it ensures that various options are
" properly set to work with the Vim-related packages available in Debian.
runtime! debian.vim

" Uncomment the next line to make Vim more Vi-compatible
" NOTE: debian.vim sets 'nocompatible'.  Setting 'compatible' changes numerous
" options, so any other options should be set AFTER setting 'compatible'.
"set compatible

" Vim5 and later versions support syntax highlighting. Uncommenting the
" following enables syntax highlighting by default.
if has("syntax")
  syntax on
endif

" If using a dark background within the editing area and syntax highlighting
" turn on this option as well
" 背景为黑色
set background=dark
" 自动对齐
set autoindent
" 智能自动对齐
set smartindent
" 缩进
set tabstop=4
set shiftwidth=4
" 匹配模式
set showmatch
" 去除vim的GUI版本的toolbar
set guioptions-=T
" 显示光标所在位置
set ruler
" 快速找到答案
set incsearch
" 自动补全
" inoremap ( ()
" inoremap { {}
" inoremap "
" inoremap < <>
if &term=="xterm"
  set t_Co=8
  set t_Sb=^[[4%dm
  set t_Sf=^[[3%dm
endif

"进行版权声明的设置
""添加或更新头
map <F4> :call TitleDet()<cr>'s
function AddTitle()
    call append(0,"/*============================================================================")
    call append(1,"# Author: Yalong Bai - admin@asiteof.me")
    call append(2,"# Homepage : www.asiteof.me")
    call append(3,"# Last modified: ".strftime("%Y-%m-%d %H:%M"))
    call append(4,"# Filename: ".expand("%:t"))
    call append(5,"# Description: ")
    call append(6,"============================================================================*/")
    echohl WarningMsg | echo "Successful in adding the copyright." | echohl None
endf
"更新最近修改时间和文件名
function UpdateTitle()
    normal m'
    execute '/# *Last modified:/s@:.*$@\=strftime(":\t%Y-%m-%d %H:%M")@'
    normal ''
    normal mk
    execute '/# *Filename:/s@:.*$@\=":\t\t".expand("%:t")@'
    execute "noh"
    normal 'k
    echohl WarningMsg | echo "Successful in updating the copy right." | echohl None
endfunction
"判断前10行代码里面，是否有Last modified这个单词，
"如果没有的话，代表没有添加过作者信息，需要新添加；
"如果有的话，那么只需要更新即可
function TitleDet()
    let n=1
    "默认为添加
    while n < 7
        let line = getline(n)
        if line =~ '^\#\s*\S*Last\smodified:\S*.*$'
            call UpdateTitle()
            return
        endif
        let n = n + 1
    endwhile
    call AddTitle()
endfunction

map <F3> :call RubyTitleDet()<cr>'s
function RubyAddTitle()
    call append(0,"#!/usr/bin/ruby -w")
    call append(1,"# encoding = utf-8")
    call append(2,"#")
    call append(3,"# Author: Yalong Bai - admin@asiteof.me")
    call append(4,"# Homepage : www.asiteof.me")
    call append(5,"# Last modified: ".strftime("%Y-%m-%d %H:%M"))
    call append(6,"# Filename: ".expand("%:t"))
    call append(7,"# Description: ")
    echohl WarningMsg | echo "Successful in adding the copyright." | echohl None
endf
function RubyTitleDet()
    let n=1
    "默认为添加
    while n < 8
        let line = getline(n)
        if line =~ '^\#\s*\S*Last\smodified:\S*.*$'
            call UpdateTitle()
            return
        endif
        let n = n + 1
    endwhile
    call RubyAddTitle()
endfunction

map <F2> :call Ruby_Project_TitleDet()<cr>'s
function Ruby_Project_AddTitle()
    call append(0,"########################################################")
    call append(1,"# encoding = utf-8")
    call append(2,"#")
    call append(3,"# Author: Yalong Bai - admin@asiteof.me")
    call append(4,"# Homepage : www.asiteof.me")
    call append(5,"# Last modified: ".strftime("%Y-%m-%d %H:%M"))
    call append(6,"# Filename: ".expand("%:t"))
    call append(7,"# Description: ")
    call append(8,"########################################################")
    echohl WarningMsg | echo "Successful in adding the copyright." | echohl None
endf
function Ruby_Project_TitleDet()
    let n=1
    "默认为添加
    while n < 9
        let line = getline(n)
        if line =~ '^\#\s*\S*Last\smodified:\S*.*$'
            call UpdateTitle()
            return
        endif
        let n = n + 1
    endwhile
    call Ruby_Project_AddTitle()
endfunction
" 
" Uncomment the following to have Vim jump to the last position when
" reopening a file
"if has("autocmd")
"  au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
"endif

" Uncomment the following to have Vim load indentation rules and plugins
" according to the detected filetype.
"if has("autocmd")
"  filetype plugin indent on
"endif

" The following are commented out as they cause vim to behave a lot
" differently from regular Vi. They are highly recommended though.
"set showcmd		" Show (partial) command in status line.
"set showmatch		" Show matching brackets.
"set ignorecase		" Do case insensitive matching
"set smartcase		" Do smart case matching
"set incsearch		" Incremental search
"set autowrite		" Automatically save before commands like :next and :make
"set hidden             " Hide buffers when they are abandoned
"set mouse=a		" Enable mouse usage (all modes)

" Source a global configuration file if available
if filereadable("/etc/vim/vimrc.local")
  source /etc/vim/vimrc.local
endif

