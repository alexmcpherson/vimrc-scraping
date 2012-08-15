set t_Co=256

filetype plugin on
set guifont=Nimbus\ Mono\ L\ 10
set wildmode=longest:full
set wildmenu

set dictionary+=/usr/share/dict/words
" colorscheme desert
colorscheme molokai

" Set NarrRgn to open aplit vertically
let g:nrrw_rgn_vert = 1

" Move around windows with Ctrl-w and the normal movements keys
map <C-h> <C-W>h
map <C-l> <C-W>l

" Scrolling
map <C-j> <C-E>
map <C-k> <C-Y>


" Scroll screen without moving the cursor to a new line
" Requires some meta-key fudging
" set <M-j>=j
" set <M-k>=k
" map <M-j> <C-E>
" map <M-k> <C-Y>

" F2 toggles line numbers
map <F2> :set number!<CR>

" Setup the the OverColLimit highlight group colours, but don't enable it yet
" highlight OverColLimit ctermbg=darkred ctermfg=white guibg=#FFD9D9
highlight TrailingSpaces ctermbg=cyan ctermfg=white guibg=cyan

function! ToggleOverColHighlight(...)

  " Use the specified width, if given.
  if a:0 > 0
    let width = a:1
  else
    let width = 79
  end

  let w:overcol_match_id = exists('w:overcol_match_id') ? w:overcol_match_id : 0
  if w:overcol_match_id == 0
    " :let w:overcol_match_id=matchadd('SignColumn', '\%>79v.\+', -1)
    :let w:overcol_match_id=matchadd('OverColLimit', '\%>79v.\+', -1)
  else
    :call matchdelete(w:overcol_match_id)
    :let w:overcol_match_id = 0
  end
endfunction
    
function! ToggleTrailingSpacesHighlight(...)

  " Use the specified width, if given.
  if a:0 > 0
    let width = a:1
  else
    let width = 79
  end

  let w:trailingspaces_match_id = exists('w:trailingspaces_match_id') ? w:trailingspaces_match_id : 0
  if w:trailingspaces_match_id == 0
    :let w:trailingspaces_match_id=matchadd('TrailingSpaces', '\s\+$', -1)
  else
    :call matchdelete(w:trailingspaces_match_id)
    :let w:trailingspaces_match_id = 0
  end
endfunction

map <F3> :call ToggleOverColHighlight()<CR>
map <F5> :call ToggleTrailingSpacesHighlight()<CR>

""" NERDTree Toggling """
map NT :NERDTreeToggle<CR>

""" FuzzyFinder options """
""" map <C-f> :FufFile<CR>
""" map <C-f> :FufCoverageFile<CR>
map <C-b> :FufBuffer<CR>
nnoremap <C-f> :<C-u>FufFile **/<CR> 

" Set the fuzzy finder to ignore pyc files
let g:fuf_file_exclude = '\v\~$|\.(o|exe|dll|bak|orig|swp|pyc|class)$|(^|[/\\])\.(hg|git|bzr)($|[/\\])' 

""" Scratch Buffer Mapping"""
map <C-s> :Sscratch<CR>

""" Diasble the bell in normal mode """
set vb t_vb=

""""""""""""""""""""" Taglist configuration """""""""""""""""""
" Display function name in status bar:
let g:ctags_statusline=1
" Automatically start script
let generate_tags=1
" Displays taglist results in a vertical window:
let Tlist_Use_Horiz_Window=0
" Shorter commands to toggle Taglist display
nnoremap TT :TlistToggle<CR>
map <F4> :TlistToggle<CR>
" Various Taglist diplay config:
let Tlist_Use_Right_Window = 1
let Tlist_Compact_Format = 1
let Tlist_Exit_OnlyWindow = 1
let Tlist_GainFocus_On_ToggleOpen = 1
let Tlist_File_Fold_Auto_Close = 1
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
