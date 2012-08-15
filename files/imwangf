" set utf-8 as standard encoding and en_US as standard language
set encoding=utf8

" set number
set number

" filetype
filetype plugin indent on

" auto read when a file is changed from another place
set autoread

" syntax highlighting
syntax on

" history
set history=500

" current line highlighting
" set cursorline
" always show current position
set ruler

" set auto indent on
" set autoindent is lower than startindnet
" set smartindent

" use spaces instead of tabs
set expandtab
" 1 tab == 4 spaces
set shiftwidth=4
set tabstop=4
set smarttab

" set extra option when running in GUI mode
if has("gui_running")
    set guioptions-=T " remove toolbar
    set guioptions+=e
    set t_Co=256
    set guitablabel=%M\ %t
endif

set background=dark
:set guifont=Monaco:h15
:colorscheme molokai

" set match
set showmatch

" auto ClosePair {}, [], (), etc
:inoremap ( ()<ESC>i
:inoremap ) <c-r>=ClosePair(')')<CR>
:inoremap { {}<ESC>i
:inoremap } <c-r>=ClosePair('}')<CR>
:inoremap [ []<ESC>i
:inoremap ] <c-r>=ClosePair(']')<CR>
:inoremap " ""<ESC>i
:inoremap ' ''<ESC>i
function! ClosePair(char)
    if getline('.')[col('.')-1] == a:char
        return "\<Right>"
    else
        return a:char
    endif
endfunction

