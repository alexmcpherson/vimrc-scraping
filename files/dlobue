set nocompatible
exec 'source ' . expand('<sfile>:p:h') . '/.vim/bundle/pathogen/autoload/pathogen.vim'
call pathogen#infect()
" generate helptags
Helptags

if !has('gui') || v:version < 703
    "disable csapprox if we don't have gui
    "it gives an annoying error otherwise
    let g:CSApprox_loaded = 1
endif
if has('gui_running')
    colorscheme mustang
    set lines=28 columns=122
elseif &term =~ 'xterm-256color'
    set t_Co=256
    colorscheme lucius
else
    colorscheme wargrey
endif

let g:CSApprox_attr_map = { 'bold' : 'bold', 'italic' : '', 'sp' : '' }

filetype on
syntax on
filetype plugin indent on
filetype plugin on
" set iskeyword+=.

" disable annoying gvim stuff
set guioptions-=T
set guioptions-=L
set guioptions-=r
set guioptions-=a
set guioptions-=m
set clipboard=

set pastetoggle=<F12>       " Sane indentation on pastes
set autoindent " Copy indent from current line when starting a new line.
set backspace=indent,eol,start
set ignorecase " case insensitive search
set smartcase " make search case-sensitive if search str has caps
set hlsearch " highlight results
set wildmenu " show some autocomplete options in status bar
set foldlevel=0 " default fold level. 0 for all closed
set hidden " allow unmodified buffers to be backgrounded
set number " show line and column number
set textwidth=0 " do not break lines when line lenght increases
set scrolloff=3
set sidescrolloff=3
set completeopt=longest,menu,preview
"set completeopt=longest,menu,menuone,preview
set history=1000
"set showmode
"set showcmd
"set laststatus=2
set maxmempattern=10000


au BufEnter * if &ft == 'qf' | set scrolloff=1 | endif
au BufLeave * if &ft == 'qf' | set scrolloff=3 | endif

au BufRead,BufNewFile *.jsm set filetype=javascript

inoremap <Leader>\ <Esc>
nnoremap <Leader>\ <Esc>
vnoremap <Leader>\ <Esc>
inoremap <Leader>i <Esc>`^
inoremap <Leader>a <Esc>
set timeoutlen=400

"vimdiff opts
set diffopt+=filler
set diffopt+=iwhite
set diffopt+=icase

"mappings to emulate gt & gT, only for buffers
nmap gb :bn<CR>
nmap gB :bp<CR>


" By default, it goes without auto-wrap. If I want, I can type <C-B> to toggle
" auto-wrap. Another <C-B> toggles back.
" set sr fo=roqm1 tw=64
" im <C-B> <C-O>:setl sr! fo<C-R>=strpart("-+",&sr,1)<CR>=tc<CR>

" if virtualedit=insert, use the following binding instead
" im <C-B> <C-O>:setl sr! fo<C-R>=strpart("-+",&sr,1)<CR>=tc<CR>_<BS><Right>

 " enter spaces when tab is pressed:
"set expandtab
" user 4 spaces to represent a tab
"set softtabstop=4
" number of space to use for auto indent
" you can use >> or << keys to indent current line or selection
" in normal mode.
"set shiftwidth=4

" remove all trailing whitespace
nnoremap <silent> <F5> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>
" toggle line numbers and fold column for easy copying:
nnoremap <F2> :set nonumber!<CR>:set foldcolumn=0<CR>

function! DeTab()
    set tabstop=4
    :retab
endfunction

" Search for selected text, forwards or backwards.
vnoremap <silent> * :<C-U>
  \let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
  \gvy/<C-R><C-R>=substitute(
  \escape(@", '/\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
  \gV:call setreg('"', old_reg, old_regtype)<CR>
vnoremap <silent> # :<C-U>
  \let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
  \gvy?<C-R><C-R>=substitute(
  \escape(@", '?\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
  \gV:call setreg('"', old_reg, old_regtype)<CR>


function! TabLeft()
   let tab_number = tabpagenr() - 1
   if tab_number == 0
      execute "tabm" tabpagenr('$') - 1
   else
      execute "tabm" tab_number - 1
   endif
endfunction

function! TabRight()
   let tab_number = tabpagenr() - 1
   let last_tab_number = tabpagenr('$') - 1
   if tab_number == last_tab_number
      execute "tabm" 0
   else
      execute "tabm" tab_number + 1
   endif
endfunction

let g:SuperTabDefaultCompletionType = "context"
let g:SuperTabLongestHighlight = 1
let g:SuperTabLongestEnhanced = 1


let g:python_auto_complete_variables = 1
let g:python_auto_complete_modules = 1

let g:CommandTMaxHeight = 12

let g:localvimrc_ask = 0
let g:localvimrc_sandbox = 0
let g:notesRoot = '~/docs/notes'
let g:pad_dir = '~/docs/pad_dir'

let g:pcs_hotkey = 1
let g:pcs_check_when_saving = 1

let s:configured_vindect = 1

let g:syntastic_enable_signs=0


"set statusline = "%{fugitive#statusline()}"


" ctrl+right to goto source of function under the cursor
map <silent><C-Right> <C-]>
" ctrl+left arrow to go back
map <silent><C-Left> <C-T>

nnoremap FF :NERDTreeToggle<CR>

" Display function name in status bar:
let g:ctags_statusline=1
" Automatically start script
let generate_tags=1


nnoremap TT :TagbarToggle<CR>
nnoremap FG :GundoToggle<CR>

let g:tagbar_compact = 1
let g:tagbar_autofocus = 1
let g:tagbar_autoshowtag = 1
let g:tagbar_width = 30

function! _child_of_git()
    let l:pid = getpid()
    while l:pid > 1
        let [l:name, @_, l:pid] = split( readfile('/proc/'.l:pid.'/stat', 1)[0], '\W\+')[1:3]
        if l:name =~ 'git'
            return 1
        endif
    endwhile
    return 0
endfunction

if &diff
    if _child_of_git()
        autocmd VimEnter * execute "windo set noma nowrite filetype=git foldmarker=<<<<<<<,>>>>>>>" | set ma write
    endif
endif

"original
"command! -nargs=1 Silent  | execute ':silent !'.<q-args>  | execute ':redraw!'
"my more streamlined version
command! -nargs=1 -bar -bang Silent execute ':silent<bang> '.<q-args>  | redraw!
command! -nargs=1 Grep execute 'Silent! grep! '.<q-args> | cw

"lets get Silent working before i start messing with autocommands
"autocmd QuickFixCmdPost *grep* cwindow

if has('cscope')
    set cscopetag cscopeverbose

    nmap <Leader>ss :cs find s <C-R>=expand("<cword>")<CR><CR>
    nmap <Leader>sg :cs find g <C-R>=expand("<cword>")<CR><CR>
    nmap <Leader>sc :cs find c <C-R>=expand("<cword>")<CR><CR>
    nmap <Leader>st :cs find t <C-R>=expand("<cword>")<CR><CR>
    nmap <Leader>se :cs find e <C-R>=expand("<cword>")<CR><CR>
    nmap <Leader>sf :cs find f <C-R>=expand("<cfile>")<CR><CR>
    nmap <Leader>si :cs find i ^<C-R>=expand("<cfile>")<CR>$<CR>
    nmap <Leader>sd :cs find d <C-R>=expand("<cword>")<CR><CR>
endif


function! _path_to_parts(path)
    let l:frags = split(a:path, '/')
    let l:tagpaths = []
    let l:i = 0
    while l:i < len(l:frags)
        let l:_tp = '/' . join(l:frags[:l:i], '/') . '/tags'
        if filereadable(l:_tp)
            let l:tagpaths += [l:_tp]
        endif
        let l:i += 1
    endwhile
    return reverse(l:tagpaths)
endfunction

function! BuildTagsFromPath()
    return join(pathogen#uniq(extend(_path_to_parts(expand('%:p:h')), _path_to_parts(getcwd()))), ',')
endfunction

exec 'set tags =' . BuildTagsFromPath()


" Remember last location in file
"if has("autocmd")
  "au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
    "\| exe "normal g'\"" | endif
"endif


