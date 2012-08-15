" For pathogen.vim: auto load all plugins in .vim/bundle
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

"--------------------------------------------------------------------------- 
"                           General Settings
"--------------------------------------------------------------------------- 
if filereadable($VIMRUNTIME . "/vimrc_example.vim")
 so $VIMRUNTIME/vimrc_example.vim
endif

if filereadable($VIMRUNTIME . "/macros/matchit.vim")
 so $VIMRUNTIME/macros/matchit.vim
endif

if has("gui_running")   " GUI color and font settings
  set background=dark 
  set t_Co=256          " 256 color mode
  set cursorline        " highlight current line
else
" terminal color settings
endif      

set cindent
set nu
set secure
set enc=taiwan
set ts=4
set sw=4
set hls
set background=dark
"set nowrap
set wrap
"set virtualedit=all, because this conflicts with :set wrap
set tw=0
"set noai nosi nocindent
set showcmd
set incsearch
"set paste // if this option is enabled, will conflict with auto-indent
set nocompatible        " not compatible with the old-fashion vi mode
set autoread            " auto read when file is changed from outside        
set backspace=2         " allow backspacing over everything in insert mode
set viminfo='20,\"50    " read/write a .viminfo file, don't store more than 50 lines of registers
set history=50          " keep 50 lines of command line history
set ruler               " show the cursor position all the time
set dictionary=~/.dict  " my dictionary :p
set t_Co=8              " number of colors
set showcmd             " show command
set incsearch           " While typing a search pattern, show immediately where the so far typed pattern matches.
set hlsearch            " When there is a previous search pattern, highlight all its matches.
set clipboard=unnamed   " yank to the system register (*) by default
set showmatch           " Cursor shows matching ) and }
set showmode            " Show current mode
set wildchar=<TAB>      " start wild expansion in the command line using <TAB>
set wildmenu            " wild char completion menu
set wildignore=*.o,*.class,*.pyc " ignore these files while expanding wild chars
set autoindent          " auto indentation
set nobackup            " no *~ backup files
set copyindent          " copy the previous indentation on autoindenting
set ignorecase          " ignore case when searching
set smartcase           " ignore case if search pattern is all lowercase,case-sensitive otherwise
                        " (This option is enabled only if 'ignorecase' is
                        " enabled too)
set smarttab            " insert tabs on the start of a line according to context
syntax on               " syntax highlighting

" disable sound on errors
set novisualbell
set t_vb=
set tm=500

" TAB setting{
   set expandtab        "replace <TAB> with spaces
   set softtabstop=4 
   set shiftwidth=4 

   au FileType Makefile set noexpandtab
"}     

" status line {
set laststatus=2 " The last window will 'always' have a status line
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

filetype on           " Enable filetype detection
filetype indent on    " Enable filetype-specific indenting
filetype plugin on    " Enable filetype-specific plugins  

" auto reload vimrc when editing it
autocmd! bufwritepost .vimrc source ~/.vimrc            

" C/C++ specific settings
autocmd FileType c,cpp,cc  set cindent comments=sr:/*,mb:*,el:*/,:// cino=>s,e0,n0,f0,{0,}0,^-1s,:0,=s,g0,h1s,p2,t0,+2,(2,)20,*30

"Restore cursor to file position in previous editing session
set viminfo='10,\"100,:20,%,n~/.viminfo
au BufReadPost * if line("'\"") > 0|if line("'\"") <= line("$")|exe("norm '\"")|else|exe "norm $"|endif|endif

"highlight Comment ctermfg=LightBlue
highlight Search term=reverse ctermbg=4 ctermfg=7
"helptags ~/.vim/doc

"--------------------------------------------------------------------------- 
"                           End of General Settings
"--------------------------------------------------------------------------- 

"--------------------------------------------------------------------------- 
" Tip #382: Search for <cword> and replace with input() in all open buffers 
"--------------------------------------------------------------------------- 
fun! Replace() 
    let s:word = input("Replace " . expand('<cword>') . " with:") 
    :exe 'bufdo! %s/\<' . expand('<cword>') . '\>/' . s:word . '/ge' 
    :unlet! s:word 
endfun 

"------------------------------ LLVM bitcode ----------------------------"
augroup filetype
  au! BufRead,BufNewFile *.ll     set filetype=llvm
  au! BufNewFile,BufRead *.plist setf plist 
  au! BufRead,BufNewFile *.td     set filetype=tablegen
augroup END 

"------------------------------ For Python ------------------------------"
autocmd BufRead,BufNewFile *.py syntax on
autocmd BufRead,BufNewFile *.py set ai
autocmd BufRead *.py set smartindent
set cinwords=if,elif,else,for,while,with,try,except,finally,def,class

au FileType python setl autoindent tabstop=4 expandtab shiftwidth=4 softtabstop=4
"------------------------------------------------------------------------"

let g:acp_completeOption='.,w,b,u,t,i,k'
let g:acp_behaviorSnipmateLength=1

au BufRead,BufNewFile *.c set makeprg=$LLVM_HOME/bin/clang\ -g\ -Wall\ -Wextra\ -ftrapv\ -O0\ %\ -o\ %<
au BufRead,BufNewFile *.cpp set makeprg=$LLVM_HOME/bin/clang++\ -g\ -Wall\ -Wextra\ -ftrapv\ -O0\ %\ -o\ %<
au BufRead,BufNewFile *.java set makeprg=javac\ -encoding\ utf8\ %
au BufRead,BufNewFile *.fx set makeprg=javafxc\ -encoding\ utf8\ % 
au BufRead,BufNewFile *.{c,cpp,java,fx} nmap <F5> :w<CR>:make<CR>
au BufRead,BufNewFile *.{c,cpp,java,fx} nmap <F6> :! ./%<<CR>
au BufNewFile,BufReadPost *.rs  set filetype=c 

func CodeFormat()
          " get the line number of current cursor
          let lineNum = line(".")
          let option_s = "%! astyle -taCSKNwYm0Uxk3"
          if &filetype == 'c'
                    exec option_s." --mode=c"
          elseif &filetype == 'cpp'
                    exec option_s." --mode=c"
          elseif &filetype == 'java'
                    exec option_s." --mode=java"
          else 
                    echo "CodeFormate doesn't support ".&filetype." filetype."
          endif
          " return to the line where cursor was
          exec lineNum
endfunc
map <S-F> <Esc>:call CodeFormat()<CR>  

"--------------------------------------------------------------------------- 
" USEFUL SHORTCUTS
"--------------------------------------------------------------------------- 
" set leader to ,
let mapleader=","
let g:mapleader=","

"replace the current word in all opened buffers
map <leader>r :call Replace()<CR>

" open the error console
map <leader>cc :botright cope<CR> 
" move to next error
map <leader>] :cn<CR>
" move to the prev error
map <leader>[ :cp<CR>

" --- move around splits {
" move to and maximize the below split 
map <C-J> <C-W>j<C-W>_
" move to and maximize the above split 
map <C-K> <C-W>k<C-W>_
" move to and maximize the left split 
nmap <c-h> <c-w>h<c-w><bar>
" move to and maximize the right split  
nmap <c-l> <c-w>l<c-w><bar>
set wmw=0                     " set the min width of a window to 0 so we can maximize others 
set wmh=0                     " set the min height of a window to 0 so we can maximize others
" }

" move around tabs. conflict with the original screen top/bottom
" comment them out if you want the original H/L
" go to prev tab 
map <S-H> gT
" go to next tab
map <S-L> gt

" new tab
map <C-t><C-t> :tabnew<CR>
" close tab
map <C-t><C-w> :tabclose<CR> 

" ,/ turn off search highlighting
nmap <leader>/ :nohl<CR>

" Bash like keys for the command line
cnoremap <C-A>      <Home>
cnoremap <C-E>      <End>
cnoremap <C-K>      <C-U>

" ,p toggles paste mode
nmap <leader>p :set paste!<BAR>set paste?<CR>
" ,n toggles line number
nmap <leader>n :set nu!<BAR>set nu?<CR>

" allow multiple indentation/deindentation in visual mode
vnoremap < <gv
vnoremap > >gv

" :cd. change working directory to that of the current file
cmap cd. lcd %:p:h

" Writing Restructured Text (Sphinx Documentation) {
   " Ctrl-u 1:    underline Parts w/ #'s
   noremap  <C-u>1 yyPVr#yyjp
   inoremap <C-u>1 <esc>yyPVr#yyjpA
   " Ctrl-u 2:    underline Chapters w/ *'s
   noremap  <C-u>2 yyPVr*yyjp
   inoremap <C-u>2 <esc>yyPVr*yyjpA
   " Ctrl-u 3:    underline Section Level 1 w/ ='s
   noremap  <C-u>3 yypVr=
   inoremap <C-u>3 <esc>yypVr=A
   " Ctrl-u 4:    underline Section Level 2 w/ -'s
   noremap  <C-u>4 yypVr-
   inoremap <C-u>4 <esc>yypVr-A
   " Ctrl-u 5:    underline Section Level 3 w/ ^'s
   noremap  <C-u>5 yypVr^
   inoremap <C-u>5 <esc>yypVr^A
"}

"------------------ self-defined(Kordan Ou) keymap ------------------
let mapleader=','
noremap <F1> <Esc>:Tlist<Enter>
noremap <F2> <Esc>:NERDTreeToggle<Enter>

" convert binary to hex
map <Leader>hon :%!xxd<CR> 
map <Leader>hof :%!xxd -r<CR>
"--------------- End of self-defined keymap --------------

"--------------------------------------------------------------------------- 
" PROGRAMMING SHORTCUTS
"--------------------------------------------------------------------------- 

" Ctrl-[ jump out of the tag stack (undo Ctrl-])
" map <C-[> <ESC>:po<CR>

" ,g generates the header guard
map <leader>g :call IncludeGuard()<CR>
fun! IncludeGuard()
   let basename = substitute(bufname(""), '.*/', '', '')
   let guard = '_' . substitute(toupper(basename), '\.', '_', "H")
   call append(0, "#ifndef " . guard)
   call append(1, "#define " . guard)
   call append( line("$"), "#endif // for #ifndef " . guard)
endfun

" Enable omni completion. (Ctrl-X Ctrl-O)
autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType c set omnifunc=ccomplete#Complete
autocmd FileType java set omnifunc=javacomplete#Complete

" use syntax complete if nothing else available
if has("autocmd") && exists("+omnifunc")
  autocmd Filetype *
              \ if &omnifunc == "" |
              \     setlocal omnifunc=syntaxcomplete#Complete |
              \ endif
endif

" make CSS omnicompletion work for SASS and SCSS
autocmd BufNewFile,BufRead *.scss             set ft=scss.css
autocmd BufNewFile,BufRead *.sass             set ft=sass.css

"--------------------------------------------------------------------------- 
" ENCODING SETTINGS
"--------------------------------------------------------------------------- 
set encoding=utf-8                                  
set termencoding=utf-8
set fileencoding=utf-8
set fileencodings=ucs-bom,utf-8,big5,latin1

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

"--------------------------------------------------------------------------- 
"                           PLUGIN SETTINGS
"--------------------------------------------------------------------------- 

" --- Vim-Latex
" IMPORTANT: win32 users will need to have 'shellslash' set so that latex
" can be called correctly.
set shellslash

" IMPORTANT: grep will sometimes skip displaying the file name if you
" search in a singe file. This will confuse Latex-Suite. Set your grep
" program to always generate a file-name.
set grepprg=grep\ -nH\ $*


" OPTIONAL: Starting with Vim 7, the filetype of empty .tex files defaults to
" 'plaintex' instead of 'tex', which results in vim-latex not being loaded.
" The following changes the default filetype back to 'tex':
let g:tex_flavor='latex'
let g:Tex_DefaultTargetFormat='pdf'
let g:Tex_CompileRule='pdf'
let g:Tex_Leader=','

" --- SuperTab
let g:SuperTabDefaultCompletionType = "context" 

" --- Yank Ring 
nmap <Leader>l :YRShow<CR>
