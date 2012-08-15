" 一般的な設定 {{{
"=============================================================
set nocompatible
filetype off
set tags=~/.tags
set vb t_vb=  		" ビープ音いらない 
set shortmess+=I	" 起動時のメッセージいらない 
set hidden
set nobackup		" バックアップ作らない
set noswapfile		" swapファイル作らない
set autoread		" 他で書き換えられたら自動で読み直す
set splitbelow		" 標準で下分割
set splitright		" 右分割にする
set showmatch		" 括弧入力時に対応する括弧を表示
set cindent
set ruler			" ルーラー表示
set showcmd			" コマンドをステータス行に表示
set title			" タイトルを表示
set number			" 行番号表示
set ignorecase		" 大文字小文字を無視して検索 
set smartcase		" 大文字を入力すると大文字小文字無視を解除
set wrapscan		" 先頭に戻って検索
set hlsearch		" 前回の検索結果が残ってればハイライトする
set textwidth=0		" 自動改行させない
set shellslash		" Windowsでもパス区切りにスラッシュを使える
set lazyredraw		" Dont redraw screen while Macro proceeding
set backspace=indent,eol,start	" バックスペースでなんでも消せるように
set formatoptions+=m			" 整形オプション，マルチバイト系を追加
set wildmenu					" コマンド補完を強化
set wildmode=list:full			" リスト表示，最長マッチ
set fileformats=unix,dos,mac	" 改行コードの自動認識
set list			" タブなどの制御文字を表示
set tabstop=4
set lcs=tab:>.,trail:_,extends:\	" タブを表示する。改行文字は表示しない
set laststatus=2	"常にステータス行を表示
set statusline=%<%f\ %m%r%h%w%{'['.(&fenc!=''?&fenc:&enc).']['.&ft.']['.&ff.']'}%=%l,%c%V%8P
:syntax on			" シンタックスハイライトを有効にする
:imap <C-z> <C-y>
"=============================================================
"}}}

" Vundle設定 {{{
" BundleInstallでうまくいかない場合はコマンドラインで
" vim +BundleInstall +qall
if has("win32") || has("win64")
  au FileType vundle setlocal noshellslash
  set rtp+=~/vimfiles/bundle/vundle/
  call vundle#rc('~/vimfiles/bundle')
else
  set rtp+=~/.vim/bundle/vundle/
  call vundle#rc()
end
Bundle 'gmarik/vundle'
"}}}

" Vundleで読み込むプラグインの設定 {{{
Bundle 'thinca/vim-quickrun'
if v:version >= 703
Bundle 'Shougo/vimproc'
Bundle 'Shougo/vimshell'
endif
Bundle 'vim-scripts/SQLUtilities'
Bundle 'vim-scripts/Align'
Bundle 'vim-scripts/YankRing.vim'
Bundle 'msanders/snipmate.vim'
Bundle 'scrooloose/nerdcommenter'
Bundle 'thinca/vim-ref'
Bundle 'kana/vim-smartchr'
Bundle 'tpope/vim-surround'
Bundle 'mattn/zencoding-vim'
Bundle 'git://repo.or.cz/vcscommand'
Bundle 'ndreynolds/vim-cakephp'
Bundle 'scrooloose/syntastic.git'
Bundle 'Lokaltog/vim-easymotion'
Bundle 'nathanaelkane/vim-indent-guides'
" vim-script
Bundle 'taglist.vim'
Bundle 'sudo.vim'
Bundle 'tyru/open-browser.vim'
" neocomplcache {{{
if v:version >= 703
Bundle 'Shougo/neocomplcache'
Bundle 'ryuzee/neocomplcache_php_selenium_snippet'
Bundle 'Shougo/neocomplcache-snippets-complete'
endif
"}}}
" colorscheme etc {{{
Bundle 'thinca/vim-guicolorscheme'
Bundle 'vim-scripts/Diablo3.git'
Bundle 'vim-scripts/Lucius'
Bundle 'vim-scripts/mrkn256.vim'
Bundle 'jnurmine/Zenburn'
Bundle 'tomasr/molokai'
Bundle 'inkpot'
"}}}
" required by unite-vim_hacks {{{
Bundle 'mattn/webapi-vim'
Bundle 'thinca/vim-openbuf'
"}}}
" unite {{{
if v:version >= 703
Bundle 'unite.vim'
Bundle 'ujihisa/unite-colorscheme' 
Bundle 'ujihisa/unite-font' 
Bundle 'oppara/vim-unite-cake' 
Bundle 'h1mesuke/unite-outline'
Bundle 'ujihisa/unite-locate'
Bundle 'kmnk/vim-unite-svn'
Bundle 'choplin/unite-vim_hacks'
Bundle 'tsukkee/unite-help'
Bundle 'h1mesuke/unite-outline'
endif
"}}}
" zoom {{{
Bundle 'thinca/vim-fontzoom'
"}}}
" ctrlp {{{
" http://kien.github.com/ctrlp.vim/
" http://mattn.kaoriya.net/software/vim/20111228013428.htm
Bundle 'kien/ctrlp.vim'
"}}}
" PHPUnit formatter http://www.karakaram.com/vim/phpunit-location-list/ {{{
Bundle 'karakaram/vim-quickrun-phpunit'
"}}}
"}}}

" Look and Feel {{{
"
if !has('gui')
  set t_Co=256
endif

" 背景色の設定 {{{
" evening / lucius / mrkn256 / zenburn / Diablo3 / molokai
if has('gui')
  ":colorscheme molokai 
  :colorscheme inkpot
else
  :colorscheme blue
endif

if v:version >= 703
  let g:indent_guides_enable_on_vim_startup = 1
  let g:indent_guides_auto_colors = 1 
  let g:indent_guides_color_change_percent = 30
  let g:indent_guides_guide_size = 1
  "set background=dark
  "autocmd VimEnter,Colorscheme * :hi IndentGuidesOdd  guibg=red   ctermbg=3
  "autocmd VimEnter,Colorscheme * :hi IndentGuidesEven guibg=green ctermbg=4
endif
"}}}

" gvimでウインドウの位置とサイズを記憶する {{{
" http://vim-users.jp/2010/01/hack120/
if has('gui')
let g:save_window_file = expand('~/.vimwinpos')
augroup SaveWindow
  autocmd!
  autocmd VimLeavePre * call s:save_window()
  function! s:save_window()
    let options = [
      \ 'set columns=' . &columns,
      \ 'set lines=' . &lines,
      \ 'winpos ' . getwinposx() . ' ' . getwinposy(),
      \ ]
    call writefile(options, g:save_window_file)
  endfunction
augroup END
if filereadable(g:save_window_file)
  execute 'source' g:save_window_file
endif
endif
"}}}

" フォーカスがあたっていない場合は透明にする {{{
augroup hack234
  autocmd!
    if has('mac')
      autocmd FocusGained * set transparency=10
      autocmd FocusLost * set transparency=30
    endif
augroup END
"}}}

" Windowの形状設定 {{{
if has('gui')
  set showtabline=2  " タブを常に表示
  set imdisable  " IMを無効化
  set guioptions-=T   " ツールバー非表示
endif
if has('gui_macvim')
  set transparency=0  " 透明度を指定
endif
"}}}

" フォント設定 {{{
if has('gui_macvim')
  set guifont=Inconsolata:h12
  set guifontwide=Courier:h12
  set antialias
elseif has('gui_running')
  set gfn=Takaoゴシック\ 11
endif
"}}}

"}}} // Look and Feel

" QuickRunによる設定 {{{
let g:quickrun_config = {}
let g:quickrun_config['*'] = {'split': ''}

augroup QuickRunPHPUnit
  autocmd!
  autocmd BufWinEnter,BufNewFile *Test.php set filetype=phpunit
augroup END

let g:quickrun_config['phpunit'] = {}
let g:quickrun_config['phpunit']['outputter'] = 'phpunit'
let g:quickrun_config['phpunit']['command'] = 'phpunit'
let g:quickrun_config['phpunit']['exec'] = '%c %o %s'
" 面倒なのでrrでquickrun実行
silent! nmap <unique> <C-r> <Plug>(quickrun)
"}}}

filetype plugin indent on		" ファイル種類別にインデントする

" unite.vim {{{
" 入力モードで開始する
let g:unite_enable_start_insert=1
" 縦分割で開く(オフにする)
let g:unite_enable_split_vertically = 0 
" Windowの幅
let g:unite_winwidth = 40
" Window
let g:unite_winheight = 10
" バッファ一覧
nnoremap <silent> ,ub :<C-u>Unite buffer<CR>
" ファイル一覧
nnoremap <silent> ,uf :<C-u>UniteWithBufferDir -no-quit -buffer-name=files file<CR>
" レジスタ一覧
nnoremap <silent> ,ur :<C-u>Unite -no-quit -buffer-name=register register<CR>
" 最近使用したファイル一覧
nnoremap <silent> ,um :<C-u>Unite -no-quit file_mru<CR>
" 常用セット
nnoremap <silent> ,uu :<C-u>Unite -no-quit buffer file_mru<CR>
" 全部乗せ
nnoremap <silent> ,ua :<C-u>UniteWithBufferDir -no-quit -buffer-name=files buffer file_mru bookmark file<CR>
" colorscheme 
nnoremap <silent> ,uc :<C-u>Unite colorscheme<CR>
" outline 
nnoremap <silent> ,uo :<C-u>Unite outline<CR>

" ウィンドウを分割して開く
au FileType unite nnoremap <silent> <buffer> <expr> <C-j> unite#do_action('split')
au FileType unite inoremap <silent> <buffer> <expr> <C-j> unite#do_action('split')
" ウィンドウを縦に分割して開く
au FileType unite nnoremap <silent> <buffer> <expr> <C-l> unite#do_action('vsplit')
au FileType unite inoremap <silent> <buffer> <expr> <C-l> unite#do_action('vsplit')

" unite.vim上でのキーマッピング
autocmd FileType unite call s:unite_my_settings()
function! s:unite_my_settings()
  " 単語単位からパス単位で削除するように変更
  imap <buffer> <C-w> <Plug>(unite_delete_backward_path)
  " ESCキーを2回押すと終了する
  nmap <silent><buffer> <ESC><ESC> q
  imap <silent><buffer> <ESC><ESC> <ESC>q
endfunction
"}}}

" neocomplcacheを有効にする {{{
if v:version >= 703
  let g:neocomplcache_enable_at_startup = 1
  " 大文字小文字を区別する
  let g:neocomplcache_SmartCase = 1
  " キャメルケース補完を有効にする
  let g:neocomplcache_enable_camel_case_completion = 1
  " アンダーバー補完を有効にする
  let g:NeoComplCache_EnableUnderbarCompletion = 1
  "ポップアップメニューで表示される候補の数。初期値は100
  let g:neocomplcache_max_list = 20
  "自動補完を行う入力数を設定。初期値は2
  let g:neocomplcache_auto_completion_start_length = 4 
  "手動補完時に補完を行う入力数を制御。値を小さくすると文字の削除時に重くなる
  let g:neocomplcache_manual_completion_start_length = 5
  "バッファや辞書ファイル中で、補完の対象となるキーワードの最小長さ。初期値は4。
  let g:neocomplcache_min_keyword_length = 4
  "シンタックスファイル中で、補完の対象となるキーワードの最小長さ。初期値は4。
  let g:neocomplcache_min_syntax_length = 4
  "1:補完候補検索時に大文字・小文字を無視する
  let g:neocomplcache_enable_ignore_case = 1
  "入力に大文字が入力されている場合、大文字小文字の区別をする
  let g:neocomplcache_enable_smart_case = 1

  " <C-k> にマッピング
  " Snippetの候補の選択およびプレースホルダーの移動は以下のコマンドで行う
  imap <C-k> <Plug>(neocomplcache_snippets_expand)
  smap <C-k> <Plug>(neocomplcache_snippets_expand)
endif
"}}}

" (),[],{},<>,””,’’,“入力+()の中にカーソル戻す {{{
imap {} {}<LEFT>
imap [] []<LEFT>
imap () ()<LEFT>
imap <> <><Left>
imap "" ""<Left>
imap '' ''<Left>
"}}}

" カーソル位置と現在行を示す {{{
:set cursorline
:highlight CursorLine term=reverse cterm=reverse
"}}}

" コメント行をグレー表示する(コンソール）{{{
hi Comment ctermfg=7
"}}}

" クリップボードの設定 {{{
if has('gui')
  set clipboard=unnamed
endif
"}}}

"全角スペースの位置を表示 {{{
highlight JpSpace cterm=underline ctermfg=Blue guifg=Blue
" au BufRead,BufNew * match JpSpace /　/
"}}}

" vim-refの設定 {{{
let g:ref_alc_cmd='lynx -dump -nonumbers %s'
let g:ref_phpmanual_path = $HOME . '/.vim/others/phpmanual'
"nnoremap <silent> <Space>K :<C-u>call ref#jump('normal', 'alc')<CR>
"vnoremap <silent> <Space>K :<C-u>call ref#jump('visual', 'alc')<CR>

" カーソル位置の単語をalcで検索する。カーソルがある状態で:alcで実行
nnoremap <silent> :alc :<C-u>call ref#jump('normal', 'alc')<CR>
vnoremap <silent> :alc :<C-u>call ref#jump('visual', 'alc')<CR>
"}}}

" 言語別 {{{
" php {{{

"=============================================================
" makeコマンドを入力すると、PHPの構文エラーがないかどうかもチェック可能
" expandtab を設定するとタブをスペースに展開する
"=============================================================
:autocmd FileType php set tabstop=4 shiftwidth=4 makeprg=php\ -l\ % errorformat=%m\ in\ %f\ on\ line\ %l 

"=============================================================
" 文字列の中のSQLをハイライトする
"=============================================================
:autocmd FileType php let php_sql_query=1

"=============================================================
" 文字列の中のHTMLをハイライトする
"=============================================================
:autocmd FileType php let php_htmlInStrings=1

"=============================================================
" ショートタグのハイライトを無効にする
"=============================================================
:autocmd FileType php let php_noShortTags=1

"=============================================================
" 辞書から関数を選択できるようにする
" キーワード上でctrl + x ctrl + kを入力
"=============================================================
:autocmd FileType php set dictionary=~/.vim/dictionary/PHP.dict

"=============================================================
" cakephpのスニペットを有効にする
"=============================================================
:autocmd FileType ctp set ft=php.cakephp

"=============================================================
" クラスと関数の折り畳みを許可する
" zo 折り畳みを開く
" zc 折り畳みを閉じる
" zR 全部開く
" zM 全部閉じる
" zj 次の折り畳みに移動
" zk 前の折り畳みに移動
"=============================================================
let php_folding=3
set foldmethod=marker

"#############################################################
" // phpの設定ここまで
"#############################################################
"}}}

" python {{{
:autocmd FileType py set tabstop=4 shiftwidth=4 expandtab 
:autocmd FileType javascript set tabstop=4 shiftwidth=4 expandtab fileencoding=utf-8
"}}}

"}}}

" 挿入モードかどうかで色を変える {{{
augroup InsertHook
autocmd!
autocmd InsertEnter * highlight StatusLine guifg=#ccdc90 guibg=#2E4340
autocmd InsertLeave * highlight StatusLine guifg=#2E4340 guibg=#ccdc90
augroup END
"}}}

" 文字コードの自動認識 {{{
if &encoding !=# 'utf-8'
  set encoding=japan
  set fileencoding=japan
endif
if has('iconv')
  let s:enc_euc = 'euc-jp'
  let s:enc_jis = 'iso-2022-jp'
  " iconvがeucJP-msに対応しているかをチェック
  if iconv("\x87\x64\x87\x6a", 'cp932', 'eucjp-ms') ==# "\xad\xc5\xad\xcb"
    let s:enc_euc = 'eucjp-ms'
    let s:enc_jis = 'iso-2022-jp-3'
  " iconvがJISX0213に対応しているかをチェック
  elseif iconv("\x87\x64\x87\x6a", 'cp932', 'euc-jisx0213') ==# "\xad\xc5\xad\xcb"
    let s:enc_euc = 'euc-jisx0213'
    let s:enc_jis = 'iso-2022-jp-3'
  endif
  " fileencodingsを構築
  if &encoding ==# 'utf-8'
    let s:fileencodings_default = &fileencodings
    let &fileencodings = s:enc_jis .','. s:enc_euc .',cp932'
    let &fileencodings = &fileencodings .','. s:fileencodings_default
    unlet s:fileencodings_default
  else
    let &fileencodings = &fileencodings .','. s:enc_jis
    set fileencodings+=utf-8,ucs-2le,ucs-2
    if &encoding =~# '^\(euc-jp\|euc-jisx0213\|eucjp-ms\)$'
      set fileencodings+=cp932
      set fileencodings-=euc-jp
      set fileencodings-=euc-jisx0213
      set fileencodings-=eucjp-ms
      let &encoding = s:enc_euc
      let &fileencoding = s:enc_euc
    else
      let &fileencodings = &fileencodings .','. s:enc_euc
    endif
  endif
  " 定数を処分
  unlet s:enc_euc
  unlet s:enc_jis
endif
"}}}

" 日本語を含まない場合は fileencoding に encoding を使うようにする {{{
if has('autocmd')
  function! AU_ReCheck_FENC()
    if &fileencoding =~# 'iso-2022-jp' && search("[^\x01-\x7e]", 'n') == 0
      let &fileencoding=&encoding
    endif
  endfunction
  autocmd BufReadPost * call AU_ReCheck_FENC()
endif
"}}}

" □とか○の文字があってもカーソル位置がずれないようにする {{{
if exists('&ambiwidth')
  set ambiwidth=double
endif
"}}}

" URLの上でと押すとブラウザを開く {{{
let g:netrw_nogx = 1 " disable netrw's gx mapping.
nmap br <Plug>(openbrowser-smart-search)
vmap br <Plug>(openbrowser-smart-search)
"}}}

" Nerd_Commenter の基本設定 {{{
let g:NERDCreateDefaultMappings = 0
let NERDSpaceDelims = 1
nmap <Leader>/ <Plug>NERDCommenterToggle
vmap <Leader>/ <Plug>NERDCommenterToggle
nmap <leader>/9 <Plug>NERDCommenterToEOL	" カーソル位置以降
vmap <Leader>/s <Plug>NERDCommenterSexy
"}}}
