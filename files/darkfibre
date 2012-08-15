call pathogen#infect()
call pathogen#helptags()
set go-=T
set so=2
set tabstop=2
set shiftwidth=2
set smarttab
set expandtab
set sidescroll=2
set incsearch
set foldmethod=indent
set nofoldenable
set nocompatible
set nobackup writebackup
set autowrite
set number
syntax on
filetype on
filetype plugin on
filetype indent on

if has("mac")
  set guifont=Menlo:h11
elseif has("win32")
  set guifont=Consolas:h9
endif

if has('gui_running')
  set background=light
  colorscheme solarized
"else
"  set background=dark
"  colorscheme solarized
endif

"autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete
"autocmd FileType ruby,eruby let g:rubycomplete_buffer_loading = 1
"autocmd FileType ruby,eruby let g:rubycomplete_rails = 1
"autocmd FileType ruby,eruby let g:rubycomplete_classes_in_global = 1

"let g:SuperTabDefaultCompletionType = "<C-X><C-O>"
"let g:SuperTabDefaultCompletionType = "context"
"highlight Pmenu ctermbg=238 gui=bold

"let g:neocomplcache_enable_at_startup = 1
"let g:neocomplcache_enable_auto_select = 1
"if !exists('g:neocomplcache_omni_patterns')
"    let g:neocomplcache_omni_patterns = {}
"endif
"let g:neocomplcache_omni_patterns.ruby = '[^. *\t]\.\w*\|\h\w*::'
"autocmd FileType ruby setlocal omnifunc=rubycomplete#Complete
"inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : "\<TAB>"

let g:AutoPairsMapCR = 0

map <D-r> :! %:p<CR>
map! <D-r> <ESC>:! %:p<CR>

