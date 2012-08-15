" hSATAC's vimrc
" Ash Wu (aka. cAt) <hsatac@gmail.com>
" Fork me on GITHUB  https://github.com/hSATAC/vimrc

" read https://github.com/hSATAC/vimrc/blob/master/README.md for more info


" For pathogen.vim: auto load all plugins in .vim/bundle
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" General Settings

set nocompatible	" not compatible with the old-fashion vi mode
set bs=2		    " allow backspacing over everything in insert mode
set history=50		" keep 50 lines of command line history
set ruler	    	" show the cursor position all the time
set autoread		" auto read when file is changed from outside
set nu              " display line number
set ts=4            " tabstop 4
set wak=no          " disable GUI alt menu

filetype on           " Enable filetype detection
filetype indent on    " Enable filetype-specific indenting
filetype plugin on    " Enable filetype-specific plugins


" auto reload vimrc when editing it
autocmd! bufwritepost .vimrc source ~/.vimrc


syntax on		" syntax highlight
set hlsearch		" search highlighting

if has("gui_running")	" GUI color and font settings
  if has("gui_gtk2")
    set guifont=Bitstream\ Vera\ Sans\ Mono\ 13
  else
    set guifont=Bitstream_Vera_Sans_Mono:h13
  endif
  set background=dark 
  set t_Co=256          " 256 color mode
  set cursorline        " highlight current line
  colors railscasts
else
  " terminal color settings
  colors vgod
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

" disable sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

" TAB setting{
set expandtab        "replace <TAB> with spaces
set softtabstop=2
set shiftwidth=2

au FileType Makefile set noexpandtab
"}      							

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


" C/C++ specific settings
autocmd FileType c,cpp,cc  set cindent comments=sr:/*,mb:*,el:*/,:// cino=>s,e0,n0,f0,{0,}0,^-1s,:0,=s,g0,h1s,p2,t0,+2,(2,)20,*30

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
  " USEFUL SHORTCUTS
  "--------------------------------------------------------------------------- 
  " set leader to ,
  let mapleader=","
  let g:mapleader=","

  "replace the current word in all opened buffers
  map <leader>r :call Replace()<CR>

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
  map <S-J> gT
  " go to next tab
  map <S-K> gt
  map <C-Tab> gt

  " new tab
  map <C-t><C-t> :tabnew<CR>
  " close tab
  map <C-t><C-w> :tabclose<CR> 

  if(has("gui_running") && !has("mac")) " gvim win 32 and gvim linux
    map ÷ :tabclose<CR> 
  endif
  if(has("gui_macvim") && !has("gui_running")) " macvim console
    map w :tabclose<CR>
  endif

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



  " enable omni completion. (ctrl-x ctrl-o)
  set cot=menuone,preview
  autocmd insertleave * if pumvisible() == 0|pclose|endif
  autocmd filetype html,markdown setlocal omnifunc=htmlcomplete#Completetags
  autocmd filetype javascript setlocal omnifunc=javascriptcomplete#CompleteJS
  autocmd filetype python setlocal omnifunc=pythoncomplete#Complete
  autocmd filetype xml setlocal omnifunc=xmlcomplete#completetags
  autocmd filetype css set omnifunc=csscomplete#CompleteCSS
  autocmd filetype c set omnifunc=ccomplete#Complete
  autocmd filetype java set omnifunc=javacomplete#Complete
  autocmd filetype php set omnifunc=phpcomplete#CompletePHP
  autocmd FileType ruby set omnifunc=rubycomplete#Complete

  " use syntax complete if nothing else available
  if has("autocmd") && exists("+omnifunc")
    autocmd Filetype *
          \	if &omnifunc == "" |
          \		setlocal omnifunc=syntaxcomplete#Complete |
          \	endif
  endif


  " make CSS omnicompletion work for SASS and SCSS
  autocmd BufNewFile,BufRead *.scss             set ft=scss.css
  autocmd BufNewFile,BufRead *.sass             set ft=sass.css

  "--------------------------------------------------------------------------- 
  " ENCODING SETTINGS
  "--------------------------------------------------------------------------- 

  set encoding=utf-8
  set fileencodings=utf-8,chinese,latin-1
  "if has("win32")
  "    set fileencoding=chinese
  "else
  "    set fileencoding=utf-8
  "endif
  set fileencoding=utf-8
  source $VIMRUNTIME/delmenu.vim
  source $VIMRUNTIME/menu.vim
  "language messages zh_TW.utf-8

  "--------------------------------------------------------------------------- 
  " PLUGIN SETTINGS
  "--------------------------------------------------------------------------- 

  " --- AutoClose - Inserts matching bracket, paren, brace or quote 
  " fixed the arrow key problems caused by AutoClose
  if !has("gui_running")	
    set term=linux
    set t_k1=[11~
    set t_k2=[11~
    set t_k3=[11~
    set t_k4=[11~
    imap OA <ESC>ki
    imap OB <ESC>ji
    imap OC <ESC>li
    imap OD <ESC>hi

    nmap OA k
    nmap OB j
    nmap OC l
    nmap OD h
    if $TERM =~ 'xterm'
      set <F1>=OP
      set <F2>=OQ
      set <F3>=OR
      set <F4>=OS
      set <Home>=OH
      set <End>=OF
    endif
    if $TERM =~ 'screen'
      set <F1>=OP
      set <F2>=OQ
      set <F3>=OR
      set <F4>=OS
    endif
  endif


  " --- SuperTab
  "let g:SuperTabDefaultCompletionType = "context"
  let g:SuperTabDefaultCompletionType = "<c-x><c-o>"

  " --- Command-T
  let g:CommandTMaxHeight = 15
  if(has("gui_running")) 
    if(has("win32")) " win32 gvim
      map <A-t> :CommandTFlush<CR>\|:CommandT<CR>
    elseif(has("mac")) "mac gvim
      map <D-t> :CommandTFlush<CR>\|:CommandT<CR>
    else " linux gvim
      map ô :CommandTFlush<CR>\|:CommandT<CR>
    endif
  endif
  if(!has("gui_running")) 
      map t :CommandTFlush<CR>\|:CommandT<CR>
  endif
  " double percentage sign in command mode is expanded
  " to directory of current file - http://vimcasts.org/e/14
  cnoremap %% <C-R>=expand('%:h').'/'<cr>

  map <leader>f :CommandTFlush<cr>\|:CommandT<cr>
  map <leader>F :CommandTFlush<cr>\|:CommandT %%<cr>

  " switch between files
  nnoremap <leader><leader> <c-^>

  " --- taglist
  nmap <silent><F8> :TlistToggle<CR>
  imap <silent><F8> <C-o>:TlistToggle<CR>
  let Tlist_Use_SingleClick = 1
  let Tlist_Use_Right_Window = 1
  let Tlist_Show_One_File = 1
  let tlist_php_settings = 'php;c:class;d:constant;f:function'
  " --- tagbar
  nnoremap <silent><F7> :TagbarToggle<CR>
  let g:tagbar_autofocus = 1

  " --- nerdtree
  nnoremap <silent> <F1> :NERDTreeToggle<CR>

  " --- Zoom.vim

  if(has("gui_running") && has("win32")) " gvim win 32
    map <C-kPlus> :ZoomIn<CR>
    map <C-kMinus> :ZoomOut<CR>
    map <C-k0> :ZoomReset<CR>
  endif
  if(has("gui_macvim") && !has("gui_running")) " macvim console
  endif
  
  " --- Gitv.vim
  let g:Gitv_OpenHorizontal = 1
