" Load plugins under ./vim/bundle.
call pathogen#infect()
" Generate documentation from ./vim/bundle/*/doc.
call pathogen#helptags()

let mapleader = ","
let maplocalleader = "\\"

" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" Set window size
if has("gui_running")
  " GUI is running or is about to start.
  " Maximize gvim window.
  set lines=48 columns=170
else
  " This is console Vim.
  if exists("+lines")
    set lines=30
  endif
  if exists("+columns")
    set columns=80
  endif
endif

" Allow backspacing over everything in insert mode
set backspace=indent,eol,start

set nobackup
set nowritebackup
set history=50 " keep 50 lines of command line history
set ruler " show the cursor position all the time
set showcmd " display incomplete commands
set encoding=utf-8
set scrolloff=3
set showmode
set hidden
set wildmenu
set ttyfast
set undofile

" Softtabs, 2 spaces
set tabstop=2
set shiftwidth=2
set expandtab

" Search
set ignorecase
set smartcase
"set gdefault
set incsearch
set showmatch
set hlsearch

" Hide search highlighting
nnoremap <Leader><Space> :noh<CR>
"map <Leader>l :set invhls <CR>

" Always display the status line
set laststatus=2
" Show file path and filet type in status line
"set statusline=%f         " Path to the file
"set statusline+=\ -\      " Separator
"set statusline+=FileType: " Label
"set statusline+=%y        " Filetype of the file
"set statusline+=%=        " Switch to the right side
"set statusline+=%l        " Current line
"set statusline+=,         " Separator
"set statusline+=%c        " Current line
"set statusline+=/         " Separator
"set statusline+=%L        " Total lines

" Numbers
"set number " show absolute line numbers
set relativenumber " show relative line numbers
set numberwidth=5
set cursorline " highlight current line

" Snippets are activated by Shift+Tab
let g:snippetsEmu_key = "<S-Tab>"

" Tab completion options
set wildmode=list:longest,list:full
set complete=.,t

" Error bells are displayed visually
set visualbell

" Tags
let g:Tlist_Ctags_Cmd="ctags --exclude='*.js'"

" Don't use Ex mode, use Q for formatting
" (Martin) Don't know what this does
map Q gq

" This is an alternative that also works in block mode, but the deleted
" text is lost and it only works for putting the current register.
"vnoremap p "_dp

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if (&t_Co > 2 || has("gui_running")) && !exists("syntax_on")
  syntax on
  set nohlsearch
endif

" Only do this part when compiled with support for autocommands.
if has("autocmd")
  " Enable file type detection.
  " Use the default filetype settings, so that mail gets 'tw' set to 72,
  " 'cindent' is on in C files, etc.
  " Also load indent files, to automatically do language-dependent indenting.
  filetype plugin indent on

  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
    au!
    " For all text files set 'textwidth' to 78 characters.
    autocmd FileType text setlocal textwidth=78

    " When editing a file, always jump to the last known cursor position.
    " Don't do it when the position is invalid or when inside an event handler
    " (happens when dropping a file on gvim).
    autocmd BufReadPost *
      \ if line("'\"") > 0 && line("'\"") <= line("$") |
      \   exe "normal g`\"" |
      \ endif

  augroup END
else
  set autoindent " always set autoindenting on
endif " has("autocmd")

" if has("folding")
  " set foldenable
  " set foldmethod=syntax
  " set foldlevel=1
  " set foldnestmax=2
  " set foldtext=strpart(getline(v:foldstart),0,50).'\ ...\ '.substitute(getline(v:foldend),'^[\ #]*','','g').'\ '
" endif

" NERDTree
nnoremap <Leader>n :NERDTree<CR>

"Ack
nnoremap <Leader>a :Ack

" Disable VIM's broken default regex
nnoremap / /\v
vnoremap / /\v

" Edit the README_FOR_APP (makes :R commands work)
nnoremap <Leader>R :e doc/README_FOR_APP<CR>
nnoremap <Leader>TR :tabe doc/README_FOR_APP<CR>

" Leader shortcuts for Rails commands
nnoremap <Leader>m :Rmodel
nnoremap <Leader>c :Rcontroller
map <Leader>v :Rview
map <Leader>j :Rjavascript
map <Leader>u :Runittest
map <Leader>f :Rfunctionaltest
map <Leader>i :Rintegrationtest
map <Leader>h :Rhelper
map <Leader>tm :RTmodel
map <Leader>tc :RTcontroller
map <Leader>tv :RTview
map <Leader>tu :RTunittest
map <Leader>tf :RTfunctionaltest
map <Leader>sm :RSmodel
map <Leader>sc :RScontroller
map <Leader>sv :RSview
map <Leader>su :RSunittest
map <Leader>sf :RSfunctionaltest
map <Leader>si :RSintegrationtest

" Opens an edit command with the path of the currently edited file filled in
" Normal mode: <Leader>e
map <Leader>e :e <C-R>=expand("%:p:h") . "/" <CR>

" Opens a tab edit command with the path of the currently edited file filled in
" Normal mode: <Leader>t
map <Leader>te :tabe <C-R>=expand("%:p:h") . "/" <CR>

" Inserts the path of the currently edited file into a command
" Command mode: Ctrl+P
cmap <C-P> <C-R>=expand("%:p:h") . "/" <CR>

" Maps autocomplete to tab
imap <Tab> <C-P>

" Duplicate a selection
" Visual mode: D
vmap D y'>p

" No Help, please
nmap <F1> <Esc>

" Press ^F from insert mode to insert the current file name
imap <C-F> <C-R>=expand("%")<CR>

" Press Shift+P while in visual mode to replace the selection without
" overwriting the default register
vmap P p :call setreg('"', getreg('0')) <CR>

" Display extra whitespace
set list listchars=tab:»·,trail:·

" Local config
if filereadable(".vimrc.local")
  source .vimrc.local
endif

" Use Ack instead of Grep when available
if executable("ack")
  set grepprg=ack\ -H\ --nogroup\ --nocolor
endif

" Color scheme
if has("gui_running")
  colorscheme vividchalk
else
  colorscheme slate
endif
highlight NonText guibg=#060606
highlight Folded  guibg=#0A0A0A guifg=#9090D0

" Window navigation
nnoremap <C-Tab> <C-W><C-W>
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-H> <C-W><C-H>
nnoremap <C-L> <C-W><C-L>

" Save changes
nnoremap <C-S> :w<CR>
inoremap <C-S> <ESC>:w<CR>a

" ruby-debugger
"let g:ruby_debugger_progname = '/usr/bin/mvim'

" Martin's additions
" Delete a line in insert mode
inoremap <C-d> <ESC>ddi

" Edit .vimrc file in vertical window
nnoremap <Leader>er :vsplit $MYVIMRC<CR>
" Reload .vimrc
nnoremap <Leader>sr :source $MYVIMRC<CR>

" Exit insert mode
inoremap jk <esc>

" Change backup directory
silent execute '!mkdir -p ~/.vim/backups'
set backupdir=~/.vim/backups// directory=~/.vim/backups//
set undodir=~/.vim/backups//

augroup customEx
  au!
  autocmd FileType ruby nnoremap <buffer> <localleader>c I#<ESC>
  autocmd FileType python nnoremap <buffer> <localleader>c I#

  " For Haml
  au! BufRead,BufNewFile *.haml setfiletype haml

  " Use .as for ActionScript files, not Atlas files.
  au BufNewFile,BufRead *.as set filetype=actionscript

  " For BrightScript
  au BufNewFile,BufRead *.brs setfiletype brs
augroup END

" Edit routes
command! Rroutes :e config/routes.rb
command! RTroutes :tabe config/routes.rb

" Rails plugin customizations
autocmd User Rails Rnavcommand services app/services -glob=**/* -suffix=_service.rb
autocmd User Rails Rnavcommand features features -glob=**/* -suffix=.feature
