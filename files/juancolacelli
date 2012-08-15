""""""""""""""""""""
" Configurations
""""""""""""""""""""

" ACP y Supertab
let g:acp_behaviorKeywordLength = 4 "Minimo de 4 caracteres para auto desplegar autocomplete
let g:acp_completeOption = ".,w,b,u,U,kspell,s,i,d,t" "Opciones de autocomplete, agregar k para diccionarios (.,w,b,u,t and bien)

" Auto-complete
set completeopt=longest,menuone,preview
set complete = ".,w,b,u,U,kspell,s,i,d,t" "Para mejorar velocidad quitar la i
"set dictionary=/usr/share/dict/words "Mas palabras
set ofu=syntaxcomplete#Complete
set spelllang=en,es "Ingles-Español
set spellsuggest=best,3 "3 resultados de diccionario
set spell "Chequea ortografía
set wildignore=*.dll,*.o,*.obj,*.bak,*.exe,*.pyc,*.jpg,*.gif,*.png "Ignora extenciones al autocompletar
set wildmenu "Autocompleta en consola
set wildmode=list:longest "Permite una lista larga al autocompletar

" Tabulación
filetype indent on "Tabulacion por tipo de archivo
set autoindent "Tabs automaticos
set copyindent "Copia la tabulación anterior
set expandtab "Espacios en vez de tabs
set preserveindent "Preservar tabs
set shiftwidth=2 "Cantidad de espacios por tab
set smartindent "Tabs y espacios son lo mismo
set smarttab "Inserta tabulación basándose en el principio de la línea
set tabstop=2 "Cantidad de espacios por tab

" Búsquedas
set hlsearch "Resalta la busqueda actual
set ignorecase "Ignora el caso en las búsquedas
set incsearch "Búsquedas incrementales
set scs "Búsqueda inteligente
set smartcase "Ignora mayúsculas si solo se busca minúsculas, pero si se busca mayúsculas, no ignora

" Backups
set nobackup "Deshabilitar backups
set noswapfile "Deshabilitar swap
set nowritebackup "Deshabilitar backups

" Edición
filetype on "Detecta tipo de archivos
filetype plugin on "Permite la deteccion de archivo por plugin
setlocal autoread
set autoread "Detecta cambios
set confirm "Confirmar guardar cambios al salir en vez de avisar cambios
set hidden "Guarda los undo aunque se abra nuevamente el archivo
set history=1000 "Historial de comandos
set joinspaces "Junta espacios
set linespace=0 "Quita los espacios entre filas
set list "Muestra tabs y espacios
set listchars=tab:->,trail:-,extends:#,nbsp:. "Muestra tabs y espacios
set matchpairs=(:),{:},[:],<:> "Resalta de a pares
set matchtime=10 "Tiempo que resalta el final de la llave o corchete
set number "Muestra numero de linea
set numberwidth=4 "Ancho de espacio de números (4, hasta 9999)
set ruler "Muestra la posición del cursor
set showcmd "Muestra comandos parciales
set showmatch "Muestra el final de la llave o corchete
set undolevels=1000 "1000 undos
set wrap "Cortar la linea

" Folding
set foldlevel=1 "Folding nivel 1 por defecto
set foldmethod=manual "Folding manual
set foldnestmax=10 "Folding máximo 10 niveles
set nofoldenable "Folding no por defecto

" Beep
set noerrorbells "Beep sin sonido
set visualbell "Beep sin sonido

" Mouse
set mouse=a "Permite el uso del mouse
set mousehide "Oculta el mouse al escribir

" General
set backspace=indent,eol,start "Borrado flexible
set laststatus=2 "Siempre muestra la barra de estado abajo
set more "Usar mas resultados
set nocompatible "Vim no vi
set path=**
set title "Cambia el título de la terminal
set ttyfast "Terminal rapida

""""""""""""""""""""
" Funciones
""""""""""""""""""""

"Muestra todas las definiciones del archivo
imap <F1> <esc>:Tlist<CR>
nmap <F1> :Tlist<CR>

"Modo para pegar con tabulación
set pastetoggle=<F2>

"Reemplazar espacios por tabs
imap <F5> <esc>:%s/\t/  /g<CR>
nmap <F5> :%s/\t/  /g<CR>
imap <S-F5> <esc>:%s/  /\t/g<CR>
nmap <S-F5> :%s/  /\t/g<CR>

"Quita el resaltado
imap <F6> <esc>:noh<CR>
nmap <F6> :noh<CR>

"Quita los enters del final
imap <F7> <esc> :%s/\r//g<CR>
nmap <F7> :%s/\r//g<CR>

"Permite el uso del mouse
imap <F12> <esc>:set mouse=a<CR>
nmap <F12> :set mouse=a<CR>

"No permite el uso del mouse
imap <S-F12> <esc>:set mouse=r<CR>
nmap <S-F12> :set mouse=r<CR>

"Mouse del medio pega
imap <MouseMiddle> <esc>"*p"
nmap <MouseMiddle> <esc>"*p"

""""""""""""""""""""
" Tags
""""""""""""""""""""

"Cierra automaticamente
:inoremap ( ()<left>
:inoremap { {}<left>
:inoremap [ []<left>
:inoremap < <><left>
:inoremap " ""<left>
:inoremap ' ''<left>

""""""""""""""""""""
" Comandos
""""""""""""""""""""

"Errores comunes, comandos con mayuscula, minuscula, y errores de leader
:command! WQ wq
:command! Wq wq
:command! W w
:command! Q q
nore ; :
nore , :
let maplocalleader=',' "Comienzo de los macros
let mapleader=',' "Comienzo de los macros
let g:mapleader=',' "Comienzo de los macros

"Guarca y checkea sintaxis
:command! Rw w !ruby -c

"Guardar con sudo
cmap w!! w !sudo tee % >/dev/null

""""""""""""""""""""
" Movimiento
""""""""""""""""""""

"Deshabilita las flechas
map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>

"J y K se usan para navegar autocomplete
inoremap <expr> <C-j> ((pumvisible())?("\<C-n>"):("j"))
inoremap <expr> <C-k> ((pumvisible())?("\<C-p>"):("k"))

"Fácil navegación en ventanas
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

""""""""""""""""""""
" Colores
""""""""""""""""""""

set background=dark "Fondo oscuro
set cursorline "Resalta la linea actual
"set cursorcolumn "Resalta la columna actual (comentado por conflicto con autocomplete)
syn on "Resalta la sintaxis
colorscheme vividchalk "Esquema de color

"Color del resaltado de línea
hi Cursor term=none cterm=none ctermfg=0 ctermbg=15 guibg=White guifg=Black
hi CursorLine term=underline cterm=underline guibg=#333333 "Color de la linea actual
hi CursorColumn term=underline cterm=underline ctermbg=0 ctermfg=2 guibg=#333333 "Color de la columna actual

"Número de línea
hi LineNr term=none cterm=none ctermbg=7 ctermfg=0 guibg=#222222 guifg=#DDEEFF "Color de la columna de números

"Menú del autocomplete
hi Pmenu term=none cterm=none ctermfg=7 ctermbg=0 guibg=Gray guifg=Black
hi PmenuSel cterm=bold ctermfg=15 ctermbg=3 gui=bold guifg=White guibg=#5555ff

"Estoy en el GUI?
if has("gui_running")
  set guioptions-=T "Deshabilita toolbar
endif

""""""""""""""""""""
" .vimrc
""""""""""""""""""""

"Abrir .vimrc
map <leader>v :e! ~/.vimrc<cr>"

"Reabrir .vimrc cuando se guarda
autocmd! bufwritepost .vimrc source ~/.vimrc"
