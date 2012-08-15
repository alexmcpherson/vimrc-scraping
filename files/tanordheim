" load pathogen
call pathogen#infect()

" set our leader char
let mapleader=","

" set filetype stuff to on
filetype on
filetype plugin on
filetype indent on

" tabstops are 2 spaces and we want to use spaces instead of tabs
set tabstop=2
set shiftwidth=2
set expandtab

" set the search scan so that it ignores case when the search is all lower case
" but recognizes uppercase if it's specified
set ignorecase
set smartcase

" set the forward slash to be the slash of note
set shellslash

" make command line two lines high
set cmdheight=2

" set visual bell
set vb

" allow backspacing over indent, eol, and the start of an insert
set backspace=2

" make sure that unsaved buffers that are to be put in the background are
" allowed to go in there (ie. the "must save first" error doesn't come up)
set hidden

" don't clutter up code directories with swp and tmp files
set backupdir=~/.tmp
set directory=~/.tmp

" make the 'cw' and like commands put a $ at the end instead of just deleting
" the text and replacing it
" set cpoptions=ces$
set cpoptions=B$

" tell vim to always put a status line in, even if there is only one window
set laststatus=2

" show the current command in the lower right corner
set showcmd

" show the current mode
set showmode

" switch on syntax highlighting.
syntax on

" this is the timeout used while waiting for user input on a multi-keyed macro
" or while just sitting and waiting for another key to be pressed measured in
" milliseconds.
"
" i.e. for the ",d" command, there is a "timeoutlen" wait period between the ","
" key and the "d" key.  If the "d" key isn't pressed before the timeout expires,
" one of two things happens: The "," command is executed if there is one (which
" there isn't) or the command aborts.
set timeoutlen=500

" keep some stuff in the history
set history=100

" disable folding
set nofoldenable

" when the page starts to scroll, keep the cursor 5 lines from the top and 5
" lines from the bottom
set scrolloff=5

" these things start comment lines
set comments=sl:/*,mb:\ *,ex:\ */,O://,b:#,:%,:XCOMM,n:>,fb:-

" make the command-line completion better
set wildmenu
set wildmode=list:longest

" wrap text at 80 characters
set textwidth=80
set formatoptions=cq
set wrapmargin=0

" enable search highlighting
set hlsearch

" incrementally match the search
set incsearch

" Initial path seeding
"set path=
"set path+=~/code/**

" toggle paste mode
nmap <silent> <Leader>p :set invpaste<CR>:set paste?<CR>

" cd to the directory containing the file in the buffer
nmap <silent> <Leader>cd :lcd %:h<CR>

" make the directory of the file in the buffer
nmap <silent> <Leader>md :!mkdir -p %:p:h<CR>

" turn off highlight search
nmap <silent> <Leader>n :set invhls<CR>:set hls?<CR>

" run the Gdiff command in a new tab
nmap <silent> <Leader>gd :tabedit %<CR>:Gdiff<CR>

" run the Gstatus command
nmap <silent> <Leader>gs :Gstatus<CR>

" open the Gcommit command in a new tab
nmap <silent> <Leader>gc :Gcommit<CR>

" map command+<num> to tabs and command+shift+left/right to left/right tab
noremap <D-1> 1gt
noremap <D-2> 2gt
noremap <D-3> 3gt
noremap <D-4> 4gt
noremap <D-5> 5gt
noremap <D-6> 6gt
noremap <D-7> 7gt
noremap <D-8> 8gt
noremap <D-9> 9gt
noremap <D-9> 10gt
noremap <D-S-right> gt
noremap <D-S-left> gT

" map CTRL-E to do what ',' used to do
nnoremap <c-e> ,
vnoremap <c-e> ,

" edit the vimrc file
nmap <silent> <Leader>ev :e $MYVIMRC<CR>

" reload the vimrc file
nmap <silent> <Leader>sv :so $MYVIMRC<CR>

" delete all buffers
nmap <silent> <Leader>da :exec "1," . bufnr('$') . "bd"<cr>

" use ack isntead of grep
set grepprg=ack

" easier movement between windows
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l
map <C-p> <C-w>p

" fuzzy finder text mate-clone search
map <Leader>t :FuzzyFinderTextMate<Enter>

" bufexplorer
map <Leader>b :BufExplorer<Enter>

" disable the mouse
" set mouse-=a

" show line numbers and cursor position in the status bar
set number

" configure the status line
set statusline=%<\ %n:%f\ %m%r%y%=%-35.(line:\ %l\ of\ %L,\ col:\ %c%V\ %{fugitive#statusline()}%)

" map TComment
map <Leader>co :TComment<CR>

" Add some command aliases for migrating and rolling back Rails migrations
command! Rmigrate !rake db:migrate db:test:clone
command! Rrollback !rake db:rollback db:test:clone

" Map some file types
au BufNewFile,BufRead *.asc setfiletype asciidoc
au BufRead,BufNewFile *.rabl setf ruby

" Don't syntax highlight lines longer than 500 chars since it slows down
" rendering a lot.
set synmaxcol=500

" Enable NeoComplCache for auto completion.
" let g:neocomplcache_enable_at_startup=1
" inoremap <expr><C-k> neocomplcache#complete_common_string()
" inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : "\<TAB>"

" set up the gui
if has("gui_running")
  set guifont=Menlo\ Regular:h12
  set t_Co=256
  set transparency=5
  set guioptions-=T
  set guioptions-=r
  set guioptions-=L
  colorscheme xoria256
endif
