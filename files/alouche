
set nocompatible                          " forget about vi compatibility

" pathogen rules!
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" -----------------------------------------------------------------
" Generic Settings
" -----------------------------------------------------------------

" perform syntax highlighting from start
autocmd BufEnter * :syntax sync fromstart
set hidden                                " enable hidden buffers
set ttyfast                               " redraw fast
" fix backspace if terminal isn't setup sanely
imap <C-?> <C-h>
set viminfo='50,\"1000,:100,n~/.viminfo   " store my editing info
set history=1000
set backup
set writebackup                                                                                                                                                                                                                            
set swapfile
set undofile
set undolevels=1000
set undoreload=10000
set undodir=~/.vim/tmp
set backupdir=~/.vim/tmp
set directory=~/.vim/tmp
set tabpagemax=3
if has('title')
  set title
  set titlestring=%t%(\ [%R%M]%)
endif

" -----------------------------------------------------------------
" Eveything to do with Visual (presentation, status, color ...)
" -----------------------------------------------------------------

set noerrorbells                          " only cows use bells
set visualbell                            " somehow this is needed - I did not bother to look too much into it!
autocmd VimEnter * set vb t_vb= "         " stop the visual blinking
set ruler
set rulerformat=%l:%c ruler
set splitbelow
set nohlsearch
set incsearch
set showmatch
set ignorecase
set smartcase
set foldclose=                            " do not fold automatically
set foldenable
set scrolloff=8
set mat=5
set ch=2
set showcmd
set showmode
set cursorline
set laststatus=2
"set statusline=[%{BufferCount()}\:%n]\ %<[L%l/%L:C%c\ %P]%2*%h%w%m%r%*[%{Pwd()}/%f]\ %y\ %{fugitive#statusline()}\ %4*%#warningmsg#%{SyntasticStatuslineFlag()}%*


filetype plugin indent on
syntax enable
set t_Co=256                              " use 256 inside gnome terminal with CSApprox plugin
set background=dark
let g:solarized_termtrans=1
let g:solarized_termcolors=256
let g:solarized_contrast="high"
let g:solarized_visibility="high"
colorscheme solarized
"colorscheme xoria256
"autocmd filetype ruby color jellybeans

" -----------------------------------------------------------------
" Format
" -----------------------------------------------------------------

set enc=utf-8
set shiftwidth=2
set tabstop=2
set expandtab
set softtabstop=2
set expandtab
set nosmarttab
set autoindent
set copyindent
set nosmartindent
set cindent                             " I like C indents
set cinkeys=!^                          " do it only when requested
set cinoptions=(0t0c1


" -----------------------------------------------------------------
" Shortcuts
" -----------------------------------------------------------------

set pastetoggle=<F2>

let mapleader=","
let maplocalleader="\\"
let g:SuperTabDefaultCompletionType = "context"
let g:tagbar_usearrows = 1

map <F3> :NERDTreeToggle<CR>
map <F4> :TlistToggle<CR>

noremap <leader>o <Esc>:CommandT<CR>
noremap <leader>O <Esc>:CommandTFlush<CR>
noremap <leader>m <Esc>:CommandTBuffer<CR>
noremap <leader>l :TagbarToggle<CR>
noremap <leader>c :ConqueTermVSplit bash<CR>
noremap <leader>r :!ruby %<cr>

" -----------------------------------------------------------------
" Functions (used across the configuration)
" -----------------------------------------------------------------

function! BufferCount()
  let s:buffer_count = len(filter(range(1,bufnr('$')), 'buflisted(v:val)'))
  return s:buffer_count
endfunction

function! Pwd()
  let s:curdir = substitute(getcwd(), '/home/aabbas', "~", "g")
  return s:curdir
endfunction


