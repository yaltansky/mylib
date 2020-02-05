# Тестирование использования библиотеки

## Проблемы на текущий момент

## Проблема 1. Не получается выделить chunk components. Чтобы это сделать, надо переименовать файл package.json~ в package.json (в папке /lib/components). После этого команда npm run build:lib выдаёт сообщение:

ERROR: error TS6059: File 'C:/Projects/mylib/projects/mylib/src/lib/core/index.ts' is not under 'rootDir' 'C:\Projects\mylib\projects\mylib\src\lib\components'. 'rootDir' is expected to contain all source files.
error TS6059: File 'C:/Projects/mylib/projects/mylib/src/lib/core/utilis.ts' is not under 'rootDir' 'C:\Projects\mylib\projects\mylib\src\lib\components'. 'rootDir' is expected to contain all source files.
error TS6059: File 'C:/Projects/mylib/projects/mylib/src/lib/services/index.ts' is not under 'rootDir' 'C:\Projects\mylib\projects\mylib\src\lib\components'. 'rootDir' is expected to contain all source files.
error TS6059: File 'C:/Projects/mylib/projects/mylib/src/lib/services/public-api.ts' is not under 'rootDir' 'C:\Projects\mylib\projects\mylib\src\lib\components'. 'rootDir' is expected to contain all source files.
error TS6059: File 'C:/Projects/mylib/projects/mylib/src/lib/services/service1.ts' is not under 'rootDir' 'C:\Projects\mylib\projects\mylib\src\lib\components'. 'rootDir' is expected to contain all source files.

## Проблема 2. Не получается "красиво" адресоваться к элементам библиотеки из разных компонент:

Сейчас:
import { coreFunc1 } from '../core/index';

Хотелось бы:
import { coreFunc1 } from '@mylib/core';

## Проблема 3. Не получается адресоваться к элементам библиотеки из приложения:

Сейчас:
import { Mylib1Service } from 'mylib';

Хотелось бы:
import { Mylib1Service } from 'mylib/services';

Обращаю внимание, что библиотека сейчас поддерживает AOT (npm run build -- --prod).
