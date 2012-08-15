" Copyright 2010 James Peach
"
" Licensed under the Apache License, Version 2.0 (the "License");
" you may not use this file except in compliance with the License.
" You may obtain a copy of the License at
"
"     http://www.apache.org/licenses/LICENSE-2.0
"
" Unless required by applicable law or agreed to in writing, software
" distributed under the License is distributed on an "AS IS" BASIS,
" WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
" See the License for the specific language governing permissions and
" limitations under the License.

" Basic settings.
set nocompatible	" Don't be vi compatible
set softtabstop=4
set shiftwidth=4
set textwidth=79
set expandtab
set smarttab
set autoindent
set showmatch
set cindent
set visualbell
set laststatus=2	" Last window always gets a status line
set statusline=\ [%n]\ %f\ %m%r%=%l/%L\
set modeline		" Turn modeline support on
set modelines=2
set matchpairs+=<:>	" Add bracket matching for angled brackets
syntax on

" Be paranoid, and automatically set up autobackup
if (!isdirectory(expand("~/tmp/vim.backup")))
    call mkdir(expand("~/tmp/vim.backup"), "p", 0755)
endif
set backupdir=~/tmp/vim.backup
set backup
set writebackup
set backupext=.bak

" Key bindings
map <C-A> :b#<CR>
map <C-N> :bn<CR>
map <C-P> :bp<CR>
"
" Make regex special characters special by default (see :help pattern).
noremap / /\v
vnoremap / /\v
"
call pathogen#infect()
filetype plugin indent on
"
" special handling for different file types
autocmd BufNewFile,BufRead *.log set tw=65
autocmd BufNewFile,BufRead *.txt set tw=65
autocmd BufNewFile,BufRead *.msg set tw=65
" Turn off funky tabbing modes for makefiles
autocmd BufNewFile,BufRead *[Mm]akefile* set sts=0 noet ts=8 sw=8
autocmd BufNewFile,BufRead *.make set sts=0 noet ts=8 sw=8
"
" Enable search-related options: highlight matches in a search
" (hls), show the current matching pattern as you search (is),
" ignore case (ic) unless you are searching for both upper and
" lowercase letters (scs).
set hlsearch is ic scs
map <CR> :nohlsearch<CR>

" Return the current terminal (tab) title
function! TerminalTitle()
    return system("osascript" .
	\" -e 'tell application \"Terminal\"'" .
	\" -e 'get the custom title of the selected tab of the front window'" .
	\" -e 'end tell'")
endfunction

" Set up cscope integration
function! CscopeInit()
    if !has("cscope")
	return
    endif

    set csto=0	    " Search cscope before tags.
    set nocsverb    " Don't be verbose

    " For cscope, we are expecting cscope.db, cscope.db.po, cscope.db.in. For
    " global, we are expecting GTAGS. We prefer global to cscope.

    if filereadable("/opt/local/bin/gtags-cscope") && filereadable("GTAGS")
	set cscopeprg=/opt/local/bin/gtags-cscope
	:execute ":cs add GTAGS"
    elseif filereadable("/opt/local/bin/cscope") && filereadable("cscope.db")
	set cscopeprg=/opt/local/bin/cscope
	:execute ":cs add cscope.db . -q"
    elseif filereadable("/usr/local/bin/cscope") && filereadable("cscope.db")
	set cscopeprg=/usr/local/bin/cscope
	:execute ":cs add cscope.db . -q"
    elseif filereadable("/usr/bin/cscope") && filereadable("cscope.db")
	:execute ":cs add cscope.db . -q"
    endif

    " css: Find symbol
    map css :cs find s <C-R>=expand("<cword>")<CR><CR>
    " csg: Find definition
    map csg :cs find g <C-R>=expand("<cword>")<CR><CR>
    " csc: Find callers
    map csc :cs find c <C-R>=expand("<cword>")<CR><CR>
    " csd: Find callees
    map csd :cs find d <C-R>=expand("<cword>")<CR><CR>
    " cst: Find text string
    map cst :cs find t <C-R>=expand("<cword>")<CR><CR>
    " cse: Find egrep pattern
    map cse :cs find e <C-R>=expand("<cword>")<CR><CR>
    " csf: Find file
    map csf :cs find f <C-R>=expand("<cfile>")<CR><CR>
    " csi: Find files #including this
    map csi :cs find i <C-R>=expand("<cfile>")<CR><CR>

endfunction

call CscopeInit()

" shift-q: Quilt shortcut
map <S-Q> :!$HOME/bin/q<Space>

" Highlight trailing whitespace.
if has("syntax") && (&t_Co > 2 || has("gui_running"))
    syntax on
    function! ActivateInvisibleCharIndicator()
	syntax match TrailingSpace "[ \t]\+$" display containedin=ALL
	highlight TrailingSpace ctermbg=Red
    endf
    autocmd BufNewFile,BufRead * call ActivateInvisibleCharIndicator()
endif

" Autostrip trailing whitespace on save.
" too dangerous - screws me when making quilt patches
" autocmd BufWritePre * :%s/\s\+$//e

if has("gui_running")
    set guifont=Menlo\ Regular:h12
    set lines=60
    set guioptions-=T " Hide the GUI toolbar
    set background=dark
    colorscheme solarized
else
    colorscheme default
endif

" Set up the fugitive plugin
runtime plugin/fugitive.vim
if exists("*fugitive#statusline")
    set statusline=\ [%n]\ %{fugitive#statusline()}\ %f\ %m%r%=%l/%L\
endif

" Load a decent man page viewer
runtime ftplugin/man.vim
map K :Man <C-R>=expand("<cword>")<CR><CR>

" Before we set vim to update the terminal title, save the previous terminal
" title so that we can restore it on exit. Otherwise you get a ridiculous
" "thanks for flying with vim" title.
let &titleold=TerminalTitle()
set title

" Load .vimrc and .exrc files in the current working directory
set exrc
" But do it carefully
set secure
