let mapleader = " "
let maplocalleader = ","

filetype off
filetype indent on
filetype plugin on
set directory ^=~/.vim_swap//
syntax on
set spell

"let g:CSApprox_loaded=1
"basic vim setting
set modeline
set modelines=5
"set ruler
set number
set virtualedit=all
set nowrap

set ignorecase
set smartcase
set mouse=a
set background=dark
set backspace=2

set t_Co=256
set hidden
"let Powerline_symbols="fancy"
let Powerline_cache_file=""
" we don't need it anymore, as we've learn gu and gU set tildeop we don't


set ht=2
set ts=2
set sw=2

set switchbuf=useopen


"fold setting
set foldmethod=indent
set foldlevelstart=2
set foldcolumn=0
"set foldtext=v:folddashes.substitute(getline(v:foldstart),'/\\*\\\|\\*/\\\|{{{\\d\\=','','g')
set foldtext=getline(v:foldstart).'\〚...〛\ '.getline(v:foldend).'\ '
set foldtext='✪\ '.getline(v:foldstart).'\ [...]\ '.getline(v:foldend).'\ '
map z] ]z
map z[ [z
"let ruby_fold=0
let ruby_no_comment_fold=1
set fillchars+=fold:\ 
nnoremap <tab> za
nnoremap <S-tab> zA

function! RubyMethodFold(line)
  let line_is_method_or_end = synIDattr(synID(a:line,1,0), 'name') == 'rubyMethodBlock'
  let line_is_def = getline(a:line) =~ '\s*def '
  return line_is_method_or_end || line_is_def
endfunction
set foldexpr=IndentFold()
set foldmethod=expr
setlocal foldtext=OneLineFold()
"set foldtext=OneLineFold()
nnoremap G Gzv

"nnoremap <leader>a z
nnoremap zV zMzv
"nnoremap zZ vizzc<esc>

"map ]] ]zzj
"map [[ [z
"map ]- t_
"map [- T_

set tags+=../tags
set tags+=../../tags
set tags+=~/.tags/gems

set dictionary+=/usr/share/dict/words

imap ## #{}<Esc>i
map c& xPp%xPPc%

"imap () ()<esc>i
"imap [] []<esc>i
"imap {} {}<esc>i
"inoremap ( ()<left>
"inoremap ) <esc>f)a
"inoremap [ []<left>
"inoremap ] <esc>f]a
"inoremap { {}<left>
"inoremap } <esc>f}a

"imap <%% <%  %>ODODOD
"imap <%= <%=  %>ODODOC


"autocmd FileType ruby set omnifunc=rubycomple#Complete
"autocmd FileType eruby set omnifunc=rubycomple#Complete
autocmd FileType ruby compiler ruby
autocmd FileType ruby noremap <leader>mr :Rake<CR> "rake
autocmd FileType ruby noremap <leader>ms :w !ruby -c -W0<CR> "syntax check
autocmd FileType ruby 2match SpellRare '\<debugger\>'
autocmd FileType cucumber compiler cucumber
autocmd Filetype cucumber nnoremap <localleader>s ?Scenario\s*:?ewy$:make --name "0$"
autocmd FileType cucumber nnoremap <localleader>f /\%>0lFeature\s*:/ewy$:make --name "0$"''
autocmd FileType cucumber 2match SpellBad "\S\s\zs\s"

autocmd FileType rspec compiler rspec


autocmd FileType php set fdm=indent
autocmd FileType php set nolist

"autocmd BufWritePost *.rb make -c -W0 %

cab nw noa w


"set t_Co=16
hi Comment ctermbg=gray ctermfg=darkgreen
hi Statement ctermfg=blue
hi Visual ctermbg=DarkYellow
hi String ctermbg=red
"hi Folded ctermfg=darkblue ctermbg=none

set hlsearch
"set incsearch

"autocmd FileType haskell ab comment s/^/--/
"autocmd FileType haskell ab ucomment s/^--//
"autocmd FileType haskell cab comments g/^[ \t]*#
"autocmd FileType haskell vmap cc :s/^/--/<cr>
"autocmd FileType haskell vmap uu :s/^--//<cr>
autocmd FileType haskell set makeprg=ghci


set softtabstop=2 tabstop=2 shiftwidth=2 expandtab
cab marginoff set nonu; set foldcolumn=y
iab ddd debugger

"Camelcase motion
"map <silent> w <Plug>CamelCaseMotion_w
"map <silent> e <Plug>CamelCaseMotion_e
"map <silent> b <Plug>CamelCaseMotion_b

"noremap ,w w
"noremap ,b b
"noremap ,e e

omap <silent> ii <Plug>CamelCaseMotion_iw
"noremap <silent> ii iw

omap <silent> <Plug>IgnoreCamelCaseMotion_iw <Plug>CamelCaseMotion_iw
"xmap <silent> <Plug>IgnoreCamelCaseMotion_iw <Plug>CamelCaseMotion_iw
"omap <silent> <Plug>IgnoreCamelCaseMotion_ib <Plug>CamelCaseMotion_ib
"xmap <silent> <Plug>IgnoreCamelCaseMotion_ib <Plug>CamelCaseMotion_ib

set listchars=tab:>-,trail:·,eol:$,precedes:>,extends:>,nbsp:.
set listchars=tab:»\ ,eol:⇁,trail:.,nbsp:.,extends:➤
set listchars=tab:»\ ,eol:⇁,trail:-,nbsp:◦,extends:➤
set list
nmap <silent> <C-k>  :set nolist!<CR>
highlight NonText ctermfg=darkyellow
highlight SpecialKey ctermfg=darkyellow

noremap ' `
noremap ` :

"movement
"noremap n j
"noremap l k
"noremap k n
"noremap j e
"noremap e l

"noremap k n
"noremap l k
"noremap n l
"
noremap n j
nnoremap e k
xnoremap e k
nnoremap \ l
nnoremap l b
nnoremap u e
nnoremap k nzv
vnoremap k n
nnoremap j u
map E fe
map N fn
"noremap L [z
"noremap U ]z

noremap K Nzv
noremap  
map  [5C <C-Right>
map [5D  <C-Left>
map  [5A <C-Up>
map  [5B <C-Down>

" iTerm
map  O5C <C-Right>
map O5D  <C-Left>
map  O5A <C-Up>
map  O5B <C-Down>
nnoremap <C-Right> <C-w><Right>
nnoremap <C-Left>  <C-w><Left>
nnoremap  <C-Up> <C-w><Up>
nnoremap  <C-Down> <C-w><Down>

nnoremap <M-Up> :cp<CR>
nnoremap <M-Down> :cn<CR>
nnoremap <C-Left> :colder
nnoremap <C-Right> :cnewer

let g:dbext_default_use_sep_result_buffer = 1

map <Leader>gb :GitBlame<CR>
map <leader>gB :GitBlame %<CR>

"let g:gsession_non_default_mapping = 1

"quick inserst in insert mode
inoremap II <Esc>I
inoremap AA <Esc>A
inoremap OO <Esc>O
inoremap WW <Esc>:w<cr>
inoremap EEE <Esc>:e!
inoremap ZZ <Esc>:wq


inoremap CCC <Esc>C
inoremap SSS <Esc>S
inoremap DDD <Esc>dd
inoremap UUU <Esc>u


" paste 
inoremap RR <C-R>
cnoremap RR <C-R>

"erase
inoremap XX <Esc>xi

inoremap PP <Esc>:set paste<Cr>i

let g:fileformat_map = {'unix': 'ⓤ ', 'mac': 'ⓜ ', 'dos': 'ⓓ '}
set laststatus=2
"set statusline ="-- %{fugitive#statusLine()}"
set statusline=%#Error#%{&paste?'PASTE\ ':''}
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%#SLName#
set statusline+=%{&modified?'✘':'✔'}\ %t%q\ %{&readonly?'☂\ ':''}%*
set statusline+=%#PmenuSel#%(%{substitute(fugitive#statusline(),'GIT(\\([a-z0-9\\-_\\./:]\\+\\)).*','♆\ \\1','gi')}\ %)
"set statusline+=%#Pmenu#
"set statusline+=%#SLName#
set statusline+=%{MyGitName()}%*
"set statusline+=%<%(%50F%)%*\ 
set statusline+=%<%(%20{MyDir()}%)%*\ 
set statusline+=%=◀\ %#PmenuSel#%(%Y\ %)
set statusline+=%(%{SyntaxItem()}\ %)
set statusline+=%{&binary?'ⓑ\ ':g:fileformat_map[&fileformat]}
set statusline+=%#SLName#⌦\ \ %-10.(%l,%c%V\ 0x%B%)\ 
"set statusline+=%P
"
"
function MyFlag()
endfunction

function SyntasticStatusLine()
  call SyntasticStatusLineFlag()
endfunction

function MyGitName()
  if exists("b:git_dir")
    return substitute(b:git_dir, '.\{-}\([^/]\+\)/\.git$', '⌦  \1', '')
  else
    return ""
  end
endfunction
function MyDir()
    let bufname = expand('%:p:h')
    let curdir = glob(getcwd())
    let bufname = substitute(bufname, "^".curdir, './','')
    return simplify(substitute(bufname, '^'.$HOME, '~', ""))
endfunction


"au InsertEnter * hi StatusLine ctermb=0 ctermfg=2
"au InsertLeave * hi StatusLine  ctermfg=0 ctermbg=2 
"hi CursorLine ctermbg=green cterm=none

au WinEnter * set cursorline
au WinLeave * set nocursorline

"au CursorHold * set nocursorline
"au CursorMoved * set cursorline
"
set cursorline
hi CursorLine ctermbg=none cterm=underline guifg=NONE
"au InsertLeave * hi CursorLine ctermbg=NONE  cterm=underline guifg=NONE guibg=NONE gui=underline
au InsertLeave * hi CursorLine ctermbg=233 ctermfg=none  cterm=underline guifg=NONE guibg=NONE gui=underline
"au InsertEnter * hi CursorLine ctermbg=98 cterm=none guifg=NONE guibg=slateblue gui=none
"au InsertEnter * hi CursorLine ctermfg=green guifg=NONE guibg=slateblue gui=none
au InsertEnter * set nocursorline
au InsertLeave * set cursorline


"Window
"
"dsdss
map <leader>w <C-W>
map <leader>wn <C-W>j
map <leader>wl <C-W>k
map <leader>we <C-W>l
map <leader>wN <C-W>J
map <leader>wL <C-W>K
map <leader>wE <C-W>L

"Tab
noremap <leader>tn :tabp<cr>
noremap <leader>te :tabn<cr>
noremap <leader>tt :tabnew<cr>
noremap <leader>tq :tabclose<cr>

"quicklist
noremap <space>kn :cn<CR>zv
noremap <space>kN :cnf<CR>zv
noremap <space>kp :cp<CR>zv
noremap <space>kP :cpf<CR>zv
noremap <space>kl :cp<CR>zv
noremap <space>kw :cw<CR>zv
noremap <space>kc :cc<CR>zv
noremap <space>kq :ccl<CR>zv

"nnoremap qn :cn<CR>zv
"nnoremap Qn :cp<CR>zv
"nnoremap qe :cnf<CR>zv
"nnoremap Qe :cpf<CR>zv
"nnoremap qE :clast<CR>zv
"nnoremap QE :cfirst<CR>zv
"nnoremap qN :cnewer<CR>zv
"nnoremap QN :colder<CR>zv

" n , previous/next error
" N first/last file
" e previous/next file
" e olber/newer list
nnoremap ]n :cn<CR>zv
nnoremap [n :cp<CR>zv
nnoremap ]N :clast<CR>zv
nnoremap [N :cfirst<CR>zv
nnoremap ]e :cnf<CR>zv
nnoremap [e :cpf<CR>zv
nnoremap ]E :cnewer<CR>zv
nnoremap [E :colder<CR>zv

nmap q ]
nmap Q [
nnoremap ]] q
nnoremap ]Q Q
nmap <C-Q> <C-]>
nnoremap \q q


inoremap 3# ###
inoremap 4# ####
inoremap 5# #####

"Ack
set grepprg=ack
"set grepprg="grep -R"


"file completions
set wildmenu
set wildmode=longest:full,full
"oset wildignore=*.hs
set suffixes+=.hi

"cab mma w %<CR>:make %<CR>
"spelling mistake
iab lenght length
iab widht width
iab height heigth


nmap WW <space>SS:qa<Cr>

"diff syntax
hi DiffAdd ctermbg=green
hi DiffText ctermbg=yellow




" Java
function SetAnt()
  set makeprg=vimAnt
  set efm=\ %#[javac]\ %#%f:%l:%c:%*\\d:%*\\d:\ %t%[%^:]%#:%m,\ \%A\ %#[javac]\ %f:%l:\ %m,%-Z\ %#[javac]\ %p^,%-C%.%#
endfunction

set undofile
set undodir=~/.vim/undo

"set completeopt=menuone,preview,longest
set completeopt=menuone,preview
"inoremap <expr> <CR> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"

" Omni completion settings
set ofu=syntaxcomplete#Complete
let g:rubycomplete_buffer_loading = 0
let g:rubycomplete_classes_in_global = 1
" completing Rails hangs a lot
"let g:rubycomplete_rails = 1
let g:rails_statusline = 0

"set complete=.,t
hi Pmenu ctermbg=gray ctermfg=darkblue
hi PmenuSel ctermbg=Yellow ctermfg=darkblue

nnoremap <silent>  <C-K><C-K> :set spell!<CR>
nnoremap <silent>  <leader>iw:set wrap!<CR>

"use tab as completion

inoremap <Tab>l <C-X><C-L>
inoremap <Tab>o <C-X><C-O>
inoremap <Tab><tab> <C-X><C-O>
inoremap <Tab>s <C-X><C-S>
inoremap <Tab>d <C-X><C-K>
inoremap <Tab>h <C-X><C-K>
inoremap <Tab>t <C-X><C-]>

"use s-tab for dodgy command
"inoremap <S-Tab> <tab>
inoremap <tab><s-tab> <tab>
inoremap <tab><space> <space>
inoremap <s-tab><space> <space>
inoremap <s-tab><s-tab> <tab>

inoremap <s-tab> <C-O>
inoremap <s-tab><s-tab> <C-R>
inoremap <s-tab>W <esc>:w<cr>i
inoremap <s-tab>@ <esc>@
inoremap @@ <esc>@@
inoremap \@ @
set ph=10
nnoremap <leader>SQ <space>SS:xa

"macro and makeprg
nnoremap <leader>mm :w<CR>:make %<CR>
nnoremap <leader>bb :b#<CR>
nnoremap <leader>bn :BufSurfBack<CR>
nnoremap <leader>be :BufSurfForward<CR>
nnoremap <leader>bE :BufExplorer

"let Tlist_Show_One_File=1
nnoremap <leader>rc :Rcontroller<CR>
nnoremap <leader>rm :Rmodel<CR>
nnoremap <leader>rv :Rview<CR>
nnoremap <leader>rt :Runittest<CR>
nnoremap <leader>rf :Rfunctionaltest<CR>

function MyPaste()
  let s:c = getchar()
  normal "\""+c
endfunction
"easy paste
noremap <leader>pi ".p
noremap <leader>pd "-p
noremap <leader>pP P
noremap <leader>pi ".P
noremap <leader>pI ".P
noremap <leader>pD "-P
noremap <leader>py "0p
noremap <leader>pY "0P

noremap § u
noremap ± 

set sessionoptions-=options
set sessionoptions+=buffers

" easymotion
let g:EasyMotion_leader_key ="<leader>f"
nmap N <leader>fn
nmap E <leader>fe
nmap U <leader>ff
nmap L <leader>fw

"map f <leader>ff
"map F <leader>fF
"map w <leader>fw
"map W <leader>fW
"nnoremap ,f f
"noremap ,F F

cab gems /Users/mb14/.rvm/gems/ruby-1.8.7-p174@sequencescape/gems

command Bdiff w !diff % -



function! s:DiffWithSaved()
  let filetype=&ft
  diffthis
  vnew | r # | normal! 1Gdd
  diffthis
  exe "setlocal bt=nofile bh=wipe nobl noswf ro ft=" . filetype
endfunction
com! DiffSaved call s:DiffWithSaved()
"cab ccd cd %:p:h
"cab ccd lcd %:p:h
hi DiffText ctermbg=darkmagenta ctermfg=gray

cmap <C-r>$ %:p:h
cab ee drop %:p:h
cab er edit ~/


call pathogen#runtime_append_all_bundles( )

""let g:org_todo_setup= 'TODO | STARTED | DONE | WISH'
""let g:agenda_dirs = ["~/Dropbox"]
"let g:agenda_files = ["/Users/mb14/Dropbox/org/main.org", "/Users/mb14/Dropbox/org/work.org"]
"let g:org_tag_setup='{@home(h) @work(w) @Ellie(u) } \n { Ellie(e) Sheena(s) Max&Ellie(m)  } \n {easy(y) hard(d)} \n {computer(c) phone(p) internet(i)}'
"" leave these as is:
"au! BufRead,BufWrite,BufWritePost,BufNewFile *.org 
"au BufRead,BufNewFile *.org            call org#SetOrgFileType()
"au BufRead *.org :PreLoadTags
"au BufWrite *.org :PreWriteTags
"au BufWritePost *.org :PostWriteTags
"" to help for git. we need to be in the good directory
""au FileType org :lcd %:p:h
"let g:org_plugins = ['ShowHide', '|', 'Navigator', 'EditStructure', '|', 'Hyperlinks', '|', 'Todo', 'TagsProperties', 'Date', 'Misc', '|', 'Export']
"vit works
let g:org_agenda_files = ["/Users/mb14/Dropbox/org/main.org", "/Users/mb14/Dropbox/org/work.org"]
"let g:org_plugins = ['ShowHide', '|', 'Navigator', 'EditStructure', '|', 'Hyperlinks']

" crash vit
"let g:org_plugins = ['ShowHide', '|', 'Navigator', 'EditStructure', '|', 'Hyperlinks', '|', 'Todo', 'TagsProperties', 'Date']
"work
"let g:org_plugins = ['ShowHide', '|', 'Navigator', 'EditStructure', '|', 'Hyperlinks', '|', 'Date']
"let g:org_plugins = ['ShowHide', '|', 'Navigator', 'EditStructure', '|', 'Hyperlinks', '|', 'Todo', 'Date', 'Misc', '|', 'Export']
" various text item highlightings are below
"hi Properties guifg=pink ctermfg=darkred
"hi Tags guifg=pink ctermbg=lightred
"hi Dates guifg=magenta ctermfg=darkmagenta
"hi stars guifg=#444444 ctermfg=gray
"hi Props guifg=#ffa0a0 ctermfg=darkred
"hi code guifg=orange gui=bold ctermbg=14
"hi itals gui=italic guifg=#aaaaaa ctermbg=lightgray ctermfg=brown
"hi boldtext gui=bold guifg=#aaaaaa ctermbg=lightyellow
"hi undertext gui=underline guifg=#aaaaaa cterm=underline
"hi lnumber guifg=#999999 ctermfg=gray
"hi OL1 guifg=#7744ff ctermfg=darkblue
"hi OL2 guifg=#aaaa22 ctermfg=darkgreen
"hi OL3 guifg=#00ccff ctermfg=darkcyan
"hi OL4 guifg=#999999 gui=italic  	ctermfg=darkred
"hi OL5 guifg=#eeaaee ctermfg=darkmagenta
"hi OL6 guifg=#9966ff 	ctermfg=darkyellow
"hi OL7 guifg=#dd99dd  	ctermfg=black
"hi OL8 guifg=cyan	ctermfg=grey
"hi OL9 guifg=magenta	ctermfg=blue
"hi OL1 cterm=underline
"hi OL2 cterm=underline
"hi OL3 cterm=underline
"hi OL4 cterm=underline
"hi OL5 cterm=underline
"hi OL6 cterm=underline
"hi OL7 cterm=underline
"hi OL8 cterm=underline
"hi OL9 cterm=underline
"hi OL1 ctermbg=gray
"hi OL2 ctermbg=gray
"hi OL3 ctermbg=gray
"hi OL4 ctermbg=gray
"hi OL5 ctermbg=gray
"hi OL6 ctermbg=gray
"hi OL7 ctermbg=gray
"hi OL8 ctermbg=gray
"hi OL9 ctermbg=gray
"hi FoldText ctermbg=gray
hi TODO ctermfg=darkred ctermbg=none cterm=bold guifg=red guibg=NONE
hi link CANCELED DONE
hi STARTED ctermfg=blue ctermbg=none cterm=bold
hi link NEXT TODO
hi DONE ctermfg=darkgreen ctermbg=none cterm=bold

noremap <silent> T :CommandT<CR>
"noremap <silent> <leader>tt :CommandT<CR>
noremap <silent> <leader>tt :CommandTBuffer<CR>
noremap <silent> <leader>th :CommandT ~/<CR>
noremap <silent> <leader>tv :CommandT ~/.vim<CR>
noremap <silent> <leader>td :CommandT ~/Dropbox<CR>
noremap <silent> <leader>tb :CommandT ~/private/mae/beanstalk<CR>

" We swap t and g, that's a big change !!!
"nnoremap t g
"nnoremap tt gg
"nnoremap g t
""nnoremap T G
"nnoremap tT G
"map tf gf
"nnoremap G T use by commandT
nmap t g
nnoremap \t t
nnoremap tt gg

nnoremap tn <C-d>
nnoremap te <C-u>
nnoremap tN <C-F>
nnoremap tE <C-B>
nnoremap tL ge

let g:CommandTMaxHeight=10
let g:CommandTSelectPrevMap=['<C-e>']
"let g:CommandTCursorEndMap=['<C-o>']
"let g:CommandTCursorStartMap=['<C-i>']
"
"
"
" detect multiple space
syntax match doubleSpace " \zs "
hi doubleSpace cterm=underline ctermbg=red
"
"conceal
function MyConceal()
syntax match hsNiceOperator "\\" conceal cchar=λ
syntax match hsNiceOperator "<-" conceal cchar=←
syntax match hsNiceOperator "->" conceal cchar=→
syntax match hsNiceOperator "=>" conceal cchar=→
syntax match hsNiceOperator "\<sum\>" conceal cchar=∑
syntax match hsNiceOperator "\<product\>" conceal cchar=∏
syntax match hsNiceOperator "\<sqrt\>" conceal cchar=√
syntax match hsNiceOperator "\<pi\>" conceal cchar=π
syntax match hsNiceOperator "\<undefined\>" conceal cchar=⟘
syntax match hsNiceOperator "==" conceal cchar=≡
syntax match hsNiceOperator "\/=" conceal cchar=≠
syntax match hsNiceOperator ">>" conceal cchar=»
hi Conceal  ctermbg=none guibg=NONE
endfunction
       
set conceallevel=2
 "CSV
 hi clear CSVColumnEven CSVColumnOdd CSVColumnHeaderEven CSVColumnHeaderOdd

 hi link  CSVColumnEven Type
 hi link CSVColumnOdd String
 hi clear Conceal
 hi link Conceal Special
hi Conceal  ctermbg=none guibg=NONE

 "Gundo
 let g:gundo_preview_bottom=1
 let g:gundo_map_move_older='n'
 let g:gundo_map_move_newer='e'

nnoremap <silent> <leader>ur :GundoRenderGraph<CR>p<C-W>p
nnoremap <silent> <leader>uu :GundoToggle<CR><C-W>p

au ColorScheme * hi Folded ctermbg=none
au ColorScheme * hi SpellBad cterm=none
au ColorScheme * hi SpellRare cterm=none
"au BufEnter * hi Special cterm=underline
au ColorScheme * hi SLName cterm=reverse guibg=blue guifg=white
au ColorScheme * hi NonText ctermbg=NONE guibg=NONE ctermfg=brown guifg=#cccc00


"colorscheme rubyblue
colorscheme darkZ
if has("gui_running")
  "colorscheme molokai
  colorscheme ambient
  hi clear Folded
  set guioptions=ge
  nnoremap <silent> <leader>bf :set fu!<cr>
else
  "set t_Co=256
  let g:solarized_termcolors=256
  au ColorScheme * hi Normal ctermbg=black
  au ColorScheme distinguished hi Comment ctermbg=237
  "au ColorScheme distinguished hi link Folded Comment
  color distinguished
end
"au BufEnter */merged/* colorscheme github | doau ColorScheme
"au BufEnter devel/edge/* colorscheme camo | doau ColorScheme
"au BufEnter *.rb colorscheme rubyblue | doau ColorScheme |  hi Normal ctermbg=234<cr>g
"
function MyColor(scheme, force, bg)
  if a:force && (a:scheme != "none")
    let b:colors_name=a:scheme
    let b:colors_name_bg=a:bg
  end
  if exists("b:colors_name")
    let  scheme = b:colors_name
    let bg = b:colors_name_bg
    exe 'echo "use '.scheme.' #'.bg.'"'
  else
    if a:scheme == "none"
      return
    endif
    let scheme = a:scheme
    let bg = a:bg
  endif

  if g:colors_name != scheme || !a:force
    execute 'colorscheme '.scheme
    execute 'doau ColorScheme'
    if bg != 0
      execute 'hi Normal ctermbg='.bg
      execute 'hi NonText ctermbg='.bg
    endif
  endif
endfunction
command -nargs=1 Color call MyColor("<args>",1,0)
command -nargs=1 ColorDark call MyColor("<args>",1,232)
command -nargs=1 ColorLigh call MyColor("<args>",1,"white")
"au BufEnter */merged/app/* call MyColor("dw_red", 0, 234)
"au BufEnter */edge/app/* call MyColor("dw_orange", 0, 232)
augroup AutoColor
au BufEnter * colorscheme darkZ | doau ColorScheme
au BufEnter * call MyColor("rubyblue", 0, 232)
au BufEnter *..* call MyColor("dw_orange", 0, 232)
au BufEnter mb14/* call MyColor("dw_green", 0, 232)
au BufEnter */Dropbox* call MyColor("dw_blue", 0, 232)
au BufEnter *.feature call MyColor("camo", 0, 232)
au BufEnter *.rb call MyColor("rubyblue", 0, 232)
au!
au WinEnter * call MyColor("none",0,0)
augroup END

nmap <silent> <localleader>cg :call MyColor("github", 1, "white")<cr>
nmap <silent> <localleader>cc :call MyColor("camo", 1, 0)<cr>
nmap <silent> <localleader>cd :cal MyColor("darkZ", 1, 0)<cr>
nmap <silent> <localleader>co :call MyColor("dw_orange", 1, 234)<cr>
nmap <silent> <localleader>cr :call MyColor("rubyblue", 1 , 234)<cr>
nmap <silent> <localleader>cs :call MyColor("solarized", 1 , 234)<cr>
nmap <silent> <localleader>cv :colorscheme org_dark<cr>
syn match Dir "/\w\+" contains=@NoSpell
syn match Upper "[A-Z]\w\+" contains=@NoSpell


function! SyntaxItem()
  return synIDattr(synID(line("."),col("."),1),"name")
endfunction

augroup BgHighlight
    autocmd!
    "autocmd WinEnter * set fdc=2 | set nonumber
    "autocmd WinLeave * set fdc=0 | set nu | set  nuw=2
    "autocmd ColorScheme * hi clear FoldColumn
    "autocmd ColorScheme * hi link FoldColumn StatusLine
    "autocmd WinEnter * set number
    "autocmd WinLeave * set nonumber
    "autocmd ColorScheme * hi clear LineNr
    "autocmd ColorScheme * hi link LineNr StatusLine
  "autocmd WinLeave * let w:syntax=&syntax | setl syntax=off | set nospell
  "autocmd WinEnter * call MySyntax()
augroup END
function MySyntax()
  if exists("w:syntax")
    let &syntax=w:syntax
  endif
endfunction
cab m3 3match StatusLine
cab m2 2match Todo
cab m1 match Error


let delimitMate_expand_cr = 1
let delimitMate_expand_space = 1


" Execute open rspec buffer
" Thanks to Ian Smith-Heisters
function! RunSpec(args)
 if exists("b:rails_root") && filereadable(b:rails_root . "/script/spec")
   let spec = b:rails_root . "/script/spec"
 else
   let spec = "spec"
 end
 let cmd = ":! " . spec . " % -cfn " . a:args
 execute cmd
endfunction
 
" Mappings
" run one rspec example or describe block based on cursor position
autocmd FileType rspec nnoremap <localleader>s !s :call RunSpec("-l " . <C-r>=line('.')<CR>)<CR>
" run full rspec file
autocmd FileType rspec nnoremap <localleader>f :call RunSpec("")<CR>



let g:user_zen_leader_key = '<leader>z'
"let g:user_zen_expandabbr_key = '<c-y>'
imap <tab>i <esc><leader>z,
imap <tab>I <esc><leader>z;


"nnoremap <silent> ,/ :noh<cr>

" forcing myself to use proper mapping
nmap <Esc> <nop>
"nmap : <nop>
"
"dbext
nmap <leader>sp vipsE
let g:syntastic_enable_signs=1

let g:tagbar_ctags_bin="/usr/local/bin/ctags"


ab fmae ftp://mae@ftp.realtecuk.com


autocmd BufReadPre *.xls set ro | setf csv
autocmd BufReadPost *.xls silent! %!xls2csv -q -x "%" -c -
autocmd BufReadPost *.xls redraw


"test heatmap
function! IndentationHeatMap()
    set conceallevel=1
    for i in range(1,9)
        let indentation = repeat(" ", &sts *t it i i)
        exe 'syntax match NonText "^t it e ig' . indentation . '" conceal cchar=' . i
    endfor
endfunction


let g:indent_guides_start_level=2
let g:indent_guides_guide_size=1
let g:indent_guides_enable_on_vim_startup=0
let g:indent_guides_color_change_percent=5
"let g:indent_guides_auto_colors=0
autocmd VimEnter, Colorscheme * :hi IndentGuidesOdd guibg=NONE ctermbg=none
autocmd VimEnter, Colorscheme * :hi IndentGuidesEven  guibg=gray30 ctermbg=234
autocmd Colorscheme molokai :hi NonText guifg=yellow guibg=NONE
autocmd Colorscheme * :hi NonText guifg=yellow guibg=NONE

let g:context=5

cab mae ~/private/mae/beanstalk


"folding
nmap ,, zm
nmap ,. zr

nnoremap : ;
nnoremap ; :

"nnoremap <silent> <leader>ig :IndentGuidesToggle<cr>
nnoremap <leader>ig :IndentGuidesToggle<cr>
nnoremap <leader>iw :set wrap!<cr>
nnoremap <leader>it :IndentGuidesToggle<cr>

cnoremap ; !
cnoremap ! ;

nnoremap ]t vatatv
nnoremap [t vatatov

let g:rbpt_colorpairs = [
    \ ['magenta',   'RoyalBlue3'],
    \ ['green',     'DarkOrchid3'],
    \ ['cyan',    'firebrick3'],
    \ ['yellow',         'firebrick3'],
    \ ['magenta',   'RoyalBlue3'],
    \ ['green',     'DarkOrchid3'],
    \ ['cyan',    'firebrick3'],
    \ ['yellow',         'firebrick3'],
    \ ['magenta',   'RoyalBlue3'],
    \ ['green',     'DarkOrchid3'],
    \ ['cyan',    'firebrick3'],
    \ ['yellow',         'firebrick3'],
    \ ['magenta',   'RoyalBlue3'],
    \ ['green',     'DarkOrchid3'],
    \ ['cyan',    'firebrick3'],
    \ ['yellow',         'firebrick3'],
    \ ]

let g:rbpt_max = 16
au VimEnter * RainbowParenthesesToggle
au Syntax * RainbowParenthesesLoadRound
au Syntax * RainbowParenthesesLoadSquare
au Syntax * RainbowParenthesesLoadBraces


"changes
nnoremap ]h g;
nnoremap [h g,


call matchadd("Question","\d\{1,3}\>")
call matchadd("Question","\d\{1,3}\d\{6}\>")

