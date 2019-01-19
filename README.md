# Fjord-Landing-Page

Для работы шаблона необходимо установить `nodejs` (вместе с `npm`)

- [Установка Nodejs](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager "Installing Node.js via package manager")

## Установка шаблона

``` sh
$ git clone https://github.com/KakNaZlo/Fjord-Landing-Page.git
$ npm install
```

По окончанию выполнения будут установлены все необходимые пакеты.


### Задачи Gulp

 - `$ gulp sass` - компилиция sass
 - `$ gulp clean` - очистка каталога `dist/`
 - `$ gulp build` - полная сборка проекта
 - `$ gulp watch` - запуск задачи `css-libs` и отслеживания изменений
 - `$ gulp default` - запуск задачи `watch`

## Общая концепция

- `app/` - каталог для размещения рабочих файлов (html, less, js, изображения)
- `dist/` - каталог для размещения готовой верстки

Вся работа осуществляется в каталоге `app/`.

