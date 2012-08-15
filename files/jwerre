" Jonah Werre's vimrc

" For pathogen.vim: auto load all plugins in .vim/bundle
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" General Settings
set nocompatible	" not compatible with the old-fashion vi mode
set bs=2		" allow backspacing over everything in insert mode
set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set autoread		" auto read when file is changed from outside


filetype on           " Enable filetype detection
filetype indent on    " Enable filetype-specific indenting
filetype plugin on    " Enable filetype-specific plugins



syntax on		" syntax highlight
set hlsearch		" search highlighting

if has("gui_running")	" GUI color and font settings
  set guifont=Osaka-Mono:h18
  set background=dark 
  set t_Co=256          " 256 color mode
  set cursorline        " highlight current line
  colors moria          "theme
  highlight CursorLine  guibg=#003853 ctermbg=24  gui=none cterm=none
else
  colors moria2         " terminal color settings 
endif

set clipboard=unnamed	" yank to the system register (*) by default
set showmatch		" Cursor shows matching ) and }
set showmode		" Show current mode
set wildchar=<TAB>	" start wild expansion in the command line using <TAB>
set wildmenu            " wild char completion menu

" ignore these files while expanding wild chars
set wildignore=*.o,*.class,*.pyc

set autoindent		" auto indentation
set incsearch		" incremental search
set nobackup		" no *~ backup files
set copyindent		" copy the previous indentation on autoindenting
set ignorecase		" ignore case when searching
set smartcase		" ignore case if search pattern is all lowercase,case-sensitive otherwise
set smarttab		" insert tabs on the start of a line according to context
set number              " show line numbers

" disable sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

" TAB setting{
   set expandtab        "replace <TAB> with spaces
   set softtabstop=4 
   set shiftwidth=4 

   au FileType Makefile set noexpandtab
"}      							

" directory to store temp swp files
set directory=~/.vim/tmp 

" status line 
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

"Restore cursor to file position in previous editing session
set viminfo='10,\"100,:20,%,n~/.viminfo
au BufReadPost * if line("'\"") > 0|if line("'\"") <= line("$")|exe("norm '\"")|else|exe "norm $"|endif|endif

"--------------------------------------------------------------------------- 
" Tip #382: Search for <cword> and replace with input() in all open buffers 
"--------------------------------------------------------------------------- 
fun! Replace() 
    let s:word = input("Replace " . expand('<cword>') . " with:") 
    :exe 'bufdo! %s/\<' . expand('<cword>') . '\>/' . s:word . '/ge' 
    :unlet! s:word 
endfun 

"--------------------------------------------------------------------------- 
" Visual Mode Maps
"--------------------------------------------------------------------------- 
" yank a line and go to end of yank
vmap y y`]
" move multiple line up
vmap <C-Up> xkP`[V`]
" move multiple line down
vmap <C-Down> xp`[V`]


"--------------------------------------------------------------------------- 
" USEFUL SHORTCUTS
"--------------------------------------------------------------------------- 

"map space to :
nmap <space> :

" set leader to ,
let mapleader="'"
let g:mapleader="'"

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

" new tab
map <C-t><C-t> :tabnew<CR>
" close tab
map <C-t><C-w> :tabclose<CR> 
" Next Tab - Command right
nmap <C-right> :tabn<cr>
" Previous Tab - Command left
nmap <C-left> :tabp<cr>

" ,/ turn off search highlighting
nmap <leader>/ :nohl<CR>

" Bash like keys for the command line
cnoremap <C-A>      <Home>
cnoremap <C-E>      <End>
cnoremap <C-K>      <C-U>

" ,p toggles paste mode
nmap <leader>p :set paste!<BAR>set paste?<CR>

" allow multiple indentation/deindentation in visual mode
vnoremap < <gv
vnoremap > >gv


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

"-----------------------
" AUTO COMMANDS
"-----------------------
autocmd! bufwritepost .vimrc source ~/.vimrc    " auto reload vimrc when editing it
"autocmd BufEnter * cd %:p:h                     "automatically change current directory to that of the file in buffer
autocmd Bufread,BufNewFile *.as set filetype=actionscript
autocmd BufRead *.php set ft=php.html
autocmd BufNewFile *.php set ft=php.html
autocmd BufRead,BufNewFile jquery.*.js set ft=javascript syntax=jquery

"-----------------------
" VISUAL MODE MAPS
"-----------------------
" yank a line and go to end of yank
vmap y y`]
" move multiple line up
vmap <D-Up> xkP`[V`]
" move multiple line down
vmap <D-Down> xp`[V`]

"--------------------------------------------------------------------------- 
" PROGRAMMING SHORTCUTS
"--------------------------------------------------------------------------- 

" Ctrl-[ jump out of the tag stack (undo Ctrl-])
map <C-[> <ESC>:po<CR>

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
"autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
"autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
"autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags
"autocmd FileType css set omnifunc=csscomplete#CompleteCSS

" use syntax complete if nothing else available
if has("autocmd") && exists("+omnifunc")
  autocmd Filetype *
              \	if &omnifunc == "" |
              \		setlocal omnifunc=syntaxcomplete#Complete |
              \	endif
endif

set cot-=preview "disable doc preview in omnicomplete

" make CSS omnicompletion work for SASS and SCSS
autocmd BufNewFile,BufRead *.scss             set ft=scss.css
autocmd BufNewFile,BufRead *.sass             set ft=sass.css

"--------------------------------------------------------------------------- 
" ENCODING SETTINGS
"--------------------------------------------------------------------------- 
set encoding=utf-8                                  
set termencoding=utf-8
set fileencoding=utf-8
set fileencodings=ucs-bom,utf-8,big5,gb2312,latin1

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

"-----------------------
" ABBREVIATIONS
"-----------------------
ia lorem1 Nulla facilisi. Pellentesque quis eros non ipsum sodales sagittis id vel urna. Nullam vulputate scelerisque tincidunt. Proin sagittis fringilla erat, vitae ultricies ipsum feugiat sit amet. In hac habitasse platea dictumst. In a nisi nulla. Fusce et sem mauris. Nam quis porta risus. Donec ultricies condimentum erat a congue. Praesent euismod tristique lacinia. Sed ut risus enim. Suspendisse ligula magna, tempor eu lacinia ac, adipiscing a ligula.<cr>

ia lorem2 Orbi posuere lorem sit amet dui euismod eu fermentum tellus tincidunt. Proin consequat tellus et odio tincidunt hendrerit. Donec tellus nibh, lobortis id eleifend eu, hendrerit quis augue. Cras sodales scelerisque purus, congue auctor turpis scelerisque vitae. Ut arcu lectus, vestibulum nec rhoncus sed, sodales eu tortor. Nunc id mauris enim, blandit tincidunt lorem. Vivamus porttitor neque a sapien facilisis varius. Integer at venenatis dolor.<cr>Nam sapien lectus, venenatis ac iaculis semper, pellentesque ut turpis. Vivamus ipsum lacus, rhoncus et tempor sed, blandit sed erat. Nam in dolor ac lacus convallis consequat eget eget sem. Sed convallis arcu placerat risus feugiat malesuada. Pellentesque in purus sem, et mollis ligula. Praesent aliquet, ligula sit amet convallis condimentum, quam mi rhoncus nisl, sit amet cursus tellus nunc eu lorem. Donec dapibus lacinia massa in ultrices. Mauris augue orci, pellentesque vel auctor eu, pharetra nec magna. Vestibulum imperdiet eros lectus, at lacinia leo. Fusce sed leo nibh, ut ultricies quam.

ia lorem3 Vestibulum et quam neque, sit amet dapibus mi. Nam vehicula nunc at dolor dapibus ac ornare nibh posuere. Cras tincidunt sodales laoreet. Morbi non massa turpis, eu molestie dui. Vivamus ut dapibus lectus. Pellentesque fermentum, nisi sed volutpat lobortis, arcu ligula porttitor sem, sit amet placerat mauris felis non magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin fermentum purus id mi blandit tempus. In quam justo, vehicula dapibus ornare id, mattis vel purus. Praesent at sem quis mauris mollis venenatis. Quisque rhoncus condimentum augue ac gravida. Mauris velit ipsum, hendrerit eu tincidunt id, congue nec metus.<cr>Mauris sit amet risus turpis. Etiam sagittis vehicula lacus, et varius felis dapibus id. Nulla dictum arcu nec turpis mollis posuere. Sed vehicula consequat quam eu pulvinar. Nullam non mauris id leo malesuada faucibus eu in massa. Nullam a orci ipsum. Proin condimentum sem id felis commodo nec scelerisque orci fringilla. Cras dui turpis, accumsan quis rhoncus vel, posuere sollicitudin diam. In libero diam, sollicitudin at elementum sit amet, ornare sagittis diam. Quisque suscipit nisi et purus lacinia vel elementum dui porttitor. Aenean non metus in eros porta fringilla a sed augue. Etiam tristique rhoncus semper. Integer non leo leo.<cr>Aliquam rutrum felis quis magna dictum vestibulum. Praesent volutpat ante vel velit convallis fringilla. Suspendisse eu sem id metus cursus convallis eu eget quam. Cras consequat placerat velit, sit amet lacinia nibh faucibus vitae. Proin aliquam nulla accumsan leo consequat et tincidunt felis tincidunt. Pellentesque adipiscing, ipsum at accumsan gravida, augue tellus posuere velit, ac molestie eros enim ac orci. Nullam nulla urna, ullamcorper ut feugiat in, accumsan ut erat. Suspendisse id facilisis enim. Cras eleifend, tortor ut consectetur euismod, leo neque facilisis felis, auctor vulputate dolor ligula sit amet ipsum. Quisque convallis, ipsum pharetra faucibus malesuada, leo nibh eleifend justo, at ullamcorper nisi felis at tellus. Nullam interdum viverra mi dignissim tincidunt. Aenean bibendum congue ipsum, id lobortis risus gravida ac.

"-----------------------
" SPELLING
"-----------------------
setlocal spell spelllang=en_us
set spell               "turn on spell checking
"   Correct some spelling mistakes    "
ia teh      the
ia htis     this
ia tihs     this
ia funciton function
ia fucntion function
ia funtion  function
ia retunr   return
ia reutrn   return
ia sefl     self
ia eslf     self
ia widht    width
ia heigth   height

"--------------------------------------------------------------------------- 
" PLUGIN SETTINGS
"--------------------------------------------------------------------------- 

" --- AutoClose - Inserts matching bracket, paren, brace or quote 
" fixed the arrow key problems caused by AutoClose
if !has("gui_running")	
   set term=linux
   imap OA <ESC>ki
   imap OB <ESC>ji
   imap OC <ESC>li
   imap OD <ESC>hi

   nmap OA k
   nmap OB j
   nmap OC l
   nmap OD h
endif

" --- Command-T
let g:CommandTMaxHeight = 15

" --- SuperTab
let g:SuperTabDefaultCompletionType = "context"

" --- EasyMotion
"let g:EasyMotion_leader_key = '<Leader>m' " default is <Leader>w
hi link EasyMotionTarget ErrorMsg
hi link EasyMotionShade  Comment

" --- PowerLine
" let g:Powerline_symbols = 'fancy' " require fontpatcher

" --- Yankring
let g:yankring_history_dir = '~/.vim/'
let g:yankring_history_file = 'yank_history'

