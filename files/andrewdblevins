syntax on

highlight Search   ctermfg=NONE  ctermbg=magenta guifg=NONE    guibg=yellow

let mapleader = ","

set noautoindent
set autowrite
set nobackup
set nobinary
set cindent

set expandtab
set noexrc
set fileformat=unix
set filetype=unix
set foldmethod=indent
set foldlevel=99
set hidden
set hlsearch
set ignorecase
set incsearch
set infercase
set joinspaces
set ruler
set secure
set shiftwidth=4
set shortmess=at
set number
set noshowmatch
set nosmartindent
set smartcase
set tabstop=4
set textwidth=0
set ttyfast
set undolevels=200
set viminfo=
set wrapmargin=0
set wrapscan
set nowritebackup
set matchpairs+=<:>
set wildmode=list:full

nnoremap <leader>ev :vsplit $MYVIMRC<cr>
nnoremap <leader>sv :source $MYVIMRC<cr>


nnoremap L $
nnoremap H ^


" put word in quotes
nnoremap <leader>' viw<esc>a'<esc>hbi'<esc>lel
nnoremap <leader>" viw<esc>a"<esc>hbi"<esc>lel



" Font / colors
colorscheme delek 

""" Don't have to press the spacebar for multi-line cmd output at start-up.
:autocmd FileReadPre,BufReadPre   * set cmdheight=4
:autocmd FileReadPost,BufReadPost * set cmdheight=3

"Explorer should list file date and size.
let g:explDetailedList=1
"Explorer should list directories mixed in with file names.
let g:explDirsFirst=0

set iskeyword=a-z,A-Z,48-57,_
"set keywordprg=C:\imvu\website\sandbox-bin\ibb-2009-12-01\ibb_search.bat

" Cycle forward and backward through buffers.
map <C-N> :bn<CR>
map <C-P> :bp<CR>

" Turns of highsearch, once I've found what I'm looking for.
map ` :nohls<C-M>

command! -nargs=1 HIVE silent call s:RunShellCommand("echo ".<q-args>."") | set filetype=query_result

" better shell command
command! -complete=shellcmd -nargs=+ Shell call s:RunShellCommand(<q-args>)
function! s:RunShellCommand(cmdline, ...)
    echo a:cmdline
    let expanded_cmdline = a:cmdline
    for part in split(a:cmdline, ' ')
        if part[0] =~ '\v[%#<]'
            let expanded_part = fnameescape(expand(part))
            let expanded_cmdline = substitute(expanded_cmdline, part, expanded_part, '')
        endif
    endfor
    if a:0 == 0
        botright new
    endif
    setlocal buftype=nofile bufhidden=wipe nobuflisted noswapfile nowrap
"call setline(1, 'You entered: ' . a:cmdline)
"call setline(2, 'Expanded Form: ' .expanded_cmdline)
"call setline(3,substitute(getline(2),'.','=','g'))
    execute '$read !'. expanded_cmdline
    1
endfunction


map t :call Hive()

function! Test() range
  call s:RunShellCommand('echo '.shellescape(join(getline(a:firstline, a:lastline), " ")))
endfunction

function! Hive() range
  call s:RunShellCommand('hive -e '.shellescape(join(getline(a:firstline, a:lastline), " ")))
endfunction


augroup filetypedetect
  au BufNewFile,BufRead *.pig set filetype=pig syntax=pig
augroup END 
