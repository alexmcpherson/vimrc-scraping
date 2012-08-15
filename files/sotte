" # .vimrc by stefan {{{
" Author: Stefan Otte <stefan.otte@gmail.com>
" Date: [2012-01-22 Sun]
" }}}
" # Preamble & Pathogen ------------------------------------------------------{{{
filetype off
filetype plugin off
filetype indent off

" ## How to install plugins with pathogen
"
" git submodule add http://github.com/tpope/vim-fugitive.git bundle/fugitive
" git add .
" git commit
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

set nocompatible
" }}}
" # Basic behaviour ----------------------------------------------------------{{{
filetype on
filetype plugin on
filetype indent on
syntax on

set t_Co=256 " Explicitly tell vim that the terminal has 256 colors
"set background=dark
"colorscheme molokai

set encoding=utf-8              " use UTF-8 encoding
set number                      " always show line numbers
set norelativenumber            " show no relativ line numbers

" formating options for text
" see http://vimcasts.org/episodes/hard-wrapping-text/ for more infos
set formatoptions=qrn1
set nowrap
set textwidth=79
set colorcolumn=0
set linebreak
set nolist
set listchars=tab:▸\ ,eol:¬,trail:~
set hidden                      " Allow backgrounding buffers without writing them, and remember marks/undo for backgrounded buffers
set history=1000                " Remember more commands and search history
set undolevels=1000             " use many muchos levels of undo

set backspace=indent,eol,start  " allow backspacing over everything in insert mode
set smarttab
" try to ceep the cursor in the middle of the screen
" http://vim.wikia.com/wiki/Keep_your_cursor_centered_vertically_on_the_screen
set scrolloff=999

set ttyfast
set title                       " change the terminal's title
set novisualbell                " no visual flash on error
set noerrorbells                " don't beep
set ruler                       " show the cursor position all the time
set showcmd                     " show (partial) command in the last line of the screen
                                " this also shows visual selection info
set autoread                    " automatically update the buffer if file got
                                " updated in the meantime: see :help W11

" Enabling copy and paste between vim instances 
set clipboard=unnamed

" Resize splits when the window is resized
au VimResized * exe "normal! \<c-w>="

let g:SuperTabDefaultCompletionType = "context"

" }}}
" # Tabs and whitespaces -----------------------------------------------------{{{
set tabstop=4                   " a tab is four spaces
set shiftwidth=4                " number of spaces to use for autoindenting
set softtabstop=4
set noexpandtab                 " use whitspace instaed of tab
" }}}
" # Search and replace -------------------------------------------------------{{{
set showmatch
set hlsearch                    " highlight search terms
set incsearch                   " show search matches as you type
set ignorecase                  " Make searches case-sensitive only if they contain upper-case characters
set smartcase
set gdefault                    " gdefault applies substitutions globally on lines
" }}}
" # Backup and similar stuff -------------------------------------------------{{{
set undofile                    " use global undo
set undodir=~/.vim/tmp/undo//     " undo files
set backupdir=~/.vim/tmp/backup// " backups
set directory=~/.vim/tmp/swap//   " swap files
set backup                        " enable backups
set noswapfile                    " It's 2012, Vim.
" }}}
" # Wildmenu -----------------------------------------------------------------{{{
set wildmenu                    " Make tab completion for files/buffers act like bash
set wildmode=list:longest
"set wildmode=longest,list       " GRB: use emacs-style tab completion when selecting files, etc
" }}}
" # Folding ----------------------------------------------------------------- {{{
set foldlevelstart=0
set foldmethod=syntax
set foldnestmax=2

" Space to toggle folds.
nnoremap <Space> za
vnoremap <Space> za

function! MyFoldText() " {{{
    let line = getline(v:foldstart)

    let nucolwidth = &fdc + &number * &numberwidth
    let windowwidth = winwidth(0) - nucolwidth - 3
    let foldedlinecount = v:foldend - v:foldstart

    " expand tabs into spaces
    let onetab = strpart('          ', 0, &tabstop)
    let line = substitute(line, '\t', onetab, 'g')

    let line = strpart(line, 0, windowwidth - 2 -len(foldedlinecount))
    let fillcharcount = windowwidth - len(line) - len(foldedlinecount)
    return line . '…' . repeat(" ",fillcharcount) . foldedlinecount . '…' . ' '
endfunction " }}}

set foldtext=MyFoldText()
" }}}
" # GUI and appearance settings --------------------------------------------- {{{
set cursorline                  " highlight current line
"colorscheme molokai

if has("gui_running")
    " set color scheme and font
    colorscheme molokai
    set guifont=Inconsolata-dz\ for\ Powerline\ Medium\ 10

    " higlight misspeled stuff differently
    "highlight SpellBad term=underline gui=undercurl guisp=Orange 
    
    " gvim: do not use gvims gui
    set guioptions=
    "enable menu
    set guioptions+=m
    " show always the tab bar
    set showtabline=2
end

" higligt mode
hi User1 term=inverse,bold cterm=inverse,bold ctermfg=red

" different color for autocomplete menu
"highlight Pmenu ctermfg=1 ctermbg=4 guibg=grey30

" statusline {{{
set laststatus=2                " tell VIM to always put a status line in, even
" powerline settings
let g:Powerline_symbols = 'fancy'

" Number of screen lines to use for the command-line
set cmdheight=2

" }}}
" }}} GUI
" # FileType specific stuff --------------------------------------------------{{{

" highlight variable under cursor (not smart)
autocmd CursorMoved * silent! exe printf('match Underlined /\<%s\>/', expand('<cword>'))

" git commit
" disable folding
autocmd! FileType gitcommit setlocal foldlevel=1

" jsp
autocmd! BufRead,BufNewFile *.jsp setlocal shiftwidth=4 tabstop=4
autocmd! BufRead,BufNewFile *.jsp setlocal noexpandtab

" latex settings
autocmd! BufRead,BufNewFile *.tex setlocal shiftwidth=2 tabstop=2
autocmd! BufRead,BufNewFile *.tex setlocal expandtab

" auto save on losing focus
autocmd FocusLost * :wa
" Return to normal mode on FocustLost
autocmd FocusLost * call feedkeys("\<C-\>\<C-n>")

" Source the vimrc file after saving it
"autocmd bufwritepost .vimrc source $MYVIMRC

" Octave Syntax
autocmd! BufRead,BufNewFile *.m,*.oct setfiletype octave

" Python stuff
autocmd FileType python set expandtab
autocmd BufNewFile,BufRead *.py compiler nose
autocmd BufNewFile,BufRead *.py setlocal foldmethod=indent

autocmd FileType python set omnifunc=pythoncomplete#Complete

" http://stackoverflow.com/questions/356126/how-can-you-automatically-remove-trailing-whitespace-in-vim
autocmd BufWritePre *.py :%s/\s\+$//e
" > Vim {{{

augroup ft_vim
    au!

    au FileType vim setlocal foldmethod=marker
    au FileType help setlocal textwidth=78
    au BufWinEnter *.txt if &ft == 'help' | wincmd L | endif
    au BufWinEnter *.txt if &ft == '' | :IndentGuidesDisable | endif
augroup END

" }}}
" > proto {{{

augroup ft_proto
    au!
    autocmd! BufRead,BufNewFile *.proto setfiletype proto
augroup END

" }}}
" > CPP and C {{{ 

augroup ft_cpp
    au!
    " set colorcolumn for cpp higher than normaly
    autocmd! BufRead,BufNewFile *.cpp setlocal colorcolumn=100
    autocmd! BufRead,BufNewFile *.c setlocal colorcolumn=100
    autocmd! BufRead,BufNewFile *.h setlocal colorcolumn=100

    " activate cpp and doxygen syntax for *.c and *.cpp files
    autocmd FileType cpp set syntax=cpp.doxygen

    " set omnicomplete for cpp
    autocmd FileType cpp set omnifunc=omni#cpp#complete#Main

    " http://stackoverflow.com/questions/356126/how-can-you-automatically-remove-trailing-whitespace-in-vim
    autocmd BufWritePre *.c :%s/\s\+$//e
    autocmd BufWritePre *.h :%s/\s\+$//e
    autocmd BufWritePre *.cpp :%s/\s\+$//e

augroup END

" }}}
" > html {{{

augroup ft_html
    au!
    " HTML
    autocmd FileType html setlocal syntax=jinja
    autocmd FileType html setlocal tabstop=4                   " a tab is four spaces
    autocmd FileType html setlocal shiftwidth=4                " number of spaces to use for autoindenting
    autocmd FileType html setlocal softtabstop=4
    autocmd FileType html setlocal noexpandtab
augroup END
" }}}

" }}}
" # Mappings ---------------------------------------------------------------- {{{
" leader
let mapleader=","
let maplocalleader = ","

" additional esc with ii
inoremap ii <ESC>

" . should act as expected (repeat) in visual mode
vnoremap . :norm.<CR>

" clear the search buffer when hitting return
nnoremap <leader><space> :nohlsearch<CR>

" Delete to end of line
nnoremap D d$

" Insert Date 
nmap <leader>st a<C-R>=strftime("<%Y-%m-%d %a>")<CR><Esc>
imap ,st <C-R>=strftime("<%Y-%m-%d %a>")<CR>

" format with Q
map Q gqip

" Split line (sister to [J]oin lines) The normal use of S is covered by cc, so
" don't worry about shadowing it.
nnoremap S i<cr><esc><right>

" toggle list
nmap <leader>sl :set list!<CR>

" map autocompletion to cmd space
" TODO: does not work
if has("gui")
    " C-Space seems to work under gVim on both Linux and win32
    inoremap <C-Space> <C-n>
else " no gui
    if has("unix")
        inoremap <Nul> <C-n>
    else
        " I have no idea of the name of Ctrl-Space elsewhere
    endif
endif

" Substitute word under cursor. VERY useful
nnoremap <Leader>sr :%s/\<<C-r><C-w>\>/

" change working dir to file
map <leader>cd :cd %:p:h<CR>

" use regular regex (not vim style) for search
nnoremap / /\v
vnoremap / /\v

" Spell Check
let b:myLang=0
let g:myLangList=["nospell","de_de","en_us"]
function! ToggleSpell()
  let b:myLang=b:myLang+1
  if b:myLang>=len(g:myLangList) | let b:myLang=0 | endif
  if b:myLang==0
    setlocal nospell
  else
    execute "setlocal spell spelllang=".get(g:myLangList, b:myLang)
  endif
  echo "spell checking language:" g:myLangList[b:myLang]
endfunction

nmap <silent> <leader>ss :call ToggleSpell()<CR>

" open .vimrc in new tab with: ,v
nmap <leader>sv :tabedit $MYVIMRC<CR>

" split window stuff
" open split window
nnoremap <leader>v <C-w>v<C-w>l
" move left
nnoremap <C-n> <C-w>h
" move down
nnoremap <C-e> <C-w>j
" move up
nnoremap <C-u> <C-w>k
" move down
nnoremap <C-i> <C-w>l

" make
map <F5> :make<CR>

" nicer cursor movements:
" use visible lines instead of real lines for cursor movement
" NOTE: " due to the fact that I use colemak I have mapped AltGr+(n|e|i|u)
" to cursormovements.
nnoremap <up> gk
nnoremap <down> gj
nnoremap <left> h
nnoremap <right> l

" Keep search matches in the middle of the window and pulse the line when moving
" to them.
nnoremap n nzzzv
nnoremap N Nzzzv

" Don't move on *
nnoremap * *<c-o>

" Same when jumping around
nnoremap g; g;zz
nnoremap g, g,zz

" }}}
" # Line Return --------------------------------------------------------------{{{

" Make sure Vim returns to the same line when you reopen a file.
" Thanks, Amit
augroup line_return
    au!
    au BufReadPost *
        \ if line("'\"") > 0 && line("'\"") <= line("$") |
        \     execute 'normal! g`"zvzz' |
        \ endif
augroup END

" }}}
" # Plugin settings --------------------------------------------------------- {{{
" ## Solarized Colorscheme Config ------------------------------------------ {{{

let g:solarized_underline=1    "default value is 1
let g:solarized_contrast="high"    "default value is normal
let g:solarized_visibility="high"    "default value is normal
let g:solarized_diffmode="high"    "default value is normal
let g:solarized_hitrail=0    "default value is 0

let g:solarized_termtrans=0
let g:solarized_degrade=0
let g:solarized_bold=1
let g:solarized_italic=1
let g:solarized_menu=1
let g:solarized_termcolors=256

"set background=dark
set background=light
colorscheme solarized

" }}}
" ## vimroom settings ------------------------------------------------------ {{{
let g:vimroom_guibackground = "white"
" }}}
" ## Syntastic Syntax Checker ---------------------------------------------- {{{

let g:syntastic_auto_loc_list=0
let g:syntastic_enable_signs=1
let g:syntastic_enable_balloons = 1
let g:syntastic_enable_highlighting = 1
let g:syntastic_quiet_warnings=0

let g:syntastic_cpp_no_include_search=1

" }}}
" ## python syntax --------------------------------------------------------- {{{
" better python highlighting - see syntax/python.vim for more details
let python_highlight_all = 1
" }}}
" ## PyFlakes -------------------------------------------------------------- {{{
" Set this option in your vimrc file to disable quickfix support for pyflakes
let g:pyflakes_use_quickfix = 0

" }}}
" ## ConqueTerm ------------------------------------------------------------ {{{
nmap <leader>z :ConqueTerm zsh <CR>

" }}}
" ## OrgMode --------------------------------------------------------------- {{{
nmap <leader>wo :e ~/org/index.org<CR>
let g:org_todo_keywords = ['TODO', '|', 'DONE']
let g:org_todo_keyword_faces = [['TODO', [':foreground red', ':weight bold']], ['DONE', [':foreground green', ':weight bold']]]


" }}}
" ## a.vim ----------------------------------------------------------------- {{{

" switch between .h and .cpp
map <C-TAB> :A <CR>

" }}}
" ## Ack ------------------------------------------------------------------- {{{
let g:ackprg="ack-grep -H --nocolor --nogroup --column"
:nnoremap <leader>a :LAck 


" }}}
" ## git fugitive ---------------------------------------------------------- {{{

nnoremap <leader>gs :Gstatus<CR>
nnoremap <leader>gd :Gdiff<CR>
nnoremap <leader>gw :Gwrite<CR>
nnoremap <leader>gc :Gcommit<CR>

" }}}
" ## SnipMate -------------------------------------------------------------- {{{
"
" need to source this file -- http://code.google.com/p/snipmate/issues/detail?id=66
" Why?
source ~/.vim/bundle/snipmate/after/plugin/snipMate.vim


" }}}
" ## vim-easymotion -------------------------------------------------------- {{{
"
let g:EasyMotion_leader_key = '<Leader>m'

" }}}
" ## ctrl-p ---------------------------------------------------------------- {{{

let g:ctrlp_map = '<leader>o'
set wildignore+=*/.git/*,*/.hg/*,*/.svn/*,*.o,*.obj,*.pyc,*.d

let g:ctrlp_custom_ignore = '\w+\.html$\|\w+\.xml$'

let g:ctrlp_extensions = ['buffertag']
nnoremap <leader>t :CtrlPBufTag<CR>
" }}}
" ## ctags and taglist ----------------------------------------------------- {{{

let Tlist_Ctags_Cmd = "/usr/bin/ctags"

"  tags path for c++ std
set tags+=~/.vim/tags/std
"  tags path for armadillo math lib
set tags+=~/.vim/tags/arma
"  defualt tags path
set tags=./tags;

" regenerate ctags for current dir
map <F12> :!ctags --verbose -R --sort=yes --c++-kinds=+p --fields=+iaS --extra=+q .<CR>
map <F4> :TagbarOpenAutoClose<cr>

" open definition in vertical tab
nnoremap <C-h> :vsp <CR>:exec("tag ".expand("<cword>"))<CR>
nnoremap <C-]> :tjump <C-r><C-w><CR>

" }}}
" ## omnicppcomplete ------------------------------------------------------- {{{
" OmniCppComplete
let OmniCpp_NamespaceSearch = 1
let OmniCpp_GlobalScopeSearch = 1
let OmniCpp_ShowAccess = 1
let OmniCpp_ShowPrototypeInAbbr = 1 " show function parameters

let OmniCpp_MayCompleteDot = 1 " autocomplete after .
let OmniCpp_MayCompleteArrow = 1 " autocomplete after ->
let OmniCpp_MayCompleteScope = 1 " autocomplete after ::

let OmniCpp_DefaultNamespaces = ["std", "_GLIBCXX_STD"]

" automatically open and close the popup menu / preview window
au CursorMovedI,InsertLeave * if pumvisible() == 0|silent! pclose|endif
set completeopt=menuone,menu,longest,preview

" }}}
" ## Latex ----------------------------------------------------------------- {{{

" important: grep will sometimes skip displaying the file name if you
" search in a singe file. This will confuse Latex-Suite. Set your grep
" program to always generate a file-name.
set grepprg=grep\ -nH\ $*

" OPTIONAL: Starting with Vim 7, the filetype of empty .tex files defaults to
" 'plaintex' instead of 'tex', which results in vim-latex not being loaded.
" The following changes the default filetype back to 'tex':
let g:tex_flavor='latex'

" use xelatex for compiling (becaus I use the Libertine font)
let g:Tex_CompileRule_pdf = 'xelatex -interaction=nonstopmode $*'
let g:Tex_DefaultTargetFormat = 'pdf'
"let g:Tex_ViewRule_pdf = 'evince'
let g:Tex_MultipleCompileFormats = 'pdf'
" }}}
" }}}
" # TMP ----------------------------------------------------------------------{{{

"let g:org_activate_intert_mode_mappings="1"
let g:org_agenda_files=['~/org/index.org', '~/org/TodaY.org', '~/org/EUBShopFelix.org', '~/org/vim-orgmode.org', '~/org/MasterArbeit.org']


" }}}
" vim: ts=4:sw=4:expandtab
