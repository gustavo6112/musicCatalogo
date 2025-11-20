// --- bdMusicData.js ---
// SOLO datos. Aquí puedes ampliar géneros/eventos cuando quieras.

var TB_EstadoTag = [
  { Nombre: "🆕 New → recién descargada", Estado: "ACT", Valor: "🆕 New" },
  { Nombre: "💾 Classic → tema histórico que siempre funciona", Estado: "ACT", Valor: "💾 Classic" },
  { Nombre: "🧪 Test → aún sin clasificar", Estado: "ACT", Valor: "🧪 Test" },
  { Nombre: "🚀 Peak → éxito absoluto", Estado: "ACT", Valor: "🚀 Peak" },
  { Nombre: "🌙 After → ideal para cierre", Estado: "ACT", Valor: "🌙 After" }
];

var TB_Popularidad = [
  { Nombre: "🔥 Regional Favorite → Gusta en zonas específicas (ej. Scz / Cbba)", Estado: "ACT", Valor: "🔥 Regional Favorite" },
  { Nombre: "🔥🔥 = Rompe pista", Estado: "ACT", Valor: "🔥🔥 Rompe pista" },
  { Nombre: "🔥🔥🔥 Peak Song → Éxito seguro en clímax", Estado: "ACT", Valor: "🔥🔥🔥 Peak Song" },
  { Nombre: "👍 = buena respuesta", Estado: "ACT", Valor: "👍 Buena respuesta" },
  { Nombre: "😐 = neutra", Estado: "ACT", Valor: "😐 Neutra" },
  { Nombre: "❌ = no funcionó", Estado: "ACT", Valor: "❌ No funcionó" }
];

var TB_Genero = [
  // 🎶 LATIN & TROPICAL
  { Nombre: "🎺 Cumbia", Estado: "ACT", Observacion: "01WarmUp BPM(070–095), 02OnFire🔥 BPM(096–110), 03Closing BPM(085–105)" },
  // 🎵 CUMBIA PLENA
  { Nombre: "🎵 Cumbia Plena", Estado: "ACT", Observacion: "01WarmUp BPM(085–095), 02OnFire🔥 BPM(096–108), 03Closing BPM(090–100)"},
  { Nombre: "🪘 Cumbia Villera", Estado: "ACT", Observacion: "01WarmUp BPM(090–095), 02OnFire🔥 BPM(096–110), 03Closing BPM(090–100)" },
  { Nombre: "🪘 Cumbia Turra", Estado: "ACT", Observacion: "01WarmUp BPM(090–095), 02OnFire🔥 BPM(096–110), 03Closing BPM(090–100)" },
  { Nombre: "🔥 Turreo Funk", Estado: "ACT", Observacion: "01WarmUp BPM(090–100), 02OnFire🔥 BPM(101–115), 03Closing BPM(095–105)" },
  { Nombre: "🎺 Cumbia Cachangue", Estado: "ACT", Observacion: "01WarmUp BPM(090–100), 02OnFire🔥 BPM(101–110), 03Closing BPM(095–105)"},
  { Nombre: "🥁 Salsa", Estado: "ACT", Observacion: "01WarmUp BPM(080–095), 02OnFire🔥 BPM(096–110), 03Closing BPM(085–100)" },
  { Nombre: "🎷 Merengue", Estado: "ACT", Observacion: "01WarmUp BPM(085–094), 02OnFire🔥 BPM(095–110), 03Closing BPM(090–105)" },
    // 🎷 MERENGUE URBANO
  { Nombre: "🎷 Merengue Urbano", Estado: "ACT", Observacion: "01WarmUp BPM(100–108), 02OnFire🔥 BPM(109–118), 03Closing BPM(105–112)" },
  { Nombre: "🎷 Merengue Cuarteto", Estado: "ACT", Observacion: "01WarmUp BPM(130–140), 02OnFire🔥 BPM(141–155), 03Closing BPM(135–145)"},
  { Nombre: "🎺 Merengue Mambo", Estado: "ACT", Observacion: "01WarmUp BPM(120–130), 02OnFire🔥 BPM(131–145), 03Closing BPM(125–135)"},
  // 🇵🇪 MERENGUE PERÚ
  { Nombre: "🇵🇪 Merengue Peru", Estado: "ACT",Observacion: "01WarmUp BPM(120–126), 02OnFire🔥 BPM(127–135), 03Closing BPM(120–128)"},
  { Nombre: "🎶 Bachata", Estado: "ACT", Observacion: "01WarmUp BPM(090–116), 02OnFire🔥 BPM(117–145), 03Closing BPM(095–105)" },
  { Nombre: "🎸 Jov Cumbia", Estado: "ACT", Observacion: "01WarmUp BPM(090–098), 02OnFire🔥 BPM(099–112), 03Closing BPM(090–105)" },
  { Nombre: "💃 Jov Quebradita", Estado: "ACT", Observacion: "01WarmUp BPM(105–115), 02OnFire🔥 BPM(116–125), 03Closing BPM(110–120)"},
  { Nombre: "💃 Jov Lambada", Estado: "ACT", Observacion: "01WarmUp BPM(090–100), 02OnFire🔥 BPM(101–115), 03Closing BPM(100–110)" },
  { Nombre: "🪗 Cumbia Norteña", Estado: "ACT", Observacion: "01WarmUp BPM(085–092), 02OnFire🔥 BPM(093–106), 03Closing BPM(088–098)" }, 
  { Nombre: "🎵 Chicha Peruana", Estado: "ACT", Observacion: "01WarmUp BPM(090–097), 02OnFire🔥 BPM(098–108), 03Closing BPM(090–100)" },

  // 💃 URBANO & REGGAETÓN
  { Nombre: "🎧 Regue", Estado: "ACT", Observacion: "01WarmUp BPM(085–095), 02OnFire🔥 BPM(096–108), 03Closing BPM(090–100)" },
  { Nombre: "🔥 Regue Dembow", Estado: "ACT", Observacion: "01WarmUp BPM(085–094), 02OnFire🔥 BPM(095–110), 03Closing BPM(090–100)" },
  { Nombre: "💥 Regue Perreo", Estado: "ACT", Observacion: "01WarmUp BPM(090–098), 02OnFire🔥 BPM(099–115), 03Closing BPM(095–105)" },
  { Nombre: "🚀 Regue Boost", Estado: "ACT", Observacion: "02OnFire🔥 BPM(108–128), Reggaetón acelerado para boost energético en sets" },
  { Nombre: "💃 Latin Pop", Estado: "ACT", Observacion: "01WarmUp BPM(080–092), 02OnFire🔥 BPM(093–108), 03Closing BPM(085–100)" },
  { Nombre: "🎤 Pop Urbano", Estado: "ACT", Observacion: "01WarmUp BPM(080–090), 02OnFire🔥 BPM(091–106), 03Closing BPM(085–095)" },
  { Nombre: "🔥 Perreo Funk", Estado: "ACT", Observacion: "01WarmUp BPM(090–098), 02OnFire🔥 BPM(099–118), 03Closing BPM(095–105)" },


  // 🎧 ELECTRÓNICO / MIXZ
  { Nombre: "🎚️ Dance / Electro Latin", Estado: "ACT", Observacion: "01WarmUp BPM(100–112), 02OnFire🔥 BPM(113–128), 03Closing BPM(100–115)" },
  { Nombre: "🎛️ EDM Latino", Estado: "ACT", Observacion: "01WarmUp BPM(110–120), 02OnFire🔥 BPM(121–128), 03Closing BPM(110–118)" },
  { Nombre: "🕺 Remix Latino", Estado: "ACT", Observacion: "01WarmUp BPM(095–110), 02OnFire🔥 BPM(111–125), 03Closing BPM(100–115)" },
  { Nombre: "🔊 Mashup Party", Estado: "ACT", Observacion: "01WarmUp BPM(095–105), 02OnFire🔥 BPM(106–125), 03Closing BPM(098–110)" },

  // 🧒 INFANTIL / TEMÁTICO
  { Nombre: "🎈 Infantil", Estado: "ACT", Observacion: "01WarmUp BPM(090–105), 02OnFire🔥 BPM(106–120), 03Closing BPM(095–105)" },
  { Nombre: "🎠 Kids Party", Estado: "ACT", Observacion: "01WarmUp BPM(095–110), 02OnFire🔥 BPM(111–125), 03Closing BPM(100–110)" },
  { Nombre: "🧸 Baby Songs", Estado: "ACT", Observacion: "01WarmUp BPM(080–095), 02OnFire🔥 BPM(096–110), 03Closing BPM(085–100)" },

  // 🎸 ROCK / POP LATINO
  { Nombre: "🎸 Rock Latino", Estado: "ACT", Observacion: "01WarmUp BPM(080–094), 02OnFire🔥 BPM(095–112), 03Closing BPM(085–100)" },
  { Nombre: "🎤 Pop Latino", Estado: "ACT", Observacion: "01WarmUp BPM(080–094), 02OnFire🔥 BPM(095–110), 03Closing BPM(085–100)" },
  { Nombre: "🎧 Electro Pop", Estado: "ACT", Observacion: "01WarmUp BPM(090–105), 02OnFire🔥 BPM(106–120), 03Closing BPM(098–108)" },
  { Nombre: "🎚️ Electronica", Estado: "ACT", Observacion: "01WarmUp BPM(090–110), 02OnFire🔥 BPM(111–125), 03Closing BPM(115–125)"},
  { Nombre: "🏠 Electro House", Estado: "ACT", Observacion: "01WarmUp BPM(120–126), 02OnFire🔥 BPM(127–132), 03Closing BPM(125–130)"},
  // CORRIDO
  { Nombre: "🇲🇽 Corrido", Estado: "ACT", Observacion: "01WarmUp BPM(082–096), 02OnFire🔥 BPM(097–108), 03Closing BPM(086–098)" },
  // 🇲🇽 BANDA MEXICANA
  // Ideal para temas tipo “La protagonista de mi bella historia”, “La mejor de todas”
  { Nombre: "🇲🇽 Banda Mx", Estado: "ACT", Observacion: "01WarmUp BPM(092–100), 02OnFire🔥 BPM(101–112), 03Closing BPM(095–105)" },

  // 🎷 ESPECIALES
  { Nombre: "🎻 Baladas", Estado: "ACT", Observacion: "01WarmUp BPM(060–080), 02Chill🌙 BPM(081–090), 03Closing BPM(070–085)" },
  // 🏅 BALADA DE ORO
  { Nombre: "🏅 Balada de Oro", Estado: "ACT", Observacion: "01WarmUp BPM(060–080), 02Chill🌙 BPM(081–090), 03Closing BPM(070–085)" },
  // 🎼 BOLERO
  { Nombre: "🎼 Bolero", Estado: "ACT", Observacion: "01WarmUp BPM(060–075), 02Chill🌙 BPM(076–085), 03Closing BPM(070–080)" },

  { Nombre: "🎹 Instrumental Chill", Estado: "ACT", Observacion: "01Chill🌙 BPM(060–085), 02Closing BPM(070–090)" },
  { Nombre: "🎵 Lounge Latino", Estado: "ACT", Observacion: "01Chill🌙 BPM(070–090), 02Closing BPM(075–095)" },
  
  // 🇧🇴 FOLKLORE BOLIVIANO
  { Nombre: "🇧🇴 Nac Tinku", Estado: "ACT", Observacion: "01WarmUp BPM(090–100), 02OnFire🔥 BPM(101–110), 03Closing BPM(095–105)" },
  { Nombre: "🇧🇴 Nac Morenada", Estado: "ACT", Observacion: "01WarmUp BPM(085–095), 02OnFire🔥 BPM(096–105), 03Closing BPM(090–100)" },
  { Nombre: "🇧🇴 Nac Caporales", Estado: "ACT", Observacion: "01WarmUp BPM(095–105), 02OnFire🔥 BPM(106–115), 03Closing BPM(100–110)" },
  { Nombre: "🇧🇴 Nac Saya Afroboliviana", Estado: "ACT", Observacion: "01WarmUp BPM(090–100), 02OnFire🔥 BPM(101–110)" },
  { Nombre: "🇧🇴 Nac Tobas", Estado: "ACT", Observacion: "01WarmUp BPM(100–110), 02OnFire🔥 BPM(111–120)" },
  { Nombre: "🇧🇴 Nac Cueca Boliviana", Estado: "ACT", Observacion: "01WarmUp BPM(080–095), 02OnFire🔥 BPM(096–105)" },
  { Nombre: "🇧🇴 Nac Taquirari", Estado: "ACT", Observacion: "01WarmUp BPM(095–102), 02OnFire🔥 BPM(103–112), 03Closing BPM(098–105)" },
  { Nombre: "🇧🇴 Nac Huayño", Estado: "ACT", Observacion: "01WarmUp BPM(080–095), 02OnFire🔥 BPM(096–105), 03Closing BPM(090–100)" },
  // 🇧🇴 Nac Huayño Vallegrandino
  { Nombre: "🇧🇴 Nac Huayño Vallegrandino", Estado: "ACT", Observacion: "01WarmUp BPM(080–095), 02OnFire🔥 BPM(096–105), 03Closing BPM(090–100)" },
  
  // 🇧🇴 CUMBIAS REGIONALES
  { Nombre: "🇧🇴 Nac Cum Sureña", Estado: "ACT", Observacion: "01WarmUp BPM(085–095), 02OnFire🔥 BPM(096–108), 03Closing BPM(090–100)" },
  { Nombre: "🇧🇴 Nac Cum Chicha", Estado: "ACT", Observacion: "01WarmUp BPM(090–098), 02OnFire🔥 BPM(099–112), 03Closing BPM(090–105)" }
];




var TB_TipoEvento = [
  // 🎤 Fiestas generales
  { Nombre: "🎉 Fiesta Popular", Estado: "ACT" },
  { Nombre: "🎈 Fiesta Infantil", Estado: "ACT" },
  { Nombre: "🎂 Cumpleaños Kids", Estado: "ACT" },
  { Nombre: "🤹‍♂️ Show Infantil", Estado: "ACT" },
  { Nombre: "🏫 Kermesse Escolar", Estado: "ACT" },
  { Nombre: "🍼 Baby Party", Estado: "ACT" },

  // 💃 Juveniles y adultos
  { Nombre: "💃 Club Latino", Estado: "ACT" },
  { Nombre: "🍹 Pool Party", Estado: "ACT" },
  { Nombre: "🌙 After Party", Estado: "ACT" },
  { Nombre: "🎂 Cumpleaños Adulto", Estado: "ACT" },
  { Nombre: "💑 Cena Romántica", Estado: "ACT" },
  { Nombre: "💍 Aniversario", Estado: "ACT" },
  { Nombre: "🎓 Promoción", Estado: "ACT" },
  { Nombre: "🎭 Evento Corporativo", Estado: "ACT" },
  { Nombre: "💼 Gala Empresarial", Estado: "ACT" },

  // 💒 Bodas y ceremoniales
  { Nombre: "💒 Boda / Matrimonio", Estado: "ACT" },
  { Nombre: "👰 Entrada de Novios", Estado: "ACT" },
  { Nombre: "💞 Vals de Boda", Estado: "ACT" },
  { Nombre: "🥂 Brindis de Boda", Estado: "ACT" },
  { Nombre: "💐 Despedida de Boda", Estado: "ACT" },

  // 👑 Quinceañeras / Promociones
  { Nombre: "👑 Fiesta de Quinceañera", Estado: "ACT" },
  { Nombre: "💃 Entrada de Quinceañera", Estado: "ACT" },
  { Nombre: "👠 Vals de Quinceañera", Estado: "ACT" },
  { Nombre: "🎓 Vals de Promoción", Estado: "ACT" },

  // 🎊 Festividades
  { Nombre: "🎅 Navidad", Estado: "ACT" },
  { Nombre: "🎆 Año Nuevo", Estado: "ACT" },
  { Nombre: "🎡 Carnaval", Estado: "ACT" },
  { Nombre: "🎆 Fiesta Patronal", Estado: "ACT" },
  { Nombre: "🏖️ Fiesta de Playa", Estado: "ACT" },
  { Nombre: "🎃 Fiesta de Halloween", Estado: "ACT" },
  { Nombre: "🎶 Festival Musical", Estado: "ACT" },
  { Nombre: "🎤 Show en Vivo", Estado: "ACT" },
  { Nombre: "🕺 Fiesta Temática", Estado: "ACT" },

  // 🌞 Matutinas / Amanecer
  { Nombre: "🌞 Morning Session", Estado: "ACT" },
  { Nombre: "🌄 Amanecer Latino", Estado: "ACT" },
  { Nombre: "☀️ Energía Matutina", Estado: "ACT" },

  // 🪗 Culturales / Folklore
  { Nombre: "🥁 Desfile Folklórico", Estado: "ACT" },
  { Nombre: "🏛️ Entrada Universitaria", Estado: "ACT" },
  { Nombre: "🎺 Peña Folklórica", Estado: "ACT" },
  { Nombre: "🎪 Feria / Expo", Estado: "ACT" },
  { Nombre: "🎆 Serenata a la Ciudad", Estado: "ACT" },

  // 🌿 Ambientaciones / Chill
  { Nombre: "☕ Lounge Chill", Estado: "ACT" },
  { Nombre: "🌅 Sunset Session", Estado: "ACT" },
  { Nombre: "🌿 Cena Familiar", Estado: "ACT" },
  { Nombre: "🏡 Reunión Privada", Estado: "ACT" }
];



var TB_EventoRecomendacion = [
  // 🎤 Fiestas Generales
  {
    Nombre: "🎉 Fiesta Popular",
    GenerosSugeridos: ["🎺 Cumbia", "🎷 Merengue", "🥁 Salsa", "🎶 Bachata", "🕺 Quebradita"],
    BPM_Sugerido: "090–115",
    FaseRecomendada: "🟢 Build-Up / 🔴 Clímax",
    Nota: "Ideal para temas latinos bailables, transiciones suaves a cumbia, salsa o merengue."
  },
  {
    Nombre: "🎈 Fiesta Infantil",
    GenerosSugeridos: ["🎈 Infantil", "🎠 Kids Party", "🧸 Baby Songs"],
    BPM_Sugerido: "095–115",
    FaseRecomendada: "⚪ Warm-Up / 🟢 Build-Up",
    Nota: "Usar canciones alegres con coros y letras infantiles. Evitar picos de energía."
  },
  {
    Nombre: "🎂 Cumpleaños Kids",
    GenerosSugeridos: ["🎠 Kids Party", "🎈 Infantil"],
    BPM_Sugerido: "100–115",
    FaseRecomendada: "⚪ Warm-Up / 🟢 Build-Up",
    Nota: "Ideal para animación, romper la piñata y canto de cumpleaños."
  },
  {
    Nombre: "🤹‍♂️ Show Infantil",
    GenerosSugeridos: ["🎈 Infantil", "🎠 Kids Party"],
    BPM_Sugerido: "095–110",
    FaseRecomendada: "🟢 Build-Up",
    Nota: "Combina música de juegos, coreografías y personajes animados."
  },
  {
    Nombre: "🏫 Kermesse Escolar",
    GenerosSugeridos: ["🎺 Cumbia", "🎷 Merengue", "🎈 Infantil"],
    BPM_Sugerido: "090–110",
    FaseRecomendada: "🟢 Build-Up",
    Nota: "Cumbia o merengue moderado para actividades y juegos escolares."
  },
  {
    Nombre: "🎂 Cumpleaños Adulto",
    GenerosSugeridos: ["🎺 Cumbia", "🎷 Merengue", "🎶 Bachata", "🎧 Reggaetón", "🎸 Jov Cumbia"],
    BPM_Sugerido: "090–115",
    FaseRecomendada: "🟢 Build-Up / 🔴 Clímax",
    Nota: "Ideal para celebraciones familiares o de amigos. Comienza con cumbia o bachata, luego reggaetón o pop latino para animar el ambiente."
  },

  // 💍 Bodas y Ceremonias
  {
    Nombre: "💒 Boda / Matrimonio",
    GenerosSugeridos: ["🎻 Baladas", "🎹 Instrumental Chill", "🎺 Cumbia"],
    BPM_Sugerido: "070–105",
    FaseRecomendada: "⚪ Warm-Up / 💙 Closing",
    Nota: "Comienza suave con vals o piano y sube con ritmos bailables."
  },
  {
    Nombre: "👰 Entrada de Novios",
    GenerosSugeridos: ["🎹 Instrumental Chill", "🎻 Baladas"],
    BPM_Sugerido: "065–085",
    FaseRecomendada: "⚪ Warm-Up",
    Nota: "Piezas solemnes o románticas para entrada de novios."
  },
  {
    Nombre: "💞 Vals de Boda",
    GenerosSugeridos: ["🎻 Baladas", "🎹 Instrumental Chill"],
    BPM_Sugerido: "060–080",
    FaseRecomendada: "💙 Closing",
    Nota: "Tema central del primer baile, suave y emocional."
  },
  {
    Nombre: "🥂 Brindis de Boda",
    GenerosSugeridos: ["🎹 Instrumental Chill", "🎵 Lounge Latino"],
    BPM_Sugerido: "070–090",
    FaseRecomendada: "💙 Closing",
    Nota: "Fondo musical ideal para discursos o agradecimientos."
  },
  {
    Nombre: "💐 Despedida de Boda",
    GenerosSugeridos: ["🎺 Cumbia", "🎵 Pop Latino"],
    BPM_Sugerido: "090–105",
    FaseRecomendada: "🔵 Closing",
    Nota: "Cierre alegre, despedida de invitados con energía positiva."
  },

  // 👑 Quinceañeras / Promociones
  {
    Nombre: "👑 Fiesta de Quinceañera",
    GenerosSugeridos: ["🎻 Baladas", "🎧 Electro Pop", "🎺 Cumbia"],
    BPM_Sugerido: "085–110",
    FaseRecomendada: "⚪ Warm-Up / 🟢 Build-Up",
    Nota: "Combina vals, pop latino y cumbia juvenil."
  },
  {
    Nombre: "💃 Entrada de Quinceañera",
    GenerosSugeridos: ["🎹 Instrumental Chill", "🎻 Baladas"],
    BPM_Sugerido: "065–085",
    FaseRecomendada: "⚪ Warm-Up",
    Nota: "Entrada elegante, piano instrumental o orquesta moderna."
  },
  {
    Nombre: "👠 Vals de Quinceañera",
    GenerosSugeridos: ["🎻 Baladas", "🎹 Instrumental Chill"],
    BPM_Sugerido: "060–080",
    FaseRecomendada: "💙 Closing",
    Nota: "Vals simbólico, tema principal de la noche."
  },
  {
    Nombre: "🎓 Promoción / Graduación",
    GenerosSugeridos: ["🎧 Reggaetón", "🎺 Cumbia", "🎶 Bachata"],
    BPM_Sugerido: "095–115",
    FaseRecomendada: "🟢 Build-Up / 🔴 Clímax",
    Nota: "Ideal para jóvenes; mezcla urbano + tropical."
  },
  {
    Nombre: "🎓 Vals de Promoción",
    GenerosSugeridos: ["🎻 Baladas", "🎹 Instrumental Chill"],
    BPM_Sugerido: "065–085",
    FaseRecomendada: "💙 Closing",
    Nota: "Baile grupal o cierre solemne."
  },

  // 🎊 Festividades
  {
    Nombre: "🎆 Año Nuevo",
    GenerosSugeridos: ["🎛️ EDM Latino", "🎚️ Dance / Electro Latin", "🎺 Cumbia"],
    BPM_Sugerido: "100–125",
    FaseRecomendada: "🔴 Clímax",
    Nota: "Usar música energética para medianoche y celebración."
  },
  {
    Nombre: "🎅 Navidad",
    GenerosSugeridos: ["🎻 Baladas", "🎵 Pop Latino"],
    BPM_Sugerido: "080–100",
    FaseRecomendada: "⚪ Warm-Up",
    Nota: "Ambiente familiar, melodías suaves y alegres."
  },
  {
    Nombre: "🎡 Carnaval",
    GenerosSugeridos: ["🎺 Cumbia", "🎷 Merengue", "🎧 Reggaetón"],
    BPM_Sugerido: "095–115",
    FaseRecomendada: "🟢 Build-Up / 🔴 Clímax",
    Nota: "Máxima energía, percusión fuerte y coros populares."
  },
  {
    Nombre: "🎆 Fiesta Patronal",
    GenerosSugeridos: ["🇧🇴 Tinku", "🥁 Morenada", "💃 Caporales", "🕺 Saya Afroboliviana"],
    BPM_Sugerido: "090–115",
    FaseRecomendada: "🟢 Build-Up / 🔴 Clímax",
    Nota: "Repertorio folklórico boliviano; percusiones fuertes, ritmo de desfile."
  },
  {
    Nombre: "🎶 Festival Musical",
    GenerosSugeridos: ["🇧🇴 Tinku", "💃 Caporales", "🎺 Cumbia"],
    BPM_Sugerido: "095–115",
    FaseRecomendada: "🟢 Build-Up / 🔴 Clímax",
    Nota: "Eventos culturales o danza; mezcla folklore y tropical."
  },
  {
    Nombre: "🎃 Fiesta de Halloween",
    GenerosSugeridos: ["🎧 Regue Dembow", "🎛️ EDM Latino"],
    BPM_Sugerido: "100–125",
    FaseRecomendada: "🔴 Clímax / 🟣 Experimental",
    Nota: "Ritmos intensos, efectos misteriosos, remixes temáticos."
  },

  // 🌞 Matutinas / Amanecer
  {
    Nombre: "🌞 Morning Session",
    GenerosSugeridos: ["☕ Lounge Chill", "🎹 Instrumental Chill", "🎧 Electro Pop"],
    BPM_Sugerido: "085–105",
    FaseRecomendada: "⚪ Warm-Up",
    Nota: "Inicio de jornada con buena vibra y ritmo suave."
  },
  {
    Nombre: "🌄 Amanecer Latino",
    GenerosSugeridos: ["🎺 Cumbia", "🎷 Merengue", "🎶 Bachata"],
    BPM_Sugerido: "090–110",
    FaseRecomendada: "⚪ Warm-Up / 🟢 Build-Up",
    Nota: "Ideal para comenzar con energía y alegría matutina."
  },
  {
    Nombre: "☀️ Energía Matutina",
    GenerosSugeridos: ["🎧 Reggaetón", "🎶 Bachata", "🎚️ Dance / Electro Latin"],
    BPM_Sugerido: "095–120",
    FaseRecomendada: "🟢 Build-Up",
    Nota: "Set dinámico para eventos matinales o deportivos."
  },

  // 🪗 Culturales / Folklore
  {
    Nombre: "🥁 Desfile Folklórico",
    GenerosSugeridos: ["🇧🇴 Tinku", "🥁 Morenada", "💃 Caporales", "🪶 Tobas"],
    BPM_Sugerido: "090–120",
    FaseRecomendada: "🔴 Clímax",
    Nota: "Ideal para entradas folklóricas; uso de bombos, vientos y bandas."
  },
  {
    Nombre: "🏛️ Entrada Universitaria",
    GenerosSugeridos: ["🇧🇴 Tinku", "💃 Caporales", "🕺 Saya Afroboliviana"],
    BPM_Sugerido: "090–115",
    FaseRecomendada: "🟢 Build-Up / 🔴 Clímax",
    Nota: "Para eventos culturales con fraternidades o comparsas universitarias."
  },
  {
    Nombre: "🎺 Peña Folklórica",
    GenerosSugeridos: ["🎻 Baladas", "🇧🇴 Tinku", "🎺 Cumbia"],
    BPM_Sugerido: "080–110",
    FaseRecomendada: "⚪ Warm-Up / 🟢 Build-Up",
    Nota: "Eventos culturales con mezcla de folklore, baladas y tropical."
  },
  {
    Nombre: "🎪 Feria / Expo",
    GenerosSugeridos: ["🎺 Cumbia", "🎷 Merengue", "🎧 Reggaetón"],
    BPM_Sugerido: "090–115",
    FaseRecomendada: "🟢 Build-Up / 🔴 Clímax",
    Nota: "Ideal para ferias y stands, música alegre de fondo o en vivo."
  },
  {
    Nombre: "🎆 Serenata a la Ciudad",
    GenerosSugeridos: ["🎻 Baladas", "🎺 Cumbia", "🇧🇴 Tinku"],
    BPM_Sugerido: "080–110",
    FaseRecomendada: "🟢 Build-Up / 💙 Closing",
    Nota: "Para celebraciones patrias o serenatas locales, ambiente festivo y emocional."
  },

  // 🌿 Ambientaciones / Chill
  {
    Nombre: "☕ Lounge Chill",
    GenerosSugeridos: ["🎵 Lounge Latino", "🎹 Instrumental Chill"],
    BPM_Sugerido: "070–095",
    FaseRecomendada: "💙 Closing / 🌙 Chill",
    Nota: "Ambiente relajado o espacios de descanso."
  },
  {
    Nombre: "🌿 Cena Familiar",
    GenerosSugeridos: ["🎻 Baladas", "🎵 Pop Latino"],
    BPM_Sugerido: "075–095",
    FaseRecomendada: "⚪ Warm-Up",
    Nota: "Fondos suaves, sin picos de energía, propicio para conversación."
  },
  {
    Nombre: "🏡 Reunión Privada",
    GenerosSugeridos: ["🎵 Pop Latino", "🎺 Cumbia", "🎷 Merengue"],
    BPM_Sugerido: "090–110",
    FaseRecomendada: "🟢 Build-Up",
    Nota: "Repertorio equilibrado entre alegre y familiar."
  }
];




var TB_FaseSet = [
  { Nombre: "⚪Warm-up(1-2)⭐",                Estado: "ACT", Abreviado: "⚪B" },
  { Nombre: "🟢Build-Up(3)⭐/Calentamiento",   Estado: "ACT", Abreviado: "🟢V" },
  { Nombre: "🟡Transicion(3-4)⭐/Energia media", Estado: "ACT", Abreviado: "🟡A" },
  { Nombre: "🔴Clímax(4-5)⭐",                 Estado: "ACT", Abreviado: "🔴R" },
  { Nombre: "🟣Experimental⭐",                Estado: "ACT", Abreviado: "🟣M" },
  { Nombre: "🩵AcapellaIn(2-3)⭐/OpenShow",    Estado: "ACT", Abreviado: "🩵C" },
  { Nombre: "🔵Chill / Cierre(1)⭐",           Estado: "ACT", Abreviado: "🔵Z" }
];

var TB_EjemploFormato = [
  {
  Genero: "🎷 Merengue",
  TituloEjemplo: "R Merengue 2025. 135 08A. 🔴R 5E. 🎙️Live. Explosión De Iquitos – La Roba Maridos (Open) [DJ Jazo @Cg 2025]",
  AlbumEjemplo:  "R Merengue 2025 Live 🔴R",
  Descripcion:   "Merengue en vivo con alto nivel de energía (Clímax). Incluye tags de versión y referencia al DJ. Ideal para cierre de set."
  },
  {
  Genero: "🎷 Merengue",
  TituloEjemplo: "R Mereng Cuart 2024. 150 02A. 🔴R 4E. El Jefe – Qué Lokura (DJ Mateo Edit)",
  AlbumEjemplo:  "R Merengue Cuarteto 2024 🔴R",
  Descripcion:   "Merengue Cuarteto moderno con influencia de mambo. Alta energía (Clímax 🔴R), ideal para picos de fiesta y sets latinos dinámicos."
  },
  {
  Genero: "🎷 Merengue Urbano",
  TituloEjemplo: "R Mereng Urb 2024. 115 10A. 🟡A 3E. Shakira – Soltera (DJ Anthony Sanchez Mambo Remix Intro Outro) 116 BPM",
  AlbumEjemplo:  "R Merengue Urbano 2024 🟡A",
  Descripcion:   "Merengue urbano moderno con mezcla estilo mambo. Energía media (Transición/Build-Up), ideal para conectar ritmos latinos y pop."
  },
  {
  Genero: "🎺 Merengue Mambo",
  TituloEjemplo: "R Mereng Mambo 2025. 117 10A. 🟡A 4E. Karol G – Papasito (Onne Edit • Chorus Intro 2025) 117 BPM",
  AlbumEjemplo:  "R Merengue Mambo 2025 🟡A",
  Descripcion:   "Merengue Mambo moderno con estilo urbano, acento en los metales y ritmo de club. Energía media-alta (Transición 🔶 o Build-Up 🟢), ideal para sets latinos actuales."
  },
  {
  Genero: "🇵🇪 Merengue Peru",
  TituloEjemplo: "R Mereng Perú 2024. 130 09A. 🔴R 5E. Papillón – Triste Payaso (Remix Music Store Bolivia)",
  AlbumEjemplo:  "R Merengue Perú 2024 🔴R",
  Descripcion:   "Versión peruana remix con ritmo rápido (130 BPM), mezcla de cumbia tropical y merengue electrónico. Ideal para fase Clímax 🔴R en fiestas populares y eventos tropicales."
  },
  {
    Genero: "🎺 Cumbia",
    TituloEjemplo: "R Cumbia 2024. 094 07A. A 4E. Grupo 5 – Motor y Motivo (DJ Edit)",
    AlbumEjemplo: "R Grupo 5 Cumbia • 2024 • 🟢 Build-Up (V)",
    Descripcion: "Cumbia popular moderna, usada en eventos sociales. Versión original editada para sets con build-up medio."
  },
  {
    Genero: "🥁 Salsa",
    TituloEjemplo: "R Salsa 2023. 098 05A. R 4E. Marc Anthony – Parecen Viernes (in Vocal) [DJ MCL8]",
    AlbumEjemplo: "R Salsa Gold • 2023 • 🔴 Clímax (R)",
    Descripcion: "Salsa romántica intensa para clímax o cierre de set tropical. BPM cercano a 100."
  },
  {
    Genero: "🎶 Bachata",
    TituloEjemplo: "R Bachata 2023. 130 06A. R 5E. Esme – Una Aventura [X’tremo Mix #24]",
    AlbumEjemplo: "R Bachata Deluxe • 2023 • 🔴 Clímax (R)",
    Descripcion: "Bachata moderna con beat fuerte, ideal para fase de clímax o cierre en sets latinos."
  },
  {
    Genero: "🎧 Regue Boost",
    TituloEjemplo: "R Regue Boost 2025. 119 02A. R 5E. Moombaton – Papi Chu (Boosted) [DJ Jazo]",
    AlbumEjemplo: "R Regue Boost Old • 2025 • 🔴 Clímax (R)",
    Descripcion: "Versión acelerada de reggaetón, pensada para energizar la pista. El tag 'Old' indica estilo vieja escuela."
  },
  {
    Genero: "🎤 Pop Latino",
    TituloEjemplo: "R Pop Latino 2024. 095 09A. A 3E. Camilo – Una Vida Pasada (Ft. Carín León) [Flowmix 2024]",
    AlbumEjemplo: "R Pop Latino • 2024 • 🟢 Build-Up (V)",
    Descripcion: "Pop romántico latino, versión original para build-up suave o transición a bachata."
  },
  {
    Genero: "🇧🇴 Nac Taquirari",
    TituloEjemplo: "R Nac Taquirari 2025. 096 07A. A 3E. Al Vivo – Feliz Cumpleaños Cruceño [DJ SCZ]",
    AlbumEjemplo: "R Taquirari Cruceño • 2025 • 🟢 Build-Up (V)",
    Descripcion: "Tema tradicional cruceño usado en cumpleaños y fiestas regionales. Taquirari con ritmo alegre y percusión local."
  }
];
