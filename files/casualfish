set mouse=
set nocp
set hlsearch
filetype plugin on

let &termencoding=&encoding
set fileencodings=utf-8,ucs-bom,gbk,cp936

" configure tags - add additional tags here or comment out not-used ones 
set tags+=~/.vim/tags/cpp 
" build tags of your own project with CTRL+F12 
map <F6> :!ctags -R --c++-kinds=+p --fields=+iaS --extra=+q .<CR> 
" OmniCppComplete 
let OmniCpp_NamespaceSearch = 1 
let OmniCpp_GlobalScopeSearch = 1 
let OmniCpp_ShowAccess = 1 
let OmniCpp_ShowPrototypeInAbbr = 1 " show function parameters 
let OmniCpp_MayCompleteDot = 1 " autocomplete after . 
let OmniCpp_MayCompleteArrow = 1 " autocomplete after -> 
let OmniCpp_MayCompleteScope = 1 " autocomplete after :: 
let OmniCpp_DefaultNamespaces = ["std", "_GLIBCXX_STD"] 
" automatically open and close the popup menu / preview window 
" au CursorMovedI,InsertLeave * if pumvisible() == 0|silent! pclose|endif 
set completeopt=menuone,menu,longest

au BufReadPost * if line("'\"") > 0|if line("'\"") <= line("$")|exe("norm '\"")|else|exe "norm $"|endif|endif

set tabstop=8
set softtabstop=8
set shiftwidth=8
set expandtab
set autoindent
set cindent 
set cinoptions={0,1s,t0,n-2,p2s,(03s,=.5s,>1s,=1s,:1s 
set nu

let NERDTree_title='NERD Tree'
let NERDTreeWinPos=1
map <silent> no :NERDTree<CR>
map <silent> nc :NERDTreeClose<CR>

map <F4> :w<CR>
map <F5> :Tlist<CR>
map <F7> :tabprevious<CR>
map <F8> :tabnext<CR>
map <F9> :tabclose<CR>
map <C-T> :AT<CR>
