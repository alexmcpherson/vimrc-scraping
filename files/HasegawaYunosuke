set nocompatible
syntax on

set exrc

"---表示系統---"
set nowrap                                  "折り返さないで表示"
set showcmd                                 "コマンドをステータスラインに表示しっぱなしにする"
set showmode                                "現在のモードを表示する"
set showmatch                               "閉じ括弧が入力されたとき、対応する括弧を表示"
set cursorline                              "下線表示"
set number                                  "行数表示"
set hlsearch                                "検索文字をハイライトにする"
set list                                    "空白文字を可視化する"
set listchars=trail:-                       "可視化する文字を指定する"
set enc=utf-8

if has('multi_byte_ime') || has('xim')
    hightlight CursolIM guibg=Purple guifg=NONE
endif

"---バックアップ系統---"
set backupdir=/$HOME/.vimbackup/     "バックアップのディレクトリを指定する"
set directory=/$HOME/.vimbackup/
set backup                                  "ファイルをバックアップする"

"---タブ幅---"
set tabstop=4                               "「そこにあるタブ文字」の幅"
set softtabstop=4                           "「タブキーを押した時に挿入される空白の数"
set shiftwidth=4                            "自動インデントの各段階に使われる空白の数"
set smarttab
set expandtab
set backspace=indent,eol,start

"---インデントの設定---"
set smartindent                             "賢い自動インデントを行う"
set clipboard=unnamed
set statusline=%4.8f
set fileencoding=utf-8

setlocal omnifunc=syntaxcomplete#Complete   "omni補完を実行するための何か"

"---.htmlファイルの時読み込む設定ファイル---"
"if filereadable($HOME . '/.vim/after/ftplugin/html.vim')
"    au Filetype html, source $HOME/.vim/after/ftplugin/html.vim
"endif

"---Makefileの時読み込む設定ファイル---"
if filereadable($HOME . '/.vim/after/ftplugin/Makefile.vim')
    au BufRead Makefile, source $HOME/.vim/after/ftplugin/Makefile.vim
endif
