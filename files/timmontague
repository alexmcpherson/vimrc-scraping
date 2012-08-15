" Tim Montague's vimrc

" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" Use pathogen to autoload plugins from ~/.vim/bundle/
call pathogen#infect()

source ~/.vim/functions.vim
source ~/.vim/mappings.vim

" Switch syntax highlighting on
syntax on

" move temporary files to seperate directory
set backupdir=~/.vim/tmp/backup//
set dir=~/.vim/tmp//

" set persistent backup
set undodir=~/.vim/tmp/undo//
set undofile

" set tab size to 4
set tabstop=4
set shiftwidth=4
set smartindent

" search settings
set hlsearch			" highlight search words
set incsearch			" do incremental searching
set ignorecase			" ignore case when searching
set smartcase			" except when search string contains an uppercase leter

" line wrap settings
set wrap				" auto wrap
set linebreak			" wrap at word boundry
set textwidth=80		" wrap at 80 columns

" color scheme
set background=dark
set t_Co=256
colorscheme torte

" spell check
set spellfile=~/.vim/tmp/spellfile.add
highlight clear SpellBad
highlight SpellBad term=standout ctermfg=1 term=underline cterm=underline
highlight clear SpellCap
highlight SpellCap term=underline cterm=underline
highlight clear SpellRare
highlight SpellRare term=underline cterm=underline
highlight clear SpellLocal
highlight SpellLocal term=underline cterm=underline

" Use system clipboard when doing yanks and puts
set clipboard=unnamed

" w!! to write a file as sudo
cmap w!! w !sudo tee % >/dev/null

" Jekyll.vim options
let g:jekyll_path = "/Users/tim/Documents/website/blog"
let g:jekyll_post_created = "%Y-%m-%d %T %z"

" TagBar options
let g:tagbar_autofocus=1
map <C-T> :TagbarToggle<CR>

" NERDTree options
" open if vim is started with no files
autocmd vimenter * if !argc() | NERDTree | endif
let NERDTreeShowHidden = 1
let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1
let g:NERDTreeWinSize = 30
nmap <C-N> :NERDTreeToggle<CR>

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

set history=50	" keep 50 lines of command line history
set showcmd		" display incomplete commands
set ruler		" show the cursor position all the time
set scrolloff=3	" show 3 lines above/below cursor when scrolling

" In many terminal emulators the mouse works just fine, thus enable it.
if has('mouse')
  set mouse=n
endif

" Enable file type detection.
" Also load indent files, to automatically do language-dependent indenting.
filetype plugin indent on

" When editing a file, always jump to the last known cursor position.
" Don't do it when the position is invalid or when inside an event handler
" (happens when dropping a file on gvim).
" Also don't do it when the mark is in the first line, that is the default
" position when opening a file.
autocmd BufReadPost *
  \ if line("'\"") > 1 && line("'\"") <= line("$") |
  \   exe "normal! g`\"" |
  \ endif


