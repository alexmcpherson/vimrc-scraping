syntax on
syntax enable
"colors elflord
colors molokai_mod
set history=100         
set ruler               " show the cursor position all the time
set rulerformat=%30(%=\:b%n%y%m%r%w\ %l,%c%V\ %P%)
set bs=2                " allow backspacing over everything in insert mode
set hlsearch
set winminheight=0
set incsearch
set magic
set ignorecase
set smartcase
set ttyfast
set fileencodings=utf-8
set encoding=utf-8
set enc=utf-8
set fencs=utf-8
set wildmenu
set tabstop=4
set shiftwidth=4
set expandtab
set nobackup
set nowritebackup
set noswapfile
set matchpairs+=<:>
set visualbell           " don't beep
set noerrorbells         " don't beep
set mouse=a
set iskeyword+=:
set pastetoggle=<F1>
set wildmode=list:longest,full
set scrolloff=5

let perl_include_pod = 1
let perl_extended_vars = 1

map <C-k> :tabnext<CR>
map <C-j> :tabprev<CR>
map ,/ :s/^/\/\//<CR> <Esc>:noh<CR>
map ./ :s/^\/\///<CR> <Esc>:noh<CR>
map ,# :s/^/#/<CR> <Esc>:noh<CR>
map .# :s/^\(\s*\)#\+/\1<CR> <Esc>:noh<CR>
autocmd FileType perl set showmatch

" Prevent perl filetype plugin from adding @INC to autocomplete
let perlpath = '.'
filetype plugin indent on

    " check perl code with :make
autocmd FileType perl set makeprg=perl\ -Ilib\ -c\ %\ $*
autocmd FileType perl set errorformat=%f:%l:%m
autocmd FileType perl set autowrite
autocmd FileType perl set expandtab
autocmd FileType perl set equalprg=perltidy
autocmd FileType javascript set equalprg=js_beautify.pl\ -
autocmd FileType make set noexpandtab
autocmd FileType set equalprg& " default

"joey changes start here-
"remap leader from \ to ,
let mapleader = ","
nmap <silent> <leader>ev :e $MYVIMRC<CR>
nmap <silent> <leader>sv :so $MYVIMRC<CR>


"yank/paste to a buffer file for pasting between separate vi instances
vmap <Leader>y :w! ~/.vimbuffer<CR>
nmap <Leader>y :.w! ~/.vimbuffer<CR>
nmap <Leader>p :r ~/.vimbuffer<CR>

"remove trailing whitespace
map .$ :%s/\s\+$//<CR> <Esc>:noh<CR>

"shortcut for quoting and comma separating items
vmap <Leader>, :s/\v(\w+)/'\1',/g<CR><Esc>:noh<CR>
nmap <Leader>, :s/\v(\w+)/'\1',/g<CR><Esc>:noh<CR>

"line number toggles
nnoremap <silent> <F2> :exec &nu==&rnu? "se nu!" : "se rnu!"<CR>
nnoremap <silent> <F3> :exec "se rnu!"<CR>

" w!! will save file with sudo
cabbrev w!! w !sudo tee % >/dev/null

" set dir to directory of current file
autocmd BufEnter * silent! lcd %:p:h


command! -bar -nargs=1 DoPod %!perldoc -t <args>

command! -bar -nargs=1 Pod
\   new
\|  DoPod <args>
\|  set syntax=pod
\|  goto 1
\|  set buftype=nofile
"Remap K to lookup perldoc
autocmd FileType perl noremap K :Pod <C-R><C-W><CR>

" Disable highlight when <leader><cr> is pressed
map <silent> <leader><cr> :noh<cr>
nnoremap > >>
nnoremap < <<



"trying new stuff from vim help docs
map [[ ?{<CR>w99[{<Esc>:noh<CR>
map ][ /}<CR>b99]}<Esc>:noh<CR>
map ]] j0[[%/{<CR><Esc>:noh<CR>
map [] k$][%?}<CR><Esc>:noh<CR>


"nnoremap - ;
nnoremap \ ;
nnoremap ; :
nnoremap 0 ^
nnoremap <c-w>> <c-w>5>
nnoremap <c-w>< <c-w>5<
"function! SuperTab()
"    if (strpart(getline('.'),col('.')-2,1)=~'^\W\?$')
"        return "\<Tab>"
"    else
"        return "\<C-n>"
"    endif
"endfunction
"imap <Tab> <C-R>=SuperTab()<CR>

function! CleverTab()
"   if strpart( getline('.'), 0, col('.')-1 ) =~ '^\s*$'
    if (strpart(getline('.'),col('.')-2,1)=~'^\W\?$')
      return "\<Tab>"
   else
      return "\<C-N>"
   endif
endfunction
inoremap <Tab> <C-R>=CleverTab()<CR>
