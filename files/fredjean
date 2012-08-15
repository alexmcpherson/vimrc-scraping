set nocompatible
set autoindent
set smartindent
set tabstop=4
set shiftwidth=4
set showmatch
set ruler
set incsearch
set virtualedit=all

filetype plugin indent on " Enable filetype-specific indenting and plugins

set hlsearch              " Highlight search results once found:
                          " http://vim.wikia.com/wiki/Highlight_all_search_pattern_matches
set number                " can has line numbers?
set cursorline            " highlight the current line the cursor is on
set showmatch             "sm:    flashes matching brackets or parentheses
set smarttab              "sta:   helps with backspacing because of expandtab

set lines=58 columns=120

if has('syntax')
	syntax on
endif

" bind command-/ to toggle comment
" requires NERD Commenter to be installed: http://www.vim.org/scripts/script.php?script_id=1218
nmap <D-/> ,c<space>
vmap <D-/> ,c<space>
imap <D-/> <C-O>,c<space>

" bind \d to toggle file browser
" requires NERDTree
nmap <leader>d :NERDTreeToggle<CR>

" binds \ T to taglist (sorta like textmate apple-shift-t)
map <leader>T :TlistToggle<CR>
let Tlist_Show_Menu=1
let Tlist_GainFocus_On_ToggleOpen=1
let Tlist_Close_OnSelect=1
let Tlist_Compact_Format=1

map <leader>t :FufFileWithCurrentBufferDir<CR>

" window splitting mappings
" split vertically with <leader> v
" split horizontally with <leader> s
nmap <leader>v :vsplit<CR> <C-w><C-w>
nmap <leader>s :split<CR> <C-w><C-w>

" Make it way easier to switch windows (<leader>w)
nmap <leader>w <C-w><C-w>_

" bind control-l to hashrocket
imap <C-l> <Space>=><Space>

colorscheme lanai

let Tlist_Ctags_Cmd='/opt/local/bin/ctags'
