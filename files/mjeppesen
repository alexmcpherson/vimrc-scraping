" File: vimrc
" Author: Matthew Jeppesen
"
" vim: set foldmarker={,} foldlevel=0 foldmethod=marker :

set nocompatible

" Pathogen plugin management {
runtime bundle/vim-pathogen/autoload/pathogen.vim
" Disable these plugins (only commented out lines are included! This is a
" terrible way to make pathogen white-list rather than black-list.
" I should make a vimscript function, but aaargh learning vimscript.
 let g:pathogen_disabled = []

" call add(g:pathogen_disabled, 'ctrlp.vim')
" call add(g:pathogen_disabled, 'indexedsearch')
" call add(g:pathogen_disabled, 'ir_black')
" call add(g:pathogen_disabled, 'mjeppesen')
" call add(g:pathogen_disabled, 'snipmate-snippets')
" call add(g:pathogen_disabled, 'supertab')
" call add(g:pathogen_disabled, 'syntastic')
" call add(g:pathogen_disabled, 'tagbar')
" call add(g:pathogen_disabled, 'tlib_vim')
" call add(g:pathogen_disabled, 'vim-addon-mw-utils')
" call add(g:pathogen_disabled, 'vim-colors-solarized')
" call add(g:pathogen_disabled, 'vim-commentary')
" call add(g:pathogen_disabled, 'vim-endwise')
" call add(g:pathogen_disabled, 'vim-fugitive')
" call add(g:pathogen_disabled, 'vim-git')
" call add(g:pathogen_disabled, 'vim-haml')
" call add(g:pathogen_disabled, 'vim-markdown')
" call add(g:pathogen_disabled, 'vim-matchit')
" call add(g:pathogen_disabled, 'vim-pathogen')
" call add(g:pathogen_disabled, 'vim-rails')
" call add(g:pathogen_disabled, 'vim-repeat')
" call add(g:pathogen_disabled, 'vim-ruby')
" call add(g:pathogen_disabled, 'vim-snipmate')
" call add(g:pathogen_disabled, 'vim-surround')
" call add(g:pathogen_disabled, 'vim-textobj-rubyblock')
" call add(g:pathogen_disabled, 'vim-textobj-user')
" call add(g:pathogen_disabled, 'vim-unimpaired')
" call add(g:pathogen_disabled, 'vim-vividchalk')
call add(g:pathogen_disabled, 'command-t')
call add(g:pathogen_disabled, 'gist')
call add(g:pathogen_disabled, 'jquery')
call add(g:pathogen_disabled, 'neocomplcache')
" call add(g:pathogen_disabled, 'nerdtree')
" call add(g:pathogen_disabled, 'vim-nerdtree-tabs')
call add(g:pathogen_disabled, 'tabular')
call add(g:pathogen_disabled, 'tcomment')
call add(g:pathogen_disabled, 'textile')
call add(g:pathogen_disabled, 'vim-cucumber')
call add(g:pathogen_disabled, 'vim-dbext')
call add(g:pathogen_disabled, 'vim-javascript')
call add(g:pathogen_disabled, 'vim-pgsql')
call add(g:pathogen_disabled, 'vim-ruby-debugger')
call add(g:pathogen_disabled, 'vim-shoulda')
call add(g:pathogen_disabled, 'vim-tmux')

call pathogen#infect()
call pathogen#helptags()
" }

filetype plugin on
syntax on

" Most of the following from from spf13 and Gary Bernhardt's vimrc

" General {
set background=dark " Assume a dark background
    if !has('win32') && !has('win64')
"        set term=$TERM " Make arrow and other keys work
    endif
filetype plugin indent on " Automatically detect file types.
syntax on " syntax highlighting
set mouse=a " automatically enable mouse usage
"set autochdir " always switch to the current file directory. Messes with some plugins, best left commented out
" not every vim is compiled with this, use the following line instead
" If you use command-t plugin, it conflicts with this, comment it out.
"autocmd BufEnter * if bufname("") !~ "^\[A-Za-z0-9\]*://" | lcd %:p:h | endif
scriptencoding utf-8

" set autowrite " automatically write a file when leaving a modified buffer
set shortmess+=filmnrxoOtT " abbrev. of messages (avoids 'hit enter')
set viewoptions=folds,options,cursor,unix,slash " better unix / windows compatibility
set virtualedit=onemore " allow for cursor beyond last character
set history=1000 " Store a ton of history (default is 20)
set nospell " spell checking off
" Setting up the directories {
set backup " backups are nice ...
set undolevels=1000 "maximum number of changes that can be undone

set splitright " split buffers to the right
set splitbelow " vertical split buffers below

if has('persistent_undo')
  set undofile " so is persistent undo ...
  set undoreload=10000 "maximum number lines to save for undo on a buffer reload
  set undodir=$HOME/.vimundo/ " and for undo files
endif 

" Moved to function at bottom of the file
set backupdir=$HOME/.vimbackup/ " but not when they clog
set directory=$HOME/.vimswap/ " Same for swap files
set viewdir=$HOME/.vimviews/ " same for view files
" set undo
"" Creating directories if they don't exist
silent execute '!mkdir -p $HVOME/.vimbackup'
silent execute '!mkdir -p $HOME/.vimswap'
silent execute '!mkdir -p $HOME/.vimviews'
"au BufWinLeave * silent! mkview "make vim save view (state) (folds, cursor, etc)
"au BufWinEnter * silent! loadview "make vim load view (state) (folds, cursor, etc)

if has("autocmd")
  " Restore cursor position
  autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif
endif
" }
" }

" Vim UI {
set tabpagemax=15 " only show 15 tabs
set showmode " display the current mode

set cursorline " highlight current line
" hi cursorline guibg=#333333 " highlight bg color of current line
" hi CursorColumn guibg=#333333 " highlight cursor

if has('cmdline_info')
set ruler " show the ruler
set rulerformat=%30(%=\:b%n%y%m%r%w\ %l,%c%V\ %P%) " a ruler on steroids
set showcmd " show partial commands in status line and
" selected characters/lines in visual mode
endif

if has('statusline')
  set laststatus=2
  set statusline=\ \ %<%f\ (%{&ft})\ %-4(%m%)%=%-19(%3l,%02c%03V%)

  " Gary Bernhardt's statusline:
  " set statusline=%<%f\ (%{&ft})\ %-4(%m%)%=%-19(%3l,%02c%03V%)

  " spft13 statusline: Broken down into easily includeable segments
  " set statusline=%<%f\ " Filename
  " set statusline+=%w%h%m%r " Options
  " set statusline+=%{fugitive#statusline()} " Git Hotness
  " set statusline+=\ [%{&ff}/%Y] " filetype
  " set statusline+=\ [%{getcwd()}] " current dir
  " "set statusline+=\ [A=\%03.3b/H=\%02.2B] " ASCII / Hexadecimal value of char
  " set statusline+=%=%-14.(%l,%c%V%)\ %p%% " Right aligned file nav info
endif

set backspace=indent,eol,start " backspace for dummys
set linespace=0 " No extra spaces between rows
set nu " Line numbers on
set showmatch " show matching brackets/parenthesis
set incsearch " find as you type search
set hlsearch " highlight search terms
set winminheight=0 " windows can be 0 line high
set ignorecase " case insensitive search
set smartcase " case sensitive when uc present
set wildmenu " show list instead of just completing
set wildmode=list:longest,full " command <Tab> completion, list matches, then longest common part, then all.
set whichwrap=b,s,h,l,<,>,[,] " backspace and cursor keys wrap to
set scrolljump=5 " lines to scroll when cursor leaves screen
set scrolloff=3 " minimum lines to keep above and below cursor
set foldenable " auto fold code
set gdefault " the /g flag on :s substitutions by default
set list
set listchars=tab:>.,trail:.,extends:#,nbsp:. " Highlight problematic whitespace


" }

" Formatting {
set nowrap " wrap long lines
set autoindent " indent at the same level of the previous line
set shiftwidth=2 " use indents of spaces
set expandtab " tabs are spaces, not tabs
set tabstop=2 " an indentation every four columns
set softtabstop=2 " let backspace delete indent
set formatoptions+=tcroql " copied from gvimrc -- not sure
" set matchpairs+=<:> " match, to be used with %
set pastetoggle=<F12> " pastetoggle (sane indentation on pastes)
" set comments=sl:/*,mb:*,elx:*/ " auto format comment blocks
" Remove trailing whitespaces and ^M chars
autocmd FileType c,cpp,java,php,js,python,twig,xml,yml,ruby autocmd BufWritePre <buffer> :call setline(1,map(getline(1,"$"),'substitute(v:val,"\\s\\+$","","")'))
au BufNewFile,BufRead *.sql :set filetype=pgsql
" }

" Key (re)Mappings {
"
nmap <Space> <PageDown>
nmap t <PageUp>

vmap <Space> <PageDown>
vmap t <PageUp>

imap jj <Esc> " Professor VIM says '87% of users prefer jj over esc', jj abrams disagrees

"The default leader is '\', but many people prefer ',' as it's in a standard
"location
let mapleader = ','

" Making it so ; works like : for commands. Saves typing and eliminates :W style typos due to lazy holding shift.
nnoremap ; :

" Easier moving in windows
nnoremap gj j
nnoremap gk k
nnoremap gh h
nnoremap gl l

" Wrapped lines goes down/up to next row, rather than next line in file.
nnoremap j gj
nnoremap k gk

" The following two lines conflict with moving to top and bottom of the screen
" If you prefer that functionality, comment them out.
" map <S-H> gT
" map <S-L> gt
nnoremap gr gT

" Stupid shift key fixes
cmap W w
cmap WQ wq
cmap wQ wq
cmap Q q
cmap Tabe tabe

" Use <C-O> instead of <Up> on command line
cnoremap <C-O> <Up>

" gbr: User ,, to swap between last two files
cnoremap %% <C-R>=expand('%:h').'/'<cr>
map <leader>e :edit %%
map <leader>v :view %%

nnoremap <Leader><Leader> <C-^> % go to previously edited file

"  insert the time in "03 Jan 2012" format
command! InsertDate :normal a<c-r>=strftime('%d %b %Y')<cr>

" Yank from the cursor to the end of the line, to be consistent with C and D.
"nnoremap Y y$
""" Code folding options
"nmap <leader>f0 :set foldlevel=0<CR>
"nmap <leader>f1 :set foldlevel=1<CR>
"nmap <leader>f2 :set foldlevel=2<CR>
"nmap <leader>f3 :set foldlevel=3<CR>
"nmap <leader>f4 :set foldlevel=4<CR>
"nmap <leader>f5 :set foldlevel=5<CR>
"nmap <leader>f6 :set foldlevel=6<CR>
"nmap <leader>f7 :set foldlevel=7<CR>
"nmap <leader>f8 :set foldlevel=8<CR>
"nmap <leader>f9 :set foldlevel=9<CR>

"clearing highlighted search
nnoremap <silent> <cr> :nohlsearch<CR>

" Shortcuts
" Change Working Directory to that of the current file
cmap cwd lcd %:p:h
cmap cd. lcd %:p:h

" visual shifting (does not exit Visual mode)
vnoremap < <gv
vnoremap > >gv

" Fix home and end keybindings for screen, particularly on mac
" - for some reason this fixes the arrow keys too. huh.
map [F $
imap [F $
map [H g0
imap [H g0
" For when you forget to sudo.. Really Write the file.
"cmap w!! w !sudo tee % >/dev/null
" }

" GUI Settings {
if has('gui_running')
    set guioptions-=T " remove the toolbar
    set guioptions-=r " remove the scrollbar
    set guioptions-=L " remove the left scrollbar
    set guifont=Consolas:h19
    color solarized
    "set guifont=Monaco:h14
    "set guifont=Menlo\ Regular:h15
    set guicursor=n-v-c:block-Cursor/lCursor-blinkon0,ve:ver35-Cursor,o:hor50-Cursor,i-ci:ver25-Cursor/lCursor,r-cr:hor20-Cursor/lCursor,sm:block-Cursor-blinkwait175-blinkoff150-blinkon175

"set lines=40 " 40 lines of text instead of 24,
else
  set term=builtin_ansi " Make arrow and other keys work
  set t_Co=256 " 256 colors


  " change cursor shape depending on mode
  " only works in iTerm
  let &t_SI = "\<Esc>]50;CursorShape=1\x7"
  let &t_EI = "\<Esc>]50;CursorShape=0\x7"

  " set vim colors same as terminal (FRAGILE)
  if $ITERM_PROFILE == 'Pastel'
    color grb256
    set background=dark
  elseif $ITERM_PROFILE == 'Solarized Dark'
    color solarized
    set background=dark
  else  " some good default
    colo ir_black
    set background=dark
  endif
endif

set vb t_vb=  "stupid bell gone

" Macvim: run these commands from the terminal if tab names are being
" abbreviated (adjust numbers as necessary):
"
" defaults write org.vim.MacVim MMTabMinWidth 150
" defaults write org.vim.MacVim MMTabOptimumWidth 200
" defaults write org.vim.MacVim MMTabMaxWidth 500
"
" see:
" http://stackoverflow.com/questions/10259413/macvim-how-to-prevent-tab-names-being-abbreviated

" }

" Plugin management {
" " Command-t
" let g:CommandTMatchWindowReverse=1

" " Make NERDTree's menu in each tab
" autocmd VimEnter * silent NERDTree
" autocmd BufEnter * silent NERDTreeMirror

" Turn NERDTree on and off. Suggested by vim-nerdtree-tabs plugin
map <Leader>n <plug>NERDTreeTabsToggle<CR>
" NERDTree not open on startup
let g:nerdtree_tabs_open_on_gui_startup = 0

" tagbar
nnoremap <silent> <Leader>tt :TagbarToggle<CR>

" autocmd VimEnter * silent wincmd w
" }

" Functions {


function! EditTextLikeConventionalEditors()
  set textwidth=0
  set wrap
  set linebreak
  set nolist " linebreak does not work if list is on
endfunction

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" RENAME CURRENT FILE
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! RenameFile()
  let old_name = expand('%')
  let new_name = input('New file name: ', expand('%'), 'file')
  if new_name != '' && new_name != old_name
    exec ':saveas ' . new_name
    exec ':silent !rm ' . old_name
    redraw!
  endif
endfunction
map <leader>n :call RenameFile()<cr>

" This doesn't work -- messes up syntax highlighting etc
" Close all buffers not visible in a window or tab somewhere
" usage :call Wipeout()
" function! Wipeout()
"   " list of *all* buffer numbers
"   let l:buffers = range(1, bufnr('$'))

"   " what tab page are we in?
"   let l:currentTab = tabpagenr()
"   try
"     " go through all tab pages
"     let l:tab = 0
"     while l:tab < tabpagenr('$')
"       let l:tab += 1

"       " go through all windows
"       let l:win = 0
"       while l:win < winnr('$')
"         let l:win += 1
"         " whatever buffer is in this window in this tab, remove it from
"         " l:buffers list
"         let l:thisbuf = winbufnr(l:win)
"         call remove(l:buffers, index(l:buffers, l:thisbuf))
"       endwhile
"     endwhile

"     " if there are any buffers left, delete them
"     if len(l:buffers)
"       execute 'bwipeout' join(l:buffers)
"     endif
"   finally
"     " go back to our original tab page
"     execute 'tabnext' l:currentTab
"   endtry
" endfunction

" }

" Custom menus to help me remember {
amenu Cool\ Stuff.Close\ other\windows\ \:only :only<CR>
amenu Cool\ Stuff.Vim\ diff\ put\ changes\ across\ \:diffput :diffput<CR>
amenu Cool\ Stuff.Edit\ vimrc\ \ \ :sp ~/.vim/vimrc<CR>
amenu Cool\ Stuff.Put\ cursor\ middle\ of\ screen\ zz zz
amenu Cool\ Stuff.Go\ last\ edit\ \ \ '0 '0
amenu Cool\ Stuff.Make\ windows\ vertical\ \ <CTRL-W>\ H <CTRL-W> H
amenu Cool\ Stuff.Make\ windows\ vertical\ \ <CTRL-W>\ K <CTRL-W> K
amenu Cool\ Stuff.Comment\ out\ \ \ :'<,'>s/^/#/  :'<,'>s/^/#/<CR>
amenu Cool\ Stuff.Uncomment\ \ \ :'<,'>s/#// :'<,'>s/#//<CR>
" }

" Use local vimrc if available {
    if filereadable(expand("~/.vim/vimrc.local"))
        source ~/.vim/vimrc.local
    endif
" }

