" All system-wide defaults are set in $VIMRUNTIME/debian.vim (usually just
" Turn on 
" /usr/share/vim/vimcurrent/debian.vim) and sourced by the call to :runtime
" you can find below.  If you wish to change any of those settings, you should
" do it in this file (/etc/vim/vimrc), since debian.vim will be overwritten
" everytime an upgrade of the vim packages is performed.  It is recommended to
" make changes after sourcing debian.vim since it alters the value of the
" 'compatible' option.

" This line should not be removed as it ensures that various options are
" properly set to work with the Vim-related packages available in Debian.
runtime! debian.vim

" Uncomment the next line to make Vim more Vi-compatible
" NOTE: debian.vim sets 'nocompatible'.  Setting 'compatible' changes numerous
" options, so any other options should be set AFTER setting 'compatible'.
"set compatible

" Vim5 and later versions support syntax highlighting. Uncommenting the next
" line enables syntax highlighting by default.
syntax on

" If using a dark background within the editing area and syntax highlighting
" turn on this option as well
set background=dark

" Run pathogen (VIM plugin manager)
call pathogen#runtime_append_all_bundles()

" Options for exporting a source file as html/css
let html_use_css = 1
let use_xhtml = 1

" Soft tabs
set expandtab

" set default tab size
set tabstop=2

" Set indent size (for << and >> commands)
set sw=2

" The following are commented out as they cause vim to behave a lot
" differently from regular Vi. They are highly recommended though.
set showcmd		" Show (partial) command in status line.
set showmatch		" Show matching brackets.
set ignorecase		" Do case insensitive matching
"set smartcase		" Do smart case matching
set incsearch		" Incremental search
"set autowrite		" Automatically save before commands like :next and :make
"set hidden             " Hide buffers when they are abandoned
"set mouse=a		" Enable mouse usage (all modes) in terminals
set wildmenu

let mapleader = ","

" Shortcut to open a new tab
map ,nt <Esc>:tabnew<CR>

" Python autocompletion settings
" Enable the pythoncomplete script
filetype plugin on
filetype plugin indent on
autocmd FileType python set omnifunc=pythoncomplete#Complete
let python_highlight_all = 1

" Insert a space after the comment character 
" ( "# comment" instead of "#comment")
let NERDSpaceDelims=1

" Optional (So <CR> cancels prefix, selection, operator)
inoremap <C-b> <Esc>


" php.vim configurations
"
" Syntax highlighting of SQL Queries inside strings
let php_sql_query = 1

" Syntax highlighting of HTML inside strings
let php_htmlInStrings = 1
map ,vsp <C-w>H
map ,sp <C-w>K
" Run php syntax check on current file
map ,php <Esc>:!clear<CR><Esc>:!php -l %<CR>

" Turn on auto indent by default
set autoindent
set smartindent
set ruler

" Tex settings
set grepprg=grep\ -nH\ $*
let g:tex_flavor='latex'

" Edit vimrc and bashrc
map ,rc :e $MYVIMRC<CR>
map ,brc :e $HOME/.bashrc<CR>

" Next file
map ,nn :n<CR>
" Previous file
map ,np :prev<CR>

" Rules for various filetypes
au BufEnter,BufNew *.html setf htmldjango
au BufEnter,BufNew *.json setf javascript

" Alt-C and V copy and paste to and from the system clipboard
map <M-c> "+y
map <M-v> "+p

" Also switch on highlighting the last used search pattern.
set hlsearch
map <C-l> <ESC>:nohl<CR>

" Highlight all instances of word under cursor, when idle.
" Useful when studying strange source code.
map ,l :call Auto_Highlight_Toggle()<CR>

function! Auto_Highlight_Cword()
  exe "let @/='\\<".expand("<cword>")."\\>'"
endfunction

function! Auto_Highlight_Toggle()
  if exists("#CursorHold#*")
    au! CursorHold *
    let @/=''
  else
    set hlsearch
    set updatetime=500
    au! CursorHold * nested call Auto_Highlight_Cword()
  endif
endfunction

" Color settings
" set t_Co=256 " set 256 color terminal

" Reload the vimrc file
map ,rs :source $MYVIMRC<CR>

" Set the current directory as the root of all commands
map ,cd :cd %:p:h<CR>

au BufNewFile,BufRead *.feature set filetype=cucumber
