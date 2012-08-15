call pathogen#infect()
call pathogen#helptags()
syntax on
filetype plugin indent on
"colo bandit

set tags=./tags;

" Plugin: Tagbar
let g:tagbar_left = 1
let g:tagbar_width = 30
nnoremap <F12> :TagbarToggle<CR>

" Plugin: NERDTree
let g:NERDTreeWinPos = "right"
nnoremap <F11> :NERDTreeToggle<CR>

" Jump to previous/next difference in diff mode
noremap <A-1> [c
noremap <A-2> ]c
nnoremap <C-F2> :vert diffsplit 

" Shift tab pages (Be able to use <C-PageUp> and <C-PageDown> to switch between tabs)
" map <S-Left> :tabp<CR>
" map <S-Right> :tabn<CR>

" Lookup the current WORD in Vim help
:map <F1> <ESC>:exec "help ".expand("<cWORD>")<CR>

" Set up and show the status line.
set statusline=%F%m%r%h%w\ [FORMAT=%{&ff}]\ [HEX=\%02.2B]\ [POS=%l,%v]\ [%p%%]
" set laststatus=2

set number
set history=200
set ruler
set ignorecase
set expandtab
set softtabstop=2
set shiftwidth=2
set autoindent
set nocompatible
set wildmenu
set backupdir=~/tmp,.,/var/tmp/vi.recover,/tmp
set directory=~/tmp,/var/tmp/vi.recover,/tmp,.
set backup		" keep a backup file
" set textwidth=78
set bs=2		" allow backspacing over everything in insert mode
set ai			" always set autoindenting on
set viminfo='20,\"50	" read/write a .viminfo file, don't store more
set showmatch
set wrap

"nmap <C-E> gT
"nmap <C-D> gt
"imap <C-E> <ESC>gTa
"imap <C-D> <ESC>gta
"nmap <buffer> <F7> <C-]>
"nmap <buffer> <C-F7> <C-T>

set incsearch
set nohlsearch
set foldmethod=indent
set foldlevel=99
" set encoding=utf-8
 set fileencoding=utf-8
" set termencoding=big5
" set fileencodings=latin,big5,ucs-bom,utf-8,sjis,big5
 set fileencodings=utf-8,sjis,big5,latin1,ucs-bom

"set ffs=dos,unix
"set fileformats=dos

" Modify _vimrc
cabbrev evimrc e $MYVIMRC

" Maximize or restore window.
" http://vim.wikia.com/wiki/VimTip494
let w:windowmaximized = 0
function! MaxRestoreWindow()
  if w:windowmaximized == 1
    let w:windowmaximized = 0
    " restore the window
    :simalt ~r
  else
    let w:windowmaximized = 1
    " maximize the window
    :simalt ~x
  endif
endfunction
map <F2> :call MaxRestoreWindow()<CR>

" Tab headings
function GuiTabLabel()
    let label = ''
    let bufnrlist = tabpagebuflist(v:lnum)

    " Add '+' if one of the buffers in the tab page is modified
    for bufnr in bufnrlist
        if getbufvar(bufnr, "&modified")
            let label = '+'
            break
        endif
    endfor

    " Append the number of windows in the tab page if more than one
    let wincount = tabpagewinnr(v:lnum, '$')
    if wincount > 1
        let label .= wincount
    endif
    if label != ''
        let label .= ' '
    endif

    " Append the buffer name (not full path)
    return label . "%t"
endfunction

set guitablabel=%!GuiTabLabel()

