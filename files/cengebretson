" Version 1.9.1            "
"--------------------------"
" Last Changed: 08/06/2012 "
"--------------------------"

"------------------"
" General Settings "
"------------------"

" call pathogen
call pathogen#infect()

" set file types
filetype plugin indent on  " Automatically detect file types.
syntax on                  " syntax highlighting

" set initial values
set nocompatible           " must be first line
set background=dark        " Assume a dark background
set mouse=a                " automatically enable mouse usage
set autoread               " Set to auto read when a file is changed from the outside
set shortmess+=filmnrxoOtT " abbrev. of messages (avoids 'hit enter')
set virtualedit=onemore    " allow for cursor beyond last character
set history=1000           " Store a ton of history (default is 20)

" better unix / windows compatibility
set viewoptions=folds,options,cursor,unix,slash

" Turn backup off, since most stuff is in svn/git anyway...
set nobackup
set nowb
set noswapfile

" Treat JSON files like JavaScript
au BufNewFile,BufRead *.json set ft=javascript

" Change to directory of file that is currently in the buffer
autocmd BufEnter * silent! lcd %:p:h

" Remove trailing white space when saving
autocmd BufWritePre * :%s/\(\S\)\s\+$/\1/e




"----------"
"  VIM UI  "
"----------"

color jellybeans               " load a colorscheme

set showmode                   " display the current mode
set showcmd                    " show incomplete cmds down the bottom

set cursorline                 " highlight current line
hi cursorline guibg=#333333
set cursorcolumn
hi cursorcolumn guibg=#262626

set backspace=indent,eol,start " backspace settings
set linespace=0                " No extra spaces between rows
set nu                         " Line numbers on
set showmatch                  " show matching brackets/parenthesis
set incsearch                  " find as you type search
set hlsearch                   " highlight search terms
set gdefault                   " the /g flag on :s substitutions by default
set winminheight=0             " windows can be 0 line high
set ignorecase                 " case insensitive search
set smartcase                  " case sensitive when uc present

set wildmenu                   " show list instead of just completing
set wildmode=list:longest,full " command <Tab> completion, list matches, then longest common part, then all.
set wildignore+=*.o,*.obj,.git,*.rbc,*.class,.svn,vendor/gems/*

set scrolljump=5               " lines to scroll when cursor leaves screen
set scrolloff=3                " minimum lines to keep above and below cursor

set list                       " Highlight problematic whitespace
set listchars=tab:» ,trail:.,extends:#,nbsp:.

" use system clipboard for copy/paste
set clipboard=unnamed





"------------"
" Formatting "
"------------"

set nowrap                    " wrap long lines
set whichwrap=b,s,h,l,<,>,[,] " backspace and cursor keys wrap to
set autoindent                " indent at the same level of the previous line
set shiftwidth=4              " use indents of 4 spaces
set noexpandtab               " tabs are tabs, not spaces
set tabstop=4                 " an indentation every four columns
set softtabstop=4             " let backspace delete indent





"------------------"
" Auto Commands    "
"------------------"


" remove option that automatically inserts comment leader after hitting enter
autocmd! FileType * setlocal formatoptions-=r

" make Python follow PEP8 ( http://www.python.org/dev/peps/pep-0008/ )
autocmd FileType python set softtabstop=4 tabstop=4 shiftwidth=4 textwidth=79 expandtab

" Automatically go to relative number when using insert mode
autocmd InsertEnter * :set number
autocmd InsertLeave * :set relativenumber

" Autocommand to reload the status vim plugin for color changes
autocmd! ColorScheme *  source ~/.vim/bundle/statusline/plugin/statusline.vim




"------------------"
" Key (re)Mappings "
"------------------"

" These are to cancel the default behavior of d, D, c, C
" to put the text they delete in the default register.
" Note that this means e.g. "ad won't copy the text into
" register a anymore.  You have to explicitly yank it.
nnoremap d "_d
vnoremap d "_d
nnoremap D "_D
vnoremap D "_D
nnoremap c "_c
vnoremap c "_c
nnoremap C "_C
vnoremap C "_C
nnoremap x "_x
vnoremap x "_x
nnoremap X "_X
vnoremap X "_X

" The default leader is '\', but many people prefer ',' as it's in a standard location
let mapleader = ','

" Fast editing of the .vimrc
map <leader>ve :e $MYVIMRC<cr>
map <leader>vs :so $MYVIMRC<cr>

" remap the esc key
imap jj <Esc>

" Making it so ; works like : for commands. Saves typing and eliminates :W style typos due to lazy holding shift.
nnoremap ; :

" upper/lower word
nmap <leader>u mQviwU`Q
nmap <leader>l mQviwu`Q

" upper/lower first char of word
nmap <leader>U mQgewvU`Q
nmap <leader>L mQgewvu`Q

" Yank from the cursor to the end of the line, to be consistent with C and D.
nnoremap Y y$

" Underline aline with =
nnoremap <leader>1 yypVr=

"clearing highlighted search
nmap <silent> <leader>/ :nohlsearch<CR>

" use :w!! to write to a file using sudo if you forgot to 'sudo vim file'
" (it will prompt for sudo password when writing)
cmap w!! %!sudo tee > /dev/null %

" Command to call formatting on the entire file
nmap <Leader>= gg=G

" set text wrapping toggles
nmap <silent> <leader>tw :set invwrap<CR>:set wrap?<CR>

" find merge conflict markers
nmap <silent> <leader>fc <ESC>/\v^[<=>]{7}( .*\|$)<CR>

" clean up white space quickly
nnoremap <leader>W :%s/\s\+$//<cr>:let @/=''<CR>
nnoremap <leader>w :%s/\(\S\)\s\+$/\1/<cr>:let @/=''<CR>

" replace selected text
vnoremap <C-r> "hy:%s/<C-r>h//g<left><left>

" Visually select the text that was last edited/pasted
nmap gV `[v`]

" Map command-[ and command-] to indenting or outdenting
" while keeping the original selection in visual mode
vmap <D-]> >gv
vmap <D-[> <gv

nmap <D-]> >>
nmap <D-[> <<

omap <D-]> >>
omap <D-[> <<

imap <D-]> <Esc>>>i
imap <D-[> <Esc><<i

" movement by screen line instead of file line
nnoremap j gj
nnoremap k gk

" Insert just a single character
nmap <leader>i i<space><esc>hr

" mapping to perform coffee compile on file or visual selection
nmap <silent> <leader>cc :CoffeeCompile<CR>
vmap <silent> <leader>cc :CoffeeCompile<CR>

" mapping to setup ack with the current file type
nmap <leader>a :call FindProjectRoot()<CR>:Ack --<c-r>=&filetype<cr><space>

" mapping to reset the expandtab values for a file
nmap <silent> <leader>tt :set expandtab!<cr>:retab!<cr>

" mapping to use a different tab setting more suitable for other languages
nmap <silent> <leader>t2 :set softtabstop=2 tabstop=2 shiftwidth=2 expandtab<CR>:retab!<cr>
nmap <silent> <leader>t4 :set softtabstop=4 tabstop=4 shiftwidth=4 expandtab<CR>:retab!<cr>

" open up the current file's directory in finder
nmap <silent> <leader>o :lcd %:h<CR>:! open .<cr><cr>

" move to the project root folder
nmap <silent> <leader>fp :call FindProjectRoot()<CR>:pwd<CR>

" move to the project root folder and open finder
nmap <silent> <leader>fpo :call FindProjectRoot()<CR><leader>o

" move to the project root folder and call Ack
nmap <leader>fpa :call FindProjectRoot()<CR><leader>a

" remap peepopen to first try to find the project root
nmap <silent> <leader>p :call FindProjectRoot()<CR><Plug>PeepOpen

" cd to the directory containing the file in the buffer
nmap <silent> <leader>cd :lcd %:h<CR>:pwd<CR>

" mapping for loading local .lvimrc file
nmap <silent> <leader>ll :call LoadLocalVimrc()<CR>

" mapping to convert a split to a tab
nmap <leader>to <C-W><S-T>

" Insert newline
map <leader><Enter> O<ESC>k

" remapping ESC to be a toggle for insert/normal mode
nnoremap <Esc> i
inoremap <Esc> <Esc>l




"---------------"
" Function Keys "
"---------------"

" Toggle relative line numbers
nmap <silent> <F1> :call NumberToggle()<cr>
imap <silent> <F1> <ESC>:call NumberToggle()<cr>

" Toggle normal line numbers
nmap <silent> <F2> :set nu!<CR>
imap <silent> <F2> <ESC>:set nu!<CR>

" Toggle Tagbar display
nmap <silent> <F3> :TagbarToggle<CR>
imap <silent> <F3> <ESC>:TagbarToggle<CR>

" Toggle paste mode
nmap <silent> <F4> :set invpaste<CR>:set paste?<CR>
imap <silent> <F4> <ESC>:set invpaste<CR>:set paste?<CR>

" Write file and Refresh browser and return focus to vim
nmap <silent> <F5> :call RefreshToggle()<cr>
imap <silent> <F5> <ESC>:w<CR>:call RefreshToggle()<CR>i
vmap <silent> <F5> :w<CR>:call RefreshToggle()<CR>





"--------------"
" GUI Settings "
"--------------"

" GVIM- (here instead of .gvimrc)
if has('gui_running')

    set guioptions-=T           " remove the toolbar
    set lines=40                " 40 lines of text instead of 24

    if has("autocmd")
        " Automatically resize splits when resizing MacVim window
        autocmd VimResized * wincmd =
    endif

    " Command-Option-ArrowKey to switch viewports
    map <D-S-Up>    <C-w>k
    map <D-S-Down>  <C-w>j
    map <D-S-Right> <C-w>l
    map <D-S-Left>  <C-w>h
    imap <D-S-Up>    <Esc> <C-w>k
    imap <D-S-Down>  <Esc> <C-w>j
    imap <D-S-Right> <Esc> <C-w>l
    imap <D-S-Left>  <Esc> <C-w>h

    " Bubble single and multiple lines (uses vim-unimpaired plugin).
    nmap <D-M-Down> ]e
    nmap <D-M-Up> [e
    vmap <D-M-Down> ]egv
    vmap <D-M-Up> [egv
    imap <D-M-Down> <ESC>]e
    imap <D-M-Up> <ESC>[e

    " Write file Refresh browser and retain focus on browser
    nmap <silent> <D-r> :w<CR>:RRB<CR>
    imap <silent> <D-r> <ESC>:w<CR>:RRB<CR>i
    vmap <silent> <D-r> :w<CR>:RRB<CR>

endif

" Set font according to system
set gfn=Panic\ Sans:h12
set shell=/bin/bash






"-------------"
" Functions   "
"-------------"

" set default filename for local vimrc
if !exists("g:ProjectRootFinder")
    let g:ProjectRootFinder = ['.git', 'build.xml', 'Makefile', '.project', '.lvimrc']
endif

" upwards search project file
function! FindProjectRoot()
    let currentdir = expand("%:p:h")
    let cmd = 'cd '

    for filename in g:ProjectRootFinder
        let file = findfile(filename, expand("%:p:h") . ';')
        if filereadable(file)
            let b:ProjectRootPath = fnamemodify(file, ':p:h')
            break
        else
            let dir = finddir(filename, expand("%:p:h") . ';')
            if isdirectory(dir)
                let b:ProjectRootPath = substitute(fnamemodify(dir, ':p:h'),"/".filename . "$","","")
                break
            endif
        endif
    endfor

    if exists('b:ProjectRootPath') && stridx(currentdir, b:ProjectRootPath, 0) == 0
        let cmd .= b:ProjectRootPath
    else
        let cmd .= currentdir
    endif

    execute cmd
endfunction

" If the file .vimrc exists in the root of a git project - load it
function! LoadLocalVimrc()
    " first jump to project root if it exists
    call FindProjectRoot()

    " check for local lvimrc file
    let l:configFile = '.lvimrc'
    if filereadable(l:configFile)
        exec ":source " . l:configFile
    endif
endfunction

function! NumberToggle()
    if(&relativenumber == 1)
        set number
    else
        set relativenumber
    endif
endfunc

function! RefreshToggle()
    if (g:RefreshRunningBrowserReturnFocus == 0)
        echo "Refresh Browser returns focus to VIM"
        let g:RefreshRunningBrowserReturnFocus = 1
    else
        echo "Refresh Browser keeps focus on browser"
        let g:RefreshRunningBrowserReturnFocus = 0
    endif
endfunc





"---------"
" Plugins "
"---------"

" solarized options {
    let g:solarized_termtrans  = 1
    let g:solarized_termcolors = 256
    let g:solarized_contrast   = "high"
    let g:solarized_visibility = "high"
" }

" Supertab {
    let g:SuperTabDefaultCompletionType = "context"
" }

" Tabularize {
    nmap <leader>t= :Tabularize /=<CR>
    vmap <leader>t= :Tabularize /=<CR>
    nmap <leader>t: :Tabularize /:<CR>
    vmap <leader>t: :Tabularize /:<CR>
    nmap <leader>t:: :Tabularize /:\zs<CR>
    vmap <leader>t:: :Tabularize /:\zs<CR>
    nmap <leader>t, :Tabularize /,<CR>
    vmap <leader>t, :Tabularize /,<CR>
    nmap <leader>t<Bar> :Tabularize /<Bar><CR>
    vmap <leader>t<Bar> :Tabularize /<Bar><CR>
" }

" Enabling Zencoding
let g:user_zen_settings = {
            \  'php' : {
            \    'extends' : 'html',
            \    'filters' : 'c',
            \  },
            \  'xml' : {
            \    'extends' : 'html',
            \  },
            \  'haml' : {
            \    'extends' : 'html',
            \  },
            \  'erb' : {
            \    'extends' : 'html',
            \  },
            \  'eco' : {
            \    'extends' : 'html',
            \  },
            \  'jeco' : {
            \    'extends' : 'html',
            \  },
            \}

