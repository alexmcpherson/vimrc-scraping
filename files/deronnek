" dseelig vimrc - 2005.06.20 
" deronnek vimrc - 2007.01.22 
" stuff for folds. 
" set paste -- this makes macros fail
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()
set pastetoggle=<F5>
set nocompatible
set foldenable    

"hi Folded ctermfg=DarkGreen ctermbg=Black
hi Folded ctermfg=DarkGreen 
set foldmethod=marker
set foldmarker={{{,}}}

syntax on
set t_Co=256
if &t_Co > 8        " if terminal supports colors
   colors cdefault
endif

":filetype on
":autocmd filetype *   set nocindent
":autocmd filetype c,h set formatoptions=cq cindent foldmethod=syntax " from GK

set tabstop=2       " change to 8 when reading old files
set shiftwidth=2
set expandtab       
set nowrap

"set foldmethod=indent " usually i do {{{,}}} 
"set foldexpr=getline(v:lnum)[0]==\"\\t\"    " everything that starts with a tab
"set foldexpr=getline(v:lnum)[0]==\"\^class\"    " everything that starts with a tab
"set foldnestmax=2   
"
"if you enter gqap in command mode it will re-align the current paragraph
"set textwidth=80  

" give the GUI a black background:
" highlight Normal guibg=Black guifg=White 
" or give it different settings: 
"if has("gui_running")
"    set bg=light                
"    set guifont=courier\ new   
"else
"    set bg=light
"endif
"set guioptions='gmrLtT'    " hwindows default options
"set guioptions='agimrLtT'   " gtk athena defaults
"set guioptions='agmrLtT'   " gtk athena defaults
set guioptions-=T   " get rid of the toolbar

set ruler           " Turn the ruler on
set nohlsearch      " Highlighting found search items is annoying
set incsearch       " Show search matches as you type
set nocompatible    " vi compatibility is weak
set autoindent      " auto-indenting 
set smartindent     " auto-indenting 
set history=100     " keep 100 commands in history
set undolevels=1000 " use many muchos levels of undo
set so=5            " start scrolling 5 lines before the end
set bs=2            " backspace over whatever you want to
set showmatch       " cursor will jump to maching ({[
"set virtualedit=all " can go anywhere in command mode... weird!


" When editing a file, always jump to the last cursor position. YES!
autocmd BufReadPost *
    \ if line("'\"") > 0 && line ("'\"") <= line("$") |
    \   exe "normal g'\"" |
    \ endif

autocmd BufEnter *.py, set et ts=4 sw=4 wm=8 autoindent

" GK's preferred latex colors (must have .vim/colors/latex.vim file)
":autocmd filetype tex :color latex
 
"KDR's preferred latex colors
:autocmd filetype tex :color kdrtex
"
" because i don't understand terminal settings but i want to see what it said.
" set title
" set titleold=Cygterm\ -\ PuttyCYG
" set paste

" abbreviations
:ab #p ################################################################################
:ab #c --------------------------------------------------------------------------------
:ab #b /*******************************************************************************
:ab #e *******************************************************************************/
:ab #d #define
:ab #i #include

iab YDATE <C-R>=strftime("%a %b %d %T %Z %Y")<CR>
iab DATE  <C-R>=strftime("%Y.%m.%d")<CR>

:map = gqap
" i don't ever use F1 to get to help. but i do hit it while trying to ESC.
:map <F1> <esc>
:imap <F1> <esc>

" append date after the cursor when hitting F2 (command-mode):
:map <F2> a<C-R>=strftime("%c")<CR><Esc>
" Make % skip commented regions
:source /usr/share/vim/addons/plugin/matchit.vim

":function Roundf(n)
": let l = search("\d*","cn",line(".")) 
": let line = getline(".")
": let repl = substitute(line, '\(\d*\.\d*\)', round(submatch(0)), "")
": echo round(0.089)
":endfunction
" useful commands:
" remove CR from a dos file:
" :%s/{Ctrl+V}{Ctrl+M}//{Enter}
