call pathogen#infect()

" Для корректной работы клавиши Backspace
set backspace=2

" Появление окон справа и снизу от текущего
set splitright
set splitbelow

" Поддержка русской раскладки в normal режиме
set langmap=ФИСВУАПРШОЛДЬТЩЗЙКЫЕГМЦЧНЯ;ABCDEFGHIJKLMNOPQRSTUVWXYZ,фисвуапршолдьтщзйкыегмцчня;abcdefghijklmnopqrstuvwxyz

" Включение подсветки синтаксиса
syntax on

" Включение определения типа файла, загрузка плагинов
filetype plugin indent on

" Включение режима несовместимости с vi
set nocompatible

" Назначение mapleader клавиши 
let mapleader = ","

" Всегда показывать текущую строку под курсором
set ruler

" Показывать незавершенные команды внизу экрана
set showcmd

" Показывать текущий режим работы редактора
set showmode

" Подсвечивать найденные слова в документе
set hlsearch

" Подсвечивать найденные слова по мере набора строки поиска  
set incsearch

" Показывать номер строк
set number

" Настройка ширины отступов
set shiftwidth=2
set softtabstop=2
set expandtab
set autoindent

" Настройки скрывания блоков текста
set foldmethod=indent
set foldnestmax=3
set nofoldenable

" Настройка автодополнения пути к файлам
set wildmode=longest,list
set wildmenu

" Настройка поиска
set ignorecase
set smartcase

" Переключение между буферами приводит к их скрыванию
set hidden

" Настройка подсветки синтаксиса
set t_Co=256
colorscheme railscasts

" Показывать синтаксические ошибки
let g:syntastic_enable_signs=1

" Команда для записи в файл с помощью sudo
cmap w!! %!sudo tee > /dev/null %

" Выход из режима вставки с помощью ввода jj
imap jj <ESC>

" Переход в терминал
map <leader>sh :sh<cr>

" Показывать список буферов по F5
nnoremap <F5> :buffers<CR>:buffer<Space>
