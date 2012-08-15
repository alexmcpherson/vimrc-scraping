" Default ZillaVIM configuration

set nocompatible                " IMPORTANT! don't be backward-compatible with unix vi
set bg=dark                     " white tty backgrounds are wrong!
let g:Perl_AuthorName = 'Joel Bernstein'
let g:Perl_AuthorRef  = 'SJB'
let g:Perl_Email      = 'joel@fysh.org'

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

if has("vms")
    set nobackup          " do not keep a backup file, use versions instead
else
    set backup            " keep a backup file
endif

set history=500          " keep 50 lines of command line history
set showcmd             " display incomplete commands

filetype plugin indent on
syntax on
" add 'set bg=dark' or 'set bg=light' in your vimrc (\zv to edit)

" formatting options
set autoindent
set tabstop=4     " 4 column indent
set shiftround	  " indent to the nearest tabstop
set backspace=indent,eol,start
" the following settings are controversial!
set expandtab	  " expand tabs into spaces 'set noet' to disable
set softtabstop=4 " 'set sts=' to disable
set shiftwidth=4  " 'set sw=' to disable

" interface options
set showmatch      " show matching delimiters
set incsearch      " do incremental searching
set hlsearch       " highlight searches
set ruler          " column/line/% status info
set laststatus=2   " always show status line
set number         " line numbers
set history=100    " command/search/input history size
set viminfo+=%     " restore buffer list if zvim is launched without a file arg
set viminfo+=r/tmp " don't save info for temp files
set wildmenu       " interactive auto-complete menu

" XPP syntax highlighting
au BufEnter *.xmi set syntax=xpp

" for the commit template
au BufNewFile,BufRead svn-commit*.tmp set filetype=svncommit

" xterm16 color scheme, good for terminals
colorscheme darkblue

" for find
au BufEnter * set path=.,,**

" tags file (<C-]> to follow tags, <C-T> to go back up the tagstack)
set tags=./tags,

" folding (use zr to open fold and zm to close)
set foldmethod=indent
set foldminlines=3
set foldnestmax=1
set nofoldenable " set foldenable in your vimrc to use folds

" wiki settings (\ww or \hw to see the home page)
let potwiki_autowrite = 1
let potwiki_home = "/home/jbernstein/zvim/wiki/WikiHome"
nmap <Leader>hw <Plug>PotwikiHome

" SVNCommand settings
let SVNCommandEnableBufferSetup=1
let SVNCommandEdit='split'
let SVNCommandNameResultBuffers=1

" KEYBINDINGS AND SHORTCUTS

" \ds open a split window view of the current buffer's directory
nnoremap <Leader>ds :split %:h

" access the menus using the F4 or alt-M keys
source $VIMRUNTIME/menu.vim
set cpo-=<
set wcm=<C-Z>
map m :emenu <C-Z>
map <F4> :emenu <C-Z>

" T to toggle the list of tags for the current file
let Tlist_Ctags_Cmd="/usr/bin/ctags"
nnoremap <silent> T :TlistToggle<CR>

" \zv to edit your vimrc, \zV to edit/view the global vimrc
nnoremap <Leader>zv :e ~/.vimrc
nnoremap <Leader>zV :e /Users/joel/zvim/share/vim/vimrc

" use \tt to generate a perl tags file in the current directory (recursive)
nnoremap <Leader>pt :!/Users/joel/zvim/bin/ptags -r '\.(pm\|pl)$'

" \bb jump to previous buffer
nnoremap <Leader>bb :e #
" \bt ...in a new tab
noremap <Leader>bt :tabe #

" template macros - these all end up in insert mode for convenience
" underscore-D inserts a call to data dumper
nnoremap _d aData::Dumper::Dumper();<ESC>hi
" _w and _d insert debug calls
"nnoremap _w o<ESC>iwarn Data::Dumper::Dumper();<ESC>hi
"nnoremap _d o<ESC>iprint STDERR Data::Dumper::Dumper();<ESC>hi

let g:tracServerList = {}      
" let g:tracServerList['(Server Name)'] = 'http://(user):(password)@(trac serverpath)/login/xmlrpc' 
let g:tracBrowser = 'open -a Firefox'

set visualbell
set wildignore+=*/root/static/*


command -range NativeTraits :<line1>,<line2>call NativeTraits()
function! NativeTraits() range
    if match(getline(a:firstline), "has") == -1
        throw "This does not look like a has block"
    endif
    let range_has = a:firstline . "," . a:lastline
    exec range_has . "sm/metaclass.*=>.*Collection::\\(\\w\\+\\).*,/traits => ['\\1'],/"
    call cursor(a:firstline, 0)
    let pfirst = search('provides\s*=>\s*{', "nW", a:lastline)
    call cursor(pfirst, 0)
    let plast = search('^\s*}', "nW", a:lastline)
    let range_prov = pfirst . "," . plast
    exec range_prov . "sm/\\(\\w\\+\\)\\s*=>\\s*'\\(\\w\\+\\)'/\\2 => '\\1'/"
    exec range_prov . "s/provides/handles/"
endfunction
