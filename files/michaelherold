" Much of this was taken from the following posts:
"   http://amix.dk/vim/vimrc.html
"   http://nvie.com/posts/how-i-boosted-my-vim/
"
" To look at:
"
"   http://arstechnica.com/open-source/guides/2009/05/vim-made-easy-how-to-get-your-favorite-ide-features-in-vim.ars

" => Configuration {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Use vim settings, rather than vi settings (much better!)
" Must be first, because it changes other options as a side effect
set nocompatible

fun! MySys()
    return "linux"
endfun

" }}}
" => General {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Use pathogen to easily modify the runtime path to include all plugins
" under the ~/.vim/bundle directory
filetype off                 " force reloading *after* pathogen loaded
call pathogen#infect()
call pathogen#helptags()
filetype plugin indent on    " enable detection, plugins, and indenting

" Set leader to ','
let mapleader = ","
let g:mapleader = ","

" }}}
" => Editing behavior {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

set showmode                " always show what mode we're in
set nowrap                  " don't wrap lines
set tabstop=4               " a tab is four spaces
set softtabstop=4           " when hitting <BS>, pretend like tab is removed, even if spaces
set expandtab               " expand tabs by default (overloadable per file type)
set shiftwidth=4            " number of spaces to use for auto indenting
set shiftround              " use multiple of shiftwidth when indenting with '>' and '<'
set smarttab                " insert tabs on line start according to shiftwidth
set backspace=indent,eol,start " allow backspacing over everything in insert mode
set autoindent              " always set autoindenting on
set copyindent              " copy the previous indentation on autoindenting
set number                  " always show line numbers
set ruler                   " show location on command line
set showmatch               " set show matching parentheses
set ignorecase              " ignore case when searching
set smartcase               " ignore case only if search pattern all lowercase
set scrolloff=4             " keep 4 lines off the edges of the screen when scrolling
set virtualedit=block       " allow cursor to go in to 'invalid' places
set hlsearch                " highlight search terms
set incsearch               " show search matches as you type
set gdefault                " search/replace 'globally' by default

set listchars=tab:▸\ ,trail:·,extends:#,nbsp:· " set chars used for whitespace
set nolist                  " don't show invisible characters by default

set mouse=a                 " enable using the mouse if terminal emulator supports it

set ffs=unix,dos,mac        " ordering of file formats
set formatoptions+=1        " when wrapping paragraphs, don't end lines with 1-letter words

" Sane regular expressions, via Steve Losh
" See http://stevelosh.com/blog/2010/09/coming-home-to-vim
nnoremap / /\v
vnoremap / /\v

" Speed up srolling of viewport slightly
nnoremap <C-e> 2<C-e>
nnoremap <C-y> 2<C-y>

" }}}
" => Folding rules {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

set foldenable              " enable folding
set foldcolumn=2            " add a fold column
set foldmethod=marker       " detect triple-{ style fold markers
set foldlevelstart=0        " start out with everything folded
set foldopen=block,hor,insert,jump,mark,percent,quickfix,search,tag,undo
                            " which commands trigger auto-fold

function! MyFoldText()
  let line = getline(v:foldstart)

  let nucolwidth = &fdc + &number * &numberwidth
  let windowwidth = winwidth(0) - nucolwidth - 2
  let foldedlinecount = v:foldend - v:foldstart

  " expand tabs into spaces
  let onetab = strpart('          ', 0, &tabstop)
  let line = substitute(line, '\t', onetab, 'g')

  let line = strpart(line, 0, windowwidth -2 - len(foldedlinecount))
  let fillcharcount = windowwidth - len(line) - len(foldedlinecount) - 4
  return line . ' …' . repeat(" ",fillcharcount) . foldedlinecount . ' '
endfunction
set foldtext=MyFoldText()

" }}}
" => Editor layout {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

set termencoding=utf-8
set encoding=utf-8
set lazyredraw              " don't update the display when running macros
set laststatus=2            " tell vim to always put a status line in, even
                            "   when there's only one window
"set cmdheight=2             " use a status bar that is 2 rows high

" }}}
" => Vim Behavior {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

set hidden                  " hide buffers instead of closing them
set switchbuf=useopen       " reveal already opened files from quickfix
                            "   instead of opening new buffers
set history=1000            " remember more commands and search history
set undolevels=1000         " use many mucho levels of undo
if v:version >= 730
  set undofile              " keep a persistent backup file
  set undodir=~/.vim/.undo,~/tmp,/tmp
endif
set nobackup                " do not want backup files!!!!!
set noswapfile              " NO SWAP FILE
set directory=~/.vim/.tmp,~/tmp,/tmp " set swap location, just in case
set viminfo='20,\"80        " read/write a .viminfo file, don't store more
                            "   than 80 lines of registers
set wildmenu                " make tab completion for files/buffer bash-like
set wildmode=list:full      " show a list when pressing tab and complete
                            "   first full match
set wildignore=*.swp,*.bak,*.pyc,*.class

set title                   " change the terminal's title
set visualbell              " don't beep
set noerrorbells            " don't beep
set showcmd                 " show (partial) command in the last line of the
                            "   screen; this also shows visual selection info
set nomodeline              " disable mode lines (security measure)
"set ttyfast                " always use a fast erminal
set cursorline              " underline the current line, for quick orientation

" Tame the quickfix window (open/close using ,f)
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

" }}}
" => Colors and Fonts {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

if &t_Co > 2 || has("gui_running")
  syntax on                 " switch syntax highlighting on, when color term
endif

if has("gui_running")
	" Set font according to system
	if MySys() == "mac"
    set gfn=Menlo:h14
    set shell=/bin/bash
  elseif MySys() == "windows"
    set gfn=Consolas:h14
  elseif MySys() == "linux"
    set gfn=Inconsolata\ for\ Powerline\ 15
    set shell=/bin/zsh
  endif

  set guioptions-=T        " get rid of the toolbar
  set guioptions-=l        " get rid of the left scrollbar
  set guioptions-=L        " get rid of the left scrollbar on v-split
  set guioptions-=r        " get rid of the right scrollbar
  set guioptions-=R        " get rid of the right scrollbar on v-split
  set t_Co=256
  set background=dark
  colorscheme railscat
else
    set background=dark
    colorscheme molokai
endif

let g:Powerline_symbols = 'compatible'

" }}}
" => Shortcut Mappings {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Set ; to be : as well
nnoremap ; :

" Avoid accidentally hitting F1
map! <F1> <Esc>

" Quick closing of current window
nnoremap <leader>q :q<CR>

" Use Q for formatting the current paragraph (or visual selection)
vmap Q gq
nmap Q gqap

" Make p in visual mode replace the selected text with the yank register
vnoremap p <Esc>:let current_reg = @"<CR>gvdi<C-R>=current_reg<CR><Esc>

" Shortcut to make
nmap mk :make<CR>

" Swap implementations of ` and ' jump to markers
" By default, ' jums to marked line, ` jumps to the marked line and col
nnoremap ' `
nnoremap ` '

" Use the damn hjkl keys
" map <up> <nop>
" map <down> <nop>
" map <left> <nop>
" map <right> <nop>

" Remap j and k to act as expected when used on long, wrapped lines
nnoremap j gj
nnoremap k gk

" Easy window navigation
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l
nnoremap <leader>w <C-w>v<C-w>l

" Tab configuration
map <leader>tn :tabnew<cr>
map <leader>te :tabedit<cr>
map <leader>tc :tabclose<cr>
map <leader>tm :tabmove

" Complete whole filenames/lines with a quicker shortcut key in insert mode
imap <C-f> <C-x><C-f>
imap <C-l> <C-x><C-l>

" Quick yanking to the end of the line
nmap Y y$

" Yank/paste to the OS clipboard with ,y and ,p
nmap <leader>y "+y
nmap <leader>Y "+yy
nmap <leader>p "+p
nmap <leader>P "+P

" YankRing stuff
let g:yankring_history_dir = '$HOME/.vim/.tmp'
nmap <leader>r :YRShow<CR>

" Edit the vimrc file
nmap <silent> <leader>ev :e $MYVIMRC<CR>
nmap <silent> <leader>sv :so $MYVIMRC<CR>

" Clears the search register
nmap <silent> <leader>/ :nohlsearch<CR>

" Pull word under cursor into LHS of a substitute (for quick search/replace)
nmap <leader>z :%s#\<<C-r>=expand("<cword>")<CR>\>#

" Keep search matches in the middle of the window and pulse the line when
" moving to them
nnoremap n n:call PulseCursorLine()<CR>
nnoremap N N:call PulseCursorLine()<CR>

" Quickly get out of insert mode without your fingers having to leave home
" row. (either use 'jj' or 'jk')
inoremap jj <Esc>
"inoremap jk <Esc>

" Quick alignment of text
nmap <leader>al :left<CR>
nmap <leader>ar :right<CR>
nmap <leader>ac :center<CR>

" Scratch
nmap <leader><tab> :Sscratch<CR><C-W>x<C-J>

" Sudo to write
cmap w!! w !sudo tee % >/dev/null

" Jump to matching pairs easily, with Tab
nnoremap <Tab> %
vnoremap <Tab> %

" Folding
nnoremap <Space> za
vnoremap <Space> za

" Strip all trailing whitespace from a file, using ,W
nnoremap <leader>W :%s/\s\+$//<CR>:let @/=''<CR>

" Run ack fast
nnoremap <leader>a :Ack<Space>

" Creating folds for tags in HTML
"nnoremap <leader>ft Vatzf

" Reselect text that was just pasted with ,v
nnoremap <leader>v V`]

" Gundo.vim
nnoremap <F5> :GundoToggle<CR>

" }}}
" => Spell checking {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Toggle and untoggle spell-check with <leader>ss
map <leader>ss :setlocal spell!<cr>

" Sane shortcuts
map <leader>sn ]s
map <leader>sp [s
map <leader>sa zg
map <leader>s? z=

" }}}
" => Filetype Specific Handling {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if has("autocmd")
  augroup invisible_chars " {{{
    au!

    " Show invisible characters in all of these files
    autocmd filetype vim setlocal list
    autocmd filetype python,rst setlocal list
    autocmd filetype ruby setlocal list
    autocmd filetype javascript,css setlocal list
  augroup end " }}}

  augroup vim_files " {{{
    au!

    " Bind <F1> to show the keyword under the cursor
    " General help can still be entered manually, with :help
    autocmd filetype vim noremap <buffer> <F1> <Esc>:help <C-r><C-w><CR>
    autocmd filetype vim noremap! <buffer> <F1> <Esc>:help <C-r><C-w><CR>
  augroup end " }}}

  augroup html_files " {{{
    au!

    " This function detects, based on HTML content, whether this is a
    " Django template, or a plain HTML file, and sets filetype accordingly
    fun! s:DetectHTMLVariant()
      let n = 1
      while n < 50 && n < line("$")
        " check for django
        if getline(n) =~ '{%\s*\(extends\|load\|block\|if\|for\|include\|trans\)\>'
          set ft=htmldjango.html
          return
        endif
        let n = n + 1
      endwhile
      " go with html
      set ft=html
    endfun

    autocmd BufNewFile,BufRead *.html,*.htm call s:DetectHTMLVariant()

    " Auto-closing of HTML/XML tags
    let g:closetag_default_xml=1
    autocmd filetype html,htmldjango let b:closetag_html_style=1
    autocmd filetype html,xhtml,xml source ~/.vim/scripts/closetag.vim
  augroup end " }}}

  augroup python_files " {{{
    au!

    " This function detects, based on Python content, whether this is a
    " Django file, which may enable snippet completion for it
    fun! s:DetectPythonVariant()
      let n = 1
      while n < 50 && n < line("$")
        " check for django
        if getline(n) =~ 'import\s\+\<django\>' || getline(n) =~ 'from\s\+\<django\>\s\+import'
          set ft=python.django
          "set syntax=python
          return
        endif
        let n = n + 1
      endwhile
      " go with normal python
      set ft=python
    endfun
    autocmd BufNewFile,BufRead *.py call s:DetectPythonVariant()

    " PEP8 compliance (set 1 tab = 4 chars explicitly, even if set
    " earlier, as it is important)
    autocmd filetype python setlocal expandtab shiftwidth=4 tabstop=4 softtabstop=4
    autocmd filetype python setlocal textwidth=80
    autocmd filetype python match ErrorMsg '\%>80v.\+'

    " But disable autowrapping as it is super annoying
    autocmd filetype python setlocal formatoptions-=t

    " Folding for Python (uses syntax/python.vim for fold definitions)
    "autocmd filetype python,rst setlocal nofoldenable
    "autocmd filetype python setlocal foldmethod=expr

    " Python runners
    autocmd filetype python map <buffer> <F5> :w<CR>:!python %<CR>
    autocmd filetype python imap <buffer> <F5> <Esc>:w<CR>:!python %<CR>
    autocmd filetype python map <buffer> <S-F5> :w<CR>:!ipython %<CR>
    autocmd filetype python imap <buffer> <S-F5> <Esc>:w<CR>:!ipython %<CR>

    " Run a quick static syntax check every time we save a Python file
    autocmd BufWritePost *.py call Pyflakes()
  augroup end " }}}

  augroup ruby_files " {{{
    au!

    autocmd filetype ruby setlocal expandtab shiftwidth=2 tabstop=2 softtabstop=2
  augroup end " }}}

  augroup rst_files " {{{
    au!

    " Auto-wrap text around 74 characters
    autocmd filetype rst setlocal textwidth=74
    autocmd filetype rst setlocal formatoptions+=nqt
    autocmd filetype rst match ErrorMsg '\%>74v.\+'
  augroup end " }}}

  augroup css_files " {{{
    au!

    autocmd filetype css,less setlocal foldmethod=marker foldmarker={,}
  augroup end " }}}

  augroup javascript_files " {{{
    au!

    autocmd filetype javascript setlocal expandtab
    autocmd filetype javascript setlocal listchars=trail:·,extends:#,nbsp:·
    autocmd filetype javascript setlocal foldmethod=marker foldmarker={,}
  augroup end " }}}

  augroup textile_files " {{{
    au!

    autocmd filetype textile set textwidth=78 wrap

    " Render YAML front matter inside Textile documents as comments
    autocmd filetype textile syntax region frontmatter start=/\%^---$/ end=/^---$/
    autocmd filetype textile highlight link frontmatter Comment
  augroup end " }}}
endif

" }}}
" => Extra vi Compatibility
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

set cpoptions+=$            " when changing a line, don't redisplay, but put
                            " a '$' at the end during the change
set formatoptions-=         " don't start new lines w/ comment leader on pressing 'o'
au filetype vim set formatoptions-=o
                            " must explicitly reset for vim files
" }}}
" => Miscellaneous {{{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Restore cursor position upon reopening files
autocmd BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g`\"" | endif

" Common abbreviations/misspellings
source ~/.vim/autocorrect.vim

" Helper function for search
function! PulseCursorLine()
    let current_window = winnr()

    windo set nocursorline
    execute current_window . 'wincmd w'

    setlocal cursorline

    redir => old_hi
        silent execute 'hi CursorLine'
    redir END
    let old_hi = split(old_hi, '\n')[0]
    let old_hi = substitute(old_hi, 'xxx', '', '')

    hi CursorLine guibg=#3a3a3a
    redraw
    sleep 20m

    hi CursorLine guibg=#4a4a4a
    redraw
    sleep 30m

    hi CursorLine guibg=#3a3a3a
    redraw
    sleep 30m

    hi CursorLine guibg=#2a2a2a
    redraw
    sleep 20m

    execute 'hi ' . old_hi

    windo set cursorline
    execute current_window . 'wincmd w'
endfunction

" Fix Windows ^M encoding problem
noremap <leader>m mmHmt:%s/<C-V><cr>//ge<cr>'tzt'm

" }}}
