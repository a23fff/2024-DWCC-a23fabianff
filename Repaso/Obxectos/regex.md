# 📌 Mini-Guía de Expresiones Regulares (Regex) en JavaScript

## 🔹 1. Conceptos Básicos

Las expresiones regulares permiten buscar, reemplazar y validar texto de manera eficiente.

### ✅ **Sintaxis Básica**

```js
const regex = /patrón/; // Expresión regular
const texto = "Ejemplo de texto";
const resultado = regex.test(texto); // Devuelve true o false
```

---

## 🔹 2. Caracteres Especiales

| Símbolo | Descripción                               | Ejemplo | Coincide con               |
| ------- | ----------------------------------------- | ------- | -------------------------- |
| `.`     | Cualquier carácter excepto nueva línea    | `/a.b/` | `"acb"`, `"a1b"`, `"a-b"`  |
| `\d`    | Dígito (0-9)                              | `/\d/`  | `"5"`, `"8"`               |
| `\w`    | Caracter alfanumérico (A-Z, a-z, 0-9, \_) | `/\w/`  | `"a"`, `"Z"`, `"3"`, `"_"` |
| `\s`    | Espacio en blanco                         | `/\s/`  | `" "`                      |
| `\D`    | No es un dígito                           | `/\D/`  | `"a"`, `"@"`               |
| `\W`    | No es alfanumérico                        | `/\W/`  | `"%"`, `"&"`               |
| `\S`    | No es espacio en blanco                   | `/\S/`  | `"A"`, `"7"`               |

---

## 🔹 3. Cuantificadores

| Símbolo | Descripción                  | Ejemplo     | Coincide con                           |
| ------- | ---------------------------- | ----------- | -------------------------------------- |
| `*`     | 0 o más veces                | `/bo*la/`   | `"bla"`, `"bola"`, `"booooola"`        |
| `+`     | 1 o más veces                | `/bo+la/`   | `"bola"`, `"booola"` (pero no `"bla"`) |
| `?`     | 0 o 1 vez (opcional)         | `/colou?r/` | `"color"`, `"colour"`                  |
| `{n}`   | Exactamente `n` repeticiones | `/\d{3}/`   | `"123"`                                |
| `{n,}`  | Al menos `n` repeticiones    | `/\d{2,}/`  | `"12"`, `"12345"`                      |
| `{n,m}` | Entre `n` y `m` repeticiones | `/\d{2,4}/` | `"12"`, `"1234"`                       |

---

## 🔹 4. Conjuntos y Agrupaciones

| Patrón   | Descripción                             | Ejemplo    | Coincide con        |
| -------- | --------------------------------------- | ---------- | ------------------- |
| `[abc]`  | Cualquier letra dentro de los corchetes | `/[abc]/`  | `"a"`, `"b"`, `"c"` |
| `[^abc]` | Cualquier letra excepto `a`, `b` o `c`  | `/[^abc]/` | `"d"`, `"e"`        |
| `[a-z]`  | Cualquier letra minúscula               | `/[a-z]/`  | `"b"`, `"x"`        |
| `[A-Z]`  | Cualquier letra mayúscula               | `/[A-Z]/`  | `"F"`, `"X"`        |
| `[0-9]`  | Cualquier número                        | `/[0-9]/`  | `"1"`, `"8"`        |

---

## 🔹 5. Anclas y Fronteras

| Símbolo | Descripción       | Ejemplo      | Coincide con                            |
| ------- | ----------------- | ------------ | --------------------------------------- |
| `^`     | Inicio de línea   | `/^Hola/`    | `"Hola mundo"` (pero no `"mundo Hola"`) |
| `$`     | Fin de línea      | `/mundo$/`   | `"Hola mundo"` (pero no `"mundo Hola"`) |
| `\b`    | Límite de palabra | `/\bJava\b/` | `"Java"` pero no `"JavaScript"`         |

---

## 🔹 6. Modificadores (Flags)

| Modificador | Descripción                    | Ejemplo                                             |
| ----------- | ------------------------------ | --------------------------------------------------- |
| `g`         | Búsqueda global                | `/abc/g` (busca todas las coincidencias)            |
| `i`         | Ignora mayúsculas y minúsculas | `/hola/i` (coincide con `"Hola"` o `"hola"`)        |
| `m`         | Búsqueda multilínea            | `/^hola/m` (busca `"hola"` al inicio de cada línea) |

---

## 🔹 7. Uso de `replace()`, `match()`, `test()`

```js
// 🔹 Reemplazar todas las vocales por "*"
const texto = "JavaScript es asombroso";
const resultado = texto.replace(/[aeiou]/gi, "*");
console.log(resultado); // "J*v*Scr*pt *s *s*mbr*s*"

// 🔹 Buscar todas las palabras que terminan en "ción"
const oracion = "Educación, programación y dedicación son importantes";
const coincidencias = oracion.match(/\b\w+ción\b/g);
console.log(coincidencias); // ["Educación", "programación", "dedicación"]

// 🔹 Verificar si una cadena contiene un número
const verificar = /\d/.test("Mi clave es 12345");
console.log(verificar); // true
```

---

## 🎯 **Ejercicios Prácticos**

1. **Reemplazar espacios por guiones** en un texto.
2. **Validar un email** (Ejemplo: `"usuario@example.com"`).
3. **Extraer números de una cadena**, por ejemplo: `"La temperatura es de 25°C"` debería devolver `25`.
4. **Comprobar si una contraseña es válida**, debe contener al menos **8 caracteres, una letra mayúscula y un número**.
5. **Buscar todas las palabras que empiezan con "J"** en `"JavaScript es genial, pero también me gusta Java"`.

---

📌 **Practica y experimenta con `Regex` en:**  
🔗 [https://regex101.com/](https://regex101.com/)

🚀 ¡Domina Regex y lleva tu código a otro nivel! 🔥
