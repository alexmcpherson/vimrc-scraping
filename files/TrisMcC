call pathogen#infect()
call pathogen#helptags()

" Enable file type plugins except indent, enable syntax highlighting
filet plugin on | filet indent off | sy enable

" Sane vim defaults
se et ts=4 sw=4 sts=4 ai ru bs=2 hid is hls ch=1 aw ls=2 enc=utf-8 mouse=a
" se stl=%!MyStatus()

" GUI - hide all chrome and pick a nice font
se go-=m go-=T go-=r go-=L gfn=Monospace\ 10

" windows
"se gfn=DejaVu_Sans_Mono:h10:cANSI

" colors
colo xoria256 | hi ColorColumn guibg=#000060 ctermbg=darkgrey

" per-file type
au FileType html,javascript setl sw=2 ts=2 sts=2
au FileType javascript setl mp=jshint\ % efm=%f:\ line\ %l\\,\ col\ %c\\,\ %m

au QuickFixCmdPost make call <SID>show_quicklist()

" toggling color column
map <silent> <Leader>c :call <SID>toggle_cc()<CR>
map <silent> <Leader>m :silent mak<CR>
map <silent> <Leader>q :cwin<CR>
map <silent> <Leader>n :cn<CR>
map <silent> <Leader>p :cp<CR>
map <silent> <Leader><Leader> :noh<CR>

" color column toggling, put a colorful line down the 80th column
fu! s:toggle_cc()
    if &cc == 80
        windo let &cc = 0
    el
        windo let &cc = 80
    en
endf

fu! s:show_quicklist()
    if len(getqflist()) > 0
        windo cope
    en
endf

"fu! MyStatus()
"    let s = "%<"             " truncate at start
"    let s .= "%f"            " filename
"    let s .= "%y"            " filetype
"    let s .= "[" . &ff . "]" " file format
"    let s .= "\ %h"          " help
"    let s .= "%m"            " modified
"    let s .= "%r"            " readonly
"    let s .= "%="            " left/right separator
"    let s .= "%-14.("        " start group
"    let s .= "%l/%L "        " line number/total lines
"    let s .= "%c"            " column number
"    let s .= "%V"            " virtual column number, if any
"    let s .= "%)"            " end group
"    let s .= "\ %P"          " % through window
"
"    retu s
"endf
