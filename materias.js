/**
 * Malla curricular · Químico Farmacéutico · UDELAR · PE2015
 * ─────────────────────────────────────────────────────────
 * Este es el ÚNICO archivo que necesitás editar para actualizar la malla.
 * Contiene: áreas, materias, optativas/electivas y configuración general.
 */

/* ══════════════════════════════════════════════════════════════════
   CONFIGURACIÓN GENERAL
══════════════════════════════════════════════════════════════════ */
const CONFIG = {
  titulo:    "Malla Curricular · Químico Farmacéutico",
  subtitulo: "Facultad de Química · UDELAR · Plan de Estudios 2015",
  icono:     "⚗️",
  cMinTotal: 450,
};

/* ══════════════════════════════════════════════════════════════════
   ÁREAS
   n=nombre, cMin=créditos mínimos, c/p/t/b=colores
══════════════════════════════════════════════════════════════════ */
const AM = {
  CFM: { n: "Cs. Físico-Matemáticas",      cMin: 42,  c: "#2563EB", p: "#EFF6FF", t: "#1E3A8A", b: "#BFDBFE" },
  CQ:  { n: "Ciencias Químicas",            cMin: 108, c: "#16A34A", p: "#F0FDF4", t: "#14532D", b: "#BBF7D0" },
  CBB: { n: "Cs. Biológicas y Biomédicas",  cMin: 69,  c: "#EA580C", p: "#FFF7ED", t: "#7C2D12", b: "#FED7AA" },
  CFA: { n: "Cs. Farmacéuticas",            cMin: 105, c: "#7C3AED", p: "#F5F3FF", t: "#4C1D95", b: "#DDD6FE" },
  PRO: { n: "Practicantado",                cMin: 55,  c: "#374151", p: "#F9FAFB", t: "#1F2937", b: "#E5E7EB" },
};

/* ══════════════════════════════════════════════════════════════════
   OPTATIVAS Y ELECTIVAS
   Estados posibles: pendiente / exonerada
   El usuario ingresa los créditos acumulados manualmente.
══════════════════════════════════════════════════════════════════ */
const OPT = {
  n:             "Optativas y Electivas",
  cMin:          71,
  c:             "#DB2777",
  p:             "#FDF2F8",
  t:             "#831843",
  b:             "#FBCFE8",
  actualizacion: "Optativas actualizadas al 27/11/2025 · Electivas actualizadas al 22/12/2025",
  catalogos: [
    { label: "PDF Optativas", meta: "Catálogo Optativas QF PE2015", href: "Optativas_QF_27.pdf", icono: "📄" },
    { label: "PDF Electivas", meta: "Catálogo Electivas QF PE2015", href: "Electivas_QF_36.pdf", icono: "📄" },
  ],
};

/* ══════════════════════════════════════════════════════════════════
    MATERIAS
    id=clave única · cod=código Bedelías · s=semestre · h=hemisemestre
    n=nombre · ab=abreviado · a=área · cr=créditos
    pre=previas necesarias (aprobadas o exoneradas)
    prow/pcol=posición tabla periódica · notas=texto modal
    programa=link al PDF del programa
══════════════════════════════════════════════════════════════════ */
const materias = [

  // ─── CFM (col 1) ────────────────────────────────────────────────
  { id:"MAT_A",   cod:"01A",  s:1, h:null, n:"Matemática A",              ab:"Mat. A",       a:"CFM", cr:10, pre:[],                                                   prow:6, pcol:1, programa:"Archivos/Materias/Archivos/Materias/Matemática A-Análisis I (01A).pdf" },
  { id:"MAT_B",   cod:"02B",  s:2, h:1,    n:"Matemática B",              ab:"Mat. B",       a:"CFM", cr:6,  pre:["MAT_A"],                                        prow:5, pcol:1, programa:"Archivos/Materias/Archivos/Materias/Archivos/Materias/MATEMÁTICA B. Álgebra Lineal y Funciones de Varias Variables.pdf" },
  { id:"MAT_C",   cod:"02C",  s:2, h:null, n:"Matemática C",              ab:"Mat. C",       a:"CFM", cr:8,  pre:["MAT_A"],                                        prow:4, pcol:1, programa:"Archivos/Materias/Matemática C. Estadística.pdf" } ,
  { id:"FIS101",  cod:"205", s:2, h:null, n:"Física 101",                ab:"Física 101",   a:"CFM", cr:7,  pre:["MAT_A"],                                        prow:3, pcol:1, programa:"Archivos/Materias/205A Física 101 (001).pdf" },
  { id:"FIS102",  cod:"304", s:3, h:null, n:"Física 102",                ab:"Física 102",   a:"CFM", cr:7,  pre:["FIS101"],                                       prow:2, pcol:1, programa:"Archivos/Materias/Física 102 (304).pdf" }, 
  { id:"FIS003L", cod:"404",  s:4, h:1,    n:"Física 003 (L)",            ab:"Física 003L",  a:"CFM", cr:4,  pre:["FIS102"],                                       prow:1, pcol:1, notas:"Lab. 1er hemi", programa:"Archivos/Materias/Física 003 (404).pdf" },

  // ─── CQ (cols 2-4) ──────────────────────────────────────────────
  { id:"QUI_GEN_I",  cod:"102",  s:1, h:null, n:"Química General I",       ab:"Q. Gral. I",   a:"CQ", cr:7,  pre:[],                                                   prow:6, pcol:2, programa:"Archivos/Materias/Programa_-_Quimica_general_i_-_102.pdf" },
  { id:"RIESGOS",    cod:"104A", s:1, h:2,    n:"Prev. Riesgos en Lab.",   ab:"Prev. Riesgos",a:"CQ", cr:4,  pre:[],                                                   prow:6, pcol:3, notas:"2do hemisemestre", programa:"Archivos/Materias/Prevención de riesgos en el laboratorio V06.pdf" },
  { id:"QUI_GEN_II", cod:"202",  s:2, h:null, n:"Química General II",      ab:"Q. Gral. II",  a:"CQ", cr:8,  pre:["QUI_GEN_I","RIESGOS"],                            prow:6, pcol:4, programa:"Archivos/Materias/Programa_-_Quimica_general_ii_-_202.pdf" },
  { id:"QA1",        cod:"302",  s:3, h:null, n:"Química Analítica I",     ab:"Q. Analítica I",a:"CQ",cr:10, pre:["QUI_GEN_II"],                                   prow:5, pcol:2, programa:"Archivos/Materias/302 – QUÍMICA ANALÍTICA I.pdf" },
  { id:"QI_T",       cod:"303A", s:3, h:null, n:"Química Inorgánica (T)",  ab:"Q. Inorg. T",  a:"CQ", cr:6,  pre:["QUI_GEN_II"],                                   prow:5, pcol:3, notas:"Teórico", programa:"Archivos/Materias/Química Inorgánica (Teórico).pdf" },
  { id:"QI_L",       cod:"303B", s:3, h:null, n:"Lab. Q. Inorgánica",      ab:"Q. Inorg. L",  a:"CQ", cr:5,  pre:["QUI_GEN_II"],                                   prow:5, pcol:4, notas:"Lab.", programa:"Archivos/Materias/303B Programa QI Lab.pdf" },
  { id:"QO101",      cod:"301",  s:3, h:null, n:"Química Orgánica 101",    ab:"Org. 101",     a:"CQ", cr:11, pre:["QUI_GEN_II"],                                   prow:4, pcol:2, programa:"Archivos/Materias/Química orgánica 101 - Actualizado19 09 25 (Cambian docentes responsables).pdf" },
  { id:"QO102",      cod:"401",  s:4, h:null, n:"Química Orgánica 102",    ab:"Org. 102",     a:"CQ", cr:6,  pre:["QO101"],                                        prow:4, pcol:3, programa:"Archivos/Materias/Química Orgánica 102 (Versión nueva 2024).pdf" },
  { id:"QO103L",     cod:"501",  s:5, h:null, n:"Q. Orgánica 103 (L)",     ab:"Org. 103L",    a:"CQ", cr:5,  pre:["QO101","QA1"],                                  prow:4, pcol:4, notas:"Lab.", programa:"Archivos/Materias/Programa QO103 bedelía 2025.pdf" },
  { id:"QA2",        cod:"402A", s:4, h:null, n:"Química Analítica II",    ab:"Q. Analítica II",a:"CQ",cr:7, pre:["QA1"],                                         prow:3, pcol:2, programa:"Archivos/Materias/402A QUÍMICA ANALÍTICA II 2024.pdf" },
  { id:"FQ102",      cod:"508A", s:4, h:null, n:"Fisicoquímica 102",       ab:"FQ 102",       a:"CQ", cr:13, pre:["QUI_GEN_II","MAT_B","QA1"],                            prow:3, pcol:3, programa:"Archivos/Materias/Fisicoquímica 102 - 2024.pdf" },
  { id:"QA3",        cod:"503",  s:5, h:null, n:"Química Analítica III",   ab:"Q. Analítica III",a:"CQ",cr:10,pre:["QA2"],                                         prow:3, pcol:4, notas:"Análisis Instr.", programa:"Archivos/Materias/Química Analítica III-503  (Actualizado 06 12 22).pdf" },
  { id:"QO104",      cod:"502X", s:5, h:1,    n:"Química Orgánica 104",    ab:"Org. 104",     a:"CQ", cr:4,  pre:["QO101","QO102"],                                  prow:2, pcol:2, notas:"1er hemi", programa:"Archivos/Materias/Qca Orgánica 104 (502X).pdf" },
  { id:"FQ103",      cod:"520A", s:5, h:null, n:"Fisicoquímica 103",       ab:"FQ 103",       a:"CQ", cr:12, pre:["FQ102"],                                  prow:2, pcol:3, programa:"Archivos/Materias/Programa FQ 103 520A(2).pdf" },

  // ─── CBB (cols 5-8) ─────────────────────────────────────────────
  { id:"BIO_I",       cod:"103A", s:1, h:null, n:"Introd. Cs. Biológicas I",  ab:"ICB I",       a:"CBB", cr:5,  pre:[],                                                prow:6, pcol:5, programa:"Archivos/Materias/ICB I (103B) 5 cr.pdf" },
  { id:"BIO_II",      cod:"203A", s:2, h:null, n:"Introd. Cs. Biológicas II", ab:"ICB II",      a:"CBB", cr:5,  pre:["BIO_I","RIESGOS"],                               prow:6, pcol:6, programa:"Archivos/Materias/Introducción a las Ciencias Biológicas II (203A).pdf" },
  { id:"FISIO",       cod:"408A", s:3, h:null, n:"Fisiología",               ab:"Fisiología",  a:"CBB", cr:7,  pre:["BIO_II"],                                     prow:5, pcol:5, programa:"Archivos/Materias/Fisiología (408A).pdf" },
  { id:"FISIOPAT",    cod:"415C", s:4, h:null, n:"Fisiopatología",            ab:"Fisiopatol.", a:"CBB", cr:7,  pre:["FISIO"],                                      prow:5, pcol:6, programa:"Archivos/Materias/Programa de Fisiopatología.pdf" },
  { id:"BIOQ",        cod:"190",  s:5, h:null, n:"Bioquímica Op. II",         ab:"Bioquímica",  a:"CBB", cr:10, pre:["BIO_I","FQ102","QO102","QA2"],                prow:6, pcol:7, notas:"Desde 2026", programa:"Archivos/Materias/Bioquímica Op. II.pdf" },
  { id:"MICROBIO_T",  cod:"533T", s:6, h:null, n:"Microbiología Gral. (T)",   ab:"Microbio. T", a:"CBB", cr:6,  pre:["BIO_I","BIOQ"],                             prow:5, pcol:7, notas:"Teórico", programa:"Archivos/Materias/Microbiología General 533T.pdf" },
  { id:"MICROBIO_L",  cod:"533L", s:6, h:null, n:"Lab. Análisis Microbiol.",  ab:"Microbio. L", a:"CBB", cr:6,  pre:["BIO_I","BIOQ"],                                       prow:4, pcol:5, notas:"Lab.", programa:"Archivos/Materias/Laboratorio de Análisis Microbiológico 533L.pdf" },
  { id:"INMUNO1",     cod:"506X", s:6, h:2,    n:"Inmunología I",             ab:"Inmuno. I",   a:"CBB", cr:5,  pre:["BIO_II","BIOQ"],                             prow:3, pcol:5, notas:"2do hemi", programa:"Archivos/Materias/Inmunología I (506X)  - Actualizado 2025.pdf" },
  { id:"TALLER_INTEG",cod:"615",  s:6, h:1,    n:"Taller Integ. Cs. Bio.",    ab:"Taller Integ.",a:"CBB",cr:2, pre:["FISIOPAT"],                                  prow:4, pcol:7, notas:"1er hemi", programa:"Archivos/Materias/Taller de integración de ciencias biológicas y biomédicas - 615.pdf" },
  { id:"INMUNO2",     cod:"534X", s:7, h:null, n:"Inmunología II",            ab:"Inmuno. II",  a:"CBB", cr:7,  pre:["INMUNO1"],                                   prow:3, pcol:6, programa:"Archivos/Materias/230201 Programa_INMUNOLOGÍA II 534.pdf" },
  { id:"BROMATO",     cod:"704",  s:7, h:2,    n:"Bromatología y Nutrición",  ab:"Bromatología",a:"CBB", cr:4,  pre:["MICROBIO_T"],                                 prow:4, pcol:6, notas:"2do hemi", programa:"Archivos/Materias/Bromatología y Nutrición.pdf" },

  // ─── PRO ────────────────────────────────────────────────────────
  { id:"PRACTICA", cod:"965X", s:10, h:null, n:"Practicantado", ab:"Practicantado", a:"PRO", cr:55, pre:[], prow:3, pcol:8, notas:"Requiere todas las obligatorias aprobadas.", programa:"" },

  // ─── CFA (cols 7-10) ────────────────────────────────────────────
  { id:"INTRO_MED",      cod:"416X", s:4, h:1,    n:"Introd. al Medicamento",        ab:"Intro. Med.",  a:"CFA", cr:2,  pre:[],                                                          prow:5, pcol:8,  notas:"1er hemi. Asistencia obligatoria.", programa:"Archivos/Materias/Programa Introducción al Medicamento (plan 2015).pdf" },
  { id:"FARMACOGNOSIA",  cod:"909",  s:6, h:null, n:"Farmacognosia",                 ab:"Farmacogn.",   a:"CFA", cr:9,  pre:["QO103L","QO104","QA3"],                                    prow:6, pcol:9, programa:"Archivos/Materias/Farmacognosia (909).pdf" },
  { id:"BOTANICA",       cod:"908A", s:6, h:1,    n:"Botánica",                      ab:"Botánica",     a:"CFA", cr:4,  pre:["BIO_II","QO103L"],                                  prow:6, pcol:10, notas:"1er hemi", programa:"Archivos/Materias/Botanica (908A).pdf" },
  { id:"FARMACOKINETICA",cod:"535X", s:6, h:null, n:"Farmacocinética y Biofarmacia", ab:"Farmacocin.",  a:"CFA", cr:8,  pre:["FISIO","MAT_B","MAT_C"],                                  prow:5, pcol:9, programa:"Archivos/Materias/535 X - FARMACOCINÉTICA Y BIOFARMACIA (Plan 2015).pdf" },
  { id:"UC_CALIDAD",     cod:"157",  s:6, h:2,    n:"Sistemas de Gestión",           ab:"Sist. Gestión",a:"CFA", cr:4,  pre:[],                                                          prow:5, pcol:10, notas:"2do hemi. Desde 2025.", programa:"Archivos/Materias/Sistemas de Gestión () 2025.pdf" },
  { id:"QF101",          cod:"700",  s:7, h:null, n:"Q. Farmacéutica 101 (T)",       ab:"Q. Farm. 101", a:"CFA", cr:8,  pre:["QO102","QO103L","QO104","QA3","FQ102","FQ103","FARMACOGNOSIA","BIOQ"],prow:4, pcol:9,  notas:"Teórico", programa:"Archivos/Materias/Programa_-_Quimica_farmaceutica_101_-_700.pdf" },
  { id:"QF102",          cod:"701X", s:7, h:null, n:"Q. Farmacéutica 102 (L)",       ab:"Q. Farm. 102", a:"CFA", cr:6,  pre:["QO102","QO103L","QO104","QA1","QA2","FQ103","FARMACOGNOSIA","BIOQ"],prow:4, pcol:10, notas:"Lab.", programa:"Archivos/Materias/Química Farmacéutica 102 (701X).pdf" },
  { id:"FTEC1",          cod:"702X", s:7, h:null, n:"Farmacotecnia I",               ab:"Farmacotec. I",a:"CFA", cr:10, pre:["FARMACOKINETICA","FARMACOGNOSIA","BOTANICA","MICROBIO_T","QA3","QI_T","FQ102","INTRO_MED"], prow:4, pcol:8, programa:"Archivos/Materias/Farmacotecnia I (702X)).pdf" },
  { id:"FARMACO",        cod:"703X", s:7, h:null, n:"Farmacología",                  ab:"Farmacología", a:"CFA", cr:10, pre:["BIOQ","FARMACOKINETICA","TALLER_INTEG"],        prow:6, pcol:8, programa:"Archivos/Materias/Farmacología (703X).pdf" },
  { id:"FARMACOTERAPIA", cod:"803X", s:8, h:null, n:"Farmacoterapia I",              ab:"Farmacoterap.",a:"CFA", cr:8,  pre:["FISIOPAT","FARMACO"],                                     prow:3, pcol:9, programa:"Archivos/Materias/Farmacoterapia I (803X) - a partir de 2025.pdf" },
  { id:"FTEC2",          cod:"802X", s:8, h:null, n:"Farmacotecnia II",              ab:"Farmacotec. II",a:"CFA",cr:10, pre:["FTEC1","QF101","QF102"],                               prow:3, pcol:10, programa:"Archivos/Materias/Farmacotecnia II (802X).pdf" },
  { id:"CONTROL",        cod:"804X", s:8, h:null, n:"Control Calidad Medic. I",      ab:"Control Cal.", a:"CFA", cr:8, pre:["MICROBIO_T","QF101","QF102","FTEC1"],                       prow:2, pcol:9, programa:"Archivos/Materias/Programa_-_Control_de_calidad_de_medicamentos_i_-_804a.pdf" },
  { id:"TOXICO",         cod:"805",  s:8, h:1,    n:"Toxicología Fundamental",       ab:"Toxicología",  a:"CFA", cr:4,  pre:["QA3","BIOQ"],                                            prow:2, pcol:10, notas:"1er hemi", programa:"Archivos/Materias/Programa_-_Toxicologia_fundamental_-_805a.pdf" },
  { id:"LEGISLACION",    cod:"809",  s:9, h:null, n:"Legislación y Deontología",     ab:"Legislación",  a:"CFA", cr:6,  pre:["FTEC2","FARMACOTERAPIA"],                                 prow:1, pcol:9, programa:"Archivos/Materias/Programa_-_Legislacion_y_deontologia_-_809.pdf" },
  { id:"GESTION",        cod:"410",  s:9, h:2,    n:"Gestión de Empresas",           ab:"Gestión Emp.", a:"CFA", cr:4,  pre:[],                                                          prow:1, pcol:10, notas:"2do hemi. Asistencia controlada.", programa:"Archivos/Materias/Programa Gestión de Empresas (410).pdf" },
];
