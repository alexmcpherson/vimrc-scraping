"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Bootstrap plugins and filetypes
"""""""""""""""""""""""""""""""""""""""""""""""""""""
set nocompatible            " Turn off vi compatibility mode
filetype off                " Interferes with Pathogen, so turn off
call pathogen#helptags()    " Generate help tags for plugins
call pathogen#infect()      " Load all the plugins
filetype on                 " Reenable filetype
filetype indent on
filetype plugin on

set history=1000          " Increase command history size
set ruler                 " Show the ruler
set incsearch             " Incomplete search matches
set hlsearch              " Keep search highlight after complete
set relativenumber        " Show line numbers
set showmode              " Show the current mode in the last line
set showcmd               " Show the current command in the last line
set title                 " Set the window title in the terminal
set wildmenu              " Improve tab completion menu
set wildmode=list:longest " Tab complete longest common string and show list
set t_Co=256              " Set 256 color mode
set wildignore+=.git,.hg,.svn                    " Version control
set wildignore+=*.aux,*.out,*.toc                " LaTeX intermediate files
set wildignore+=*.jpg,*.bmp,*.gif,*.png,*.jpeg   " binary images
set wildignore+=*.o,*.obj,*.exe,*.dll,*.manifest " compiled object files
set wildignore+=*.sw?                            " Vim swap files
set encoding=utf-8        " Default to UTF-8
set scrolloff=2           " start scrolling 2 lines from screen edge

syntax on
colorscheme zenburn

set hidden                " Hide rather than close abandoned buffers
set backspace=2           " Make backspace work for indent, eol, start
set shortmess=atI         " Shorten the large interruptive prompts
set ttyfast               " Smoother redrawing with multiple windows
set lazyredraw            " Suspend redrawing while running macros
set matchtime=3           " Jump to matching paren for a briefer time
set splitbelow            " Open new splits below current window
set splitright            " Open new vsplits to the right
set autowrite             " Autowrite files when leaving
set dictionary=/usr/share/dict/words
set number
set showmatch " Highlight matching brackets


" Indentation
set autoindent
set listchars=tab:>-,trail:-
set softtabstop=4  
set tabstop=4
set shiftwidth=4 expandtab

set mouse=a

"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Command Maps
"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Enable saving readonly files with sudo
cmap w!! %!sudo tee > /dev/null %
command! -nargs=1 -range SuperRetab <line1>,<line2>s/\v%(^ *)@<= {<args>}/\t/g

""""""""""""""""""""""""""""""""""""""""""""""""""""
" Line numbers
""""""""""""""""""""""""""""""""""""""""""""""""""
function! g:ToggleNuMode()
    if(&rnu == 1)
        set nu
    else
        set rnu
    endif
endfunc

nnoremap <C-L> :call g:ToggleNuMode()<cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Keymaps
""""""""""""""""""""""""""""""""""""""""""""""""""""""
let mapleader=","
let maplocalleader=","

 " Toggle NERDTRee with F2 in command mode
noremap <f2> :NERDTreeToggle<cr>
 " and in insert mode
inoremap <f2> :NERDTreeToggle<cr>i
 " Move line down one
nnoremap - ddp
 " Open .vimrc in a new split for quick editing
nnoremap <leader>ev :split $MYVIMRC<cr>
 " Source .vimrc in current window
nnoremap <leader>sv :source $MYVIMRC<cr>
 " Go to start of line
nnoremap H 0
 " Go to end of line
nnoremap L $

nnoremap <F12> :set invpaste paste?<CR>
set pastetoggle=<F12>
set showmode

"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Remap annoying default keymaps
"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Unmap the arrow keys
inoremap <Up>             <NOP>
inoremap <Down>           <NOP>
inoremap <Left>           <NOP>
inoremap <Right>          <NOP>
noremap <Up>              <NOP>
noremap <Down>            <NOP>
noremap <Left>            <NOP>
noremap <Right>           <NOP>
" Unmap the infuriating help shortcut key
inoremap <F1>             <ESC>
nnoremap <F1>             <ESC>
vnoremap <F1>             <ESC>
" Move up and down by screenline instead of file line
nnoremap j                gj
nnoremap k                gk
" Fix vim's regexp search to use perl regexps
nnoremap /                /\v
vnoremap \                /\v
" Move to matching bracket
nnoremap <tab>            %
vnoremap <tab>            %
" Don't enter ex mode
noremap Q                 <nop>

" Turn off search highlighting
nnoremap <leader><space>  :noh<cr>
" Bring up ack ready to searc
nnoremap <leader>a        :Ack!

"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Rainbow Parentheses confiugration
"""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>R :RainbowParenthesesToggle<cr>
let g:rbpt_colorpairs = [
    \ ['brown',       'RoyalBlue3'],
    \ ['Darkblue',    'SeaGreen3'],
    \ ['darkgray',    'DarkOrchid3'],
    \ ['darkgreen',   'firebrick3'],
    \ ['darkcyan',    'RoyalBlue3'],
    \ ['darkred',     'SeaGreen3'],
    \ ['darkmagenta', 'DarkOrchid3'],
    \ ['brown',       'firebrick3'],
    \ ['gray',        'RoyalBlue3'],
    \ ['black',       'SeaGreen3'],
    \ ['darkmagenta', 'DarkOrchid3'],
    \ ['Darkblue',    'firebrick3'],
    \ ['darkgreen',   'RoyalBlue3'],
    \ ['darkcyan',    'SeaGreen3'],
    \ ['darkred',     'DarkOrchid3'],
    \ ['red',         'firebrick3'],
    \ ]
let g:rbpt_max = 16

" Turn on rainbow parentheses for all types by default
au VimEnter * RainbowParenthesesToggle
au Syntax * RainbowParenthesesLoadRound
au Syntax * RainbowParenthesesLoadSquare
au Syntax * RainbowParenthesesLoadBraces

"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Syntastic configuration
"""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:syntastic_mode_map = { 'mode': 'active',
                         \ 'active_filetypes': [ 'javascript' ],
                         \ 'passive_filetypes': [] }
let g:syntastic_stl_format = '[%E{Err: %fe #%e}%B{, }%W{Warn: %fw #%w}]'

"""""""""""""""""""""""""""""""""""""""""""""""""""""
" Statusline
"""""""""""""""""""""""""""""""""""""""""""""""""""""
set statusline=%f                              " Path
set statusline+=%m                             " Modified flag
set statusline+=%r                             " Readonly flag

set statusline+=%{fugitive#statusline()}       " Show git repo status

set statusline+=%#error#                       " Error highlight
set statusline+=%{SyntasticStatuslineFlag()}   " Show syntastic error status
set statusline+=%*                             " Reset highlighting

set statusline+=%=                             " Right align

set statusline+=%c,                            " Cursor column
set statusline+=%l/%L                          " Cursor line / total lines
set statusline+=(
set statusline+=%{&ff}                         " Line ending format
set statusline+=/
set statusline+=%{strlen(&fenc)?&fenc:&enc}    " Encoding
set statusline+=/
set statusline+=%{&ft}                         " Filetype
set statusline+=)

" Always show status line
set laststatus=2

augroup ft_statusline_background_colour
    au InsertEnter * hi StatusLine ctermfg=15 guifg=#FF3145
    au InsertLeave * hi StatusLine ctermfg=236 guifg=#CD5907
augroup END



