
" An example for a vimrc file.
"
" Maintainer:	Bram Moolenaar <Bram@vim.org>
" Last change:	2008 Jul 02
"
" To use it, copy it to
"     for Unix and OS/2:  ~/.vimrc
"	      for Amiga:  s:.vimrc
"  for MS-DOS and Win32:  $VIM\_vimrc
"	    for OpenVMS:  sys$login:.vimrc

" When started as "evim", evim.vim will already have done these settings.

" For pathogen plugin
call pathogen#infect()


if v:progname =~? "evim"
  finish
endif

" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

if has("vms")
  set nobackup		" do not keep a backup file, use versions instead
else
  set backup		" keep a backup file
endif
set history=50	" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set incsearch		" do incremental searching
set ignorecase

" For Win32 GUI: remove 't' flag from 'guioptions': no tearoff menu entries
" let &guioptions = substitute(&guioptions, "t", "", "g")

" Don't use Ex mode, use Q for formatting
map Q gq

" CTRL-U in insert mode deletes a lot.  Use CTRL-G u to first break undo,
" so that you can undo CTRL-U after inserting a line break.
inoremap <C-U> <C-G>u<C-U>

" In many terminal emulators the mouse works just fine, thus enable it.
if has('mouse')
  set mouse=a
endif

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

" Only do this part when compiled with support for autocommands.
if has("autocmd")

  " Enable file type detection.
  " Use the default filetype settings, so that mail gets 'tw' set to 72,
  " 'cindent' is on in C files, etc.
  " Also load indent files, to automatically do language-dependent indenting.
  filetype plugin indent on

  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
  au!

  " For all text files set 'textwidth' to 78 characters.
  autocmd FileType text setlocal textwidth=78

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  " Also don't do it when the mark is in the first line, that is the default
  " position when opening a file.
  autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif

  augroup END

else

  set autoindent		" always set autoindenting on

endif " has("autocmd")

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
  command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
		  \ | wincmd p | diffthis
endif

" add by holy---2011.1.16
" common configurations
set nu
" set colorcolumn=81  " 对第81列着色
let mapleader=","
" Reload .vimrc whenever it is saved
autocmd! bufwritepost .vimrc :source ~/.vimrc
map gf :tabe <cfile><CR>

set nomodeline
nmap <tab> v>
nmap <s-tab> v<
vmap <tab> >gv
vmap <s-tab> <gv

" indent configuration
set expandtab       " 把所有tab转换为空格
set tabstop=4       " 每层缩排4列
set shiftwidth=4    " 内/外缩排为4列
" set softtabstop=4   " what means?
set shiftround      " 总是内/外缩排至最近的移位点
autocmd FileType make setlocal noexpandtab  " disable expandtab in makefile

set encoding=utf-8
" set scrolloff=3
" set showmode
" set showcmd
" set hidden
" set wildmenu
" set wildmode=list:longest
" set visualbell
" set cursorline
" set ttyfast
" set ruler
" set backspace=indent,eol,start
" set laststatus=2
" set relativenumber
" set undofile

" shift tab pages
nmap <C-h> :tabp<CR>
nmap <C-l> :tabn<CR>
"hide/show : toolbar(T), menubar(m) and right_scrollbar(r)
map <silent> <C-F2> :if &guioptions =~# 'T' <Bar>
\set guioptions-=T <Bar>
\set guioptions-=m <Bar>
\else <Bar>
\set guioptions+=T <Bar>
\set guioptions+=m <Bar>

" configure for taglist plugin
"map <F3> :silent! Tlist<CR>
let Tlist_Ctags_Cmd = 'ctags'
let Tlist_Use_Right_Window = 1
let Tlist_Show_One_File=1 "让taglist可以同时展示多个文件的函数列表，如果想只有1个，设置为1
let Tlist_File_Fold_Auto_Close=0 "非当前文件，函数列表折叠隐藏
let Tlist_Exit_OnlyWindow=1 "当taglist是最后一个分割窗口时，自动推出vim
"是否一直处理tags.1:处理;0:不处理
let Tlist_Process_File_Always=0 "不是一直实时更新tags，因为没有必要
let Tlist_Auto_Open=0 "open taglist whenever vim execute
let Tlist_Inc_Winwidth=0

""""""""""""""""""""""""""""""
" NERDTree setting
""""""""""""""""""""""""""""""
nmap <silent> <leader>fe :NERDTreeToggle<cr>
let NERDChristmasTree=0
let NERDTreeIgnore=['\.swp$', '\~$']	" ignore .swp and ~ files
let NERDTreeHijackNetrw=1

""""""""""""""""""""""""""""""
" BufExplore setting
""""""""""""""""""""""""""""""
let g:bufExplorerShowRelativePath=1  " Show relative paths.
let g:bufExplorerSortBy='mru'        " Sort by most recently used.
"let g:bufExplorerSplitVertical=1     " Split vertically.
let g:bufExplorerSplitVertSize = 30  " Split width
let g:bufExplorerDefaultHelp=0       " Do not show default help.

""""""""""""""""""""""""""""""
" winManager setting
""""""""""""""""""""""""""""""
let g:winManagerWindowLayout = "BufExplorer,FileExplorer|TagList"
let g:winManagerWidth = 30
let g:defaultExplorer = 0
let g:persistentBehaviour = 1
let g:bufExplorerMaxHeight = 30
nmap <C-W><C-F> :FirstExplorerWindow<cr>
nmap <C-W><C-B> :BottomExplorerWindow<cr>
nmap <silent> <leader>wm :WMToggle<cr> 

""""""""""""""""""""""""""""""
" lookupfile setting
""""""""""""""""""""""""""""""
let g:LookupFile_MinPatLength = 2               "最少输入2个字符才开始查找
let g:LookupFile_PreserveLastPattern = 0        "不保存上次查找的字符串
let g:LookupFile_PreservePatternHistory = 1     "保存查找历史
let g:LookupFile_AlwaysAcceptFirst = 1          "回车打开第一个匹配项目
let g:LookupFile_AllowNewFiles = 0              "不允许创建不存在的文件
if filereadable("./filenametags")               "设置tag文件的名字
	let g:LookupFile_TagExpr = '"./filenametags"'
endif
"映射LookupFile为,lf
nmap <silent> <leader>lf :LUTags<cr>
""映射LUBufs为,lb
nmap <silent> <leader>lb :LUBufs<cr>
"映射LUWalk为,lw
nmap <silent> <leader>lw :LUWalk<cr>

" execute project related configuration in current directory
if filereadable("Session.vim")
    source Session.vim
endif 

" read viminfo in current directory if any
if filereadable("Session.viminfo")
    rv Session.viminfo
endif 


" configure for DoxygenToolkit plugin
let g:DoxygenToolkit_authorName="Holy"
"let g:DoxygenToolkit_licenseTag="My own license\<enter>"
"let g:DoxygenToolkit_undocTag="DOXIGEN_SKIP_BLOCK"
let g:DoxygenToolkit_fileTag = "@file "
let g:DoxygenToolkit_authorTag = "@author "
let g:DoxygenToolkit_dateTag = "@date "
let g:DoxygenToolkit_versionTag = "@version "
let g:DoxygenToolkit_blockTag = "@name "
let g:DoxygenToolkit_classTag = "@class "
let g:DoxygenToolkit_startCommentTag = "/** "
let g:DoxygenToolkit_startCommentBlock = "/* "
let g:DoxygenToolkit_briefTag_pre = "@brief "
let g:DoxygenToolkit_paramTag_pre = "@param "
let g:DoxygenToolkit_returnTag = "@return "
let g:DoxygenToolkit_briefTag_funcName = "no"
let g:DoxygenToolkit_maxFunctionProtoLines = 30

" configure for omnicppcomplete
set nocp
"map <C-F12> :!ctags -R --c++-kinds=+p --fields=+iaS --extra=+q .<CR>
set completeopt=menu
"let OmniCpp_GlobalScopeSearch = 0
" search namespaces in the current buffer and in included files
let OmniCpp_NamespaceSearch = 2
let OmniCpp_MayCompleteScope = 1

" configure for NERDCommenter
let NERDShutUp=1

" configure for tempate
let g:template_load=1
let g:template_confirm=0
let g:template_tags_replacing=1
" set template files path, save time to search
let g:template_path="/home/soros/.vim/bundle/template_loader/templates"
" set pre-defined tags
let g:T_AUTHOR = "LiJunjie"
let g:T_AUTHOR_EMAIL="holysoros@gmail.com"
let g:T_AUTHOR = "LiJunjie"
let g:T_AUTHOR_WEBSITE="sharevery.net"
let g:T_DATE_FORMAT="%y-%m-%d %H:%M:%S"

" configure for c.vim
map  <silent> <F7>    <Esc>:cprevious<CR>
map  <silent> <F8>    <Esc>:cnext<CR>

" configure for QuickFix Window
com! -bang -nargs=? QFix cal QFixToggle(<bang>0)
fu! QFixToggle(forced)
  if exists("g:qfix_win") && a:forced == 0 
    cclose
    unlet g:qfix_win
  else 
    copen 10
    let g:qfix_win = bufnr("$")
  en
endf   
nn      <leader>q :QFix<cr>

" configure for sketch.vim
"map <C-F1> -nargs=0 ToggleSketch call ToggleSketch()<CR>
map <C-F1> :call ToggleSketch()<CR>


"Markdown to HTML  
nmap <leader>md :%!/usr/local/bin/Markdown.pl --html4tags <cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" cscope setting
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if has("cscope")
  set csprg=/usr/bin/cscope
  set csto=1
  set cst
  set nocsverb
  " add any database in current directory
  if filereadable("cscope.out")
      cs add cscope.out
  endif
  set csverb
endif

nmap <C-@>s :cs find s <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>g :cs find g <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>c :cs find c <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>t :cs find t <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>e :cs find e <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>f :cs find f <C-R>=expand("<cfile>")<CR><CR>
nmap <C-@>i :cs find i ^<C-R>=expand("<cfile>")<CR>$<CR>
nmap <C-@>d :cs find d <C-R>=expand("<cword>")<CR><CR>

" Want to use :Man in vim
so $VIMRUNTIME/ftplugin/man.vim
nmap M :Man <C-R>=expand("<cword>")<CR><CR>

""""""""""""""""""""""""""""""
" vimgdb setting
""""""""""""""""""""""""""""""
let g:vimgdb_debug_file = ""
run macros/gdb_mappings.vim 

" auto-detect file type
au BufNewFile,BufRead *.md set filetype=markdown
au BufNewFile,BufRead *.pl set filetype=perl

" AutoComplPop_Behavior
let g:AutoComplPop_Behavior = { 
            \ 'c': [ {'command' : "\<C-x>\<C-o>",
            \       'pattern' : ".",
            \       'repeat' : 0}
            \      ]  
            \}
let g:AutoComplPop_CompleteoptPreview = 1

""""""""""""""""""""""""""""""
" tagbar setting
""""""""""""""""""""""""""""""
map <F3> :TagbarToggle<CR>
