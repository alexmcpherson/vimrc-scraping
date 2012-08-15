" Use SuperTab for tab complete. See url:
" http://www.vim.org/scripts/script.php?script_id=1643

call pathogen#helptags()
call pathogen#runtime_append_all_bundles()

let mapleader = ","
let g:mapleader = ","
nmap <leader>w :w!<cr>

set mouse=a

set so=7
set wildmenu "autocomplete and fun stuff!
set ruler "always show current pos
set cmdheight=2 "shortens cmd height

set backspace=eol,start,indent "backspace configuration
set whichwrap+=<,>,h,l

set ignorecase "Ignore case when searching
set smartcase

set hlsearch "Highlight searches

set incsearch "more like webbrowser search
set nolazyredraw "Don't redraw during macros

set magic "For regular expressions

set showmatch "Matching braces highlighting
set mat=2 "Blink for above

"No sound on errors
set noerrorbells
set novisualbell
set visualbell
set t_vb=
set tm=500

"Color Stuff
syntax enable "Enable highlighting
set guioptions-=T
set t_Co=256
set background=dark
colorscheme peaksea
set nonu

set expandtab
set shiftwidth=4
set tabstop=4
set smarttab

set lbr 
set tw=500

set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines

set number

set textwidth=80
set tw=80
set wrap
highlight OverLength ctermbg=red ctermfg=white guibg=#592929
match OverLength /\%81v.\+/

"My mappings
imap jj <Esc>

" Custom tab settings
if has("autocmd")
	" language-specific indentation settings
	autocmd FileType c,cpp				setlocal ts=4 sts=4 sw=4 et tw=80 nowrap
	autocmd FileType scm,sml			setlocal ts=4 sts=4 sw=4 et tw=80 nowrap
	autocmd FileType sh,csh,tcsh,zsh	setlocal ts=4 sts=4 sw=4 et
	autocmd FileType php,javascript,css	setlocal ts=4 sts=4 sw=4 et
	autocmd FileType ruby,eruby,yaml	setlocal ts=2 sts=2 sw=2 et
	autocmd FileType text,txt,mkd		setlocal ts=4 sts=4 sw=4 et tw=80 wrap
	autocmd FileType html,xhtml,xml		setlocal ts=2 sts=2 sw=2 et

	" language-specific general settings
	autocmd FileType php noremap <C-M> :w!<CR>:!php %<CR>		" run file
	autocmd FileType php noremap <C-L> :w!<CR>:!php -l %<CR>	" check syntax

endif

nnoremap <Space> <PageDown>
nnoremap <S-Space> <PageUp>		" only works in GVim

nmap <silent> <F10> :echo "hi<" . synIDattr(synID(line("."),col("."),1),"name")
     \ . '> trans<' . synIDattr(synID(line("."),col("."),0),"name")
     \ . "> lo<" .  synIDattr(synIDtrans(synID(line("."),col("."),1)),"name")
     \ . ">"<CR>

