" Pathogen
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()

" Remap qq to escape Insert mode 
imap qq <Esc> 		

map <Leader>n :NERDTreeToggle<Return>
map <Leader>t :TagbarToggle<Return>

" Colours
set background=dark
if has('gui_running')
  colorscheme solarized
else
  colorscheme 256-grayvim
endif

" Use Vim settings, rather then Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" Searching options
set incsearch		" do incremental searching
set ignorecase 		" Ignore case when searching
set smartcase
set hlsearch		" Highlight searches

set hidden
set number
set vb t_vb=

" Indentation
set ts=2 sts=2 sw=2 expandtab smartindent

" Allow backspacing over everything in insert mode
set backspace=indent,eol,start

" Move to the first non-whitespace character when 0 is pressed
" and the first character on the line when ^ is pressed
" (instead of vice-versa)
noremap 0 ^	
noremap ^ 0

" Status
set laststatus=2
""""""""""""""" Filename   [format] [filetype] [ASCII] [HEX] [Linecount] (row,col)
set statusline=%F%m%r%h%w\ [%{&ff}]\ [%Y]\ [A:\%03.3b]\ [H:0x\%02.2B]\ [%L]\ (%04l,%04v)

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
  command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
		  \ | wincmd p | diffthis
endif

syntax on
if has("autocmd")
	filetype plugin indent on
  
  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
  au!

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  " Also don't do it when the mark is in the first line, that is the default
  " position when opening a file.
  autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif
  augroup END
endif

" Autocomplete
set completeopt=longest,menuone
set omnifunc=syntaxcomplete#Complete
if has('gui_running')
  inoremap <C-Space> <C-n>
else
  inoremap <Nul> <C-n>
endif

" UltiSnips
let g:UltiSnipsSnippetsDir="~/.vim/snippets"
let g:UltiSnipsSnippetDirectories=["UltiSnips","snippets"]
let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsJumpForwardTrigger="<tab>"
let g:UltiSnipsJumpBackwardTrigger="<s-tab>"
let g:UltiSnipsEditSplit="horizontal"
