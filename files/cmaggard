filetype off
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()
filetype plugin indent on	

set showcmd
" Indentation options
set tabstop=2  " 2 spaces instead of tabs
set smarttab
set shiftwidth=2
set autoindent
set expandtab
set backspace=start,indent
autocmd FileType make		set noexpandtab
autocmd FileType python set tabstop=4
autocmd FileType python set softtabstop=4
autocmd FileType python set shiftwidth=4

" Line numbers in gutter
set number

" Underline whole line cursor is on
":set cursorline

" Enable syntax highlighting
syntax enable

" Hide unused buffers instead of opening and closing
set hidden

" Switch bookmark jump keys
nnoremap ` '
nnoremap ' `

" Set leader key
let mapleader = ","

" Set higher command history
set history=1000

" View options with tab completion
set wildmenu
set wildmode=list:longest

" Ignore search case unless used with a capital letter
set ignorecase
set smartcase

set title

" See more context when scrolling
set scrolloff=3

" Show position in lower right
set ruler

" OS-specific junk
filetype on
filetype plugin on
filetype indent on
set hlsearch
set incsearch

"Map ESCAPE into something within reach
" (remap Caps-Lock to Control for maximum punch)
" Linux note: On linux, <C-Space> == <Nul>
if has('unix') && !has('gui_running')
    imap <Nul> <Esc>
    vmap <Nul> <Esc>
else
    imap <C-space> <Esc>
    vmap <C-space> <Esc>
endif

autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \ exe "normal g`\"" |
    \ endif

map <leader><space> :nohl<CR>
map <leader>s :RunSpec 

set background=dark
"colorscheme elflord
"colorscheme desert
colorscheme jellybeans
map <leader>q :ruby finder.rescan!<CR>

set foldmethod=indent
set foldlevelstart=18

set backupdir=~/.vim/.backup,.,/tmp
set directory=.,~/.vim/.backup,/tmp

map <leader>s /\s+$<CR>

" Command-T
map <leader>t <Esc>:CommandT<CR>
map <leader>T <Esc>:CommandTFlush<CR>
map <leader>m <Esc>:CommandTBuffer<CR>
map <leader>y :!pbcopy && pbpaste<CR>u
set wildignore+=*.o,*.obj,.git,coverage


let g:tagbar_usearrows = 1
nnoremap <leader>l :TagbarToggle<CR>

" Powerline configs
"set nocompatible   " Disable vi-compatibility
set laststatus=2   " Always show the statusline
set encoding=utf-8 " Necessary to show unicode glyphs
set t_Co=256 " Explicitly tell vim that the terminal supports 256 colors
let g:Powerline_symbols = 'fancy'

" 80-col gutter
if exists('+colorcolumn')
  set colorcolumn=81
else
  au BufWinEnter * let w:m2=matchadd('ErrorMsg', '\%>80v.\+', -1)
endif
hi ColorColumn ctermbg=darkgray guibg=#1c1c1c

" Vitality.vim tweaks
"let g:vitality_fix_cursor = 0


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Running tests
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

function! RunTests(filename)
    " Write the file and run tests for the given filename
    :w
    :silent !echo;echo;echo;echo;echo;echo;echo;echo;echo;echo
    :silent !echo;echo;echo;echo;echo;echo;echo;echo;echo;echo
    :silent !echo;echo;echo;echo;echo;echo;echo;echo;echo;echo
    :silent !echo;echo;echo;echo;echo;echo;echo;echo;echo;echo
    :silent !echo;echo;echo;echo;echo;echo;echo;echo;echo;echo
    :silent !echo;echo;echo;echo;echo;echo;echo;echo;echo;echo
    if match(a:filename, '\.feature$') != -1
        exec ":!script/features " . a:filename
    else
        if filereadable("script/test")
            exec ":!script/test " . a:filename
        elseif filereadable("Gemfile")
            exec ":!bundle exec rspec --color " . a:filename
        else
            exec ":!rspec --color " . a:filename
        end
    end
endfunction

function! SetTestFile()
    " Set the spec file that tests will be run for.
    let t:grb_test_file=@%
endfunction

function! RunTestFile(...)
    if a:0
        let command_suffix = a:1
    else
        let command_suffix = ""
    endif

    " Run the tests for the previously-marked file.
    let in_test_file = match(expand("%"), '\(.feature\|_spec.rb\)$') != -1
    if in_test_file
        call SetTestFile()
    elseif !exists("t:grb_test_file")
        return
    end
    call RunTests(t:grb_test_file . command_suffix)
endfunction

function! RunNearestTest()
    let spec_line_number = line('.')
    call RunTestFile(":" . spec_line_number . " -b")
endfunction

map <leader>r :call RunTestFile()<cr>
map <leader>R :call RunNearestTest()<cr>
map <leader>a :call RunTests('')<cr>:


