"===================================================================
" Common configuration
"===================================================================
" User name
let g:usr_name="Gusman Dharma Putra"

" Use vim setting rather than vi setting
set nocompatible

" Set language menu, none = always use english "
set langmenu=none

" Don't use local version of .(g)vimrc, .exrc
" set noexrc

" Set ruler
set ruler

" Show line number
set number

" Show title in console bar
set title

" Show the command being typed
set showcmd
" Show matching brackets
set showmatch

" Kill the beeps! (visible bell)
" set vb t_vb=

" No error bells (no beep, no blinking screen)
set noerrorbells

" Set mouse support in console
set mouse=a

" Set keep window's size (no resizing)
set noea

" Since I use linux, I want this
let g:clipbrdDefaultReg='+'

" Always display status line
set statusline=%F%m%r%h%w[%L][%{&ff}]%y[%p%%][%04l,%04v]
set laststatus=2  " Always show status line

" Backup
set backup
set backupdir=$HOME/.vimdata/backup
set directory=$HOME/.vimdata/swap

" Use scrollable menu for filename completion
set wildmenu
set wildignore=*.dll,*.o,*.obj,*.bak,*.exe,*.pyc,
                     \*.jpg,*.gif,*.png
" Turn on wild mode huge list
set wildmode=list:longest


" ================================================================
" Editing
" ================================================================
"set ai                          "autoindent
"set si                          "smartindent
set backspace=indent,eol,start  "backspace behaviour
syntax on                       "enable syntax color
set hlsearch                    "higlight search resut
set nowrap                      "nowrapping text
set wrapscan                    "searching whole file
set ic                          "ignore case sensitive
"set cindent                     "set cindent (c language indentation)

" Set default tab value
set shiftwidth=4
set softtabstop=4
set textwidth=79
set noexpandtab

" -- function for editing 
let s:mytabsize = 0

" Set to tab to 4
function! Tab4()
	setlocal ts=4
	setlocal sw=4
	setlocal softtabstop=4
	setlocal noexpandtab
	let s:mytabsize=4
endfunction

" Set to tab to 8
function! Tab8()
	setlocal ts=8
	setlocal sw=8
	setlocal softtabstop=8
	setlocal noexpandtab
	let s:mytabsize=8
endfunction

" Tab tooggle
function! TabToogle()
	if s:mytabsize != 8
		call Tab8()
	else
		call Tab4()
	endif
endfunction

" ================================================================
" Autocommand section
" ================================================================
" Only do this part when compiled with support for autocommands.
" By default autocommand is active
if has("autocmd")
	" Use the default filetype settings, so that mail gets 'tw' set to 72,
	" 'cindent' is on in C files, etc.
	" Also load indent files, to automatically do language-dependent indenting.
	filetype plugin indent on

	" Put these in an autocmd group, so that we can delete them easily.
	augroup vimrcEx
	au!

	" For all text files set 'textwidth' to 78 characters.
	" autocmd FileType text setlocal textwidth=78

	" When editing a file, always jump to the last known cursor position.
	" Don't do it when the position is invalid or when inside an event handler
	" (happens when dropping a file on gvim).
	" Also don't do it when the mark is in the first line, that is the default
	" position when opening a file.
	autocmd BufReadPost *
	\ if line("'\"") > 1 && line("'\"") <= line("$") |
	\   exe "normal! g`\"" |
	\ endif
	augroup END


	" auto command for FileType tex : wrap and linebreak
	autocmd FileType tex setlocal wrap
	autocmd FileType tex setlocal linebreak

	" auto command for c file 
	autocmd FileType c,cpp,h call Tab8()
	" autocmd FileType c,cpp,h setlocal shiftwidth=8
	" autocmd FileType c,cpp,h setlocal softtabstop=8
	" autocmd FIleType c,cpp,h setlocal noexpandtab

else
        set autoindent " always set autoindenting on
endif " has("autocmd")


" ================================================================
" GUI Vim
" ================================================================
if has("gui_running")
    " Remove Gui Toolbar, it's useless
    set guioptions-=T

    " Set line and column number
    " set lines=44 columns=120

    " Color theme for GUI mode
    color desert
   
    " Font selection
    if has("gui_gtk2")
        set guifont=Terminus\ 10
    elseif has("gui_photon")
        set guifont=Courier\ New:s11
    elseif has("gui_kde")
        set guifont=Courier\ New/11/-1/5/50/0/0/0/1/0
    elseif has("x11")
        set guifont=-*-courier-medium-r-normal-*-*-180-*-*-m-*-*
    else
        set guifont=Tamsyn7x14:h8:cDEFAULT
    endif
endif


" ================================================================
" Common mapping
" ================================================================
" Search hilight turn off key
nnoremap <silent> <S-h>     :nohlsearch<CR>

" Paste setting into terminal toggle
nnoremap <F2>				:set invpaste?<CR>

" toggle tabsize
nnoremap <F3>				:call TabToogle() <CR>

set showmode

" ================================================================
" Pathogen
" ================================================================
call pathogen#infect()
call pathogen#helptags()

" ================================================================
" Visual mode mapping
" ================================================================
" Copy
" vnoremap <silent> <C-c>  "+y
" Cut
" vnoremap <silent> <C-x>  "+x
" Paste
" nnoremap <silent> <C-p>  "+gP

" ================================================================
" Tab pages mapping
" ================================================================
" Tab new
nmap <silent> <S-t>     :tabnew<CR>
" Tab next
nmap <silent> <S-right> :tabn<CR>
" Tab previous
nmap <silent> <S-left>  :tabp<CR>
" Tab close
nmap <silent> <S-q>     :tabc<CR>

" ================================================================
" NERD Tree key mapping and configuration
" ================================================================
nnoremap <silent> <F9>	:NERDTreeToggle<CR>

" Quite when enter file "
let NERDTreeQuitOnOpen = 1
" Show bookmarks "
let NERDTreeShowBookmars = 1
" Set win pos at right"
let NERDTreeWinPos = "right"


" ================================================================
" Taglist mapping (taglist plugin)
" ================================================================
" Togle taglist menu
nnoremap <silent> <F8>      :TlistToggle<CR>

" Displaying tags for only one file~
let Tlist_Show_One_File = 1
" If you are the last, kill yourself
let Tlist_Exist_OnlyWindow = 1
" Split to the right side of the screen
let Tlist_Use_Right_Window = 0
" Sort by order or name
" let Tlist_Sort_Type = "order"
" Do not show prototypes and not tags in the taglist window.
" let Tlist_Display_Prototype = 0
" Remove extra information and blank lines from the taglist window.
" let Tlist_Compart_Format = 1
" Jump to taglist window on open.
let Tlist_GainFocus_On_ToggleOpen = 1
" Show tag scope next to the tag name.
let Tlist_Display_Tag_Scope = 1
" Close the taglist window when a file or tag is selected.
let Tlist_Close_On_Select = 1
" Don't Show the fold indicator column in the taglist window.
let Tlist_Enable_Fold_Column = 0
" Tlist Window's width
" let Tlist_WinWidth = 40


" ================================================================
" Buffer Explorer mapping (bufexplore)
" ================================================================
" Show all buffer
" nmap <silent> <F4> <Leader>be

" ===============================================================
" Latex Suite Configuration
" ===============================================================
" dvi output previewer
" let g:Tex_ViewRule_dvi = 'xdvi'

" ps output previewer
" let g:Tex_ViewRule_ps  = 'evince'

" pdf output previewer
" let g:Tex_ViewRule_pdf = 'evince'	

" default output (if not set, default is dvi)
" let g:Tex_DefaultTargetFormat = 'pdf'

" ==========================
" cscope configuration
" ==========================

if has("cscope")
    if has("win32")
	set csprg=$HOME/vimfiles/bundle/gvproj/bin/cscope.exe
    else
	set csprg=/usr/bin/cscope
    endif
    set csto=0
    set cst
    set nocsverb

    "example for cscope scritp
    " add any database in current directory
    " if filereadable("cscope.out")
    "    cs add cscope.out
    " else add database pointed to by environment
    " elseif $CSCOPE_DB != ""
    "    cs add $CSCOPE_DB
    " endif
    set csverb
endif

" ===================================
" FUF
" ===================================
let g:alist = []
let g:fuf_enumeratingLimit = 25
let g:fuf_maxMenuWidth = 78 " will be adjusted 

" ==============================================================
" CTRLP configuration
" ==============================================================
" Just search filename
let g:ctrlp_by_filename = 1

" Use regex for searching
let g:ctrlp_regexp = 1

" Disable working path feature
let g:ctrlp_working_path_mode = 0

" No scan for dotfiles or dotfolder
let g:ctrlp_dotfiles = 0
  
" No limit of number scanned files
let g:ctrlp_max_files = 10000

" Follow symlinks
let g:ctrlp_follow_symlinks = 1

" Lazy update, update list after 500s
let g:ctrlp_lazy_update = 500
