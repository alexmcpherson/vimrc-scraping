"Vimrc -- Author Evan LeCompte
" Set nocompatible first
set nocompatible

set rtp+=~/.vim/bundle/vundle/ 
call vundle#rc()

" Let vundle manage vundle
Bundle 'gmarik/vundle'

" My Bundles here:
"
Bundle 'scrooloose/nerdcommenter'
Bundle 'scrooloose/nerdtree'
"Bundle 'scrooloose/syntastic'
Bundle 'tpope/vim-fugitive'
Bundle 'tpope/vim-markdown'
Bundle 'digitaltoad/vim-jade'
Bundle 'tpope/vim-pastie'
Bundle 'tpope/vim-haml'
Bundle 'L9'
"Bundle 'FuzzyFinder'
"Bundle 'lokaltog/vim-easymotion'
Bundle 'ScrollColors'
"Bundle 'tpope/vim-unimpaired'
Bundle 'tpope/vim-surround'
Bundle 'vim-scripts/mru.vim'
Bundle 'git://git.wincent.com/command-t.git'
Bundle 'timcharper/textile.vim'
Bundle 'altercation/vim-colors-solarized'

set nowrap
set wrapmargin=5
" searches wrap around end of file
set wrapscan
set linebreak
set showbreak=>\
set startofline
" kinda crazy but I like it, allows cursor to move anywhere
set virtualedit=all
" use regex for search
set magic

set history=1000
set autoread

set autowriteall

set mouse=a
set ttymouse=xterm2

set ttimeoutlen=100

set fileencodings=ucs-bom,utf-8,windows-1252,default
set fileformats=unix,dos
set fileformat=unix
set encoding=utf-8
set termencoding=utf-8
" Instantly leave insert mode when pressing <Esc>
" This works by disabling the mapping timeout completely in normal mode,
" and enabling it in insert mode with a very low timeout length.
augroup fastescape
  autocmd!

  set notimeout
  set ttimeout
  set timeoutlen=10

  au InsertEnter * set timeout
  au InsertLeave * set notimeout
augroup END

set iskeyword+=_,$,@,%,# " none of these should be word dividers, so make them not be
set iskeyword-=/
"set lazyredraw
set listchars=tab:>-,trail:-
"hide buffers when not displayed
set hidden

set vb t_vb= " disable any beeps or flashes on error
set ruler  " Show ruler

"maybe these speed things up?
set ttyfast 
"set ttyscroll=1
let loaded_matchparen = 1

set viminfo='20,<50,s10,h,%
"new persistent undo feature (vim 7.3)
set undofile
set undodir=~/.vim/undo

" extended % matching
runtime macros/matchit.vim

" search
set nohls
set incsearch
set showmatch
set ignorecase
set smartcase

"store .swp files in central location
set backupdir=~/.vim-tmp,~/.tmp,~/tmp,/var/tmp,/tmp
set directory=~/.vim-tmp,~/.tmp,~/tmp,/var/tmp,/tmp

" intuitive backspacing in insert mode
set backspace=indent,eol,start

filetype plugin indent on

" identing
set tabstop=8
set shiftwidth=2
set softtabstop=2
set copyindent
set shiftround " when at 3 spaces, and I hit > ... go to 4, not 5
set expandtab
set smarttab

" command mode
set wildmenu
set wildmode=list:longest,full
set wildignore+=*.jpg,*.png,*.gif,*.swf,*.bin,.tmp,.git,.svn,images/**
set wildignorecase

" copy / pasting
set clipboard=unnamed
set clipboard+=unnamed
" make Ctrl-C behave like in windows
vnoremap <C-c> "+y

" {{{ -[ Look ]-
" general
syntax on
set showcmd
set showmode
set number
set foldmethod=marker
set nocursorline
set foldcolumn=2
set background=dark
" colors
set t_Co=256
if &diff
  color inkpot
else
  color xoria256
endif
" }}}

"scroll off settings
set scrolloff=5
set sidescrolloff=7
set sidescroll=1

set shortmess=atI " shorten message prompts a bit
set mousehide "hide mouse when typing

"{{{ statusline setup
set statusline=%{getcwd()}\ %-10F

"display a warning if fileformat isnt unix
set statusline+=%#warningmsg#
set statusline+=%{&ff!='unix'?'['.&ff.']':''}
set statusline+=%*

"display a warning if file encoding isnt utf-8
set statusline+=%#warningmsg#
set statusline+=%{(&fenc!='utf-8'&&&fenc!='')?'['.&fenc.']':''}
set statusline+=%*

"syntastic warnings
set statusline+=%#warningmsg#
set statusline+=%*

set statusline+=%h "help file flag
set statusline+=%y "filetype
set statusline+=%r "read only flag
set statusline+=%m "modified flag

set statusline+=%*


set statusline+=%#warningmsg#
set statusline+=%*

"display a warning if &paste is set
set statusline+=%#error#
set statusline+=%{&paste?'[paste]':''}
set statusline+=%*

set statusline+=%(\ %{fugitive#statusline()}%)

set statusline+=%= "left/right separator
set statusline+=%c, "cursor column
set statusline+=%l/%L "cursor line/total lines
set statusline+=\ %P "percent through file
set laststatus=2
"}}}

" Stop auto-commenting
au FileType * set comments=


"jump to last cursor position when opening a file
"dont do it when writing a commit log entry
autocmd BufReadPost * call SetCursorPosition()
function! SetCursorPosition()
    if &filetype !~ 'commit\c'
        if line("'\"") > 0 && line("'\"") <= line("$")
            exe "normal! g`\""
            normal! zz
        endif
    end
endfunction


"{{{ -[ FileTypes ]-
" Jump to last known cursor position

"json
autocmd BufRead,BufNewFile *.json setfiletype json

" text
autocmd FileType text setlocal textwidth=80

" mail
autocmd FileType mail,human set formatoptions+=t textwidth=72

" html
autocmd BufNewFile *.html  0r ~/.vim/skeleton.html

" PHP
let php_baselib = 1
let php_folding = 0
let php_sql_query = 1
let php_html_in_strings = 1
let php_no_shorttags = 0
let php_sync_method = 1
autocmd FileType php set shiftwidth=2 softtabstop=2 tabstop=2
autocmd FileType php set noet ft=php.html.javascript

" C
autocmd FileType c set expandtab ai shiftwidth=4 softtabstop=4 tabstop=4

" Python
autocmd FileType python let python_highlight_all = 1
autocmd FileType python let python_slow_sync = 1
autocmd FileType python set expandtab ai shiftwidth=4 softtabstop=4 tabstop=4

" LaTeX
autocmd Filetype tex,latex set grepprg=grep\ -nH\ $
autocmd Filetype tex,latex let g:tex_flavor = "latex"

" .Dat (binary, data files)
autocmd BufRead,BufNewFile *.dat set binary noendofline

"}}}

"{{{ -[ Mappings ]-"


"make Y consistent with C and D
nnoremap Y y$

" Wincmd shortcuts
nnoremap <silent> <C-h> :wincmd h<CR>
nnoremap <silent> <C-j> :wincmd j<CR>
nnoremap <silent> <C-k> :wincmd k<CR>
nnoremap <silent> <C-l> :wincmd l<CR>
nnoremap <silent> <F1> :wincmd h<CR>
inoremap <silent> <F1> <esc>:wincmd h<CR>
nnoremap <silent> <F2> :wincmd l<CR>
inoremap <silent> <F2> <esc>:wincmd l<CR>

" taglist
nnoremap <silent> <F8> :TlistToggle<CR>
inoremap <silent> <F8> <esc>:TlistToggle<CR>
nnoremap <silent> <F9> :TlistUpdate<CR>
nnoremap <silent> <F9> :TlistUpdate<CR>

" Nerdtree
nnoremap <silent> <F4> :NERDTreeToggle<CR>
inoremap <silent> <F4> <esc>:NERDTreeToggle<CR>

" :wq shortcuts
nnoremap <silent> <F5> :w<CR>
inoremap <silent> <F5> <esc>:w<CR>
nnoremap <silent> <F6> :wq<CR>
inoremap <silent> <F6> <esc>:wq<CR>
nnoremap <silent> <F7> :wqa<CR>
inoremap <silent> <F7> <esc>:wqa<CR>

" Most Recently Used Files (MRU)
nnoremap <silent> <F12> :MRU<CR>
inoremap <silent> <F12> <esc>:MRU<CR>

" Scroll a bit faster with <C-e> and <C-y>
nnoremap <C-e> 6<C-e>
nnoremap <C-y> 6<C-y>

map <leader>e :e! ~/.vim/vimrc<cr>

" Remove buffer
nnoremap <silent> <LocalLeader>- :bd<CR>

"Django surround plugin mappings
let g:surround_{char2nr("b")} = "{% block\1 \r..*\r &\1%}\r{% endblock %}"
let g:surround_{char2nr("i")} = "{% if\1 \r..*\r &\1%}\r{% endif %}"
let g:surround_{char2nr("w")} = "{% with\1 \r..*\r &\1%}\r{% endwith %}"
let g:surround_{char2nr("c")} = "{% comment\1 \r..*\r &\1%}\r{% endcomment %}"
let g:surround_{char2nr("f")} = "{% for\1 \r..*\r &\1%}\r{% endfor %}"

" }}}

"{{{ -[ Plugins and Scripts ]-
" taglist
let Tlist_Use_Right_Window = 1
let Tlist_Compart_Format = 1
let Tlist_Show_Menu = 1
let Tlist_Exit_OnlyWindow = 1
let tlist_php_settings = 'php;c:class;f:Functions'

"NerdTree settings
"let NERDTreeHighlightCursorline = 1
let NERDTreeChDirMode = 2
let NERDTreeIgnore=['\.db$', '\~$', '\.pyc$', '^__init__\.py$', '\.jpg$', '\.gif$', '\.png$', '\.pdf$', '\.rxvt.*']
let NerdTreeMouseMode = 2

"MRU
let MRU_Add_Menu = 0

" }}}

"{{{ User Commands

" When vimrc is edited, reload it (have yet to see this actually work)
" autocmd! bufwritepost ~/.vimrc source $MYVIMRC

command! Editrc :e $MYVIMRC

command! -nargs=+ Grep :grep -r --include=*.php --exclude-dir=blog --exclude-dir=wp --exclude-dir=phpMyAdmin '<args>' /home/el/daddys

"command! W :w !sudo tee %

comm! W exec 'w !sudo tee % > /dev/null' | e!

function! ShowSpaces(...)
  let @/='\v(\s+$)|( +\ze\t)'
  let oldhlsearch=&hlsearch
  if !a:0
    let &hlsearch=!&hlsearch
  else
    let &hlsearch=a:1
  end
  return oldhlsearch
endfunction

function! TrimSpaces() range
  let oldhlsearch=ShowSpaces(1)
  execute a:firstline.",".a:lastline."substitute ///gec"
  let &hlsearch=oldhlsearch
endfunction

command! -bar -nargs=? ShowSpaces call ShowSpaces(<args>)
command! -bar -nargs=0 -range=% TrimSpaces <line1>,<line2>call TrimSpaces()
nnoremap <Leader>,     :ShowSpaces 1<CR>
nnoremap <Leader>.   m`:TrimSpaces<CR>``
vnoremap <Leader>.   :TrimSpaces<CR>
"}}}
