" An example for a vimrc file.
"
" Maintainer:	Bram Moolenaar <Bram@vim.org>
" Last change:	2008 Jul 02
"
" To use it, copy it to
"     for Unix and OS/2:  ~/.vimrc
"	      for Amiga:  s:.vimrc
"  for MS-DOS and Win32:  $VIM\_vimrc
"	    for OpenVMS:  sys$login:.vimrc

" When started as "evim", evim.vim will already have done these settings.

" Włączenie makra machit.vim
runtime macros/matchit.vim

call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

if v:progname =~? "evim"
  finish
endif

" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

set nobackup		" do not keep a backup file, use versions instead
set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set incsearch		" do incremental searching
set number		" numerowanie wierszy
set colorcolumn=80 " kolorowa linia na 80 kolumnie

" Nie zwracaj uwagi na wielkość liter przy wyszukiwaniu
set ignorecase
" Jeśli wzorzec zawiera duże litery to wielkość liter ma znaczenie
set smartcase

" Niech kursor zawsze otacza kontekst dwóch linii
set scrolloff=2

" Dopełnianie w linii komend
set wildmode=longest,list

set ts=4
set ai
set sts=4
set et
set sw=4
set shiftround
" for wrapping purposes
" set textwidth=79
set nowrap

color desert

" For Win32 GUI: remove 't' flag from 'guioptions': no tearoff menu entries
" let &guioptions = substitute(&guioptions, "t", "", "g")

" Don't use Ex mode, use Q for formatting
map Q gq

" CTRL-U in insert mode deletes a lot.  Use CTRL-G u to first break undo,
" so that you can undo CTRL-U after inserting a line break.
inoremap <C-U> <C-G>u<C-U>

" In many terminal emulators the mouse works just fine, thus enable it.
if has('mouse')
    set mouse=a
endif

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
    syntax on
    set hlsearch
    " without toolbar
    set guioptions-=T
    " without left scrollbar
    set guioptions-=L
    :let did_install_default_menus = 1
endif

""""""
" Przy zawiniętych liniach, przechodzenie między liniami tak jak w zwykłym edytorze
"""""
nnoremap j gj
nnoremap k gk
" TO powoduje, że snipmate się pulta
"vnoremap j gj
"vnoremap k gk
nnoremap <Down> gj
nnoremap <Up> gk
vnoremap <Down> gj
vnoremap <Up> gk
inoremap <Down> <C-o>gj
inoremap <Up> <C-o>gk

" Can start new line in the middle of inserting
inoremap <C-j> <C-o>o

" Get cursor at the end
inoremap <C-l> <C-o>A

" Paste text and select it
nnoremap <expr> g<c-v> 'p`[' . getregtype()[0] . '`]'

" Open fuzzy file finder
nnoremap >f :FufFile<CR>
" recent
nnoremap >r :FufMruFile<CR>
" recent in curent dir
nnoremap >p :FufMruFileInCwd<CR>
" recursive in current dir
nnoremap >t :FufCoverageFile<CR>
" buffers
nnoremap >b :FufBuffer<CR>

let g:fuf_modesDisable = []

" Ctrl-j/k deletes blank line below/above, and Alt-j/k inserts.
nnoremap <silent><C-j> m`:silent +g/\m^\s*$/d<CR>``:noh<CR>
nnoremap <silent><C-k> m`:silent -g/\m^\s*$/d<CR>``:noh<CR>
nnoremap <silent><A-j> :set paste<CR>m`o<Esc>``:set nopaste<CR>
nnoremap <silent><A-k> :set paste<CR>m`O<Esc>``:set nopaste<CR>

" Open vimrc instantly
nnoremap <silent>,ve :e $MYVIMRC<CR>
nnoremap <silent>,vv :vs $MYVIMRC<CR>
nnoremap <silent>,vs :sp $MYVIMRC<CR>
nnoremap <silent>,vt :tabnew $MYVIMRC<CR>

" Tabularize with <Tab>c in visual mode;
vnoremap <Tab>; :Tabularize /;<CR>
vnoremap <Tab>: :Tabularize /:<CR>
vnoremap <Tab>= :Tabularize /=<CR>

" Always change working directory to current file directory
function AlwaysCD()
  if bufname("") !~ "^ftp://"
    lcd %:p:h
  endif
endfunction
"autocmd BufEnter * call AlwaysCD()

" Only do this part when compiled with support for autocommands.
if has("autocmd")

  " Enable file type detection.
  " Use the default filetype settings, so that mail gets 'tw' set to 72,
  " 'cindent' is on in C files, etc.
  " Also load indent files, to automatically do language-dependent indenting.
  filetype plugin indent on

  " Automatically load folds, and others
  "autocmd BufWrite * mkview
  "autocmd BufRead * silent loadview
  set cursorline


  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
  au!

  " For all text files set 'textwidth' to 78 characters.
  "autocmd FileType text setlocal textwidth=78

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  " Also don't do it when the mark is in the first line, that is the default
  " position when opening a file.
  autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif

  autocmd FileType ruby setlocal ts=2 sw=2 tw=0 expandtab
  autocmd FileType eruby setlocal ts=2 sw=2 tw=0 expandtab
  autocmd BufNewFile,BufRead *.json set ft=javascript
  augroup END

  " HTML (tab width 2 chr, no wrapping)
  autocmd FileType html set sw=2
  autocmd FileType html set ts=2
  autocmd FileType html set sts=2
  autocmd FileType html set textwidth=0


  " CSS (tab width 2 chr, wrap at 79th char)
  autocmd FileType css set sw=2
  autocmd FileType css set ts=2
  autocmd FileType css set sts=2
  autocmd FileType css set textwidth=79
  " JavaScript (tab width 4 chr, wrap at 79th)
  autocmd FileType javascript set sw=4
  autocmd FileType javascript set ts=4
  autocmd FileType javascript set sts=4

  autocmd FileType tex,txt set spelllang=inf,pl,en

else

endif " has("autocmd")

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
  command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
		  \ | wincmd p | diffthis
endif

" Plugin delimitmate
let delimitMate_expand_cr = 1
let delimitMate_expand_space = 1

set omnifunc=ft-ruby-omni,ft-xml-omni

let g:rails_default_file='config/database.yml'

augroup mkd
	autocmd BufRead *.mkd set ai formatoptions=tcroqn2 comments=n:&gt;
augroup END

set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_auto_loc_list=1
let g:syntastic_enable_signs=1
let g:syntastic_disabled_filetypes = ['eruby', 'tex', 'js'] " Coś nie działa dobrze jeszcze to

" Ustawienia pluginu parującego cudzysłowy
" let g:delimitMate_expand_space=1
" let g:delimitMate_expand_cr=1

"let foldmethod = "syntax"
"let foldnestmax = 1
" Co ma być parowane
" Tutaj moje skrypty do testowania ;)
"
highlight STANDOUT term=bold cterm=bold gui=bold

" Pokaż znaki tab i końca linii
set listchars=tab:▸\ ,eol:¬

let g:rubycomplete_buffer_loading = 1
let g:rubycomplete_classes_in_global = 1

let g:syntastic_disabled_filetypes = ['css']

" Show filename on status-line
set statusline=%<%f\ %h%m%r%=%-14.(%l,%c%V%)\ %P

nnoremenu 20.355 &Edycja.W&klej\ i\ wetnij<Tab>p`[v`]= p`[v`]=<CR>

nmap =]p ]p`[v`]=<CR>
nmap =[p [p`[v`]=<CR>
nmap =p p`[v`]=<CR>
nmap =P P`[v`]=<CR>

command W :execute ':w !sudo tee % > /dev/null' | :edit!
command RemoveTrailingWhitespaces :%s/\s\+$//

" Strip trailing whitespace
"function! <SID>StripTrailingWhitespaces()
function! StripTrailingWhitespaces()
    " Preparation: save last search, and cursor position.
    let _s=@/
    let l = line(".")
    let c = col(".")
    " Do the business:
    %s/\s\+$//e
    " Clean up: restore previous search history, and cursor position
    let @/=_s
    call cursor(l, c)
endfunction
" autocmd BufWritePre * :call <SID>StripTrailingWhitespaces()

" Set preview window to 20 rows (fugitive)
set previewheight=20

let g:indent_guides_start_level=2
let g:indent_guides_guide_size=1
let g:UltiSnipsEditSplit="vertical"
