fun SetupVAM()
    let vam_install_path = expand('$HOME') . '/.vim/vim-addons'
    exec 'set runtimepath+='.vam_install_path.'/vim-addon-manager'
    " YES, you can customize this vam_install_path path and everything still works!
    let vam_install_path = expand('$HOME') . '/.vim/vim-addons'
    exec 'set runtimepath+='.vam_install_path.'/vim-addon-manager'

    " * unix based os users may want to use this code checking out VAM
    " * windows users want to use http://mawercer.de/~marc/vam/index.php
    " to fetch VAM, VAM-known-repositories and the listed plugins
    " without having to install curl, unzip, git tool chain first
    " -> BUG [4] (git-less installation)
    if !filereadable(vam_install_path.'/vim-addon-manager/.git/config') && 1 == confirm("git clone VAM into ".vam_install_path."?","&Y\n&N")
        " I'm sorry having to add this reminder. Eventually it'll pay off.
        call confirm("Remind yourself that most plugins ship with documentation (README*, doc/*.txt). Its your first source of knowledge. If you can't find the info you're looking for in reasonable time ask maintainers to improve documentation")
        exec '!p='.shellescape(vam_install_path).'; mkdir -p "$p" && cd "$p" && git clone --depth 1 git://github.com/MarcWeber/vim-addon-manager.git'
        " VAM run helptags automatically if you install or update plugins
        exec 'helptags '.fnameescape(vam_install_path.'/vim-addon-manager/doc')
    endif

    " Example drop git sources unless git is in PATH. Same plugins can
    " be installed form www.vim.org. Lookup MergeSources to get more control
    " let g:vim_addon_manager['drop_git_sources'] = !executable('git')

    call vam#ActivateAddons([
        \  'ack',
        \  'align',
        \  'blackboard',
        \  'buf_it',
        \  'Command-T',
        \  'cucumber.zip',
        \  'dbext',
        \  'endwise',
        \  'fugitive',
        \  'git.zip',
        \  'jellybeans',
        \  'molokai',
        \  'rails',
        \  'railscasts',
        \  'searchfold',
        \  'snipmate',
        \  'snipmate-snippets',
        \  'supertab',
        \  'surround',
        \  'Syntastic',
        \  'taglist',
        \  'The_NERD_Commenter',
        \  'The_NERD_tree',
        \  'tlib',
        \  'unimpaired',
        \  'vim-addon-mw-utils',
        \  'vim-indent-object',
        \  'vividchalk',
        \  'ZoomWin'
        \ ], {'auto_install' : 0})
    endf
    call SetupVAM()
    " experimental: run after gui has been started (gvim) [3]
    " option1: au VimEnter * call SetupVAM()
    " option2: au GUIEnter * call SetupVAM()
    " See BUGS sections below [*]

filetype plugin indent on

set nocompatible

set number
set ruler
syntax on

" Set encoding
set encoding=utf-8

" Tabs and spaces stuff
set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab

" Wrap or not?
set nowrap
" set wrap
" setlinebreak

" Tabs and trailing spaces
" http://vimcasts.org/episodes/show-invisibles/
set list
set list listchars=tab:▸\ ,trail:·
nmap <leader>l :set list!<CR>

" Searching
set hlsearch
set incsearch
set ignorecase
set smartcase

" Tab completion
set wildmode=list:longest,list:full
set wildignore+=*.o,*.obj,.git,*.rbc

" Status bar
set laststatus=2

" mouse on!
set mouse=a

" Without setting this, ZoomWin restores windows in a way that causes
" equalalways behavior to be triggered the next time CommandT is used.
" This is likely a bludgeon to solve some other issue, but it works
set noequalalways

" NERDTree configuration
let NERDTreeIgnore=['\.rbc$', '\~$']
map <Leader>n :NERDTreeToggle<CR>

" Command-T configuration
let g:CommandTMaxHeight=20

" ZoomWin configuration
map <Leader><Leader> :ZoomWin<CR>

" CTags
map <Leader>rt :!ctags --extra=+f -R *<CR><CR>

" Remember last location in file
if has("autocmd")
  au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
    \| exe "normal g'\"" | endif
endif

function s:setupWrapping()
  set wrap
  set wm=2
  set textwidth=72
endfunction

function s:setupMarkup()
  call s:setupWrapping()
  map <buffer> <Leader>p :Mm <CR>
endfunction

" make and python use real tabs
au FileType make set noexpandtab
au FileType python setlocal noexpandtab
au FileType yaml setlocal ts=2 sts=2 sw=2 expandtab
au FileType ruby setlocal ts=2 sts=2 sw=2 expandtab
au FileType cucumber setlocal ts=2 sts=2 sw=2 expandtab
au FileType smarty setlocal ts=4 sts=4 sw=4 expandtab

" *.tpl files are smarty templates
au BufRead,BufNewFile *.tpl set ft=smarty

" Thorfile, Rakefile and Gemfile are Ruby
au BufRead,BufNewFile {Gemfile,Rakefile,Thorfile,config.ru}    set ft=ruby

" md, markdown, and mk are markdown and define buffer-local preview
au BufRead,BufNewFile *.{md,markdown,mdown,mkd,mkdn} call s:setupMarkup()

" features files are cucumber files
au BufRead,BufNewFile *.features set ft=cucumber

au BufRead,BufNewFile *.txt call s:setupWrapping()

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

" Opens an edit command with the path of the currently edited file filled in
" Normal mode: <Leader>e
"map <Leader>e :e <C-R>=expand("%:p:h") . "/" <CR>

" Opens a tab edit command with the path of the currently edited file filled in
" Normal mode: <Leader>t
"map <Leader>te :tabe <C-R>=expand("%:p:h") . "/" <CR>

" Inserts the path of the currently edited file into a command
" Command mode: Ctrl+P
cmap <C-P> <C-R>=expand("%:p:h") . "/" <CR>

" Unimpaired configuration
" Bubble single lines
nmap <C-Up> [e
nmap <C-Down> ]e
" Bubble multiple lines
vmap <C-Up> [egv
vmap <C-Down> ]egv

" Enable syntastic syntax checking
let g:syntastic_enable_signs=1
let g:syntastic_quiet_warnings=1

" Use modeline overrides
set modeline
set modelines=10

" Automatically save before commands like :next and :make
set autowrite

" Default color scheme
color vividchalk

" Directories for swp files
"set backupdir=~/.vim/backup
"set directory=~/.vim/backup

" MacVIM shift+arrow-keys behavior (required in .vimrc)
let macvim_hig_shift_movement = 1

" Include user's local vim config
if filereadable(expand("~/.vimrc.local"))
  source ~/.vimrc.local
endif

" wrap test function
command! -nargs=* Wrap set wrap linebreak nolist showbreak=…

" utility function to preserve cursor position
function! Preserve(command)
  " Preparation: save last search, and cursor position.
  let _s=@/
  let l = line(".")
  let c = col(".")
  " Do the business:
  execute a:command
  " Clean up: restore previous search history, and cursor position
  let @/=_s
  call cursor(l, c)
endfunction

" show and trim spaces
highlight ExtraWhitespace ctermbg=red guibg=red
match ExtraWhitespace /\s\+$/
autocmd BufWinEnter * match ExtraWhitespace /\s\+$/
autocmd InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
autocmd InsertLeave * match ExtraWhitespace /\s\+$/
autocmd BufWinLeave * call clearmatches()

function ShowSpaces(...)
  let @/='\v(\s+$)|( +\ze\t)'
  let oldhlsearch=&hlsearch
  if !a:0
    let &hlsearch=!&hlsearch
  else
    let &hlsearch=a:1
  end
  return oldhlsearch
endfunction

"function! <SID>TrimSpaces()
"   " Preparation: save last search, and cursor position.
"   let _s=@/
"   let l = line(".")
"   let c = col(".")
"   " Do the business:
"   %s/\s\+$//ec
"   " Clean up: restore previous search history, and cursor position
"   let @/=_s
"   call cursor(l, c)
"endfunction

command -bar -nargs=? ShowSpaces call ShowSpaces(<args>)
nnoremap <F12>     :ShowSpaces 1<CR>
"nnoremap <silent> <F5> :call <SID>TrimSpaces()<CR>
nmap <F5> :call Preserve("%s/\\s\\+$//ec")<CR>
nmap <F6> :call Preserve("normal gg=G")<CR>

nnoremap <F3> "=strftime("%Y%m%d%H%M%p")<CR>P
inoremap <F3> <C-R>=strftime("%Y%m%d%H%M%p")<CR>

" tabs shortcuts
" map <C-S-]> gt
" map <C-S-[> gT
" map <C-1> 1gt
" map <C-2> 2gt
" map <C-3> 3gt
" map <C-4> 4gt
" map <C-5> 5gt
" map <C-6> 6gt
" map <C-7> 7gt
" map <C-8> 8gt
" map <C-9> 9gt
" map <C-0> :tablast<CR>

"set <F20>=[25~
"set <F13>=[25~1
"set <F14>=[25~2
"
"map <F13> 1gt
"map <F14> 2gt
"
map <leader>ew :e <C-R>=expand("%:p:h") . "/" <CR>
map <leader>es :sp <C-R>=expand("%:p:h") . "/" <CR>
map <leader>ev :vsp <C-R>=expand("%:p:h") . "/" <CR>
map <leader>et :tabe <C-R>=expand("%:p:h") . "/" <CR>

map ç gT
map ° gt
map Q :q

set foldmethod=syntax
set foldlevelstart=1
nnoremap <SPACE> za
"nnoremap <C-Space> zi
let g:php_folding=2

"colorscheme solarized

nnoremap <silent> <F8> :TlistToggle<CR>

"function! FoldBalloon()
    "let foldStart = foldclosed(v:beval_lnum )
    "let foldEnd
    "= foldclosedend(v:beval_lnum)
    "let lines = []
    "" Detect if we are in a fold
    "if foldStart > 0
        "" we are in a fold
        "let numLines = foldEnd - foldStart + 1
        "" if we have too many lines in fold, show only the first 14
        "" and the last 14 lines
        "if ( numLines > 31 )
            "let lines = getline( foldStart, foldStart + 14 )
            "let lines += [ '-- Snipped ' . ( numLines - 30 ) . ' lines --' ]
            "let lines += getline( foldEnd - 14, foldEnd )
        "else
            ""less than 30 lines, lets show all of them
            "let lines = getline( foldStart, foldEnd )
        "endif
    "endif
    "" return result
    "return join( lines, has( "balloon_multiline" ) ? "\n" : " " )
"endfunction

"set balloonexpr=FoldBalloon()
"set ballooneval
