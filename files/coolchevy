" .vimrc file											|
"														|
" Maintainer:	coolchevy								|
" Last change:	2006 04 04								|
" http://rayninfo.co.uk/vimtips.html														|
"-------------------------------------------------------

" When started as "evim", evim.vim will already have done these settings.
if v:progname =~? "evim"
  finish
endif

"set autowrite

"ignore case when search
"set ignorecase

" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start


set autoindent		" always set autoindenting on
""if has("vms")
  ""set nobackup		" do not keep a backup file, use versions instead
""else
  ""set backup		" keep a backup file
""endif
set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set incsearch		" do incremental searching
set winaltkeys=no
set filetype=on
set fileformat=unix
set wrap

autocmd FileType python set softtabstop=4 shiftwidth=4 expandtab nowrap smartindent cinwords=if,elif,else,for,while,try,except,finally,def,class
"au! BufRead,BufNewFile *.json set filetype=javascript "foldmethod=syntax
au BufRead,BufNewFile *.json set filetype=json foldmethod=syntax
au! Syntax json source ~/.vim/ftplugin/json.vim
"autocmd BufNewFile *.py 0r ~/.vim/skeletons/py.py
"autocmd BufNewFile *.py       TSkeletonSetup py.py
"autocmd BufRead *.py       TSkeletonSetup py.py
autocmd FileType php set softtabstop=4 shiftwidth=4 expandtab
autocmd BufRead * silent! %s/[\r \t]\+$//
"au BufNewFile,BufRead *.dump set filetype=sql
"source ~/.vim/syntax/htmldjango.vim
source ~/.vim/syntax/django.vim
"source ~/.vim/ftplugin/htmldjango2.vim

"let g:surround_{char2nr("b")} = "{% block\1 \r..*\r &\1%}\r{% endblock %}"
"let g:surround_{char2nr("i")} = "{% if\1 \r..*\r &\1%}\r{% endif %}"
"let g:surround_{char2nr("w")} = "{% with\1 \r..*\r &\1%}\r{% endwith %}"
"let g:surround_{char2nr("c")} = "{% comment\1 \r..*\r &\1%}\r{% endcomment %}"
"let g:surround_{char2nr("f")} = "{% for\1 \r..*\r &\1%}\r{% endfor %}"


"Headers for new files
"¿¿- PYTHON ¿¿-
"autocmd BufNewFile *.py 0r ~/.vim/skeleton.py
"autocmd BufNewFile *.py   ks|call LastMod()|¿s
fun LastMod()
 if line("$") > 20
   let l = 20
 else
   let l = line("$")
 endif
 exe "1," . l . "g/Created: /s/Created: .*/Created: " . strftime("%Y %b %d")
 exe "2s/<year>/" . strftime("%Y")
endfun

function! LastModified()
    if &modified
        let save_cursor = getpos(".")
        let n = min([20, line("$")])
        exe '1,' . n . 's#^\(.\{,10}Last modified: \).*#\1' .
                    \ strftime('%a %b %d, %Y  %I:%M%p') . '#e'
        call setpos('.', save_cursor)
    endif
endfun
autocmd BufWritePre * call LastModified()

let tskelUserName = "Vitalii Kulchevych (coolcheyv aka tuniq)"
let tskelUserEmail = "coolchevy@gmail.com"
let tskelUserWWW = "http://coolchevy.org.ua/"
let tskelDateFormat = "%Y-%m-%d %H:%M:%S"

let tortoiseSvnCommitOnce = 1
let tortoiseSvnInstallAutoCmd = 0

let PHP_removeCRwhenUnix = 1

" For Win32 GUI: remove 't' flag from 'guioptions': no tearoff menu entries
" let &guioptions = substitute(&guioptions, "t", "", "g")

" Don't use Ex mode, use Q for formatting
map Q gq

" Make p in Visual mode replace the selected text with the "" register.
vnoremap p <Esc>:let current_reg = @"<CR>gvs<C-R>=current_reg<CR><Esc>

" This is an alternative that also works in block mode, but the deleted
" text is lost and it only works for putting the current register.
"vnoremap p "_dp

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
"  source C:\Program\ Files\Vim\vimfiles\ftplugin\php.vim
"  source /usr/local/share/vim/vimfiles/ftplugin/php.vim
endif

"source ~/.vim/ftplugin/django.vim  
"source ~/.vim/ftplugin/htmldjango.vim

set dictionary += "/usr/share/vim/vimfiles/dictionaries/PHP.dict"
" Only do this part when compiled with support for autocommands.
if has("autocmd")

  " Enable file type detection.
  " Use the default filetype settings, so that mail gets 'tw' set to 72,
  " 'cindent' is on in C files, etc.
  " Also load indent files, to automatically do language-dependent indenting.
  filetype plugin indent on

  " For all text files set 'textwidth' to 78 characters.
  autocmd FileType text setlocal textwidth=78

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal g`\"" |
    \ endif
"  autocmd GUIEnter * winpos 0 0
"  autocmd GUIEnter * simalt ~x


endif " has("autocmd")

"Key mapping
map  <F3> :sp.<CR>
map  <C-TAB> :bnext<CR>
"map <F8> :Tlist<CR>
map <F8> :set nu!<CR>
"map <F9> :TlistSync<CR>
map <F6> :bprevious<CR>
map <F7> :bnext<CR>
nmap <F10> :q<CR>
imap <F10> <ESC>:q<CR>
nmap <F2> :w<CR>
imap <F2> <ESC>:w<CR>i<Right>
nmap ,s :source ~/.vimrc<CR>
nmap ,v :e ~/.vimrc<CR>
"nmap <F9> :make<CR>
"imap <F9> <ESC>:make<CR>
nmap ,t :read !my_date <CR>
"HTML
imap <C-B> <br>
imap <C-Space> &nbsp;
vmap sb "zdi<b><C-R>z</b><ESC>
vmap s! "zdi<!--<C-R>z--><ESC>

"PHP
nmap ,/ I//<ESC>
vmap sp "zdi<?php = <C-R>z ?><ESC>

" show '(' when ')' is inputed
set showmatch
set matchtime=3

" don't create '~' files
set nobackup

"" --------------------------------------
"" colors
"" --------------------------------------
if has("gui_running") 
"if has("gui_gtk2") 
"    if has("x11")
"    colorscheme desert
"    colorscheme MetaCosm
    colorscheme wombat
    set guioptions=-t
    "highlight Normal guibg=lightyellow
else
    colorscheme lucius
endif
set t_Co=256
"set background=dark
"colorscheme koehler
"colorscheme slate
"colorscheme desert
"hi Folded ctermbg=yellow
"let g:colors_name="desert"
"highlight Comment cterm=italic
"highlight Comment font=Verdana:h14
"highlight Comment term=italic cterm=italic gui=italic
"highlight Constant term=bold cterm=bold gui=bold
"highlight Comment ctermbg=DarkGray
"highlight Comment cterm=none term=italic gui=italic
"






" don't bell
set noeb
set vb

" indenting
set expandtab
set tabstop=4
set shiftwidth=4
set si
set smarttab
"set nowrap
"set number

" virtual editing
set virtualedit=block
set textwidth=255

set encoding=8bit-utf-8
set termencoding=utf-8

set wildmenu
set wcm=<Tab>
menu Encoding.koi8-u   :e ++enc=koi8-u<CR>
menu Encoding.koi8-r   :e ++enc=koi8-r<CR>
menu Encoding.windows-1251 :e ++enc=cp1251<CR>
menu Encoding.ibm-866      :e ++enc=ibm866<CR>
menu Encoding.utf-8                :e ++enc=utf-8 <CR>
map <F9> :emenu Encoding.<TAB>
nmap <C-J> :%!python -m json.tool<CR>

"clean html
nmap <C-L> :%s/>/>\r/g <CR> :%s/</\r</gc <CR> :%s/^[\ \t]*\n//g <CR>



" some funcs

let b:encindex=0
function! RotateEnc()
        let y = -1
        while y == -1
                let encstring = "#8bit-cp1251#8bit-cp866#utf-8#koi8-r#koi8-u#"
                let x = match(encstring,"#",b:encindex)
                let y = match(encstring,"#",x+1)
                let b:encindex = x+1
                if y == -1
                        let b:encindex = 0
                else
                        let str = strpart(encstring,x+1,y-x-1)
                        return ":set encoding=".str
                endif
        endwhile
endfunction

" SET GUI FONT
if has("gui_running")
    if has("gui_gtk2")
        set guifont=Terminus\ 12
    elseif has("x11")
        set guifont=-*-Terminus-medium-r-normal-*-*-180-*-*-m-*-*
    else
"        set guifont=Terminus:h12:cDEFAULT
        set guifont=Monaco:h14
    endif
endif 
" / SET GUI FONT

""iab dprint print "<pre>debug: \n";<CR>print_r($);<CR>print "</pre>\n";<CR>
"iab dprint <CR>print 'DEBUG'<CR>
"iab fwred $this->Redirect();
"iab ro require_once();
"iab io include_once();
"iab sqlq $db->query();
"iab sqlqs $db->query_result(, FM_);
"iab dtbl {$db->tbl}
"iab dp dump(, '');
"python
"iab utfheader # -*- coding:utf-8 -*-


set statusline=%<%f%h%m%r%=%b\ %{&encoding}\ 0x%B\ \ %l,%c%V\ %P

" SHIFT-Del Cut
vnoremap <S-Del> "+x

" CTRL-Insert Copy
vnoremap <C-Insert> "+y

" SHIFT-Insert Paste
map <S-Insert>		"+gP
cmap <S-Insert>		<C-R>+

" CTRL-a Select All
map <C-a>	ggVG

let python_highlight_all = 1 


function! Pep8all()
    let oldGrepPrg=&grepprg
    let &grepprg='pep8 --filename="*py" .'
    execute "grep"
    let &grepprg=oldGrepPrg
    cw    
endf
command! Pep8all call Pep8all()

function <SID>Pep8()
    set lazyredraw
    " Close any existing cwindows.
    cclose
    let l:grepformat_save = &grepformat
    let l:grepprogram_save = &grepprg
    set grepformat&vim
    set grepformat&vim
    let &grepformat = '%f:%l:%m'
    let &grepprg = 'pep8 --repeat'
    if &readonly == 0 | update | endif
    silent! grep! %
    let &grepformat = l:grepformat_save
    let &grepprg = l:grepprogram_save
    let l:mod_total = 0
    let l:win_count = 1
    " Determine correct window height
    windo let l:win_count = l:win_count + 1
    if l:win_count <= 2 | let l:win_count = 4 | endif
    windo let l:mod_total = l:mod_total + winheight(0)/l:win_count |
                \ execute 'resize +'.l:mod_total
    " Open cwindow
    execute 'belowright copen '.l:mod_total
    nnoremap <buffer> <silent> c :cclose<CR>
    set nolazyredraw
    redraw!
endfunction

if ( !hasmapto('<SID>PEP8()') && (maparg('<F5>') == '') )
    map <F5> :call <SID>Pep8()<CR>
    map! <F5> :call <SID>Pep8()<CR>
else
    if ( !has("gui_running") || has("win32") )
        echo "Python PEP8 Error: No Key mapped.\n".
                    \ "<F5> is taken and a replacement was not assigned."
    endif
endif
    
"nmap <buffer> <F5> :w<Esc>mwG:r!python %<CR>`.




"autocmd BufRead *.py set tabstop=4
"autocmd BufRead *.py set nowrap
"autocmd BufRead *.py set go+=b
"autocmd BufRead *.py set makeprg=python\ -c\ \"import\ py_compile,sys;\ sys.stderr=sys.stdout;\ py_compile.compile(r'%')\"
"autocmd BufRead *.py set efm=%C\ %.%#,%A\ \ File\ \"%f\"\\,\ line\ %l%.%#,%Z%[%^\ ]%\\@=%m
"autocmd BufRead *.py nmap <F5> :!python %<CR>



"BINDINGS 
" Changing Case
" guu                             : lowercase line
" gUU                             : uppercase line
" Vu                              : lowercase line
" VU                              : uppercase line
" g~~                             : flip case line
" vEU                             : Upper Case Word
" vE~                             : Flip Case Word
" ggguG                           : lowercase entire file
" set list/nolist :show advanced symbols

"let erlang_keywords = 1
"let erlang_functions = 1
"let erlang_characters = 1
"

"folding
nnoremap <silent> <Space> @=(foldlevel('.')?'za':'l')<CR>
vnoremap <Space> zf


"let g:erlangManPath='/opt/local/lib/erlang/man'
"let g:erlangCompletionDisplayDoc=1
"let g:erlangHighlightBif=1

"HL
"set nowrap list listchars=eol:¿,tab:¿¿,trail:_,extends:¿,precedes:¿

"wildmenu
set wildmenu
set wildmode=list:longest,full

 
"mouse
"set mouse=a
