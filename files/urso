
set nocompatible " make improved
filetype off

" use vundle for global bundles and pathogen for user installed bundles
" vundle dir: $HOME/.vim/vundle
" pathogen dir: $HOME/.vim/bundle

" load vundle
set rtp+=~/.vim/vundle/vundle
call vundle#rc(expand('$HOME/.vim/vundle'))

" Load/Configure Bundles
source ~/.vim/vundles.vim

call pathogen#infect()

filetype plugin indent on

" share system clipboard 
set clipboard=unnamed

" configure some general behaviour
if has("vms")
    set nobackup
else
    set backup
endif
set backupdir=~/.vim_backup
set undofile                            " configure vim persist file undo
set undodir=~/.vim_undo                 
set undolevels=1000 "maximum number of changes that can be undone
set undoreload=10000 "maximum number lines to save for undo on a buffer reload
set history=800
set scrolloff=3                         " min number of line below/above current line
set showmode                            " show current mode
set wildmenu                            " show completion list in status bar on command-line completion
set hidden
set ttyfast
set viminfo='1000,<50,s10,h
set sessionoptions+=resize
set whichwrap=b,s,h,l,<,>,[,]
set nowrap                              " do not wrap text if longer than display
set sidescroll=10
autocmd! bufwritepost vimrc source ~/.vimrc "  When vimrc is edited, reload it
set modelines=0                         " turn off modelines (prevents possible exploits)
set gdefault " add 'g' to replace pattern s/.../.../ by default
au FocusLost * :wa                      " auto save file on buffer switch 

    " use python/perl like regex with search commands
nnoremap / /\v
vnoremap / /\v


if has("autocmd")

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal g`\"" |
    \ endif
endif


" set utf-8
set encoding=utf-8
set termencoding=utf-8
set ffs=unix,dos,mac                    "Default file types

" automatically load file if changed outside vim
set autoread

" configure appearance
if $TERM == "xterm-256color"
    set t_Co=256
endif
set ruler
set showcmd
set cmdheight=2
set nolazyredraw
set relativenumber                      " show relative line numbers...
set showmatch                           " show matching brackets when text indicator is over them
if &t_Co > 2 || has("gui_running")
    syntax on                           " enable syntax highlighting
    set hlsearch                        " highlight all patterns from last search
endif
set laststatus=2                        " show status line
set statusline=%<%n:%f%{ModifiedStr()}\ %y\ %h%r[fo=%{&fo}][spell=%{&spell}]%=%-14.(%l,%c%V%)\ %P
set colorcolumn=80                      " highlight column 80
hi ColorColumn ctermbg=235


"set list                                " show newlines and tabs
"set listchars=tab:▸\ ,eol:¬

" show modified status with file name (appends '+' to modified file name)
function ModifiedStr()
    if (&modified)
        return '+'
    else
        return ''
    endif
endfunction

" configure bells (turn off)
set noerrorbells
set visualbell
set t_vb=

" allow backspacing in insert mode
set backspace=indent,eol,start

" indentation and text formatting
set autoindent
set smartindent
set expandtab
set tabstop=4
set softtabstop=4
set shiftwidth=4
set formatoptions=crq
set textwidth=79
set cinoptions+=l-1s,p0,t0,+2s          " configure C-like language indendation options

" searching
set incsearch                           " incremental searching
set ignorecase
set magic


" key bindings:

let mapleader = ","

nnoremap <silent> <C-A> :silent nohl<CR>	" press C-A to unhilte searches
map <leader>m :mak<Enter><Enter><Enter>     " just call make and return to vim when done
map ,,m :make                               
map ,l :mak<Up><Enter><Enter><Enter>        " call last issued make command
nmap <TAB> <C-^>                            " use TAB to switch to last used buffer in normal mode
nnoremap <leader>g :tag 

" shortcuts for moving cursor between windows
noremap <C-J> <C-W>j
noremap <C-K> <C-W>k
noremap <C-H> <C-W>h
noremap <C-L> <C-W>l

" write file with sudo
cmap w!! w !sudo tee % >/dev/null

if executable('par')
    set formatprg=par\ -req
endif

" load system local vimrc
if filereadable(expand('$HOME/.vimrc.local'))
    source ~/.vimrc.local
endif

if has('autocmd')
	" change colorscheme depending on current buffer
	" if desired, you may set a user-default colorscheme before this point,
	" otherwise we'll use the Vim default.
	" Variables used:
		" g:colors_name : current colorscheme at any moment
		" b:colors_name (if any): colorscheme to be used for the current buffer
		" s:colors_name : default colorscheme, to be used where b:colors_name hasn't been set
	if has('user_commands')
		" User commands defined:
			" ColorScheme <name>
				" set the colorscheme for the current buffer
			" ColorDefault <name>
				" change the default colorscheme
		command -nargs=1 -bar ColorScheme
			\ colorscheme <args>
            \ | hi ColorColumn ctermbg=235
			\ | let b:colors_name = g:colors_name
		command -nargs=1 -bar ColorDefault
			\ let s:colors_name = <q-args>
			\ | if !exists('b:colors_name')
				\ | colors <args>
			\ | endif
	endif
	if !exists('g:colors_name')
		let g:colors_name = 'default'
	endif
	let s:colors_name = g:colors_name
	au BufEnter *
		\ let s:new_colors = (exists('b:colors_name')?(b:colors_name):(s:colors_name))
		\ | if s:new_colors != g:colors_name
			\ | exe 'colors' s:new_colors
            \ | hi ColorColumn ctermbg=235
		\ | endif
endif

