# NodeJS con TypeScript y TypeORM

API REST con NodeJS utilizando como lenguage core `TypeScript` y `TypeORM` como ORM SQL.

## Tecnologias a aplicar

- POO.
- Docker Compose como base de datos.
- Configuracion de TypeScript.
- Configuracion de rutas, controladores, servicios y entidades.

## Lista de dependencias para instalacion

Dependencias necesarias:

```bash
npm install class-validator class-transformer cors dotenv express morgan mysql typeorm typeorm-naming-strategies typescript
```

Dependencias de desarrollo necesarias:

```bash
npm install -D @types/cors @types/express @types/morgan concurrently nodemon
```

## Contenido del projecto

#### Creación del proyecto
**Creación de package.json**: Empezamos creando el archivo package.json que contendrá la configuración básica y las dependencias de nuestro proyecto.
**Instalación de dependencias necesarias**: Procedemos a instalar todas las dependencias esenciales para nuestro proyecto utilizando npm o yarn.
#### Configuración del servidor
**Configuración Express**: Configuramos el framework Express para manejar las rutas y las peticiones HTTP.
Aplicar un prefijo global para nuestra API: Definimos un prefijo global que será utilizado para todas las rutas de nuestra API.
**Generando mi primera ruta**: Creamos nuestra primera ruta para comprobar que el servidor Express está funcionando correctamente.
**Uso de Postman para prueba de ruta**: Utilizamos Postman para probar la ruta creada y asegurarnos de que devuelve la respuesta esperada.
**Modalidad de ruta para aplicar en un servidor basado en POO**: Implementamos las rutas siguiendo una modalidad de Programación Orientada a Objetos (POO).
**Generando rutas extendidas de una ruta base**: Extenderemos nuestra ruta base para incluir subrutas y manejar diferentes endpoints.
#### Controladores y variables de entorno
**Creación de controladores**: Creamos controladores para gestionar la lógica de negocio de nuestras rutas.
**Configuración de variables de entorno**: Configuramos variables de entorno para manejar configuraciones sensibles como claves y URLs de base de datos.
**Declaración de variables de entorno en nuestro server.ts**: Declaramos y utilizamos las variables de entorno en el archivo server.ts.
#### Configuración de Docker
**Se crea docker-compose.yml**: Creamos el archivo docker-compose.yml para definir los servicios que componen nuestra aplicación, incluyendo la base de datos.
**Ejecuta docker-compose y comprobar la conexión**: Ejecutamos docker-compose y comprobamos que todos los servicios se conectan correctamente.
**Se crea getter de configuración de conexión**: Creamos un getter para manejar la configuración de la conexión a la base de datos.
**Ejecutar la conexión en el servidor**: Establecemos la conexión a la base de datos desde nuestro servidor.
#### Modelado de datos
**Crear entidad base con datos comunes**: Definimos una entidad base que contiene los campos comunes a todas nuestras entidades.
**Creando entidad para base de datos**: Creamos entidades específicas para nuestra base de datos.
**Distribución de proyecto de manera modular**: Organizamos nuestro proyecto de manera modular para mantener un código limpio y mantenible.
**Relaciones (uno a muchos (N:1), uno a uno (1:1) y muchos a muchos (N
))**: Definimos las relaciones entre nuestras entidades, incluyendo relaciones uno a muchos, uno a uno y muchos a muchos.
#### Entidades específicas
**Users**: Modificación de entidad usuario: Modificamos la entidad usuario para incluir campos y relaciones necesarias.
**Customer**: Creación de entidad y relaciones: Creamos la entidad Customer y definimos sus relaciones con otras entidades.
**Products**: Creación de entidad y relaciones: Definimos la entidad Products y sus respectivas relaciones.
**Categories**: Creación de entidad y relaciones: Creamos la entidad Categories y establecemos sus relaciones.
**Purchases**: Creación de entidad y relaciones: Definimos la entidad Purchases y sus relaciones.
**purchases_products**: Creación de entidad N
**custom y relaciones**: Creamos una entidad personalizada para gestionar una relación muchos a muchos entre Purchases y Products.
#### Mejoras y servicios
**Instalando class-transformer para excluir datos en entidad**: Instalamos class-transformer para excluir datos sensibles o no necesarios en nuestras entidades.
**Uso de servicios**: Implementamos servicios para manejar la lógica de negocio y las operaciones con la base de datos.
**Instanciando métodos desplegados con función de repositorio con TypeORM**: Utilizamos los métodos proporcionados por TypeORM para manejar las operaciones CRUD de nuestras entidades.
#### Métodos y controladores
**Creación de findAll, findById, create, update, delete**: Creamos métodos CRUD (findAll, findById, create, update, delete) para nuestras entidades.
Integración de métodos instanciando servicios con los controladores: Integramos los métodos de los servicios con nuestros controladores para manejar las rutas.
#### Respuestas y status codes
**Crear enum de status code**: Definimos un enum para manejar los códigos de estado HTTP.
**Crear clase HttpResponse e integrando nuestro enum**: Creamos una clase HttpResponse que utiliza nuestro enum para gestionar las respuestas.
**Instanciar clase de respuesta en controlador**: Utilizamos la clase de respuesta en nuestros controladores para devolver respuestas estandarizadas.
#### Configuración de TypeORM
**Se crea Data Source**: Configuramos la fuente de datos (Data Source) para TypeORM.
**Editar configuración de Data Source y prepararla para migraciones**: Ajustamos la configuración de la fuente de datos y la preparamos para ejecutar migraciones.
**Creación de script de typeorm migration:generate y migration:run**: Creamos y ejecutamos scripts de migración utilizando TypeORM.
