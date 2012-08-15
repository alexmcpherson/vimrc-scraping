runtime bundle/pathogen/autoload/pathogen.vim
call pathogen#infect()
call pathogen#helptags()

runtime macros/matchit.vim

set nocompatible

let mapleader=","

filetype off

syntax on
filetype plugin indent on

" My preferred default tab settings (makes tabs stand out)
set ts=4 sts=2 sw=2 expandtab

" Only do this part when compiled with support for autocommands
if has("autocmd")
  " Syntax of these languages is fussy over tabs Vs spaces
  autocmd FileType make setlocal ts=8 sts=8 sw=8 noexpandtab
  autocmd FileType python setlocal ts=4 sts=4 sw=4 expandtab
  autocmd Filetype text setlocal tw=80 formatoptions+=a spell
  autocmd BufNewFile,BufRead *.md set filetype=markdown syntax=markdown
  autocmd Filetype markdown setlocal spell

  " Syntax highlighting for pig files
  autocmd BufNewFile,BufRead *.pig set filetype=pig syntax=pig

  autocmd BufNewFile,BufRead *.tsv set filetype=tsv
  autocmd FileType tsv setlocal noexpandtab

  autocmd BufNewFile,BufRead *.fish set filetype=fish syntax=fish

  " Automatically source my vimrc when I save it
  autocmd BufWritePost .vimrc source $MYVIMRC
endif

" For showing hidden characters
set list listchars=tab:▸\ ,trail:•

" Trim trailing whitespace on command
command! TW :call <SID>StripTrailingWhitespaces()

function! <SID>StripTrailingWhitespaces()
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

" Next buffer and close old one.
command! BD :bp<bar>:bd#

set hidden

set lazyredraw

set showmode

set wildmenu

set autoread

" Edit this file
nmap <silent> <leader>v :vsp $MYVIMRC<cr>

" Easier window nav
nmap <C-h> <C-w>h
nmap <C-j> <C-w>j
nmap <C-k> <C-w>k
nmap <C-l> <C-w>l

" Quick access for NERDTree
nmap <silent> <leader>nt :NERDTreeToggle<cr>

" Sort files and directories mixed up.
let NERDTreeSortOrder=['*', '^[A-Z]', '^README*', '^Gemfile']
let NERDTreeDirArrows=1
let NERDTreeIgnore=['^tags$', '^Gemfile\.lock$', '\~$']

" Map ctrl-n and ctrl-p to :cn and :cp respectively.
nmap <silent> <C-n> :cn<cr>
nmap <silent> <C-p> :cp<cr>

" Map tab and shift-tab to switch buffers.
nmap <silent> <tab> :bn<cr>
nmap <silent> <S-tab> :bp<cr>

" FuzzyFinder Shortcuts
nmap <Leader>t :FufTaggedFile<CR>

" Refresh CTags
nmap <Leader>c :!ctags --langmap=Ruby:+.haml.slim.erb --extra=+fq -R --langdef=scss --langmap=scss:.scss.sass.css .<CR><CR>

set background=dark
colorscheme solarized
set number
set nowrap
set linebreak
set winwidth=85
set encoding=utf-8
set completeopt=menu,preview,longest

set laststatus=2
set statusline=%f%(\ %M%)%(\ %R%)%(\ %W%)%(\ %y%)%=%-14.(%l,%c%V%)\ %P

set ai
set cpoptions+=$

set tags=./tags;

set pastetoggle=<F2>

set noswapfile
set nobackup

let g:CommandTMaxFiles=30000

" Don't beep and don't flash. Bleh!
set noeb vb t_vb=
