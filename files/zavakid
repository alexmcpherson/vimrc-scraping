" pathogen
call pathogen#infect()
syntax on
filetype plugin indent on
au BufRead,BufNewFile *.json  setfiletype javascript

set encoding=utf-8
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1,big5
set termencoding=utf-8
set expandtab
set tabstop=2
set shiftwidth=2
set hlsearch
set wrap

colorscheme desert

command -nargs=? Sudow :w! !sudo tee %
