

" enable plugins
:filetype plugin on

au! BufRead,BufNewFile *.sass setfiletype sass
au! BufRead,BufNewFile *.styl setfiletype sass

call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

syntax on

" tabstops..
:set tabstop=2
:set sw=2
:set softtabstop=2
:set expandtab
" set c-style indenting according to brackets - for autoindent magic
" :set cindent
set nocindent smartindent
" choose a better font
:set guifont=Inconsolata:h14
" show line numbers
:set number

" start maximized:
au GUIEnter * simalt ~x

set encoding=utf8

" don't want lines to wrap...
:set nowrap

" my key mappings.. (if they arent used)
" undo using ctrl+z and ctrl+y
":map <C-z> <C-O>u
":map <C-y> <C-O><C-r>

" audvelt ad skilgr func breytu
:imap <C-f> = function () {<CR>}<Left><CR><Up><Tab>
" mappa NN og PP a ad hoppa a milli buffera
:map <C-l> :bn!<CR>
:map <C-h> :bp!<CR>
:imap <C-l> <C-O>:bn!<CR>
:imap <C-h> <C-O>:bp!<CR>
" Map Ctrl+k to open the current directory:
:map <C-k> :e .<CR>

" ---------------------------------------------------------------------
" eitthvad copy fra http://items.sjbach.com/319/configuring-vim-right
" utskyrt betur thar
" ---------------------------------------------------------------------
set hidden
set history=1000
set wildmenu
set wildmode=list:longest
set ignorecase
set smartcase
set title
set backupdir=~/.vim-tmp,~/.tmp,~/tmp,/tmp
set directory=~/.vim-tmp,~/.tmp,~/tmp,/tmp
" scrolla viewporti hradar
nnoremap <C-e> 3<C-e>
nnoremap <C-y> 3<C-y>
set visualbell

set autochdir



" For the ctrl+p plugin.. 
set wildignore+=*/.git*,*/node_modules/*
