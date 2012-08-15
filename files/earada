""""""""""""""""""""""""""""""""""""""
"" FILE: .vimrc
"" EMAIL: edu@hardcoders.org
""""""""""""""""""""""""""""""""""""""

if &term =~ "xterm"
	set term=xterm-256color
endif

set nu nocompatible wrap showmode showcmd showmatch ruler laststatus=2 incsearch hlsearch

" Tabs
set autoindent ts=4 sts=4 sw=4 noexpandtab
" set listchars=tab:▸\ ,eol:¬

" Scroll limit
set scrolloff=5


" Spanish lang and disabled by default
setlocal spell spelllang=es
set nospell

" Map arrows in some distros
set whichwrap+=[,],<,>
set backspace=2

" Text format
set formatoptions+=cqron1 textwidth=80 fileformats=unix,mac,dos
set viminfo+=n~/.viminfo

" Load plugin for '%' command with if, else
runtime! macros/matchit.vim
filetype indent plugin on

" Menu autocomplete
if has("wildmenu")
	set wildchar=<TAB>
	set wildmenu
	set wildignore=*.o,*.cm[ioax],*.ppu,*.core,*~,core,#*#
endif

" Back to the current line when reopen the file
if has("autocmd")
	autocmd BufReadPost *
				\ if line("'\"") > 0 && line("'\"") <= line("$") |
				\		execute "normal g'\"" |
				\ endif
endif

" Syntax highlight
" Datsi
au BufNewfile,bufRead *.ens setf ens

" Vala, Gtkaml and Gtkon
" Syntax files from http://code.google.com/p/gtkaml/
au BufNewFile,BufRead *.vala setf vala
au BufNewFile,BufRead *.vapi setf vala
au BufNewFile,BufRead *.gtkaml setf xml
au BufNewFile,BufRead *.gtkon setf gtkon

if has("syntax") || has("gui_running")
	sy on
	colorscheme ron
	let c_gnu=1
	let c_space_errors=1

	" Red whitespaces
	highlight WhitespaceEOL ctermbg=red guibg=red
	match WhitespaceEOL /\s\+$/

	" new colorscheme for autocomplete window
	highlight Pmenu      ctermbg=grey ctermfg=black
	highlight PmenuSel   cterm=bold,reverse ctermbg=black ctermfg=yellow
	highlight PmenuSbar  ctermbg=blue
	highlight PmenuThumb ctermfg=lightblue
endif

"""""""""""
""Mapping""
"""""""""""
" Move lines up/down with Ctrl+[jk]
nmap <C-j> mz:m+<cr>`z
nmap <C-k> mz:m-2<cr>`z
vmap <C-j> :m'>+<cr>`<my`>mzgv`yo`z
vmap <C-k> :m'<-2<cr>`>my`<mzgv`yo`z

map <F6> :set list!<Bar>set list?<CR>
map <F7> :set spell!<Bar>set spell?<CR>
map <F8> :%!xxd<CR>
map <F9> :%!xxd -r<CR>
map <F10> :call NewShell()<CR>
map <F11> :set paste!<Bar>set paste?<CR>

map _h :nohlsearch<CR>
map _b :bn<CR>
map _B :bp<CR>

"""""""""
""Ctags""
"""""""""
set tags+=/usr/src/linux/tags
set tags+=~/.vim/tags/radare2_tags

""""""""""""""""""
""Mercurial Diff""
""""""""""""""""""
function! s:Diffhg()
  let filetype=&ft
  diffthis
  vnew | exe "%!hg diff " . expand("#:p") . "| patch -Rs -o /dev/stdout"
  exe "setlocal bt=nofile bh=wipe nobl noswf ro ft=" . filetype
  diffthis
endfunction
com! Diffhg call s:Diffhg()

""""""""""""""""""
""Code skeletons""
""""""""""""""""""
function! Code_ASM()
	call append(0,[".data","\tHelloWorld:","\t\t.asciz \"Hello World!\""])
	call append('$',[".bss","\t.comm Buffer,1024",""])
	call append('$',[".text","\t.globl _start","\t_start:",""])
	call cursor(line('$'),col('$'))
	call append('$',["\t\t# Exit(0)","\t\txorl %eax,%eax","\t\tmovl %eax,%ebx","\t\tinc %eax","\t\tint $0x80"])
endfunction
function! Code_C()
	call append(0,["#include <stdio.h>","#include <string.h>","#include <stdlib.h>"])
	call append('$',"int main (int argc, char **argv){")
	call append('$',["","\treturn 0;","}"])
	call cursor(line('$')-2,0)
endfunction
function! Code_Perl()
	call append(0,"#!/usr/bin/perl -w")
	call cursor(line('$'),0)
endfunction

""""""""""""""""
""SHELL-BUFFER""
""""""""""""""""
function! NewShell()
	let g:ShellPromt = "VIM-SHELL> "
	let g:Shellhistory = []
	let g:Shellhistorypointer = 0
	set ft=Shell
	exec 'syn match prompt "^'.g:ShellPromt.'"'
	hi def prompt ctermfg=green
	normal ggdG
	exec 'normal i'.g:ShellPromt
	inoremap <buffer> <cr> <c-o>:call ShellEnter()<cr>
	inoremap <buffer> <up> <c-o>:call ShellHistory(-1)<cr>
	inoremap <buffer> <down> <c-o>:call ShellHistory(1)<cr>
	call cursor('$',strlen(g:ShellPromt)+1)
endfunction

function! ShellEnter()
	let line = strpart(getline('$'),strlen(g:ShellPromt))
	if line == 'clear'
		normal ggdG
		call add(g:Shellhistory,line)
		let g:Shellhistorypointer += 1
		exec 'normal i'.g:ShellPromt
		call cursor('$',strlen(g:ShellPromt)+1)
	elseif line == 'exit'
		q!
	else
		exec 'silent! r !'.line
		call add(g:Shellhistory,line)
		let g:Shellhistorypointer += 1
		call append('$',g:ShellPromt)
		call cursor('$',strlen(g:ShellPromt)+1)
	endif
endfunction

function! ShellHistory(steps)
	let g:Shellhistorypointer += str2nr(a:steps)
	if g:Shellhistorypointer < 0
		let g:Shellhistorypointer = 0
	endif
	if g:Shellhistorypointer >= len(g:Shellhistory)
		let g:Shellhistorypointer = len(g:Shellhistory)-1
	endif
	let cmd = g:Shellhistory[g:Shellhistorypointer]
	exec 'normal! S'.g:ShellPromt.cmd
endfunction
