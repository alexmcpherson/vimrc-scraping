""" my ~/.vimrc
""" Pocket7878 <poketo7878@gmail.com>
""" Last Update: 2011-07-05
"""
""" Coding rules
"""  * 折り畳みの末尾行はあとから追加しやすいようにかならず空白行に置く
"""  * 折り畳みの章のタイトルには "" を利用する
"""

""Start Loading
if !exists('s:loaded_my_vimrc')
	" to use many extensions of Vim.
	set nocompatible
endif

""Basic settings"{{{
"構文ハイライト
syntax enable
"行番号の表示
set number
"入力した括弧に対応する括弧のハイライト
set showmatch
"入力時に自動的に前の行と同じインデントに
set autoindent
"高度なインデントの設定
set smartindent
"C言語の高度なインデントをする
set cindent 
"行頭の余白内でTabを打ち込むと,'shiftwidth'との数だけインデントする
set smarttab
"ファイル保存時にバックアップファイルを作成しない
set nobackup
"カーソルのある行番号の表示
set ruler
"入力したコマンドを最下行に出力
set showcmd
"インクリメンタルサーチを行う
set incsearch
"検索時に大文字を含んでいたら大文字小文字を区別しない
set nosmartcase
"ファイルタイプにあわせたプラグインを有効にする
filetype plugin indent on
"ファイルタイプにあわせたインデントを有効にする
filetype indent on
"フォーマットオプションを設定する
set formatoptions=tcqlM1
"ステータスラインを表示
set laststatus=2 
"ステータスラインの内容を定義
set statusline=%<[%n]%m%r%h%w%{'['.(&fenc!=''?&fenc:&enc).':'.&ff.']['.&ft.']'}\ %F%=%l,%c%V%8P  
"削除方法の設定
set backspace=indent,eol,start
"端末でもマウスを使う
set ttymouse=xterm2
"Esc二回でハイライトを消す
nnoremap  <Esc><Esc> :nohlsearch<CR><Esc>
"Mapleaderの設定
let mapleader = ','
let maplocalleader = '.'
"折りたたみに関する設定
set fdm=marker
"Tabをスペース変換する
set expandtab
"}}}

""新規ファイルを作成したときの設定"{{{
"Lisp & Scheme
let lisp_rainbow = 1
autocmd FileType lisp set nocindent | set lisp | let lisp_rainbow = 1 
autocmd FileType scheme set nocindent | set lisp | let lisp_rainbow = 1
"HTML
"HTMLテンプレートを挿入
autocmd BufNewFile *.html 0r ~/Documents/vim-template/html.template
"}}}

""ファイルを開いたときの設定"{{{
"Lispファイルを開いたときの動作
aug Lisp
	au!
	autocmd FileType lisp set nocindent nosmartindent lisp
aug END

"Gauche対応のSchemeインデントを行う"
aug Scheme
	au!
	 autocmd FileType scheme set nosmartindent nocindent lispwords=define lisp
aug END
let is_gauche=1
"}}}

""文字コードなどに関する設定"{{{
set encoding=utf-8
"改行コードを自動認識
set fileformats=unix,dos,mac
"□とか○の文字があってもカーソル位置がずれないようにする
if exists('&ambiwidth')
  set ambiwidth=double
endif

"改行コードの自動認識"
set fileformats=unix,dos,mac
"}}}

""コメントインアウトするキーバインド"{{{
" lhs comments
vmap <Leader># :s/^/#/<CR>:nohlsearch<CR>
vmap <Leader>/ :s/^/\/\//<CR>:nohlsearch<CR>
vmap <Leader>> :s/^/> /<CR>:nohlsearch<CR>
vmap <Leader>" :s/^/\"/<CR>:nohlsearch<CR>
vmap <Leader>% :s/^/%/<CR>:nohlsearch<CR>
vmap <Leader>! :s/^/!/<CR>:nohlsearch<CR>
vmap <Leader>; :s/^/;/<CR>:nohlsearch<CR>
vmap <Leader>- :s/^/--/<CR>:nohlsearch<CR>
vmap <Leader>c :s/^\/\/\\|^--\\|^> \\|^[#"%!;]//<CR>:nohlsearch<CR>
" wrapping comments
vmap <Leader>* :s/^\(.*\)$/\/\* \1 \*\//<CR>:nohlsearch<CR>
vmap <Leader>( :s/^\(.*\)$/\(\* \1 \*\)/<CR>:nohlsearch<CR>
vmap <Leader>< :s/^\(.*\)$//<CR>:nohlsearch<CR>
vmap <Leader>d :s/^\([/(]\*\\|\)$/\2/<CR>:nohlsearch <CR>
" block comments
vmap <Leader>b v`k0i/*`>j0i*/<CR>
vmap <Leader>h v`k0i<CR>
"}}}

""Vimの戦闘力を計算する"{{{
function! Scouter(file, ...)
	let pat = '^\s*$\|^\s*"'
	let lines = readfile(a:file)
	if !a:0 || !a:1
		let lines = split(substitute(join(lines, "\n"), '\n\s*\\', '', '\g'), "\n")
	endif
	return len(filter(lines,'v:val !~ pat'))
endfunction
command! -bar -bang -nargs=? -complete=file Scouter
\ 	echo Scouter(empty(<q-args>) ? $MYVIMRC : expand(<q-args>), <bang>0)
"}}}

""GUIで動作しているときのための設定"{{{
if has('gui_running')
	set guioptions+=m
	set mousemodel=popup
	set mouse=a
	set nomousefocus
	set mousehide
	"set imdisable
        colorscheme desert
        set guifont=Monospace\ 12
        set lines=27
        set columns=100
endif
"}}}

""Quick fix Keymapping"{{{
nnoremap Q q

nnoremap qj  :cnext<CR>
nnoremap qk  :cprevious<CR>
nnoremap qr  :crewind<CR>
nnoremap qK  :cfirst<CR>
nnoremap qJ  :clast<CR>
nnoremap qf  :cnfile<CR>
nnoremap qF  :cpfile<CR>
nnoremap ql  :clist<CR>
nnoremap qq  :cc<CR>
nnoremap qo  :copen<CR>
nnoremap qc  :cclose<CR>
nnoremap qw  :cwindow<CR>
nnoremap qp  :colder<CR>
nnoremap qn  :cnewer<CR>
nnoremap qm  :make<CR>
nnoremap qM  :make<Space>
nnoremap qg  :grep<Space>
nnoremap q   <Nop>
"}}}

""Emacs like spliting key-bind"{{{
nnoremap <C-x>1 :only<CR>
nnoremap <C-x>2 :split<CR>
nnoremap <C-x>3 :vsplit<CR>
nnoremap <C-x>0 :close<CR>
"}}}

""ウィンドウを切りかえたときに自動的にサイズ調整する"{{{
"nnoremap <C-w>h <C-w>h:call <SID>good_width()<CR>
"nnoremap <C-w>l <C-w>l:call <SID>good_width()<CR>
"nnoremap <C-w>H <C-w>H:call <SID>good_width()<CR>
"nnoremap <C-w>L <C-w>L:call <SID>good_width()<CR>
"
"function! s:good_width()
"  if winwidth(0) < 120
"    vertical resize 120
"  endif
"endfunction
"}}}

""TOHtmlでどのようにHTML化するかの設定"{{{
let g:use_xhtml = 1
let g:html_use_css = 1
let g:html_no_pre = 1
"let g:html_ignore_folding = 1
let g:html_dynamic_folds=1
let g:html_use_encoding = "UTF-8"
"}}}

""Insert Modeでのキーバインドの設定"{{{
"Ctrl-eで行末Ctrl-aで行頭
imap <C-e> <END> 
imap <C-a> <HOME>
"}}}

""クリップボードの同期の設定"{{{
set clipboard+=autoselect
set clipboard+=unnamed
"if has('unnamedplus')
"	set clipboard+=unnamedplus
"endif
"}}}

""便利なコマンドやキーバインド"{{{
"ファイル名を変更して開き直す
command! -nargs=1 -complete=file Rename f <args>|call delete(expand('#'))
"別名のファイルを保存してそちらを開く
command! -nargs=1 -complet=file Copy f <args>|call copy(expand('#'))
"Vimrcを簡単にリロード
command! ReloadVimrc  source $MYVIMRC 
"Easy souce
nnoremap <silent> <Leader>s : source %<CR>
"}}}

""Settings for Vundle"{{{
filetype off

set rtp+=~/.vim/vundle/
call vundle#rc()

"Original repos on github
Bundle 'kana/vim-scratch'
Bundle 'Shougo/vimshell'
Bundle 'Shougo/neocomplcache'
Bundle 'Shougo/unite.vim'
Bundle 'Shougo/vimfiler'
Bundle 'Shougo/vimproc'
"Bundle 'tyru/eskk.vim'
Bundle 'tyru/open-browser.vim'
Bundle 'tyru/savemap.vim'
Bundle 'tyru/vice.vim'
Bundle 'ujihisa/unite-colorscheme'
Bundle 'ujihisa/vital.vim'
Bundle 'thinca/vim-quickrun'
Bundle 'thinca/vim-fontzoom'
Bundle 'mattn/zencoding-vim'
Bundle 'vim-scripts/slimv.vim'
Bundle 'pocket7878/vinarise'
Bundle 'pocket7878/curses-vim'
Bundle 'pocket7878/outputz'
Bundle 'pocket7878/presen-vim'
Bundle 'hsitz/VimOrganizer'
Bundle 'tpope/vim-surround'
Bundle 'tsukkee/lingr-vim'
Bundle 'tpope/vim-rails'

" vim-scripts repos
"Bundle 'outputz'
Bundle 'Align'
Bundle 'TwitVim'
Bundle 'VimClojure'
" non github repos
" ....

filetype plugin indent on
"}}}

""Settings for eskk.vim"{{{
"let g:eskk#large_dictionary = {
"	\	'path': "/usr/share/skk/SKK-JISYO",
"	\	'sorted': 1,
"	\	'encoding': 'euc-jp',
"\}
"autocmd InsertEnter * set statusline=%<[%n]%{eskk#statusline()}%m%r%h%w%{'['.(&fenc!=''?&fenc:&enc).':'.&ff.']['.&ft.']'}\ %F%=%l,%c%V%8P  
"autocmd InsertLeave * set statusline=%<[%n]%m%r%h%w%{'['.(&fenc!=''?&fenc:&enc).':'.&ff.']['.&ft.']'}\ %F%=%l,%c%V%8P  
"}}}

""Settings for Neocomplcache"{{{
"Use neocomplcache
let g:neocomplcache_enable_at_startup = 1
"}}}

""Settings for VimFiler"{{{
"Use VimFiler as default file explorer
let g:vimfiler_as_default_explorer = 1
let g:vimfiler_safe_mode_by_default = 0
nnoremap <silent> <Leader>f :VimFiler<CR>
"}}}

""Settings for Unite"{{{
"keybind for Unite file_mru
nnoremap <silent> <Leader>u :Unite file_mru<CR>
"keybind for Unite buffer
nnoremap <silent> <Leader>b :Unite buffer<CR>
"keybind fro Unite command
nnoremap <silent> <Leader>c :Unite command<CR>
"}}}

""Settings for Slimv"{{{
"Turn off paredit mode
let g:paredit_mode = 0
"}}}

""Setting for outputz.vim"{{{
"outputz.vim key (Import from local file)
if filereadable(expand('~/.outputz.vim.local'))
	source ~/.outputz.vim.local
endif
"}}}

""Setting for VimOrganizer"{{{
let g:org_todo_setup='TODO | DONE'
" while g:org_tag_setup is itself a string
let g:org_tag_setup='{@home(h) @work(w) @tennisclub(t)} \n {easy(e) hard(d)} \n {computer(c) phone(p)}'

" leave these as is:
au! BufRead,BufWrite,BufWritePost,BufNewFile *.org 
au BufRead,BufNewFile *.org            call org#SetOrgFileType()
au BufRead *.org :PreLoadTags
au BufWrite *.org :PreWriteTags
au BufWritePost *.org :PostWriteTags

function! Org_property_changed_functions(line,key, val)
        call confirm("prop changed: ".a:line."--key:".a:key." val:".a:val)
endfunction
function! Org_after_todo_state_change_hook(line,state1, state2)
        call ConfirmDrawer("LOGBOOK")
        let str = ": - State: " . Pad(a:state2,10) . "   from: " . Pad(a:state1,10) .
                    \ '    [' . Timestamp() . ']'
        call append(line("."), repeat(' ',len(matchstr(getline(line(".")),'^\s*'))) . str)
        
endfunction
"}}}

"Setting for QFixHowm"{{{
set runtimepath+=~/.vim/bundle/qfixapp
"keymap reader
let QFixHowm_Key = 'g'
"setting up howm_dir
let howm_dir = '~/howm'
let howm_filename = '%Y/%m/%Y-%m-%d-%H%M%S.howm'
let howm_fileencoding = 'utf-8'
let howm_filefomat = 'unix'
"}}}

""Gmail vim"{{{
"define user account
if filereadable(expand('~/.gmail-vim.local'))
	source ~/.gmail-vim.local
endif
"}}}

set rtp+=/home/hogehoge/.vim/bundle/unite-hyperspec/
let g:unite_hyperspec_base_dir = "~/Desktop/HyperSpec/"
""Load finish
let s:loaded_my_vimrc = 1
