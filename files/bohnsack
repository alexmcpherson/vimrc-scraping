set nocompatible     " use vim (not vi) defaults
set hlsearch         " turn on search highlight (highlights all matches)
set background=dark  " our xterms are -fg White -bg Black
syn enable           " syntax highlighting please
set tabstop=4        " move 4 spaces when I tab
set shiftwidth=4     " A tab is 4 spaces
set expandtab        " convert tabs to spaced
set shiftround       " always indent/outdent to the nearest tabstop

set list             "show exactly what's in file.  E.g., tab characters
set lcs=tab:»·       "show tabs as this funny character
set lcs+=trail:·     "show trailing spaces as this funny character

set autoindent
"set textwidth=76

set showcmd    " Show (partial) command in status line.
set showmatch  " Show matching brackets.
set ruler      " Show the line and column numbers of the cursor
set ignorecase " Do case insensitive matching
set smartcase  " case-sensitive if search contains an uppercase character
set incsearch  " Incremental search

set laststatus=2 " show status line?  Yes, always! Even for only one buffer.
set wildmenu     " turn on wildmatch show all possible matches with file name
" Have the tab completion behave similarly to a shell, i.e. complete only up
" to the point of ambiguity (while still showing you what your options are)
set wildmode=list:longest

set nobackup     " backups are for wimps  ;-)
set visualbell   " Instead of emitting an obnoxious noise, the window will flash very briefly

" Paste Mode On/Off 
map <F12> :call Paste_on_off()<CR>
set pastetoggle=<F12>

let paste_mode = 0 " 0 = normal, 1 = paste

func! Paste_on_off()
        if g:paste_mode == 0
                set paste
                let g:paste_mode = 1
        else
                set nopaste
                let g:paste_mode = 0
        endif
        return
endfunc

filetype on           " Enable filetype detection
filetype indent on    " Enable filetype-specific indenting
filetype plugin on    " Enable filetype-specific plugins
imap <S-CR>    <CR><CR>end<Esc>-cc

" allow the mouse to do stuff like move cursor, scroll with scrollwheel,
" select text, resize panes, etc.  If you want an normal X11 copy that does't
" move the vim cursor, use shift select.
set mouse=a " allow the mouse to do stuff

" Allow mouse stuff to work inside of screen and tmux (resize splits, work
" with NERDtree pane, click on minibufexplorer "tabs" etc.
set ttymouse=xterm

" Toggle the NERDTree file browser.  Requires installation of NERDTree plugin:
" http://www.vim.org/scripts/script.php?script_id=1658
" http://www.youtube.com/watch?v=CPu9mDpSYj0&feature=related
nmap <silent> <C-N> :NERDTreeToggle<CR>

" Turn on a few good miniBufExpl features
" http://www.vim.org/scripts/script.php?script_id=159
let g:miniBufExplMapWindowNavVim = 1
let g:miniBufExplMapWindowNavArrows = 1
let g:miniBufExplMapCTabSwitchBufs = 1
let g:miniBufExplModSelTarget = 1
let g:miniBufExplUseSingleClick = 1

" Other plugins that should be installed for eliteness
" 1) minibuf explorer:
"    http://fholgado.com/minibufexpl
"    http://www.vim.org/scripts/script.php?script_id=159
" 2) tComment:  use "gc" to comment/uncomment visually selected text or "gcc"
"               on a single line
"    http://www.vim.org/scripts/script.php?script_id=1173

" Enable 256 colors for the zenburn colorscheme
set t_Co=256

" Setup the zenburn color scheme, which assumes backgound of #3a3a3a
"colors zenburn
" Setup ir_black color scheme: http://blog.toddwerth.com/entries/8
colors ir_black

" Don't convert input tabs into spaces (as is the default in this .vimrc),
" when dealing with Makefiles.  Makefiles require tabs '\t' or they don't
" work.
:autocmd FileType make set noexpandtab
