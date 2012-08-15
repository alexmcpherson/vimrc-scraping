" .vimrc
scriptencoding utf-8

" For pathogen.vim: auto load all plugins in bundle
source ~/.vim/bundle/pathogen/autoload/pathogen.vim
call pathogen#infect()
"call pathogen#helptags()

set nocompatible	        " Use Vim defaults (much better!)
set bs=indent,eol,start		" allow backspacing over everything in insert mode
set ai			              " always set autoindenting on
set backup                " keep a backup file
set viminfo='20,\"100	    " read/write a .viminfo file, don't store more
			                    " than 50 lines of registers
set history=100		        " keep 50 lines of command line history
set ruler		              " show the cursor position all the time

" back up to central location
set backupdir=~/.vim/tmp,~/.tmp,/var/tmp,/tmp
set directory=~/.vim/tmp,~/.tmp,/var/tmp,/tmp

" turn off auto adding comments to cut and paste reliably
" http://vimdoc.sourceforge.net/htmldoc/change.html#fo-table
set formatoptions-=c

" filetype stuff
filetype on
filetype plugin on
filetype indent on

set expandtab
set tabstop=2
set softtabstop=2
set shiftwidth=2
"set number         " show line numbers

syntax on     " syntax highlighting
set hlsearch  " search highlighting

set incsearch    " search dynamically while typing
set ignorecase   " case-insensitive search 
set smartcase    " case-sensitive if there is a capital letter in query
                
set hidden       " allow hiding buffers by default
set lazyredraw   " don't update the display while executing macros
set showmode     " show current mode
                
set wildmenu     " pressing tab shows list of options
set wildmode=list:longest " show list and complete to longest common string
set title        " show filename in window title

set scrolloff=3  " start scrolling 3 lines before border

"set shortmess=atI  " shorten command-line prompts
"set visualbell     " make window flash briefly in place of bell sound


"""" Map Keys

let mapleader = ","   " change default leader key

" <leader>n: temporarily turn off search highlighting
nmap <silent> <leader>h :silent :nohlsearch<CR>

" <leader>s: make whitespace visible
set listchars=tab:>-,trail:·,eol:$
nmap <silent> <leader>s :set nolist!<CR>

" <leader>d: open NERDTree
nmap <silent> <leader>d :NERDTreeToggle<CR>

" Tab shortcuts
"nnoremap <C-Left> :tabprevious<CR>
"nnoremap <C-Right> :tabnext<CR>
"nnoremap <C-Up> :tabnew<CR>
nmap <C-h> :tabprevious<CR>
nmap <C-l> :tabnext<CR>
imap <C-h> <ESC>:tabprevious<CR>i
imap <C-l> <ESC>:tabnext<CR>i

" Paste toggle
nnoremap <F5> :set invpaste paste?<CR>
set pastetoggle=<F5>
set showmode

"""" Extensions

" extended % matching (can match things like if/elsif/else/end)
runtime macros/matchit.vim

" Only do this part when compiled with support for autocommands
if has("autocmd")
  " For all text files set 'textwidth' to 78 characters.
  autocmd FileType text setlocal textwidth=78
  
  " When editing a file, always jump to the last cursor position
  "autocmd BufReadPost *
  "\ if line("'\"") > 0 && line ("'\"") <= line("$") |
  "\   exe "normal! g'\"" |
  "\ endif
endif

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
  command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
                  \ | wincmd p | diffthis
endif
