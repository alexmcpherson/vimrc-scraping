" Pathogen settings, which must come before file type detection
runtime bundle/vim-pathogen/autoload/pathogen.vim
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" File-type options
filetype on
filetype plugin on
filetype indent on

" General Settings
set nocompatible                " State this again for systems not setting this
set backspace=2                 " Allow backspacing over everything in Insert mode
set history=50                  " Keep 50 lines of ":" command history
set winaltkeys=no               " Do not enable Alt+* for GUI menus

" Map leader
let mapleader = ','
let g:mapleader = ','

" Highlighting stuff
syntax on                       " Highlight for syntax
set hlsearch                    " Highlight the search result
set listchars=tab:._,trail:!    " Highlight tabs and trailing spaces
set list

set cursorline                  " Highlight the line where the cursor is
set t_Co=256                    " Enable 256 colors for better display

" We should move these things to the colorscheme files ...
" Tabline = the line with the label of the tabs in the text mode
hi tabline ctermfg=black ctermbg=gray
hi tablinesel ctermfg=white ctermbg=black
hi search ctermfg=Black ctermbg=Yellow gui=bold guifg=Black guibg=Red

" Tab, indent, and wrapping
" 4 spaces wide and auto tab->space
set shiftwidth=4
set tabstop=4
set expandtab

" Option 'softtabstop' emulates shorter tabs by inserting spaces.
" For example: softtabstop=4
" 1 tab  => ____
" 2 tabs => (  tab )
" 3 tabs => (  tab )____
" This style, although maintaining compatiblity with 8-space tabs,
" are extremely bad due to its mixing approach
" Please do not use this option anyway!

"set softtabstop=4

set textwidth=120               " Always limit the width of text to 120

set smartindent

" Spell checking - only with GUI.
"     Code with spell check enabled is annoying, a lot of red blocks
"     But within GUIs errors are underlined and look great.
if has("gui_running")
    set spelllang=en
    set spell
endif

" Omni-complete
" /usr/dict/words does not exist anymore.
" But it is a good thing, we should implement
" something like project-adaptive dictionary here

" set dictionary=/usr/dict/words

" Vim Appearance
set modeline            " Detect mode line
set ruler               " Show the line and column number of the cursor position
set number              " Display line numbers
set nowrap              " Do not wrap on long lines

" Others
set visualbell t_vb=    " sychen(20110106): disable bells
set autochdir           " Change directory automatically
set smartcase           " Smarter search
set ignorecase
set pastetoggle=<F2>    " Insert mode <--> paste mode

set backup
set backupext=.bak

set shell=/bin/sh       " Prevent from breakage if tcsh is used

" ===================================
" Key mappings
" ===================================

" Make life easier
" ================

" make ; to be :
nnoremap ;; ;
nnoremap ; :

" zz = move the window to center the cursor
nnoremap n nzz
nnoremap N Nzz
" */# jump to the next, use N to jump back (the origin one)
nnoremap * *Nzz
nnoremap # #Nzz
nnoremap g* g*zz
nnoremap g# g#zz

" Ctrl-C becomes Esc
map!  <ESC>

" Fast saving
nmap <leader>w :w!<cr>

" Fast editing of the .vimrc file
nmap <leader>e :e! ~/.vim/vimrc<cr>
" When vimrc is edited, reload it
autocmd! bufwritepost vimrc source ~/.vim/vimrc

" Team vimrc
" ====================

"toggle on/off highlightsearch
map <F8> :set hls!<bar>set hls?<cr>
map <F9> :set paste!<bar>set paste?<cr>
" You can toggle the syntax on/off with this command
map <F7> :if has("syntax_items") <Bar> syntax off <CR> 
         \else <Bar> syntax on <Bar> 
         \endif <CR>

" Grep the word under the cursor
" ==============================

map <F4> :execute "vimgrep /" . expand("<cword>") . "/j **" <Bar> cw<CR>
map <S-F4> :execute "vimgrep /" . expand("<cword>") . "/j *" <Bar> cw<CR>



" Move between windows
" ====================
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l

" Browser-like tab browsing
" =========================

inoremap <a-n> <ESC>:tabnew<CR>
nnoremap <a-n> <ESC>:tabnew<CR>
vnoremap <a-n> <ESC>:tabnew<CR>
cnoremap <a-n> <ESC>:tabnew<CR>

if has("gui_running") " Standalone VIM: we can use Alt-N
    inoremap <a-1> <ESC>1gt
    inoremap <a-2> <ESC>2gt
    inoremap <a-3> <ESC>3gt
    inoremap <a-4> <ESC>4gt
    inoremap <a-5> <ESC>5gt
    inoremap <a-6> <ESC>6gt
    inoremap <a-7> <ESC>7gt
    inoremap <a-8> <ESC>8gt
    inoremap <a-9> <ESC>9gt
    inoremap <a-0> <ESC>10gt
    nnoremap <a-1> <ESC>1gt
    nnoremap <a-2> <ESC>2gt
    nnoremap <a-3> <ESC>3gt
    nnoremap <a-4> <ESC>4gt
    nnoremap <a-5> <ESC>5gt
    nnoremap <a-6> <ESC>6gt
    nnoremap <a-7> <ESC>7gt
    nnoremap <a-8> <ESC>8gt
    nnoremap <a-9> <ESC>9gt
    nnoremap <a-0> <ESC>10gt
    vnoremap <a-1> <ESC>1gt
    vnoremap <a-2> <ESC>2gt
    vnoremap <a-3> <ESC>3gt
    vnoremap <a-4> <ESC>4gt
    vnoremap <a-5> <ESC>5gt
    vnoremap <a-6> <ESC>6gt
    vnoremap <a-7> <ESC>7gt
    vnoremap <a-8> <ESC>8gt
    vnoremap <a-9> <ESC>9gt
    vnoremap <a-0> <ESC>10gt
    cnoremap <a-1> <ESC>1gt
    cnoremap <a-2> <ESC>2gt
    cnoremap <a-3> <ESC>3gt
    cnoremap <a-4> <ESC>4gt
    cnoremap <a-5> <ESC>5gt
    cnoremap <a-6> <ESC>6gt
    cnoremap <a-7> <ESC>7gt
    cnoremap <a-8> <ESC>8gt
    cnoremap <a-9> <ESC>9gt
    cnoremap <a-0> <ESC>10gt
else                        " Inside a terminal, alt-N may be used, use ctrl-n instead
    inoremap <c-1> <ESC>1gt
    inoremap <c-2> <ESC>2gt
    inoremap <c-3> <ESC>3gt
    inoremap <c-4> <ESC>4gt
    inoremap <c-5> <ESC>5gt
    inoremap <c-6> <ESC>6gt
    inoremap <c-7> <ESC>7gt
    inoremap <c-8> <ESC>8gt
    inoremap <c-9> <ESC>9gt
    inoremap <c-0> <ESC>10gt
    nnoremap <c-1> <ESC>1gt
    nnoremap <c-2> <ESC>2gt
    nnoremap <c-3> <ESC>3gt
    nnoremap <c-4> <ESC>4gt
    nnoremap <c-5> <ESC>5gt
    nnoremap <c-6> <ESC>6gt
    nnoremap <c-7> <ESC>7gt
    nnoremap <c-8> <ESC>8gt
    nnoremap <c-9> <ESC>9gt
    nnoremap <c-0> <ESC>10gt
    vnoremap <c-1> <ESC>1gt
    vnoremap <c-2> <ESC>2gt
    vnoremap <c-3> <ESC>3gt
    vnoremap <c-4> <ESC>4gt
    vnoremap <c-5> <ESC>5gt
    vnoremap <c-6> <ESC>6gt
    vnoremap <c-7> <ESC>7gt
    vnoremap <c-8> <ESC>8gt
    vnoremap <c-9> <ESC>9gt
    vnoremap <c-0> <ESC>10gt
    cnoremap <c-1> <ESC>1gt
    cnoremap <c-2> <ESC>2gt
    cnoremap <c-3> <ESC>3gt
    cnoremap <c-4> <ESC>4gt
    cnoremap <c-5> <ESC>5gt
    cnoremap <c-6> <ESC>6gt
    cnoremap <c-7> <ESC>7gt
    cnoremap <c-8> <ESC>8gt
    cnoremap <c-9> <ESC>9gt
    cnoremap <c-0> <ESC>10gt
endif

" Show syntax highlighting groups for word under cursor
" =====================================================
nmap <leader>z :call <SID>SynStack()<CR>
function! <SID>SynStack()
  if !exists("*synstack")
    return
  endif
  echo map(synstack(line('.'), col('.')), 'synIDattr(v:val, "name")')
endfunc

" ===================================
" File encoding
" ===================================

" set fileencodings=ucs-bom,utf-8,default,latin1 (default value)
set fileencodings=utf-8,big5,gb2312,gb18030,gbk,ucs-bom,default
" set encoding=utf-8 (default value)
set termencoding=utf-8      " Required in console (it's default in gtk2/macvim)

" ===================================
" Plugins
" ===================================

" NERDTree
nnoremap <silent> <F5> :NERDTreeToggle<CR>
let NERDTreeIgnore=['\.o$', '\.a$', '\.bak$', '\~$', '\.pyc$']
let NERDTreeWinPos='right'
let NERDTreeShowBookmarks=1

" Disable NERDTreeDirArrows in Linux, because the font
" does not have the arrow symbol
if has("unix")
    let s_uname = system("uname")
    if s_uname == "Linux\n"
        let NERDTreeDirArrows=0
    endif
endif

" Taglist
nnoremap <silent> <F12> :TlistToggle<CR>
let Tlist_Window_Exit_Only_Window = 1
let Tlist_Show_One_File =1
let Tlist_Auto_Highlight_Tag = 1

" The system default "ctags" is not compatible with taglist.
" Use homebrew to install a latest version of ctags
" And use the lines below to locate the executable.
" NOTE: Adjusting ordering of elements in $PATH is a way to do,
"       but different tools may require a different order.
"       That is hard to maintain.

if has("mac")
    let TList_CTags_Cmd="/usr/local/bin/ctags"
endif

" Tagbar
if has("mac")
    let g:tagbar_ctags_bin = "/usr/local/bin/ctags"
endif
nnoremap <silent> <F3> :TagbarToggle<CR>
let g:tagbar_left = 1

" Matchit
" =======

source $VIMRUNTIME/macros/matchit.vim

" ===============================
" Per Language Settings
" ===============================

" Python
let python_highlight_all = 1

" XML
let g:xml_syntax_folding = 1
au FileType xml setlocal foldmethod=syntax

" Verilog
au!  BufEnter   *.vh        set filetype=verilog
au BufReadPost * if exists("b:current_syntax")
au BufReadPost *   if b:current_syntax == "verilog"
au BufReadPost *     let c_comment_strings = 1
au BufReadPost *     let verilog_no_bracket_error = 0
au BufReadPost *     let verilog_minlines = 200
au BufReadPost *     let verilog_no_force_sync = 1
au BufReadPost *     let b:verilog_indent_verbose = 1
au BufReadPost *     let b:verilog_indent_width = 4
au BufReadPost *   endif
au BufReadPost * endif

" C/C++
au FileType c set formatoptions=croql cindent shiftwidth=4
au FileType c set cinoptions={.5s,:.5s,+.5s,t0,g0,^-2,e-2,n-2,p2s,(0,=.5s 
au FileType cpp set formatoptions=croql cindent shiftwidth=4
au FileType cpp set cinoptions={.5s,:.5s,+.5s,t0,g0,^-2,e-2,n-2,p2s,(0,=.5s 

" ===============================
" Per Host Settings
" ===============================
if filereadable("~/.vim/vimrc-local")
    source "~/.vim/vimrc-local"
endif

