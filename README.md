## Endpoints Resumen

| Método   | Endpoint                                             | Descripción                                                            |
| -------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| `GET`    | `/api/collection`                                    | Recupera toda la colección.                                            |
| `DELETE` | `/api/collection`                                    | Vacía la colección.                                                    |
| `GET`    | `/api/estudiantes/grado/${GRADO}`                    | Recupera un estudiante por grado.                                      |
| `GET`    | `/api/estudiantes/edad/mayor-de-edad`                | Recupera todos los estudiantes mayores de edad.                        |
| `GET`    | `/api/estudiantes/orientacion/${ORIENTACION}`        | Recupera los estudiantes según su orientación.                         |
| `GET`    | `/api/estudiantes/asignatura/${ASIGNATURA}/${GRADO}` | Recupera los estudiantes según que cursan la asignatura en dicho grado |
| `POST`   | `/api/estudiantes`                                   | Añade un estudiante a la colección.                                    |
| `PATCH`  | `/api/estudiantes/${ID}`                             | Actualiza un estudiante.                                               |

## Referencias

### Buscar por grado

```http
GET /api/estudiantes/grado/${GRADO}
```

| Path Param | Type     | Description                                   |
| :--------- | :------- | :-------------------------------------------- |
| `GRADO`    | `number` | **Requerido**. Uno de los sigientes: 4, 5, 6. |

#### Response

```
[
  {
    "_id": ObjectId,
    "name": String,
    "age": Number,
    "group": String
  },
  ...
]
```

El atributo `_id` es el identificador definido por MongoDB.

El atributo `name` es el nombre del estudiante.

El atributo `age` es la edad del estudiante.

El atributo `group` es el grupo al que asiste el estudiante.

### Buscar mayores de edad

```http
GET /api/estudiantes/edad/mayor-de-edad
```

#### Response

```
[
  {
    "_id": ObjectId,
    "name": String,
    "grade": Number,
    "group": String
  },
  ...
]
```

El atributo `_id` es el identificador definido por MongoDB.

El atributo `name` es el nombre del estudiante.

El atributo `grade` es grado al que asiste del estudiante.

El atributo `group` es el grupo al que asiste el estudiante.

### Buscar por orientación

```http
GET /api/estudiantes/orientacion/${ORIENTACION}
```

| Path Param    | Type     | Description                                         |
| :------------ | :------- | :-------------------------------------------------- |
| `ORIENTACION` | `string` | **Requerido**. Orientación que cursa el estudiante. |

#### Response

```
[
  {
    "_id": ObjectId,
    "name": String,
    "grade": Number,
    "group": String,
    "subjects": [
      String,
      ...
    ]
  ...
]
```

El atributo `_id` es el identificador definido por MongoDB.

El atributo `name` es el nombre del estudiante.

El atributo `grade` es grado al que asiste del estudiante.

El atributo `group` es el grupo al que asiste el estudiante.

El atributo `subjects` es la lista de materias que cursa el estudiante.

### Buscar por grado y asignatura

```http
GET /api/estudiantes/asignatura/${ASIGNATURA}/${GRADO}
```

| Path Param   | Type     | Description                                   |
| :----------- | :------- | :-------------------------------------------- |
| `ASIGNATURA` | `string` | **Requerido**. Asignatura.                    |
| `GRADO`      | `number` | **Requerido**. Grado que cursa el estudiante. |

#### Response

```
[
  {
    "_id": ObjectId,
    "name": String,
    "age": Number,
    "grade": Number,
    "group": String,
    "subjects": [
      String,
      ...
    ],
    "orientation": String
  }
  ...
]
```

El atributo `_id` es el identificador definido por MongoDB.

El atributo `name` es el nombre del estudiante.

El atributo `age` es la edad del estudiante.

El atributo `grade` es grado al que asiste del estudiante.

El atributo `group` es el grupo al que asiste el estudiante.

El atributo `subjects` es la lista de materias que cursa el estudiante.

El atributo `orientation` es la orientación que cursa el estudiante.

### Crear un estudiante

```http
POST /api/estudiantes
```

| Header         | Value              |
| :------------- | :----------------- |
| `Content-Type` | `application/json` |

| Body Param    | Value      | Description                                                          |
| :------------ | :--------- | :------------------------------------------------------------------- |
| `name`        | `string`   | **Requerido**. Nombre .                                              |
| `age`         | `number`   | **Requerido**. Edad .                                                |
| `grade`       | `number`   | **Requerido**. Grado que cursa, valores permitidos 4, 5, 6.          |
| `group`       | `string`   | **Requerido**. Grupo al que asiste, valores permitidos: A, B, C.     |
| `subjects`    | `[string]` | **Requerido**. Lista de materias que cursa.                          |
| `orientación` | `[string]` | **Requerido / Opcional**. Si esta cursando 5 o 6 grado es requerido. |

#### Response

```
[
  {
    "_id": ObjectId,
    "name": String,
    "age": Number,
    "grade": Number,
    "group": String,
    "subjects": [
      String,
      ...
    ],
    "orientation": String
  }
  ...
]
```

El atributo `_id` es el identificador definido por MongoDB.

El atributo `name` es el nombre del estudiante.

El atributo `age` es la edad del estudiante.

El atributo `grade` es grado al que asiste del estudiante.

El atributo `group` es el grupo al que asiste el estudiante.

El atributo `subjects` es la lista de materias que cursa el estudiante.

El atributo `orientation` es la orientación que cursa el estudiante.

### Actualizar un estudiante

```http
PATCH /api/estudiantes
```

| Header         | Value              |
| :------------- | :----------------- |
| `Content-Type` | `application/json` |

| Body Param    | Value      | Description                                                     |
| :------------ | :--------- | :-------------------------------------------------------------- |
| `name`        | `string`   | **Opcional**. Nombre .                                          |
| `age`         | `number`   | **Opcional**. Edad .                                            |
| `grade`       | `number`   | **Opcional**. Grado que cursa, valores permitidos 4, 5, 6.      |
| `group`       | `string`   | **Opcional**. Grupo al que asiste, valores permitidos: A, B, C. |
| `subjects`    | `[string]` | **Opcional**. Lista de materias que cursa.                      |
| `orientación` | `[string]` | **Opcional**. Si esta cursando 5 o 6 grado es requerido.        |

#### Response

```
[
  {
    "_id": ObjectId,
    "name": String,
    "age": Number,
    "grade": Number,
    "group": String,
    "subjects": [
      String,
      ...
    ],
    "orientation": String
  }
  ...
]
```

El atributo `_id` es el identificador definido por MongoDB.

El atributo `name` es el nombre del estudiante.

El atributo `age` es la edad del estudiante.

El atributo `grade` es grado al que asiste del estudiante.

El atributo `group` es el grupo al que asiste el estudiante.

El atributo `subjects` es la lista de materias que cursa el estudiante.

El atributo `orientation` es la orientación que cursa el estudiante.
