" Example Vim configuration.
" Copy or symlink to ~/.vimrc or ~/_vimrc.

set nocompatible                  " Must come first because it changes other options.
set modelines=0                   " Security

silent! call pathogen#runtime_append_all_bundles()

syntax enable                     " Turn on syntax highlighting.
filetype plugin indent on         " Turn on file type detection.

set encoding=utf-8
set showcmd                       " Display incomplete commands.
set showmode                      " Display the mode you're in.

set ttyfast

set backspace=indent,eol,start    " Intuitive backspacing.

set hidden                        " Handle multiple buffers better.

set wildmenu                      " Enhanced command line completion.
set wildmode=list:longest,list:full
set wildignore+=*.o,*.obj,.git,*.rbc


set ignorecase                    " Case-insensitive searching.
set smartcase                     " But case-sensitive if expression contains a capital letter.

set number                        " Show line numbers.
set ruler                         " Show cursor position.

set incsearch                     " Highlight matches as you type.
set hlsearch                      " Highlight matches.
set showmatch

" Backups
set backup                        " enable backups

" set wrap                          " Turn on line wrapping.
set nowrap
set textwidth=79
set formatoptions=qrn1
set scrolloff=3                   " Show 3 lines of context around the cursor.

set list listchars=tab:\ \ ,eol:¬,trail:·

set title                         " Set the terminal's title

"set visualbell                   " No beeping.
set noerrorbells                  " No noise.

set laststatus=2                  " Always show status line.

set nobackup                      " Don't make a backup before overwriting a file.
set nowritebackup                 " And again.

" UNCOMMENT TO USE
set tabstop=2                    " Global tab width.
set shiftwidth=2                 " And again, related.
set expandtab                    " Use spaces instead of tabs
set smarttab
set autoindent
set backspace=start,indent

nmap <D-[> <<
nmap <D-]> >>
vmap <D-[> <gv
vmap <D-]> >gv
imap <D-[> <ESC><<i
imap <D-]> <ESC>>>i
nnoremap j gj
nnoremap k gk

imap <S-CR> <ESC>A<CR>
imap <D-CR> <ESC>A;<CR>

inoremap <F1> <ESC>
nnoremap <F1> <ESC>
vnoremap <F1> <ESC>

" Folding
set foldlevelstart=0
nnoremap <leader>ft Vatzf

" HTML tag closing
inoremap <C-_> <Space><BS><Esc>:call InsertCloseTag()<cr>a

" vnoremap <D-/> gcc
" inoremap <D-/> <ESC>gcci

function! MyFoldText()
    let line = getline(v:foldstart)

    let nucolwidth = &fdc + &number * &numberwidth
    let windowwidth = winwidth(0) - nucolwidth - 3
    let foldedlinecount = v:foldend - v:foldstart

    " expand tabs into spaces
    let onetab = strpart('          ', 0, &tabstop)
    let line = substitute(line, '\t', onetab, 'g')

    let line = strpart(line, 0, windowwidth - 2 -len(foldedlinecount))
    let fillcharcount = windowwidth - len(line) - len(foldedlinecount) - 4
    return line . '…' . repeat(" ",fillcharcount) . foldedlinecount . '…' . ' '
endfunction
set foldtext=MyFoldText()

inoremap jj <ESC>

set laststatus=2                  " Show the status line all the time

" Useful status information at bottom of screen
set statusline=[%n]\ %<%.99f\ %h%w%m%r%y\ %{exists('*CapsLockStatusline')?CapsLockStatusline():''}%=%-16(\ %l,%c-%v\ %)%P


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

" Turn on line highlighting
set cursorline

imap <C-l> <Space>=><Space>

let mapleader = ","

" Nice commands to run the current ruby file
map <D-r> :!source ~/.bash_profile; cd .; r %<CR>

" Set up command for NERDTree
map <leader>n :NERDTree<CR>

" NERDTree options
let g:NERDTreeShowHidden = 1
let g:NERDTreeIgnore = ['\~$', '\.git$', '\.swp$', '\.DS_Store$']

" Make backspace work the way it should
" set backspace=2

" Make backspace and cursor keys wrap accordingly"
set whichwrap+=<,>,h,l

" Make searches case-insensitive
" set ignorecase

" Make editing .vimrc easier
map <leader>v :sp ~/.vimrc<CR>
map <leader>V :source ~/.vimrc<CR>:filetype detect<CR>:exe ":echo 'vimrc reloaded'"<CR>

function! AckGrep(command)
  cexpr system("ack -a" . a:command)
  cw
endfunction

command! -nargs=+ -complete=file Ack call AckGrep(<q-args>)

" Omni Completion
" *************************************************************
autocmd FileType html :set omnifunc=htmlcomplete#CompleteTags
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags
autocmd FileType php set omnifunc=phpcomplete#CompletePHP
autocmd FileType c set omnifunc=ccomplete#Complete
" May require ruby compiled in
autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete



" make and python use real tabs
au FileType make                                     set noexpandtab
au FileType python                                   set noexpandtab

" make markdown and txt wrap
au FileType markdown                                 set wrap
au Filetype markdown                                 set linebreak

au FileType txt                                 set wrap
au Filetype txt                                 set linebreak

" Thorfile, Rakefile and Gemfile are Ruby
au BufRead,BufNewFile {Gemfile,Rakefile,Thorfile,config.ru}    set ft=ruby

function s:setupWrapping()
  set wrap
  set wm=2
  set textwidth=72
endfunction

function s:setupMarkup()
  call s:setupWrapping()
  map <buffer> <Leader>p :Mm <CR>
endfunction

" md, markdown, and mk are markdown and define buffer-local preview
au BufRead,BufNewFile *.{md,markdown,mdown,mkd,mkdn} call s:setupMarkup()

au BufRead,BufNewFile *.txt call s:setupWrapping()

" Spellcheck
nmap <silent> <leader>s :set spell!<CR>

" Set region to British English
set spelllang=en_us

" Lines that wrap
:set showbreak=•



colorscheme ir_black
