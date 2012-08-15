" vimrc
call pathogen#infect()
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

"*** indentation ***"
set smartindent  
set shiftwidth=4
set shiftround
" 显示标题 与 laststatus 相似
set showtabline=2
set preserveindent
set smarttab
set tabstop=4
set softtabstop=4
set hidden
set expandtab  
set textwidth=79

" terminal and gui settings
"set term=ansi
"set termencoding=utf-8
"set encoding=utf-8
set backspace=indent,eol,start
"set visualbell
"set smartcase
"set noerrorbells
"set showmatch
"set showcmd
"set completeopt=menuone,longest,preview
"set complete+=k
"set iskeyword=@,48-57,192-255
"set iskeyword-=:
"set modeline

" 确认退出
set confirm

"w!! writes the file using sudo
cmap w!! w !sudo tee % >/dev/null

" 使用鼠标 
set mouse=a 
" 显示命令 at bottom
set showcmd

"*** searching ***"
" 搜索时高亮
set hlsearch
" {} [] 时显示匹配项
set showmatch "potentially slow, turn off in big files.
" 实时匹配
set incsearch
set ignorecase
" 一行字过长不折行
set nowrap
set wrapscan


" Jump 5 lines when running out of the screen
set scrolljump=5
" Indicate jump out of the screen when 3 lines before end of the screen
set scrolloff=3

" Highligh current line
"set cursorline
"set cursorcolumn
set ruler
set statusline=[TYPE=%Y]\ [ENC=%{&fenc}]\ [ASCII=\%03.3b]\ [HEX=\%02.2B]\ [POS=%04l,%04v][%p%%]
hi StatusLine term=bold,reverse cterm=bold ctermfg=7 ctermbg=0
hi StatusLineNC term=reverse cterm=bold ctermfg=8
set t_Co=256
" 设置显示尾部状态栏 与 showtabline 相似
set laststatus=2

" Speed up response to ESC key
set notimeout
set ttimeout
set timeoutlen=100

"*** Color scheme ***"
let g:solarized_termcolors=256
set background=dark
let g:solarized_visibility="high"
colorscheme solarized

" 打开当前目录文件列表
map <F3> :Explore<CR>
" 函数和变量列表
map <F4> :TlistToggle<CR>
" 更新函数变量表 间隔时间 for tag list
set updatetime=100

" show tabs and spaces
"set list
"set listchars=tab:>-,extends:#
" 突出显示 tab 和尾部空格
set listchars=tab:»·,trail:·
set list

" Omnicompletion for Python
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType vim set omnifunc=syntaxcomplete#Complete
autocmd FileType c set omnifunc=ccomplete#Complete
inoremap <C-space> <C-x><C-O>


"*** python option ***"
"pydiction 1.2 python auto complete
filetype plugin on
let g:pydiction_location = '~/.vim/tools/pydiction-1.2/complete-dict'
"defalut g:pydiction_menu_height == 15
"let g:pydiction_menu_height = 20
    " Import Python paths
    python << EOF
import os
import sys
import vim
for p in sys.path:
    if os.path.isdir(p):
        vim.command(r"set path+=%s" % (p.replace(" ", r"\ ")))
EOF

" 打开 scons 默认为 python
au BufNewFile,BufRead SCons* set filetype=python
"au BufNewFile,BufRead SConscript set filetype=python
"au BufNewFile,BufRead SConstruct set filetype=python

map  <F7>   <Plug>ShowFunc
map! <F7>   <Plug>ShowFunc


"iab id <c-r>=strftime("20%y %m %d %H:%M:%S")<cr>
iab __nowdate__ <C-r>=strftime('%c')<CR>
"iab in zhangyang09
"iab is <script type="text/javascript"></script>

map <F12> ms:call AddHTML()<cr>'s
function AddHTML()
    let n = line('.') - 1
    call append(n,"<html>")
    let n = n+1
    call append(n,"<head>")
    let n = n+1
    call append(n,"<link rel=\"stylesheet\" href=\"\" type=\"text/css\" />")
    let n = n+1
    call append(n,"<script type=\"text/javascript\" src=\"\"></script>")
    let n = n+1
    call append(n,"<title></title>")
    let n = n+1
    call append(n,"</head>")
    let n = n+1
    call append(n,"<body>")
    let n = n+1
    call append(n,"</body>")
    let n = n+1
    call append(n,"</html>")
    echohl WarningMsg | echo "Successful in adding the html format." | echohl None
endf

au BufReadCmd   *.epub      call zip#Browse(expand("<amatch>"))

map <C-c> "+y
"map <C-v> "+p
"map <C-q> :q
"map <C-s> :w

function! s:_replace_blank(text)
    let text = a:text
    let text_new = substitute(text, "[ ]*$", "", "")
    return text_new
endfunction
noremap - :call ReplaceBlank1()<CR>
function! ReplaceBlank1()
    let n = line(".")
    let line = getline(n)
    let line_new = <SID>_replace_blank(line)
    if line_new != line
        call setline(n, line_new)
    endif
endfunction

"noremap - :%s/\v[ ]+$//g<CR>
"noremap - :call ReplaceBlank()<CR>
function! ReplaceBlank()
    let lnum1 = line("'<")
    let lnum2 = line("'>")
    "let lines = getline(lnum1, lnum2)
    let l_num = lnum1
    for line in lines
        let line_new = <SID>_replace_blank(line)
        if line_new != line
            call setline(l_num, line_new)
        endif
        let l_num =  l_num + 1
    endfor
    "echo line("'<")
    "let [lnum1, col1] = getpos("'<")[1:2]
    "let [lnum2, col2] = getpos("'>")[1:2]
    "let lines = getline(lnum1, lnum2)
    "echo lines
    "let lines[-1] = lines[-1][: col2 - 2]
    "let lines[0] = lines[0][col1 - 1:]
    "return join(lines, "\n")
endfunction

" Automatic updating vimrc
"if has("autocmd")
"    autocmd bufwritepost .vimrc source $MYVIMRC
"endif

autocmd BufReadPost *
            \ if line("'\"")>0&&line("'\"")<=line("$") |
            \    exe "normal g'\"" |
            \ endif

