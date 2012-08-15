set ruler    " shows ROW,COL at bottom right corner
set number   " shows line numbers
" set nowrap " dissables linewrapping

"" Pathogen
call pathogen#infect()

set nocompatible " choose no compatibility with legacy vi
syntax enable
set encoding=utf-8
set showcmd  " display incomplete commands
filetype plugin indent on

"" Whitespace
set tabstop=2 shiftwidth=2 " a tab is two spaces (or set this to 4)
set expandtab      " use spaces, not tabs
set backspace=indent,eol,start " backspace through everything in insert mode

"" Searching
set hlsearch  " highlight matches
set incsearch " incremental searching
set ignorecase " searches are case insensitive...
set smartcase  " ...unless they contain at least one capital letter

"" Split
set splitbelow " When splitting, new window is below

"" Mappings
imap jk <ESC>
imap Jk <ESC>
imap JK <ESC>

"" No arrows, please
nnoremap <up> <nop>
nnoremap <down> <nop>
nnoremap <left> <nop>
nnoremap <right> <nop>
inoremap <up> <nop>
inoremap <down> <nop>
inoremap <left> <nop>
inoremap <right> <nop>

"" Colors
set background=dark

" Red color for trailing spaces in insert mode
if has("autocmd")
  highlight ExtraWhitespace guibg=#330000 ctermbg=52
  au ColorScheme * highlight ExtraWhitespace guibg=#330000 ctermbg=52
  au BufEnter * match ExtraWhitespace /\s\+$/
  au InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
  au InsertLeave * match ExtraWhiteSpace /\s\+$/
endif

" Use the same symbols as TextMate for tabstops and EOLs
set listchars=tab:→\ ,eol:⁋

"" map leader
let mapleader=","

"" Source the vimrc file after saving it
if has("autocmd")
  autocmd bufwritepost .vimrc source $MYVIMRC
  autocmd bufwritepost vimrc source $MYVIMRC " My vimrc has no point
endif

"" statusline setup
set statusline=%f " tail of the filename

" Git
set statusline+=%{GitBranchInfoString()}
let g:git_branch_status_head_current=1   " Shows current head branch name
let g:git_branch_status_text=" "         " Shows 'text' before the branches.
let g:git_branch_status_nogit=""         " Shows 'text' when no repo is present
let g:git_branch_status_around="()"      " Shows () aroung branch strings
let g:git_branch_status_ignore_remotes=1 " Ignore remote branches

" Font
set guifont=Inconsolata\ 13

" Color
colorscheme railscasts
" colorscheme inkpot
" colorscheme jellybeans
" colorscheme lucius
" colorscheme moria
" colorscheme desertEx
" colorscheme earendel


" CtrlP

"let g:ctrlp_map = '<c-p>' " Mapping
"let g:ctrlp_cmd = 'CtrlP' " Command
" Working directory. Available options:
" 0 - Don't manage working dir.
" 1 - Parent directory of current file
" 2 - nearest ancestor that contains one of these dirs or files: .git/, .hg/,
" .svn/ .bzr/ _darcs/ or "marker_dir/" or "marker_file"
let g:ctrlp_working_path_mode = 2
" Ignore some files
set wildignore+=*/tmp/*,*.so,*.swp,*.zip

" Autoclose
let g:AutoClosePairs = {'(': ')', '{': '}', '[': ']', '"': '"', "'": "'", '#{': '}', '|': '|', '<': '>'}
let g:AutoCloseProtectedRegions = ["Character"]

" Press F5 to remove trailing space
:nnoremap <silent> <F5> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>

" Saves time
nmap <space> :

" Map code completion to leader+tab
imap <Leader><tab> <C-x><C-o>

" Dict for node
au FileType javascript set dictionary+=$HOME/.vim/bundle/vim-node/dict/node.dict
