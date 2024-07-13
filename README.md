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

| --------------- | ------------------------------------------------------ | -------------------------------------------- |
| **Inicio - P1** | <span style="color: #fc7b03">TEORICO / PRACTICO</span> | Creación de `package.json`                   |
| **Inicio - P1** | <span style="color: #94fc03">PRACTICO</span>           | Instalación dependencias necesarias           |
| **Inicio - P1** | <span style="color: #94fc03">PRACTICO</span>           | Configuración `Express`                       |
| **Ruteo - P2**  | <span style="color: #fc7b03">TEORICO / PRACTICO</span> | Aplicar un prefijo global para nuestra API   |
| **Ruteo - P2**  | <span style="color: #94fc03">PRACTICO</span>           | Generando mi primera ruta                    |
| **Ruteo - P2**  | <span style="color: #94fc03">PRACTICO</span>           | Uso de Postman para prueba de ruta           |

| --------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| **Ruteo**       | <span style="color: #94fc03">PRACTICO</span>           | Modalidad de ruta para aplicar en un servidor basado en POO |
| **Ruteo**       | <span style="color: #94fc03">PRACTICO</span>           | Generando rutas extendidas de una ruta base                 |
| **Controlador** | <span style="color: #fc7b03">TEORICO / PRACTICO</span> | Creación de controladores                   |

| ---------- | ------------------------------------------------------ | -------------------------------------------------------- |
| **Config** | <span style="color: #94fc03">PRACTICO</span>           | Configuracion de variables de entorno                    |
| **Config** | <span style="color: #94fc03">PRACTICO</span>           | Declaracion de variables de entorno en nuestro server.ts |

| ----------------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| **Docker Compose (DB)** | <span style="color: #94fc03">PRACTICO</span>           | Se crea `docker-compose.yml`                        |
| **Docker Compose (DB)** | <span style="color: #fc7b03">TEORICO / PRACTICO</span> | Ejecuta docker-compose y comprobar la conexion |
| **TypeORM (DB)**        | <span style="color: #94fc03">PRACTICO</span>           | Se crea getter de configuracion de conexion         |
| **TypeORM (DB)**        | <span style="color: #94fc03">PRACTICO</span>           | Ejecutar la conexion en el server                    |
| **TypeORM (DB)**        | <span style="color: #94fc03">PRACTICO</span>           | Crear entidad base con datos comunes              |
| **TypeORM (DB)**        | <span style="color: #94fc03">PRACTICO</span>           | Creando entidad para base de datos |

| **General** | <span style="color: #94fc03">PRACTICO</span> | Distribucion de proyecto de manera modular                          |
| **Entidad** | <span style="color: #03d7fc">TEORICO</span>  | Relaciones (uno a muchos (N:1), uno a uno (1:1) y muchos a muchos (N:N)) |
| **Entidad** | <span style="color: #94fc03">PRACTICO</span> | Users: Modificacion de entidad usuario                                              |
| **Entidad** | <span style="color: #94fc03">PRACTICO</span> | Customer: Creacion de entidad y relaciones                                          |
| **Entidad** | <span style="color: #94fc03">PRACTICO</span> | Products: Creacion de entidad y relaciones                                          |
| **Entidad** | <span style="color: #94fc03">PRACTICO</span> | Categories: Creacion de entidad y relaciones                                        |
| **Entidad** | <span style="color: #94fc03">PRACTICO</span> | Purchases: Creacion de entidad y relaciones                                         |
| **Entidad** | <span style="color: #94fc03">PRACTICO</span> | `purchases_products`: Creacion de entidad N:N custom y relaciones                   |

| ----------------------------------------------------------------------- |
| **Entidad**     | <span style="color: #94fc03">PRACTICO</span>           | Instalando `class-transformer` para excluir datos en entidad    |
| **Servicio**    | <span style="color: #fc7b03">TEORICO / PRACTICO</span> | Uso de servicios                                 |
| **Servicio**    | <span style="color: #94fc03">PRACTICO</span>           | Instanciando metodos desplegados con funcion de repositorio con TypeORM |
| **Servicio**    | <span style="color: #94fc03">PRACTICO</span>           | Creacion de `findAll` `findById` `create` `updtae` `delete`             |
| **Controlador** | <span style="color: #94fc03">PRACTICO</span>           | Integracion de metodos instanciando servicios con los controladores     |

| --------------- | -------------------------------------------- | ------------------------------------------------------------ |
| **Controlador** | <span style="color: #94fc03">PRACTICO</span> | Crear enum de status code                            |
| **Controlador** | <span style="color: #94fc03">PRACTICO</span> | Crear clase `HttpResponse` e integrando nuestro enum |
| **Controlador** | <span style="color: #94fc03">PRACTICO</span> | Instanciar clase de respuesta en controlador |

| **TypeORM**     | <span style="color: #94fc03">PRACTICO</span>           | Se crea `Data Source`                                                 |
| **TypeORM**     | <span style="color: #94fc03">PRACTICO</span>           | Editar configuracion de `Data Source` y prepararla para migraciones |
| **Migraciones** | <span style="color: #94fc03">PRACTICO</span>           | Creación de script de `typeorm` `migration:generate` y `migration:run` |