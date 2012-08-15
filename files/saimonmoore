" This is Saimon Moore's .vimrc file
" vim:set ts=2 sts=2 sw=2 expandtab:

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" VUNDLE PLUGINS
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if !executable('git')
  echo "[Vim]: Git is not installed and is required."
  exit
endif

if !isdirectory(expand('~/.vim/bundle/vundle'))
  silent !git clone git://github.com/gmarik/vundle.git ~/.vim/bundle/vundle
  let s:bootstrap=1
endif

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" let Vundle manage Vundle
" required! 
Bundle 'gmarik/vundle'

" My Bundles here:

" original repos on github
" Fast fuzzy lookup for files in project
Bundle 'wincent/Command-T'

" Git wrapper: Mostly just use for :Gblame
Bundle 'tpope/vim-fugitive'

" Rails tools: Mostly just use for :A,:R
Bundle 'tpope/vim-rails.git'

" Intelligent adding of end
Bundle 'tpope/vim-endwise'

" Comment/Uncomment blocks of code via \\\
Bundle 'tpope/vim-commentary'

" Wrapper around ack tool:  :Ack -a 'bla' where/to/look
Bundle 'mileszs/ack.vim'

" Easily change wrapping characters
Bundle 'tpope/vim-surround'

" Snippets of code. Occasional use
Bundle 'msanders/snipmate.vim'

" Align blocks of code to a particular char. Occasional use
Bundle 'tsaleh/vim-align'

" Syntax highlighting
Bundle 'scrooloose/syntastic'

" Autocloses brackets/parenthese
Bundle 'Townk/vim-autoclose.git'

" Scratch pad
Bundle 'duff/vim-scratch.git'

" defines a new text object representing lines of code at the same indent level.
Bundle 'michaeljsmith/vim-indent-object'

" Support for user defined text object. Dependency of vim-textobj-rubyblock
Bundle 'kana/vim-textobj-user.git'

" Select ruby blocks: vir/var
Bundle 'nelstrom/vim-textobj-rubyblock.git'

" % Matches corresponding braces/brackets etc
Bundle 'tsaleh/vim-matchit'

" Makes period (repeat) work with vim-surround
Bundle 'tpope/vim-repeat'

" Restore previous session
Bundle 'fesplugas/vim-session'

" Improved javascript identation
Bundle 'pangloss/vim-javascript'

" Kickass javascript auto correction
Bundle 'manalang/jshint.vim.git'

" Jade syntax highlighting and identation
Bundle 'digitaltoad/vim-jade.git'

" Syntax highlighting for markdown
Bundle 'tpope/vim-markdown'

" HAML syntax highlighting and identation
Bundle 'tpope/vim-haml'

" Make vim play nicely with iterm and tmux
Bundle "sjl/vitality.vim"

" vim-scripts repos
Bundle 'nginx.vim'

if exists('$TMUX')
  Bundle 'jgdavey/tslime.vim'
endif

if exists("s:bootstrap") && s:bootstrap
  unlet s:bootstrap
  BundleInstall
endif

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" BASIC EDITING CONFIGURATION
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set nocompatible

" allow unsaved background buffers and remember marks/undo for them
set hidden

" remember more commands and search history
set history=10000

" Whitespace stuff
set expandtab
set tabstop=2
set shiftwidth=2
set softtabstop=2
set list listchars=tab:\ \ ,trail:·

" highlight current line
" set cursorline
set cmdheight=2
set switchbuf=useopen
set numberwidth=5
set showtabline=2
set winwidth=79

set shell=bash

set term=xterm-color

" Prevent Vim from clobbering the scrollback buffer. See
" http://www.shallowsky.com/linux/noaltscreen.html
set t_ti= t_te=
" keep more context when scrolling off the end of a buffer
set scrolloff=3

set number
set ruler

" enable per-directory .vimrc files
set exrc

" disable unsafe commands in local .vimrc files
set secure

" Set encoding
set encoding=utf-8

" Searching
set showmatch
set hlsearch
set incsearch
" make searches case-sensitive only if they contain upper-case characters
set ignorecase smartcase

" Status bar
set laststatus=2

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

" display incomplete commands
set showcmd

" Store temporary files in a central spot
set backup
set backupdir=~/.backup,~/.tmp,~/tmp,/var/tmp,/tmp
set directory=~/.backup,~/.tmp,~/tmp,/var/tmp,/tmp

" clipboard osx support for terminal mode vim
set clipboard=unnamed

" Enable highlighting for syntax
syntax on

" load the plugin and indent settings for the detected filetype
filetype plugin indent on

" Tab completion
set wildmode=list:longest,list:full
set wildignore+=*.o,*.obj,.git,*.rbc,*.class,.svn,vendor/gems/*

" Make tab completion for files/buffers act like bash
set wildmenu

" Quick file finder. Search file with `:find <file>`.
set path=$PWD/**

let mapleader = ","

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" CUSTOM AUTOCMDS
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
augroup vimrcEx
  " Clear all autocmds in the group
  autocmd!
  autocmd FileType text setlocal textwidth=78
  " Jump to last cursor position unless it's invalid or in an event handler
  autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal g`\"" |
    \ endif

  "for ruby, autoindent with two spaces, always expand tabs
  autocmd FileType ruby,haml,eruby,yaml,html,javascript,sass,cucumber set ai sw=2 sts=2 et
  autocmd FileType python set sw=4 sts=4 et

  autocmd! BufRead,BufNewFile *.sass setfiletype sass 

  autocmd BufRead,BufNewFile {*.md,*.mkd,*markdown} set ft=markdown
  autocmd BufRead *.mkd  set ai formatoptions=tcroqn2 comments=n:&gt;
  autocmd BufRead *.markdown  set ai formatoptions=tcroqn2 comments=n:&gt;

  " Indent p tags
  "autocmd FileType html,eruby if g:html_indent_tags !~ '\\|p\>' | let g:html_indent_tags .= '\|p\|li\|dt\|dd' | endif

  " Don't syntax highlight markdown because it's often wrong
  autocmd! FileType mkd setlocal syn=off

  " Thorfile, Rakefile, Vagrantfile and Gemfile are Ruby
  autocmd BufRead,BufNewFile {Gemfile,Rakefile,Vagrantfile,Thorfile,config.ru}    set ft=ruby

  " add json syntax highlighting
  autocmd BufNewFile,BufRead *.json set ft=javascript

  "adding mapping for rabl files
  autocmd BufRead,BufNewFile *.rabl setf ruby

  "adding mapping for jade.erb files
  autocmd BufNewFile,BufReadPost *.jade.erb set filetype=jade

  au BufRead,BufNewFile /usr/local/etc/nginx/sites-available/* set ft=nginx

augroup END

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" COLOR
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Default theme for now
set background=dark

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" STATUS LINE
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set statusline=%<%f\ (%{&ft})\ %-4(%m%)%=%-19(%3l,%02c%03V%)

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" MISC KEY MAPS
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
map <leader>y "*y

" Move around splits with <c-hjkl>
nnoremap <c-j> <c-w>j
nnoremap <c-k> <c-w>k
nnoremap <c-h> <c-w>h
nnoremap <c-l> <c-w>l

" Insert a hash rocket with <c-l>
imap <c-l> <space>=><space>

" Can't be bothered to understand ESC vs <c-c> in insert mode
imap <c-c> <esc>

" Clear the search buffer when hitting return

":nmap <cr> :if !&readonly \|\| &modifiable \| :nohlsearch \| endif<cr>
function NoSearchHighlight()
    " execute \":echo &buflisted"
    " execute \":echo &filetype"
    if &filetype=="qf"
      execute "normal! \<cr>"
    else
      let @/ = ""
    endif
endfunction
noremap <cr> :call NoSearchHighlight()<CR>
nnoremap <leader><leader> <c-^>

" Switch between the last two files
nnoremap <leader><leader> <c-^>

" CTags
map <Leader>rt :!ctags --extra=+f -R --exclude=.git --exclude=log * ~/.rvm/gems/ruby-head/*<CR><CR>

" Format json
map <leader>jt <Esc>:%!python -m json.tool<CR>

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" OPEN FILES IN DIRECTORY OF CURRENT FILE
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
cnoremap %% <C-R>=expand('%:h').'/'<cr>
map <leader>e :edit %%"
map <leader>v :view %%

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" RENAME CURRENT FILE
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! RenameFile()
    let old_name = expand('%')
    let new_name = input('New file name: ', expand('%'), 'file')
    if new_name != '' && new_name != old_name
        exec ':saveas ' . new_name
        exec ':silent !rm ' . old_name
        redraw!
    endif
endfunction
map <leader>n :call RenameFile()<cr>

" =============== Ruby & Rails  ==============================
" Rails routes and Gemfile
imap <leader>gr :topleft :split config/routes.rb<cr>
map <leader>gg :topleft 100 :split Gemfile<cr>

map <leader>rs :%s/:\(\w\+\)/'\1'/gec<cr>

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" MULTIPURPOSE TAB KEY
" Indent if we're at the beginning of a line. Else, do completion.
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! InsertTabWrapper()
    let col = col('.') - 1
    if !col || getline('.')[col - 1] !~ '\k'
        return "\<tab>"
    else
        return "\<c-p>"
    endif
endfunction
inoremap <tab> <c-r>=InsertTabWrapper()<cr>
inoremap <s-tab> <c-n>

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" PROMOTE VARIABLE TO RSPEC LET
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! PromoteToLet()
  :normal! dd
  " :exec '?^\s*it\>'
  :normal! P
  :.s/\(\w\+\) = \(.*\)$/let(:\1) { \2 }/
  :normal ==
endfunction
:command! PromoteToLet :call PromoteToLet()
:map <leader>p :PromoteToLet<cr>

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" PLUGIN CONFIGURATION
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" % to bounce from do to end etc.
runtime! macros/matchit.vim

" Enable syntastic syntax checking
let g:syntastic_enable_signs=1
let g:syntastic_quiet_warnings=1

" Command-T config
let g:CommandTMaxHeight=20


" Command-T tweaks for terminal vim
set ttimeoutlen=50

if &term =~ "xterm-color"
  let g:CommandTCancelMap     = ['<ESC>', '<C-c>']
  let g:CommandTSelectNextMap = ['<C-n>', '<C-j>', '<ESC>OB']
  let g:CommandTSelectPrevMap = ['<C-p>', '<C-k>', '<ESC>OA']
endif

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" MAPS TO JUMP TO SPECIFIC COMMAND-T TARGETS AND FILES
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! ShowRoutes()
  " Requires 'scratch' plugin
  :topleft 100 :split __Routes__
  " Make sure Vim doesn't write __Routes__ as a file
  :set buftype=nofile
  " Delete everything
  :normal 1GdG
  " Put routes output in buffer
  :0r! rake -s routes
  " Size window to number of lines (1 plus rake output length)
  :exec ":normal " . line("$") . "_ "
  " Move cursor to bottom
  :normal 1GG
  " Delete empty trailing line
  :normal dd
endfunction
map <leader>gR :call ShowRoutes()<cr>

map <leader>f :CommandTFlush<cr>\|:CommandT<cr>
map <leader>gf :CommandTFlush<cr>\|:CommandT %%<cr>
map <leader>ga :CommandTFlush<cr>\|:CommandT app<cr>
map <leader>gj :CommandTFlush<cr>\|:CommandT app/assets/javascripts<cr>
map <leader>gs :CommandTFlush<cr>\|:CommandT spec<cr>
map <leader>gv :CommandTFlush<cr>\|:CommandT vendor<cr>
map <leader>gc :CommandTFlush<cr>\|:CommandT app/controllers<cr>
map <leader>gm :CommandTFlush<cr>\|:CommandT app/models<cr>
map <leader>gh :CommandTFlush<cr>\|:CommandT app/helpers<cr>
map <leader>gl :CommandTFlush<cr>\|:CommandT lib<cr>
map <leader>go :CommandTFlush<cr>\|:CommandT config<cr>
map <leader>gt :CommandTFlush<cr>\|:CommandTTag<cr>

" CommandTBuffer mapping
nmap <Leader>. :CommandTFlush<cr>\|:CommandTBuffer<CR>

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" RUNNING TESTS (Gary Bernhardt & Francesc Esplugas & Jordi Romero & myself)
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Send command to tmux pane
function! s:send_test(executable)
  let s:executable = a:executable
  if s:executable == ''
    if exists("g:tmux_last_command") && g:tmux_last_command != ''
      let s:executable = g:tmux_last_command
    else
      let s:executable = 'echo "Warning: No command has been run yet"'
    endif
  endif
  call Send_to_Tmux("".s:executable."\n")
  :redraw!
endfunction

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
        let cmd = "script/features " . a:filename
    else
        if filereadable("script/test")
            let cmd = "script/test " . a:filename
        elseif filereadable("Gemfile")
            let cmd = "bundle exec rspec --color " . a:filename
        else
            let cmd = "rspec --color " . a:filename
        end
    end

    if exists('*Send_to_Tmux')
      return s:send_test(cmd)
    else
      exec ":!" . cmd
    endif
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

" Run this file
map <leader>T :call RunTestFile()<cr>
" Run only the example under the cursor
map <leader>t :call RunNearestTest()<cr>
" Run all test files
map <leader>a :call RunTests('spec')<cr>

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Scratch pad
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! ToggleScratch()
  if expand('%') == g:ScratchBufferName
      quit
  else
      Sscratch
  endif
endfunction

map <leader>s :call ToggleScratch()<CR>

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" OpenChangedFiles COMMAND
" Open a split for each dirty file in git
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! OpenChangedFiles()
  only " Close all windows, unless they're modified
  let status = system('git status -s | grep "^ \?\(M\|A\)" | cut -d " " -f 3')
  let filenames = split(status, "\n")
  exec "edit " . filenames[0]
  for filename in filenames[1:]
    exec "sp " . filename
  endfor
endfunction
command! OpenChangedFiles :call OpenChangedFiles()

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Miscellaneous functions
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" sum column of numbers in yanked register, save
" result to " register
function! Sum()
python << EOF
import vim

# find total from input
items = vim.eval("@0").split("\n")
floatsList = map(float, filter(lambda n: n != '', items))
total = sum(floatsList)

# set register and echo result
vim.command("call setreg('\"', '%s\n')" % total)
vim.command("echo '%s saved to clipboard'" % total)
EOF
endfunction

" word swapping functions
"
" To use gw to swap the current word with the next, without changing cursor position: (See note.)
:nnoremap <silent> gw "_yiw:s/\(\%#\w\+\)\(\_W\+\)\(\w\+\)/\3\2\1/<CR><c-o><c-l>
" To use gl to swap the current word with the previous, keeping cursor on
" current word: (This feels like "pushing" the word to the left.)
:nnoremap <silent> gl "_yiw?\w\+\_W\+\%#<CR>:s/\(\%#\w\+\)\(\_W\+\)\(\w\+\)/\3\2\1/<CR><c-o><c-l>

" To use gr to swap the current word with the next, keeping cursor on current word: (This feels like "pushing" the word to the right.)
:nnoremap <silent> gr "_yiw:s/\(\%#\w\+\)\(\_W\+\)\(\w\+\)/\3\2\1/<CR><c-o>/\w\+\_W\+<CR><c-l>

" To use g{ to swap the current paragraph with the next:
:nnoremap g{ {dap}p{

" To use gc to swap the current character with the next, without changing the cursor position:
:nnoremap <silent> gc xph

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Abbreviations
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
abbr W w
abbr Wq wq

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Persistant undo
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set undodir=~/.vim/undodir
set undofile
set undolevels=1000 "maximum number of changes that can be undone
set undoreload=10000 "maximum number lines to save for undo on a buffer reload
