call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

"""""""""""""""""""""""""""""""""""
"           TagList               "
"""""""""""""""""""""""""""""""""""
let Tlist_Use_Right_Window=1
map <F4> :Tlist<CR>


"""""""""""""""""""""""""""""""""""
"           NerdTree              "
"""""""""""""""""""""""""""""""""""
map <F3> :NERDTree<CR>

"""""""""""""""""""""""""""""""""""
"           AboutEdit             "
"""""""""""""""""""""""""""""""""""

"go to prev tab
map <S-H> gT
"go to next tab
map <S-L> gt

"no swap file
set noswapfile

" Tab related
set ts=4
set sw=4
set smarttab
set et
set ambiwidth=double

" Format related
set tw=78
set lbr
set fo+=mB

syntax on  
set nobackup

" disable toolbar
set go=

" Indent related
set cin
set ai
set cino=:0g0t0(susj1

" Editing related
set backspace=indent,eol,start
set whichwrap=b,s,<,>,[,]
set mouse=a
set selectmode=
set mousemodel=popup
set keymodel=
set selection=inclusive

" Misc
set wildmenu

" Encoding related
set encoding=utf-8
set langmenu=en_US.UTF-8
language message en_US.UTF-8
set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1

" File type related
filetype plugin indent on

" Display related
set ru
set sm
set hls
if (has("gui_running"))
    set guioptions+=b
    colo blackboard
    set nowrap
    set cursorline
else
    colo ron
    set wrap
endif

""""""""""""""""""""""""""""""
"        auto commands       "
""""""""""""""""""""""""""""""  

" show line number only when types below met
if has("autocmd")
   autocmd FileType xml,html,c,cs,java,perl,shell,bash,cpp,python,vim,php,ruby set number
   autocmd FileType xml,html vmap <C-o> <ESC>'<i<!--<ESC>o<ESC>'>o-->
   autocmd FileType java,c,cpp,cs vmap <C-o> <ESC>'<o
   autocmd FileType html,text,php,vim,c,java,xml,bash,shell,perl,python setlocal textwidth=100
   autocmd Filetype html,xml,xsl source $VIMRUNTIME/plugin/closetag.vim
   autocmd BufReadPost *
      \ if line("'\"") > 0 && line("'\"") <= line("$") |
      \   exe "normal g`\"" |
      \ endif
endif " has("autocmd")

"map compile and run to f5 f6 
map <F5> :call Compile()<CR>
map <F6> :call Debug()<CR>
map <C-F5> :call CompileRun<CR>
"define function Compile, used for compile and run program
func Compile()
    exec "w"
    "C program
    if &filetype == 'c'
        exec "!make"
    "java program
    elseif &filetype == 'java'
        exec "!make"
    endif
endfunc
"end define Compile
 
"define function CompileRun, used for run program 
func CompileRun()
    exec "w"
    "C program
    if &filetype == 'c'
        exec "make"
        exec "!./%<"
    "Java program
    elseif &filetype == 'java'
        exec "make"
        exec "!java %<"
    endif
endfunc
"end define CompileRun
 
"define function Debug, used for debug program
func Debug()
    exec "w"
    "C program
    if &filetype == 'c'
        exec "!make"
        exec "!gdb %<"
    "Java program
    elseif &filetype == 'java'
        exec "!make"
        exec "!jdb %<"
    endif
endfunc
"end define Debug
