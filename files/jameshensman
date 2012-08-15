"pathogen
call pathogen#infect()

set mouse=a
set pastetoggle=<F2>

"highlight *.todo files
au BufNewFile,BufRead *.todo set syntax=todo
au BufNewFile,Bufread *.csv setf csv

"show the file name in the title bar
set title

filetype on
filetype plugin indent on

"256 colours
set t_Co=256
let g:solarized_termcolors=256
set background=dark
colorscheme desert

"highlight bad whitespace: leading tabs and trailing spaces
au BufRead,BufNewFile *.py,*.pyw match BadWhitespace /\(^\t\+\|\s\+$\)/
highlight BadWhitespace ctermbg=red guibg=red

"tabs and spaces
au BufRead,BufNewFile *.py,*.pyw set expandtab
au BufRead,BufNewFile *.py,*.pyw set shiftwidth=4

"noweb Pweave...
au BufRead,BufNewFile *.Plw set filetype=noweb 
let noweb_backend = "tex"
let noweb_language = "python"
let noweb_fold_code = 1



"match brackets
inoremap ( ()<Left>
inoremap [ []<Left>
inoremap { {}<Left>
autocmd Syntax html,vim inoremap < <lt>><Left>
"fn to stop annoying behaviour
function! ClosePair(char)
if getline('.')[col('.') - 1] == a:char
return "\<Right>"
else
return a:char
endif
endf
inoremap ) <c-r>=ClosePair(')')<CR>
inoremap ] <c-r>=ClosePair(']')<CR>
inoremap } <c-r>=ClosePair('}')<CR>

" as above for quotes: TODO triple quotes for python
function! QuoteDelim(char)
let line = getline('.')
let col = col('.')
if line[col - 2] == "\\"
"Inserting a quoted quotation mark into the string
return a:char
elseif line[col - 1] == a:char
"Escaping out of the string
return "\<Right>"
else
"Starting a string
return a:char.a:char."\<Left>"
endif
endf 
inoremap " <c-r>=QuoteDelim('"')<CR>
inoremap ' <c-r>=QuoteDelim("'")<CR>

"wrap visually selected text
vnoremap (  <ESC>`>a)<ESC>`<i(<ESC>
vnoremap )  <ESC>`>a)<ESC>`<i(<ESC>
vnoremap {  <ESC>`>a}<ESC>`<i{<ESC>
vnoremap }  <ESC>`>a}<ESC>`<i{<ESC>
vnoremap "  <ESC>`>a"<ESC>`<i"<ESC>
vnoremap '  <ESC>`>a'<ESC>`<i'<ESC>
vnoremap `  <ESC>`>a`<ESC>`<i`<ESC>
vnoremap [  <ESC>`>a]<ESC>`<i[<ESC>
vnoremap ]  <ESC>`>a]<ESC>`<i[<ESC>

