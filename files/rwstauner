" vim: set ts=2 sts=2 sw=2 expandtab smarttab fdm=marker:
"this file works with unix.  you should too.
"
" TODO: learn more about tabs, tags, quickfix, loc list, plugins...

set nocompatible   " set this first as it can change other things

if version < 700
  echoerr "this vimrc requires vim 7"
endif

" [ encoding ] {{{

set     encoding=utf-8
set termencoding=utf-8

" this should be the default (with LANG=en_US.utf-8)
setglobal fileencodings=ucs-bom,utf-8,default,latin1

" }}}
" [ options ] {{{

set noautowriteall " i should probably turn this on
set   backspace=indent,start " allow backspacing over indent and start of insert (but not eol)
set   background=dark
set   completeopt=menuone,preview " show menu even with only one match
set   foldcolumn=2 " width
set noequalalways  " don't resize windows when i split, just split
set   esckeys      " allow arrow keys to work in insert mode (adjust timeoutlen if necessary)
set nogdefault     " disable this, but it's an interesting option to remember
set   hidden       " when closing a window hide it instead of unloading it
set   history=500  " number of items to rememeber for ex commands and searches
set   hlsearch     " hightlight matches when searching
set noincsearch    " too jumpy
set   joinspaces   " 2 spaces after punctuation when joining lines
set   laststatus=2 " always show statusline
set   lazyredraw   " don't redraw screen during macros
"set   linebreak    " has no effect when list is on
set   list         " show invisible chars ('listchars')
set   listchars=tab:▸\ ,extends:⇢,precedes:⇠,nbsp:☐,trail:⬚ "eol:¬, " hooray for unicode
set   magic        " too bad there's no set verymagic (but good for compatibility)
set   matchpairs+=<:>
set   modeline     " ensure modelines are honored
set nomore         " don't give more-style prompts, i use tmux
set   nrformats=octal,hex,alpha
set   number       " show line numbers
set   report=0     " show number of lines changed by a command
set   scrolloff=2  " show lines of context around cursor at top or bottom of screen
set nostartofline  " keep column position when jumping
set   shiftround   " >> to even numbered columns
set   shortmess=atToO " shorten file info messages
set   showbreak=⦉  " show start of wrapped lines
set   showcmd      " show unfinished command in the command line (right side)
set   showmode     " show vim mode at the bottom (insert/replace/visual)
"set   switchbuf=   " default is blank, but usetab could be interesting
set   timeout timeoutlen=3000 ttimeoutlen=100 " try to detect term keys but give me 3 sec to finish my command
set   tildeop      " make ~ an operator (that expects a motion command)
set   updatetime=2000 " ms to wait before CursorHold and writing swap to disk
set   wildmenu     " completion menu
set   wildmode=longest:full,full " complete 'til longest common string, then open menu
"set   wildignore+= " extra globs to ignore when doing file completion
set   winminheight=1 " leave x lines showing when shrinking windows
set   winminwidth=3  " ditto for columns: show more than foldcolumn
set   viminfo +=!,f1 " global (uppercase) vars, file marks

" combo options
set noexpandtab nosmarttab " off by default, enabled by filetype plugins
set ignorecase smartcase " searching for lowercase is case-insensitive (use \c \C to override)
set noshowmatch matchtime=1 " on insert highlight matching bracket for 0.x seconds

" TODO: investigate 'cpoptions'

" }}}
" [ undo ] {{{

" remember :display and redo-register

" :help undo-persistence
if exists("+undofile")
  set undofile
  set undodir=~/.vim/.cache/.undo " dir must already exist
  au BufWritePre /tmp/* setlocal noundofile
endif

" :help clear-undo
command! ClearUndo call ClearUndo()
function! ClearUndo()
  let old_undolevels = &undolevels
  set undolevels=-1
  exe "normal a \<BS>\<Esc>"
  let &undolevels = old_undolevels
  unlet old_undolevels
endfunction

" }}}
" [ formatting ] {{{

set   autoindent   " use previous line's indentation
set nosmartindent  " braces sound ok but i use # for comments more often than #ifdef
" 'cindent' is off by default, but may be useful to turn on for some filetypes
" we call "filetype indent on" later so 'indentexpr' can be customized by ft ($VIMRUNTIME/indent/)

set   textwidth=0  " don't wrap text by default (though many filetypes set this)

" see fo-table for descriptions of tcroqwan2vblmMB1
set  formatoptions +=crqbl  formatoptions -=towa
" i usually find 'o' more annoying than helpful
autocmd BufWinEnter * setlocal formatoptions -=o

"set   formatprg=fmt " better gq c-indent formatting
" cinoptions+=l1

" }}}
" [ statusline ] {{{

function! StatusLineFileAttr()
  return "(ft=" . &filetype . " fenc=" . &fileencoding . (&fileformat != "unix" ? " ff=" . &fileformat : "") . ")"
endfunction
" don't want stl=%!func() b/c it re-evaluates with each C-W (and vars get confused)
set statusline=%<%f\ \ %{StatusLineFileAttr()}\ \ %h%m%r\ %=\ buf#%n\ \ %-14.(%l/%L,%c%V%)\ %P

" }}}
" [ runtimepath ] {{{

" make it easier to inspect rtp
command! ShowRunTimePath echo substitute(&rtp, ',', "\n", 'g')

" dump misc. downloaded files in here instead of $HOME/.vim
set rtp ^=$HOME/.vim/unbundled rtp +=$HOME/.vim/unbundled/after

" }}}
" [ plugins ] {{{

filetype off " turn off to load plugins (we turn it on later)

" git clone https://github.com/gmarik/vundle ~/.vim/bundle/vundle/
set rtp +=~/.vim/bundle/vundle
call vundle#rc()
Bundle 'gmarik/vundle'

" define some vundle helper commands
runtime macros/lazy_bundle.vim

" TODO: consider these:
" https://github.com/zaiste/vimified
" https://github.com/mutewinter/dot_vim
" vimscripts: 'L9' + 'FuzzyFinder'

" enable repeating certain plugin actions with .
Bundle 'tpope/vim-repeat'

" view images
Bundle 'tpope/vim-afterimage'

" toggle comment state with \\\
Bundle 'tpope/vim-commentary'
" navigate various things back and forth with [x and ]x (t,l,q...)
Bundle 'tpope/vim-unimpaired'

" cursor jump selection with \\w or \\f
Bundle 'Lokaltog/vim-easymotion'

" custom text objects {{{

" better than just T/vt/ because it works across lines
let g:Textobj_defs = [
  \['/',     'Textobj_paired', '/'],
  \['!',     'Textobj_paired', '!'],
  \['<Bar>', 'Textobj_paired', '<Bar>'],
\]
Bundle 'doy/vim-textobj'

" }}}
" [ yankring ] save a list of previously yanked text {{{

let g:yankring_history_dir = '$HOME/.vim/.cache'
let g:yankring_manage_numbered_reg = 1

" my terminal sends Esc when I press Alt
let g:yankring_replace_n_pkey = '<Esc>,'
let g:yankring_replace_n_nkey = '<Esc>.'

function! YRRunAfterMaps()
  " make Y yank to the end of the line like D
  nnoremap Y   :<C-U>YRYankCount 'y$'<CR>
  " yr overrides 'p' on a visual selection but it pastes what was selected rather
  " than the previous item in the ring.  the original behavior works as i expect.
  xunmap p
endfunction

Bundle 'YankRing.vim'
nnoremap <silent> yr :YRShow<CR>
" switching windows loses the visual selection; this is what i mean:
xnoremap <silent> yr d:YRShow<CR>

" }}}

" visual undo browser
LazyCommand GundoToggle 'sjl/gundo.vim'
nnoremap <F12> :GundoToggle<CR>

" file browser
Bundle 'scrooloose/nerdtree'
"function StartUp() | if 0 == argc() | NERDTree | end | endfunction
"autocmd VimEnter * call StartUp()

" [ git ] {{{

" get the latest fixes for vim files
Bundle 'tpope/vim-git'
" powerful git integration
Bundle 'tpope/vim-fugitive'
" gitk inside vim (http://www.gregsexton.org/portfolio/gitv/)
LazyCommand Gitv 'gregsexton/gitv'

" }}}
" [ perl ] {{{

" use ack as &grepprg
LazyCommand Ack 'mileszs/ack.vim'

" syntax and ftplugin files for perl (plus pod, tt2...)
" include sql for tt2 queries
FTBundle ft=perl,sql 'petdance/vim-perl'

" syntax files for CPAN::Changes
FTBundle name=Changes 'rwstauner/vim-cpanchanges'

" enable :Perldoc command (via Pod::Simple::Vim)
"let g:Perldoc_path = expand("~/.vim/.cache/perldoc/")
"Bundle 'PERLDOC2'

" prove the current file and put colored results in a special window
"Bundle 'motemen/tap-vim'

" enable :make to run prove and put test failures in the quickfix
FTBundle name=*.t 'perlprove.vim'
  au BufRead,BufNewFile *.t set filetype=perl | compiler perlprove

" }}}
" [ filetypes ] {{{

let g:csv_hiGroup = 'CSVHiColumn'
let g:csv_highlight_column = 'y'
FTBundle ft=csv 'csv.vim'

" less css
FTBundle ft=less 'groenewege/vim-less'

" }}}
" [ syntastic ] automatic syntax check into location list {{{

let g:syntastic_check_on_open=0 " avoid start-up delay; check on save, not open
let g:syntastic_auto_jump=0
let g:syntastic_auto_loc_list=1
let g:syntastic_loc_list_height=5
"let g:syntastic_mode_map = { 'mode': 'active', \ 'active_filetypes': ['ruby', 'php'], \ 'passive_filetypes': ['puppet'] }
let g:syntastic_quiet_warnings=0
let g:syntastic_stl_format='[Syntax: %E{Err: %fe #%e}%B{, }%W{Warn: %fw #%w}]'

set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*
Bundle 'scrooloose/syntastic'

" }}}
" [ statline ] override statusline with something more powerful {{{

" TODO: compare to https://github.com/Lokaltog/vim-powerline
let g:statline_syntastic = 1
let g:statline_fugitive = 1
let g:statline_show_n_buffers = 1
let g:statline_show_encoding = 1
let g:statline_no_encoding_string = 'ascii'
let g:statline_filename_relative = 1
let g:statline_trailing_space = 1
let g:statline_mixed_indent = 1
" someday i might actually want these (for $work) but we're not using them yet
" could add something similar for perlbrew but I don't know what I'd want yet
let g:statline_rvm = 0
let g:statline_rbenv = 0
Bundle 'millermedeiros/vim-statline'

" }}}
" [ slime ] pass vim text to a repl via terminal multiplexer {{{

if $MULTIPLEXER != ""
  " do we want to autoload via the mappings?
  "nmap <C-c><C-c> :SlimeREPL<CR>

  command SlimeREPL call SlimeREPL()
  function SlimeREPL()
    " configure and load plugin
    if !exists("g:slime_paste_file")
      let g:slime_target = $MULTIPLEXER
      let g:slime_paste_file = tempname() | " my tmux has issues with pipes
      LazyBundle 'jpalardy/vim-slime'
      " plugin won't be automatically loaded at this point, so do it manually
      runtime plugin/slime.vim
    endif

    if $MULTIPLEXER == "tmux"
      " split to put repl below
      call system("tmux split-window -v")
      " move focus back to original
      call system("tmux select-pane -t :.-1")
    endif

    " slime mappings should be installed
    "normal <C-c><C-c>
  endfunction
endif

" }}}
FixRunTimePath
" }}}

command SourceCodeStyle setlocal ts=2 sts=2 sw=2 expandtab smarttab

" [ tags ] {{{

"set tags+=~/.vim/tags/ptags " cpan: Vim::Tags
command -nargs=1 -complete=tag SpTag new | tag <args>
nmap <Leader>[t :sp +tN<CR>
nmap <Leader>]t :sp +tn<CR>
" I'd like a plugin that explores my whole tags file, but these only operate
" on the current buffer (which I haven't found useful yet)
"Bundle 'taglist.vim'
"Bundle 'majutsushi/tagbar'

" }}}
" [ misc ]

"use this to keep screen from hanging on load, but set it back so i can use mouse wheel and click to select windows (hooray for hacks)
"set ttymouse=xterm2
"set mouse=a
"set ttymouse=xterm

"for TOhtml
let use_xhtml = 1
let html_use_css = 1
let html_no_pre = 1

" [ term ] {{{

" fix ctrl-arrow to work in command line mode (:help term.txt)
" vim doesn't have t_XX codes for C-arrow but S-arrow performs the same function
set t_#4=[1;5D
set t_%i=[1;5C
" make ctrl-pg up/down cycle tabs like they're supposed to
"set t_K3=[5;5~
"set t_K5=[6;5~
"nmap <kPageUp>   gT
"nmap <kPageDown> gt

" don't clear the screen (no termcap) when exiting vim or executing external commands
set t_ti= t_te=

" 256 color detection works
" (at least with gnome-terminal TERM=xterm-256color tmux TERM=screen-256color)

" 16 colors
"if has("terminfo")
"	set t_Co=16
"	set t_AB=[%?%p1%{8}%<%t%p1%{40}%+%e%p1%{92}%+%;%dm
"	set t_AF=[%?%p1%{8}%<%t%p1%{30}%+%e%p1%{82}%+%;%dm
"else
"	set t_Co=16
"	set t_Sf=[3%dm
"	set t_Sb=[4%dm
"endif
"" 8 colors
"if &term =~ "xterm"
"	if has("terminfo")
"		set t_Co=8
"		set t_Sf=[3%p1%dm
"		set t_Sb=[4%p1%dm
"	else
"		set t_Co=8
"		set t_Sf=[3%dm
"		set t_Sb=[4%dm
"	endif
"endif

" }}}

"give me the Man command (but I'll just use the one that comes with)
if exists(":Man") != 2
	com -nargs=+ Man call ManDelay(<f-args>)
	function ManDelay (cmd)
		let manplugin = expand("$VIMRUNTIME/ftplugin/man.vim")
		if filereadable(manplugin)
			echo "loading Man plugin..."
			delcommand Man
			exe "source " . manplugin
			exe "Man " . a:cmd
      " we're in the "man" window now
      set nonumber
		else
			echoe "Man plugin not found"
		endif
	endfunction
end

" suggested by motion.txt
":map [[ ?{<CR>w99[{
":map ][ /}<CR>b99]}
":map ]] j0[[%/{<CR>
":map [] k$][%?}<CR>

" highlight conflict markers
au BufReadPost * call matchadd("ErrorMsg", '^\(<\|=\|>\)\{7\}\([^=].\+\)\?$')
" highlight todo messages in any syntax
au BufReadPost * call matchadd("ToDo", '\c\v(TODO|FIXME|NOTE|XXX|HACK|TBD|EXPERIMENTAL|BODGE)')

" [ colorscheme ] {{{

if $SOLARIZED > 0
  Bundle 'altercation/vim-colors-solarized'
  let g:solarized_termtrans=1
  if $SOLARIZED == 256
    let g:solarized_termcolors=256
  endif
  colorscheme solarized
elseif filereadable(expand("~/.vim/colors/wounded.vim")) | colorscheme wounded | endif

" }}}

syntax enable
filetype indent plugin on

"autocommands for specific file types
"when i set textwidth to 0, i want it to be 0!
autocmd! BufRead *.txt

" restore previous cursor position (:help last-position-jump)
au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g`\"" | endif

" open the fold if the initial position is inside one
au BufWinEnter * if !exists("b:did_zv") | exe "normal zv" | let b:did_zv = 1 | endif

" open (or close) the quickfix window after make/grep commands
autocmd  QuickFixCmdPost *make*,*grep* cwindow

"let s:do_lwindow = 0
"autocmd  QuickFixCmdPost *lmake*,*lgrep* let s:do_lwindow = 1
"autocmd  BufWinEnter * if s:do_lwindow | lwindow | let s:do_lwindow = 0 | endif

"autocmd  BufWinEnter * if !empty(getloclist(0)) | lwindow | endif

" simulate readline in command mode {{{

cnoremap <C-A> <Home>
cnoremap <C-E> <End>
" make alt-D delete the next word by moving over and then deleting back
cnoremap <A-D> <C-Right><C-W>
" my terminal makes it an escape
cmap d <A-D>

" }}}
" [ commands ] {{{

" stupid fingers (either too fast or too slow...)
command -nargs=? -complete=dir -complete=file W w <args>
command -nargs=+ -complete=dir -complete=file Grep execute "grep " . (<q-args>) | copen
command -bang Q q<bang>
command -bang Qall qall<bang>
command Wq wq
command WQ wq
command Wn wn
command WN wN
command Args args
command -nargs=? -complete=dir -complete=file Sp sp <args>
command Mkpath !mkdir -p %:h
command MkPath Mkpath

command EightyCharacters call MaxLineLength(80)
command -nargs=? MaxLineLength call MaxLineLength(<args>)
command ModeLine exe "norm O" . printf(&cms, " vim: set ts=2 sts=2 sw=2 expandtab smarttab:")
"
" using named register ("p) is easier than escaping expr reg ("=)
"command! -nargs=1 -bang -complete=expression Put let @p = <args> | put<bang> p
command! -nargs=1 -bang -complete=expression Put call append(line(".") - ('<bang>' == '!' ? 1 : 0), <args>)

command -nargs=1 -complete=option 	Set 	set <args>
command -nargs=1 -complete=file 	Echo 	echo <q-args>
command -nargs=1 -range				PerlDo 	call PerlDo(<q-args>)
command -nargs=1 -complete=file 	Rename 	call RenameCurrent(<q-args>)
command -nargs=+ -range 			CommentSection call CommentSection(<f-args>)

command -nargs=1 FoldComments	call FoldComments(<f-args>)
command! -nargs=1 TabWidth exe "setlocal ts=" . <args> . " sts=" . <args> . " sw=" . <args>

if exists("+cursorline")
	command HighlightPosition 	set cursorcolumn! | set cursorline!
endif

command -nargs=1 -complete=dir -complete=file Arge 99arge <args>
command -nargs=+ -complete=custom,XMLargumentCompletion		Xt 	call XMLtag(0,<f-args>)
command -nargs=+ -complete=custom,XMLargumentCompletion -range 	Xv	call XMLtagV(<f-args>)
command -nargs=+ -complete=custom,XMLargumentCompletion		Xa	call XMLattr(<f-args>)

command SynStack for id in synstack(line("."), col(".")) | echo synIDattr(id, "name") . " => " . synIDattr(synIDtrans(id), "name") | endfor
command XMLmode call XMLmode()

command -range=% TabbedToAsciiTable <line1>,<line2>! perl -MText::ASCIITable -e '$t = Text::ASCIITable->new; $t->setCols(split(/\t/, scalar <STDIN>)); $t->addRow(split(/\t/)) for <STDIN>; print $t'
" }}}

" [ mappings ] {{{
" <Leader> == 'mapleader' (default: "\")

" ctrl-up/down (like ctrl-e/y but with one hand)
nnoremap [1;5A <C-y>
nnoremap [1;5B <C-e>
" shift-up/down
nnoremap [1;2A <C-y>
nnoremap [1;2B <C-e>


" thanks to sartak for these (https://github.com/sartak/conf/blob/master/vimrc): {{{

" Hit <C-a> in insert mode after a bad paste (thanks absolon) {{{
inoremap <silent> <C-a> <ESC>u:set paste<CR>.:set nopaste<CR>gi
" }}}
" spacebar (in command mode) inserts a single character before the cursor
nmap <Space> i <Esc>r
" up and down move by virtual line
nmap <Up>   gk
nmap <Down> gj
" keep visual selection on in/out-dent
xnoremap < <gv
xnoremap > >gv

" Swap ` (preserves which column the cursor was in) and ' (which does not)
nnoremap ' `
nnoremap ` '

" }}}

" borrow idea from sartak and add 'zv' to auto-open folds with search results:
" now search commands will re-center the screen
if 0
  nmap n   nzzzv
  nmap N   Nzzzv
  nmap *   *zzzv
  nmap #   #zzzv
  nmap g* g*zzzv
  nmap g# g#zzzv
endif

" TODO: consider swapping '*' and 'g*' (and '#' and 'g#')

" thanks to doy for these (https://github.com/doy/conf/blob/master/vimrc): {{{
" F5 to :make {{{
map  <F5> :make<CR><CR><C-W>k
imap <F5> <C-O>:make<CR><CR><C-O><C-W>k
" }}}
" Painless spell checking (F11) {{{
function! s:spell()
    if !exists("s:spell_check") || s:spell_check == 0
        echo "Spell check on"
        let s:spell_check = 1
        setlocal spell spelllang=en_us
    else
        echo "Spell check off"
        let s:spell_check = 0
        setlocal spell spelllang=
    endif
endfunction
map <F11> :call <SID>spell()<CR>
imap <F11> <C-o>:call <SID>spell()<CR>
" }}}
" }}}

" re-highlight last search without moving cursor
nmap <Leader>/h :set hlsearch<CR>
" unhighlight last search
nmap <Leader>/n   :nohlsearch<CR>

" retab (remove the tabs from) the current line
nnoremap <Leader><Tab> :.retab<CR>
vnoremap <Leader><Tab> :retab<CR>gv

" maximize current window
nmap <C-w>* <C-w>_<C-w>\|

"goto file by adding it to the argument list
nmap <Leader>f 			:call ArgeCfile()<CR>
nmap <Leader>F 			:99arge <cfile><CR>

map <Leader>o :call <SID>SpaceLines()<CR>

nmap <Leader>J			gJkgJ
"CamelCase -> underscore
nmap <silent> <Leader>_ 	i_gu2l
vmap <silent> <Leader>_ 	<Esc>:set lz<CR>`>a`<i:s/\v([a-z])([A-Z])/\1_\l\2/g<CR>gJkgJ:set nolz<CR>:redraw<CR>:silent noh<CR>
"mappings for dynamic characters
map  <silent> <Leader>! 	:call Bang()<CR>
nmap <silent> <Leader>b 	:call InBetween("",0)<CR>
nmap <silent> <Leader>B 	:call InBetween("",1)<CR>
nmap <silent> <Leader>c 	:call InBetween("c",0)<CR>
nmap <silent> <Leader>C 	:call InBetween("c",1)<CR>
nmap <silent> <Leader>d 	:call InBetween("d",0)<CR>
nmap <silent> <Leader>D 	:call InBetween("d",1)<CR>
nmap <silent> <Leader>x 	:call InBetween("x",1)<CR>
nmap <silent> <Leader>X 	:call InBetween("x",0)<CR>
nmap <silent> <Leader>v 	:call InBetween("v",0)<CR>
nmap <silent> <Leader>V 	:call InBetween("v",1)<CR>
nmap <silent> <Leader>y 	:call InBetween("y",0)<CR>
nmap <silent> <Leader>Y 	:call InBetween("y",1)<CR>
nmap <silent> <Leader>s 	:<C-U>call SurroundCword(0)<CR>
nmap <silent> <Leader>S 	:<C-U>call SurroundCword(1)<CR>
nmap <silent> <Leader>t 	:<C-U>call SurroundTill(0,0)<CR>
nmap <silent> <Leader>T 	:<C-U>call SurroundTill(0,1)<CR>
nmap <silent> <Leader>r 	:<C-U>call SurroundTill(1,1)<CR>
nmap <silent> <Leader>R 	:<C-U>call SurroundTill(1,0)<CR>
vmap <silent> <Leader>s 	:call SurroundSelection()<CR>
"POD formatting codes
nmap <silent> <Leader>p 	:<C-U>call SurroundCword(0,"<",">","F<i".toupper(nr2char(getchar())))<CR>
nmap <silent> <Leader>P 	:<C-U>call SurroundCword(1,"<",">","F<i".toupper(nr2char(getchar())))<CR>
vmap <silent> <Leader>p 	:call SurroundSelection("<",">","i".toupper(nr2char(getchar())))<CR>
"POD
nmap <silent> <Leader>= 	:call Pod("n")<CR>
vmap <silent> <Leader>= 	:call Pod("v")<CR>
"character manipulation
"nmap <silent> <Leader>cs 	:call SpanishCharacters(    )<CR>
"nmap <silent> <Leader>ch 	:call HtmlEscape(    )<CR>
" html paragraph
"nmap <silent> <Leader>hp 	:call XMLtag( 0, "p" )<CR>
"nmap <silent> <Leader>hP 	:call XMLtag( 1, "p" )<CR>
nmap <silent> <Leader>hp 	:norm {o<p>}O</p>
nmap <silent> <Leader>hP 	:norm o</p>oo<p>
vmap <silent> <Leader>hp 	:call XMLtagV(   "p" )<CR>
" html div
nmap <silent> <Leader>hd 	:norm {o<div>}O</div>
nmap <silent> <Leader>hD 	:norm o</div>oo<div>
"html tags
nmap <silent> <Leader>hb 	:call XMLtag( 0, "b" )<CR>
nmap <silent> <Leader>hB 	:call XMLtag( 1, "b" )<CR>
vmap <silent> <Leader>hb 	:call XMLtagV(   "b" )<CR>
nmap <silent> <Leader>he 	:call HtmlEscape(    )<CR>
nmap <silent> <Leader>hi 	:call XMLtag( 0, "i" )<CR>
nmap <silent> <Leader>hI 	:call XMLtag( 1, "i" )<CR>
vmap <silent> <Leader>hi 	:call XMLtagV(   "i" )<CR>
nmap <silent> <Leader>hu 	:call XMLtag( 0, "u" )<CR>
nmap <silent> <Leader>hU 	:call XMLtag( 1, "u" )<CR>
vmap <silent> <Leader>hu 	:call XMLtagV(   "u" )<CR>
nmap <silent> <Leader>hs 	:call XMLtag( 0, "span", "class" )<CR>
nmap <silent> <Leader>hS 	:call XMLtag( 1, "span", "class" )<CR>
vmap <silent> <Leader>hs 	:call XMLtagV(   "span", "class" )<CR>
vmap <silent> <Leader>hS 	:call XMLtagV(   "span" )<CR>
nmap <silent> <Leader>hc 	:call XMLattr(   "class" )<CR>
nmap <Leader>hr 		i<lt>br /><Esc>
nmap <Leader>hR 		A<lt>br /><Esc>
nmap <Leader>hh 		i<lt>hr /><Esc>
nmap <Leader>hH 		A<lt>hr /><Esc>
nmap <Leader>h! 		A --><Esc>I<!-- <Esc>l

" TODO: fix these to use text objects
"upper and lower case current word or selection
nmap <Leader>u 			wgUbe
nmap <Leader>l 			wgube
nmap <Leader>U 			WgUBE
nmap <Leader>L 			WguBE
vmap <Leader>u 			<Esc>`>gUlgU`<
vmap <Leader>l 			<Esc>`>gulgu`<

"surround character/selection with spaces
nmap <Leader><space> 		i <Esc>la <Esc>
vmap <Leader><space> 		`>a <Esc>`<i <Esc>
"clone(gemini) current character,word,selection
nmap <Leader>gc			ylp
nmap <Leader>gw			wbywep
nmap <Leader>gW			WByWEp
vmap <Leader>g 			y`>p
"search for the current selection ('as is')
vmap <Leader>/ 			yq/p0i\V

" Ovid: show first commit where term under cursor was added
" http://twitter.com/OvidPerl/status/28395223746875392
nmap <leader>1 :!git log --reverse -p -S<cword> %<cr>
" Ovid: handy if hacking urls
" http://twitter.com/OvidPerl/status/28076709865586688
vnoremap <leader>un :!perl -MURI::Escape -e 'print URI::Escape::uri_unescape(do { local $/; <STDIN> })'<cr>

" }}}

" [ functions ] {{{

function ArgeCfile() "open filename under cursor at the end of the current argument list.
	let edit_cmd = ":99arge "
	"allow all the coolness of the gf command, but don't go losing files
	norm gf
	exe edit_cmd . "%"
	return
"	"find cursor file relative to current file
"	let adddir = fnamemodify( expand("%"), ":p:.:h")
"	if adddir != ""
"		let adddir = adddir . "/"
"	endif
"	let addfile = simplify( adddir . expand("<cfile>") )
"
"	if filereadable(addfile)
"		execute edit_cmd . addfile
"	else
"		let addfile = simplify( expand("<cfile>:p:.") )
"		"let addfile = simplify( expand("%:p:h") . "/" . expand("<cfile>") )
"		if filereadable(addfile)
"			execute edit_cmd . addfile
"		else
"			echoe "File Not Found"
"		endif
"	endif
endfunction
function Bang() range "external commands
	let commandchar = nr2char( getchar() )
	if commandchar == "x"
		let commandarg = nr2char( getchar() )
		let i = 1
		while i <= v:count1
			let i = ( i + 1 )
			execute ":silent ! ~/bin/xmmskeys -" . commandarg 
			redraw!
		endwhile
	endif
endfunction

function CleanupWordPaste() range
"	'<,'>s/–/.../g
	'<,'>s/–/--/g
	'<,'>s/’/'/g
	'<,'>s/[“”]/"/g
endfunction

"Csomething generally means current something
function Cline(...) "offset (-above or +below cursor)
	return getline(line(".") + ( a:0 ? a:1 : 0))
endfunction
function Cchar(...) "offset (-left or +right of cursor)
	return getline(line("."))[col(".") - 1 + ( a:0 ? a:1 : 0)]
endfunction
function Cword(...) "unrestrictive boundaries
	return expand( "<c" . ( a:0 && a:1 ? "WORD" : "word" ) . ">" )
endfunction

" wrap visual selection in a commented [section] block
function CommentSection(section) range
  let section = "[ " . a:section . " ]"
  exe "norm '>o" . printf(&commentstring, " } " . section)
  exe "norm '<O" . printf(&commentstring, " "   . section . " {")
endfunction

function <SID>SpaceLines() range
  let l:pos = getpos(".")
  exe "norm " . a:firstline . "GO" . (a:lastline + 1) . "Go"
  let l:pos[1] += 1
  call setpos(".", l:pos)
endfunction

function! MaxLineLength(...)
  " default 80 characters
  call matchadd('ErrorMsg', '\%>' . (a:0 >= 1 ? a:1 : 80) . 'v.\+')
endfunction

function FoldComments(singleline) "Create folds of consecutive commented lines by sending singleline comment starter
	set foldmethod=expr
	execute "set foldexpr=getline(v:lnum)=~\\\"^" . a:singleline . "\\\""
endfunction

" highlight arbitrary matches in the file with a different color each time
command -nargs=+  Highlight  call Highlight(<q-args>)
let s:dynamicHighlight=0
function Highlight(hl)
  let s:dynamicHighlight = s:dynamicHighlight + 1
  let l:dhlmatch = "dynamicHighlight" . s:dynamicHighlight
  let l:hl = (&ignorecase ? "\\c" : "") . a:hl
  exe "highlight " . l:dhlmatch . " cterm=bold,underline ctermbg=white ctermfg=" . s:dynamicHighlight
  call matchadd(l:dhlmatch, l:hl)
endfunction

"html
function HtmlEscape(...) "range
	let oldreg = getreg('"') "preserve my previous yanking

	let reg = 'h'
	exe 'norm "' . reg . 'yl'
	let c = getreg(reg)

	let entities = { '&': 'amp', '<': 'lt', '>': 'gt', ' ': 'nbsp', '"': 'quot' }
	if has_key(entities, c)
		exe 'norm "_cl&' . entities[c] . ';'
	endif
	unlet entities

	call setreg('"', oldreg) "preserve my previous yanking
endfunction
"	function FancyCharacters(...) "range
"		let oldreg = getreg('"') "preserve my previous yanking
"	
"		let reg = 'c'
"		exe 'norm "' . reg . 'yl'
"		let c = getreg(reg)
"	
"		" …“”’–
"		let entities = {'…': '...', '“': '"', '”': '"', "’": "'", '–': '--'}
"		" insert using vim utf-8 escape sequence
"		"if has_key(entities, c)
"			"exe 'norm "_clu00' . entities[c]
"		"endif
"		unlet entities
"	
"		call setreg('"', oldreg) "preserve my previous yanking
"	endfunction
"	function SpanishCharacters(...) "range
"		let oldreg = getreg('"') "preserve my previous yanking
"	
"		let reg = 'c'
"		exe 'norm "' . reg . 'yl'
"		let c = getreg(reg)
"	
"		let entities = {'a': 'E1', 'e': 'E9', 'i': 'ED', 'n': 'F1', 'o': 'F3', 'u': 'FA', 'U': 'FC', '!': 'A1', '?': 'BF'}
"		" insert using vim utf-8 escape sequence
"		if has_key(entities, c)
"			exe 'norm "_clu00' . entities[c]
"		endif
"		unlet entities
"	
"		call setreg('"', oldreg) "preserve my previous yanking
"	endfunction
function ImageDataUri() range
	"echoerr if perl -MFile::Type -e 'print 1' != "1"
	set lz
	norm `>a
	norm `<i
	norm Icurl -s "A" | perl -MMIME::Base64 -0777 -MFile::Type -ne '($b = encode_base64($_)) =~ s/\n//g; print "data:" . File::Type->new->mime_type($_) . ";base64," . $b;'
	"norm $T.yekAdata:image/pA;base64,
	. ! /bin/bash
	norm gJkgJ
	set nolz
	redraw!
endfunction

function InBetween(cmd, inclusive, ...) "grab-command ([dxy]), inclusive, leftside, rightside
	let cmd = ( a:cmd != "" ? a:cmd : nr2char( getchar() ) )
	if a:inclusive
		let tillright = "f"
		let tillleft = "F"
	else
		let tillright = "t"
		let tillleft = "T"
	endif
	let startpos = col(".")
	let leftside = ( a:0 >= 1 ? a:1 : nr2char( getchar() ) )
	let rightside = ( a:0 >= 2 ? a:2 : MatchPair( leftside ) )
"	if Cchar() != rightside
"		execute "normal d" . tillright . rightside
"		call cursor(0, startpos)
"	endif
"	if Cchar() != leftside
"		execute "normal d" . tillleft . leftside . ( col(".") == startpos - 1 ? "x" : "" )
"	endif
	if Cchar() != leftside || ( leftside == rightside && stridx( strpart( Cline(), startpos ), rightside ) == -1 )
		execute "normal " . tillleft . leftside
	endif
		execute "normal " . ( cmd ) . tillright . rightside . ( cmd != "x" ? "" : "x" )
	if cmd == "c"
		normal l
		startinsert
	endif
endfunction

function LoadSyntax(...)
	let l:syn = a:0 > 0 ? a:1 : "tt2"
	let l:bcs = b:current_syntax
	unlet b:current_syntax
	exe "runtime! syntax/" . l:syn . ".vim"
	let b:current_syntax = l:bcs
endfunction

function MatchPair( character ) "find the complement to a given character (or return given character)
	let symbol = stridx( "([{<>}])", a:character )
	return symbol > -1 ? strpart( ")]}><{[(", symbol, 1 ) : a:character
endfunction
function PerlDo(pl) range
  "let l:oldpaste = &paste
  set paste
	norm `>ak
	let l2 = line('.') + 1 " next we'll drop them all down by one
	norm `<i
	let l1 = line('.')
	exe l1 . "," . l2 . "perldo " . a:pl
	exe l2
	norm gJ
	exe l1
	norm kgJ
  set nopaste
endfunction
function Pod(mode) range "vi mode
	let podstyle = nr2char( getchar() )
	if podstyle == "p"
		let startcmd = "O=pod"
		let endcmd = "o=cut"
		let podaction = 1
	elseif podstyle == "r"
		let startcmd = "O=begin"
		let endcmd = "o=end"
		let podaction = 1
	"elseif podstyle == "#" or podstyle == "3"
		"startcmd = "O=begin"
		"endcmd = "o=end"
	"elseif podstyle == "d" or podstyle == "x"
	else
		return
	endif
		
	if podaction == 1
		if a:mode == "v"
			execute "normal \e`>" . endcmd . "\e`<" . startcmd . "\e"
		else
			execute "normal " . startcmd . "\e" . (v:count + 1) . "j" . endcmd . "\e"
		endif
	endif
		"execute "normal \e`>" . ( ( i - 1 ) > 0 ? 2 * ( i - 1 ) . "l" : "" ) . ( a:0 >= 3 ? a:3 : "" ) . "a" . rightside . "\e`<" . ( a:0 >= 4 ? a:4 : "" ) . "i" . leftside  
		"execute "normal \e" . ( a:0 >= 4 ? a:4 : "" ) . "`>a" . rightside . "\e`<" . "i" . leftside . "\e" . ( a:0 >= 3 ? a:3 : "" ) 
endfunction

function RenameCurrent(name)
	let name = a:name
	if match(name, "/") == -1
		let name = expand("%:h") . "/" . name
	end
	call rename(expand("%"), name)
	exe "edit " . name
endfunction

function SurroundCword(...) range "unrestrictiveboundaries, leftside, rightside, endcommands, startcommands
	let leftside = ""
	let rightside = ""
	let i = 1
	while i <= v:count1
		let thischar = ( a:0 >= 2 ? a:2 : nr2char( getchar() ) )
		let leftside = leftside . thischar
		let rightside = ( a:0 >= 3 ? a:3 : MatchPair( thischar ) ) . rightside 
		let i = ( i + 1 )
	endwhile
		if Cchar() !~ "\\s" && Cline() != "\0" 	"if cursor is over a word (not a space or a blank line)
			let rBounds = ( a:0 >= 1 && a:1 ? 1 : 0 )
			if rBounds			"and boundaries are relaxed
				let beginBound = "B"
				let endBound = "E"
			else
				let beginBound = "b"
				let endBound = "e"
			endif
			let surround = "w" . beginBound . "i" . leftside . "\e" . endBound . "a" . rightside . "\e" 
			"add start and end commands if present
			exe "normal " . ( a:0 >= 5 ? a:5 : "" ) . surround . ( a:0 >= 4 ? a:4 : beginBound . ( rBounds ? strlen( leftside ) . "l" : "" )  ) . "\e"
		else
			let surround = "i" . leftside . rightside . "\e"
			let rightsidelen = ( strlen( rightside ) - 1 )
			execute "normal " . surround . ( rightsidelen ? rightsidelen . "h" : "" ) . "\e"
		endif
endfunction
function SurroundSelection(...) range "leftside, rightside, endcommands, startcommands
	let leftside = ""
	let rightside = ""
	let i = 1
	while i <= v:count1
		let thischar = ( a:0 >= 1 && a:1 != "" ? a:1 : nr2char( getchar() ) )
		let leftside = leftside . thischar 
		let rightside = ( a:0 >= 2 && a:2 != "" ? a:2 : MatchPair( thischar ) ) . rightside
		let i = ( i + 1 )
	endwhile
		"execute "normal \e`>" . ( ( i - 1 ) > 0 ? 2 * ( i - 1 ) . "l" : "" ) . ( a:0 >= 3 ? a:3 : "" ) . "a" . rightside . "\e`<" . ( a:0 >= 4 ? a:4 : "" ) . "i" . leftside  
		execute "normal \e" . ( a:0 >= 4 ? a:4 : "" ) . "`>a" . rightside . "\e`<" . "i" . leftside . "\e" . ( a:0 >= 3 ? a:3 : "" ) . "\e"
endfunction
function SurroundTill(r, ...) range "replace, tilloutside(farther), till, leftside, rightside
	let tillcmds = ""
	if a:0 >= 1 && a:1
		let tillright = "f"
		let tillleft = "F"
	else
		let tillright = "t"
		let tillleft = "T"
	endif
	let startpos = col(".")
	let leftside = ""
	let rightside = ""
	let tilltoleft = ( a:0 >= 2 ? a:2 : nr2char( getchar() ) )
	let tilltoright = MatchPair( tilltoleft )
	let i = 1
	while i <= v:count1
		let thischar = ( a:0 >= 3 ? a:3 : nr2char( getchar() ) )
		let leftside = leftside . thischar 
		let rightside = ( a:0 >= 4 ? a:4 : MatchPair( thischar ) ) . rightside
		let i = ( i + 1 )
	endwhile
	let tillrightcmd = "normal " . tillright . tilltoright . ( a:r ? "cl" : "a" ) . rightside . "\e"
	let tillleftcmd = "normal " . tillleft . tilltoleft . ( a:r ? "cl" : "i" ) . leftside . "\e"
	if Cchar() == tilltoleft || Cchar() == tilltoright
		if stridx( Cline(), tilltoright ) > col(".")
			execute "normal " . ( tillright == "t" ? "a" : "i" ) . leftside . "\e"
			execute tillrightcmd
		else
			execute "normal " . ( tillright == "t" ? "i" : "a" ) . rightside . "\e"
			call cursor(0, startpos)
			execute tillleftcmd
		endif
	else
		execute tillrightcmd
		call cursor(0, startpos)
		execute tillleftcmd
	endif
endfunction

function XMLmode()
	" we need the g: global prefix b/c we're inside a function
	let g:xml_use_xhtml = 1
	"let g:xml_tag_completion_map = "<C-l>"
	if exists("b:did_ftplugin")
		unlet b:did_ftplugin
	endif
	let b:match_words = "XMLmodeMatchWords()"
	source $VIMRUNTIME/macros/matchit.vim
	source ~/.vim/macros/xml_xhtml.vim
	if ! (&filetype == "html" || &filetype == "xhtml")
		set filetype=xml
	endif
endfunction

function XMLmodeMatchWords()
	" jump from <tag> to </tag> by returning the tag you're currently on
	let cword = expand("<cword>")
	return "<:>,<" . cword . ":</" . cword . ">"
endfunction

function XMLattr(attr, ...) "attrname, value
	let attrtxt = a:attr . "=\"" . ( a:0 ? a:1 : "" ) . "\""
	if Cchar() == ">" || Cchar() == " "		"if at the end of the tag or on a space
		let attrcmd = "i " . attrtxt . "\e"
	elseif Cword(1)[0] == "<" 			"if in the start of the tag
		let attrcmd = ( Cchar() != "<" ? "B" : "") . "ea " . attrtxt . "\e"
	else						"if somewhere inside
		let attrcmd = ( Cchar(-1) == " " ? "" : "B" ) . "i" . attrtxt . " \eh"
	endif
		execute "normal " . attrcmd
endfunction
"	function XMLargumentCompletion(ArgLead, CmdLine, CursorPos)
"		"if filereadable("/usr/share/vim/vim*/syntax/html.vim")
"		"if filereadable("/usr/share/vim/vim*/syntax/cf.vim")
"		return "a\nb\ninput\nspan\ntable"
"		"let taglist = execute "syntax list cfTagName"
"		"$VIMRUNTIME/syntax/cf.vim
"		"runtime! syntax/<name>.vim
"		"return ArgumentCompletion("xml", a:ArgLead, a:CmdLine, a:CursorPos)
"	
"		"let cftags = substitute("cfabort cfapplet cfapplication cfassociate cfauthenticate cfbreak cfcache cfcol cfcollection cfcontent cfcookie cfdirectory cferror cfexit cffile cfform cfftp cfgrid cfgridcolumn cfgridrow cfgridupdate cfheader cfhtmlhead cfhttp cfhttpparam cfif cfelseif cfelse cfinclude cfindex cfinput cfinsert cfldap cflocation cflock cfloop cfmail cfmodule cfobject cfoutput cfparam cfpop cfprocparam cfprocresult cfquery cfregistry cfreport cfschedule cfscript cfsearch cfselect cfset cfsetting cfslider cfstoredproc cfswitch cfcase cfdefaultcase cftable cftextinput cfthrow cftransaction cftree cftreeitem cftry cfcatch cfupdate cfwddx cfdump cfsavecontent cffunction cfmailparam cfreturn cfargument cfqueryparam", " ", "\n", "g")
"	
"	endfunction
function XMLtag(...) "unrestrictive boundaries, tagname, attribute, value
	:call SurroundCword( a:1, "<" . a:2 . ( a:0 >= 3 ? " " . a:3 . "=\"" . ( a:0 >= 4 ? a:4 : "" ) . "\"" : "") .  ">", "</" . a:2 . ">", "B" . ( ( a:0 >= 3 ? strlen( a:3 ) : strlen( a:2 ) ) + 2 ) . "l" )
endfunction
function XMLtagV(htag, ...) range "tagname, attribute, value
	:call SurroundSelection( "<" . a:htag . ( a:0 >= 1 ? " " . a:1 . "=\"" . ( a:0 >= 2 ? a:2 : "" ) . "\"" : "") .">", "</" . a:htag . ">", ( a:0 >= 1 ? "h" : "l" ) )
endfunction

"	function ArgumentCompletion(which, ArgLead, CmdLine, CursorPos)
"		return "a\nb\ninput\nspan\ntable"
"	endfunction

" }}}
" [ diff ] {{{

command! -bar DiffHelpers call DiffHelpers()
function! DiffHelpers()
  autocmd CursorHold * diffupdate
  nmap du :diffupdate<CR>
endfunction

" if diff is set on load (vimdiff), load DiffHelpers right away
if &diff | DiffHelpers | endif

" TODO: do this automatically when :diffthis is used?
command! DiffThis diffthis | DiffHelpers

" }}}

" load project-specific vimrc
"if getcwd() != "/home/rando"
"  exe "source " . getcwd() . "/.vimrc"
"endif

" [ see also ] {{{
" http://vim.wikia.com/wiki/Vim_Tips_Wiki
" https://github.com/derekwyatt/vim-config
" https://github.com/paradigm/dotfiles/blob/master/.vimrc#L215
" https://github.com/sunaku/vim-unbundle
" https://github.com/sartak/conf/blob/master/vimrc (nopaste, alignassignments)
" }}}
