call pathogen#runtime_append_all_bundles()

" This is to get vim to use plugin indenting
set nocompatible      " We're running Vim, not Vi!
syntax on             " Enable syntax highlighting
filetype on           " Enable fieltype detection
filetype indent on    " Enable filetype-specific indenting
filetype plugin on    " Enable filetype-specific plugins

set cf  " Enable error files & error jumping.
set history=256  " Number of things to remember in history.
set autowrite  " Writes on make/shell commands
set number  " Line numbers on
" set nowrap  " Line wrapping off
set wrap
set nojoinspaces                "nojs:  prevents inserting two spaces after punctuation on a join (it's not 1990 anymore)
noremap ,<CR> :put_<CR> " Shortcut to add new blank line without entering insert mode

" Switch on search pattern highlighting.
set hlsearch incsearch
set smartcase
set showmatch  " Show matching brackets.
set mat=5  " Bracket blinking.
set list
highlight NonText ctermfg=grey
highlight SpecialKey guifg=grey
set listchars=tab:▸\ ,eol:¬,trail:~,extends:>,precedes:<
set laststatus=2  " Always show status line.

set backspace=eol,start,indent 
" allow backspacing over indent, eol, & start

" Enable folding
set fen			      " folding enabled
set fdl=1		      " fold at level > 2
set fdc=5		      " fold column width
set fdm=syntax		" fold method: syntax
map <Space> za

" Formatting (some of these are for coding in C and C++)
set ts=2  " Tabs are 2 spaces
set sw=2	" autoindent 2 spaces
set bs=2  " Backspace over everything in insert mode
set softtabstop=2 " a tab while editing inserts X spaces.
set et			" expand tabulators to spaces
set nocp incsearch
set cinoptions=:0,p0,t0
set cinwords=if,else,while,do,for,switch,case
set formatoptions=tcqr
set cindent
set autoindent
set smarttab
set expandtab

set grepprg=ack

let g:netrw_http_xcmd= '-source >' " html source rather than rendered in links
let g:netrw_liststyle=3            " tree view

" File handling stuff
set dir=/tmp/ " Directory for the swap file
set fileformat=unix   " Unix line endings
set nobk              " No backup files
set ruler             " Ruler that is really useful
set hidden            " Allow buffers to be hidden unsaved.

set tags=./tags

" Color schema
colors pablo

" Omni Completion
" *************************************************************
autocmd FileType html :set omnifunc=htmlcomplete#CompleteTags
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags
autocmd FileType php set omnifunc=phpcomplete#CompletePHP
autocmd FileType c set omnifunc=ccomplete#Complete


" Ruby -------------------------------------------------------------
let ruby_minlines=50
" let ruby_operators = 1
let ruby_space_errors = 1
let ruby_fold = 1

autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete
autocmd FileType ruby,eruby let g:rubycomplete_buffer_loading = 1
autocmd FileType ruby,eruby let g:rubycomplete_rails = 1
autocmd FileType ruby,eruby let g:rubycomplete_classes_in_global = 1
"improve autocomplete menu color
highlight Pmenu ctermbg=238 gui=bold
":set completeopt=longest,menuone

" Keybord maps
"nmap <TAB>   za
"vmap <TAB>   >gv
"vmap <S-TAB> <gv

imap <S-CR>    <CR><CR>end<Esc>-cc

map <F1> <C-w><C-w>
map <S-F1> <C-w><S-w>
map <F4> <esc>:Ack 
map <F6> :confirm bprevious<CR>
map <F7> :confirm bnext<CR>
map <C-Tab> :bnext<CR>
map <C-S-Tab> :bprevious<CR>

autocmd FileType ruby map _s :w !ruby -c<CR>
autocmd FileType ruby set iskeyword+=!,?

autocmd FileType ruby,eruby,rspec map _r :w<CR>ruby %<CR>
autocmd FileType php  map _r :w<CR>php %<CR>
autocmd FileType sass map _r :w<CR>:!sass --style compact %<.sass %<.css<CR>

au! BufWritePost .vimrc source %
cmap Q quitall<CR>
map _c !pbcopy<CR>u
map _p V!pbpaste<CR>
" map _t :tjump <C-R><C-w><CR> " tag jump
map _e <esc>:e **/
map _b \be

"NERDTree
let NERDTreeIgnore=['\.pyc$']
let NERDTreeWinSize=40
map _n :NERDTreeFind<CR>

"buftabs
let g:buftabs_in_statusline=1
let g:buftabs_only_basename=1
highlight Buf ctermfg=white ctermbg=blue
let g:buftabs_active_highlight_group="Buf"
let g:buftabs_separator = "~"


" Buffer management
nnoremap <leader>bd :Bclose<CR>|   " Close buffer

map _t :RubyTagJump<CR>
command! RubyTagJump call RubyTagJump()
function! RubyTagJump()
  let __current_word=expand("<cword>")
  if &ft == 'ruby'
    set iskeyword+=:
    try
      execute "tjump ".expand("<cword>")
    catch
      set iskeyword-=:
      execute "tjump ".__current_word
    finally
      set iskeyword-=:
    endtry
  else
    execute "tjump ".__current_word
  endif
endfunction


" Don't close window, when deleting a buffer
command! Bclose call <SID>BufcloseCloseIt()

function! <SID>BufcloseCloseIt()
   let l:currentBufNum = bufnr("%")
   let l:alternateBufNum = bufnr("#")

   if buflisted(l:alternateBufNum)
     buffer #
   else
     bnext
   endif

   if bufnr("%") == l:currentBufNum
     new
   endif

   if buflisted(l:currentBufNum)
     execute("bdelete! ".l:currentBufNum)
   endif
endfunction

map _d :Bclose <CR>

function! SuperCleverTab()
  if strpart(getline('.'), 0, col('.') - 1) =~ '^\s*$'
    return "\<Tab>"
  else
    if &omnifunc != ''
      return "\<C-X>\<C-O>"
    elseif &dictionary != ''
      return "\<C-K>"
    else
      return "\<C-N>"
    endif
  endif
endfunction
inoremap <Tab> <C-R>=SuperCleverTab()<cr>

