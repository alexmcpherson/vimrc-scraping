" .vimrc
" Author: Gergo Sulymosi <gergo.sulymosi@gmail.com>
" Source: http://github.com/trekdemo/
"
" To use it, copy it to
"  for OS X, Unix and OS/2:  ~/.vimrc
"  for MS-DOS and Win32:  $VIM\_vimrc
"
"  If you don't understand a setting in here, just type ':h setting'.
" Preamble ---------------------------------------------------------------- {{{

filetype off

let g:pathogen_disabled = []
call pathogen#runtime_append_all_bundles()
filetype plugin indent on
set nocompatible                        " I'm using vim not vi

" }}}
" Basic options ----------------------------------------------------------- {{{
set encoding=utf-8
set shell=/bin/zsh
set nowrap                              " Do not wrap long lines
set number                              " Show linenumbers
set showcmd                             " Show info in the right bottom
set ttyfast
set textwidth=80
set colorcolumn=+1                      " Display margin at 81
set nocursorline                        " Do not hightlight the current line
set scrolloff=5
set sidescroll=1
set sidescrolloff=10
set formatoptions=qcrn1
set clipboard+=unnamed                  " Yanks go on clipboard instead.
set pastetoggle=<F8>
set novisualbell                        " No blinking .
set noerrorbells                        " No noise.
set lazyredraw
set autoread                            " Reload file if it's modified outside
set autowrite
set ruler                               " Show line and column number
set showbreak=↪
set list                                " Show invisible characters
set listchars=tab:▸\ ,trail:.,eol:¬,extends:❯,precedes:❮
set fillchars+=diff:⣿
set nohidden                            " Modified buffers can be hidden
set splitright                          " New split window on the right
set splitbelow                          " New split window on the bottom
set virtualedit+=block
set completeopt=longest,menuone,preview " Better Completion
" set complete=.,w,b,u,t,i
set complete=.,b,u,t
set diffopt+=iwhite                     " Ignore whitespace on diffs
set backspace=indent,eol,start          " Make backspace behave in a sane manner.
set foldenable                          " Use folds"
set foldmethod=syntax
set foldlevel=999999
set foldlevelstart=2
set title
set shiftround
set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab
set laststatus=2
set notimeout
set ttimeout
set timeoutlen=50
set tags=./tags,tags,gems.tags
" Backups {{{

" Make Vim able to edit crontab files again.
set backupskip=/tmp/*,/private/tmp/*"
set undodir=~/.vim/tmp/undo//           " undo files
set backupdir=~/.vim/tmp/backup//       " backups
set directory=~/.vim/tmp/swap//         " swap files
set backup                              " enable backups
set noswapfile                          " It's 2012, Vim.

" }}}
" }}}
" Color scheme ------------------------------------------------------------ {{{

syntax enable                           " Switch syntax highlighting on
set t_Co=256                            " User 256 colors
set synmaxcol=240                       " Hightlight only the first n chars
set background=dark
" colorscheme molokai
" let g:solarized_termcolors=256
let g:solarized_underline = 0
let g:solarized_termtrans = 1
colorscheme solarized

" Highlight VCS conflict markers
match ErrorMsg '^\(<\|=\|>\)\{7\}\([^=].\+\)\?$'
match ErrorMsg '\s\+$'

" }}}
" Mappings ---------------------------------------------------------------- {{{
if &term =~ '^screen'
    " tmux will send xterm-style keys when its xterm-keys option is on
    execute "set <xUp>=\e[1;*A"
    execute "set <xDown>=\e[1;*B"
    execute "set <xRight>=\e[1;*C"
    execute "set <xLeft>=\e[1;*D"
endif
" Leader {{{

let mapleader = ","
let maplocalleader = "\\"
nmap <leader><leader> :!

" }}}
" Refactoring {{{
  " For local replace
  nnoremap gr gd[{V%:s/<C-R>///gc<left><left><left>
  " For global replace
  nnoremap gR gD:%s/<C-R>///gc<left><left><left>
" }}}

" Unfuck my screen
nmap U :syntax sync fromstart<cr>:redraw!<cr>

" Omnicomplete in insert mode
" Lines
inoremap <c-l> <c-x><c-l>
" File names
inoremap <c-f> <c-x><c-f>
" Tags
inoremap <c-]> <c-x><c-]>

" Scroll faster
nnoremap <C-e> 3<C-e>
nnoremap <C-y> 3<C-y>

" Pow restart
" map <silent> <leader>pr :!powder restart<cr><cr>
map <silent> <leader>pr :!touch tmp/restart.txt<cr><cr>
" Pow open
map <silent> <leader>po :!powder open<cr><cr>

" Change case
" nnoremap <C-u> gUiw
inoremap <C-u> <esc>gUiwea

" Substitute
nnoremap <leader>s :%s/

" Emacs bindings in command line mode
cnoremap <c-a> <home>
cnoremap <c-e> <end>

" Remove selected hightlight
noremap <leader><space> :noh<cr>:call clearmatches()<cr>
nnoremap <cr> zvzz

" Move in screen lines
nnoremap j gj
nnoremap k gk
vnoremap j gj
vnoremap k gk

" Move up/down in insert mode
inoremap <C-j> <Down>
inoremap <C-k> <Up>

map <tab> %

" GUndo
nmap <silent> <leader>u :GundoToggle<CR>

" Formatting, TextMate-style
nnoremap Q gqip
vnoremap Q gq

" Easier linewise reselection
nnoremap <leader>v V`]
inoremap jj <ESC>
" Swap windows
nnoremap <leader>w <C-w>v<C-w>l
" Move between windows
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
" Window resizing
nnoremap <S-C-left> 5<c-w>>
nnoremap <S-C-right> 5<c-w><
nnoremap <S-C-up> 5<c-w>+
nnoremap <S-C-down> 5<c-w>-
" Adjust viewports to the same size
map <Leader>= <C-w>=
" Keep search matches in the middle of the window and pulse the line when moving
" to them.
nnoremap n nzzzv
nnoremap N Nzzzv

" Don't move on *
nnoremap * *<c-o>
" Same when jumping around
nnoremap g; g;zz
nnoremap g, g,zz
" Easier to type, and I never use the default behavior.
noremap H ^
noremap L g_

" Align text
nnoremap <leader>Al :left<cr>
nnoremap <leader>Ac :center<cr>
nnoremap <leader>Ar :right<cr>
vnoremap <leader>Al :left<cr>
vnoremap <leader>Ac :center<cr>
vnoremap <leader>Ar :right<cr>

" Toggle wrap settings
nmap <silent> <leader>tw :set invwrap<CR>:set wrap?<CR>

" Some helpers to edit mode
" http://vimcasts.org/e/14
cnoremap %% <C-R>=expand('%:h').'/'<cr>
map <leader>ew :e %%
map <leader>es :sp %%
map <leader>ev :vsp %%
map <leader>et :tabe %%

" find merge conflict markers
nmap <silent> <leader>fc <ESC>/\v^[<=>]{7}( .*\|$)<CR>

" Toggle NERDTree
map <Leader>n <plug>NERDTreeTabsToggle<CR>


if has("gui_macvim") && has("gui_running")
  " Map command-[ and command-] to indenting or outdenting
  " while keeping the original selection in visual mode
  vmap <D-]> >gv
  vmap <D-[> <gv

  nmap <D-]> >>
  nmap <D-[> <<

  omap <D-]> >>
  omap <D-[> <<

  imap <D-]> <Esc>>>i
  imap <D-[> <Esc><<i

  " Bubble single lines
  nmap <D-Up> [e
  nmap <D-Down> ]e
  nmap <D-k> [e
  nmap <D-j> ]e

  " Bubble multiple lines
  vmap <D-Up> [egv
  vmap <D-Down> ]egv
  vmap <D-k> [egv
  vmap <D-j> ]egv
else
  " Map command-[ and command-] to indenting or outdenting
  " while keeping the original selection in visual mode
  vmap <M-]> >gv
  vmap <M-[> <gv

  nmap <M-]> >>
  nmap <M-[> <<

  omap <M-]> >>
  omap <M-[> <<

  imap <M-]> <Esc>>>i
  imap <M-[> <Esc><<i

  " Bubble single lines
  nmap <C-Up> [e
  nmap <C-Down> ]e
  " nmap <C-k> [e
  " nmap <C-j> ]e

  " Bubble multiple lines
  vmap <C-Up> [egv
  vmap <C-Down> ]egv
  vmap <C-k> [egv
  vmap <C-j> ]egv

  " Make shift-insert work like in Xterm
  map <S-Insert> <MiddleMouse>
  map! <S-Insert> <MiddleMouse>

  " Map Control-# to switch tabs
  map  <C-0> 0gt
  imap <C-0> <Esc>0gt
  map  <C-1> 1gt
  imap <C-1> <Esc>1gt
  map  <C-2> 2gt
  imap <C-2> <Esc>2gt
  map  <C-3> 3gt
  imap <C-3> <Esc>3gt
  map  <C-4> 4gt
  imap <C-4> <Esc>4gt
  map  <C-5> 5gt
  imap <C-5> <Esc>5gt
  map  <C-6> 6gt
  imap <C-6> <Esc>6gt
  map  <C-7> 7gt
  imap <C-7> <Esc>7gt
  map  <C-8> 8gt
  imap <C-8> <Esc>8gt
  map  <C-9> 9gt
  imap <C-9> <Esc>9gt

  map <leader>tn :tabnext<cr>
  map <leader>tp :tabprevious<cr>
endif
" }}}
" Folding ----------------------------------------------------------------- {{{
" Space to toggle folds.
nnoremap <Space> za
vnoremap <Space> za

" Make zO recursively open whatever top level fold we're in, no matter where the
" cursor happens to be.
nnoremap zO zCzO

" Use ,z to "focus" the current fold.
nnoremap <leader>z zMzvzz

function! MyFoldText() " {{{
    let line = getline(v:foldstart)

    let nucolwidth = &fdc + &number * &numberwidth
    let windowwidth = winwidth(0) - nucolwidth - 3
    let foldedlinecount = v:foldend - v:foldstart

    " expand tabs into spaces
    let onetab = strpart('          ', 0, &tabstop)
    let line = substitute(line, '\t', onetab, 'g')

    let line = strpart(line, 0, windowwidth - 2 -len(foldedlinecount))
    let fillcharcount = windowwidth - len(line) - len(foldedlinecount)
    return line . '…' . repeat(" ",fillcharcount) . foldedlinecount . '…' . ' '
endfunction " }}}
set foldtext=MyFoldText()
" }}}
" Various filetype-specific stuff ----------------------------------------- {{{

" Ruby {{{

augroup ft_ruby
    au!
    au Filetype ruby iab hh =>
    au Filetype ruby setlocal foldmethod=syntax
augroup END

" }}}
" Vim {{{

augroup ft_vim
    au!

    au FileType vim setlocal foldmethod=marker
    au FileType help setlocal textwidth=78
    au BufWinEnter *.txt if &ft == 'help' | wincmd L | endif
augroup END

" }}}
" QuickFix {{{

augroup ft_quickfix
    au!
    au Filetype qf setlocal colorcolumn=0 nolist nocursorline nowrap
augroup END

" }}}
" CSS, SASS and LessCSS {{{

augroup ft_css
    au!

    au BufNewFile,BufRead *.less setlocal filetype=less
    au BufNewFile,BufRead *.scss setlocal filetype=scss
    au BufNewFile,BufRead *.scss.erb setlocal filetype=scss

    au Filetype less,css,scss setlocal foldmethod=marker
    au Filetype less,css,scss setlocal foldmarker={,}
    au Filetype less,css,scss setlocal omnifunc=csscomplete#CompleteCSS
    au Filetype less,css,scss setlocal iskeyword+=-

    " Use <leader>S to sort properties.
    au BufNewFile,BufRead *.less,*.css,*.scss nnoremap <buffer> <localleader>S ?{<CR>jV/\v^\s*\}?$<CR>k:sort<CR>:noh<CR>

    " Make {<cr> insert a pair of brackets in such a way that the cursor is correctly
    " positioned inside of them AND the following code doesn't get unfolded.
    au BufNewFile,BufRead *.less,*.css,*.scss inoremap <buffer> {<cr> {}<left><cr><space><space><space><space>.<cr><esc>kA<bs>
augroup END

" }}}
" PHP {{{

augroup ft_php
    au!
    au Filetype php setlocal foldmethod=marker
    au Filetype php setlocal foldmarker={,}
augroup END

" }}}
" HAML {{{

augroup ft_haml
    au!
    au Filetype haml setlocal foldlevelstart=999
    au Filetype haml setlocal foldmethod=indent
augroup END

" }}}
" ActionScript {{{
  augroup ft_actionscript
    au BufNewFile,BufRead *.as setlocal filetype=actionscript
    au Filetype actionscript setlocal foldmethod=marker
    au Filetype actionscript setlocal foldmarker={,}
    au FileType actionscript setlocal omnifunc=actionscriptcomplete#Complete
    au FileType actionscript setlocal dictionary=$HOME/.vim/dict/actionscript.dict
    au FileType actionscript setlocal autoindent expandtab tabstop=2 shiftwidth=2 softtabstop=2
  augroup END
" }}}
" Javascript {{{
  au Filetype javascript setlocal foldmethod=marker
  au Filetype javascript setlocal foldmarker={,}
" }}}
" CoffeeScript {{{
  au Filetype coffee setlocal foldmethod=indent
" }}}
" HTML {{{
  augroup ft_html
    au!
    au Filetype html,eruby,erb set noexpandtab
  augroup END
" }}}

" }}}
" Autocommands ------------------------------------------------------------ {{{
" Strip tailing whitespace

  " Resize splits when the window is resized
  au VimResized * :wincmd =
  au BufRead,BufNewFile {Guardfile} set ft=ruby
  " Make sure Vim returns to the same line when you reopen a file.

  " Thanks, Amit {{{
  augroup line_return
      au!
      au BufReadPost *
          \ if line("'\"") > 0 && line("'\"") <= line("$") |
          \     execute 'normal! g`"zvzz' |
          \ endif
  augroup END

  " }}}
  " Striping whitespaces {{{
    fun! <SID>StripTrailingWhitespaces()
        let l = line(".") " Save last line
        let c = col(".")  " Save last col
        let _s=@/         " Save last search
        %s/\s\+$//e       " Strip whitespaces
        call cursor(l, c) " Restore cursor position
        let @/=_s         " Restore last search
    endfun
    au BufWritePre * :call <SID>StripTrailingWhitespaces()
   " }}}

" }}}
" Quick editing ----------------------------------------------------------- {{{

nnoremap <leader>ev <C-w>s<C-w>j<C-w>L:e ~/.vimrc<cr>
nnoremap <leader>eg <C-w>s<C-w>j<C-w>L:e ~/.gitconfig<cr>
nnoremap <leader>ez <C-w>s<C-w>j<C-w>L:e ~/.zshrc<cr>
nnoremap <leader>ez <C-w>s<C-w>j<C-w>L:e ~/.zshrc<cr>
nnoremap <leader>es <C-w>s<C-w>j<C-w>L:e ~/.vim/bundle/snipmate/snippets/<cr>

" }}}
" Searching and movement -------------------------------------------------- {{{

" Use sane regexes.
nnoremap / /\v
vnoremap / /\v

set ignorecase
set smartcase
set incsearch
set showmatch
set hlsearch
set gdefault

" }}}
" Wildmenu completion ----------------------------------------------------- {{{

set wildmenu
set wildmode=list:longest

set wildignore+=.hg,.git,.svn                    " Version control
set wildignore+=*.spl                            " compiled spelling word lists
set wildignore+=*.sw?                            " Vim swap files
set wildignore+=*.DS_Store                       " OSX bullshit
set wildignore+=*.orig                           " Merge resolution files
" Ignore bundler and sass cache
set wildignore+=*/vendor/gems/*,*/vendor/cache/*,*/.bundle/*,*/.sass-cache/*

" }}}
" Plugin settings --------------------------------------------------------- {{{
  " NERDTree {{{
    au Filetype nerdtree setlocal nolist

    let NERDTreeHighlightCursorline=1
    let NERDTreeIgnore = ['.vim$', '\~$', '.*.pid', '.*-fixtures-.*.json', '.*\.o$', 'db.db', 'tags.bak']
    let NERDTreeMinimalUI = 1
    let NERDTreeDirArrows = 1
    let g:nerdtree_tabs_open_on_gui_startup = 0
    let g:nerdtree_tabs_open_on_console_startup = 0
  " }}}
  " Powerline {{{
    let g:Powerline_symbols = 'fancy'
  " }}}
  " Tagbar {{{
    " Regenerate ctags
    map <Leader>rct :!ctags -R *<CR>
    " Regenerate bundler gems ctags
    map <leader>rcb :!bundler-tags<CR>
    nmap <leader>b :TagbarToggle<CR>
  " }}}
  " Ctrl-P {{{
    let g:ctrlp_root_markers = ['.rvmrc', '.git']
    let g:ctrlp_working_path_mode = 2
    let g:ctrlp_max_height = 20
    let g:ctrlp_extensions = ['tag']
    let g:ctrlp_custom_ignore = {
      \ 'dir':  '\.git$\|\.hg$\|\.svn$\|tmp',
      \ 'file': '\.exe$\|\.so$\|\.dll$',
      \ 'link': 'some_bad_symbolic_link',
    \ }
  " }}}
  " Ruby-Debugger {{{
    let g:ruby_debugger_no_maps = 1
    let g:ruby_debugger_progname = 'mvim'
    nmap <localleader>b  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.toggle_breakpoint()<CR>
    nmap <localleader>v  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.open_variables()<CR>
    nmap <localleader>m  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.open_breakpoints()<CR>
    nmap <localleader>t  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.open_frames()<CR>
    nmap <localleader>s  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.step()<CR>
    nmap <localleader>f  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.finish()<CR>
    nmap <localleader>n  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.next()<CR>
    nmap <localleader>c  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.continue()<CR>
    nmap <localleader>e  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.exit()<CR>
    nmap <localleader>d  :call ruby_debugger#load_debugger() <bar> call g:RubyDebugger.remove_breakpoints()<CR>
  " }}}
  " JSHint {{{
    let g:JSLintHighlightErrorLine = 1 " Turn on jshint errors by default
  " }}}
  " Easymotion {{{

    let g:EasyMotion_do_mapping = 0

    nnoremap <silent> <Leader>f      :call EasyMotion#F(0, 0)<CR>
    onoremap <silent> <Leader>f      :call EasyMotion#F(0, 0)<CR>
    vnoremap <silent> <Leader>f :<C-U>call EasyMotion#F(1, 0)<CR>

    nnoremap <silent> <Leader>F      :call EasyMotion#F(0, 1)<CR>
    onoremap <silent> <Leader>F      :call EasyMotion#F(0, 1)<CR>
    vnoremap <silent> <Leader>F :<C-U>call EasyMotion#F(1, 1)<CR>

    onoremap <silent> <Leader>t      :call EasyMotion#T(0, 0)<CR>
    onoremap <silent> <Leader>T      :call EasyMotion#T(0, 1)<CR>

  " }}}
  " Shell {{{
    function! s:ExecuteInShell(command) " {{{
        let command = join(map(split(a:command), 'expand(v:val)'))
        let winnr = bufwinnr('^' . command . '$')
        silent! execute  winnr < 0 ? 'botright vnew ' . fnameescape(command) : winnr . 'wincmd w'
        setlocal buftype=nowrite bufhidden=wipe nobuflisted noswapfile nowrap nonumber
        echo 'Execute ' . command . '...'
        silent! execute 'silent %!'. command
        silent! redraw
        silent! execute 'au BufUnload <buffer> execute bufwinnr(' . bufnr('#') . ') . ''wincmd w'''
        silent! execute 'nnoremap <silent> <buffer> <LocalLeader>r :call <SID>ExecuteInShell(''' . command . ''')<CR>:AnsiEsc<CR>'
        silent! execute 'nnoremap <silent> <buffer> q :q<CR>'
        silent! execute 'AnsiEsc'
        echo 'Shell command ' . command . ' executed.'
    endfunction " }}}
    command! -complete=shellcmd -nargs=+ Shell call s:ExecuteInShell(<q-args>)
    nnoremap <leader>! :Shell<space>
  " }}}
  " Fugitive {{{

    cabbrev git Git
    nnoremap <leader>gd :Gdiff<cr>
    nnoremap <leader>gp :Git push<cr>
    nnoremap <leader>gs :Gstatus<cr>
    nnoremap <leader>gw :Gwrite<cr>
    nnoremap <leader>ga :Gadd<cr>
    nnoremap <leader>gb :Gblame<cr>
    nnoremap <leader>gco :Gcheckout<cr>
    nnoremap <leader>gci :Gcommit<cr>
    nnoremap <leader>gm :Gmove<cr>
    nnoremap <leader>gr :Gremove<cr>
    nnoremap <leader>gl :Shell git lg -25<cr>:wincmd \|<cr>
    nnoremap <leader>gx :Git dx<cr>
    nnoremap <silent> <leader>gt :Git dt<cr>

    augroup ft_fugitive
        au!

        au BufNewFile,BufRead .git/index setlocal nolist
    augroup END

    " "Hub"
    nnoremap <leader>H :Gbrowse<cr>
    vnoremap <leader>H :Gbrowse<cr>

" }}}
  " NERDCommenter mappings {{{
  let NERDSpaceDelims = 1
  if has("gui_macvim") && has("gui_running")
    map <D-/> <plug>NERDCommenterToggle<CR>
    imap <D-/> <Esc><plug>NERDCommenterToggle<CR>i
  else
    map <leader>/ <plug>NERDCommenterToggle<CR>
    imap <leader>/ <Esc><plug>NERDCommenterToggle<CR>i
  endif
  " }}}
  " ACK {{{
    map <D-F> :Ack<space>
    map <leader>F :Ack<space>
  " }}}
  " Syntastic {{{
    let g:syntastic_enable_signs=1
    let g:syntastic_quiet_warnings=0
    let g:syntastic_auto_loc_list=2
  " }}}
  " GitV {{{
    let g:Gitv_DoNotMapCtrlKey = 1
    let g:Gitv_OpenHorizontal = 1
    nmap <leader>gv :Gitv --all<cr>
    nmap <leader>gV :Gitv! --all<cr>
    vmap <leader>gV :Gitv! --all<cr>
  " }}}
  " Rails {{{
    cabbrev rake Rake
    cabbrev bundle Bundle
  " }}}
" }}}
" Environments (GUI/Console) ---------------------------------------------- {{{

if has('gui_running') " {{{
  set guifont=Inconsolata-dz\ for\ Powerline:h12
  " set guifont=Menlo\ Regular\ for\ Powerline:h12
  set linespace=1

  " Remove all the UI cruft
  set go-=T
  set go-=l
  set go-=L
  set go-=r
  set go-=R

  highlight SpellBad term=underline gui=undercurl guisp=Orange

  " Use a line-drawing char for pretty vertical splits.
  set fillchars+=vert:│

  " Different cursors for different modes.
  set guicursor=n-c:block-Cursor-blinkon0
  set guicursor+=v:block-vCursor-blinkon0
  "set guicursor+=i-ci:ver20-iCursor

  if has("gui_macvim") "{{{
    " Full screen means FULL screen
    set fuoptions=maxvert,maxhorz

    " Use the normal HIG movements, except for M-Up/Down
    let macvim_skip_cmd_opt_movement = 1
    no   <D-Left>       <Home>
    no!  <D-Left>       <Home>
    no   <M-Left>       <C-Left>
    no!  <M-Left>       <C-Left>

    no   <D-Right>      <End>
    no!  <D-Right>      <End>
    no   <M-Right>      <C-Right>
    no!  <M-Right>      <C-Right>

    no   <D-Up>         <C-Home>
    ino  <D-Up>         <C-Home>
    imap <M-Up>         <C-o>{

    no   <D-Down>       <C-End>
    ino  <D-Down>       <C-End>
    imap <M-Down>       <C-o>}

    imap <M-BS>         <C-w>
    inoremap <D-BS>     <esc>my0c`y
  else
    " Non-MacVim GUI, like Gvim
  end " }}}
else
  " Console Vim
endif " }}}

" }}}

