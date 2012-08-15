"
" Personal preference .vimrc file
" Created by Jason Graham jasonNOSPAM@the-graham.com
" Based on one by Vincent Driessen
" https://github.com/nvie/vimrc/raw/master/vimrc
"

" This must be first, because it changes other options as side effect
set nocompatible

" Since pathogen is being used as a bundle, this must come first.
runtime bundle/vim-pathogen/autoload/pathogen.vim

" Use pathogen to easily modify the runtime path to include all
" plugins under the ~/.vim/bundle directory
filetype off " force reloading AFTER pathogen loaded
call pathogen#infect()
filetype plugin indent on " enable detection, plugins, and indenting in one step

" Prevent security exploits?
set modelines=1

" Some basic settings "{{{
set hidden          " hide buffers instead of closing them. This
"  means that if the current buffer can be put
"  into the background without being written; and the
"  marks and undo history are preserved
set switchbuf=useopen
" reveal already open files from the quickfix window
"  instead of opening new buffers
"set nowrap          " don't wrap lines
set tabstop=4       " a tab is 4 spaces
set expandtab       " expand out a tab to spaces by default
set backspace=indent,eol,start
" allow backspacing over everything in insert mode
set autoindent      " always set autoindenting on
set copyindent      " copy the previous indentation on autoindenting
set number          " always show line numbers
set shiftwidth=4    " number of spaces to use with autoindentation
set shiftround      " use multiple shiftwidth when indenting with <, >
set showmatch       " show matching parenthesis
set ignorecase      " ignore case when searching
set smartcase       " ignore case if search pattern is all lowercase,
"   case-sensitive otherwise
set smarttab        " insert tabs on the start of a line according to
"   shiftwidth, not tabstop
set hlsearch        " highlight search terms
set incsearch       " show search matches as you type

set history=1000     " Remeber many commands and search history
set undolevels=1000  " use many undo levels
if v:version >= 730
    set undofile     " Keep a persistent backup file
    if has("win32")
        set undodir=$HOME/vimfiles/.undo,$HOME/tmp,/tmp
    else
        set undodir=$HOME/.vim/.undo,$HOME/tmp,/tmp
    endif
endif
set wildignore=*.swp,*.bak,*.pyc,*.class
set notitle          " don't overwrite the terminal's title
set novisualbell     " don't beep
set noerrorbells     " don't beep
set cursorline       " Underline the current line, for quick orientation

set listchars=tab:>.,trail:.,extends:#,nbsp:.
set nolist           " don't show invisible characters by default,
"  this is enabled for some filetypes later

set formatoptions+=1 " When wrapping paragraphs, don't end lines
"  with 1 letter words

if v:version >= 730
    set colorcolumn=85   " See when a line is getting a bit long
endif

" Backup and swapfiles
set nobackup
"set noswapfile

if has("win32")
    set directory=$HOME/vimfiles/.tmp,$HOME/tmp,/tmp
else
    set directory=$HOME/.vim/.tmp,$HOME/tmp,/tmp
endif
" store swap files in one of these directories
" (in case it is ever turned on)

" hotkey for pastemode
set pastetoggle=<F2>

" remap leader key
let mapleader=","

"}}}

" Folding rules {{{
set foldenable        " Enable folding
set foldcolumn=2      " Add a fold column
set foldmethod=marker " detect triple-{ style fold markers
set foldlevelstart=0  " Start out with everything folded
set foldopen=block,hor,insert,jump,mark,percent,quickfix,search,tag,undo
" Which command trigger auto-unfold
"
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
    return line . ' …' . repeat(" ",fillcharcount) . foldedlinecount . ' '
endfunction
set foldtext=MyFoldText()
" }}}

" Navigation settings "{{{
" Remap j and k to act as expected when used on long, wrapped, lines
nnoremap j gj
nnoremap k gk

" easy window navigation
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l
"}}}

" Editor layout {{{
set termencoding=utf-8
set encoding=utf-8
set lazyredraw                  " don't update the display while executing macros
set laststatus=2                " tell VIM to always put a status line in, even
"    if there is only one window
set cmdheight=2                 " use a status bar that is 2 rows high

if has("gui_running")
    " Remove menu bar
    "set guioptions-=m

    " Remove toolbar
    set guioptions-=T

    " disable mouse select -> visual mode
    set mouse-=a

endif

" }}}

" Statusline though vim-statline {{{
let g:statline_fugitive = 1
let g:statline_no_encoding_string = 'NONE'
" }}}

" Indent highlight guides {{{
" :nmap <Leader>ig :IndentGuidesToggle<CR> " This is the default mapping
let g:indent_guides_guide_size=1
let g:indent_guides_start_level=2
"}}}

" Syntax highlighting and colorschemes {{{
set t_Co=256
if &t_Co >= 256 || has("gui_running")
    colorscheme zenburn
endif

if &t_Co > 2 || has("gui_running")
    " switch syntax highlighting on, when the terminal has colors
    syntax on
endif
"}}}

" Personal quick bindings (using leader key) {{{

" Quickly edit/reload the vimrc file
nmap <silent> <leader>ev :e $MYVIMRC<CR>
nmap <silent> <leader>sv :so $MYVIMRC<CR>

" Tame the quickfix window (open close uing ,f)
nmap <silent> <leader>f :QFix<CR>

command! -bang -nargs=? QFix call QFixToggle(<bang>0)
function! QFixToggle(forced)
    if exists("g:qfix_win") && a:forced == 0
        cclose
        unlet g:qfix_win
    else
        copen 10
        let g:qfix_win = bufnr("$")
    endif
endfunction

" Clears the search register
nmap <silent> <leader>/ :nohlsearch<CR>

" Strip all trailing whitespace from a file, using ,<space>
function! <SID>StripTrailingWhitespace()
    " Preparation: save last search, and cursor position.
    let _s=@/
    let l = line(".")
    let c = col(".")
    " Do the business:
    %s/\s\+$//e
    " Clean up: restore previous search history, and cursor position
    let @/=_s
    call cursor(l, c)
endfunction
nmap <silent> <leader><space> :call <SID>StripTrailingWhitespace()<CR>

" Highlight all trailing whitespace
highlight ExtraWhitespace ctermbg=red guibg=red
match ExtraWhitespace /\s\+$/
autocmd BufWinEnter * match ExtraWhitespace /\s\+$/
autocmd InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
autocmd InsertLeave * match ExtraWhitespace /\s\+$/
autocmd BufWinLeave * call clearmatches()

" Rainbow parenthesis
nmap <leader>R :RainbowParenthesesToggle<CR>
" }}}

" NERDTree settings {{{
" Put focus to the NERD Tree with F3 (tricked by quickly closing it and
" immediately showing it again, since there is no :NERDTreeFocus command)
nmap <leader>n :NERDTreeClose<CR>:NERDTreeToggle<CR>
nmap <leader>m :NERDTreeClose<CR>:NERDTreeFind<CR>
nmap <leader>N :NERDTreeClose<CR>

" Store the bookmarks file
if has("win32")
    let NERDTreeBookmarksFile=expand("$HOME/vimfiles/NERDTreeBookmarks")
else
    let NERDTreeBookmarksFile=expand("$HOME/.vim/NERDTreeBookmarks")
endif

" Show the bookmarks table on startup
let NERDTreeShowBookmarks=1

" Show hidden files, too
let NERDTreeShowFiles=1
let NERDTreeShowHidden=1

" Quit on opening files from the tree
let NERDTreeQuitOnOpen=1

" Highlight the selected entry in the tree
let NERDTreeHighlightCursorline=1

" Use a single click to fold/unfold directories and a double click to open
" files
let NERDTreeMouseMode=2

" Don't display these kinds of files
let NERDTreeIgnore=[ '\.pyc$', '\.pyo$', '\.py\$class$', '\.obj$',
            \ '\.o$', '\.so$', '\.egg$', '^\.git$' ]

" }}}

" YankRing configuration {{{
if has("win32")
    let g:yankring_history_dir = '$HOME/vimfiles/.tmp'
else
    let g:yankring_history_dir = '$HOME/.vim/.tmp'
endif
nmap <leader>r :YRShow<cr>
"}}}

" Syntastic configuration {{{
let g:syntastic_enable_signs=1
let g:syntastic_auto_loc_list=1

" note: pyflakes requires we have quiet warnings turned off
let g:syntastic_quiet_warnings=0
" }}}

" TaskList configuration {{{
" apparently this is already the mapping
"nmap <leader>t :TaskList<cr>
"}}}

" Tagbar configuration {{{

nmap <leader>p :TagbarToggle<cr>
"}}}

" Supertab configuration {{{
let g:SuperTabDefaultCompletionType = "context"
"}}}

" filetype specific behaviours {{{
if has ('autocmd')
    filetype plugin indent on

    augroup python_files "{{{
        au!
        " Expand tabs in python to be spaces
        autocmd filetype python setlocal expandtab shiftwidth=4 tabstop=8 softtabstop=4
        autocmd filetype python setlocal textwidth=79
        autocmd filetype python match ErrorMsg '\%>80v.\+'

        " But disable autowrapping as it is super annoying
        autocmd filetype python setlocal formatoptions-=t
    augroup end "}}}

    augroup ruby_files "{{{
        au!
        " Expand tabs into spaces
        autocmd filetype ruby setlocal expandtab shiftwidth=2 tabstop=2 softtabstop=2
    augroup end "}}}

    augroup markdown_files "{{{
        au!

        " limit text width in markdown and latex files to 70 chars
        autocmd filetype markdown set tw=78 wrap

        " Eliminate end of line whitespace highlight
        autocmd filetype markdown hi ExtraWhitespace ctermbg=none guibg=none

    augroup end "}}}

    augroup html_files "{{{
        au!
        " don't show tabs in html / xml files
        autocmd filetype html,xml set listchars-=tab:>.
        autocmd filetype html,xml setlocal expandtab shiftwidth=2 tabstop=2 softtabstop=2

    augroup end "}}}

    augroup css_files "{{{
        au!
        " Smaller indents
        autocmd filetype css,sass,scss,less setlocal expandtab shiftwidth=2 tabstop=2 softtabstop=2
    augroup end "}}}

    augroup mail_files "{{{
        au!
        " Eliminate end of line whitespace highlight
        autocmd filetype mail hi ExtraWhitespace ctermbg=none guibg=none
        let g:attach_check_keywords = 'attach,attachment,attached,included'

    augroup end "}}}
endif
" }}}

" Skeleton processing {{{
if has("autocmd")

    if !exists('*LoadTemplate')
        function LoadTemplate(file)
            " Add skeleton fillings for normal python files
            if a:file =~ '.*\.py$'
                if has("win32")
                    execute "0r $HOME/vimfiles/skeleton/template.py"
                else
                    execute "0r $HOME/.vim/skeleton/template.py"
                endif

                " C file and header file templates
            elseif a:file =~ '.*\.c$'
                if has("win32")
                    execute "0r $HOME/vimfiles/skeleton/template.c"
                else
                    execute "0r $HOME/.vim/skeleton/template.c"
                endif
            elseif a:file =~ '.*\.h$'
                if has("win32")
                    execute "0r $HOME/vimfiles/skeleton/template.h"
                else
                    execute "0r $HOME/.vim/skeleton/template.h"
                endif

                " markdown (jekyll) file template)
            elseif a:file =~ '.*\markdown$'
                if has("win32")
                    execute "0r $HOME/vimfiles/skeleton/template.markdown"
                else
                    execute "0r $HOME/.vim/skeleton/template.markdown"
                endif

            endif
        endfunction
    endif

    autocmd BufNewFile * call LoadTemplate(@%)
endif
"}}}

" Extra user or machine specific settings {{{
if has("win32")
    source $HOME/vimfiles/user.vim
else
    source $HOME/.vim/user.vim
endif
"}}}

" gedim settings {{{
if has("gui_running")
    let g:screenDimensions = { '1920,1080': [ 100, 80 ], '1280,1024': [90, 80], '1280,800': [ 80, 80 ], '1920,1040': [95, 80]}
endif
" }}}

" Show syntax highlighting groups for word under cursor {{{
nmap <leader>z :call <SID>SynStack()<CR>
function! <SID>SynStack()
    if !exists("*synstack")
        return
    endif
    echo map(synstack(line('.'), col('.')), 'synIDattr(v:val, "name")')
endfunc
" }}}

" AGTD settings {{{
let g:agtd_calendar_window = 'tab'
"}}}
