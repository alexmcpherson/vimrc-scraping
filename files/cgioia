" Hi! I'm Chad, and this is my vimrc.
" The latest version can be found at https://raw.github.com/cgioia/vimrc/master/vimrc

" Preamble ---------------------------------------------------------------- {{{
" We live in the futuar, turn off forced Vi-compatibility
set nocompatible

" Infect Vim with pathogen
runtime bundle/vim-pathogen/autoload/pathogen.vim
call pathogen#infect()
filetype plugin indent on

" Get the first runtime path for storing/reading some stuff later
let rtdirs = split( &runtimepath, ',' )
let vfdir = rtdirs[0]
let tmpdir = vfdir . "/.tmp"

" Set the map leader for future mappings
let mapleader=","
" }}}
" Editing Behavior -------------------------------------------------------- {{{
" File encoding and format
set encoding=utf-8
set fileformat=unix
set fileformats=unix,dos

" Tabs
set tabstop=8
set smarttab
set softtabstop=3
set shiftwidth=3
set expandtab

" General editing
set backspace=indent,eol,start
set autoindent
set smartindent
" }}}
" Vim Behavior ------------------------------------------------------------ {{{
" Files and directories
set autochdir
set autoread
set tags=tags;
set wildignore=*.swp,.git,.svn,.DS_Store,*.jpg,*.bmp,*.png,*.gif

" Visual indications
set showcmd
set showmode
set list
set listchars=tab:»\ ,eol:¬,extends:›,precedes:‹,trail:·
" set showbreak=↪
set showbreak=…
set scrolloff=3
set completeopt=menuone,longest

" Statusline {{{
set laststatus=2
" Statusline highlight groups {{{
" hi default link User1 Identifier
" hi default link User2 Statement
" hi default link User3 Error
" hi default link User4 Special
" }}}
" set statusline=[%2n]%<                " buffer number (do not truncate)

" set statusline+=%1*[%t]%*             " file name
" set statusline+=%2*%h%w%m%r%*         " flags

" set statusline+=%y                    " filetype
" set statusline+=[%{&ff}/%{strlen(&fenc)?&fenc:&enc}] " file encoding

" set statusline+=%=                    " right-align

" set statusline+=%-14(\ L%l/%L:C%c\ %) " current line and column
" set statusline+=%P                    " scroll percentage

" set statusline+=\ %3*${SyntasticStatuslineFlag()}%* " Syntastic
" }}}

" Cursorline {{{
augroup cline
    au!
    au WinLeave,BufLeave * set nocursorline
    au WinEnter,BufEnter * set cursorline
    au InsertEnter * set nocursorline
    au InsertLeave * set cursorline
augroup END
" }}}

" Backup files
set noswapfile
let &directory=tmpdir
set nobackup
let &backupdir=tmpdir
set undofile
let &undodir=tmpdir . "/undo"

" Buffers
set hidden
set switchbuf=useopen,usetab
set history=1000
set undolevels=1000

" Searching
set incsearch
set hlsearch
set showmatch
set ignorecase
set smartcase
set gdefault

" Re-size splits
au VimResized * :wincmd =
" }}}
" gVim Settings ----------------------------------------------------------- {{{
if has( "gui_running" )
   if has( "gui_win32" )
      " Consolas is a pretty sweet monospace font (from Microsoft, no less!)
      set guifont=Consolas:h9
      " Somewhat centered on my screen
      winpos 200 100
   elseif has( "gui_mac" )
      " Fonts seem much smaller with MacVim, so go big here
      set guifont=Inconsolata:h14
   endif

   " Remove the toolbar, it's just wasting space
   set guioptions-=T

   " GUI is 50x120
   set lines=52
   set columns=124

   " Those extra 4 columns are for the relative numbers
   set numberwidth=4
   set nonumber
   set relativenumber
endif
" }}}
" Highlighting ------------------------------------------------------------ {{{
" Syntax highlighting for fun and profit
syntax on

" Torte is super high-contrast, but has some annoying choices
" colorscheme torte
" highlight Pmenu guibg=brown gui=bold

" Molokai is a port of the popular TextMate color scheme
" colorscheme molokai

" Zenburn & associated configuration
" let g:zenburn_high_Contrast = 1
" let g:zenburn_alternate_Visual = 1
" colorscheme zenburn

" Solarized has both light and dark configurations
" if has("gui_running")
"    set background=light
" else
"    set background=dark
" endif
" let g:solarized_termcolors=256
" let g:solarized_visibility="low"
colorscheme solarized
call togglebg#map("<F1>")

" Use a very noticible highlight when going over length for the FileType
highlight link OverLength WarningMsg
" }}}
" Folding Settings -------------------------------------------------------- {{{
set foldenable
set foldmethod=manual
set foldlevelstart=0
set foldopen=block,hor,insert,jump,mark,percent,quickfix,search,tag,undo

" Expression-based folding {{{
au BufRead,BufNewFile * let b:foldlevel = 0
au InsertLeave,WinLeave * let b:foldlevel = 0
au BufRead,BufNewFile * let b:incomment = 0

" This automatic toggle between manual and expr often caused folds to get
" reset after leaving insert mode, which caused many fits of rage
" au InsertEnter * if !exists('w:last_fdm') | let w:last_fdm=&foldmethod | setlocal foldmethod=manual | endif
" au InsertLeave,WinLeave * if exists('w:last_fdm') | let &l:foldmethod=w:last_fdm | unlet w:last_fdm | endif

" Functions to handle foldlevels
function! StartFold()
   let b:foldlevel = b:foldlevel + 1
   return ">".b:foldlevel
endfunction
function! EndFold()
   let thislevel = b:foldlevel
   let b:foldlevel = b:foldlevel - 1
   return "<".thislevel
endfunction
function! ContinueFold()
   return b:foldlevel
endfunction
" }}}

function! MyFoldText() "{{{
   let line = getline(v:foldstart)

   " let nucolwidth = &fdc + &number * &numberwidth
   let nucolwidth = &fdc + &relativenumber * &numberwidth
   let windowwidth = winwidth(0) - nucolwidth
   let foldedlinecount = v:foldend - v:foldstart

   let onetab = strpart('        ', 0, &tabstop)
   let line = substitute(line, '\t', onetab, 'g')

   let extrachars = 2
   let line = strpart(line, 0, windowwidth - extrachars - len(foldedlinecount))
   let fillcharcount = windowwidth - len(line) - len(foldedlinecount) - extrachars
   return line . '…' . repeat(" ", fillcharcount) . foldedlinecount . ' '
endfunction "}}}
set foldtext=MyFoldText()
" }}}
" Plugin Settings --------------------------------------------------------- {{{
" NERDTree {{{
let NERDTreeShowBookmarks = 1
let NERDTreeBookmarksFile=tmpdir . "/NERDTreeBookmarks"
let NERDTreeQuitOnOpen = 1
let NERDTreeHighlightCursorline = 1
let NERDTreeMouseMode = 2
let NERDTreeWinSize = 38

nmap <F7> :NERDTree<CR>
nmap <S-F7> :NERDTreeToggle<CR>
" }}}
" Tagbar {{{
let g:tagbar_left = 1
let g:tagbar_width = 38

nnoremap <F8> :TagbarOpenAutoClose<CR>
nnoremap <S-F8> :TagbarToggle<CR>
" }}}
" Supertab {{{
" <C-X><C-O> is awkward and uncomfortable! I'd rather use tab.
let g:SuperTabDefaultCompletionType = "<C-X><C-O>"
" }}}
" Ack {{{
" Do an <strike>grep</strike> Ack search
nnoremap <leader>a :Ack<space>
" }}}
" YankRing {{{
" Toggle the yankring window
nnoremap <F2> :YRShow<CR>
let g:yankring_history_dir=tmpdir
" }}}
" Gundo {{{
nnoremap <S-F5> :GundoToggle<CR>
" }}}
" Command-T {{{
nmap <leader>ct :CommandT<CR>
nnoremap <leader>cb :CommandTBuffer<CR>
" }}}
" Syntastic {{{
let g:syntastic_stl_format='[%E{Err: %fe #%e}%B{, }%W{Warn: %fw #%w}]'
let g:syntastic_enable_signs=1
let g:syntastic_enable_balloons=1
let g:syntastic_auto_jump=1
" }}}
" Powerline {{{
let g:Powerline_symbols = "compatible"
let g:Powerline_symbols_override = { 'BRANCH': '±', 'LINE': '№', 'RO': '◊' }
let g:Powerline_dividers_override = ['', '›', '', '‹']
let g:Powerline_stl_path_style = "filename"
" }}}
" Fugitive {{{
nnoremap <F9> :Gstatus<CR>
nnoremap <F10> :Gdiff<CR>
" }}}
" Linediff {{{
nnoremap <F12> :Linediff<CR>
nnoremap <S-F12> :LinediffReset<CR>
" }}}
" }}}
" Shortcut Mappings ------------------------------------------------------- {{{
" For ease of updating this file
nnoremap <silent> <leader>ev :e $MYVIMRC<CR>
nnoremap <silent> <leader>sv :so $MYVIMRC<CR>

" No shift to type Ex commands
nnoremap ; :

if has("cscope") "{{{
   command! LoadCscope call LoadCscopeDb()
   function! LoadCscopeDb()
      " Search up recursively for the cscope database files
      let cscope_db=findfile("cscope.out", ".;")
      if filereadable(cscope_db)
         silent! execute "cscope add" cscope_db
      endif
   endfunction

   " Load/Kill the cscope database
   nnoremap <leader>lc :LoadCscope<CR>
   nnoremap <leader>kc :cscope kill 0<CR>

   " Shortcut to do cscope file searches
   nmap gf <C-\>f

   " Shortcut to do a cscope search
   nmap <F4> <C-\>s
   nnoremap <C-F4> :cs find s<space>
   nnoremap <S-F4> :cs find f<space>
endif "}}}

" Make regexs more Perl-like
nnoremap / /\v
vnoremap / /\v
nnoremap ? ?\v
vnoremap ? ?\v

" Remap j and k to act as expected when used on long, wrapped, lines
nnoremap j gj
nnoremap k gk

" Speed up scrolling of the viewport slightly
nnoremap <C-e> 2<C-e>
nnoremap <C-y> 2<C-y>

" Quickly get out of insert mode without your fingers having to leave the
" home row
inoremap jj <Esc>

" Jump to matching pairs easily, with Tab
nnoremap <Tab> %
vnoremap <Tab> %

" Space to toggle folds
nnoremap <Space> za
vnoremap <Space> za
nnoremap <S-Space> zA
vnoremap <S-Space> zA

" No, seriously, write it. I mean it.
cnoremap w!! w !sudo tee % >/dev/null

" Un-highlight search queries
nnoremap <silent> <leader><space> :noh<CR>:call clearmatches()<CR>

" Toggle Quickfix window
nnoremap <silent> <leader>q :QFix<CR> "{{{
command! -bang -nargs=? QFix call QFixToggle(<bang>0)
function! QFixToggle(forced)
   if exists("g:qfix_win") && a:forced == 0
      cclose
      unlet g:qfix_win
   else
      copen 10
      let g:qfix_win = bufnr("$")
   endif
endfunction "}}}

" If my usual method of jumping to a tag (<C-LeftMouse>) doesn't work...
nnoremap <F5> g<C-]>

" Copy to the system clipboard
nnoremap <F6> "*y
vnoremap <F6> "*y

" Sometimes expression folding is just too damn high^H^H^H^Hslow
nnoremap <F3> :FoldMethodToggle<CR> "{{{
command! FoldMethodToggle call ToggleFoldMethod()
function! ToggleFoldMethod()
   if ( &foldmethod == "expr" )
      setlocal foldmethod=manual
      execute "normal! zE"
   else
      let b:foldlevel=0
      setlocal foldmethod=expr
   endif
endfunction "}}}

" Open folds and pulse the cursor line when searching
nnoremap <silent> n nzv:call PulseCursorLine()<CR>
nnoremap <silent> N Nzv:call PulseCursorLine()<CR>

function! PulseCursorLine() "{{{
    let current_window = winnr()

    windo set nocursorline
    execute current_window . 'wincmd w'

    setlocal cursorline

    redir => old_hi
        silent execute 'hi CursorLine'
    redir END
    let old_hi = split(old_hi, '\n')[0]
    let old_hi = substitute(old_hi, 'xxx', '', '')

    hi CursorLine guibg=#2a2a2a
    redraw
    sleep 5m

    hi CursorLine guibg=#3a3a3a
    redraw
    sleep 5m

    hi CursorLine guibg=#4a4a4a
    redraw
    sleep 5m

    hi CursorLine guibg=#3a3a3a
    redraw
    sleep 5m

    hi CursorLine guibg=#2a2a2a
    redraw
    sleep 5m

    execute 'hi ' . old_hi

    windo set cursorline
    execute current_window . 'wincmd w'
endfunction "}}}
" }}}
" FileType-specific Handling ---------------------------------------------- {{{
if has ("autocmd")
   augroup cpp_files "{{{
      au!
      function! CPP_foldexpr(lnum) "{{{
         let l1 = getline(a:lnum)

         " Skip the line if it's blank, commented, or a preprocessor command
         if l1 =~ '^\s*\%(\%(//.*\)\|\%(/\*.*\*/\s*\)\|\%(#.\+\)\)\?$'
            return ContinueFold()
         endif

         " Folding comments
         if b:incomment
            " We're inside a C-style comment, either end it or ignore it
            if l1 =~ '\*/'
               let b:incomment = 0
               return EndFold()
            else
               return ContinueFold()
            endif
         elseif l1 =~ '^\s*/\*[^/]*$'
            " Fold the current line if it begins with a C-style comment, and
            " doesn't end on the same line
            let b:incomment = 1
            return StartFold()
         endif

         " Folding Brackets
         if l1 =~ '^[^{]*}'
            " End a fold at close brace that's not opened on the same line
            return EndFold()
         elseif l1 =~ '^[^{]*$' && getline(a:lnum+1) =~ '^\s*{[^}]*$'
            " Fold the current line if it doesn't have an open brace and the
            " next line starts with one
            return StartFold()
         elseif l1 =~ '{[^}]*$' && getline(a:lnum-1) =~ '\%([{,;]\s*$\)\|\%(^\s*\%([#/\*].\+\)\?$\)'
            " Fold current line if it has an open brace and the previous line
            " ends with a comma, open brace, semicolon, or is otherwise ignored
            return StartFold()
         endif

         " Don't fold anything else
         return ContinueFold()
      endfunction "}}}
      au FileType cpp,c setlocal foldexpr=CPP_foldexpr(v:lnum)
      " au FileType cpp,c setlocal foldmethod=expr
      au FileType cpp,c setlocal foldnestmax=3
      au FileType cpp,c match OverLength /\%121v.\+/
      au FileType cpp setlocal commentstring=//\ %s
   augroup end "}}}
   augroup snippets "{{{
      au!
      au FileType snippet setlocal nofoldenable
      au FileType snippet setlocal noexpandtab
      au FileType snippet setlocal nosmarttab
   augroup end "}}}
   augroup vim_files "{{{
      au!
      au FileType vim setlocal foldmethod=marker
   augroup end "}}}
   augroup perl_files "{{{
      au!
      au FileType perl setlocal foldmethod=syntax
   augroup end "}}}
   augroup python "{{{
      au!
      au FileType python setlocal noexpandtab
      au FileType python setlocal nosmarttab
      au FileType python setlocal tabstop=3
   augroup end "}}}
endif
" }}}
