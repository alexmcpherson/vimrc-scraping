"General {
	"不兼容VI键盘，使用vim键盘
		set nocompatible

    set background=dark         "Assume a dark background
		"
    if !has('gui')
        "set term=$TERM          "Make arrow and other keys work
    endif

    syntax on                   "syntax highlighting

		"set autowrite                  "automatically write a file when leaving a modified buffer
    set shortmess+=filmnrxoOtT      "abbrev. of messages (avoids 'hit enter')
    set viewoptions=folds,options,cursor,unix,slash "better unix / windows compatibility
    set virtualedit=onemore         "allow for cursor beyond last character
    "set spell                       "spell checking on
    set hidden                      "allow buffer switching without saving
		"历史记录数
		set history=50

		"设置编码
    scriptencoding utf-8
		set enc=utf-8

		"设置文件编码
		set fenc=utf-8

	"设置文件编码检测类型及支持格式
		set fencs=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936

		"禁止生成临时文件
		set nobackup
		set noswapfile

    "Setting up the directories {
        "if has('persistent_undo')
            "set undofile                "so is persistent undo ...
            "set undolevels=1000         "maximum number of changes that can be undone
            "set undoreload=10000        "maximum number lines to save for undo on a buffer reload
        "endif
        "Could use * rather than *.*, but I prefer to leave .files unsaved
				au BufWinLeave *.* silent! mkview  "make vim save view (state) (folds, cursor, etc)
				au BufWinEnter *.* silent! loadview "make vim load view (state) (folds, cursor, etc)
    "}
"}
"Vim UI {

		"设置默认的颜色
		colorscheme molokai 

    set showmode                    "display the current mode

    set cursorline                  "highlight current line

    if has('cmdline_info')
			"显示标尺
			set ruler

			set rulerformat=%30(%=\:b%n%y%m%r%w\ %l,%c%V\ %P%) "a ruler on steroids
			set showcmd                 "show partial commands in status line and
                                    "selected characters/lines in visual mode
    endif


    "if has('statusline')
        "set laststatus=2
        "Broken down into easily includeable segments
        "set statusline=%<%f\    "Filename
        "set statusline+=%w%h%m%r "Options
        "set statusline+=%{fugitive#statusline()} " Git Hotness
        "set statusline+=\ [%{&ff}/%Y]            "filetype
        "set statusline+=\ [%{getcwd()}]          "current dir
        "set statusline+=%=%-14.(%l,%c%V%)\ %p%%  "Right aligned file nav info
    "endif

    set backspace=indent,eol,start  "backspace for dummies
    set linespace=0                 "No extra spaces between rows
    set nu                          "Line numbers on
		"高亮显示匹配的括号
    set showmatch
    set incsearch                   "find as you type search
    set hlsearch                    "highlight search terms
    set winminheight=0              "windows can be 0 line high
		"搜索忽略大小写
		set ignorecase
    set smartcase                   "case sensitive when uc present
		"命令行下按tab键自动完成
    set wildmenu                    "show list instead of just completing
    set wildmode=list:longest,full  "command <Tab> completion, list matches, then longest common part, then all.
    set whichwrap=b,s,h,l,<,>,[,]   "backspace and cursor keys wrap to
    set scrolljump=5                "lines to scroll when cursor leaves screen
    set scrolloff=3                 "minimum lines to keep above and below cursor
    set foldenable                  "auto fold code
    "set list
    "set listchars=tab:,.,trail:.,extends:#,nbsp:. "Highlight problematic whitespace
		
		"Set 7 lines to the curors - when moving vertical..
		set so=7
		"The commandbar is 1 high
		set cmdheight=1
		"设置在最上面一行显示当前文件名
		"if exists("&showtabline")
		"set stal=2
		"endif


"}

"Formatting {
		"tab宽度
		set shiftwidth=2
		set softtabstop=2
		set tabstop=2
		set backspace=2
		set smarttab
    "set expandtab                   "tabs are spaces, not tabs
		set lbr
		"	Auto indent
		set ai
		"	Smart indet
		set si
		"	C-style indenting
		set cindent
		"	Wrap line
		set wrap
		"带有如下符号的单词不要被换行分割
		set iskeyword+=_,$,@,%,#,-
    "set matchpairs+=<:>                "match, to be used with %
    set pastetoggle=<F12>           "pastetoggle (sane indentation on pastes)
    "set comments=sl:/*,mb:*,elx:*/  "auto format comment blocks
    "Remove trailing whitespaces and ^M chars
    "autocmd FileType c,cpp,java,php,javascript,python,twig,xml,yml autocmd BufWritePre <buffer> :call setline(1,map(getline(1,"$"),'substitute(v:val,"\\s\\+$","","")'))
"}





"Key (re)Mappings {
    "The default leader is '\', but many people prefer ',' as it's in a standard
    "location
		"Set mapleader
		let mapleader = ","
		let g:mapleader = ","

    "Making it so ; works like : for commands. Saves typing and eliminates :W style typos due to lazy holding shift.
    nnoremap ; :

		"在不同的窗口移动
		map <C-j> <C-W>j
		map <C-k> <C-W>k
		map <C-h> <C-W>h
		map <C-l> <C-W>l
		map <C-i> <C-W><C-W>

		"设置自动保存
		imap <F9> <Esc>:up<cr>

		"Tab configuration
		map <leader>tn :tabnew .<cr>
		map <leader>tc :tabclose<cr>
		map <leader>tm :tabn<cr>
		map <leader>tp :tabp<cr>

		"Moving fast to front, back and 2 sides ;)
		imap <m-$> <esc>$a
		imap <m-0> <esc>0i
		imap <D-$> <esc>$a
		imap <D-0> <esc>0i

		"Fast close the buffer
		nmap <leader>q :bd<cr> 

		"Fast saving
		nmap <leader>w :w!<cr>

    "Wrapped lines goes down/up to next row, rather than next line in file.
    nnoremap j gj
    nnoremap k gk

    "The following two lines conflict with moving to top and bottom of the
    "screen
    "If you prefer that functionality, comment them out.
    map <S-H> gT
    map <S-L> gt

    "Yank from the cursor to the end of the line, to be consistent with C and D.
    nnoremap Y y$

    """Code folding options
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

    "clearing highlighted search
    nmap <silent> <leader>/ :nohlsearch<CR>

    "Shortcuts
    "Change Working Directory to that of the current file
    cmap cwd lcd %:p:h
    cmap cd. lcd %:p:h

    "visual shifting (does not exit Visual mode)
    vnoremap < <gv
    vnoremap > >gv

    "Fix home and end keybindings for screen, particularly on mac
    "- for some reason this fixes the arrow keys too. huh.
    map [F $
    imap [F $
    map [H g0
    imap [H g0

    "For when you forget to sudo.. Really Write the file.
    cmap w!! w !sudo tee % >/dev/null

    "Some helpers to edit mode
    "http://vimcasts.org/e/14
    cnoremap %% <C-R>=expand('%:h').'/'<cr>
    map <leader>ew :e %%
    map <leader>es :sp %%
    map <leader>ev :vsp %%
    map <leader>et :tabe %%

    "Adjust viewports to the same size
    map <Leader>= <C-w>=

    "Easier horizontal scrolling
    map zl zL
    map zh zH
"}

" Plugins {

    "" PIV {
        "let g:DisableAutoPHPFolding = 0
        "let g:PIVAutoClose = 0
    "" }

    " Misc {
        let g:NERDShutUp=1
        let b:match_ignorecase = 1
    " }

    " OmniComplete {
        if has("autocmd") && exists("+omnifunc")
            autocmd Filetype *
                \if &omnifunc == "" |
                \setlocal omnifunc=syntaxcomplete#Complete |
                \endif
        endif

        "hi Pmenu  guifg=#000000 guibg=#F8F8F8 ctermfg=black ctermbg=Lightgray
        "hi PmenuSbar  guifg=#8A95A7 guibg=#F8F8F8 gui=NONE ctermfg=darkcyan ctermbg=lightgray cterm=NONE
        "hi PmenuThumb  guifg=#F8F8F8 guibg=#8A95A7 gui=NONE ctermfg=lightgray ctermbg=darkcyan cterm=NONE

        " some convenient mappings
        "inoremap <expr> <Esc>      pumvisible() ? "\<C-e>" : "\<Esc>"
        "inoremap <expr> <CR>       pumvisible() ? "\<C-y>" : "\<CR>"
        "inoremap <expr> <Down>     pumvisible() ? "\<C-n>" : "\<Down>"
        "inoremap <expr> <Up>       pumvisible() ? "\<C-p>" : "\<Up>"
        "inoremap <expr> <C-d>      pumvisible() ? "\<PageDown>\<C-p>\<C-n>" : "\<C-d>"
        "inoremap <expr> <C-u>      pumvisible() ? "\<PageUp>\<C-p>\<C-n>" : "\<C-u>"

        " automatically open and close the popup menu / preview window
        au CursorMovedI,InsertLeave * if pumvisible() == 0|silent! pclose|endif
        set completeopt=menu,preview,longest
    " }

    " Ctags {
        set tags=./tags;/,~/.vimtags
    " }

    " AutoCloseTag {
        " Make it so AutoCloseTag works for xml and xhtml files as well
        au FileType xhtml,xml ru ftplugin/html/autoclosetag.vim
        nmap <Leader>ac <Plug>ToggleAutoCloseMappings
    " }

    " SnipMate {
        " Setting the author var
        " If forking, please overwrite in your .vimrc.local file
        let g:snips_author = 'Steve Francia <steve.francia@gmail.com>'
    " }

    " NerdTree {
				"把 F4 映射到 切换NERDTree插件
				map <F4> :NERDTreeToggle<cr>
        "map <C-e> :NERDTreeToggle<CR>:NERDTreeMirror<CR>
        map <leader>e :NERDTreeFind<CR>
        nmap <leader>nt :NERDTreeFind<CR>

        let NERDTreeShowBookmarks=1
        let NERDTreeIgnore=['\.pyc', '\~$', '\.swo$', '\.swp$', '\.git', '\.hg', '\.svn', '\.bzr']
        let NERDTreeChDirMode=0
        let NERDTreeQuitOnOpen=1
        let NERDTreeShowHidden=1
        let NERDTreeKeepTreeInNewTab=1
				let NERDTreeWinPos = "left"
    " }

    " Tabularize {
        if exists(":Tabularize")
          nmap <Leader>a= :Tabularize /=<CR>
          vmap <Leader>a= :Tabularize /=<CR>
          nmap <Leader>a: :Tabularize /:<CR>
          vmap <Leader>a: :Tabularize /:<CR>
          nmap <Leader>a:: :Tabularize /:\zs<CR>
          vmap <Leader>a:: :Tabularize /:\zs<CR>
          nmap <Leader>a, :Tabularize /,<CR>
          vmap <Leader>a, :Tabularize /,<CR>
          nmap <Leader>a<Bar> :Tabularize /<Bar><CR>
          vmap <Leader>a<Bar> :Tabularize /<Bar><CR>

          " The following function automatically aligns when typing a
          " supported character
          inoremap <silent> <Bar>   <Bar><Esc>:call <SID>align()<CR>a

          function! s:align()
              let p = '^\s*|\s.*\s|\s*$'
              if exists(':Tabularize') && getline('.') =~# '^\s*|' && (getline(line('.')-1) =~# p || getline(line('.')+1) =~# p)
                  let column = strlen(substitute(getline('.')[0:col('.')],'[^|]','','g'))
                  let position = strlen(matchstr(getline('.')[0:col('.')],'.*|\s*\zs.*'))
                  Tabularize/|/l1
                  normal! 0
                  call search(repeat('[^|]*|',column).'\s\{-\}'.repeat('.',position),'ce',line('.'))
              endif
          endfunction

        endif
     " }

     " Session List {
        "set sessionoptions=blank,buffers,curdir,folds,tabpages,winsize
        "nmap <leader>sl :SessionList<CR>
        "nmap <leader>ss :SessionSave<CR>
     " }

     " Buffer explorer {
        "nmap <tab> :BufExplorer<CR>
     " }

     " JSON {
        "nmap <leader>jt <Esc>:%!python -m json.tool<CR><Esc>:set filetype=json<CR>
     " }

     "" PyMode {
        "let g:pymode_lint_checker = "pyflakes"
     "" }

     " ctrlp {
        let g:ctrlp_working_path_mode = 2
        nnoremap <silent> <D-t> :CtrlP<CR>
        nnoremap <silent> <D-r> :CtrlPMRU<CR>
        let g:ctrlp_custom_ignore = {
            \ 'dir':  '\.git$\|\.hg$\|\.svn$',
            \ 'file': '\.exe$\|\.so$\|\.dll$' }
     "}

     "" TagBar {
        "nnoremap <silent> <leader>tt :TagbarToggle<CR>
     ""}

     "" PythonMode {
     "" Disable if python support not present
        "if !has('python')
           "let g:pymode = 1
        "endif
     "" }

     " Fugitive {
        nnoremap <silent> <leader>gs :Gstatus<CR>
        nnoremap <silent> <leader>gd :Gdiff<CR>
        nnoremap <silent> <leader>gc :Gcommit<CR>
        nnoremap <silent> <leader>gb :Gblame<CR>
        nnoremap <silent> <leader>gl :Glog<CR>
        nnoremap <silent> <leader>gp :Git push<CR>
     "}

     " neocomplcache {
        let g:neocomplcache_enable_at_startup = 1
        let g:neocomplcache_enable_camel_case_completion = 1
        let g:neocomplcache_enable_smart_case = 1
        let g:neocomplcache_enable_underbar_completion = 1
        let g:neocomplcache_min_syntax_length = 3
        let g:neocomplcache_enable_auto_delimiter = 1

        " AutoComplPop like behavior.
        let g:neocomplcache_enable_auto_select = 0

        " SuperTab like snippets behavior.
        imap <expr><TAB> neocomplcache#sources#snippets_complete#expandable() ? "\<Plug>(neocomplcache_snippets_expand)" : pumvisible() ? "\<C-n>" : "\<TAB>"

        " Plugin key-mappings.
        imap <C-k>     <Plug>(neocomplcache_snippets_expand)
        smap <C-k>     <Plug>(neocomplcache_snippets_expand)
        inoremap <expr><C-g>     neocomplcache#undo_completion()
        inoremap <expr><C-l>     neocomplcache#complete_common_string()


        " <CR>: close popup
        " <s-CR>: close popup and save indent.
        "inoremap <expr><CR>  pumvisible() ? neocomplcache#close_popup() : "\<CR>"
        "inoremap <expr><s-CR> pumvisible() ? neocomplcache#close_popup() "\<CR>" : "\<CR>"
        " <TAB>: completion.
        "inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : "\<TAB>"

        " <C-h>, <BS>: close popup and delete backword char.
        inoremap <expr><C-h> neocomplcache#smart_close_popup()."\<C-h>"
        inoremap <expr><BS> neocomplcache#smart_close_popup()."\<C-h>"
        inoremap <expr><C-y>  neocomplcache#close_popup()
        inoremap <expr><C-e>  neocomplcache#cancel_popup()

        " Enable omni completion.
        autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
        autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
        autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
        autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
        autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags

        " Enable heavy omni completion.
        if !exists('g:neocomplcache_omni_patterns')
            let g:neocomplcache_omni_patterns = {}
        endif
        "let g:neocomplcache_omni_patterns.ruby = '[^. *\t]\.\h\w*\|\h\w*::'
        "autocmd FileType ruby setlocal omnifunc=rubycomplete#Complete
        let g:neocomplcache_omni_patterns.php = '[^. \t]->\h\w*\|\h\w*::'
        let g:neocomplcache_omni_patterns.c = '\%(\.\|->\)\h\w*'
        let g:neocomplcache_omni_patterns.cpp = '\h\w*\%(\.\|->\)\h\w*\|\h\w*::'

        " For snippet_complete marker.
        if has('conceal')
            set conceallevel=2 concealcursor=i
        endif

     " }

			" a.vim {
					"映射a.vim 快捷键 
					map <leader>a :A<cr>
			" }
			" Colorscheme {
				"设置Color-Sample
				map <leader>1 :NEXTCOLOR<cr>
				map <leader>2 :PREVCOLOR<cr>
			" }
			
			" unimpaired.vim {
				"Buble single line
					nmap <S-Up> [e
					nmap <S-Down> ]e
				"Buble mulitle lines
					vmap <S-Up> [egv
					vmap <S-Down> ]egv
			 " }
			"Gundo {
				nnoremap <F5> :GundoToggle<CR>
				let g:gundo_width = 35
				let g:gundo_preview_height = 10
			" }
			"ruby-conque {
					nmap <silent> <Leader>rcrr :call RunRubyCurrentFileConque()<CR>
					nmap <silent> <Leader>rcss :call RunRspecCurrentFileConque()<CR>
					nmap <silent> <Leader>rcll :call RunRspecCurrentLineConque()<CR>
					nmap <silent> <Leader>rccc :call RunCucumberCurrentFileConque()<CR>
					nmap <silent> <Leader>rccl :call RunCucumberCurrentLineConque()<CR>
					nmap <silent> <Leader>rcRR :call RunRakeConque()<CR>
					nmap <silent> <Leader>rcrl :call RunLastConqueCommand()<CR>
			" }
			"vim-indent-guides {
				"note: <leader>ig to toggle this plugin
				let g:indent_guides_auto_colors = 0
				autocmd VimEnter,Colorscheme * :hi IndentGuidesOdd	guibg=red	 ctermbg=3
				autocmd VimEnter,Colorscheme * :hi IndentGuidesEven guibg=green ctermbg=4
			" }
			"MinibufferExpl {
					let g:miniBufExplModSelTarget = 1
					let g:miniBufExplModSelTarget = 0
					let g:miniBufExplUseSingleClick = 1
					let g:miniBufExplMapWindowNavVim = 1
					let g:miniBufExplMapWindowNavArrows = 1
					let g:miniBufExplMapCTabSwitchBufs = 1
			"	}

" }

" GUI Settings {
    " GVIM- (here instead of .gvimrc)
    if has('gui_running')
        set guioptions-=T           " remove the toolbar
        set lines=40                " 40 lines of text instead of 24,
				if has("gui_gtk2")
						set guifont=Andale\ Mono\ Regular\ 16,Menlo\ Regular\ 15,Consolas\ Regular\ 16,Courier\ New\ Regular\ 18
				else
						set guifont=Andale\ Mono\ Regular:h16,Menlo\ Regular:h15,Consolas\ Regular:h16,Courier\ New\ Regular:h18
				endif
        if has('gui_macvim')
						set guifont=Monaco:h17,Andale\ Mono\ Regular:h16,Menlo\ Regular:h15,Consolas\ Regular:h16,Courier\ New\ Regular:h18
            set transparency=5          " Make the window slightly transparent
        endif
    else
        if &term == 'xterm' || &term == 'screen'
            set t_Co=256                 " Enable 256 colors to stop the CSApprox warning and make xterm vim shine
        endif
        "set term=builtin_ansi       " Make arrow and other keys work
    endif
" }
"
 " Functions {
	"autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete
	"if has("autocmd") && exists("+omnifunc")
			"autocmd Filetype *
							"\ if &omnifunc == ""|
							"\   setlocal omnifunc=syntaxcomplete#Complete |
							"\ endif
		"endif
		"let g:rubycomplete_buffer_loading = 1
		"let g:rubycomplete_classes_in_global = 1
		"let g:rubycomplete_rails = 1
		"
		"Following to have Vim jump to the last position when reopening a file
		autocmd BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\""| endif
" }

