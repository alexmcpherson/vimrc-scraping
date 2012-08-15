call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

"===========================================================================
"Variable Setting Begin

if(has("win32") || has("win95") || has("win64") || has("win16"))
    let g:iswindows=1
else
    let g:iswindows=0
endif


if has("win32")
    let $VIMFILES = $VIM.'/vimfiles'
else
    let $VIMFILES = $HOME.'/.vim'
endif



let g:miniBufExplMapCTabSwitchBufs=1 
let g:miniBufExplMapWindowsNavVim=1 
let g:miniBufExplMapWindowNavArrows=1 

set rtp+=$GOROOT/misc/vim 

"Variable Setting End
"===========================================================================


"===========================================================================
"Basic Setting Begin

set nocompatible "不启用vi兼容模式
colorscheme evening "配色方案
syntax enable 
syntax on "自动语法高亮
set nu "设置显示行号
set tags=tags;
set autochdir "自动切换到当前目录为当前文件所在目录
set wrap 
set filetype=c
set tabstop=4 "设置tab长度为4
set softtabstop=4 "设置退格键时移动宽度为4
set shiftwidth=4 "设置<<和>>命令移动时宽度为4
set expandtab "用空格替换tab
set cindent
set smartindent
set autoindent 
set cursorline "突出显示当前行
set ai!
set scrolloff=3 " keep 3 lines when scrolling
set showcmd " display incomplete commands
set nocp
set ruler "打开状态栏标尺
set history=1000

set incsearch "输入搜索内容时就显示搜索结果
"set hlsearch "搜索时高亮显示被找到的文本
set showmatch "jump to matchs when entering regexp
set ignorecase " ignore case when searching
set smartcase  " no ignorecase if Uppercase char present

set backspace=indent,eol,start  " make that backspace key work the way it should
set cmdheight=1 "设置命令行的行数为1
set laststatus=2 "显示状态栏(默认值为1，无法显示)
set statusline=\ %<%F[%1*%M%*%n%R%H]%=\ %y\ %0(%{&fileformat}\ %{&encoding}\ %c:%l/%L%)\ 
"set guioptions-=T 
"set guioptions-=m 
"set guioptions-=r 

"encoding
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1

"Syntax Fold
"set foldmethod=indent

filetype plugin on
filetype indent on

"Basic Setting End
"===========================================================================


"对vim脚本折叠， {{{ ... }}}
"Vimscript file settings ---------------------- {{{
augroup filetype_vim
    au!
    au FileType vim setlocal foldmethod=marker
augroup END
"}}}




"===========================================================================
"Mappings Begin

"quickfix toggle
"noremap <F12> :QFix<cr>
noremap <c-q> :QFix<cr>

"augroup每次执行的时候会合并里面的命令，所以用autocmd!来清除之前的命令
augroup c_cpp_config
    autocmd! 
    "autocmd FileType c,cpp inoremap { {}<ESC>i<CR><ESC>O
    "autocmd FileType c,cpp inoremap {} {}<ESC>i<CR><ESC>O
    "autocmd FileType c,cpp inoremap cm /*  */<ESC>hhi
    autocmd FileType c,cpp inoremap { {}<left>
    autocmd FileType c,cpp inoremap {} {}<left>
    autocmd FileType c,cpp inoremap ( ()<left>
    autocmd FileType c,cpp inoremap () ()<left>
    autocmd FileType cpp   nnoremap <buffer> <localleader>c I//
    autocmd FileType c,cpp noremap  <F8> <ESC>:call g:hguard()<CR>
    autocmd FileType c,cpp noremap  <F9> <ESc>:call g:dotClang()<CR>
    autocmd FileType c setlocal makeprg=gcc\ %
    autocmd FileType cpp setlocal makeprg=g++\ %
augroup End

augroup js_config
    autocmd FileType javascript nnoremap <buffer> <localleader>c I//
    autocmd FileType javascript setlocal sw=2 sts=2 ts=8
    autocmd FileType javascript noremap <F7> <ESC>:JSLintUpdate<CR>
augroup End

augroup py_config
    autocmd FileType python     nnoremap <buffer> <localleader>c I#
augroup End

augroup lua_config        
    autocmd FileType lua        nnoremap <buffer> <localleader>c I--
    autocmd FileType lua        setlocal sw=2 sts=2 ts=2
augroup End


nnoremap <leader>ev :vsplit $MYVIMRC<cr>
nnoremap <leader>sv :source $MYVIMRC<cr>

"repalce casLock as Esc
inoremap jj <esc>
"inoremap <left> <nop>
"inoremap <right> <nop>
"inoremap <up> <nop>
"inoremap <down> <nop>
nnoremap <left> <nop>
nnoremap <right> <nop>
nnoremap <up> <nop>
nnoremap <down> <nop>

nnoremap <C-n> :call NumberToggle()<cr>

"onoremap in@ :<c-u>normal! /[^ \t]\+@[^ \t]\+\.[^ \t]\+<cr>vf<space>

noremap <F6> <ESC>:VimwikiAll2HTML<CR>
"inoremap <F4> <C-X><C-O>

"vim-latex与<c-j>的冲突
nnoremap <SID>I_won’t_ever_type_this <Plug>IMAP_JumpForward
noremap <c-j> <c-w>j
noremap <c-k> <c-w>k
noremap <c-l> <c-w>l
noremap <c-h> <c-w>h

"Mappings End
"===========================================================================


"===========================================================================
"Plugins Begin


""""""""""""""""""""""""""""""""""""""
" Indent Python in the Google way.
""""""""""""""""""""""""""""""""""""""

autocmd FileType python setlocal indentexpr=GetGooglePythonIndent(v:lnum)
autocmd FileType python let pyindent_nested_paren="&sw*2"
autocmd FileType python let pyindent_open_paren="&sw*2"

"在.vim/plugin/google-python-style.vim中

"let s:maxoff = 100 " maximum number of lines to look backwards.
"function! GetGooglePythonIndent(lnum)
"
"  " Indent inside parens.
"  " Align with the open paren unless it is at the end of the line.
"  " E.g.
"  "   open_paren_not_at_EOL(100,
"  "                         (200,
"  "                          300),
"  "                         400)
"  "   open_paren_at_EOL(                      "这个无效？已修改
"  "       100, 200, 300, 400)
"  call cursor(a:lnum, 1)
"  let [par_line, par_col] = searchpairpos('(\|{\|\[', '', ')\|}\|\]', 'bW',
"        \ "line('.') < " . (a:lnum - s:maxoff) . " ? dummy :"
"        \ . " synIDattr(synID(line('.'), col('.'), 1), 'name')"
"        \ . " =~ '\\(Comment\\|String\\)$'")
"  if par_line > 0
"    call cursor(par_line, 1)
"    if par_col != col("$") - 1
"      return par_col
"    else
"      return indent(par_line) + &sw "这里原来没有 
"    endif
"  endif
"
"  " Delegate the rest to the original function.
"  return GetPythonIndent(a:lnum)
"
"endfunction
"
"let pyindent_nested_paren="&sw*2"
"let pyindent_open_paren="&sw*2"

""""""""""""""""""""""""""""""""""""""
" END -- Indent Python in the Google way.
""""""""""""""""""""""""""""""""""""""


""""""""""""""""""""""""""""""""""""""
"pydiction 1.2 python auto complete  
""""""""""""""""""""""""""""""""""""""
filetype plugin on  
let g:pydiction_location = '~/.vim/bundle/Pydiction/complete-dict'
"defalut g:pydiction_menu_height == 15  
let g:pydiction_menu_height = 20 
""""""""""""""""""""""""""""""""""""""
" END --pydiction 
""""""""""""""""""""""""""""""""""""""

""""""""""""""""""""""""""""""""""""""
"clang auto complete  
""""""""""""""""""""""""""""""""""""""
let g:clang_complete_copen = 1 "出错的时候打开quickfix
let g:clang_complete_auto = 1
let g:clang_periodic_quickfix = 1
let g:clang_complete_macros = 1
noremap <F7> <ESC>:call g:ClangUpdateQuickFix()<CR>
"let g:clang_use_library = 1
""""""""""""""""""""""""""""""""""""""
" END --clang
""""""""""""""""""""""""""""""""""""""


""""""""""""""""""""""""""""""""""""""
" pysmelll
""""""""""""""""""""""""""""""""""""""
autocmd FileType python set omnifunc=pysmell#Complete
"log: 用了pathogen, 之后pysmell失效了，看了一下报错，
"pysmell#Complete似乎无法加载自己插件里python的包(不是这个原因)
"原因找到了,github上的版本更加新，原来模块中缺少很多函数
""""""""""""""""""""""""""""""""""""""
" END -- pysmell.
""""""""""""""""""""""""""""""""""""""


""""""""""""""""""""""""""""""""""""""
" vimwiki
""""""""""""""""""""""""""""""""""""""
let g:vimwiki_list = [{'path': '$HOME/Documents/docs/wiki',  
    \ 'path_html': '$HOME/Documents/docs/wiki/',
    \ 'template_path': '$HOME/Documents/docs/wiki/wiki_template/',
    \ 'template_default': 'def_template',
    \ 'template_ext': '.tpl',
    \ 'diary_link_count': 5}]

""""""""""""""""""""""""""""""""""""""
" END --  vimwiki
""""""""""""""""""""""""""""""""""""""



""""""""""""""""""""""""""""""""""""""
" NERDTree 
""""""""""""""""""""""""""""""""""""""
noremap <F2> :NERDTreeToggle<cr>
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTreeType") && b:NERDTreeType == "primary") | q | endif
""""""""""""""""""""""""""""""""""""""
" END -- NERDTree
""""""""""""""""""""""""""""""""""""""



""""""""""""""""""""""""""""""""""""""
" EasyMotion 
""""""""""""""""""""""""""""""""""""""
let g:EasyMotion_leader_key = '<leader>'
"原来的是<leader><leader>, \\w刚好与vimwiki的冲突
""""""""""""""""""""""""""""""""""""""
" END -- EasyMotion
""""""""""""""""""""""""""""""""""""""


""""""""""""""""""""""""""""""""""""""
" vim-latex 
""""""""""""""""""""""""""""""""""""""
" REQUIRED. This makes vim invoke Latex-Suite when you open a tex file.
filetype plugin on

" IMPORTANT: win32 users will need to have 'shellslash' set so that latex
" can be called correctly.
set shellslash

" IMPORTANT: grep will sometimes skip displaying the file name if you
" search in a singe file. This will confuse Latex-Suite. Set your grep
" program to always generate a file-name.
set grepprg=grep\ -nH\ $*

" OPTIONAL: This enables automatic indentation as you type.
filetype indent on

" OPTIONAL: Starting with Vim 7, the filetype of empty .tex files defaults to
" 'plaintex' instead of 'tex', which results in vim-latex not being loaded.
" The following changes the default filetype back to 'tex':
let g:tex_flavor='latex'
""""""""""""""""""""""""""""""""""""""
" END -- vim-latex
""""""""""""""""""""""""""""""""""""""

""""""""""""""""""""""""""""""""""""""
" Taglist 
""""""""""""""""""""""""""""""""""""""
let Tlist_Show_One_File=1 "不同时显示多个文件的tag，只显示当前文件的
let Tlist_Exit_OnlyWindow=1  "如果taglist窗口是最后一个窗口，则退出vim
let Tlist_Use_Right_Window=1  "在右侧窗口中显示taglist窗口
""""""""""""""""""""""""""""""""""""""
" END -- Taglist
""""""""""""""""""""""""""""""""""""""

""""""""""""""""""""""""""""""""""""""
" FuzzyFinder 
""""""""""""""""""""""""""""""""""""""
noremap 'b :FufBuffer<CR>
noremap 'f :FufFile<CR>
""""""""""""""""""""""""""""""""""""""
" END -- FuzzyFinder
""""""""""""""""""""""""""""""""""""""

""""""""""""""""""""""""""""""""""""""
" LuaInspect
""""""""""""""""""""""""""""""""""""""
let g:lua_inspect_warnings=0 "不即时提示错误
""""""""""""""""""""""""""""""""""""""
" END -- LuaInspect
""""""""""""""""""""""""""""""""""""""

""""""""""""""""""""""""""""""""""""""
" Golang
""""""""""""""""""""""""""""""""""""""
"echo rtp
"filetype plugin indent on
"syntax on
""""""""""""""""""""""""""""""""""""""
" END -- Golang
""""""""""""""""""""""""""""""""""""""

"Plugins End
"===========================================================================
