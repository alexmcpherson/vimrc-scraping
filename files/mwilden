set nocompatible

let mapleader = ','

if !exists("g:loaded_pathogen")
  call pathogen#runtime_append_all_bundles()
endif
"call pathogen#helptags()

" maps """""""""""""""""""""""
" save file
nmap <silent> <C-S> :w<CR>
imap <silent> <C-S> <C-O><C-s>
"
"save and execute current vim script
nmap <silent> <M-v> :w<CR>:source %<CR>
imap <silent> <M-v> <C-O><C-a>

" show undo list
nnoremap <silent> <Leader>U :GundoToggle<CR>

" quick-fix
nmap <silent> <F5> :cp<CR>
imap <silent> <F5> <ESC><F5>
nmap <silent> <F6> :cn<CR>
imap <silent> <F6> <ESC><F6>
nmap <silent> <S-F5> :colder<CR>
imap <silent> <S-F5> <ESC><S-F5>
nmap <silent> <S-F6> :cnewer<CR>
imap <silent> <S-F6> <ESC><S-F6>
nmap <Leader>q :copen<CR><C-W>J<C-W>4+
nmap <Leader>Q :cclose<CR>

" recall most recent command
map <M-p> :<C-p>
imap <M-p> <ESC><M-p>

" execute ruby file
nmap <silent> <M-x> :!ruby %<CR>
imap <silent> <M-x> <Esc>≈

" replace word under cursor
nmap <Leader>s :%s/\<<C-r><C-w>\>/
vmap <Leader>s :%s/\<<C-r><C-w>\>/

" show all occurences of word under cursor
nmap <silent> <Leader>w *N:g/\<<C-r>/\><CR>

" edit this file
nmap <silent> <Leader>v :tabedit $MYVIMRC<CR>

" unhighlight search
nnoremap <Leader><Space> :noh<CR>

" use emacs keys on cmdline
cnoremap <C-A> <Home>
cnoremap <C-F> <Right>
cnoremap <C-B> <Left>
cnoremap <C-E> <End>
cnoremap <C-P> <Up>
cnoremap <C-N> <Down>
cnoremap <C-D> <Del>

" go to character, not just line
nmap <silent> ' `

" delete inner line
nmap <silent> dil ^D"xdd
onoremap <silent> il :<C-U>normal! 0v$h<CR>

" close other windows and tabs
nmap <silent> <Leader>o :only<CR>:tabonly<CR>:noh<CR>
" close everything
nmap <silent> <Leader>O :bufdo bd<CR>

" run 'q' macro
nmap Q @q

" show line numbers
nmap <Leader>n :set number<CR>

" convert Ruby 1.8 hashrockets to 1.9
"nmap <Leader>; F:xea:ldf>
nmap <Leader>; F:,:
nmap <Leader>: xea:<Esc>f=xx

" convert double quotes to single quotes
nmap <Leader>' macs"''a
" convert single quotes to double quotes
nmap <Leader>" macs'"'a
" remove parens but leave a space
nmap <Leader>( ds(i <Esc>
nmap <Leader>) ds(i <Esc>

" commands """""""""""""""""""""""
" write the current buffer even if it requires root access
command! W w !sudo tee % >/dev/null

" plugins """""""""""""""""""""""
" CtrlP
let g:ctrlp_by_filename = 1
"let g:ctrlp_extensions = ['tag', 'buffertag', 'quickfix', 'dir', 'rtscript', 'undo', 'line', 'changes', 'mixed']
let g:ctrlp_jump_to_buffer = 0
" disable so Project can use <C-P>
let g:ctrlp_map = '<c-f1>'
let g:ctrlp_max_height = 20
let g:ctrlp_mruf_default_order = 1
"let g:ctrlp_mruf_exclude = '.*vimprojects|solr.*'
let g:ctrlp_mruf_last_entered = 1
let g:ctrlp_working_path_mode = 2
map <C-Z> :CtrlPMRU<CR>

" Project
" grep
nmap <Leader>g :Project<CR>gg<CR>zX\G'
" grep word under cursor
nmap <Leader>G yiw:Project<CR>ggzX\G'\b<C-R>"\b'<CR><C-P><Leader>q
" refresh
nmap <Leader>p :Project<CR>gg\RzXzo/tags<CR>dd<C-W>p
nmap <silent> <C-P> <F12>
let g:proj_window_width=30
let g:proj_flags='cgisST'
" keep window open or let it close
nmap <Leader>po :let g:proj_flags='gisST'<CR>
nmap <Leader>pc :let g:proj_flags='cgisST'<CR><C-P>

" fugitive
" open diff
nmap <Leader>d :Gdiff<CR>
" close diff
nmap <Leader>D <C-W>pZZ

" Gundo
let g:gundo_width = 30
let g:gundo_help = 0
let g:gundo_preview_bottom = 1

""""""""""" vim-browserreload-mac
" stay in Vim when reloading FireFox
let g:returnApp = 'MacVim'
" reload FireFox when current buffer saved
nmap <Leader>fr :FirefoxReloadStart<cr>:w<cr>
" stop reloading FireFox (for every buffer)
nmap <Leader>fR :bufdo FirefoxReloadStop<cr>

" sets """""""""""""""""""""""
set autochdir
set autowriteall
set backspace=indent,eol,start
set breakat-=:
set breakat-=_
set browsedir=current
set clipboard=unnamed
set complete=.,w,b,u,t
set completeopt=menu,preview
set copyindent
set cursorline
set display=lastline
set equalalways
set expandtab
set formatoptions-=c
set formatoptions-=o
set formatoptions-=r
set formatoptions-=t
set gdefault
set grepprg=ack\ -H\ --nocolor\ --nogroup
set guifont=Menlo:h13
set guioptions+=c
set guioptions-=T
set guitablabel=%t
set history=200
set hlsearch
set ignorecase smartcase
set incsearch
set laststatus=2
set linebreak
if has("gui_running")
  set macmeta
endif
set matchtime=2
set mouse=n
set nobackup
set noerrorbells
set nostartofline
set noswapfile
set number
set numberwidth=3
set printoptions=syntax:n
set printheader=%F%=Page\ %N
set ruler
set scrolloff=1
set shiftround
set shortmess+=t
set showbreak=@
set showcmd
set showmatch
set statusline=%F\ %y%m%r%{fugitive#statusline()}%=%-a\ %b\ 0x%B\ %-14.(%c:%l/%L%)\ %P
set sw=2
set switchbuf=useopen
set tabstop=2
set textwidth=72
set tildeop
if v:version >= 703
  set undofile
  set undodir=/tmp
endif
set visualbell
set wildmenu
set wildmode=list:longest:full
set winheight=25
set writeany

"autocmds
augroup mwilden
  autocmd!
  " don't wrap one particular group of files
  autocmd BufRead names*.txt set nowrap

  " set markdown filetype
  autocmd BufRead, BufWrite *.md set filetype=markdown
  " set citrus filetype
  autocmd BufRead,BufWrite *.citrus set filetype=citrus

  " go to line we were on the last time we edited the file
  autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal g`\"" |
    \ endif

  " source certain files on write
  autocmd BufWritePost $MYVIMRC source $MYVIMRC|source $MYGVIMRC
  autocmd BufWritePost *.vim source %
  autocmd BufWritePost *.snippets call ReloadAllSnippets()

  " save when switching applications
  autocmd FocusLost * wa
  " turn off insert mode when switching applications
  autocmd FocusLost * 
    \ if mode()[0] =~ 'i\|R' |
    \   call feedkeys("\<Esc>") |
    \ endif
augroup END

" turn number on in current window
augroup BgHighlight
  autocmd!
  autocmd WinEnter * set number
  autocmd WinLeave * set nonumber
augroup END

if !exists("g:vimrcloaded")
  set lines=92
  set columns=184
  winpos 0 0
  let g:vimrcloaded = 1
endif

filetype plugin indent on
runtime macros/matchit.vim

nmap <leader>8 >>.^iit "should handle this" do<cr>parser.parse "<esc>A"<CR>end<ESC><<<c-j>

autocmd BufReadPost * set formatoptions-=c | set formatoptions-=o | set formatoptions-=r | set formatoptions-=t

iabbrev txi taxonomic_history_item
iabbrev taxonomic_history_item XXX

let g:syntastic_enable_balloons = 0
