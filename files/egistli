"Load vundle
set nocompatible
filetype off
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" vundle
Bundle 'gmarik/vundle'

" plugins
Bundle 'vim-scripts/snipMate'
Bundle 'vim-scripts/tComment'
Bundle 'vim-scripts/matchit.zip'
Bundle 'kien/ctrlp.vim'
Bundle 'altercation/vim-colors-solarized'
Bundle 'scrooloose/nerdtree'
Bundle 'Lokaltog/vim-powerline'
Bundle 'Lokaltog/vim-easymotion'
Bundle 'ervandew/supertab'
Bundle 'Townk/vim-autoclose'
Bundle 'tpope/vim-fugitive'
"Bundle 'vim-scripts/YankRing.vim'

" plugin setup
let g:ctrlp_map = '<C-p>'
let g:ctrlp_working_path = 2
let g:ctrlp_custom_ignore = '\.git$\|\.hg$\|\.svn$'

"Enable filetype
filetype plugin indent on

" Prevent tab complete some file types
set wildignore+=*/tmp/*,*.so,*.swp,*.zip

"Enhance tab completion
set wildmenu

"Set encodings
set fenc=utf-8
set encoding=utf-8
set termencoding=utf-8
set fileencodings=utf-8,big5,gbk,euc-jp,euc-kr,utf-bom,iso8859-1

"Ensure backup
set backupcopy=yes

"Setup Display Preference
syntax enable
set background=dark
colorscheme solarized
set showmatch
set ruler
set autoread
set nu
set cursorline
set cursorcolumn 
set incsearch
set hlsearch
set ignorecase
set smartcase
set smarttab

set autoindent
set copyindent
set tabstop=4
set softtabstop=4
set shiftwidth=4
set backspace=2
set ls=2

"Set minimum window height
set winminheight=0
set winheight=30

:set sidescroll=10
:set scrolljump=10

" Disable search hightlight on ESC
nnoremap <ESC> :noh<CR><ESC>

" Fix arrowkeys problem caused by Autoclose
set term=linux
imap OA <ESC>ki
imap OB <ESC>ji
imap OC <ESC>li
imap OD <ESC>hi

" Tab Control
nnoremap H :tabprev <CR>
nnoremap L :tabnext <CR>

" Plugins global vars
let g:Powerline_symbols = 'fancy'
let g:yankring_manual_clipboard_check=1 
let g:EasyMotion_leader_key = ','

" Setup Helpful Commands
nnoremap <F5> :NERDTree<CR>
nnoremap <F6> :w !php -l<CR>
nnoremap <F7> :!svn diff % > ~/Desktop/%:t.diff<CR>
nnoremap <F8> :cd %:p:h<CR> :!svn diff . > ~/Desktop/dir.diff<CR>

" Setup Shortcuts for cd
nnoremap <Leader>1 :NERDTree<CR> <C-w>h :cd ~/Works/yo/modules/tvl_info/ <CR> :NERDTree <CR>
nnoremap <Leader>2 :NERDTree<CR> <C-w>h :cd ~/Works/yo/modules/tvl_basic/ <CR> :NERDTree <CR>
nnoremap <Leader>3 :NERDTree<CR> <C-w>h :cd ~/Works/yo/modules/tvl_mobile/ <CR> :NERDTree <CR>
nnoremap <Leader>4 :NERDTree<CR> <C-w>h :cd ~/Works/yo/themes/ <CR> :NERDTree <CR>

" Autocmd
" Open Nerdtree on vim opened
 autocmd VimEnter * NERDTree
" Lint PHP onSave
autocmd BufWritePost *.php !php -l %
" Setup BufWritePost events for rsync yo
autocmd BufWritePost ~/Works/yo/* silent !~/Scripts/yo_sync_dev.sh
