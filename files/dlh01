


" Pathogen.vim {{{
"

" https://github.com/tpope/vim-pathogen
" Must be called before filetype stuff
call pathogen#infect()
call pathogen#helptags()


" }}}
" Preamble {{{
"
set nocompatible



" }}}
" Filetypes {{{
"
filetype plugin indent on " load plugin and indent files for specific file types; loads ftplugin.vim and indent.vim in the runtimepath



" }}}
" Syntax highlighting {{{
"
syntax enable " enable highlighting; sources $VIMRUNTIME/syntax/syntax.vim



" }}}
" Global options {{{
"
let mapleader=","
set autoindent " copy indent from current line when starting a new line
set background=dark
set backspace=2 " allow for backspacing over autoindents, line breaks, and the start of inserts
set backup " save backups
set backupdir=~/temp/vim/backup/ " save backup files here
set cinwords= " no funny indents after words useful when writing C
set clipboard+=unnamed " add the unnamed register to the clipboard
    colorscheme solarized
set cpoptions=c " see :h cpoptions
set debug=msg " error messages don't disappear immediately after startup
set directory=~/temp/vim/swap/ " save swap files here
set encoding=utf-8
set expandtab " use the appropriate number of spaces to insert a tab in Insert mode; use spaces in indents with > and < with autoindent on
set foldlevelstart=0 " start editing with some (not all) folds closed
" set formatoptions=tcqron " see :help fo-table
" set formatprg=par\ -w70
set gdefault " search and replace globally "/g/" by default
set guioptions+=mg " see :h guioptions
set guioptions-=T " no toolbar in gui
set hidden " allow hiding unmodified buffers
set history=1000
set ignorecase " ignore case in searches
set incsearch " search incrementally
set laststatus=2 " always display a status line
set linebreak " display linebreaks by word, not character
set listchars=tab:▸\ ,eol:¬ " specify tab and EOL characters used in :set list (or :set list!)
set matchtime=2 " milliseconds of highlighting matching bracket (from 'showmatch')
set mousehide " hide mouse when typing
set nohlsearch " don't highlight searches; see toggle below
set novisualbell " my eyes!
set number " show line numbers
set pastetoggle=<F7> " toggle paste
set scrolloff=8 " keep N lines at the top or bottom while scrolling
set sidescroll=1 " minimal number of columns to scroll horizontally
set sidescrolloff=8 " keep N lines to the left and right of cursor if 'nowrap' is set
set shiftwidth=2 " number of spaces that an (auto)indent uses (>>, <<, etc)
set showmatch " when a bracket is inserted, briefly jump to the matching one
set smartcase " override ignorecase if search patter contains uppercases
set smartindent " insert indent after a line ending in { or before a line starting with }
set softtabstop=2 " number of spaces that a <Tab> counts for in insert mode
set spell " spell-check on
set spellsuggest=best,20 " give 20 of the best spelling suggestions
set splitbelow " vsplit new windows below the current window
set splitright " split new windows to the right of the current window
set statusline=\     
set statusline+=%f    " Path.
set statusline+=%m   " Modified flag.
set statusline+=%r   " Readonly flag.
set statusline+=%w   " Preview window flag.
set statusline+=\    " Space.
set statusline+=%{fugitive#statusline()}
set statusline+=%=   " Right align.
"set statusline+=(%{getcwd()})\  " get current working directory
" File format, encoding and type.  Ex: "(unix/utf-8/python)"
set statusline+=(
set statusline+=%{&ff}                        " Format (unix/DOS).
set statusline+=/
set statusline+=%{strlen(&fenc)?&fenc:&enc}   " Encoding (utf-8).
set statusline+=/
set statusline+=%{&ft}                        " Type (python).
set statusline+=)
" Line and column position and counts.
set statusline+=\ (line\ %l\/%L,\ col\ %03c)
set statusline+=\   
set t_Co=256 " colors
set tabstop=2 " number of spaces that a <Tab> counts for
set textwidth=0 " by default, no max width
set timeoutlen=500 " allow half a second to finish a command
set whichwrap+=<,>,[,],h,l " left, right, h, and l move to previous and next line
set wildmenu " enhanced command-line completion
set wildignore+=.git " version control
set wildignore+=*.aux,*.out,*.toc " LaTeX intermediary files
set wildignore+=*.jpg,*.bmp,*.gif,*.png,*.jpeg " binary images
set wildignore+=*.sw? " Vim swap files
set wildignore+=*.DS_Store " OSX bullshit
set wildignore+=*.zip " compressed files



" }}}
" GUI-only options {{{
"
if has("gui_running")
  set autochdir " change to the directory of the buffer opened or switched into; not in CLI vim
  set guioptions-=r " don't show scrollbars
  set guioptions-=R " don't show scrollbars
  set guioptions-=l " don't show scrollbars
  set guioptions-=L " don't show scrollbars
  set guioptions-=b " don't show scrollbars
  set nonumber " turn numbering off before turning relative numbering on
  set relativenumber " count lines relative to current line
  set undofile " create an undo file
  set undodir=~/temp/vim/undo/ " put undo files here
endif



" }}}
" OS-specific options {{{
"
if MySys() == "mac"
    if has("gui_running")
        set lines=80
        set columns=120
        " set guifont=Menlo:h11
        " set guifont=Droid\ Sans\ Mono:h10
        set guifont=Inconsolata:h20
    endif
    let g:LustyJugglerSuppressRubyWarning = 1 " terminal vim lacks ruby support
elseif MySys() == "linux"
    set guifont=Bitstream\ Vera\ Sans\ Mono\ 9
    set autochdir " change to the directory of the buffer opened or switched into
    colorscheme liquidcarbon
    if has("gui_running")
        colorscheme solarized
        set lines=48
        set columns=170
    endif
    let g:LustyJugglerSuppressRubyWarning = 1 " terminal vim lacks ruby support
endif



" }}}
" Filetype-specific options {{{
"

" CSS, SASS, Less
" -------------------------------------------------------------------
autocmd BufNewFile,BufRead *.less setlocal filetype=less
autocmd BufNewFile,BufRead *.scss setlocal filetype=scss


" Markdown
" -------------------------------------------------------------------
autocmd FileType markdown setlocal textwidth=60


" Plain text
" -------------------------------------------------------------------
autocmd FileType txt setlocal textwidth=60


" Textile
" -------------------------------------------------------------------
autocmd FileType textile setlocal textwidth=0


" Vim
" -------------------------------------------------------------------
" when vimrc is written, reload it
autocmd! bufwritepost vimrc source ~/Dropbox/vim/vimrc
autocmd! FileType vim setlocal foldmethod=marker



" }}}
" Global autocommands {{{
"
" resize splits when the window is resized
autocmd VimResized * exe "normal! \<c-w>="



" }}}
" Global key mappings {{{
"

" Leader-based shortcuts separated by modes
" -------------------------------------------------------------------
" Quick save
map <leader>w :w<cr>
" Quick close window
map <leader>c :close<cr>
" Quick delete buffer
map <leader>b :bd<cr>
" Quick quit
map <leader>q :q<cr>
" Quick save and quit
map <leader>x :x<cr>
" Quick edit new buffer
map <leader>n :enew<cr>
" Quick open vimrc
map <leader>ev :e ~/Dropbox/vim/vimrc<cr>
" Assuming I'll never purposely write ',w' or ',x', etc, allow me to type them in insert mode
imap <leader>w <C-o>:w<cr>
imap <leader>x <C-o>:x<cr>
" Go back to normal mode
imap <leader><leader> <Esc>
" Open webpage
nmap <silent> <leader>f :! open %<cr><cr>
" Set window to 80 columns or 160 columns
nmap <leader>[ :set co=80<cr>
nmap <leader>] :set co=160<cr>
" Make Y consistent with C and D
nnoremap Y y$
" Reduce RSI -- Make underscores and dashes easier
" Only in the GUI, or else iTerm freaks
if has("gui_running")
  imap <silent> <D-k> _
  imap <silent> <D-d> _
  imap <silent> <D-K> -
  imap <silent> <D-D> -
endif

" Move back and forth through previous and next buffers
nnoremap <silent> ,m :bn<CR>
nnoremap <silent> ,. :bp<CR>
" Reselect visual block after indent/outdent
vnoremap < <gv
vnoremap > >gv
" Quick-MultiMarkdown current file to HTML
nnoremap ,mmd :! multimarkdown -b %<cr>


" ~~ Common commands mapped to numbers ~~
" Toggle spellcheck
nmap <leader>1 :set spell!<cr>
" Sort alphabetically
nmap <silent> <leader>2 :sort<cr>
" Quick call DumbQuotes
nmap <leader>3 :call DumbQuotes()<cr><cr>
" Global search and replace
nmap <leader>5 :%s/
" Undo *everything* (presumably)
nmap <leader>9 :earlier 1000<cr>:echo "Undid 1000 things"<cr>
" Wipe out all buffers (presumably)
nmap <leader>0 :1,100bd<cr>:echo "Deleted all buffers (probably)"<cr>



" Window and buffer management
" -------------------------------------------------------------------
" Easy window navigation
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

" Keep search matches in the middle of the window
nnoremap n nzz
nnoremap N Nzz



" Other
" -------------------------------------------------------------------
" Remap : to ;
map ; :
" Quickly reformat paragraph with formatprg
nmap Q gqap
" Move up and down by screen line, not file line
nmap j gj
nmap k gk
" Go away, manual key
nnoremap K <nop>
" Toggle search highlighting
nnoremap <F7> :set hlsearch! hlsearch?<cr>



" }}}
" Plugin-specific preferences and key mappings {{{
"

" Lusty Juggler
" -------------------------------------------------------------------
let g:LustyJugglerShowKeys = 'a' " display key with buffer name
" open the juggler buffer, recommended by the author
map <leader>j <leader>lj


" Solarized
" -------------------------------------------------------------------
call togglebg#map("<F5>") " switch light/dark backgrounds


" Gundo
" -------------------------------------------------------------------
let g:gundo_preview_bottom = 1
nnoremap <silent> <F6> :GundoToggle<cr>


" Fugitive
" -------------------------------------------------------------------
nnoremap <leader>gd :Gdiff<cr>
nnoremap <leader>gs :Gstatus<cr>
nnoremap <leader>gw :Gwrite<cr>
nnoremap <leader>gc :Gcommit<cr>


" Hammer
" -------------------------------------------------------------------
let g:HAMMER_TEMPLATE = 'github'
nnoremap <leader>p :w<cr>:Hammer<cr>


" Rainbow Parentheses
" -------------------------------------------------------------------
au VimEnter html,php,css,scss,javascript,python RainbowParenthesesToggle
au Syntax html,php,css,scss,javascript,python RainbowParenthesesLoadRound
au Syntax html,php,css,scss,javascript,python RainbowParenthesesLoadSquare
au Syntax html,php,css,scss,javascript,python RainbowParenthesesLoadBraces


" NERDTree
" -------------------------------------------------------------------
let NERDTreeMinimalUI = 1 "disable a few UI labels and text
let NERDTreeDirArrows = 1 "use right and down arrows for dir nodes
"Toggle NERDTree
nmap <D-N> :NERDTreeToggle<cr>
"Reveal the current file and places the cursor on it
nnoremap <silent> <C-\> :NERDTreeFind<cr> 


""
" Tagbar
"
nnoremap <silent> <leader>T :TagbarToggle<cr>



" }}}
" Functions {{{
"
function! DumbQuotes()
    :%s/’/'/g
    :%s/‘/'/g
    :%s/’/'/g
    :%s/“/"/g
    :%s/”/"/g
    :%s/“/"/g
    :%s/—/---/g
    :%s/–/--/g
    :%s/…/.../g
endfunction
