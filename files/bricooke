set nocompatible
syntax on
filetype plugin indent on

set cindent
set smartindent
set autoindent
set expandtab
set tabstop=2
set shiftwidth=2
set cinkeys=0{,0},:,0#,!,!^F
set number



augroup myfiletypes
  " Clear old autocmds in group
  autocmd!
  " autoindent with two spaces, always expand tabs
  autocmd FileType ruby,eruby,yaml set ai sw=2 sts=2 et
augroup END


map <leader>t :FuzzyFinderTextMate<CR>
map <leader>bg :Bgrep 
map <leader>gg :Grep -r 

" previous buffer ^6 (but that's mapped for spaces 
map <C-t> :e #<CR>  

let g:fuzzy_ignore="vendor/**/*;log/*"
let g:fuzzy_matching_limit=50
let g:fuzzy_roots = ['.']

