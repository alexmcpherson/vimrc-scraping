set encoding=utf-8

" vim settings, not vi
set nocompatible

" load pathogen
call pathogen#infect()

" some standard stuff
set autoindent
set smartindent
syntax on
filetype on
filetype plugin on
filetype indent on
set ruler
set backspace=indent,eol,start
set history=50
set suffixes=.bak,~,.swp,.o,.info,.aux,.log,.dvi,.bbl,.blg,.brf,.cb,.ind,.idx,.ilg,.inx,.out,.toc

" unfold all code
set foldlevelstart=2

" always show the statusline
set laststatus=2
" Powerline status line
" how to configure docs: bundle/vim-powerline/doc/Powerline.txt
let g:Powerline_symbols = 'unicode'

" set the font for gui mode
set gfn=Andale\ Mono\ 11

" will save your last position in a file so next time you open it, you'll
" come back to the same place
set viminfo='10,\"100,:20,%,n~/.viminfo 
au BufReadPost * if line("'\"") > 0|if line("'\"") <= line("$")|exe("norm '\"")|else|exe "norm $"|endif|endif

" sets default color theme
set background=dark

" xterm16 specific options
let g:xterm16_colormap = 'soft'
let g:xterm16_brightness = 'high'
color xterm16

" shows line numbers
" toggle it with 2 ctrl+n's
nmap <C-N><C-N> :set invnumber<CR>

" set tab to 4 spaces, softtabs
set smarttab
set tabstop=4
set shiftwidth=4
set expandtab
set smartindent

au FileType ruby set tabstop=2 shiftwidth=2

" syntax highlight ruby operators &&, ||, etc
let ruby_operators=1

" set backup options, i don't like backup files cluttering my directories.. so
" i set some global backup directory for this purpose
set backup
set backupdir=~/.vim/backup

" completes { } for you when you type { then enter
inoremap {<cr> {<cr>}<esc>O 

" F9 toggles paste mode which is nice for pasting stuff
" that is already indented
map <F9> <nop>
set pastetoggle=<F9>

" indent blocks of code between { } without indenting the { }
" shift+F1, shift+F2
map <S-F1> <nop>
map <S-F2> <nop>

map <S-F1> >i{
map! <S-F1> <ESC><S-F1>
map <S-F2> <i{
map! <S-F2> <ESC><S-F2>

" indenting blocks of code between { } as one
" F1, F2
map <F1> >a{
map! <F1> <ESC><F1>
map <F2> <a{
map! <F2> <ESC><F2>


" comment an entire visual block at once
" highlight the area however you want (V, CTRL+V) then 
" ,c will comment the block
" ,u will uncomment the block
let b:comment_leader = '# '
au FileType haskell,vhdl,ada            let b:comment_leader = '-- '
au FileType vim                         let b:comment_leader = '" '
au FileType c,cpp,java,php,js           let b:comment_leader = '// '
au FileType sh,make,perl,ruby,python    let b:comment_leader = '# '
au FileType tex                         let b:comment_leader = '% '
noremap <silent> ,c :<C-B>sil <C-E>s/^/<C-R>=escape(b:comment_leader,'\/')<CR>/<CR>:noh<CR>
noremap <silent> ,u :<C-B>sil <C-E>s/^\V<C-R>=escape(b:comment_leader,'\/')<CR>//e<CR>:noh<CR>


" code completion support
let g:SuperTabDefaultCompletionType = "context"

autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete
autocmd FileType ruby,eruby let g:rubycomplete_buffer_loading = 1
autocmd FileType ruby,eruby let g:rubycomplete_rails = 1
autocmd FileType ruby,eruby let g:rubycomplete_classes_in_global = 1
autocmd FileType python set omnifunc=pythoncomplete#Complete

" makes vim change to whatever directory the most recent file is located in
autocmd BufEnter * lcd %:p:h

" python << EOF
" import sys
" import os
" import vim
" for p in sys.path:
" 	if os.path.isdir(p):
" 		vim.command(r"set path+=%s" % (p.replace(" ", r"\ ")))
" EOF


" python specific highlighting options
" let python_highlight_all = 1

" erlang soft tab
" au FileType erlang
" 	\ setlocal expandtab
