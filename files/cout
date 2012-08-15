" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

set backup                       " keep a backup file
set viminfo='20,\"50             " read/write a .viminfo file, don't store more
			                           " than 50 lines of registers
set history=50                   " keep 50 lines of command line history
set ruler                        " show the cursor position all the time
set bs=2                         " always backspace
map Q gq                         " Don't use Ex mode, use Q for formatting
set hlsearch                     " Highlihting the last used search pattern
set incsearch                    " Incremental searching
set restorescreen                " Restore the screen at exit
set textwidth=72                 " Limit the width of text
set ls=2                         " Always display the status line
set wildmenu
set wildmode=longest:full
set showmatch
set sbr="+++ "

if version > 600
set fo=cqrtn                     " smart formatting of comments
else
set fo=cqrt                      " smart formatting of comments
endif

" source ~/.vim/mousedetect.vim
" if mousedetected
  set mouse=a
  set mousemodel=popup           " Turn on the popup menu
  set mousefocus                 " Use the mouse to focus windows
  set mousehide                  " Hide the mouse cursor when the user types
  " set selectmode=mouse,key,cmd " Use both mouse and shift keys to select
  " map <MouseDown> <C-Y>
  " map <S-MouseDown> <C-U> 
  " map <MouseUp> <C-E>
  " map <S-MouseUp> <C-D>
" endif 
  
set pastetoggle=<F10>

" Set misc. gvim options
set guifont=*vga*

" Make p in Visual mode replace the selected text with the "" register.
vnoremap p <Esc>:let current_reg = @"<CR>gvdi<C-R>=current_reg<CR><Esc>

if has("autocmd")
  filetype on

  if version >= 600
    filetype plugin on
    filetype indent on
  endif

  " ChangeLog settings
  au FileType changelog set tw=66 noet preserveindent copyindent

  " In text files, always limit the width of text to 78 characters
  au BufNewFile,BufRead *.txt set tw=78
  au BufNewFile,BufRead *.txt set ft=text
  au FileType text set autoindent nosmartindent

  au FileType ruby set tw=72

  " Doxygen comment indentation fixes
  au FileType cpp set comments^=sr:/*!,m:*!,ex:*/,://!

  " Set certin files to .cpp style
  au BufNewFile,BufRead *.ipp set ft=cpp
  au BufNewFile,BufRead *.swig set ft=cpp
  au BufNewFile,BufRead *.i set ft=cpp
  au BufNewFile,BufRead *.cxx set ft=cpp

  " Some C++ abbreviations
  au FileType cpp ia cin std::cin
  au FileType cpp ia cout std::cout
  au FileType cpp ia cerr std::cerr
  au FileType cpp ia endl std::endl
  " au FileType cpp ia std::cin std::cin
  " au FileType cpp ia std::cout std::cout
  " au FileType cpp ia std::cerr std::cerr
  " au FileType cpp ia std::endl std::endl
  " au FileType cpp ia vector std::vector

  " Mutt settings
  au FileType mail set ai et list tw=72
  au FileType mail set listchars=tab:>>,trail:.
  au FileType mail set comments=fb:*,fb:-,nb:>
  au FileType mail set fo=cqrtn
  au FileType mail set nosmartindent

  " Magicpoint settings
  au BufNewFile,BufRead *.mgp.m4 set ft=mgp
  au BufNewFile,BufRead *.mgp.rpp set ft=mgp
  au FileType mgp set list noet
  au FileType mgp set listchars=tab:->

  " BSM
  au BufNewFile,BufRead *.bsm set ft=conf

  " Make sure we use tabs with Makefiles
  " au BufRead *akefile* set noet
  " au BufRead *akefile* set noautoindent
  au BufNewFile,BufRead *user_customizations*.GNU set ft=make
  au BufNewFile,BufRead *makeinclude.macros set ft=make
  au BufNewFile,BufRead need.macros set ft=make
  au BufNewFile,BufRead *akefile* set ft=make
  au FileType make set noet
  au FileType make set noai

  " Only use C-style indenting for C/C++ files
  au FileType c,cpp,java,idl,swig,i,yxx set cin
  au BufNewFile,BufRead *.pidl set ft=idl

  " Highlight comma and equal in .FIX files
  " TODO: This doesn't work quite right for files without the .fix extension
  au BufNewFile,BufRead *.fix set ft=fix
  au BufNewFile,BufRead traffic_*.log set ft=fix

  " When editing a file, always jump to the last cursor position.
	au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$") | exe "normal g'\"" | endif

  " set c_comment_strings
  " set c_space_errors
  " set c_ansi_constants
endif

if has("syntax")
  syntax on                     " Syntax highlighting
endif

" C-style comment-in and comment-out
map ,q 0i/* <ESC>A */<ESC>j
map ,Q 0xxx$xxxj

" Some programming shortcuts
" TODO: These don't work with Ctrl-O
" map ,if koif()<CR>{<CR>}<ESC>kk$hhi
" map ,for kofor(;;)<CR>{<CR>}<ESC>kk$hhi
" map ,elif oslse<CR>{<CR><ESC>O
abbreviate #i #include
abbreviate #d #define
abbreviate #p #pragma
abbreviate #f #ifdef
abbreviate #e #endif

" Make home/end work
map <ESC>[H <Home>
map <ESC>[F <End>
map! <ESC>[H <Home>
map! <ESC>[F <End>

" Map the delete key and the backspace key
map <ESC>[3~ x
map <C-?> <C-H>
map! <C-?> <C-H>
map! <C-?> <C-H>

" Disable shift-up and shift-down (it's annoying)
map <S-Up> <Up>
map <S-Down> <Down>
map! <S-Up> <Up>
map! <S-Down> <Down>

" Map Up/Down to 'screen up' and 'screen down'
map <Up> gk
map <Down> gj

" Set ATD-conforming indenting
set ts=2
set sw=2
set et
set cino=g0,t0,+2,(4,u4,)
set smartindent

" Here are the colors
" hi normal ctermfg=grey ctermbg=none guifg=grey guibg=black
hi normal cterm=none guifg=grey guibg=black
hi comment ctermfg=lightblue ctermbg=none
hi visual guifg=grey guibg=black
hi statement ctermfg=darkgreen ctermbg=none gui=none cterm=none
hi search gui=none cterm=none ctermfg=black ctermbg=cyan guifg=black guibg=cyan
hi constant gui=none cterm=none guifg=magenta3
hi nontext term=bold cterm=none ctermfg=blue gui=none guifg=blue
hi special cterm=none ctermfg=darkmagenta
hi preproc cterm=none ctermfg=darkmagenta
hi function cterm=none ctermfg=darkcyan
hi constant cterm=none ctermfg=darkred
hi type cterm=none
" hi identifier cterm=none ctermfg=brown
hi identifier cterm=none ctermfg=darkmagenta

" map ; :%s:::g<Left><Left><Left>

let g:man_split=1 " Split horizontally

" let g:miniBufExplMapWindowNavArrows = 1

" Map H to toggle search highlighting
" map H :let &hlsearch = !&hlsearch<CR>
map H :noh<CR>

let ruby_minlines = 100
let showmarks_enable=0

let CVSCommandDiffOpt="u"

set bg=light

let perl_fold=1
set foldlevel=2
