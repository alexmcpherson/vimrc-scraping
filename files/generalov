" http://www.sontek.net/turning-vim-into-a-modern-python-ide

" When started as "evim", evim.vim will already have done these settings.
if v:progname =~? "evim"
  finish
endif

" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
filetype off
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" ack.vim
let g:ackprg="ack-grep -H --nocolor --nogroup --column"

let g:kls_switcherPath = "~/bin/xkbswitchlang"

set nocompatible
filetype on                     " enables filetype detection
filetype plugin on              " enables filetype specific plugins
filetype plugin indent on       " enable loading indent file for filetype


set backspace=indent,eol,start
" visualbell off
set novisualbell
set noerrorbells

"Turn backup off
set nobackup
set nowb
set noswapfile

set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set laststatus=2
set showcmd		" display incomplete commands
set incsearch		" do incremental searching
set ignorecase
set ofu=syntaxcomplete#Complete
set shiftwidth=4
set softtabstop=4
set scrolljump=5	" jump 5 lines when running out of the screen

set scrolloff=3		" indicate jump out of the screen when 3 lines before end of the screen
"set number		" show line numbers by default

set nolist
set listchars=tab:»·,trail:·

set term=xterm
set background=dark	" set background to dark

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

" Default file encodings
set fileencodings=utf8,cp1251,koi8-r
colorscheme desert
highlight SpecialKey  guibg=gray10 ctermfg=7 cterm=NONE ctermbg=NONE
" default the statusline to green when entering Vim
highlight StatusLine ctermbg=0 ctermfg=0

set comments=sO:*\ -,mO:*\ \ ,exO:*/,s1:/*,mb:*,ex:*/,://

" Folding settigs
set foldcolumn=5
nmap <SPACE> za

nnoremap <F2> :set invpaste paste?<CR>
set pastetoggle=<F2>
set showmode

set foldmethod=indent
set foldlevel=99

map <c-j> <c-w>j
map <c-k> <c-w>k
map <c-l> <c-w>l
map <c-h> <c-w>h
map <leader>td <Plug>TaskList

map <leader>g :GundoToggle<CR>


let g:pyflakes_use_quickfix = 0
let g:pep8_map='<leader>8'

au FileType python set omnifunc=pythoncomplete#Complete
let g:SuperTabDefaultCompletionType = "context"

set completeopt=menuone,longest,preview

map <leader>n :NERDTreeToggle<CR>

map <leader>j :RopeGotoDefinition<CR>
map <leader>r :RopeRename<CR>

set statusline=%<%f\ %h%m%r%{GetGitBranch()}%=%-14.(%l,%c%V%)\ %P

map <leader>dt :set makeprg=python\ manage.py\ test\|:call MakeGreen()<CR>

" Execute the tests
nmap <silent><Leader>tf <Esc>:Pytest file<CR>
nmap <silent><Leader>tc <Esc>:Pytest class<CR>
nmap <silent><Leader>tm <Esc>:Pytest method<CR>
nmap <silent><Leader>ts <Esc>:Pytest session<CR>
" cycle through test errors
nmap <silent><Leader>tn <Esc>:Pytest next<CR>
nmap <silent><Leader>tp <Esc>:Pytest previous<CR>
nmap <silent><Leader>te <Esc>:Pytest error<CR>

" Change to directory of the opened file
nmap <silent> <Leader>cd :cd %:p:h<CR>

" Add the virtualenv's site-packages to vim path
py << EOF
import os.path
import sys
import vim
if 'VIRTUAL_ENV' in os.environ:
    project_base_dir = os.environ['VIRTUAL_ENV']
    sys.path.insert(0, project_base_dir)
    activate_this = os.path.join(project_base_dir, 'bin/activate_this.py')
    execfile(activate_this, dict(__file__=activate_this))
EOF

set expandtab
set sw=4

if version >= 700
"   По умолчанию проверка орфографии выключена.
    setlocal spell spelllang=
    setlocal nospell
    function ChangeSpellLang()
        if &spelllang =~ "en_us"
            setlocal spell spelllang=ru_yo
            echo "spelllang: ru"
        elseif &spelllang =~ "ru_yo"
            setlocal spell spelllang=
            setlocal nospell
            echo "spelllang: off"
        else
            setlocal spell spelllang=en_us
            echo "spelllang: en"
        endif
    endfunc

    " map spell on/off for English/Russian
    map <S-F11> <Esc>:call ChangeSpellLang()<CR>
endif

" buftabs
noremap <C-left> :bprev<CR>
noremap <C-right> :bnext<CR>
