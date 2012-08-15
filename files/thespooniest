set number
set ruler
syntax enable

set shiftwidth=4
set tabstop=4
set scrolloff=3
set numberwidth=4
set expandtab
set autoindent
set backspace=indent,eol,start

if has("multi_byte")
    if &termencoding == ""
        let &termencoding = &encoding
    endif
    set encoding=utf-8
    setglobal fileencoding=utf-8
    set fileencodings=ucs-bom,utf-8,latin1
endif

set showtabline=2
set diffopt+=iwhite
colorscheme zenburn

" Text navigation
"
map <Up> gk
map <Down> gj
imap <Up> <C-o>gk
imap <Down> <C-o>gj

" Window navigation
nmap <silent> <C-Up> :wincmd k<CR>
nmap <silent> <C-Down> :wincmd j<CR>
nmap <silent> <C-Left> :wincmd h<CR>
nmap <silent> <C-Right> :wincmd l<CR>

" Taglist
" 
let Tlist_Enable_Fold_Column = 0
let Tlist_Compact_Format = 1
let Tlist_File_Fold_Auto_Clost = 0
let Tlist_GainFocus_On_ToggleOpen = 1
let Tlist_Process_File_Always = 1


map <F3> :TlistToggle<cr>
vmap <F3> <esc>:TlistToggle<cr>
imap <F3> <esc>:TlistToggle<cr>

"NERDTree
"
let Tlist_Use_Right_Window = 1
let NERDTreeShowBookmarks = 1
map <F2> :NERDTreeToggle<cr> \| :silent NERDTreeMirror<CR>
vmap <F2> <esc>:NERDTreeToggle<cr> \| :silent NERDTreeMirror<CR>
imap <F2> <esc>:NERDTreeToggle<cr> \| :silent NERDTreeMirror<CR>
