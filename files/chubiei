" starts with pathogen
call pathogen#infect()
call pathogen#helptags()

set nocompatible
set autoindent

" enable file type plugins
filetype on
filetype plugin on

" colors on work station
if ($TERM == "vt100")
	set t_Co=8
	set t_AB=[48;5;%dm
	set t_AF=[38;5;%dm
endif

" syntax color on
syntax on
set hlsearch

" swp files location
set directory=/tmp

" complete option ... I have preview window
set completeopt="menu"

" -----------------------------------------------------------
"  ENCODING
" -----------------------------------------------------------
set encoding=utf-8
set termencoding=utf-8
set fileencoding=utf-8
set fileencodings=utf-8,usc-bom,big5,gb2312,latin1 


" ----------------------------------------------------------
"  PLUGIN OPTION
" ----------------------------------------------------------
" AutoComplPop
" - auto OmniCppComplete (always use CTRL-X CTRL-O)
let g:acp_behavior = {'command': "\<C-x>\<C-o>", 'meets': 'acp#meetsForKeyword', 'repeat': 0}

" OmniCppComplete
" - options
let OmniCpp_SelectFirstItem = 2
" - close the preview window automatically after a completion
"autocmd CursorMovedI * if pumvisible() == 0|pclose|endif
"autocmd InsertLeave * if pumvisible() == 0|pclose|endif

" cvim
" - disable cvim header template
let g:cvim_opt_insert_header = 0


