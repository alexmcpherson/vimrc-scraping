:syntax on
:set hlsearch
:set number

:set sts=2 " softtabstop
:set tabstop=2
:set autoindent

:set cursorline "cursor line
hi CursorLine ctermbg=black


:set laststatus=2 " keep status line at bottom

hi User1 ctermbg=grey ctermfg=black cterm=bold
hi User2 ctermbg=Red ctermfg=white  cterm=bold
hi User3 ctermbg=green ctermfg=black cterm=bold
hi User4 ctermbg=yellow ctermfg=black cterm=bold 
hi User5 ctermbg=blue   ctermfg=black cterm=bold
hi User7 guifg=#ffffff  guibg=#880c0e gui=bold
hi User8 guifg=#ffffff  guibg=#5b7fbb
hi User9 guifg=#ffffff  guibg=#810085
hi User0 guifg=#ffffff  guibg=#094afe

"statusline goodies
:set statusline=
:set statusline+=%1*
:set statusline+=\ [Format=%{&ff}] "file format
:set statusline+=%2*
:set statusline+=\ [Path=%F] "file path
:set statusline+=%3*
:set statusline+=\ [Type=%y] "file type
:set statusline+=%4*
:set statusline+=\ [ASCII=\%03.3b]\ [HEX=\%02.2B] "char encodings 
:set statusline+=%5*
:set statusline+=\ [Total\ Lines=%L] "line count
:set statusline+=\ [%p%%]
:set statusline+=\ [Position=%04l\ %04c\ (%V)] "positioning



" railsthings
map <leader>gv :CommandTFlush<cr>\|:CommandT app/views<cr>
map <leader>gc :CommandTFlush<cr>\|:CommandT app/controllers<cr>
map <leader>gm :CommandTFlush<cr>\|:CommandT app/models<cr>
map <leader>gh :CommandTFlush<cr>\|:CommandT app/helpers<cr>
map <leader>gl :CommandTFlush<cr>\|:CommandT lib<cr>
map <leader>gp :CommandTFlush<cr>\|:CommandT public<cr>
map <leader>gs :CommandTFlush<cr>\|:CommandT app/assets/stylesheets<cr>
map <leader>gj :CommandTFlush<cr>\|:CommandT app/assets/javascripts<cr>
