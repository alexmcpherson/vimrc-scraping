set nocompatible

syntax enable

set encoding=utf-8

call pathogen#infect() " Pathogen

set showcmd " incomplete commands
filetype plugin indent on

set hlsearch " highlight
set incsearch " incremental
set ignorecase " case insensitive
set smartcase " case sensitive if capital letters

set hidden
set history=1000
set wildmenu " tab completion for menu

set scrolloff=3 " Context when in the limit of a buffer
set number

set nowrap
set tabstop=2                     " a tab is two spaces
set shiftwidth=2                  " an autoindent (with <<) is two spaces
set expandtab                     " use spaces, not tabs
set backspace=indent,eol,start    " backspace through everything in insert mode

let mapleader=","

map <C-l> <C-w>l
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-h> <C-w>h

map <leader>ga :CommandTFlush<cr>\|:CommandT app<cr>
map <leader>gj :CommandTFlush<cr>\|:CommandT app/assets/javascripts<cr>
map <leader>gs :CommandTFlush<cr>\|:CommandT app/assets/stylesheets<cr>
map <leader>gv :CommandTFlush<cr>\|:CommandT app/views<cr>
map <leader>gp :CommandTFlush<cr>\|:CommandT vendor/plugins<cr>
map <leader>gc :CommandTFlush<cr>\|:CommandT app/controllers<cr>
map <leader>gm :CommandTFlush<cr>\|:CommandT app/models<cr>
map <leader>gh :CommandTFlush<cr>\|:CommandT app/helpers<cr>
map <leader>gl :CommandTFlush<cr>\|:CommandT lib<cr>
map <leader>gt :CommandTFlush<cr>\|:CommandT spec<cr>
map <leader>gf :CommandTFlush<cr>\|:CommandT features<cr>
map <leader>gg :topleft 100 :split Gemfile<cr>
map <leader>f :CommandTFlush<cr>\|:CommandT<cr>
cnoremap %% <C-R>=expand('%:h').'/'<cr>
map <leader>F :CommandTFlush<cr>\|:CommandT %%<cr>

nnoremap <leader><leader> <c-^>

set backupdir=~/.vim/_backup
set directory=~/.vim/_temp

" Shortcut to rapidly toggle `set list`
nmap <leader>l :set list!<CR>

" Use the same symbols as TextMate for tabstops and EOLs
set list listchars=tab:\ \ ,trail:·

set laststatus=2
set statusline=%<%f\ (%{&ft})\ %-4(%m%)%{fugitive#statusline()}%=%-19(%3l,%02c%03V%) " From Gary Bernhardt


let g:CommandTMaxHeight=10

colorscheme solarized

" Running tests from Gary Bernhardt & Francesc Esplugas & Jordi Romero

function! RunSpec(args)
  write
  silent
  if filereadable('script/test')
    let spec =  'script/test '
  elseif filereadable('Gemfile')
    let spec = 'bundle exec rspec'
  else
    let spec = 'rspec'
  end
  let cmd = ':! gtime -f "\%e \%U \%S \%P" ' . spec . ' %' . a:args
  execute cmd
endfunction

map <leader>t :call RunSpec(':' . <C-r>=line('.')<CR>)<CR>
map <leader>T :call RunSpec('')<CR>

set timeoutlen=500 " This avoids escape lag

let g:Powerline_symbols = 'fancy' " Uses fancy font for powerline

:nnoremap <silent> <leader>tr :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>

