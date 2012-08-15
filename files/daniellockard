" Basics {
	set nocompatible
	set background=dark
"	}

" General {
	syntax on
	set mouse=a
  scriptencoding utf-8
	set shortmess+=filmnrxoOtT
	set viewoptions=folds,options,cursor,unix,slash
	set history=1000
	set spell

	" Some backup stuff {
		set backup
		au BufWinLeave * silent! mkview  "make vim save view (state) (folds, cursor, etc)
		au BufWinEnter * silent! loadview "make vim load view (state) (folds, cursor, etc)


	"}



"}

" VIM UI {

	set tabpagemax=15
	set showmode

	set cursorline
	hi cursorline guibg=#333333
	hi CursorColumn guibg=#333333

	if has('cmdline_info')
		set ruler
		set rulerformat=%30(%=\:b%n%y%m%r%w\ %l,%c%V\ %P%)
		set showcmd
	endif

	if has('statusline')
		set laststatus=2
		set statusline=%<%f\
		set statusline+=%w%h%m%r
		set statusline+=\ [%{&ff}/%Y]
		set statusline+=\ [%{getcwd()}]
		set statusline+=%=%-14.(%l,%c%V%)\ %p%%
	endif

	set backspace=indent,eol,start
	set linespace=0
	set nu
	set showmatch
	set incsearch
	set hlsearch
	set winminheight=0
	set ignorecase
	set smartcase
	set wildmenu
	set wildmode=list:longest,full
	set whichwrap=b,s,h,l,<,>,[,]
	set scrolljump=5
	set scrolloff=3
	set foldenable
	set gdefault

"}

" Formatting {
	set nowrap
	set autoindent
	set shiftwidth=2
	set expandtab
	set tabstop=2
	set pastetoggle=<F12>
"}

" Remappings {

	cmap W w                       
    cmap WQ wq
    cmap wQ wq
    cmap Q q
    cmap Tabe tabe
	cnoreabbrev bash ConqueTerm bash

    nmap <leader>f0 :set foldlevel=0<CR>
    nmap <leader>f1 :set foldlevel=1<CR>
    nmap <leader>f2 :set foldlevel=2<CR>
    nmap <leader>f3 :set foldlevel=3<CR>
    nmap <leader>f4 :set foldlevel=4<CR>
    nmap <leader>f5 :set foldlevel=5<CR>
    nmap <leader>f6 :set foldlevel=6<CR>
    nmap <leader>f7 :set foldlevel=7<CR>
    nmap <leader>f8 :set foldlevel=8<CR>
    nmap <leader>f9 :set foldlevel=9<CR>
	cmap w!! w !sudo tee % >/dev/null
"}

function! InitializeDirectories()
  let separator = "."
  let parent = $HOME
  let prefix = '.vim'
  let dir_list = {
              \ 'backup': 'backupdir',
              \ 'views': 'viewdir',
              \ 'swap': 'directory' }

  for [dirname, settingname] in items(dir_list)
      let directory = parent . '/' . prefix . dirname . "/"
      if exists("*mkdir")
          if !isdirectory(directory)
              call mkdir(directory)
          endif
      endif
      if !isdirectory(directory)
          echo "Warning: Unable to create backup directory: " . directory
          echo "Try: mkdir -p " . directory
      else  
          let directory = substitute(directory, " ", "\\\\ ", "")
          exec "set " . settingname . "=" . directory
      endif
  endfor
endfunction
call InitializeDirectories() 
set background=dark "or light
highlight clear
if exists("syntax_on")
	syntax reset
	endif
	let g:colors_name = "vivify"
	set t_Co=256

	highlight Boolean             guifg=#00fa9a ctermfg=42                            gui=bold cterm=bold
	highlight CTagsClass          guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight CTagsGlobalConstant guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight CTagsGlobalVariable guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight CTagsImport         guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight CTagsMember         guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Character           guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Comment             guifg=#ffd700 ctermfg=220                           gui=none cterm=none
	highlight Conditional         guifg=#00ffff ctermfg=14                            gui=bold cterm=bold
	highlight Constant            guifg=#00fa9a ctermfg=42                            gui=none cterm=none
	highlight Cursor              guifg=#ffffff ctermfg=15  guibg=#fff8dc ctermbg=230 gui=none cterm=none
	highlight CursorColumn        guifg=#eeeeee ctermfg=255 guibg=#003853 ctermbg=24  gui=none cterm=none
	highlight CursorLine          guifg=#eeeeee ctermfg=255 guibg=#003853 ctermbg=24  gui=none cterm=none
	highlight Debug               guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Define              guifg=#b0c4de ctermfg=110                           gui=none cterm=none
	highlight DefinedName         guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Delimiter           guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight DiffAdd             guifg=#fff8dc ctermfg=230 guibg=#008b8b ctermbg=30  gui=none cterm=none
	highlight DiffChange          guifg=#fff8dc ctermfg=230 guibg=#008b00 ctermbg=28  gui=none cterm=none
	highlight DiffDelete          guifg=#e0eee0 ctermfg=194 guibg=#000000 ctermbg=0   gui=none cterm=none
	highlight DiffText            guifg=#00fa9a ctermfg=42                            gui=bold cterm=bold
	highlight Directory           guifg=#20b2aa ctermfg=37                            gui=none cterm=none
	highlight EnumerationName     guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight EnumerationValue    guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Error               guifg=#ffffff ctermfg=15  guibg=#ff0000 ctermbg=196 gui=bold cterm=bold
	highlight ErrorMsg            guifg=#ffffff ctermfg=15  guibg=#ff0000 ctermbg=196 gui=bold cterm=bold
	highlight Exception           guifg=#90ee90 ctermfg=114                           gui=bold cterm=bold
	highlight Float               guifg=#00fa9a ctermfg=42                            gui=none cterm=none
	highlight FoldColumn          guifg=#b0d0e0 ctermfg=117 guibg=#305060 ctermbg=74  gui=bold cterm=bold
	highlight Folded              guifg=#b0d0e0 ctermfg=117 guibg=#305060 ctermbg=74  gui=bold cterm=bold
	highlight Function            guifg=#00fa9a ctermfg=42                            gui=none cterm=none
	highlight Identifier          guifg=#ffff00 ctermfg=11                            gui=none cterm=none
	highlight Ignore              guifg=#204050 ctermfg=74                            gui=none cterm=none
	highlight IncSearch           guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Include             guifg=#b0c4de ctermfg=110                           gui=none cterm=none
	highlight Keyword             guifg=#90ee90 ctermfg=114                           gui=bold cterm=bold
	highlight Label               guifg=#00ffff ctermfg=14                            gui=none cterm=none
	highlight LineNr              guifg=#8db6cd ctermfg=74  guibg=#0f0f0f ctermbg=233 gui=bold cterm=bold
	highlight LocalVariable       guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Macro               guifg=#b0c4de ctermfg=110                           gui=none cterm=none
	highlight MatchParen          guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight ModeMsg             guifg=#90ee90 ctermfg=114 guibg=#006400 ctermbg=22  gui=bold cterm=bold
	highlight MoreMsg             guifg=#2e8b57 ctermfg=72                            gui=bold cterm=bold
	highlight NonText             guifg=#3d5d6d ctermfg=74  guibg=#123a4a ctermbg=24  gui=none cterm=none
	highlight Normal              guifg=#fff8dc ctermfg=230 guibg=#000000 ctermbg=0   gui=none cterm=none
	highlight Number              guifg=#00fa9a ctermfg=42                            gui=none cterm=none
	highlight Operator            guifg=#00ffff ctermfg=14                            gui=none cterm=none
	highlight PMenu               guifg=#dddddd ctermfg=253 guibg=#747678 ctermbg=67  gui=bold cterm=bold
	highlight PMenuSbar           guifg=#dddddd ctermfg=253 guibg=#949698 ctermbg=67  gui=bold cterm=bold
	highlight PMenuSel            guifg=#88dd88 ctermfg=114 guibg=#a4a6a8 ctermbg=67  gui=bold cterm=bold
	highlight PMenuThumb          guifg=#dddddd ctermfg=253 guibg=#c4c6c8 ctermbg=110 gui=bold cterm=bold
	highlight PreCondit           guifg=#b0c4de ctermfg=110                           gui=none cterm=none
	highlight PreProc             guifg=#b0c4de ctermfg=110                           gui=none cterm=none
	highlight Question            guifg=#4eee94 ctermfg=85                            gui=bold cterm=bold
	highlight Repeat              guifg=#00ffff ctermfg=14                            gui=bold cterm=bold
	highlight Search              guifg=#000000 ctermfg=0   guibg=#fff8dc ctermbg=230 gui=bold cterm=bold
	highlight SignColumn          guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Special             guifg=#66cdaa ctermfg=79                            gui=bold cterm=bold
	highlight SpecialChar         guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight SpecialComment      guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight SpecialKey          guifg=#324262 ctermfg=68  guibg=#103040 ctermbg=24  gui=none cterm=none
	highlight SpellBad            guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight SpellCap            guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight SpellLocal          guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight SpellRare           guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Statement           guifg=#00ffff ctermfg=14                            gui=bold cterm=bold
	highlight StatusLine          guifg=#000000 ctermfg=0 guibg=#ffa500 ctermbg=214 gui=bold cterm=bold
	highlight StatusLineNC        guifg=#8b8b00 ctermfg=100 guibg=#999999 ctermbg=246 gui=none cterm=none
	highlight StorageClass        guifg=#00ffff ctermfg=14                            gui=none cterm=none
	highlight String              guifg=#ffa500 ctermfg=214                           gui=none cterm=none
	highlight Structure           guifg=#00ffff ctermfg=14                            gui=bold cterm=bold
	highlight TabLine             guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight TabLineFill         guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight TabLineSel          guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Tag                 guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight Title               guifg=#e066ff ctermfg=171                           gui=bold cterm=bold
	highlight Todo                guifg=#00ffff ctermfg=14  guibg=#507080 ctermbg=74  gui=none cterm=none
	highlight Type                guifg=#ffff00 ctermfg=11                            gui=none cterm=none
	highlight Typedef             guifg=#00ffff ctermfg=14                            gui=none cterm=none
	highlight Underlined          guifg=#838b83 ctermfg=65                            gui=underline cterm=underline
	highlight Union               guifg=#eeeeee ctermfg=255                           gui=none cterm=none
	highlight VertSplit           guifg=#000000 ctermfg=0   guibg=#999999 ctermbg=246 gui=none cterm=none
	highlight Visual              guifg=#595959 ctermfg=240 guibg=#ffffff ctermbg=15  gui=none cterm=none
	highlight VisualNOS           guifg=#000000 ctermfg=0                             gui=bold,underline cterm=bold,underline
	highlight WarningMsg          guifg=#ffffff ctermfg=15  guibg=#ff6347 ctermbg=209 gui=bold cterm=bold
	highlight WildMenu            guifg=#000000 ctermfg=0   guibg=#7fff00 ctermbg=118 gui=bold cterm=bold
	highlight pythonBuiltin       guifg=#fff8dc ctermfg=230                           gui=none cterm=none
