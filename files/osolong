"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Developer: osolong
"             https://github.com/osolong/vim-scripts
"
"" Version: 1.0
"
" How_to_install:
"    $ cd
"    $ git clone git://github.com/osolong/vim-scripts.git
"    $ cd vim_scripts
"    $ ./vim_install.sh
"
" How_to_upgrade:
"    $ pushd ~/vim-scripts
"    $ git pull origin master
"    $ popd
"
" Sections:
"    -> General
"    -> VIM user interface
"    -> Text, tab and indent related
"    -> Vim grep
"    -> Cscope
"    -> Taglist Plugin
"    -> Project Plugin
"    -> Tag Generation
"    -> Hex Mode
"    -> Sessions
"
" Plugins_Included:
"     > taglist.vim - http://www.vim.org/scripts/download_script.php?src_id=7701
"       Source code browser plugin
"
"     > project.vim - http://www.vim.org/scripts/download_script.php?src_id=6273
"       Sets up a list of frequently-accessed files for easy navigation
"
"     > EnhCommentify.vim - http://www.vim.org/scripts/download_script.php?src_id=8319
"       Enhanced Commentify. Quickly comments lines in a program.
"
"     > supertab.vim - http://www.vim.org/scripts/download_script.php?src_id=16104
"       SuperTab. Do all your insert-mode completion with Tab.
"
"     > cscope_maps.vim - http://cscope.sourceforge.net/cscope_maps.vim
"       Cscope key mapping for vim.
"
"
"  Revisions:
"     > 0.1 Initial commit.
"
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => General
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
filetype plugin on
syntax on
let mapleader = ","

" When vimrc is edited, reload it
autocmd! bufwritepost vimrc source ~/vim-scripts/vimrc


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => VIM user interface
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set number                          " display line number
set mouse=a                         " enable mouse
set mousemodel=extend               " enable extended mouse mode
set nocp                            " vim defaults, not vi!
set ofu=syntaxcomplete#Complete
set hlsearch                        " Highlight search items
set ignorecase                      " ignore case when searching
set showmatch                       " Show matching brackets on cursor over
set splitbelow
set wildmenu                        " Turn on Wild Menu
set cinoptions=:0,l1,t0,g0          " handle C indention
set ruler                           " Always show current position
set cmdheight=2                     " The commandbar height


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Text, tab and indent related
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set autoindent smartindent          " turn on auto/smart indenting
set smarttab                        "make <tab> and <backspace> smarter
set tabstop=4                       " tabstops of 4
set shiftwidth=4                    " indents of 4
set noexpandtab                     " use tabs, not spaces

" Tab management
map <leader>tn :tabnew %<cr>        " Open a new tab
map <leader>tc :tabclose<cr>        " Close current tab
map <leader>tm :tabmov              " Move to next tabn
map <C-@><C-@> :cs find s <C-R>=expand("<cword>")<CR><CR>


" Copy, paste and cut using <Ctrl-c> <Ctrl-v> and <Ctrl-x>
vmap <C-c> "+yi
vmap <C-x> "+c
vmap <C-v> c<ESC>"+p
imap <C-v> <ESC>"+pa

" Indentation of a block of code <Ctrl-j>
nmap <C-J> vip=                     " forces reindentation of block of code

" Commentify a block of code on Visual Mode cc->comment cd->uncomment
vmap co :call EnhancedCommentify('','guess')<CR>
vmap cc :call EnhancedCommentify('','comment')<CR>
vmap cd :call EnhancedCommentify('','decomment')<CR>

"Highlight in red extra white spaces
highlight ExtraWhitespace ctermbg=red guibg=red
match ExtraWhitespace /\s\+$/
autocmd BufWinEnter * match ExtraWhitespace /\s\+$/
autocmd InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
autocmd InsertLeave * match ExtraWhitespace /\s\+$/
autocmd BufWinLeave * call clearmatches()
syn keyword cType uint ubyte ulong uint64_t uint32_t uint16_t uint8_t boolean_t int64_t int32_t int16_t int8_t u_int64_t u_int32_t u_int16_t u_int8_t
syn keyword cOperator likely unlikely

"Toggle Show Hidden Characters
"Tabs, Trailing Spaces and EOL
let g:showHidden = 0
function ToggleShowHiddenChars()
	if g:showHidden
		set nolist
	else
		set list listchars=tab:»·,trail:·,eol:¶,nbsp:·
	endif
	let g:showHidden = !g:showHidden
endfunction

nmap <silent> <F5> <Esc>:call ToggleShowHiddenChars()<CR>
nmap <silent> <F6> <Esc>:retab<CR>

""""""""""""""""""""""""""""""
" => Vim grep
""""""""""""""""""""""""""""""
"Navigate through grep results
map <leader>n :cn<cr>               " Next grep result
map <leader>p :cp<cr>               " Previous grep result
map <leader>cw :botright cw 10<cr>  " Open quickfix window with a list of grep result
nnoremap <silent> <F2> :HexmodeDx<CR> " Toggle Hex Mode

""""""""""""""""""""""""""""""
" => Cscope
""""""""""""""""""""""""""""""
"Load Cscope
    function! LoadCscope()
        let db = findfile("cscope.out", "where_is_cscope")
        if (!empty(db))
            let path = strpart(db, 0, match(db, "/cscope.out$"))
            set nocscopeverbose " suppress 'duplicate connection' error
            exe "cs add " . db . " " . path
            set cscopeverbose
        endif
    endfunction
    au BufEnter /* call LoadCscope()

""""""""""""""""""""""""""""""
" => Taglist Plugin
""""""""""""""""""""""""""""""
" F4: Switch on/off TagList
nnoremap <silent> <F4> :TlistToggle<CR>
let Tlist_Show_One_File = 1         " Displaying tags for only one file~
let Tlist_Exist_OnlyWindow = 1      " if you are the last, kill yourself
let Tlist_Use_Right_Window = 1      " split to the right side of the screen
let Tlist_Sort_Type = "order"       " sort by order or name
let Tlist_Display_Prototype = 0     " do not show prototypes and not tags in the taglist window.
let Tlist_Compart_Format = 1        " Remove extra information and blank lines  from the taglist window.
let Tlist_GainFocus_On_ToggleOpen = 1 " Jump to taglist window on open.
let Tlist_Display_Tag_Scope = 1     " Show tag scope next to the tag name.
let Tlist_Close_On_Select = 0       " Close the taglist window when a file or tag is selected.
let Tlist_Enable_Fold_Column = 0    " Don't Show the fold indicator column in the taglist window.
let Tlist_WinWidth = 27

""""""""""""""""""""""""""""""
" => Project plugin
""""""""""""""""""""""""""""""
    map <A-S-p> :Project<CR>
    map <A-S-o> :Project<CR>:redraw<CR>/
    nmap <silent> <F3> <Plug>ToggleProject
    let g:proj_window_width = 25
    let g:proj_window_increment = 0
    set tags+=~/vim-scripts/tags/kernel

""""""""""""""""""""""""""""""
" => Tag Generation
""""""""""""""""""""""""""""""
map <C-x><C-x><C-T> :!ctags -R --c++-kinds=+p --fields=+iaS --extra=+q -f ~/vim-scripts/tags /usr/include /usr/local/include<CR><CR>
map <C-F12> :!ctags -R --sort=yes --c++-kinds=+p --fields=+iaS --extra=+q .<CR>

""""""""""""""""""""""""""""""
" => Hex Mode
""""""""""""""""""""""""""""""
" helper function to toggle hex mode
function! ToggleHexDx()
" hex mode should be considered a read-only operation
" save values for modified and read-only for restoration later,
" and clear the read-only flag for now
     let l:modified=&mod
     let l:oldreadonly=&readonly
     let &readonly=0
        let l:oldmodifiable=&modifiable
        let &modifiable=1
        if !exists("b:editHex") || !b:editHex
            " save old options
            let b:oldft=&ft
            let b:oldbin=&bin
            " set new options
            setlocal binary " make sure it overrides any textwidth, etc.
            let &ft="xxd"
            " set status
            let b:editHex=1
            " switch to hex editor
            %!xxd
        else
            " restore old options
            let &ft=b:oldft
            if !b:oldbin
            setlocal nobinary
            endif
            " set status
            let b:editHex=0
            " return to normal editing
            %!xxd -r
        endif
     "restore values for modified and read only state
     let &mod=l:modified
     let &readonly=l:oldreadonly
     let &modifiable=l:oldmodifiable
endfunction
" ex command for toggling hex mode - define mapping if desired
command! -bar HexmodeDx call ToggleHexDx()

"""""""""""""""""""""""""""""""
" => Sessions
""""""""""""""""""""""""""""""
" automatically load and save session on start/exit.
" Creates a session
function! MakeSession()
  let b:sessiondir = $HOME . "/vim-scripts/sessions" . getcwd()
  if (filewritable(b:sessiondir) != 2)
    exe 'silent !mkdir -p ' b:sessiondir
    redraw!
  endif
  let b:sessionfile = b:sessiondir . '/session.vim'
  exe "mksession! " . b:sessionfile
endfunction

" Updates a session, BUT ONLY IF IT ALREADY EXISTS
function! UpdateSession()
  let b:sessiondir = $HOME . "/vim-scripts/sessions" . getcwd()
  let b:sessionfile = b:sessiondir . "/session.vim"
  if (filereadable(b:sessionfile))
    exe "mksession! " . b:sessionfile
    echo "updating session"
  endif
endfunction

" Loads a session if it exists
function! LoadSession()
  if argc() == 0
    let b:sessiondir = $HOME . "/vim-scripts/sessions" . getcwd()
    let b:sessionfile = b:sessiondir . "/session.vim"
    if (filereadable(b:sessionfile))
      exe 'source ' b:sessionfile
    else
      echo "No session loaded."
    endif
  else
    let b:sessionfile = ""
    let b:sessiondir = ""
  endif
endfunction

au VimEnter * nested :call LoadSession()
au VimLeave * :call UpdateSession()
map <leader>m :call MakeSession()<CR>

