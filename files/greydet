"
" Copyright (C) 2011-2012 Gonzague Reydet.
"
" Licensed under the Apache License, Version 2.0 (the "License");
" you may not use this file except in compliance with the License.
" You may obtain a copy of the License at
"
"      http://www.apache.org/licenses/LICENSE-2.0
"
" Unless required by applicable law or agreed to in writing, software
" distributed under the License is distributed on an "AS IS" BASIS,
" WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
" See the License for the specific language governing permissions and
" limitations under the License.
"

"
" Global variables
"

" Current installation directory
let g:installPath = expand("$HOME/vimrc/")
" Path to an optional vimrc file to add custom or system dependant properties
let customVimrcFilePath = expand("$HOME/.vimrc.custom")

"
" Misc configuration
"

" Add internal vim script folder in vim runtimepath
" For this to work the repository must have been cloned in a vimrc folder in the user home directory
if filereadable(installPath."vimrc")
    let &runtimepath = &runtimepath . ',' . installPath . "vim/"
endif

set noswapfile                  " Do not create any swap file for openned files
set wildmode=longest,list,full  " Configure wildmenu to behave as follow: complete the common part on first tab hit, list all candidates on second tab hit and iterate over them on next tab hits
set wildmenu                    " Enable wildmenu. Allow readline like completion when trying to edit new file
filetype plugin on              " Load specific filetype plugin configuration

" Return to last edit position when opening files
autocmd BufReadPost *
     \ if line("'\"") > 0 && line("'\"") <= line("$") |
     \   exe "normal! g`\"" |
     \ endif

"
" Buffer configuration
"

set hidden              " Put buffers to background instead of closing it
set switchbuf=useopen   " If a buffer is already opened in another window, switch to this window
" Press F5 to switch on another buffer
nnoremap <F5> :buffers<CR>:buffer<Space>
" Press Shift+F5 to open a new window on another buffer
nnoremap <S-F5> :buffers<CR>:sbuffer<Space>
" Press Ctrl+Shift+F5 to hide the current window
nnoremap <C-S-F5> :hide<CR>
" Press F12 to switch on the next buffer
nnoremap <F12> :bnext<CR>
" Press <S-F12> to switch on the previous buffer
nnoremap <S-F12> :bprevious<CR>
" Press <C-F12> to open a new window on the next buffer
nnoremap <C-F12> :sbnext<CR>
" Press <C-S-F12> to open a new window on the previous buffer
nnoremap <C-S-F12> :sbprevious<CR>

"
" Indentation configuration
"

set tabstop=4           " Tabs are 4 spaces long
set softtabstop=4       " Delete up to 4 spaces on backspace
set shiftwidth=4        " Auto-indent is 4 spaces
set shiftround          " Round the indenting to the closest shitfwidth multiple of spaces
set expandtab           " Insert the previous number of spaces instead of a Tab character
set autoindent          " Indentation is kept on new lines
" Keep selection after indenting in visual mode
vnoremap > >gv
vnoremap < <gv
" Unindent using shift-tab in insert mode
imap <S-Tab> <C-d>
" Format file content
nmap <C-f> gg=G
set formatoptions+=ro   " Automatically continue comment blocks on new line

"
" Display configuration
"

set number              " Show line number
"set nowrap              " Disable line wrapping
"set list                " Show invisible characters
set laststatus=2        " Always show file status bar
set showcmd             " Display some information about selections in visual mode
if has('mouse')
    set mouse=a         " Enable mouse actions
endif
" Remap scroll down and page down so they does not fill the screen with non-existant file lines
"map <ScrollWheelDown> n}
"map <PageDown> }
"imap <ScrollWheelDown> <C-o>}
"imap <PageDown> <C-o>}
" Remap scroll up and page up so cursor can be moved to the top of file
"map <ScrollWheelUp> {
"map <PageUp> {

"
" Search configuration
"

set ignorecase          " Make search case-insensitive
set smartcase           " With ignorecase set, search is case-insensitive unless an upper case is present in the search pattern
set hlsearch            " Highlight search
set incsearch           " Display search matches while typing
set scrolloff=4         " Keep lines at top and bottom of the screen when navigating search matches
" Make search use more common regex special characters and escape sequences
nnoremap / /\v
vnoremap / /\v
" Disable current search by typing the Carriage Return key
nnoremap <cr> :noh<return><cr>
" Press <F7> to turn on/off spell checking 
nnoremap <F7> :setlocal spell! spelllang=en_us<cr>
inoremap <F7> <c-o>:setlocal spell! spelllang=en_us<cr>

"
" Plugin configuration
"

" Start pathogen plug-in to handle plug-ins stored in installPath/bundle repository
if filereadable(installPath . "bundle/vim-pathogen/autoload/pathogen.vim")
    exe "source " . installPath . "bundle/vim-pathogen/autoload/pathogen.vim"
    call pathogen#infect(installPath . "bundle")
endif

"
" Navigation & Autocompletion
"
" For the following configs to work a tags file should have been generated with the ctags external tool:
" ctags -R --c++-kinds=+p --fields=+iaS --extra=+qf [source files]
"
set completeopt=menuone,longest         " Display complete menu even if only one match available & insert the longest common part of matches
set tags=./tags;/                       " Search for tags in the current working directory then recursively to the root
" Update selected menu item colors to make it visible (on some version background and foreground colors are the same)
highlight PmenuSel ctermfg=5 guifg=Magenta
" Autocompletion on Ctrl+Space with omnifunc or keyword if omnifunc not available
" If popup menu is already visible
" then close it & remove inserted element (<C-y>)
" otherwise
"   If omnifunc is not set,
"   then use keyword completion (<C-n>),
"   Otherwise open omnifunc menu (<C-x><C-o>)
"     if the popup menu is visible
"     then do nothing
"     otherwise use keyword completion (insert space then backspace it to disable the omnifunc error message, then <C-n>)
"
inoremap <expr> <C-Space> pumvisible()
\ ? '<C-y>'
\ : &omnifunc == ""
\   ? '<C-n>'
\   : '<C-x><C-o><c-r>=pumvisible()' .
\     '? ""' .
\     ': " \<lt>bs>\<lt>C-n>"' .
\     '<CR>'
" Terminal applications interpret CTRL+Space combo to a <C-@> so we map <C-@> to be <C-Space> as a workaround
imap <C-@> <C-Space>
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType xml set omnifunc=xmlcomplete#CompleteTags
autocmd FileType php set omnifunc=phpcomplete#CompletePHP
autocmd FileType c set omnifunc=ccomplete#Complete

" Tagbar plugin configurations
let g:tagbar_autofocus = 1              " Set focus to the tagbar window when opening
let g:tagbar_compact = 1                " Make tagbar window compact display
let g:tagbar_singleclick = 1            " Jump to a tag with a single click instead of double click
let g:tagbar_autoshowtag = 1            " Highlight current selected tag in the tagbar window
" Press <F8> to toggle the tagbar window
nnoremap <silent> <F8> :TagbarToggle<CR>

" Press <F3> to open the current symbol's declaration
nnoremap <F3> <C-]>
vnoremap <F3> <C-]>

function! FindUp(path, pattern)
    return split(system(g:installPath . 'binsh/findUp.sh ' . a:path . ' -name ' . a:pattern))
endfunction

function! StripFileName(path)
    let l:lastPathSep = strridx(a:path, "/")
    return strpart(a:path, 0, l:lastPathSep + 1)
endfunction

if has('cscope')
    set cscopetag       " Use :cstag first instead of :tag

"    if has('quickfix')
"        set cscopequickfix=s-,c-,d-,i-,t-,e-
"    endif

"    let findCscopeResult = system(installPath . 'binsh/findUp.sh . -name cscope.out')
    for cscopeFile in FindUp('.', 'cscope.out')
        exe 'silent! cscope add ' . cscopeFile . ' ' . StripFileName(cscopeFile)
    endfor

    nmap <C-S-g> :cscope find c <C-R>=expand("<cword>")<CR><CR>
endif

let g:syntastic_check_on_open=1         " Syntastic check on open and saving
let g:syntastic_auto_loc_list=1         " Automatically open the error window

" Construct the include dir by searching for h file from the project root
" List of file name candidates used to find the project root
let g:prjRootElts = ['.git', '.project']
for candidate in g:prjRootElts
    let foundCandidates = FindUp('.', candidate)
    if len(foundCandidates) > 0
        let rootCandidate = StripFileName(foundCandidates[-1])
        let hDirs = system(g:installPath . 'binsh/findParentDir.sh ' . rootCandidate . ' -name *.h')
        let g:syntastic_c_include_dirs = split(hDirs)
        break
    endif
endfor

"
" Filetype specific configuration
"
autocmd FileType make setlocal noexpandtab          " Do not replace tabs by spaces for Makefiles
au BufNewFile,BufRead make.*			setf make   " Associate make.* file to the make filetype

" Function to switch from *.c* file to the corresponding *.h* file and vice-versa
function! SwitchSourceHeader()
    if (expand("%:e") =~ "c.*")
        exe "tag /^" . expand("%:t:r") . "\\.h.*"
    else
        exe "tag /^" . expand("%:t:r") . "\\.c.*"
    endif
endfunction

" Press <C-h> to switch from header to source file and vice-versa
autocmd FileType c,cpp nnoremap <buffer> <C-h> :call SwitchSourceHeader()<CR>

au BufNewFile,BufRead *.dox setf cpp.doxygen        " Associate *.dox files to the cpp.doxygen filetype

" 
" Special behaviours
"

" Call user specific vimrc file if it exists
if filereadable(customVimrcFilePath)
    exe "source ".customVimrcFilePath
endif

" Reload vimrc files when modified
if !exists("autoReloadRC")
    let autoReloadRC=1
    autocmd BufWritePost *vimrc* tabdo windo source $HOME/.vimrc
endif
