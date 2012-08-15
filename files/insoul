if v:lang =~ "utf8$" || v:lang =~ "UTF-8$"
   set fileencodings=ucs-bom,utf-8,latin1
endif

set nocompatible        " Use Vim defaults (much better!)
set bs=indent,eol,start " allow backspacing over everything in insert mode
set viminfo='20,\"50    " read/write a .viminfo file, don't store more
                        " than 50 lines of registers
set history=50          " keep 50 lines of command line history
set ruler               " show the cursor position all the time
set number              " show line numbers
set smarttab            " smart tabulatin and backspace
set title               " show title
set incsearch           " find while typing

" Display a place holder character for tabs and trailing spaces
set list
set listchars=trail:⋅,nbsp:⋅,tab:▷⋅

" Only do this part when compiled with support for autocommands
if has("autocmd")
  augroup fedora
    autocmd!
    " In text files, always limit the width of text to 78 characters
    autocmd BufRead *.txt set tw=78
    " When editing a file, always jump to the last cursor position
    autocmd BufReadPost *
    \ if line("'\"") > 0 && line ("'\"") <= line("$") |
    \   exe "normal! g'\"" |
    \ endif
    " don't write swapfile on most commonly used directories for NFS mounts or USB sticks
    autocmd BufNewFile,BufReadPre /media/*,/mnt/* set directory=~/tmp,/var/tmp,/tmp

    " Switch to working directory of the open file
    "autocmd BufEnter * lcd %:p:h
  augroup END

  " Enable formatting based on file types
  augroup myfiletypes
    autocmd!
    autocmd FileType ruby,eruby,yaml,cucumber,vim,lua,latex,tex set autoindent shiftwidth=2 softtabstop=2 expandtab
    autocmd BufRead *.mkd,*.markdown  set ai formatoptions=tcroqn2 comments=n:>
  augroup END 
endif

if has("cscope") && filereadable("/usr/bin/cscope")
   set csprg=/usr/bin/cscope
   set csto=0
   set cst
   set nocsverb
   " add any database in current directory
   if filereadable("cscope.out")
      cs add cscope.out
   " else add database pointed to by environment
   elseif $CSCOPE_DB != ""
      cs add $CSCOPE_DB
   endif
   set csverb
endif

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

filetype plugin indent on

" Don't wake up system with blinking cursor:
" http://www.linuxpowertop.org/known.php
let &guicursor = &guicursor . ",a:blinkon0"

" Set the leader key
let mapleader = ","

" Set the key to toggle NERDTree
nnoremap <leader>d :NERDTreeToggle<cr>

let NERDChristmasTree = 1               " NERDTree with colors
let NERDTreeHighlightCursorline = 1     " highlight cursorline
let NERDTreeMapActivateNode='<CR>'      " set Enter/Return to activate a node

" Set the keys to turn spell checking on/off
map <F8> <Esc>:setlocal spell spelllang=en_us<CR>
map <F9> <Esc>:setlocal nospell<CR>

" Set keys to toggle Scratch buffer
function! ToggleScratch()
  if expand('%') == g:ScratchBufferName
    quit
  else
    Sscratch
  endif
endfunction

map <leader>s :call ToggleScratch()<CR>

" this options is very slow at large size source file
" Enable code folding by syntax and disable folding by default
"setlocal foldmethod=syntax
"setlocal nofoldenable

" Turn off rails related things in statusbar
"let g:rails_statusline=0

" Remove highlighting search results
map <silent> <leader>nh :nohls <CR>

" Snipmate setup
source ~/.vim/snippets/support_functions.vim
autocmd vimenter * call ExtractSnips("~/.vim/snippets/html", "eruby")
autocmd vimenter * call ExtractSnips("~/.vim/snippets/html", "php")

" Vim-LaTeX setup
filetype plugin on
set grepprg=grep\ -nH\ $*
let g:tex_flavor='latex'

" Vala support
autocmd BufRead *.vala set efm=%f:%l.%c-%[%^:]%#:\ %t%[%^:]%#:\ %m
autocmd BufRead *.vapi set efm=%f:%l.%c-%[%^:]%#:\ %t%[%^:]%#:\ %m
au BufRead,BufNewFile *.vala  setfiletype vala
au BufRead,BufNewFile *.vapi  setfiletype vala

let vala_comment_strings = 1
let vala_space_errors = 1
let vala_no_tab_space_error = 1


set hidden " do not lose undo history when move buffer

autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType javascript set tabstop=2
autocmd FileType javascript set shiftwidth=2
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType html set tabstop=2
autocmd FileType html set shiftwidth=2
autocmd FileType css set omnifunc=csscomplete#CompleteCSS

autocmd FileType ruby,eruby let g:rubycomplete_buffer_loading = 1
autocmd FileType ruby,eruby let g:rubycomplete_rails = 1
autocmd FileType ruby,eruby let g:rubycomplete_classes_in_global = 1
autocmd FileType ruby,eruby set tabstop=2
autocmd FileType ruby,eruby set shiftwidth=2
autocmd FileType ruby,eruby set expandtab
autocmd FileType ruby,eruby let b:grep_filetype = "ruby"

autocmd FileType java set tabstop=4
autocmd FileType java set shiftwidth=4
autocmd FileType java set nolist


" os dependent settings
let os = substitute(system('uname'), "\n", "", "")
if os == "Darwin"
  if $VIM_CRONTAB == "true"
    set nobackup
    set nowritebackup
  endif
elseif os == "Linux"
endif

" terminal dependent settings
" terminal color setting
let term_app = substitute(system('echo $TERM_APP'), "\n", "", "")
if term_app == "terminal"
  colorscheme railscasts_alt
else
  set t_Co=256                 " terminal uses 256 colors
  colorscheme jellybeans
endif

" quickfix list setting
map <leader>qo :copen<CR>
map <leader>qc :cclose<CR>
map <leader>qp :colder<CR>
map <leader>qn :cnewer<CR>

" vim grep or ack setting
nnoremap <silent> <F3> :Rgrep<CR>
let Grep_Default_Filelist='*.sh *.plx *.rb *.rhtml *.erb *.java *.js'

set backupdir=~/.vim/tmp/backup
set directory=~/.vim/tmp/swap
let g:NERDTreeQuitOnOpen=1
map <Leader>ff :FuzzyFinderFile \*\*\/<CR>
map <leader>fb :FuzzyFinderBuffer<CR>
map <leader>ft :FuzzyFinderTag<CR>
map <leader>fg :FuzzyFinderTaggedFile<CR>
"map <leader>fq :FufQuickfix<CR>
map <leader>fc :FuzzyFinderRenewCache<CR>
let g:fuf_dir_exclude = '\v(^|[/\\])\.(hg|git|bzr)($|[/\\])'
" Initializes g:FuzzyFinderOptions.
let g:FuzzyFinderOptions = { 'Base':{}, 'Buffer':{}, 'File':{}, 'Dir':{},
      \                      'MruFile':{}, 'MruCmd':{}, 'Bookmark':{},
      \                      'Tag':{}, 'TaggedFile':{},
      \                      'GivenFile':{}, 'GivenDir':{}, 'GivenCmd':{},
      \                      'CallbackFile':{}, 'CallbackItem':{}, }
let g:FuzzyFinderOptions.Base.enumerating_limit  = 30



" TagList
let g:ctags_statusline=1            " display function name in status bar
let generate_tags=1                 " automatically start script
let Tlist_Use_Horiz_Window=0        " display taglist results in a vertical window
nnoremap <leader>t :TlistToggle<CR>
let Tlist_Use_Right_Window=1
let Tlist_Compact_Format=1
let Tlist_Exit_OnlyWindow=1
let Tlist_GainFocus_On_ToggleOpen=1
let Tlist_File_Fold_Auto_Close=1
let Tlist_Auto_Highlight_Tag=1
let Tlist_Highlight_Tag_On_BufEnter=1
let Tlist_Show_Menu=1
let Tlist_Sort_Type="name"
let Tlist_Inc_Winwidth=1

" set navigation buffer and tab
noremap <C-H> :bp!<CR>
noremap <C-L> :bn!<CR>
inoremap <C-H> <ESC>:bp!<CR>
inoremap <C-L> <ESC>:bn!<CR>
noremap <C-J> :tabp<CR>
noremap <C-K> :tabn<CR>
inoremap <C-J> <ESC>:tabp<CR>
inoremap <C-K> <ESC>:tabn<CR>

" mini buffer explorer setup
"let g:miniBufExplMapWindowNavVim=1  " Ctrl+[hjkl] act as navigation of window 
"let g:miniBufExplMapCTabSwitchBufs=1
let g:miniBufExplMapWindowNavArrows=1
let g:miniBufExplModSelTarget=1 
let g:miniBufExplorerMoreThanOne = 2
"let g:miniBufExplSplitBelow=1  " Put mini buffer explorer window below, because fuzzyfinder window

map <C-Up> :tabn<CR>
map <C-Down> :tabp<CR>
map <C-Right> :bn<CR>
map <C-Left> :bp<CR>

map <Leader>m :TMiniBufExplorer<CR>
map <Leader>, :b!#<CR>
map <Leader>1 :b!1<CR>

if filereadable(expand("~/.vimrc.local"))
  source ~/.vimrc.local
endif
