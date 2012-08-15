source ~/.vim/vimrc

colorscheme desert

if has("gui_mac") || has("gui_macvim")
 colorscheme torte
 set transparency=15
endif

set nu
set sts=2
set sw=2
let g:fuzzy_ignore = "gems/*"
set guifont=monaco
set guioptions-=m
set guioptions-=T
let g:fuzzy_ignore = "gems/*"
let g:fuzzy_ignore = "vendor/*"
let g:fuzzy_ignore = "db/asp/minisite_images/*"

nmap <tab> gt
nmap <s-tab> gT
nmap <F2> :BufExplorer<Enter>
nmap <F3> :noh<Enter>
nmap <F4> gg=G''
nnoremap <silent> <F5> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>
map <C-C> ,c<Space>
map <C-L> :noh<Enter>
cmap <F8> vendor/extensions/site/
cmap <C-t> tabnew <F8>
nnoremap <silent> <F8> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>:retab<CR>
nmap <silent> <C-t> :CommandT<Enter>

ab rdb require 'ruby-debug';debugger
nnoremap <up> <nop>
nnoremap <down> <nop>
nnoremap <left> <nop>
nnoremap <right> <nop>
inoremap <up> <nop>
inoremap <down> <nop>
inoremap <left> <nop>
inoremap <right> <nop>
cab W w
cab Q q
cab wQ wq
cab Wq wq
cab WQ wq
cab TAbnew tabnew
cab Tabnew tabnew

augroup filetypedetect
  autocmd BufRead,BufNewFile *.prawn set filetype=ruby
  autocmd BufRead,BufNewFile *.atom.build set filetype=ruby
augroup END
