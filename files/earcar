set nocompatible                  " Must come first because it changes other options.

silent! call pathogen#runtime_append_all_bundles()
silent! call pathogen#helptags()

syntax enable                     " Turn on syntax highlighting.
filetype plugin indent on         " Turn on file type detection.

runtime macros/matchit.vim        " Load the matchit plugin.

set showcmd                       " Display incomplete commands.
set showmode                      " Display the mode you're in.

set backspace=indent,eol,start    " Intuitive backspacing.

set hidden                        " Handle multiple buffers better.

set wildmenu                      " Enhanced command line completion.
set wildmode=list:longest         " Complete files like a shell.

set ignorecase                    " Case-insensitive searching.
set smartcase                     " But case-sensitive if expression contains a capital letter.

set number                        " Show line numbers.
set ruler                         " Show cursor position.

set incsearch                     " Highlight matches as you type.
set hlsearch                      " Highlight matches.

set wrap                          " Turn on line wrapping.
set scrolloff=3                   " Show 3 lines of context around the cursor.

set title                         " Set the terminal's title

set visualbell                    " No beeping.

set nobackup                      " Don't make a backup before overwriting a file.
set nowritebackup                 " And again.
set directory=$HOME/.vim/tmp//,.  " Keep swap files in one location

set tabstop=2                     " Global tab width.
set shiftwidth=2                  " And again, related.
set expandtab                     " Use spaces instead of tabs

set laststatus=2                  " Show the status line all the time
" Useful status information at bottom of screen
set statusline=[%n]\ %<%.99f\ %h%w%m%r%y\ %{fugitive#statusline()}%{exists('*CapsLockStatusline')?CapsLockStatusline():''}%=%-16(\ %l,%c-%v\ %)%P

colorscheme solarized             " The best colorscheme ever.
set background=dark               " Background.

" Change <leader> to ,
let mapleader = ","
let g:mapleader = ","

" Tab mappings.
map <leader>tt :tabnew<cr>
map <leader>te :tabedit
map <leader>tc :tabclose<cr>
map <leader>to :tabonly<cr>
map <leader>tn :tabnext<cr>
map <leader>tp :tabprevious<cr>
map <leader>tf :tabfirst<cr>
map <leader>tl :tablast<cr>
map <leader>tm :tabmove

" Controversial...swap colon and semicolon for easier commands
" nnoremap ; :
" nnoremap : ;
" 
" vnoremap ; :
" vnoremap : ;

" Automatic fold settings and indent style for specific files.
" autocmd FileType ruby setlocal foldmethod=syntax
autocmd FileType css  setlocal foldmethod=indent
autocmd FileType c    setlocal cinoptions=l1,t0,(0,u0 shiftwidth=4
autocmd FileType tex  setlocal spell linebreak
autocmd FileType make setlocal tabstop=8 shiftwidth=8 noexpandtab

" Specific files
autocmd BufNewFile,BufRead  *_spec.rb           compiler rspec    " For the MakeGreen plugin and Ruby RSpec.
autocmd BufWritePost        .vimrc,vimrc,_vimrc source $MYVIMRC   " Apply any changes of this file immediately after saving it
autocmd BufNewFile,BufRead  *.ym                set filetype=yacc " For Objective-C enabled yacc files.

" Change MakeGreen mapping from <leader>t to <leader>]
map <leader>] <Plug>MakeGreen

" Comment lines like in TextMate
map <D-/> :TComment<CR>

" Fast file navigation with Command-T
map <D-O> :CommandT<CR>

" Indent and remove trailing whitespaces
map <leader>iw gg=G:%s/\s\+$//e<cr>:noh<cr>

" Use arrow keys to move between displayed lines
map <down> gj
map <up>   gk

" Map tenderlove's GithubLink to <leader>gh
vnoremap <silent> <Leader>gh :call GithubLink()<CR>

" Always use latex syntax
let g:tex_flavor='latex'
