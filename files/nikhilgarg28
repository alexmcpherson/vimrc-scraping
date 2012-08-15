"let's unleash the beast within gvim
set nocompatible

" I use pathogen for vim plugin installation. Let's spread the infection!
call pathogen#infect()
call pathogen#helptags()

" Let's open vimrc with Ctrl-Alt-e. I put my vimrc inside .vim so $MYVIMRC
" doesn't quiet work
map <C-M-E> <Esc>:tabedit ~/.vim/vimrc<CR>


" Sets how many lines of history VIM should remember
set history=1000

" Enable filetype plugins
filetype plugin on
filetype indent on

" Set to auto-read when a file is changed from outside
"set autoread

" Declare , to be the map leader
let mapleader = ","
let g:mapleader = ","

" Time out on mapping after two seconds, time out on key codes after
" a tenth of a second
set timeout 
set timeoutlen=2000 
set ttimeoutlen=100

" Fast saving. <leader>w would save the file
nmap <leader>w :w!<cr>

" show commands as you type them, who won't want that?
set showcmd

" code folding stuff
set foldmethod=marker
set foldmethod=indent

" needed for syntax highlighting and stuff
filetype on
syntax enable
set grepprg=grep\ -nh\ $*

" show matching parenthesis
set showmatch

" Who doesn't like auto-indenting?
set autoindent
set smartindent


" Replaces tabs with spaces
set expandtab

" Be smart while using tabs
set smarttab

" Tab width
set tabstop=4
set shiftwidth=4
set softtabstop=4

" Enable mouse support
set mouse=a

" Show line numbers, hello?
set number

" Show line and column numbers
set ruler

" Real men key in lines of 80 chars
set wrap
set textwidth=80 

" Highlight search items
set hlsearch

" Set cursorline
set cursorline

" Disable arrow keys in normal and insert mode. Better get used to h,j,k,l
"nnoremap <"up> <nop>
"nnoremap <down> <nop>
"nnoremap <left> <nop>
"nnoremap <right> <nop>
"inoremap <up> <nop>
"inoremap <down> <nop>
"inoremap <left> <nop>
"inoremap <right> <nop>

" Move over screen lines instead of file-lines. Useful for longer lines.
nnoremap j gj
nnoremap k gk

" Use jj in insert mode to goto normal mode
inoremap jj <Esc>

" Get to ex mode with ;
nnoremap ; :

" Allow backspacing over everything in insertmode
set backspace=indent,eol,start
set whichwrap+=<,>,h,l

" Set 7 lines to the cursor - when moving vertically using j/k
set so=7


" Set the command height
set cmdheight=2

" Always show statusline
set laststatus=2

" Format the status line
set statusline=\ %{HasPaste()}%F%m%r%h\ %w\ \ CWD:\ %r%{getcwd()}%h\ \ \ Line:\ %l

" Incremental search is powerful
set incsearch

" Allow file completion with tab
set wildmode=longest,list,full
set wildmenu

" Which is today's colorscheme?
"colorscheme Mustang
colorscheme wombat


" A colored column as marker
set colorcolumn=82

" Set extra options when running in GUI mode
if has("gui_running")
    set guioptions-=T
    set guioptions+=e
    set t_Co=256
    set guitablabel=%M\ %t
endif    

" Return to last edit position when opening files (You want this!)
augroup last_edit_pos
    au!
    autocmd BufReadPost *
     \ if line("'\"") > 0 && line("'\"") <= line("$") |
     \   exe "normal! g`\"" |
     \ endif
augroup END    
        

" Remember info about open buffers on close
"set viminfo^=%

" No annoying sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

" CTRL-C, CTRL-X and CTRL-V for copy-cut-pasting to system clipboard
imap <C-V> <Esc>"+]p
nmap <C-V> <Esc>"+]p
vmap <C-C> "+y
vmap <C-X> "+d
nnoremap <leader>v <C-V>

" CTRL-A in normal mode for select all
nmap <C-A> <Esc>G$vgg 

" Enter in normal mode works like it does in insert mode. Useful in formatting a
" text while navigating quickly
nmap <CR> i<CR><Esc>

" Window management mappings
nmap <C-h> <C-W>h
nmap <C-j> <C-W>j
nmap <C-k> <C-W>k
nmap <C-l> <C-W>l

" Temporary mapping used for Codechef markup
vmap <C-B> <Esc>`<i**<Esc>`>lla**<Esc>
vmap <C-^> <Esc>`<i<sup><Esc>`>llllla</sup><Esc>
vmap <C-_> <Esc>`<i<sub><Esc>`>llllla</sub><Esc>

" Delete trailing white space on save for all .py files.
augroup delete_trailing_spaces
    au!
    autocmd BufWrite *.py :call DeleteTrailingWS()
augroup END    


" Template files. Open new file using vim and if there is a skeleton file in
" templates for that extension, that is loaded. 
augroup template_files
    autocmd! BufNewFile * silent! 0r ~/.vim/templates/skeleton.%:e
augroup END    

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Automatic completion settings 
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Set the omnicomplete function based on file type. Works only if filetype
" plugin is on
set ofu=syntaxcomplete#Complete

" Close the Omni-Completion tip window when a selection is
" made. These lines close it on movement in insert mode or when leaving
" insert mode. Currently as we're using super tab to do omni-complete, this
" functionality is also provided by super tab and so following lines are
" commented out.
"autocmd CursorMovedI * if pumvisible() == 0|pclose|endif
"autocmd InsertLeave * if pumvisible() == 0|pclose|endif


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Nerd Commentor settings
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" <leader>ce comments out from cursor to end of current line
nmap <Leader>ce <leader>c$

    
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Super-tab settings
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Use Ctrl-Space to kick off auto-completion. Advantage is no confusion with
" when to insert tab and when not to.
let g:SuperTabMappingForward = '<C-Space>'
let g:SuperTabMappingBackward = '<S-C-Space>'

" Tell Supertab to smartly figure out how to do completion based on context
let g:SuperTabDefaultCompletionType = "context"

" Close the preview window when pop up closes
let g:SuperTabClosePreviewOnPopupClose=1

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Nerd Tree and Nerdtree-tabs functionality
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Autopen NERDTree and focus cursor in new document  
" This is not needed now as nerdtree-tabs by default ensures this
"autocmd VimEnter * NERDTree  
"autocmd VimEnter * wincmd p

" Toggle Nerd tree using F2.
"map <F2> :NERDTreeToggle<CR>
" NerdTreeMirrorToggle of nerd-tree-tabs is a smarter option
map <F2> :NERDTreeMirrorToggle<CR>

" Shift-F2 toggles nerdtree in all tabs
map <S-F2> :NerdTreeTabsToggle<CR>

" Don't synchronise view(scroll and cursor position)of different nerdtrees
let g:nerdtree_tabs_synchronize_view=0


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Helper functions
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Returns true if paste mode is enabled
function! HasPaste()
    if &paste
        return 'PASTE MODE  '
    en
    return ''
endfunction

" Delete trailing white space on save, useful for Python and CoffeeScript ;)
func! DeleteTrailingWS()
  exe "normal mz"
  %s/\s\+$//ge
  exe "normal `z"
endfunc
