/**
 * materias.js — Malla QF PE2015 · UDELAR
 *
 * CAMPO DE PREVIAS:
 *   pre_exo: [ "ID", ... ]  → la materia debe estar EXONERADA
 *   pre_apr: [ "ID", ... ]  → alcanza con que esté APROBADA
 *
 * Por defecto todas las previas conocidas están en pre_exo (según PDF PE2015).
 * Cuando confirmes cuáles solo requieren aprobación, movelas de pre_exo a pre_apr.
 *
 * Ejemplo de materia con ambos tipos:
 *   pre_exo: ["MAT_A", "FIS101"],   // estas deben estar exoneradas
 *   pre_apr: ["INTRO_MED"],          // esta con aprobada alcanza
 */

const AM = {
  CFM:{ n:"Cs. Físico-Matemáticas",   cMin:42,  c:"#1D4ED8", p:"#EFF6FF", m:"#93C5FD", t:"#1E3A8A", b:"#BFDBFE" },
  CQ: { n:"Ciencias Químicas",         cMin:108, c:"#15803D", p:"#F0FDF4", m:"#86EFAC", t:"#14532D", b:"#BBF7D0" },
  CBB:{ n:"Cs. Biológicas y Biomédicas",cMin:69, c:"#C2410C", p:"#FFF7ED", m:"#FDBA74", t:"#7C2D12", b:"#FED7AA" },
  CFA:{ n:"Cs. Farmacéuticas",         cMin:105, c:"#6D28D9", p:"#F5F3FF", m:"#C4B5FD", t:"#4C1D95", b:"#DDD6FE" },
  PRO:{ n:"Practicantado",             cMin:55,  c:"#374151", p:"#F9FAFB", m:"#9CA3AF", t:"#1F2937", b:"#E5E7EB" },
};
const CMIN = 450;

const materias = [
  // ── SEMESTRE 1 ─────────────────────────────────────────────────────────
  { id:"MAT_A",     cod:"01A",  s:1, h:null, n:"Matemática A",               ab:"Mat. A",       a:"CFM", cr:10, pre_exo:[],                                       pre_apr:[] },
  { id:"QUI_GEN_I", cod:"102",  s:1, h:null, n:"Química General I",           ab:"Q. Gral. I",   a:"CQ",  cr:7,  pre_exo:[],                                       pre_apr:[] },
  { id:"BIO_I",     cod:"103B", s:1, h:null, n:"Introd. Cs. Biológicas I",    ab:"ICB I",        a:"CBB", cr:5,  pre_exo:[],                                       pre_apr:[] },
  { id:"RIESGOS",   cod:"104A", s:1, h:2,    n:"Prev. Riesgos en Lab.",       ab:"Prev. Riesgos",a:"CQ",  cr:4,  pre_exo:[],                                       pre_apr:[], notas:"2do hemisemestre" },

  // ── SEMESTRE 2 ─────────────────────────────────────────────────────────
  { id:"MAT_B",     cod:"02B",  s:2, h:1,    n:"Matemática B",                ab:"Mat. B",       a:"CFM", cr:6,  pre_exo:["MAT_A"],                                pre_apr:[], notas:"1er hemi" },
  { id:"MAT_C",     cod:"02C",  s:2, h:null, n:"Matemática C",                ab:"Mat. C",       a:"CFM", cr:8,  pre_exo:["MAT_A"],                                pre_apr:[], notas:"Estadística" },
  { id:"FIS101",    cod:"205Q", s:2, h:null, n:"Física 101",                   ab:"Física 101",   a:"CFM", cr:7,  pre_exo:["MAT_A"],                                pre_apr:[] },
  { id:"QUI_GEN_II",cod:"202",  s:2, h:null, n:"Química General II",           ab:"Q. Gral. II",  a:"CQ",  cr:8,  pre_exo:["QUI_GEN_I","RIESGOS"],                  pre_apr:[] },
  { id:"BIO_II",    cod:"203A", s:2, h:null, n:"Introd. Cs. Biológicas II",    ab:"ICB II",       a:"CBB", cr:5,  pre_exo:["BIO_I","RIESGOS"],                      pre_apr:[] },

  // ── SEMESTRE 3 ─────────────────────────────────────────────────────────
  { id:"QO101",     cod:"301",  s:3, h:null, n:"Química Orgánica 101",         ab:"Org. 101",     a:"CQ",  cr:11, pre_exo:["QUI_GEN_II"],                           pre_apr:[] },
  { id:"QA1",       cod:"302",  s:3, h:null, n:"Química Analítica I",          ab:"Q. Anal. I",   a:"CQ",  cr:10, pre_exo:["QUI_GEN_II"],                           pre_apr:[] },
  { id:"QI_T",      cod:"303A", s:3, h:null, n:"Química Inorgánica (T)",       ab:"Q. Inorg. T",  a:"CQ",  cr:6,  pre_exo:["QUI_GEN_II"],                           pre_apr:[], notas:"Teórico" },
  { id:"QI_L",      cod:"303B", s:3, h:null, n:"Lab. Q. Inorgánica",           ab:"Q. Inorg. L",  a:"CQ",  cr:5,  pre_exo:["QUI_GEN_II"],                           pre_apr:[], notas:"Laboratorio" },
  { id:"FIS102",    cod:"304Q", s:3, h:null, n:"Física 102",                   ab:"Física 102",   a:"CFM", cr:7,  pre_exo:["FIS101"],                               pre_apr:[], notas:"Electromagnetismo" },
  { id:"FISIO",     cod:"408A", s:3, h:null, n:"Fisiología",                   ab:"Fisiología",   a:"CBB", cr:7,  pre_exo:["BIO_II"],                               pre_apr:[] },

  // ── SEMESTRE 4 ─────────────────────────────────────────────────────────
  { id:"QO102",     cod:"401",  s:4, h:null, n:"Química Orgánica 102",         ab:"Org. 102",     a:"CQ",  cr:6,  pre_exo:["QO101"],                                pre_apr:[] },
  { id:"QA2",       cod:"402A", s:4, h:null, n:"Química Analítica II",         ab:"Q. Anal. II",  a:"CQ",  cr:7,  pre_exo:["QA1"],                                  pre_apr:[] },
  { id:"FQ102",     cod:"508A", s:4, h:null, n:"Fisicoquímica 102",            ab:"FQ 102",       a:"CQ",  cr:13, pre_exo:["MAT_B","QA1"],                          pre_apr:[] },
  { id:"FIS003L",   cod:"404",  s:4, h:1,    n:"Física 003 (L)",               ab:"Física 003L",  a:"CFM", cr:4,  pre_exo:["FIS102"],                               pre_apr:[], notas:"Laboratorio. 1er hemi" },
  { id:"FISIOPAT",  cod:"415C", s:4, h:null, n:"Fisiopatología",               ab:"Fisiopatol.",  a:"CBB", cr:7,  pre_exo:["FISIO"],                                pre_apr:[] },
  { id:"INTRO_MED", cod:"416X", s:4, h:1,    n:"Introd. al Medicamento",       ab:"Intro. Med.",  a:"CFA", cr:2,  pre_exo:[],                                       pre_apr:[], notas:"1er hemi. Asistencia obligatoria." },

  // ── SEMESTRE 5 ─────────────────────────────────────────────────────────
  { id:"QO103L",    cod:"501",  s:5, h:null, n:"Q. Orgánica 103 (L)",          ab:"Org. 103L",    a:"CQ",  cr:5,  pre_exo:["QO101","QA1"],                          pre_apr:[], notas:"Laboratorio" },
  { id:"QO104",     cod:"502X", s:5, h:1,    n:"Química Orgánica 104",         ab:"Org. 104",     a:"CQ",  cr:4,  pre_exo:["QO102"],                                pre_apr:[], notas:"1er hemi" },
  { id:"QA3",       cod:"503",  s:5, h:null, n:"Química Analítica III",        ab:"Q. Anal. III", a:"CQ",  cr:10, pre_exo:["QA2"],                                  pre_apr:[], notas:"Análisis Instrumental" },
  { id:"FQ103",     cod:"520A", s:5, h:null, n:"Fisicoquímica 103",            ab:"FQ 103",       a:"CQ",  cr:12, pre_exo:["FQ102"],                                pre_apr:[] },
  { id:"BIOQ",      cod:"190",  s:5, h:null, n:"Bioquímica Op. II",            ab:"Bioquímica",   a:"CBB", cr:10, pre_exo:["BIO_I","FQ102","QO102","QA2"],           pre_apr:[], notas:"Desde 2026" },

  // ── SEMESTRE 6 ─────────────────────────────────────────────────────────
  { id:"FARMACOGNOSIA",  cod:"909",  s:6, h:null, n:"Farmacognosia",           ab:"Farmacogn.",   a:"CFA", cr:9,  pre_exo:["QO103L","QO104","QA3"],                 pre_apr:[] },
  { id:"BOTANICA",       cod:"908A", s:6, h:1,    n:"Botánica",                ab:"Botánica",     a:"CFA", cr:4,  pre_exo:["BIO_II","QO103L","QO104","QA3"],        pre_apr:[], notas:"1er hemi" },
  { id:"MICROBIO_T",     cod:"533T", s:6, h:null, n:"Microbiología Gral. (T)", ab:"Microbio. T",  a:"CBB", cr:6,  pre_exo:["BIO_II","BIOQ"],                        pre_apr:[], notas:"Teórico" },
  { id:"MICROBIO_L",     cod:"533L", s:6, h:null, n:"Lab. Análisis Microbiol.",ab:"Microbio. L",  a:"CBB", cr:6,  pre_exo:["BIO_I","BIOQ"],                         pre_apr:[], notas:"Laboratorio" },
  { id:"INMUNO1",        cod:"506X", s:6, h:2,    n:"Inmunología I",           ab:"Inmuno. I",    a:"CBB", cr:5,  pre_exo:["BIO_II","BIOQ"],                        pre_apr:[], notas:"2do hemi" },
  { id:"FARMACOKINETICA",cod:"535X", s:6, h:null, n:"Farmacocinética y Biofarmacia", ab:"Farmacocin.",a:"CFA",cr:8,pre_exo:["FISIO","MAT_B"],                       pre_apr:[] },
  { id:"TALLER_INTEG",   cod:"615",  s:6, h:1,    n:"Taller Integ. Cs. Bio.", ab:"Taller Integ.",a:"CBB", cr:2,  pre_exo:["FISIO","FISIOPAT"],                     pre_apr:[], notas:"1er hemi" },
  { id:"UC_CALIDAD",     cod:"157",  s:6, h:2,    n:"Sistemas de Gestión",     ab:"Sist. Gestión",a:"CFA", cr:4,  pre_exo:["MAT_C","QA3"],                          pre_apr:[], notas:"2do hemi. Desde 2025." },

  // ── SEMESTRE 7 ─────────────────────────────────────────────────────────
  { id:"QF101",    cod:"700",  s:7, h:null, n:"Q. Farmacéutica 101 (T)",       ab:"Q. Farm. 101", a:"CFA", cr:8,  pre_exo:["QO102","QO103L","QO104","QA3","FQ102","FARMACOGNOSIA","BIOQ"],              pre_apr:[], notas:"Teórico" },
  { id:"QF102",    cod:"701X", s:7, h:null, n:"Q. Farmacéutica 102 (L)",       ab:"Q. Farm. 102", a:"CFA", cr:6,  pre_exo:["QO102","QO103L","QO104","QA3","FQ102","FQ103","FARMACOGNOSIA","BIOQ"],      pre_apr:[], notas:"Laboratorio" },
  { id:"FTEC1",    cod:"702X", s:7, h:null, n:"Farmacotecnia I",               ab:"Farmacotec. I",a:"CFA", cr:10, pre_exo:["FARMACOKINETICA","FARMACOGNOSIA","BOTANICA","MICROBIO_T","QA3","QI_T","FQ102","INTRO_MED"], pre_apr:[] },
  { id:"FARMACO",  cod:"703X", s:7, h:null, n:"Farmacología",                  ab:"Farmacología", a:"CFA", cr:10, pre_exo:["QO102","QO103L","QO104","FISIO","TALLER_INTEG","BIOQ"],                     pre_apr:[] },
  { id:"INMUNO2",  cod:"534X", s:7, h:null, n:"Inmunología II",                ab:"Inmuno. II",   a:"CBB", cr:7,  pre_exo:["INMUNO1"],                              pre_apr:[] },
  { id:"BROMATO",  cod:"704",  s:7, h:2,    n:"Bromatología y Nutrición",      ab:"Bromatología", a:"CBB", cr:4,  pre_exo:["BIOQ","MICROBIO_T"],                    pre_apr:[], notas:"2do hemi" },

  // ── SEMESTRE 8 ─────────────────────────────────────────────────────────
  { id:"FARMACOTERAPIA",cod:"803X",s:8,h:null,n:"Farmacoterapia I",            ab:"Farmacoterap.",a:"CFA", cr:8,  pre_exo:["FISIOPAT","FARMACO"],                   pre_apr:[] },
  { id:"FTEC2",    cod:"802X", s:8, h:null, n:"Farmacotecnia II",              ab:"Farmacotec. II",a:"CFA",cr:10, pre_exo:["FTEC1"],                                pre_apr:[] },
  { id:"CONTROL",  cod:"804X", s:8, h:null, n:"Control Calidad Medic. I",      ab:"Control Cal.", a:"CFA", cr:12, pre_exo:["MICROBIO_T","QF101","QF102","FTEC1"],   pre_apr:[] },
  { id:"TOXICO",   cod:"805",  s:8, h:1,    n:"Toxicología Fundamental",       ab:"Toxicología",  a:"CFA", cr:4,  pre_exo:["QA3","BIOQ"],                          pre_apr:[], notas:"1er hemi" },

  // ── SEMESTRE 9 ─────────────────────────────────────────────────────────
  { id:"LEGISLACION",cod:"809",s:9,h:null,n:"Legislación y Deontología",       ab:"Legislación",  a:"CFA", cr:6,  pre_exo:["FTEC2","FARMACOTERAPIA"],               pre_apr:[] },
  { id:"GESTION",  cod:"410",  s:9, h:2,    n:"Gestión de Empresas",           ab:"Gestión Emp.", a:"CFA", cr:4,  pre_exo:[],                                       pre_apr:[], notas:"2do hemi. Asistencia controlada." },

  // ── SEMESTRE 10 ────────────────────────────────────────────────────────
  { id:"PRACTICA", cod:"965X", s:10,h:null, n:"Practicantado",                 ab:"Practicantado",a:"PRO", cr:55, pre_exo:[],                                       pre_apr:[], notas:"Requiere todas las obligatorias aprobadas." },
];
