" Importing Akita's vimrc
" http://github.com/akitaonrails/vimfiles
source ~/.vim/vimrc

if $COLORTERM == 'gnome-terminal'
  set term=gnome-256color
endif

colorscheme railscasts
set mouse=a
set ttymouse=xterm2

set nowrap
set nu
set sts=2
set sw=2
set guifont=monaco:h12
set guioptions-=m
set guioptions-=T
set spelllang=pt_br

ab rdb require 'ruby-debug';debugger

nmap <silent> <C-t> :CommandT<Enter>
nmap <C-h> i$<Esc>f(r f)xF$x
nmap <silent> <F2> :BufExplorer<Enter>
nmap <silent> <F3> :noh<Enter>
nmap <silent> <F4> gg=G''
nnoremap <silent> <F5> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>
nmap <silent> <F6> :set lines=999 columns=999<Enter>
nmap Ç :
cmap <C-e> <C-r>=expand('%:p:h')<CR>/
nmap <silent> <F7> :%s/\(<\/[^>]*>\)/\1\r/g<Enter>
nmap <silent> <F8> :set wrap spell<Enter>

augroup filetypedetect
  autocmd BufRead,BufNewFile *.prawn set filetype=ruby
augroup END

