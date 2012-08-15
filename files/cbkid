 let g:FuzzyFinderOptions = { 'Base':{}, 'Buffer':{}, 'File':{}, 'Dir':{},
      \                      'MruFile':{}, 'MruCmd':{}, 'Bookmark':{},
      \                      'Tag':{}, 'TaggedFile':{},
      \                      'GivenFile':{}, 'GivenDir':{},
      \                      'CallbackFile':{}, 'CallbackItem':{}, }
let g:FuzzyFinderOptions.Base.abbrev_map  = {
      \   '^v|' : map(filter(split(&runtimepath, ','), 'v:val !~ "after$"'), 'v:val . "/**/"'),
      \ }
let g:FuzzyFinderOptions.MruCmd.max_item = 400
nnoremap <silent> <C-n>      :FuzzyFinderBuffer<CR>
nnoremap <silent> <C-p>      :FuzzyFinderFileWithCurrentBufferDir<CR>
nnoremap <silent> <C-f><C-p> :FuzzyFinderFileWithFullCwd<CR>
nnoremap <silent> <C-f>p     :FuzzyFinderFile
nnoremap <silent> <C-j>      :FuzzyFinderMruFile<CR>
nnoremap <silent> <C-k>      :FuzzyFinderMruCmd<CR>
nnoremap <silent> <C-f><C-d> :FuzzyFinderDirWithCurrentBufferDir<CR>
nnoremap <silent> <C-f>d     :FuzzyFinderDirWithFullCwd<CR>
nnoremap <silent> <C-b>      :FuzzyFinderBookmark<CR>
nnoremap <silent> <C-f><C-t> :FuzzyFinderTag<CR>
nnoremap <silent> <C-f>t     :FuzzyFinderTag!<CR>
noremap  <silent> g]         :FuzzyFinderTagWithCursorWord!<CR>
nnoremap <silent> <C-f><C-g> :FuzzyFinderTaggedFile<CR>
nnoremap <silent> <C-f><C-b> :FuzzyFinderAddBookmark<CR>
vnoremap <silent> <C-f><C-b> :FuzzyFinderAddBookmarkAsSelectedText<CR>
nnoremap <silent> <C-f><C-e> :FuzzyFinderEditInfo<CR>
nnoremap <silent> <C-f><C-r> :FuzzyFinderRenewCache<CR>
