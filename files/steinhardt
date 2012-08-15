set nocompatible                                                                " Disables compatibility mode

colorscheme desert
let mapleader=","                                                               " Remaps leader to ',' (comma)
set autoindent                                                                  " Enables auto-indentation
set backspace=indent,eol,start                                                  " Fixes backspace key annoyances
set colorcolumn=80                                                              " Renders line at column 80
set display+=lastline                                                           " Displays as much of last line as possible in current window
set encoding=utf8                                                               " Sets default encoding for new files
set ffs=unix,dos,mac                                                            " Sets default file type for new files
set ignorecase                                                                  " Case-insensitive searches
set laststatus=2                                                                " Always show the status bar
set list listchars=tab:»·,trail:·,precedes:…,extends:…,nbsp:‗                   " Makes tabs look distinct
set noswapfile                                                                  " Disables swap/backup files
set number                                                                      " Displays line numbers
set showmatch                                                                   " Blinks matching brackets on hover
set showmode                                                                    " Show mode (e.g. INSERT) below status bar
set smartcase                                                                   " Clever case-aware searches
set smartindent                                                                 " Enables auto-indentation
set statusline=\ %F%m%r%h\ %w\ \ CWD:\ %r%{getcwd()}%h\ \ \ Line:\ %l           " Formats the status bar
set tabstop=2 softtabstop=2 shiftwidth=2 noexpandtab                            " Sets tab behaviour
set wildmode=list:longest                                                       " Enables auto-completion
syntax enable


" Abbreviations
ab <expr> isod strftime("%Y-%m-%d")
iab ""l &ldquo;
iab ""r &rdquo;
iab ''l &lsquo;
iab ''r &rsquo;
iab KS Kevin Steinhardt
iab Latex LaTeX
iab Mvg Met vriendelijke groeten
iab \~~ $\approx$
iab acct account
iab doc document
iab eemail <kevinsteinhardt@gmail.com>
iab ibnlt including but not limited to
iab lmob \texttt{+31}\,{}\,{}\texttt{6}\,{}\,{}\texttt{4201}\,{}\,{}\texttt{5207}
iab mmob +31 (0)6 4021 5207
iab mvg Met vriendelijke groeten
iab spec specification
iab specs specifications
iab ~~ ≈


" Autocommands
autocmd bufwritepost .vimrc source $MYVIMRC                                     " Re-sources .vimrc when written to


" Default directory
if has('win32')
  cd C:\Users\KSteinhardt\Dropbox
else
  cd $HOME/Dropbox
endif


" GUI fonts
if has('win32')
  set guifont=Lucida_Sans_Typewriter:h12
elseif has('mac')
  set guifont=Monaco:h15
elseif has('unix')
  set guifont=Monospace
endif


" Mappings
imap <F11> <c-o><F11>
imap <F12> <c-o><F12>
imap hh <Esc>
inoremap <down> <nop>
inoremap <left> <nop>
inoremap <right> <nop>
inoremap <up> <nop>
nmap <Space> <PageDown>
nnoremap / /\v
nnoremap ; :
nnoremap <F11> :set spelllang=en_gb spell<cr>
nnoremap <F12> :set spelllang=nl spell<cr>
nnoremap <leader>, :set hls<cr>/FIXME<cr>
nnoremap <leader><space> :set nohls<cr>
nnoremap <leader>h yypVr=A<cr><cr>
nnoremap <leader>w :%s/\s\+$//<cr>:let @/=''<cr>
nnoremap j gj
nnoremap k gk
vnoremap / /\v


" Unicode support
if has("multi_byte")
  if &termencoding == ""
    let &termencoding = &encoding
  endif
  set encoding=utf-8
  setglobal fileencoding=utf-8
  set fileencodings=ucs-bom,utf-8,latin1
endif
