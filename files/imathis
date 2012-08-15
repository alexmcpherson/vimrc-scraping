" I have many people to thank, including, but not limited to:
"
"   http://github.com/matthewtodd/dotfiles
"   http://github.com/jtimberman/dotvim
"   http://github.com/tpope


" ---------------------------------------------------------------------------
" General
" ---------------------------------------------------------------------------

" call pathogen#helptags()
call pathogen#runtime_append_all_bundles()    " using pathogen for a bunch of plugins
set nocompatible
let mapleader = ","
set history=1000                              " lots of command line history
filetype plugin indent on                     " load filetype plugin
set viminfo='10,\"100,:20,%,n~/.viminfo       " remember certain things when we exit
set autoread                                  " reload files changed outside of Vim
set autowrite                                 " some commands should cause an automatic write

" ----------------------------------------------------------------------------
"  UI
" ----------------------------------------------------------------------------
set ruler                             " show the cursor position all the time
set backspace=start,indent,eol        " allow backspacing over anything in insert mode
set guioptions=eg                     " disable scrollbars, etc
"set wm=2                              " wrap margin on the right
let NERDTreeWinSize=31                " how wide nerdtree ought to be
set guifont=Monaco:h14
set antialias

" ----------------------------------------------------------------------------
"  Visual cues
" ----------------------------------------------------------------------------
set incsearch               " do incremental searching
set laststatus=2            " always show the status line
set nohlsearch              " don't highlight searches
set visualbell              " quiet
set noerrorbells            " quiet
set number                  " show line numbers


" ----------------------------------------------------------------------------
"  Text formatting
" ----------------------------------------------------------------------------
set autoindent              " automatically indent new lines
set expandtab               " expand tabs to spaces
set nowrap                  " do not wrap lines
set softtabstop=2           " yep, two
set shiftwidth=2
set tabstop=4
set nosmarttab              " no tabs, thanks.
set expandtab               " expand tabs to spaces


" ----------------------------------------------------------------------------
"  Backups
" ----------------------------------------------------------------------------
set nobackup                           " do not keep backups after close
set nowritebackup                      " do not keep a backup while working
set noswapfile                         " don't keep swp files either
set backupdir=~/.vim/backups           " store backups under ~/.vim/backup
set backupcopy=yes                     " keep attributes of original file
set backupskip=/tmp/*,$TMPDIR/*,$TMP/*,$TEMP/*
set directory=~/.vim/tmp               " where to keep swp files

syntax enable

" Spell check on
set spell
set spelllang=en_us

" strip trailing whitespace
autocmd BufWritePre * :%s/\s\+$//e

" recognize Capfile, Gemfile
autocmd BufRead,BufNewFile Capfile set filetype=ruby
autocmd BufRead,BufNewFile Gemfile set filetype=ruby

" Restore cursor position
autocmd BufReadPost *
  \ if line("'\"") > 1 && line("'\"") <= line("$") |
  \   exe "normal! g`\"" |
  \ endif


" ---------------------------------------------------------------------------
" Mappings
" ---------------------------------------------------------------------------

" show/hide nerdtree
nnoremap <leader>d :execute 'NERDTreeToggle ' . getcwd()<CR>
nnoremap <leader>n :NERDTreeFind<CR>
" Tree on specified directory/bookmark
map <leader>nt :NERDTree<space>
" Reveal current file in tree
map <leader>R :NERDTreeFind<CR>

" edit vimrc
nmap <leader>v :sp ~/.vimrc<CR><C-W>_
nmap <leader>V :source ~/.vimrc<CR>:filetype detect<CR>:exe ":echo 'vimrc reloaded'"<CR><leader>d<leader>d<C-L>

" move between windows
nnoremap <C-J> <C-W>j
nnoremap <C-K> <C-W>k
nnoremap <C-H> <C-W>h
nnoremap <C-L> <C-W>l

" move window split position
nnoremap <C-W>H <C-A-H>
nnoremap <C-W>J <C-A-J>
nnoremap <C-W>K <C-A-K>
nnoremap <C-W>L <C-A-L>

" resize windows
nmap <C-Left> <C-W><<C-W><
nmap <C-Right> <C-W>><C-W>>
nmap <C-Up> <C-W>+<C-W>+
nmap <C-Down> <C-W>-<C-W>-

" easily back to normal mode
"inoremap ;; <Esc>
"inoremap ¬ <Esc>

" Taglist plugin
let Tlist_Show_One_File = 1
map <leader>S :TlistToggle<CR><C-W>h

" command-t plugin
nnoremap <leader>f :CommandT<CR>
nnoremap <leader>F :CommandTFlush<CR>:CommandT<CR>
set wildignore+=vendor/plugins/**,vendor/linked_gems/**,vendor/gems/**,vendor/rails/**,coverage/**,tmp/sass-cache/**

" Set options if a gui is running
if has("gui_running")
  set guioptions+=TlRLrb
  set guioptions-=TlRLrb
endif

colorscheme desert256


" ---------------------------------------------------------------------------
"  Status line customization
" ---------------------------------------------------------------------------
set statusline=
set statusline+=%-3.3n\                      " buffer number
set statusline+=%f\                          " filename
set statusline+=%h%m%r%w                     " status flags
set statusline+=\[%{strlen(&ft)?&ft:'none'}] " file type
set statusline+=%=                           " right align remainder
set statusline+=%-14(%l,%c%V%)               " line, character
set statusline+=%<%P                         " file position
set statusline=

" ---------------------------------------------------------------------------
"  Jump to last saved position of buffer when re-opening
" ---------------------------------------------------------------------------
augroup JumpCursorOnEdit
 au!
 autocmd BufReadPost *
 \ if expand("<afile>:p:h") !=? $TEMP |
 \ if line("'\"") > 1 && line("'\"") <= line("$") |
 \ let JumpCursorOnEdit_foo = line("'\"") |
 \ let b:doopenfold = 1 |
 \ if (foldlevel(JumpCursorOnEdit_foo) > foldlevel(JumpCursorOnEdit_foo - 1)) |
 \ let JumpCursorOnEdit_foo = JumpCursorOnEdit_foo - 1 |
 \ let b:doopenfold = 2 |
 \ endif |
 \ exe JumpCursorOnEdit_foo |
 \ endif |
 \ endif
 " Need to postpone using "zv" until after reading the modelines.
 autocmd BufWinEnter *
 \ if exists("b:doopenfold") |
 \ exe "normal zv" |
 \ if(b:doopenfold > 1) |
 \ exe "+".1 |
 \ endif |
 \ unlet b:doopenfold |
 \ endif
augroup END


" ---- Searching ----
nmap <leader>a :Ack<space>
nmap <leader>w :Ack<space><cword><CR>
vmap <leader>w "ry:Ack<space>"<C-r>r"<CR>
nmap <leader>rw :Ack<space>--type=ruby<space><cword><CR>

" Substitution
nmap <leader>r :%s/<C-r><C-w>/
vmap <leader>r "ry:%s/<C-r>r/

" ---- Editing ----

" Show trailing whitespace with ,s
set listchars=tab:>-,trail:·,eol:$
nmap <silent> <leader>s :set nolist!<CR>

" Scroll the viewport faster
nnoremap <C-e> 3<C-e>
nnoremap <C-y> 3<C-y>

" ---------------------------------------------------------------------------
" persistent undo
" ---------------------------------------------------------------------------
if v:version >= 703    " Only available in Vim 7.3 or greater
  set undofile
  set undodir=~/.vim/.undo
endif

" ---------------------------------------------------------------------------
"  Buffers
" ---------------------------------------------------------------------------
set hidden                                    " Let me leave buffers even when they're changed.

