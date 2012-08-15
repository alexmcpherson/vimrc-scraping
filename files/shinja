
runtime bundle/pathogen/autoload/pathogen.vim
call pathogen#infect() 
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => General
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Sets how many lines of history VIM has to remember
set nocompatible "不要vim模仿vi模式，建议设置，否则会有很多不兼容的问题

set t_Co=65536
colorscheme lucius

" Enable filetype plugin
syntax on
filetype plugin on
filetype indent on

" Set to auto read when a file is changed from the outside
set nu
set autoread
set history=200
set cursorline        " highlight current line"
"set scrolloff=5                 " keep at least 5 lines above/below cursor
"set sidescrolloff=5             " keep at least 5 columns left/right of cursor

"--------------------------------------------------------------------------- 
" Tip #382: Search for <cword> and replace with input() in all open buffers 
"--------------------------------------------------------------------------- 
fun! Replace() 
    let s:word = input("Replace " . expand('<cword>') . " with:") 
    :exe 'bufdo! %s/\<' . expand('<cword>') . '\>/' . s:word . '/ge' 
    :unlet! s:word 
endfun 

"--------------------------------------------------------------------------- 
" USEFUL SHORTCUTS
"--------------------------------------------------------------------------- 

" With a map leader it's possible to do extra key combinations
" like <leader>w saves the current file
let mapleader = ","
let g:mapleader = ","

"replace the current 'WORD' in all opened buffers
map <leader>r :call Replace()<CR>

" ,p toggles paste mode
nmap <leader>p :set paste!<BAR>set paste?<CR>

" Fast saving
nmap <leader>w :w!<cr>

" Fast editing of the .vimrc
map <leader>e :e! ~/.vimrc<cr>

" When vimrc is edited, reload it
autocmd! bufwritepost vimrc source ~/.vimrc

"将当前文本转换为16进制格式。
nmap <leader>x :%!xxd<cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => AutoClose--Alves
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:AutoCloseProtectedRegions = ["Comment", "String", "Character"]
let g:AutoClosePairs = {'(': ')', '{': '}', '[': ']', '"': '"', "'": "'"}

"Replaced whit the plugin AutoClose--Alves
" inoremap ( ()<ESC>i
" inoremap ) <c-r>=ClosePair(')')<CR>
" inoremap { {}<ESC>i
" inoremap } <c-r>=ClosePair('}')<CR>
" inoremap [ []<ESC>i
" inoremap ] <c-r>=ClosePair(']')<CR>
" inoremap < <><ESC>i
" inoremap > <c-r>=ClosePair('>')<CR>
" 
" function ClosePair(char)
"     if getline('.')[col('.') - 1] == a:char
"         return "\<Right>"
"     else
"         return a:char
"     endif
" endf

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Moving around, tabs and buffers
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Smart way to move btw. windows
"map <C-j> <C-W>j
"map <C-k> <C-W>k
"map <C-h> <C-W>h
"map <C-l> <C-W>l

" --- move around splits {
" move to and maximize the below split 
map <C-J> <C-W>j<C-W>_
" move to and maximize the above split 
map <C-K> <C-W>k<C-W>_
" move to and maximize the left split 
nmap <c-h> <c-w>h<c-w><bar>
" move to and maximize the right split  
nmap <c-l> <c-w>l<c-w><bar>
" set wmw=0                     " set the min width of a window to 0 so we can maximize others 
" set wmh=0                     " set the min height of a window to 0 so we can maximize others
" }

" Use the arrows to something usefull, right left
map <right> :bn<cr>
map <left> :bp<cr>

" When pressing <leader>cd switch to the directory of the open buffer
map <leader>cd :cd %:p:h<cr>

"---------------------------------------------------------------------------
" ENCODING SETTINGS
"---------------------------------------------------------------------------
set encoding=utf-8
set termencoding=utf-8
set fileencoding=utf-8
set fileencodings=ucs-bom,utf-8,big5,gb2312,latin1      " http://andrew.sayya.org/blog/?p=454 

fun! ViewUTF8()
set encoding=utf-8
set termencoding=big5
endfun

fun! UTF8()
set encoding=utf-8
set termencoding=big5
set fileencoding=utf-8
set fileencodings=ucs-bom,big5,utf-8,latin1
endfun

fun! Big5()
set encoding=big5
set fileencoding=big5
endfun

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => VIM user interface
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Set 7 lines to the curors - when moving vertical..
set so=7

set wildmode=list:longest   "make cmdline tab completion similar to bash
set wildmenu                "enable ctrl-n and ctrl-p to scroll thru matches
set wildignore=*.o,*.obj,*~ "stuff to ignore when tab completing

set ruler "Always show current position

set cmdheight=2 "The commandbar height

" allow editing multiple unsaved buffers 允許不保存buffer而切換buffer, buffer 就是只一次開啟多個檔案編輯時的其他檔案
set hidden "Change buffer - without saving

" Set backspace config
set backspace=eol,start,indent
set whichwrap+=<,>,h,l

set ignorecase "Ignore case when searching
set smartcase

set hlsearch "Highlight search things

set incsearch "Make search act like search in modern browsers
set nolazyredraw "Don't redraw while executing macros 

set magic "Set magic on, for regular expressions

set showmatch "Show matching bracets when text indicator is over them. Cursor shows matching ) and }
set showmode
set showcmd
set mat=2 "How many tenths of a second to blink

" No sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

" status line {
set laststatus=2
set statusline=\ %{HasPaste()}%<%-15.25(%f%)%m%r%h\ %w\ \ 
set statusline+=\ \ \ [%{&ff}/%Y] 
set statusline+=\ \ \ %<%20.30(%{hostname()}:%{CurDir()}%)\ 
set statusline+=%=%-10.(%l,%c%V%)\ %p%%/%L

function! CurDir()
    let curdir = substitute(getcwd(), $HOME, "~", "")
    return curdir
endfunction

function! HasPaste()
    if &paste
        return '[PASTE]'
    else
        return ''
    endif
endfunction

"}

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"=> Files, backups and undo
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Turn backup off, since most stuff is in SVN, git anyway...
set nobackup
set nowb
set noswapfile
set undolevels=200 				" number of forgivable mistakes

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Text, tab and indent related
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set expandtab
set shiftwidth=4
set tabstop=4
set smarttab

set linebreak               "set lbr
set tw=500                  "set textwidth

"set autoindent smartindent      " turn on auto/smart indenting 在複製貼上時如果貼上的文字有tab會整個亂掉可以 :set noai 再貼上
set ai "Auto indent
set si "Smart indet
"set nowrap 							"不自动换行
set wrap "Wrap lines

""""""""""""""""""""""""""""""
"MRU plugin
""""""""""""""""""""""""""""""
let MRU_File = $HOME.'/.vim/.vim_mru_files'
let MRU_Exclude_Files = '^/tmp/.*\|^/var/tmp/.*'  " For Unix 
let MRU_Max_Entries = 400
map <leader>f :MRU<CR>

""""""""""""""""""""""""""""""
"fold 
"http://www.linux.com/archive/articles/114138
""""""""""""""""""""""""""""""
"set foldmarker={{{,}}}
"set foldmethod=marker
set foldmethod=syntax
set foldlevel=0 " 預設全部關閉
set foldnestmax=3
"Zf#j  creates a fold from the cursor down  #  lines.
"Zf/string creates a fold from the cursor to string .
"Zj moves the cursor to the next fold.
"Zk moves the cursor to the previous fold.
"Zo opens a fold at the cursor.
"ZO opens all folds at the cursor.
"Zm increases the foldlevel by one.
"ZM closes all open folds.
"Zr decreases the foldlevel by one.
"ZR decreases the foldlevel to zero -- all folds will be open.
"Zd deletes the fold at the cursor.
"ZE deletes all folds.
"[z move to start of open fold.
"]z move to end of open fold.

""""""""""""""""""""""""""""""
"snipmate setup
""""""""""""""""""""""""""""""

" let g:snippets_dir = '~/.vim/bundle/snipmate/snippets/,~/.vim/bundle/snipmate-snippets/' " will cause warning about multiple snippets definition.
" let g:snippets_dir = '~/.vim/bundle/snipmate-snippets/' " will cause warning about multiple snippets definition.
" try
"   source ~/.vim/bundle/snipmate-snippets/support_functions.vim
" catch
" endtry
" autocmd vimenter * call s:SetupSnippets()
" function! s:SetupSnippets()
" 
"     "if we're in a rails env then read in the rails snippets
"     if filereadable("./config/environment.rb")
"       try
"         call ExtractSnips("~/.vim/snippets/ruby-rails", "ruby")
"         call ExtractSnips("~/.vim/snippets/eruby-rails", "eruby")
"       catch
"         call ExtractSnips("~/vimfiles/snippets/ruby-rails", "ruby")
"         call ExtractSnips("~/vimfiles/snippets/eruby-rails", "eruby")
"       endtry
"     endif
" 
"     try
"       call ExtractSnips("~/.vim/snippets/html", "eruby")
"       call ExtractSnips("~/.vim/snippets/html", "xhtml")
"       call ExtractSnips("~/.vim/snippets/html", "php")
"     catch
"       call ExtractSnips("~/vimfiles/snippets/html", "eruby")
"       call ExtractSnips("~/vimfiles/snippets/html", "xhtml")
"       call ExtractSnips("~/vimfiles/snippets/html", "php")
"     endtry
" endfunction

""""""""""""""""""""""""""""""
"TagBar
""""""""""""""""""""""""""""""
"ctags -R --c++-kinds=+p --fields=+iaS --extra=+q;
let $kernel_version=system('uname -r | tr -d "\n"')
set tags+=/lib/modules/$kernel_version/build/tags,/usr/include/tags
let g:tagbar_width = 30
let g:tagbar_autofocus = 1
nnoremap <silent> <F6> :TagbarToggle<CR>

""""""""""""""""""""""
"minibufexpl
"http://blog.csdn.net/wooin/article/details/1858917
"https://github.com/fholgado/minibufexpl.vim
""""""""""""""""""""""
let g:miniBufExplMapWindowNavVim = 1
let g:miniBufExplMapWindowNavArrows = 1
let g:miniBufExplMapCTabSwitchBufs = 1
let g:miniBufExplModSelTarget = 1 
let g:miniBufExplorerMoreThanOne = 2

" let g:miniBufExplModSelTarget = 1
" let g:miniBufExplorerMoreThanOne = 2
" let g:miniBufExplModSelTarget = 0
" let g:miniBufExplUseSingleClick = 1
" let g:miniBufExplMapWindowNavVim = 1
" let g:miniBufExplVSplit = 25
" let g:miniBufExplSplitBelow=1

let g:bufExplorerSortBy = "name"

autocmd BufRead,BufNew :call UMiniBufExplorer

map <leader>u :TMiniBufExplorer<cr>

""""""""""""""""""""""""""""""
"NERDTree plugin
""""""""""""""""""""""""""""
let NERDTreeWinPos = "left" "where NERD tree window is placed on the
let NERDTreeWinSize = 30 "size of the NERD treea
"Open and close the NERD_tree.vim separately
nmap <F5> <ESC>:NERDTreeToggle<CR>

"Q. How can I open a NERDTree automatically when vim starts up?
" autocmd vimenter * NERDTree

"Q. How can I open a NERDTree automatically when vim starts up if no files were specified?
autocmd vimenter * if !argc() | NERDTree | endif

"Q. How can I close vim if the only window left open is a NERDTree?
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTreeType") && b:NERDTreeType == "primary") | q | endif

"""""""""""""""""""""""""""""
" Cscope setting
"""""""""""""""""""""""""""""
"move cursor on the word, and press ctrl+@+s|g|c...
"查找声明
nmap <C-@>s :cs find s <C-R>=expand("<cword>")<CR><CR> 
"查找定义
nmap <C-@>g :cs find g <C-R>=expand("<cword>")<CR><CR> 
"查找调用
nmap <C-@>c :cs find c <C-R>=expand("<cword>")<CR><CR> 
"查找指定的字符串
nmap <C-@>t :cs find t <C-R>=expand("<cword>")<CR><CR> 
"查找egrep模式，相当于egrep功能，但查找速度快多了
nmap <C-@>e :cs find e <C-R>=expand("<cword>")<CR><CR> 
"查找文件
nmap <C-@>f :cs find f <C-R>=expand("<cfile>")<CR><CR> 
"查找包含本文件的文件
nmap <C-@>i :cs find i <C-R>=expand("<cfile>")<CR><CR> 
"查找本函数调用的函数
nmap <C-@>d :cs find d <C-R>=expand("<cword>")<CR><CR> 

"find ./ -name "*.c" -or -name "*.h" -or -name "*.cpp" -or -name "*.S" | "cscope -Rkbq
"-R: 在生成索引文件时，搜索子目录树中的代码
"-b: 只生成索引文件，不进入cscope的界面
"-k: 在生成索引文件时，不搜索/usr/include目录
"-q: 生成cscope.in.out和cscope.po.out文件，加快cscope的索引速度

if has("cscope")
	set csprg=/usr/bin/cscope
	set csto=0
	set cst
	set nocsverb
	" add any database in current directory
	if filereadable("cscope.out")
		cs add cscope.out
	" else add database pointed to by environment
	elseif $CSCOPE_DB != ""
		cs add $CSCOPE_DB
	endif
	set csverb
	set cscopetag
	"this option seems inference the behavior of tags ctrl+] and ctrl+t
	"so I mark it up
	" set cscopequickfix=s-,g-,c-,d-,t-,e-,f-,i-

	" http://www.chongtang.me/index.php/1081
	 set cscopequickfix=s-,c-,d-,t-,e-,i-
endif

"""""""""""""""""""""""""""""
" QUICKFIX WINDOW
"""""""""""""""""""""""""""""

" Use a bang in command and function definitions!
" Function and command definitions using Vim’s :command and :function built-ins should include a bang (!) symbol, otherwise Vim will complain that the command or function already exists:
" 
"     " Bad:
"     :command MyCmd call MyFun()
"     :function MyFun()
"     :endfunction
"      
"     " Good:
"     :command! MyCmd call MyFun()
"     :function! MyFun()
"     :endfunction
"     #

command! -bang -nargs=? QFix call QFixToggle(<bang>0)
function! QFixToggle(forced)
if exists("g:qfix_win") && a:forced == 0
cclose
unlet g:qfix_win
else
botright copen	8 
let g:qfix_win = bufnr("$")
endif
endfunction
nnoremap <F7> :QFix<CR>

""""""""""""""""""""""""""""""
" TComment plugin
""""""""""""""""""""""""""""""
map <C-/> :TComment<cr>
" Primary key maps:
" 
"     <c-_><c-_>   :: :TComment
"     <c-_><space> :: :TComment <QUERY COMMENT-BEGIN ?COMMENT-END>
"     <c-_>b       :: :TCommentBlock
"     <c-_>a       :: :TCommentAs <QUERY COMMENT TYPE>
"     <c-_>n       :: :TCommentAs &filetype <QUERY COUNT>
"     <c-_>s       :: :TCommentAs &filetype_<QUERY COMMENT SUBTYPE>
"     <c-_>i       :: :TCommentInline
"     <c-_>r       :: :TCommentRight
"     <c-_>p       :: Comment the current inner paragraph


""""""""""""""""""""""""""""""
" EasyMotion
""""""""""""""""""""""""""""""
let g:EasyMotion_leader_key = '<Leader>m' " default is <Leader><Leader>
hi link EasyMotionTarget ErrorMsg
hi link EasyMotionShade  Comment

""""""""""""""""""""""""""""""
" sparkup
""""""""""""""""""""""""""""""
" g:sparkupArgs (Default: '--no-last-newline') -
"   Additional args passed to sparkup.
" 
" g:sparkupExecuteMapping (Default: '<c-e>') -
"   Mapping used to execute sparkup.
" 
" g:sparkupNextMapping (Default: '<c-n>') -
"   Mapping used to jump to the next empty tag/attribute.

""""""""""""""""""""""""""""""
" neocomplcache 
""""""""""""""""""""""""""""""
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
" imap <expr><TAB> neocomplcache#sources#snippets_complete#expandable() ? "\<Plug>(neocomplcache_snippets_expand)" : pumvisible() ? "\<C-n>" : "\<TAB>"

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
" let g:neocomplcache_enable_auto_select = 1

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

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => surrounds
" http://net.tutsplus.com/tutorials/other/vim-essential-plugin-surround/
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"viw + s" (selecte a word, and 's'urround with  "
"cst (change surround tag)
"dst (delete surround tag)
