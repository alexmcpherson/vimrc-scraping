" This vimrc file owes much -- if not everything -- to Ciaran McCreesh.
" His configuration file was used for a start-point when building this one.
scriptencoding utf-8
" Name Setup {{{
let g:name = 'Jesper Louis Andersen'
let g:email = 'jesper.louis.andersen@gmail.com'
" }}}
" Vundle Setup {{{
call pathogen#infect()
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" Bundles to manage
Bundle 'gmarik/vundle'

Bundle 'tpope/vim-fugitive'
Bundle 'mattn/gist-vim'
Bundle 'scrooloose/nerdcommenter'
Bundle 'scrooloose/nerdtree'
Bundle 'jeetsukumaran/vim-buffergator'
Bundle 'vim-scripts/vimwiki'
Bundle 'majutsushi/tagbar'
Bundle 'kana/vim-tabpagecd'
Bundle 'tomtom/tlib_vim'
Bundle 'MarcWeber/vim-addon-mw-utils'
Bundle 'altercation/vim-colors-solarized'
Bundle 'tpope/vim-markdown'
Bundle 'tsaleh/vim-matchit'
Bundle 'tsaleh/vim-align'
Bundle 'tpope/vim-repeat'
Bundle 'garbas/vim-snipmate'
Bundle 'tpope/vim-surround'
Bundle 'jimenezrick/vimerl'
Bundle 'ciaranm/detectindent'
" }}}
" Initialize {{{
if (&term =~ "xterm") && (&termencoding == "")
    set termencoding=utf-8
endif

if &term =~ "xterm"
    " use xterm titles
    if has('title')
        set title
    endif

    " change cursor colour depending upon mode
    if exists('&t_SI')
        let &t_SI = "\<Esc>]12;lightgoldenrod\x7"
        let &t_EI = "\<Esc>]12;grey80\x7"
    endif
endif
" }}}
" Vimrc edit & reload {{{
    nno <leader>Ve :tabedit $MYVIMRC<CR>
    nno <leader>Vr :source $MYVIMRC<CR>
" }}}
" Tabs {{{
map <D-1> :tabnext 1<CR>
map <D-2> :tabnext 2<CR>
map <D-3> :tabnext 3<CR>
map <D-4> :tabnext 4<CR>
map <D-5> :tabnext 5<CR>
map <D-6> :tabnext 6<CR>
map <D-7> :tabnext 7<CR>
map <D-8> :tabnext 8<CR>
map <D-9> :tabnext 9<CR>
map <D-0> :tabnext 10<CR>
" }}}
" Undo & history {{{
    set history=5000
    set undolevels=5000
    " make sure tmp dir is created
    silent execute '!mkdir ~/.vim/tmp > /dev/null 2>&1'
    " delete junk older than 3 days
    silent execute '!find ~/.vim/tmp/ -type f -mtime +3 -exec rm {} \;'
    set undofile
    set undodir=~/.vim/tmp//
    set backup
    set backupdir=~/.vim/tmp//
" }}}
"Main Settings {{{"

set nocompatible
set enc=utf-8
set tenc=utf-8
set fileformat=unix
set viminfo='1000,f1,:1000,/1000
set backspace=indent,eol,start
set showcmd
set showmatch
set hlsearch
set incsearch
set antialias
set showfulltag
set expandtab
set lazyredraw
set noerrorbells
set ignorecase
set smartcase
set novisualbell
if has("autocmd")
    autocmd GUIEnter * set visualbell t_vb=
endif
set scrolloff=3
set sidescrolloff=2
set whichwrap+=<,>,[,]
" Wildmenu {{{
set wildmenu
set wildmode=list:full

set wildignore+=.hg,.git,.svn
set wildignore+=*.aux,*.out,*.toc
set wildignore+=*.jpg,*.bmp,*.gif,*.png,*.jpeg
set wildignore+=*.o,*.obj,*.exe,*.dll,*.manifest
set wildignore+=*.spl
set wildignore+=*.sw?
set wildignore+=*.DS_Store
set wildignore+=*.luac
set wildignore+=migrations
set wildignore+=*.pyc
set wildignore+=*.beam
set wildignore+=*.o,*~,.lo
" }}}
" Omnicomplete {{{
set completeopt=longest,menuone
set cpoptions+=$
set ofu=syntaxcomplete#Complete
" }}}
set suffixes+=.in,.a,.1
set hidden
set winminheight=1
set virtualedit=block,onemore
" Tabs {{{
set shiftwidth=4
set softtabstop=4
set autoindent
set smartindent
inoremap # X<BS>#
" }}}
" Folding {{{
if has("folding")
    set foldlevelstart=99
    set foldcolumn=0
    set foldenable
    set foldlevel=99
    set foldmethod=marker
endif
" }}}
" Filetypes {{{
if has("eval")
    filetype on
    filetype plugin on
    filetype indent on
endif
" }}}

if has("syntax")
   syntax on
   set popt+=syntax:y
endif

if hostname() == "illithid"
    set guifont=Inconsolata\ 12
elseif hostname() == "myrddraal"
    set guifont=Droid\ Sans\ Mono\ 10
elseif hostname() == "tiefling.local"
    set guifont=Menlo:h12
elseif hostname() == "tiefling.issuu.com"
    set guifont=Menlo:h12
else
    set guifont=Inconsolata\ 12
endif

colorscheme inkpot
if has("gui")
    set guioptions-=m
    set guioptions-=T
    set guioptions-=l
    set guioptions-=L
    set guioptions-=r
    set guioptions-=R

    set mousemodel=popup
endif
" }}}

if has("title")
    set title
endif

if has("title") && (has("gui_running") || &title)
    set titlestring=
    set titlestring+=%f\ " file name
    set titlestring+=%h%m%r%w
    set titlestring+=\ -\ %{v:progname}
    set titlestring+=\ -\ %{substitute(getcwd(),\ $HOME,\ '~',\ '')}
endif

set grepprg=grep\ -nH\ $*
let g:secure_modelines_verbose = 0
let g:secure_modelines_modelines = 15
let g:tex_flavor='latex'
set iskeyword+=:
set laststatus=2
set statusline=
set statusline+=%2*%-3.3n%0*\                " buffer number
set statusline+=%f\                          " file name
set statusline+=%{fugitive#statusline()}     " git information
set statusline+=%h%1*%m%r%w%0*               " flags
set statusline+=\[%{strlen(&ft)?&ft:'none'}, " filetype
set statusline+=%{&encoding},                " encoding
set statusline+=%{&fileformat}]              " file format
if filereadable(expand("$VIM/vimfiles/plugin/vimbuddy.vim"))
    set statusline+=\ %{VimBuddy()}          " vim buddy
endif
set statusline+=%=                           " right align
set statusline+=%2*0x%-8B\                   " current char
set statusline+=%-14.(%l,%c%V%)\ %<%P        " offset
 
" special statusbar for special windows
if has("autocmd")
    au FileType qf
                \ if &buftype == "quickfix" |
                \     setlocal statusline=%2*%-3.3n%0* |
                \     setlocal statusline+=\ \[Compiler\ Messages\] |
                \     setlocal statusline+=%=%2*\ %<%P |
                \ endif

    fun! <SID>FixMiniBufExplorerTitle()
        if "-MiniBufExplorer-" == bufname("%")
            setlocal statusline=%2*%-3.3n%0*
            setlocal statusline+=\[Buffers\]
            setlocal statusline+=%=%2*\ %<%P
        endif
    endfun

    au BufWinEnter *
                \ let oldwinnr=winnr() |
                \ windo call <SID>FixMiniBufExplorerTitle() |
                \ exec oldwinnr . " wincmd w"
endif


" If possible and in gvim, use cursor row highlighting
if has("gui_running") && v:version >= 700
    set cursorline
end
set guicursor+=a:blinkon0

if has("file_in_path")
    let &cdpath=','.expand("$HOME").','.expand("$HOME").'/work'
endif

" Better include path handling
set path+=src/
let &inc.=' ["<]'

" Show tabs and trailing whitespace visually
if (&termencoding == "utf-8") || has("gui_running")
    if v:version >= 700
        if has("gui_running")
            set list listchars=tab:»·,trail:·,extends:…,nbsp:‗,precedes:…
        else
            " xterm + terminus hates these
            set list listchars=tab:»·,trail:·,extends:>,nbsp:_
        endif
    else
        set list listchars=tab:»·,trail:·,extends:…
    endif
else
    if v:version >= 700
        set list listchars=tab:>-,trail:.,extends:>,nbsp:_
    else
        set list listchars=tab:>-,trail:.,extends:>
    endif
endif

if has("unix")
    if !isdirectory(expand("~/.vim/"))
        if !isdirectory(expand("~/.vim/backup/"))
            !mkdir -p ~/.vim/backup/
        endif

        if !isdirectory(expand("~/.vim/temp/"))
            !mkdir -p ~/.vim/temp/
        endif
    endif
endif

if filereadable("/usr/share/dict/words")
    set dictionary=/usr/share/dict/words
endif

set fillchars=fold:-

" Filter expected errors from make
if has("eval") && v:version >= 700
    if hostname() == "succubus"
        let &makeprg="nice -n7 make -j1 2>&1"
    elseif hostname() == "illithid"
        let &makeprg="nice -n7 make -j2 2>&1"
    elseif hostname() == "teifling.local"
        let &makeprg="nice -n7 make -j4 2>&1"
    else
        let &makeprg="nice -n7 make -j2 2>&1"
    endif

    " ignore libtool links with version-info
    let &errorformat="%-G%.%#libtool%.%#version-info%.%#,".&errorformat

    " ignore doxygen things
    let &errorformat="%-G%.%#Warning: %.%# is not documented.,".&errorformat
    let &errorformat="%-G%.%#Warning: no uniquely matching class member found for%.%#,".&errorformat
    let &errorformat="%-G%.%#Warning: documented function%.%#was not declared or defined.%.%#,".&errorformat
 
    " catch internal errors
    let &errorformat="%.%#Internal error at %.%# at %f:%l: %m,".&errorformat
endif

"-----------------------------------------------------------------------
" completion
"-----------------------------------------------------------------------
set dictionary=/usr/share/dict/words
 
"-----------------------------------------------------------------------
" autocmds
"-----------------------------------------------------------------------
 
if has("eval")
 
    " If we're in a wide window, enable line numbers.
    fun! <SID>WindowWidth()
        if winwidth(0) > 90
            setlocal number
            setlocal foldcolumn=2

            if v:version >= 700
                try
                    setlocal numberwidth=3
                catch
                endtry
            endif
        else
            setlocal nonumber
            setlocal foldcolumn=0
        endif
    endfun
 
    " Force active window to the top of the screen without losing its
    " size.
    fun! <SID>WindowToTop()
        let l:h=winheight(0)
        wincmd K
        execute "resize" l:h
    endfun
endif

if has("eval")
endif

if has("autocmd")
    au VimEnter * nohls
endif

" autocmds
if has("autocmd") && has("eval")
    augroup jlouis
        autocmd!
 
        " Automagic line numbers
        autocmd BufEnter * :call <SID>WindowWidth()
 
        " Always do a full syntax refresh
        autocmd BufEnter * syntax sync fromstart
 
        " For help files, move them to the top window and make <Return>
        " behave like <C-]> (jump to tag)
        autocmd FileType help :call <SID>WindowToTop()
        autocmd FileType help nmap <buffer> <Return> <C-]>
 
        " For svn-commit, don't create backups
        autocmd BufRead svn-commit.tmp :setlocal nobackup
 
        " m4 matchit support
        autocmd FileType m4 :let b:match_words="(:),`:',[:],{:}"
 
        " Detect procmailrc
        autocmd BufRead procmailrc :setfiletype procmail
 
        " bash-completion ftdetects
        autocmd BufNewFile,BufRead /*/*bash*completion*/*
                    \ if expand("<amatch>") !~# "ChangeLog" |
                    \     let b:is_bash = 1 | set filetype=sh |
                    \ endif

        try
            autocmd QuickFixCmdPost * botright cwindow 5
        catch
        endtry

        try
            autocmd Syntax *
                        \ syn match VimModelineLine /^.\{-1,}vim:[^:]\{-1,}:.*/ contains=VimModeline |
                        \ syn match VimModeline contained /vim:[^:]\{-1,}:/
            hi def link VimModelineLine comment
            hi def link VimModeline     special
        catch
        endtry
    augroup END
endif
 
" content creation
if has("autocmd")
    augroup content
        autocmd!
 
        autocmd BufNewFile *.rb 0put ='# vim: set sw=4 sts=4 et tw=80 :' |
                    \ 0put ='#!/usr/bin/ruby' | set sw=4 sts=4 et tw=80 |
                    \ norm G
 
        autocmd BufNewFile *.hh 0put ='/* vim: set sw=4 sts=4 et foldmethod=syntax : */' |
                    \ 1put ='' | call MakeIncludeGuards() |
                    \ set sw=4 sts=4 et tw=80 | norm G
 
        autocmd BufNewFile *.cc 0put ='/* vim: set sw=4 sts=4 et foldmethod=syntax : */' |
                    \ 1put ='' | 2put ='' | call setline(3, '#include "' .
                    \ substitute(expand("%:t"), ".cc$", ".hh", "") . '"') |
                    \ set sw=4 sts=4 et tw=80 | norm G
    augroup END
endif

" Mappings
nmap <F12> :make<CR>
map <F1> <Esc>
imap <F1> <Esc>
command -nargs=? G call GitGrep(<f-args>)
" vim: set shiftwidth=4 softtabstop=4 expandtab tw=120                 :

" Language-specific settings {{{
    " Erlang {{{
        let g:erlang_folding = 1
        let g:erlangRefactoring = 1
    " }}}
    " Python {{{
        " pyflakes quickfix conflicting with RGrep/Ack quickfix results
        let g:pyflakes_use_quickfix = 0
        let python_highlight_all = 1
        autocmd BufWritePre *.py normal m`:%s/\s\+$//e ``
        autocmd FileType python set omnifunc=pythoncomplete#Complete
    " }}}
" }}}
" Plugin Settings {{{
    " Tagbar {{{
        nmap <F8> :TagbarToggle<CR>
        let g:tagbar_autofocus = 1
        let g:tagbar_compact = 1
    " }}}
    " NERDTree {{{
        map <Leader>n :NERDTreeToggle<CR>
        let NERDTreeIgnore=['\.pyc$', '\.rbc$', '\.beam$', '\~$']
        let NERDTreeHijackNetrw=1
        let NERDTreeQuitOnOpen=0
        let NERDTreeShowBookmarks=0
        let NERDTreeShowFiles=1
        let NERDTreeStatusline=0
        let NERDTreeMinimalUI=1
        let NERDTreeChDirMode=2
        let NERDChristmasTree=1
        let NERDTreeDirArrows=1
        let NERDTreeWinSize=20
    " }}}
    " Wimviki {{{
        map <leader>W <Plug>VimwikiIndex
    " }}}
    " Json {{{
        map <leader>J <Esc>:%!json_xs -f json -t json-pretty<CR> " format json
    " }}}
    " Buffergator {{{
        let g:buffergator_viewport_split_policy = "T"
        let g:buffergator_sort_regime = "mru"
        let g:buffergator_split_size = 10
        let g:buffergator_autodismiss_on_select = 1
    " }}}
    " Showmarks {{{
        let g:showmarks_ignore_type="hprmq"
        let g:showmarks_include="qwertyuiopasdfghjklzxcvbnm"
        nno ' `
        if has("gui_running")
             let g:showmarks_enable=1
        else
            let g:showmarks_enable=0
            let loaded_showmarks=1
        endif

        if has("autocmd")
            fun! <SID>FixShowmarksColours()
                if has('gui')
                    hi ShowMarksHLl gui=bold guifg=#a0a0e0 guibg=#2e2e2e
                    hi ShowMarksHLu gui=none guifg=#a0a0e0 guibg=#2e2e2e
                    hi ShowMarksHLo gui=none guifg=#a0a0e0 guibg=#2e2e2e
                    hi ShowMarksHLm gui=none guifg=#a0a0e0 guibg=#2e2e2e
                    hi SignColumn   gui=none guifg=#f0f0f8 guibg=#2e2e2e
                endif
            endfun
            if v:version >= 700
                autocmd VimEnter,Syntax,ColorScheme * call <SID>FixShowmarksColours()
            else
                autocmd VimEnter,Syntax * call <SID>FixShowmarksColours()
            endif
        endif
    " }}}
    " Gist {{{
        let g:gist_clip_command = 'pbcopy'
        let g:gist_detect_filetype = 1
    " }}}
" }}}
" Other {{{
    " Highlight word {{{
    hi Wtf1         guifg=#000000 guibg=#00ff00 gui=NONE
    hi Wtf2         guifg=#ffffff guibg=#ff0000 gui=NONE
    hi Wtf3         guifg=#000000 guibg=#ffff00 gui=NONE
    nnoremap <silent> <leader>hh :execute 'match Wtf1 /\<<c-r><c-w>\>/'<cr>
    nnoremap <silent> <leader>h1 :execute 'match Wtf1 /\<<c-r><c-w>\>/'<cr>
    nnoremap <silent> <leader>h2 :execute '2match Wtf2 /\<<c-r><c-w>\>/'<cr>
    nnoremap <silent> <leader>h3 :execute '3match Wtf3 /\<<c-r><c-w>\>/'<cr>

    " }}}
" }}}
