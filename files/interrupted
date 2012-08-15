""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Pluginloader
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

call pathogen#infect()
call pathogen#helptags()


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" GUI
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" enable automatic title setting for terminals
set title
set titleold="Terminal"
set titlestring=%F

set guioptions=aegirtc
set gcr=a:blinkon0
if has("gui_running")
  set cursorline
endif
set ttyfast

" GUI Tab settings
function! GuiTabLabel()
  let label = ''
  let buflist = tabpagebuflist(v:lnum)
  if exists('t:title')
    let label .= t:title . ' '
  endif
  let label .= '[' . bufname(buflist[tabpagewinnr(v:lnum) - 1]) . ']'
  for bufnr in buflist
    if getbufvar(bufnr, '&modified')
      let label .= '+'
      break
    endif
  endfor
  return label
endfunction
set guitablabel=%{GuiTabLabel()}

" Remember cursor position
au BufReadPost * 
\ if line("'\"") > 1 && line("'\"") <= line("$") | 
\ exe "normal! g`\"" |
\ endif

" Menus I like :-)
" This must happen before the syntax system is enabled
aunmenu Help.
aunmenu Window.
let no_buffers_menu=1
set mousemodel=popup

colorscheme molokai
set guifont=Ubuntu\ Mono\ 14

" Make the command line one line high
set showcmd
set cmdheight=1
set laststatus=2

function! SyntaxItem()
  return synIDattr(synID(line("."),col("."),1),"name")
endfunction
set statusline+=%(%3p\ %%\ %9(%3.6l,%-2v%)\ %10f%M\ (%{&ff})\ %r%h%w%)
set statusline+=\ %=%(%-10.{SyntaxItem()}\ %{fugitive#statusline()}%)
set number

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Indentsettings
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" go with smartindent if there is no plugin indent file.
" but don't outdent hashes
set smartindent
inoremap # X#

" Tab Settings
set smarttab
set tabstop=4


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Syntax
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

autocmd BufEnter * :syntax sync fromstart

" Better Search
set hlsearch
set incsearch

" Enable python folding
let g:pymode_folding = 0

filetype plugin indent on
syntax on

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Filesettings
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

let NERDTreeIgnore=['\~$', '\.pyc$', '\.pyo$', '\.class$',
\                   'pip-log\.txt$', '\.o$']
let g:netrw_list_hide='^\.,.\(pyc\|pyo\|o\)$'

" Enable hidden buffers
set hidden

" utf-8 default encoding
set enc=utf-8

" prefer unix over windows over os9 formats
set fileformats=unix,dos,mac

" No Compatibility. That just sucks
" especially annoying on redhat/windows/osx
set nocompatible
set backspace=indent,eol,start

" Better modes.  Remeber where we are, support yankring
set viminfo=!,'100,\"100,:20,<50,s10,h,n~/.viminfo

" customize the wildmenu
set wildmenu
set wildignore=*.dll,*.o,*.pyc,*.bak,*.exe,*.jpg,*.jpeg,*.png,*.gif,*$py.class
set wildmode=list:full

" change working directory automatically
set autochdir

" Move Backup Files to ~/.vim/sessions
set backupdir=~/.vim/sessions
set dir=~/.vim/sessions


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Keymappings
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

let mapleader = ","

" quicker window switching
nnoremap <silent> <C-h> <C-w>h
nnoremap <silent> <C-j> <C-w>j
nnoremap <silent> <C-k> <C-w>k
nnoremap <silent> <C-l> <C-w>l
nnoremap <silent> <C-Left> <C-w>h
nnoremap <silent> <C-Down> <C-w>j
nnoremap <silent> <C-Up> <C-w>k
nnoremap <silent> <C-Right> <C-w>l

" arrow keys move visible lines
inoremap <silent> <Down> <C-R>=pumvisible()
      \ ? "\<lt>Down>" : "\<lt>C-O>gj"<CR>
inoremap <silent> <Up> <C-R>=pumvisible() ? "\<lt>Up>" : "\<lt>C-O>gk"<CR>
nnoremap <silent> <Down> gj
nnoremap <silent> <Up> gk
vnoremap <silent> <Down> gj
vnoremap <silent> <Up> gk

" And be global by default
set gdefault

" tab for brackets
nnoremap <silent> <tab> %
vnoremap <silent> <tab> %

" NERDtree on <leader>t
nnoremap <silent> <leader>t :NERDTree<CR>

" Command-T support
nnoremap <silent> <leader>o :CommandT<CR>

" gundo
nnoremap <silent> <Leader>u :GundoToggle<CR>

" Disable pylint checking every save
let g:pymode_lint_write = 1

" Set key 'R' for run python code
let g:pymode_run_key = '<leader>R'

" remove stupid help
map <silent> <C-b> :Explore!<CR>


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Utils
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Remove trailing whitespace on <leader>S
nnoremap <leader>S :%s/\s\+$//<cr>:let @/=''<CR>


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Specific Syntax
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

""" Python
autocmd FileType python setlocal expandtab 
\ shiftwidth=4 tabstop=8 colorcolumn=79
\ formatoptions+=croq softtabstop=4 smartindent
let python_highlight_all = 1

""" Coffe
autocmd FileType coffee setlocal expandtab
\ shiftwidth=2 tabstop=2 softtabstop=2

""" PHP (hopefully not)
autocmd FileType php setlocal expandtab 
\ shiftwidth=4 tabstop=8 softtabstop=4 smartindent

""" Lua
autocmd FileType lua setlocal expandtab shiftwidth=4 tabstop=8
\ formatoptions+=croq softtabstop=4 smartindent

""" Go
autocmd BufNewFile,BufRead *.go setlocal ft=go
autocmd FileType go setlocal expandtab
\ shiftwidth=4 tabstop=8 softtabstop=4

""" CSS
autocmd FileType css setlocal expandtab
\ shiftwidth=4 tabstop=4 softtabstop=4

""" Rst
autocmd BufNewFile,BufRead *.txt setlocal ft=rst
autocmd FileType rst setlocal expandtab 
\ shiftwidth=4 tabstop=4 softtabstop=4
\ formatoptions+=nqt textwidth=74

""" C/C++
autocmd FileType c setlocal expandtab 
\ tabstop=4 softtabstop=4 shiftwidth=4
autocmd FileType cpp setlocal expandtab 
\ tabstop=4 softtabstop=4 shiftwidth=4

""" vim
autocmd FileType vim setlocal expandtab
\ shiftwidth=2 tabstop=8 softtabstop=2

""" javascript
autocmd FileType javascript setlocal expandtab
\ shiftwidth=2 tabstop=2 softtabstop=2
let javascript_enable_domhtmlcss=1

" Java (hopefully not)
" ----------
autocmd FileType java setlocal expandtab 
\ tabstop=4 shiftwidth=4 softtabstop=4
