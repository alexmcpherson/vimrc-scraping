" Syntax highlighting
syntax on

" Readable comments
hi Comment term=bold ctermfg=lightblue guifg=lightblue

" tab == 4 spaces
set smartindent
set tabstop=4
set shiftwidth=4
set expandtab

" line numbers
set number

if has("autocmd")
  " When editing a file, always jump to the last cursor position
  autocmd BufReadPost *
  \ if line("'\"") > 0 && line ("'\"") <= line("$") |
  \   exe "normal g'\"" |
  \ endif
endif
