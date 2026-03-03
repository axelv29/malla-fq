# AGENTS.md - Guía para Agentes de Código

## Proyecto: Malla Curricular Interactiva - Químico Farmacéutico UDELAR

Este repositorio contiene una aplicación web estática que muestra la malla curricular interactiva
para la carrera de Químico Farmacéutico de la Universidad de la República (UDELAR), Uruguay.

## Estructura del Proyecto

```
/home/axelv/malla-fq/
├── index.html       # Página principal (genera la UI dinámicamente)
├── materias.js      # DATOS: configuración, áreas, materias, optativas/electivas
├── README.md        # Descripción breve del proyecto
├── Electivas_QF_36.pdf   # Catálogo de electivas
└── Optativas_QF_27.pdf   # Catálogo de optativas
```

## Arquitectura

- **index.html**: Aplicación SPA vanilla que renderiza la tabla periódica de materias.
  Lee los datos de `materias.js` y genera toda la UI dinámicamente.
- **materias.js**: El ÚNICO archivo de datos. Contiene:
  - `CONFIG`: Configuración general (título, créditos totales)
  - `AM`: Áreas de conocimiento con créditos mínimos y colores
  - `OPT`: Optativas y electivas
  - `materias`: Array de objetos con todas las materias

## Comandos de Desarrollo

### Servidor de desarrollo
```bash
# Simple HTTP server con Python
python3 -m http.server 8000

# O con PHP
php -S localhost:8000
```

### Preview
Abra `index.html` directamente en un navegador o use la extensión "Live Server" de VS Code.

### No hay tests
Este proyecto no tiene suite de tests. Para verificar cambios, abra la página en un navegador
y verifique manualmente que la visualización sea correcta.

### No hay linting/build
Proyecto estático simple sin herramientas de build.

## Estilo de Código

### JavaScript (materias.js)

#### Convenciones de nomenclatura
- **Constantes globales**: `UPPER_SNAKE_CASE` (e.g., `CONFIG`, `AM`, `OPT`)
- **Variables/constantes locales**: `camelCase`
- **Arrays de materias**: Nombre en plural descriptivo (`materias`)
- **IDs de materias**: `UPPER_SNAKE_CASE` (e.g., `MAT_A`, `QUI_GEN_I`)

#### Estructura de datos de materias
Cada objeto en `materias` debe tener:
```javascript
{
  id: "CODIGO_UNICO",    // String - ID único en UPPER_SNAKE
  cod: "123A",           // String - Código Bedelías
  s: 1,                  // Number - Semestre (1-10)
  h: null | 1 | 2,       // Number | null - Hemisemestre (1=primer, 2=segundo)
  n: "Nombre Completo", // String - Nombre oficial
  ab: "Nombre Abrev.",  // String - Abreviatura para UI
  a: "AREA",            // String - Clave del área (CFM, CQ, CBB, CFA, PRO)
  cr: 10,               // Number - Créditos
  pre: [],              // Array - Previas necesarias (aprobadas o exoneradas)
  prow: 1,              // Number - Fila en tabla periódica
  pcol: 1,              // Number - Columna en tabla periódica
  notas: ""             // String (opcional) - Notas adicionales
}
```

#### Áreas válidas
- `CFM`: Cs. Físico-Matemáticas
- `CQ`: Ciencias Químicas
- `CBB`: Cs. Biológicas y Biomédicas
- `CFA`: Cs. Farmacéuticas
- `PRO`: Practicantado

#### Reglas de orden
1. Las materias deben estar ordenadas por área, luego por semestre
2. Usar comentarios separadores: `// ─── AREA ────`
3. Mantener consistencia en el formato de cada línea

#### Comments
- Usar comentarios descriptivos para separar secciones
- NO agregar comentarios inline a cada materia (el código debe ser autoexplicativo)
- Encabezado del archivo con descripción general

### HTML (index.html)

- NO modificar a menos que sea necesario para cambiar la UI
- Si hay cambios, mantener el estilo existente
- El HTML es mínimo - la lógica está en JavaScript inline

### Generales
- **Encoding**: UTF-8
- **Line endings**: LF (Unix)
- **Sin tabs**: Usar espacios (2 espacios)
- **Sin prettier/eslint**: Formato manual consistente con el archivo existente

## Workflow para agregar/editar materias

1. **Editar únicamente `materias.js`**
2. Agregar nueva materia en la posición correcta (por área y semestre)
3. Asegurar que `id` sea único
4. Verificar `pre` contenga IDs válidos de materias existentes
5. Calcular `prow` y `pcol` para la posición en la tabla periódica
6. Probar en navegador

## Errores comunes a evitar

- No crear IDs duplicados
- No referenciar IDs de materias que no existen en `pre`
- No olvidar materias al calcular créditos totales
- Mantener consistencia en colores de áreas (definidos en `AM`)
- Las previas deben ser lógicas (no puede ser previa de sí misma)

## Referencias

- Plan de Estudios 2015 - UDELAR Facultad de Química
- Catálogos de optativas y electivas en PDF
