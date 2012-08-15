"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Custom VIM settings for Alexander Schearer
"
" Plugins I am using or have used:
"  * SuperTab http://www.vim.org/scripts/script.php?script_id=1643
"  * Vim Debugger http://www.vim.org/scripts/script.php?script_id=1929
"  * NerdCommenter http://www.vim.org/scripts/script.php?script_id=1218
"  * Visual Search http://vim.wikia.com/wiki/VimTip171
"  * Tag List http://www.vim.org/scripts/script.php?script_id=273
"  * VCS Command http://www.vim.org/scripts/script.php?script_id=90
"
" See ~/.vim/after/ftplugin for additional configuration.
"

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" General Configuration

set nocompatible                  " Don't try to be compatible with vi
set noerrorbells                  " Turn off annoying bells
fixdel                            " Fix delete to work across platforms
set backspace=2                   " Allow backspacing over indent, EOL, BOL 
set foldmethod=manual             " Turn on code folding
set foldlevel=200                 " Don't fold anyting by default
set laststatus=2                  " Always display the status bar
set statusline=%t%=%c,%l/%L\ %P   " file column,line/lines %
set scrolloff=3                   " Keep three lines ahead of cursor

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Syntax Configuration

" Turn on filetype recognition, used in syntax highlighting, omnisense,
" and smart indenting
filetype on                       " Enable filetype detection,
filetype indent on                " use filetype specific indenting,
filetype plugin on                " also allow filetype specific plugins,
syntax on                         " Turn on syntax highlighting
color slate

" Set up indents to use 4 spaces, set a line to be 80 characters and 
" configure what wraps and what doesn't
set expandtab                     " Expand tabs to spaces
set shiftwidth=4                  " Shifts are four spaces
set tabstop=4                     " Tabs are four spaces too
set smartindent                   " Try to auto indent intelligently
set textwidth=80                  " Let's keep things on a single screen
set nowrap                        " Never wrap
set whichwrap=h,l                 " Make these wrap intuitively

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Search Configuration
 
set incsearch                     " Start searching as I type
set nohlsearch                    " Don't highlight searches, I'm not blind
set gdefault                      " Make searchs global by default

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Shortcut Configuration

set completeopt=longest           " Have autocomplete match longest,
set completeopt+=menuone          " display a drop down menu,
set completeopt+=preview          " and any additional info in a preview

" Make automplete easier to use
inoremap <C-F> <C-X><C-O>         

" Have Y work like D, C since yy works like dd, cc
noremap Y y$

" Map backspace in normal mode to work like expected
noremap <BS> X

" Have ctrl-j go up a window and ctrl-k down a window
noremap <C-J> <C-W><C-J>
noremap <C-K> <C-W><C-K>

" Have ctrl-h go to the left window and ctrl-l go to the right window
noremap <C-H> <C-W><C-H>
noremap <C-L> <C-W><C-L>

" Have ctrl-n and ctrl-p step through compile errors
nmap <C-N> :cn<CR>
nmap <C-P> :cp<CR>

" Go to definition to a new file
nmap gf <C-W>f

" Turn the ctags sidebar on/off
nmap <C-T> :TlistToggle<CR>


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Functions, etc

" Loads skeleton files based on extension.
" Script by scrooloose on Freenode
autocmd bufnewfile * call s:loadSkeleton() 
function! s:loadSkeleton() 
    let skel_path="~/.vim/skeletons/"
    if has ("gui_win32")
        let skel_path="~/vimfiles/skeletons/"
    endif
    let skel_file = expand(skel_path . &filetype) 
    if filereadable(expand(skel_path . &filetype)) 
        exec "read " . skel_file
        0d 
    endif 
endfunction 

" Have files default to human readable if
" they aren't already identified.
au BufRead,BufNewFile * setfiletype human

" Count the instances of the word in the document.
function! Count(word)
    execute '%s/' . a:word . '//n'
endfunction


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Windows specific stuff here

if has("gui_win32")
    " Set the path to ctags since it doesn't find it on its own.
    let Tlist_Ctags_Cmd='~\bin\ctags.exe'
    "autocmd GUIEnter * :simalt ~x " Open in full screen mode
    set guifont=Courier_new       " Use a prettier font
    set shell=powershell.exe      " Use powershell instead of cmd
endif
