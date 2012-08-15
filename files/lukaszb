"Theme & colors"
set background=dark 
colorscheme ir_black
syntax on
set nu

"Tabs & spaces"
set smartindent
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
set autoindent
set incsearch
filetype plugin on
filetype indent on
let loaded_delimitMate=0

"Spell checks
setlocal spell spelllang=en_us
set nospell

"Backspace settings"
set backspace=2

"set noerrorbells 
set visualbell

" Swap files
" set backupdir="/tmp/"

" Niceness
nnoremap ' `
nnoremap ` '
let mapleader = ","
runtime plugin/matchit.vim
nmap <silent> <leader>n :silent :nohlsearch<CR>
let g:EclimXmlValidate=0
let g:FindMate_verbose = 'find'

" Vimdiff settings [for merges]
nnoremap <Leader>u :diffupdate<CR>
nnoremap <Leader>g :diffget<CR>
nnoremap <Leader>p :diffput<CR>

"Status line"
"set statusline=%F%m%r%h%w\ [TYPE=%Y\ %{&ff}]\ [%l/%L\ (%p%%)]
set statusline=%<%f\%h%m%r%=%-20.(line=%l\ \ col=%c%V\ \ totlin=%L%)\ \ \%h%m%r%=%-40(bytval=0x%B,%n%Y%)\%P
hi StatusLine ctermbg=7 ctermfg=0 gui=undercurl guisp=Yellow

"Sets offset"
set scrolloff=5

set cursorline
set numberwidth=5

" Shortcut to toggle line numbers
:nmap <C-L> :execute 'set nu!'<CR>

"Nerd Tree Specific"
:nmap <C-O> :execute 'NERDTreeToggle ' .getcwd() <CR> :execute 'vertical resize 40'<CR> :execute 'set nocursorline'<CR>
":map <C-R> :execute '!clear' :execute 'w' :execute '!python % '<CR>
:nmap <C-R> :w<CR>:!clear<CR><CR>:!python %<CR>
:nmap <C-I> :execute 'NERDTreeMirror ' <CR> :vertical resize 50 <CR>
:nmap <A-X> :execute 'NERDTreeMirror ' <CR> :vertical resize 50 <CR>
:nmap <C-X> :execute 'NERDTreeMirror ' <CR> :vertical resize 50 <CR>
:nmap <A-S> :execute 'NERDTreeFind' <CR>

let NERDTreeIgnore=['\.vim$', '\~$', '\.pyc$', '\.orig', '\.swp\*']
let NERDTreeHighlightCursorline=1
"let NERDTreeQuitOnOpen=1
"autocmd NERDTreeToggle

"Python Project settings
:nmap <C-P> :execute 'Project' <CR>
nmap <silent> <C-P> <Plug>ToggleProject

"RST Tables
nnoremap <A-T> :execute 'CreateTable()'<CR>

"Toggle Tags List
:nmap <C-C> :execute 'TlistToggle' <CR>
let Tlist_Use_Right_Window = 1
let Tlist_Sort_Type = "name"
let Tlist_WinWidth = 40

"autocmd FileType python compiler pylint
autocmd FileType python set omnifunc=pythoncomplete#Complete
"autocmd FileType python set ft=python.django " For SnipMate
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType html set filetype=htmldjango " For SnipMate
autocmd FileType *.json set filetype=json
autocmd BufEnter *.html set ft=htmldjango
autocmd BufEnter *.html source ~/.vim/scripts/closetag.vim
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd BufWritePre *.py :%s/\s\+$//e

set ruler
set laststatus=2


"Auto change directory to the buffer path
if exists('+autochdir')
    set autochdir
else
    autocmd BufEnter * silent! lcd %:p:h:gs/ /\\ /
endif

" Close tag script
:au Filetype html,xhtml,xml,xsl source ~/.vim/scripts/closetag.vim

"MacVim specific
"let Tlist_Ctags_Cmd='/opt/local/bin/ctags'

"Searches
"set hlsearch

"Indents and selection block
function! SelectIndent ()
    let temp_var=indent(line("."))
    while indent(line(".")-1) >= temp_var
        exe "normal k"
    endwhile
    exe "normal V"
    while indent(line(".")+1) >= temp_var
        exe "normal j"
    endwhile
endfun
nmap <C-Space> :call SelectIndent()<CR>

"  move text and rehighlight -- vim tip_id=224
vnoremap > ><CR>gv
vnoremap < <<CR>gv 
nmap <D-]> >>
vmap <D-]> >>
imap <D-]> <C-O>>>
nmap <D-[> <<
vmap <D-[> <<
imap <D-[> <C-O><<

"FuzzyFinder a'la TextMate
" binds \ T to taglist (sorta like textmate apple-shift-t)
" binds \ t to textmate-style fuzzy finder
"map <leader>t :FuzzyFinderTextMate<CR>
"let g:fuzzy_matching_limit=60 " this seems to help performance
"let g:fuzzy_ceiling=20000     " I have some projects with a lot of files...

"Tabs
set guitablabel=%!expand(\"\%:t\")

"TextMate alike
map <D-1> :tabn 1<CR>
map <D-2> :tabn 2<CR>
map <D-3> :tabn 3<CR>
map <D-4> :tabn 4<CR>
map <D-5> :tabn 5<CR>
map <D-6> :tabn 6<CR>
map <D-7> :tabn 7<CR>
map <D-8> :tabn 8<CR>
map <D-9> :tabn 9<CR>

map <C-T> :tabnew<CR>

" MacVim/GVim settings
set guifont=Liberation\ Mono\ 13

" Fencview encodings
set fileencodings=utf-8,latin2
let g:fencview_autodetect = 1

:au BufWinEnter *.py,*.txt,*.rst,*.c,*.cpp let w:m1=matchadd('Search', '\%<81v.\%>79v', -1)
:au BufWinEnter *.py,*.txt,*.rst,*.c,*.cpp let w:m2=matchadd('ErrorMsg', '\%>80v.\+', -1)

" Django surroundings
let g:surround_{char2nr("b")} = "{% block\1 \r..*\r &\1%}\r{% endblock %}"
let g:surround_{char2nr("i")} = "{% if\1 \r..*\r &\1%}\r{% endif %}"
let g:surround_{char2nr("w")} = "{% with\1 \r..*\r &\1%}\r{% endwith %}"
let g:surround_{char2nr("c")} = "{% comment\1 \r..*\r &\1%}\r{% endcomment %}"
let g:surround_{char2nr("f")} = "{% for\1 \r..*\r &\1%}\r{% endfor %}"

" Tasklist
map <leader>v <Plug>TaskList

" Quickly edit/reload the vimrc file
nmap <silent> <leader>ev :e $MYVIMRC<CR>
nmap <silent> <leader>sv :so $MYVIMRC<CR>

" Newest & nice
set list
set listchars=tab:>.,trail:.,extends:#,nbsp:.
autocmd filetype html,xml set listchars-=tab:>.

set pastetoggle=<F2>

map <leader>t :FuzzyFinderTextMate<CR>

