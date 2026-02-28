/**
 * Malla curricular · Químico Farmacéutico · UDELAR · PE2015
 * Datos de áreas y materias. Editar este archivo para actualizar códigos, créditos, previas o posición en la tabla.
 */

/* ══════════════════════════════════════════════════════════════════
   ÁREAS (grupos de la malla)
   n = nombre, cMin = créditos mínimos para el área, c/p/t/b = colores
══════════════════════════════════════════════════════════════════ */
const AM = {
  CFM: { n: "Cs. Físico-Matemáticas",   cMin: 42,  c: "#2563EB", p: "#EFF6FF", t: "#1E3A8A", b: "#BFDBFE" },
  CQ:  { n: "Ciencias Químicas",         cMin: 108, c: "#16A34A", p: "#F0FDF4", t: "#14532D", b: "#BBF7D0" },
  CBB: { n: "Cs. Biológicas y Biomédicas", cMin: 69, c: "#EA580C", p: "#FFF7ED", t: "#7C2D12", b: "#FED7AA" },
  CFA: { n: "Cs. Farmacéuticas",         cMin: 105, c: "#7C3AED", p: "#F5F3FF", t: "#4C1D95", b: "#DDD6FE" },
  PRO: { n: "Practicantado",             cMin: 55,  c: "#374151", p: "#F9FAFB", t: "#1F2937", b: "#E5E7EB" },
};

/** Créditos totales del plan */
const CMIN = 450;

/* ══════════════════════════════════════════════════════════════════
   MATERIAS
   id: clave única
   cod: código oficial
   s: semestre (1-10)
   h: hemisemestre (1, 2 o null)
   n: nombre completo
   ab: nombre abreviado (tarjeta)
   a: área (CFM, CQ, CBB, CFA, PRO)
   cr: créditos
   pre_exo: previas que deben estar EXONERADAS
   pre_apr: previas que alcanza con APROBADAS
   prow, pcol: fila y columna en la vista tabla periódica (10 columnas)
   notas: texto opcional para el modal

   Tabla periódica: col 1=CFM; 2-4=CQ; 5-8=CBB+PRO; 9-10=CFA. Vista volteada verticalmente.
══════════════════════════════════════════════════════════════════ */
const materias = [

  // ─── CFM (col 1) ───
  { id: "MAT_A",    cod: "01A",  s: 1, h: null, n: "Matemática A",               ab: "Mat. A",       a: "CFM", cr: 10, pre_exo: [],                    pre_apr: [], prow: 6, pcol: 1 },
  { id: "MAT_B",    cod: "02B",  s: 2, h: 1,    n: "Matemática B",               ab: "Mat. B",       a: "CFM", cr: 6,  pre_exo: [],                    pre_apr: ["MAT_A"], prow: 5, pcol: 1, },
  { id: "MAT_C",    cod: "02C",  s: 2, h: null, n: "Matemática C",               ab: "Mat. C",       a: "CFM", cr: 8,  pre_exo: ["MAT_A"],             pre_apr: [], prow: 4, pcol: 1, notas: "Estadística" },
  { id: "FIS101",   cod: "205Q", s: 2, h: null, n: "Física 101",                 ab: "Física 101",   a: "CFM", cr: 7,  pre_exo: ["MAT_A"],             pre_apr: [], prow: 3, pcol: 1 },
  { id: "FIS102",   cod: "304Q", s: 3, h: null, n: "Física 102",                 ab: "Física 102",   a: "CFM", cr: 7,  pre_exo: ["FIS101"],            pre_apr: [], prow: 2, pcol: 1, notas: "Electromagnetismo" },
  { id: "FIS003L",  cod: "404",  s: 4, h: 1,    n: "Física 003 (L)",             ab: "Física 003L",  a: "CFM", cr: 4,  pre_exo: ["FIS102"],            pre_apr: [], prow: 1, pcol: 1, notas: "Lab. 1er hemi" },

  // ─── CQ (cols 2-4) ───
  { id: "QUI_GEN_I",  cod: "102",  s: 1, h: null, n: "Química General I",          ab: "Q. Gral. I",   a: "CQ", cr: 7,  pre_exo: [],                    pre_apr: [], prow: 6, pcol: 2 },
  { id: "RIESGOS",    cod: "104A", s: 1, h: 2,    n: "Prev. Riesgos en Lab.",      ab: "Prev. Riesgos", a: "CQ", cr: 4,  pre_exo: [],                    pre_apr: [], prow: 6, pcol: 3, notas: "2do hemisemestre" },
  { id: "QUI_GEN_II", cod: "202",  s: 2, h: null, n: "Química General II",          ab: "Q. Gral. II",  a: "CQ", cr: 8,  pre_exo: ["QUI_GEN_I", "RIESGOS"], pre_apr: [], prow: 6, pcol: 4 },
  { id: "QA1",        cod: "302",  s: 3, h: null, n: "Química Analítica I",         ab: "Q. Analítica I",   a: "CQ", cr: 10, pre_exo: ["QUI_GEN_II"],        pre_apr: [], prow: 5, pcol: 2 },
  { id: "QI_T",       cod: "303A", s: 3, h: null, n: "Química Inorgánica (T)",      ab: "Q. Inorg. T",  a: "CQ", cr: 6,  pre_exo: ["QUI_GEN_II"],        pre_apr: [], prow: 5, pcol: 3, notas: "Teórico" },
  { id: "QI_L",       cod: "303B", s: 3, h: null, n: "Lab. Q. Inorgánica",          ab: "Q. Inorg. L",  a: "CQ", cr: 5,  pre_exo: ["QUI_GEN_II"],        pre_apr: [], prow: 5, pcol: 4, notas: "Lab." },
  { id: "QO101",      cod: "301",  s: 3, h: null, n: "Química Orgánica 101",        ab: "Org. 101",     a: "CQ", cr: 11, pre_exo: ["QUI_GEN_II"],        pre_apr: [], prow: 4, pcol: 2 },
  { id: "QO102",      cod: "401",  s: 4, h: null, n: "Química Orgánica 102",        ab: "Org. 102",     a: "CQ", cr: 6,  pre_exo: ["QO101"],             pre_apr: [], prow: 4, pcol: 3 },
  { id: "QO103L",     cod: "501",  s: 5, h: null, n: "Q. Orgánica 103 (L)",         ab: "Org. 103L",    a: "CQ", cr: 5,  pre_exo: ["QO101", "QA1"],      pre_apr: [], prow: 4, pcol: 4, notas: "Lab." },
  { id: "QA2",        cod: "402A", s: 4, h: null, n: "Química Analítica II",        ab: "Q. Analítica II",  a: "CQ", cr: 7,  pre_exo: ["QA1"],               pre_apr: [], prow: 3, pcol: 2 },
  { id: "FQ102",      cod: "508A", s: 4, h: null, n: "Fisicoquímica 102",           ab: "FQ 102",       a: "CQ", cr: 13, pre_exo: ["MAT_B", "QA1"],     pre_apr: [], prow: 3, pcol: 3 },
  { id: "QA3",        cod: "503",  s: 5, h: null, n: "Química Analítica III",       ab: "Q. Analítica III", a: "CQ", cr: 10, pre_exo: ["QA2"],               pre_apr: [], prow: 3, pcol: 4, notas: "Análisis Instr." },
  { id: "QO104",      cod: "502X", s: 5, h: 1,    n: "Química Orgánica 104",        ab: "Org. 104",     a: "CQ", cr: 4,  pre_exo: ["QO102"],             pre_apr: [], prow: 2, pcol: 2, notas: "1er hemi" },
  { id: "FQ103",      cod: "520A", s: 5, h: null, n: "Fisicoquímica 103",           ab: "FQ 103",       a: "CQ", cr: 12, pre_exo: ["FQ102"],            pre_apr: [], prow: 2, pcol: 3 },

  // ─── CBB (cols 5-8, mezclado con PRO) ───
  { id: "BIO_I",        cod: "103B", s: 1, h: null, n: "Introd. Cs. Biológicas I",  ab: "ICB I",        a: "CBB", cr: 5,  pre_exo: [],                    pre_apr: [], prow: 6, pcol: 5 },
  { id: "BIO_II",      cod: "203A", s: 2, h: null, n: "Introd. Cs. Biológicas II", ab: "ICB II",       a: "CBB", cr: 5,  pre_exo: ["BIO_I", "RIESGOS"],  pre_apr: [], prow: 6, pcol: 6 },
  { id: "FISIO",       cod: "408A", s: 3, h: null, n: "Fisiología",                ab: "Fisiología",   a: "CBB", cr: 7,  pre_exo: ["BIO_II"],            pre_apr: [], prow: 5, pcol: 5 },
  { id: "FISIOPAT",    cod: "415C", s: 4, h: null, n: "Fisiopatología",            ab: "Fisiopatol.",  a: "CBB", cr: 7,  pre_exo: ["FISIO"],             pre_apr: [], prow: 5, pcol: 6 },
  { id: "BIOQ",        cod: "190",  s: 5, h: null, n: "Bioquímica Op. II",         ab: "Bioquímica",   a: "CBB", cr: 10, pre_exo: ["BIO_I", "FQ102", "QO102", "QA2"], pre_apr: [], prow: 6, pcol: 7, notas: "Desde 2026" },
  { id: "MICROBIO_T",  cod: "533T", s: 6, h: null, n: "Microbiología Gral. (T)",    ab: "Microbio. T",  a: "CBB", cr: 6,  pre_exo: ["BIO_II", "BIOQ"],    pre_apr: [], prow: 5, pcol: 7, notas: "Teórico" },
  { id: "MICROBIO_L",  cod: "533L", s: 6, h: null, n: "Lab. Análisis Microbiol.",  ab: "Microbio. L",  a: "CBB", cr: 6,  pre_exo: ["BIO_I", "BIOQ"],     pre_apr: [], prow: 4, pcol: 5, notas: "Lab." },
  { id: "INMUNO1",     cod: "506X", s: 6, h: 2,    n: "Inmunología I",            ab: "Inmuno. I",    a: "CBB", cr: 5,  pre_exo: ["BIO_II", "BIOQ"],    pre_apr: [], prow: 3, pcol: 5, notas: "2do hemi" },
  { id: "TALLER_INTEG", cod: "615",  s: 6, h: 1,    n: "Taller Integ. Cs. Bio.",   ab: "Taller Integ.", a: "CBB", cr: 2,  pre_exo: ["FISIO", "FISIOPAT"], pre_apr: [], prow: 4, pcol: 7, notas: "1er hemi" },
  { id: "INMUNO2",     cod: "534X", s: 7, h: null, n: "Inmunología II",           ab: "Inmuno. II",   a: "CBB", cr: 7,  pre_exo: ["INMUNO1"],           pre_apr: [], prow: 3, pcol: 6 },
  { id: "BROMATO",     cod: "704",  s: 7, h: 2,    n: "Bromatología y Nutrición",  ab: "Bromatología", a: "CBB", cr: 4,  pre_exo: ["BIOQ", "MICROBIO_T"], pre_apr: [], prow: 4, pcol: 6, notas: "2do hemi" },

  // ─── PRO ───
  { id: "PRACTICA", cod: "965X", s: 10, h: null, n: "Practicantado", ab: "Practicantado", a: "PRO", cr: 55, pre_exo: [], pre_apr: [], prow: 3, pcol: 8, notas: "Requiere todas las obligatorias aprobadas." },

  // ─── CFA (cols 7, 8, 9, 10) ───
  { id: "INTRO_MED",       cod: "416X", s: 4, h: 1,    n: "Introd. al Medicamento",        ab: "Intro. Med.",  a: "CFA", cr: 2,  pre_exo: [], pre_apr: [], prow: 5, pcol: 8, notas: "1er hemi. Asistencia obligatoria." },
  { id: "FARMACOGNOSIA",   cod: "909",  s: 6, h: null, n: "Farmacognosia",                 ab: "Farmacogn.",   a: "CFA", cr: 9,  pre_exo: ["QO103L", "QO104", "QA3"], pre_apr: [], prow: 6, pcol: 9 },
  { id: "BOTANICA",        cod: "908A", s: 6, h: 1,    n: "Botánica",                      ab: "Botánica",     a: "CFA", cr: 4,  pre_exo: ["BIO_II", "QO103L", "QO104", "QA3"], pre_apr: [], prow: 6, pcol: 10, notas: "1er hemi" },
  { id: "FARMACOKINETICA", cod: "535X", s: 6, h: null, n: "Farmacocinética y Biofarmacia", ab: "Farmacocin.",   a: "CFA", cr: 8,  pre_exo: ["FISIO", "MAT_B"], pre_apr: [], prow: 5, pcol: 9 },
  { id: "UC_CALIDAD",      cod: "157",  s: 6, h: 2,    n: "Sistemas de Gestión",           ab: "Sist. Gestión", a: "CFA", cr: 4,  pre_exo: ["MAT_C", "QA3"], pre_apr: [], prow: 5, pcol: 10, notas: "2do hemi. Desde 2025." },
  { id: "QF101",           cod: "700",  s: 7, h: null, n: "Q. Farmacéutica 101 (T)",       ab: "Q. Farm. 101", a: "CFA", cr: 8,  pre_exo: ["QO102", "QO103L", "QO104", "QA3", "FQ102", "FARMACOGNOSIA", "BIOQ"], pre_apr: [], prow: 4, pcol: 9, notas: "Teórico" },
  { id: "QF102",           cod: "701X", s: 7, h: null, n: "Q. Farmacéutica 102 (L)",       ab: "Q. Farm. 102", a: "CFA", cr: 6,  pre_exo: ["QO102", "QO103L", "QO104", "QA3", "FQ102", "FQ103", "FARMACOGNOSIA", "BIOQ"], pre_apr: [], prow: 4, pcol: 10, notas: "Lab." },
  { id: "FTEC1",           cod: "702X", s: 7, h: null, n: "Farmacotecnia I",               ab: "Farmacotec. I", a: "CFA", cr: 10, pre_exo: ["FARMACOKINETICA", "FARMACOGNOSIA", "BOTANICA", "MICROBIO_T", "QA3", "QI_T", "FQ102", "INTRO_MED"], pre_apr: [], prow: 4, pcol: 8 },
  { id: "FARMACO",         cod: "703X", s: 7, h: null, n: "Farmacología",                  ab: "Farmacología",  a: "CFA", cr: 10, pre_exo: ["QO102", "QO103L", "QO104", "FISIO", "TALLER_INTEG", "BIOQ"], pre_apr: [], prow: 6, pcol: 8 },
  { id: "FARMACOTERAPIA",  cod: "803X", s: 8, h: null, n: "Farmacoterapia I",              ab: "Farmacoterap.", a: "CFA", cr: 8,  pre_exo: ["FISIOPAT", "FARMACO"], pre_apr: [], prow: 3, pcol: 9 },
  { id: "FTEC2",           cod: "802X", s: 8, h: null, n: "Farmacotecnia II",              ab: "Farmacotec. II", a: "CFA", cr: 10, pre_exo: ["FTEC1"], pre_apr: [], prow: 3, pcol: 10 },
  { id: "CONTROL",         cod: "804X", s: 8, h: null, n: "Control Calidad Medic. I",      ab: "Control Cal.",  a: "CFA", cr: 12, pre_exo: ["MICROBIO_T", "QF101", "QF102", "FTEC1"], pre_apr: [], prow: 2, pcol: 9 },
  { id: "TOXICO",          cod: "805",  s: 8, h: 1,    n: "Toxicología Fundamental",       ab: "Toxicología",   a: "CFA", cr: 4,  pre_exo: ["QA3", "BIOQ"], pre_apr: [], prow: 2, pcol: 10, notas: "1er hemi" },
  { id: "LEGISLACION",     cod: "809",  s: 9, h: null, n: "Legislación y Deontología",     ab: "Legislación",   a: "CFA", cr: 6,  pre_exo: ["FTEC2", "FARMACOTERAPIA"], pre_apr: [], prow: 1, pcol: 9 },
  { id: "GESTION",         cod: "410",  s: 9, h: 2,    n: "Gestión de Empresas",           ab: "Gestión Emp.",  a: "CFA", cr: 4,  pre_exo: [], pre_apr: [], prow: 1, pcol: 10, notas: "2do hemi. Asistencia controlada." },
];

