" Hard-coded for Windows and cygwin.
" If not set to windows path, diffs cannot be displayed,
" possibly other errors exist but have not been discovered.
"if $SHELL =~ 'bin/fish'
"    set shell=/bin/sh
"endif
" The idea is, on Windows, that this shell is the default when starting
" so that git mergetool works (diff generation)
" Then, when vim is started, we can switch to cmd.exe so that other stuff
" works as well. :)
" TODO doesn't work
" set shell=c:\cygwin\bin\sh.exe


call pathogen#infect()

" --------------------------------------------------------------------------------
" Tmux
" I use Tmux to construct ad-hoc IDEs depending on the problem at hand.
    " Display background properly when editing in tmux
    set term=screen-256color

" A minimalistic user interface for tslime.vim
    " Send Commands From VIM to Tmux Pane - candland.net
    " http://candland.net/2011/11/23/send-commands-from-vim-to-tmux-pane/
function! To_Tmux()
    let b:text = input("tmux:", "", "custom,")
    call Send_to_Tmux(b:text . "\n")
endfunction

cmap TT :call To_Tmux()<CR>

" Tmux mappings
" The use of these makes VIM act more like an IDE.
" This is a great feature.
" I map shell commands with the mapping "prefix" <leader>s
" so they also work as a mnemonic.

    " Reset shell to normal mode.
    " In many cases I want to look at something from the shell, but it's
    " already displaying something. This mapping will attempt to reset the
    " shell to its normal mode (command line active).
    " Do this by sending
    " - Q (gets out of less). Erase the q afterwards with a backspace character.
    " - <c-c> (gets out of many programs) and q.
    map <leader>sr :TT q<c-v><enter>:TT <c-v><enter>

    " Show Git log
    " Uses my custom bash_profile alias
    map <leader>sgl :TT gl<enter>

    " Monitor Git staging area with "watch" program.
    " Note that I have an alias for "monitor" in my bash_profile as well (it
    " calls watch).
    map <leader>sgL :TT monitor git diff --cached --color<enter>

    " Change shell directory to directory in Vim.
    map <leader>scd :TT cd "<c-r>=expand("%:p:h")<enter>"<enter>

	" Send current line to tmux.
	" Can be used with a REPL but also with something else as well I guess.
	map <leader><enter> yy:TT<C-R><C-R><CR>
" --------------------------------------------------------------------------------

" ----------------
" Settings section
" ----------------
    " Toggle absolute line numbering
    se nu
    syntax on

    " Stuff that has something to do with terminal colors
    set t_Co=256
    set background=dark
    " This looks about the same in terminal Vim and in gVim
    colorscheme jellybeans

    set autoindent
    set backspace=2
    set expandtab
    set tabstop=4
    set shiftwidth=4
    set nocompatible
    set ruler
    set scrolloff=1
    set tildeop
    set matchpairs=(:),{:},[:],<:>
    set ignorecase
    filetype plugin on
    set shiftwidth=4
    set mouse=a
    set autoread
    set backspace=eol,start,indent
    set fileencoding=utf-8
    set quoteescape
    " Allows opening new buffers even if the current one has modifications
    set hidden
    " Not used to this feature in gVim, so am disabling it.
    set nospell
    " Allows using alt in mappings instead of toggling the window manager's
    " actions.
    " Enabling Windows shortcuts for gvim - Vim Tips Wiki
    " http://vim.wikia.com/wiki/Enabling_Windows_shortcuts_for_gvim
        set winaltkeys=no
    set cmdwinheight=2
    " When typing a search string in / mode, immediately jump to results after
    " typing each key.
    " Makes searching a bit faster.
    set incsearch
    " Highlight search results, so I can see where the next n or N search jump
    " will take me in advance.
    set hlsearch

    " Move all backup and swap files to this directory
    "     http://vim.wikia.com/wiki/Remove_swap_and_backup_files_from_your_working_directory
    set backupdir=~/vim-tmp/
    set directory=~/vim-tmp/
    " http://www.8t8.us/vim/vim.html
    " I don't really use this anymore.
    set winminheight=0      " Allow windows to get fully squashed

    " Use a menu for command line completion.
    set wildmenu


" Paste toggle mapping for reliable pasting.
" Toggles paste on/off and shows the present value.
map <f5> :silent set paste!<enter>:set paste?<enter>
" In insert mode, pressing ,. will change character case for the first letter
" in the previous word. It will then continue editing like nothing happened.
" Really useful when e.g. Neocomplcache will provide a completion that's
" otherwise good but in the wrong case. Accepting the completion and quickly
" pressing ,. will correct the case without interrupting the typing flow! :)
imap ,. <esc>bv~gi

" Old stuff, currently helps my fingers with split window navigation
    map <C-J> <C-W>
    map <C-K> <C-W>



" Add undo steps after each word.
" Really useful when quickly editing.
    imap <space> <c-g>u<c-v><space>

" Complete 'read last register (")' command by double ctrl+r
    cmap <c-r><c-r> <c-r>"
    imap <c-r><c-r> <c-r>"

" Copy remaining word from above or below.
" Useful in situations where you need to repeat some code and don't want to
" copy a whole line and edit parts of it.
"     Wordwise Ctrl-Y in insert mode - Vim Tips Wiki
"     http://vim.wikia.com/wiki/Wordwise_Ctrl-Y_in_insert_mode
    inoremap <expr> <c-y> matchstr(getline(line('.')-1), '\%' . virtcol('.') . 'v\%(\k\+\\|.\)')
    inoremap <expr> <c-e> matchstr(getline(line('.')+1), '\%' . virtcol('.') . 'v\%(\k\+\\|.\)')

" camelcasemotion.vim
    " To avoid losing the (rarely used) |,| mapping (which repeats latest f, t, F or
    " T in opposite direction), you can remap it to ,,: >
    nnoremap ,, ,
    xnoremap ,, ,
    onoremap ,, ,
    " Fix <leader>w wait time
    " Due to AlignMaps mapping ,w=
    " TODO doesn't work since key isn't bound yet when sourcing .vimrc.
    " It's bound later, not sure where. Maybe autoload/ dir.
    " unmap <leader>w=
    " easier camel case usage with Alt
    " TODO doesn't work on virtual terminal vim
    " map <leader><e> <leader>e
    " map <leader><b> <leader>b
    " map <leader><w> <leader>w

" ------------------------------
" Neocomplcache
" (code completion)
" Most comments are from its help file.
" ------------------------------
    " Recommended key-mappings.
    " <CR>: close popup and save indent.
    inoremap <expr><CR>  neocomplcache#smart_close_popup() . "\<CR>"

    " <TAB>: completion.
    inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : "\<TAB>"
    inoremap <s-TAB> <c-p>
    imap <a-e>     <Plug>(neocomplcache_snippets_expand)
    smap <a-e>     <Plug>(neocomplcache_snippets_expand)
    " Edit with alt+E
    " alt+e is in use by AlignMaps
    nmap <a-E>     :NeoComplCacheEditSnippets<enter>
    inoremap <expr><a-g>     neocomplcache#undo_completion()
    inoremap <expr><a-l>     neocomplcache#complete_common_string()
    " <C-h>, <BS>: close popup and delete backword char.
    inoremap <expr><a-h> neocomplcache#smart_close_popup()."\<C-h>"
    inoremap <expr><BS> neocomplcache#smart_close_popup()."\<C-h>"
    inoremap <expr><a-y>  neocomplcache#close_popup()
    " This is required so the plugin will activate.
    " I usually want to use it.
    let g:neocomplcache_enable_at_startup = 1
    " When a capital letter is included in input, neocomplcache does
    " not ignore the upper and lowercase.
    let g:neocomplcache_enable_smart_case = 0
    " Whether to select the first element or not
    let g:neocomplcache_enable_auto_select = 0
    " When you input a capital letter, this variable controls
    " whether neocomplcache takes an ambiguous searching as an end
    " of the words in it. For example, neocomplcache come to
    " match it with ArgumentsException when you input it with AE.
    let g:neocomplcache_enable_camel_case_completion = 0
    " When you input _, this variable controls whether
    " neocomplcache takes an ambiguous searching as an end of the
    " words in it.  For example, neocomplcache come to match it
    " with "public_html" when you input it with "p_h".
    let g:neocomplcache_enable_underbar_completion = 0
    " This variable controls whether neocomplcache accept wild
    " card character '*' for input-saving.
    let g:neocomplcache_enable_wildcard = 1
    " When you input one character, this variable controls whether
    " neocomplcache takes an ambiguous searching as an end of the
    " words in it.  For example, neocomplcache come to match it
    " with "public_html" or "PublicHtml" when you input it with "ph".
    " This variable disables
    " |g:neocomplcache_enable_camel_case_completion| and
    " |g:neocomplcache_enable_underbar_completion|.
    " Note: This match is too heavy. So, it is enabled when your
    " input is less than 8 characters.
    " Own comment: the ultimate completion! :)
    let g:neocomplcache_enable_fuzzy_completion = 1
    " This variable controls length of fuzzy completion start length.
    " For example, If this variable is "3", third and after input characters are
    " fuzzy matched.  But first and second input characters are not
    " fuzzy matched.
    let g:neocomplcache_fuzzy_completion_start_length = 1

" --------------------
" ShowMarks plugin
" Shows mark letter next to line number if any marks are set.
" --------------------
let showmarks_include = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let g:showmarks_enable = 1

" http://vim.wikia.com/wiki/Omni_completion_popup_menu
highlight Pmenu ctermbg=238 gui=bold


" http://vim.wikia.com/wiki/Omni_completion
set ofu=syntaxcomplete#Complete

" indenting xml
" http://uucode.com/blog/2005/06/15/indenting-xml-in-vim/
vmap <leader>fx :!xmllint --format -<CR>


" vim git plugins
" http://www.osnews.com/story/21556/Using_Git_with_Vim
    set laststatus=2 " Enables the status line at the bottom of Vim
    set statusline=%{fugitive#statusline()}

" My leader key <3
let mapleader=","

" Repeat last command and put cursor at start of change
" Makes it faster to repeat a command for some actions.
" http://vim.wikia.com/wiki/VimTip1142
nmap . .`[

" Helpers with wiki markdown editing
" Not polished, will be buggy.
    " Set correct syntax
    nmap <Leader>1 :se syntax=mediawiki<CR>
    " Add level of heading
    nmap <leader>+ I=<esc>A=<esc>
    " Remove level of heading
    nmap <leader>- 0x$x

" Quickly move to last / next change with - and + keys.
nmap - g;
nmap + g,

" Display whitespace characters such as tabs and EOL
" I use this to clean Git commits, among other things.
nmap <f11> :set list!<enter>

" Toggle search highlighting on or off
nmap <f12> :set hlsearch!<enter>

" fugitive - Git integration!
" Probably the best or second best plugin of them all.
    nmap <leader>gs :Gstatus<enter>
    nmap <leader>gd :Gdiff<enter>
    nmap <leader>gc :Gcommit<enter>
    nmap <leader>gl :gitv<enter>
    nmap <leader>ga :Git commit --amend<enter>
    nmap <leader>gD :Git diff --cached --color<enter>
    " this inserts the last commit message
    " % needs to be escaped, otherwise vim inserts its register %
    " Note that no <enter> so user has the option of changing number of commits
    nmap <leader>gh :r !git log --format=format:\%s -1
    " Remove trailing whitespace
    " Mnemonic: delete whitespace
    nmap <leader>dws :silent! %s/\s\+$//ge<enter>
    vmap <leader>dws :s/\s\+$//ge<enter>
    " Ignore whitespace in diffs.
    " Also shows current diffopt status.
    nmap <leader>s :set diffopt+=iwhite<enter>:set diffopt<enter>
    nmap <leader>S :set diffopt-=iwhite<enter>:set diffopt<enter>

" Align plugin stuff
    " Align by words.
    " Causes whitespace to appear at eol.
    " Get rid of whitespace too.
    vmap <leader>aw :Align \S\+<enter>gv:s/\s\+$//ge<enter>

" vimdiff navigation helpers based on these:
" Welcome to Puneet¿s World » Usefull vimdiff commands to view diff and merge
" http://puneetworld.com/archives/48
"
" I use these to partially stage git changes.
" They don't work for merge conflicts yet.
map <F3> :diffput<enter>
map <F4> :diffget<enter>
" Go to previous / next hunk in vimdiff mode.
nmap <F7> [czz
nmap <F8> ]czz

" gitv plugin:
" (git log in vim)
    " 4.2 Open Horizontal
    "
    " This is the default layout to use in browser mode. If set to 0 then browser
    " mode will open in a vertical split. If set to 1 then browser mode will open
    " in
    " a horizontal split. If set to 'auto' then browser mode will open in a
    " vertical
    " split unless the content fits better in a horizontal split, in which case it
    " will open horizontally.
    "
    " The commit browser width and height is automatically sized to best fit the
    " content in all modes and settings.
    let g:Gitv_OpenHorizontal = 1

" TagList plugin
nmap <c-t> :TlistToggle<enter>

" Folding : http://vim.wikia.com/wiki/Syntax-based_folding, see comment by
" Ostrygen au FileType cs
au FileType cs set foldmethod=indent

" Haskell
    " http://projects.haskell.org/haskellmode-vim/
    filetype indent on
    " use ghc functionality for haskell files
    au Bufenter *.hs compiler ghc

    " configure browser for haskell_doc.vim
    let g:haddock_browser = "/usr/bin/firefox"

    " I don't trust Vim's way of indenting Haskell code.
    " I use my own style instead.
    " http://www.vim.org/scripts/download_script.php?src_id=7407
    let g:haskell_indent_if = 0
    let g:haskell_indent_case = 0

    " ujihisa/neco-ghc - GitHub
    " https://github.com/ujihisa/neco-ghc
    " epic haskell completion
        let $PATH=$PATH.":/home/mika/.cabal/bin"

    " Superior Haskell Interaction Mode
    " SHIM
    " vim-scripts/Superior-Haskell-Interaction-Mode-SHIM - GitHub
    " https://github.com/vim-scripts/Superior-Haskell-Interaction-Mode-SHIM/
        autocmd FileType haskell nmap <f10> :GhciRange<CR>
        autocmd FileType haskell vmap <f10> :GhciRange<CR>
        autocmd FileType haskell nmap <f9> :GhciFile<CR>
        autocmd FileType haskell nmap <C-c><C-r> :GhciReload<CR>
        let g:shim_ghciTimeout=2

" Auto highlight current word when idle - Vim Tips Wiki
" http://vim.wikia.com/wiki/Auto_highlight_current_word_when_idle
    " Highlight all instances of word under cursor, when idle.
    " Useful when studying strange source code
    " or when resolving merge conflicts.
    " Type z/ to toggle highlighting on/off.
    nnoremap z/ :if AutoHighlightToggle()<Bar>set hls<Bar>endif<CR>
    function! AutoHighlightToggle()
      let @/ = ''
      if exists('#auto_highlight')
        au! auto_highlight
        augroup! auto_highlight
        setl updatetime=4000
        echo 'Highlight current word: off'
        return 0
      else
        augroup auto_highlight
          au!
          au CursorHold * let @/ = '\V\<'.escape(expand('<cword>'), '\').'\>'
        augroup end
        setl updatetime=500
        echo 'Highlight current word: ON'
        return 1
      endif
    endfunction

" Fixes mysterious error gotten when using :GDiff on Windows
" Error using the :GDiff command of fugitive.vim using gvim for windows and
" msys git 1.7.0.2 - Stack Overflow
" http://stackoverflow.com/questions/2932399/error-using-the-gdiff-command-of-fugitive-vim-using-gvim-for-windows-and-msys-g
set directory+=,~/tmp,$TMP
" for gvim on Windows
"set guifont=Consolas:h9:cANSI
set guifont="Monospace 9"

" Removes tag completion from ctrl+n completion list.
" If this is not done, the completion will take very long to complete.
set complete=.,w,b,u,i

" Open tag search. Makes it possible to open the tag list in insert mode on a
" non-US keyboard.
imap <c-a> <c-x><c-]>

" Fugitive.vim - browsing the git object database
" http://vimcasts.org/episodes/fugitive-vim-browsing-the-git-object-database/
autocmd BufReadPost fugitive://* set bufhidden=delete

" Set up c# building!
    "set makeprg=msbuild\ /nologo\ /v:Detailed\ /property:OutputPath=bin\Debug\ /property:GenerateFullPaths=true
    " GenerateFullPaths should help with vim's quickfix navigating
    " Configuration and Platform properties are required by msbuild on some
    " projects
    " set makeprg=C:/Windows/Microsoft.NET/Framework/v4.0.30319/msbuild.exe\ /nologo\ /v:q\ /property:OutputPath=bin\Debug\ /property:GenerateFullPaths=true
    " Vim :help makeprg says:
    " Note that a '|' must be escaped twice: once for ":set" and once for
	" the interpretation of a command.
    map <c-f8> :make<enter>
    set makeprg=/home/joose/bin/mdtool.build.errors.only.sh
    " (Black magic)
    " TODO probably doesn't work on terminal vim
    set errorformat=\ %#%f(%l\\\,%c):\ %m
    map <c-f8> :make<enter>
    " leader+j and leader+k to go down and up in the quickfix list
    " The idea is 'down' and 'up'
    map <leader>j :cnext<enter>
    map <leader>k :cprevious<enter>
    " Allows to insert a semicolon at the end of the current line in insert
    " mode. I use this to quickly complete lines and move to the next one.
    autocmd FileType cs imap ; <esc>A<C-v>;
    " Complete c# source code from other buffers when writing git
    " commit messages.
    autocmd FileType cs autocmd FileType gitcommit call neocomplcache#set_dictionary_helper(g:neocomplcache_same_filetype_lists, "gitcommit", "cs")

" Use cygwin shell - Vim Tips Wiki
" http://vim.wikia.com/wiki/Use_cygwin_shell
"
	"******* current file directory commands WINDOWS **********************
	""%:p:h:8 gets the current file's directory and :8 is what puts it
	"into dos short form
	"
	""open explorer in the current file's directory
	map ,E :!start explorer %:p:h:8<CR>

	"open windows command prompt in the current file's directory
	"map ,c :!start cmd /k cd %:p:h:8<CR>
	"
	""open cygwin bash in the current file's directory
	map ,B :!start bash --login -i -c 'cd `cygpath "%:p:h:8"`;bash'<CR>

	"******* end current file directory commands WINDOWS ******************
	"
" XML Completion - Completion for XML files : vim online
" http://www.vim.org/scripts/script.php?script_id=1442
    " If g:xmlSubelements == "yes" (default "no"), completion of element names
    " is restricted on subelements of parent element.
    let g:xmlSubelements="yes"

" improved autoread for console vim
    source ~/.vim/autoread.vimscript
    let autoreadargs={'autoread':1}
    execute WatchForChanges("*",autoreadargs)

" YankRing
    " Vim already maintains a list of numbered registers containing the last
    " yanked item and the previous 9 deletes. These items can be referenced
    " using [register]p, so "0p will paste the last yank, "1p will paste the
    " last delete, "2p the 2nd last delete. For more information see
    " |quote_number|.
    " If you wish the YankRing to maintain these numbered registers so
    " the top 10 elements in the YankRing are in the numbered reqisters 0-9
    " you can put the following in your |vimrc| >
    let g:yankring_manage_numbered_reg = 1
	" Don't map the dot operator, since I have a better mapping for it.
	let g:yankring_map_dot=0
    " Show YankRing
    " in B since <c-y> is in use as scroll text down
    map <c-B> :YRShow<enter>

" Buffet plugin configuration
    map <leader>ä :Bufferlist<enter>
" easymotion configuration
    highlight link EasyMotionShade  Comment
    highlight link EasyMotionTarget ErrorMsg

" Unite.vim configuration
    " For finding a new file/location to edit/view
    " This is because I got used to the Command-t plugin and its default
    " mapping. :)
    map <Leader>t :Unite buffer file file_mru<cr>
" vimshell configuration
    nmap <leader>r :VimShell<cr>
" vimfiler configuration
    " Opens VimFiler, replacing the current window/tab/buffer with it
    nmap <leader>f :VimFiler<cr>
