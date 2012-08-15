" This must be first, because it changes other options as side effect
set nocompatible " disable vi compatiblity
set hidden " change buffers w/o saving - essential

" Some basic settings
set listchars=tab:→⋅,trail:⋅,eol:¬,extends:∴,nbsp:∙ " invisibles definitions
set scrolloff=3 " start scrolling a bit earlier
set sidescrolloff=10 " Keep 5 lines at the size
set undolevels=1000 " tons of undos
set showmatch " jump to matching parens when inserting
set history=100 " a bit more history
set visualbell " stop dinging!!!
set shortmess=atI " short (a), truncate file (t), and no intro (I) messages
" set matchtime=5 " 10ths/sec to jumpt to matching brackets
" set number " shows line number column - set in gvimrc

" Un-nerf searches
set incsearch " highlight search phrases
set hlsearch " keep the search highlighted when going through them
set ignorecase " ignore case in seraches...
set smartcase " ...but only if there is no capital letter present

" Allow <BkSpc> to delete line breaks, beyond the start of the current
" insertion, and over indentations:
set backspace=eol,start,indent

" Let vim switch to paste mode, disabling all kinds of smartness and just
" paste a whole buffer of text instead of regular insert behaviour
set pastetoggle=<F5>

" Set exec-bit on files that start with a she-bang line
au BufWritePost * if getline(1) =~ "^#!" | silent !chmod +x <afile>

" Enable extended % matching (if/elsif/else/end) and SGML tags
runtime macros/matchit.vim

" Syntax highlighting and filetype-dependent indenting
filetype on
filetype plugin indent on
syntax enable

" omni-completion on for...
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType python3 set omnifunc=python3complete#Complete
autocmd FileType ruby set omnifunc=rubycomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags
autocmd FileType c set omnifunc=ccomplete#Complete

" Command line completion
set wildmenu " turn on command line completion wild style
" but ignore files that are completely "useless" from an IDE perspective
set wildignore=*.dll,*.o,*.obj,*.pyc,*.pyo,*.jpg,*.gif,*.png,*.swp,*.class
set wildmode=list:longest " and show everything possible for completion

" Status line as good as it gets...
" %buffer_number:%file_name
" flags: modified readonly help preview_window
" (fileformat){filetype} tagname
" [byteval_under_cursor][line_number,virtual_col_number][percentage_in_file]
set statusline=%n:%f%m%r%h%w\ (%{&ff}){%Y}\ %{Tlist_Get_Tagname_By_Line()}\ %=[0x\%02.2B][%03l,%02v][%02p%%]
set laststatus=2 " show the statusline - always

" Tab indention handling
set autoindent " indent files
set copyindent " copy the previous indetation on autoindenting
au FileType text set noautoindent
set expandtab " no real tabs
au FileType text set noexpandtab
set smarttab " insert blanks using shiftwidth; off uses (soft)tabstop
set shiftwidth=2 " for smarttab (Python uses 4, defined below)
set softtabstop=2 " number of spaces to use when editing tabs (Python see below)
au FileType text set softtabstop=0

" Code folding
set foldenable
set foldmarker={,} " when foldmethod marker is used
set foldmethod=syntax " fold based on... indent, marker, or syntax
" note that Python indention seems to work best with indent
set foldlevel=5 " default fold level (20 is max level for indent)
set foldminlines=2 " number of lines up to which not to fold
set foldnestmax=5 " fold max depth (20 is max for indent)

" Store backups into special dirs
set nobackup " by default, ignore backups - swaps are good enough
set backupdir=~/.vim/backup " backup files dir
set directory=~/.vim/tmp " swap files dir

" Higlight the cursorline after a jump, but deactivate on move
function s:Cursor_Moved()
  let cur_pos = winline()
  if g:last_pos == 0
    set cul
    let g:last_pos = cur_pos
    return
  endif
  let diff = g:last_pos - cur_pos
  if diff > 1 || diff < -1
    set cul
  else
    set nocul
  endif
  let g:last_pos = cur_pos
endfunction
autocmd CursorMoved,CursorMovedI * call s:Cursor_Moved()
let g:last_pos = 0

" Tell Rgrep not to use Xargs on Mac OS 'cause it sucks.
let s:os = system("uname")
if s:os =~ "Darwin"
  let g:Grep_Xargs_Options='-0'
endif

" SuperTab setup: use context-dependent completion style
let g:SuperTabDefaultCompletionType="context"

" TagList setup
let TlistHighlightTag=3 " hilight tag in list after 3 seconds (default: 4)
" focus taglist on toggle
let Tlist_GainFocus_On_ToggleOpen=1
" show only the tags for one file (navigate files via NERDTree)
let Tlist_Show_One_File=1
" update the taglist on file modifications
let Tlist_Auto_Update=1
" display the taglist to the right
let Tlist_Use_Right_Window=1
" hide the fold columns
let Tlist_Enable_Fold_Column=0

" Python 3 Setup
" --------------

" Update shiftwidth/softtabstop
au BufRead,BufNewFile *.py set shiftwidth=4
au BufRead,BufNewFile *.py set softtabstop=4

" Python make commands
autocmd BufRead *.py set makeprg=python3\ -c\ \"import\ py_compile,sys;\ sys.stderr=sys.stdout;\ py_compile.compile(r'%')\"
autocmd BufRead *.py set efm=%C\ %.%#,%A\ \ File\ \"%f\"\\,\ line\ %l%.%#,%Z%[%^\ ]%\\@=%m

" pydoc.vim setup
let g:pydoc_cmd = "pydoc3"

" Python code checks, tests, and runs
" check
autocmd BufRead *.py nmap <Leader>c :!pyflakes3k %<CR>
" test all
autocmd BufRead *.py nmap <Leader>t :!py.test-3 -s --doctest-modules --nocapturelog %<CR>
" run
autocmd BufRead *.py nmap <Leader>r :!python3 %<CR>

" Pytest.vim and py.test
autocmd BufRead *.py nmap <Leader>pf <Esc>:Pytest file<CR>
autocmd BufRead *.py nmap <Leader>pc <Esc>:Pytest class<CR>
autocmd BufRead *.py nmap <Leader>pm <Esc>:Pytest method<CR>
autocmd BufRead *.py nmap <Leader>ps <Esc>:Pytest session<CR>
autocmd BufRead *.py nmap <Leader>pn <Esc>:Pytest next<CR>

" Only save Python file after successful syntax check
au! BufWriteCmd *.py call CheckPythonSyntax()
function CheckPythonSyntax()
  " Write the current buffer to a temporary file, check the syntax and
  " if no syntax errors are found, write the file
  let compiler = "python3"
  let curfile = bufname("%")
  let tmpfile = tempname()
  silent execute "write! ".tmpfile
  let output = system("python3 -c \"__import__('py_compile').compile(r'".tmpfile."')\" 2>&1")
  if output != ''
    " Make sure the output specifies the correct filename
    let output = substitute(output, fnameescape(tmpfile), fnameescape(curfile), "g")
    echo output
  else
    write
  endif
  " Delete the temporary file when done
  call delete(tmpfile)
endfunction

" Text expansion - iabbrev
autocmd BufRead *.py iabbrev ifmain if __name__ == '__main__':
autocmd BufRead *.py iabbrev definit def __init__(self,
autocmd BufRead *.py iabbrev defdel def __del__(self,
autocmd BufRead *.py iabbrev defcall def __call__(self,
autocmd BufRead *.py iabbrev defiter def __iter__(self,
autocmd BufRead *.py iabbrev defnext def __next__(self,

" Command Line Mappings
" ---------------------

" Switch to sudo vim <file> **after** opening a file
cmap w!! w !sudo tee % > /dev/null

" Key Mappings -- remember <S-Space> does not work on Mac :(
" ------------
" remember the mapping for highlight search disable was defined already

" quickly clear serach highlights
nmap <silent> <Leader>\ :nohlsearch<CR>

" quick make commands and moving through errors
nnoremap <F7> :cprevious<CR>
nnoremap <F8> :make<CR>
nnoremap <F9> :cnext<CR>

" delete all trailing whitespaces when using BS in visual mode
vnoremap <BS> :<BS><BS><BS><BS><BS>%s/\s\+$//ge<CR>

" scroll viewport a bit fater
nnoremap <C-e> 2<C-e>
nnoremap <C-y> 2<C-y>

" toggle showing list characters (tab, trail, eol)
nnoremap <silent> <Leader>l :set nolist!<CR>
" toggle linenumbering
nnoremap <silent> <Leader>n :set nonumber!<CR>

" toggle the NERDTree plugin ("[d]irectory")
nnoremap <silent> <Leader>d :NERDTreeToggle<CR>
" toggle the TagList plugin ("[o]utline")
nnoremap <silent> <Leader>o :TlistToggle<CR>

" faster switch to last buffer faster (like gt)
nmap <silent> tt :b#<CR>

" Easy window navigation
nmap <C-h> <C-w>h
nmap <C-j> <C-w>j
nmap <C-k> <C-w>k
nmap <C-l> <C-w>l

" Make window resizing easier
" (note: reversed setting more intuitive)
nmap <silent> <Up> <C-W>-
nmap <silent> <Down> <C-W>+
nmap <silent> <Left> <C-W>>
nmap <silent> <Right> <C-W><
