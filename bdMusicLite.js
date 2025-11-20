// --- bdMusicLite.js ---
// Requiere que antes se cargue bdMusicData.js (con var TB_* ...)

/* ========= Helpers ========= */
if (!window.CSS) window.CSS = {};
if (typeof window.CSS.escape !== "function") {
  window.CSS.escape = s => String(s).replace(/["\\#.;?+*^$[\](){}|><:=!~]/g, "\\$&");
}
const onEnter = (el, cb) => el?.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); cb(); }});
const createRadioChip = ({ name, value, text }) => {
  const label = document.createElement("label");
  label.className = "radio-chip";
  label.innerHTML = `<input type="radio" name="${name}" value="${value}"><span>${text}</span>`;
  return label;
};
function cerrarListas(keep){
  ["generoList","eventoList","faseList"].forEach(id=>{
    if (keep && id === keep + "List") return;
    const el = document.getElementById(id);
    if (el) el.innerHTML = "";
  });
}
function ajustarVentanaLista(listEl){
  if(!listEl) return;
  const rect=listEl.getBoundingClientRect();
  const vh=window.innerHeight||document.documentElement.clientHeight;
  listEl.style.maxHeight = Math.max(140, Math.min(260, vh-rect.top-20)) + "px";
}

/* ========= App ========= */
document.addEventListener("DOMContentLoaded", () => {
  // comprobar tablas globales
  ["TB_EstadoTag","TB_Popularidad","TB_Genero","TB_TipoEvento","TB_FaseSet","TB_EventoRecomendacion","TB_EjemploFormato"].forEach(k=>{
    if (!Array.isArray(window[k])) console.warn("Tabla opcional/faltante:", k);
  });

  const TB_EstadoTag            = window.TB_EstadoTag || [];
  const TB_Popularidad          = window.TB_Popularidad || [];
  const TB_Genero               = window.TB_Genero || [];
  const TB_TipoEvento           = window.TB_TipoEvento || [];
  const TB_FaseSet              = window.TB_FaseSet || [];
  const TB_EventoRecomendacion  = window.TB_EventoRecomendacion || [];

  // ===== Ejemplos (si no existe, cargar defaults) =====
  let TB_EjemploFormato = Array.isArray(window.TB_EjemploFormato) ? window.TB_EjemploFormato : [
    {
      Genero: "🎷 Merengue",
      TituloEjemplo: "R Merengue 2025. 135 08A. R 5E. 🎙️Live • Open. Explosión de Iquitos – La Roba Maridos (Intro Open) [DJ Jazo]",
      AlbumEjemplo:  "R Grupo Al Vivo Merengue • 2025 • 🔴 Clímax (R)",
      Descripcion:   "Merengue en vivo de alta energía (Clímax). Formato incluye Año, BPM, Key, Fase/energía y flags."
    },
    {
      Genero: "🎺 Cumbia",
      TituloEjemplo: "R Cumbia 2024. 094 07A. A 3E. Grupo 5 – Motor y Motivo (DJ Edit)",
      AlbumEjemplo:  "R Cumbia • 2024 • 🟢 Build-Up (V)",
      Descripcion:   "Cumbia popular moderna para build-up medio."
    },
    {
      Genero: "🥁 Salsa",
      TituloEjemplo: "R Salsa 2023. 098 05A. R 4E. Marc Anthony – Parecen Viernes (in Vocal) [DJ MCL8]",
      AlbumEjemplo:  "R Salsa Gold • 2023 • 🔴 Clímax (R)",
      Descripcion:   "Salsa romántica con energía alta."
    },
    {
      Genero: "🎧 Regue Boost",
      TituloEjemplo: "R Regue Boost 2025. 119 02A. R 5E. Moombaton – Papi Chu (Boosted) [DJ Jazo]",
      AlbumEjemplo:  "R Regue Boost Old • 2025 • 🔴 Clímax (R)",
      Descripcion:   "Reggaetón acelerado para picos de energía."
    },
    {
      Genero: "🇧🇴 Nac Taquirari",
      TituloEjemplo: "R Nac Taquirari 2025. 096 07A. A 3E. Grupo Al Vivo – Feliz Cumpleaños Cruceño (Open) [DJ SCZ]",
      AlbumEjemplo:  "R Taquirari Cruceño • 2025 • 🟢 Build-Up (V)",
      Descripcion:   "Tema regional para felicitación y celebraciones cruceñas."
    }
  ];

  // --- Elements
  const estadoGroup = document.getElementById("estadoGroup");
  const popularidadGroup = document.getElementById("popularidadGroup");

  const resultado = document.getElementById("resultado");
  const albumText = document.getElementById("albumText");

  const generoInput = document.getElementById("searchGenero");
  const generoList  = document.getElementById("generoList");

  const eventoInput = document.getElementById("searchEvento");
  const eventoList  = document.getElementById("eventoList");

  const faseInput   = document.getElementById("searchFase");
  const faseList    = document.getElementById("faseList");

  const bpmInput    = document.getElementById("bpm");
  const chkUsarBpm  = document.getElementById("chkUsarBpm");

  const versionRadios = document.querySelectorAll('input[name="version"]');
  const chkGrupoAlVivo  = document.getElementById("chkGrupoAlVivo");

  // NUEVO: tarjeta y campo para "🎤 Artista: Bailable"
  const mixzCard = document.getElementById("mixzCard");
  const bailableText = document.getElementById("bailableText");

  // Nota dinámica por género
  const notaGenero = document.getElementById("notaGenero");

  // (opcional) badges de pista para rangos BPM (si existen en el HTML)
  const bpmHints = document.getElementById("bpmHints");
  function updateBpmHints(){
    if(!bpmHints) return;
    const usar = chkUsarBpm?.checked ?? true;
    const val = parseInt(bpmInput.value, 10);
    [...bpmHints.querySelectorAll('.badge')].forEach(b=>{
      const min = parseInt(b.dataset.min,10);
      const max = parseInt(b.dataset.max,10);
      const on = usar && !isNaN(val) && val >= min && val <= max;
      b.classList.toggle('badge--active', on);
    });
  }

  // --- Sugerencia dinámica por Evento (UI)
  // Se inserta debajo del input Evento
  const notaEvento = document.createElement("div");
  notaEvento.className = "hint";
  notaEvento.innerHTML = `
    <span class="hint-label">🎧 Sugerencia:</span>
    <span id="textoEventoRecom" class="hint-text">(Selecciona un evento para ver recomendaciones)</span>
  `;
  eventoInput?.parentNode?.appendChild(notaEvento);
  const textoEventoRecom = document.getElementById("textoEventoRecom");

  function actualizarRecomendacionEvento(nombreEvento) {
    if (!textoEventoRecom) return;
    const e = TB_EventoRecomendacion.find(ev => ev.Nombre === nombreEvento);
    if (e) {
      textoEventoRecom.innerHTML =
        `${(e.GenerosSugeridos||[]).join(", ")}<br>` +
        `<small>🎚️ BPM: ${e.BPM_Sugerido || "-"} | ⚡ ${e.FaseRecomendada || "-"}</small><br>` +
        `<small>${e.Nota || ""}</small>`;
    } else {
      textoEventoRecom.innerHTML = "(Sin recomendaciones registradas para este evento)";
    }
  }

  // --- Pintar radios desde datos
  TB_EstadoTag.filter(x=>x.Estado==="ACT").forEach(t=>{
    estadoGroup.appendChild(createRadioChip({name:"estado",value:t.Valor,text:t.Nombre}));
  });
  TB_Popularidad.filter(x=>x.Estado==="ACT").forEach(t=>{
    popularidadGroup.appendChild(createRadioChip({name:"popularidad",value:t.Valor,text:t.Nombre}));
  });

  // --- Listas (mousedown para evitar conflicto con blur)
  const renderGeneros = (f="")=>{
    generoList.innerHTML = "";
    TB_Genero.filter(g=>g.Estado==="ACT" && g.Nombre.toLowerCase().includes(f.toLowerCase()))
      .forEach(g=>{
        const item=document.createElement("div");
        item.className="item"; item.textContent=g.Nombre;
        item.addEventListener("mousedown",e=>{
          e.preventDefault();
          generoInput.value=g.Nombre;
          localStorage.setItem("generoTag", g.Nombre);
          cerrarListas();
          actualizarNotaGenero(g.Nombre); // nota por género
          // autocompletar ejemplos por género
          ejemploInput.value = g.Nombre.replace(/^[^\w\s]+/u,"").trim();
          filtrarEjemplos();
          actualizarResultado();
        });
        generoList.appendChild(item);
      });
    ajustarVentanaLista(generoList);
  };

  const renderEventos = (f="")=>{
    eventoList.innerHTML = "";
    TB_TipoEvento.filter(ev=>ev.Estado==="ACT" && ev.Nombre.toLowerCase().includes(f.toLowerCase()))
      .forEach(ev=>{
        const item=document.createElement("div");
        item.className="item"; item.textContent=ev.Nombre;
        item.addEventListener("mousedown",e=>{
          e.preventDefault();
          eventoInput.value=ev.Nombre;
          localStorage.setItem("eventoTag", ev.Nombre);
          cerrarListas();
          actualizarRecomendacionEvento(ev.Nombre); // sugerencia por evento
          actualizarResultado();
        });
        eventoList.appendChild(item);
      });
    ajustarVentanaLista(eventoList);
  };

  const renderFases = (f="")=>{
    faseList.innerHTML = "";
    TB_FaseSet.filter(a=>a.Estado==="ACT" && a.Nombre.toLowerCase().includes(f.toLowerCase()))
      .forEach(a=>{
        const item=document.createElement("div");
        item.className="item"; item.textContent=a.Nombre;
        item.addEventListener("mousedown",e=>{
          e.preventDefault();
          faseInput.value=a.Nombre;
          localStorage.setItem("faseTag", a.Nombre);
          cerrarListas();
          actualizarResultado();
        });
        faseList.appendChild(item);
      });
    ajustarVentanaLista(faseList);
  };

  // --- Focus / input / blur
  generoInput.addEventListener("focus", ()=>{
    if (generoInput.value) generoInput.select();
    cerrarListas("genero"); renderGeneros(generoInput.value);
  });
  eventoInput.addEventListener("focus", ()=>{ cerrarListas("evento"); renderEventos(eventoInput.value); });
  faseInput.addEventListener("focus",   ()=>{ cerrarListas("fase");   renderFases(faseInput.value); });

  generoInput.addEventListener("input", e=>{ cerrarListas("genero"); renderGeneros(e.target.value); });
  eventoInput.addEventListener("input", e=>{ cerrarListas("evento"); renderEventos(e.target.value); });
  faseInput.addEventListener("input",   e=>{ cerrarListas("fase");   renderFases(e.target.value); });

  const closeLater = () => setTimeout(cerrarListas, 200);
  generoInput.addEventListener("blur", closeLater);
  eventoInput.addEventListener("blur", closeLater);
  faseInput.addEventListener("blur",   closeLater);

  onEnter(generoInput, ()=>{ localStorage.setItem("generoTag", generoInput.value); actualizarNotaGenero(generoInput.value); ejemploInput.value = generoInput.value.replace(/^[^\w\s]+/u,"").trim(); filtrarEjemplos(); actualizarResultado(); });
  onEnter(eventoInput, ()=>{ localStorage.setItem("eventoTag", eventoInput.value); actualizarRecomendacionEvento(eventoInput.value); actualizarResultado(); });
  onEnter(faseInput,   ()=>{ localStorage.setItem("faseTag",   faseInput.value);   actualizarResultado(); });

  // --- Defaults (fase predeterminada = ⭐)
  const DEFAULTS = {
    estado: "💾 Classic",
    popularidad: "🔥🔥🔥 Peak Song",
    genero: "",
    evento: "🎉 Fiesta Popular",
    fase: "⭐",
    bpm: "",
    usarBpm: true,
    version: "Original",
    grupoAlVivo: false,
    bailableText: ""
  };

  // --- Cargar guardados
  const savedEstado      = localStorage.getItem("estadoTag")      || DEFAULTS.estado;
  const savedPopularidad = localStorage.getItem("popularidadTag") || DEFAULTS.popularidad;
  const savedGenero      = localStorage.getItem("generoTag") ?? DEFAULTS.genero;
  const savedEvento      = localStorage.getItem("eventoTag")      || DEFAULTS.evento;

  let savedFase = localStorage.getItem("faseTag") || DEFAULTS.fase;
  const nombresFase = TB_FaseSet.map(f=>f.Nombre);
  if (savedFase && TB_FaseSet.length && !nombresFase.includes(savedFase)) {
    savedFase = DEFAULTS.fase;
    localStorage.setItem("faseTag", savedFase);
  }

  const savedBpmRaw      = localStorage.getItem("bpmTag");
  const savedUsarBpm     = localStorage.getItem("usarBpm");
  const usarBpmInicial   = savedUsarBpm === null ? DEFAULTS.usarBpm : savedUsarBpm === "1";
  const savedVersion     = localStorage.getItem("versionTag")     || DEFAULTS.version;
  const savedGrupoAlVivo = (localStorage.getItem("grupoAlVivo") === "1") || DEFAULTS.grupoAlVivo;
  const savedBailable    = localStorage.getItem("bailableText")   || DEFAULTS.bailableText;

  // --- Marcar radios
  document.querySelector(`input[name="estado"][value="${CSS.escape(savedEstado)}"]`)?.click();
  document.querySelector(`input[name="popularidad"][value="${CSS.escape(savedPopularidad)}"]`)?.click();
  document.querySelector(`input[name="version"][value="${CSS.escape(savedVersion)}"]`)?.click();

  // --- Setear inputs
  generoInput.value = savedGenero;
  eventoInput.value = savedEvento;
  faseInput.value   = savedFase;
  bpmInput.value    = (savedBpmRaw ?? DEFAULTS.bpm);

  chkUsarBpm.checked = usarBpmInicial;
  bpmInput.classList.toggle("off", !usarBpmInicial);
  if (chkGrupoAlVivo) chkGrupoAlVivo.checked = savedGrupoAlVivo;

  // --- Bailable (mostrar si versión es Mixz)
  if (bailableText) bailableText.value = savedBailable;
  if (mixzCard) mixzCard.style.display = (savedVersion === "Mixz") ? "flex" : "none";

  // ====== BLOQUE UI: Panel de EJEMPLOS DESPUÉS del botón Restablecer ======
  function insertAfter(newNode, referenceNode){
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  const wrap = document.querySelector(".wrap");
  const resetRow = document.querySelector(".reset-row"); // contenedor del botón Restablecer
  if (wrap && resetRow){
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "📘 Ejemplos de Formato";

    const card = document.createElement("section");
    card.className = "card";
    const holder = document.createElement("div");
    holder.className = "search-box";
    holder.innerHTML = `
      <input type="text" id="searchEjemplo" placeholder="Buscar género o palabra clave..." autocomplete="off" />
      <div id="ejemploList" class="list"></div>
    `;
    card.appendChild(holder);

    const resultadosCard = resetRow.closest("section");
    insertAfter(title, resultadosCard);
    insertAfter(card, title);
  }

  const ejemploInput = document.getElementById("searchEjemplo");
  const ejemploList  = document.getElementById("ejemploList");

  function renderEjemplos(f=""){
    if(!ejemploList) return;
    ejemploList.innerHTML = "";
    const filtro = (f||"").toLowerCase();
    TB_EjemploFormato
      .filter(e =>
        e.Genero.toLowerCase().includes(filtro) ||
        e.TituloEjemplo.toLowerCase().includes(filtro) ||
        (e.AlbumEjemplo||"").toLowerCase().includes(filtro)
      )
      .forEach(e=>{
        const it = document.createElement("div");
        it.className = "item";
        it.innerHTML = `
          <b>${e.Genero}</b><br>
          <span style="color:var(--brand)">🎵 ${e.TituloEjemplo}</span><br>
          <small style="color:var(--muted)">💽 ${e.AlbumEjemplo||""}</small><br>
          <small>${e.Descripcion||""}</small>
        `;
        it.addEventListener("mousedown",(ev)=>{
          ev.preventDefault();
          if (resultado) resultado.value = e.TituloEjemplo;
          if (albumText) albumText.value = e.AlbumEjemplo || "";
        });
        ejemploList.appendChild(it);
      });
    ajustarVentanaLista(ejemploList);
  }

  function filtrarEjemplos(){
    renderEjemplos(ejemploInput?.value || "");
  }

  ejemploInput?.addEventListener("focus", ()=>{
    cerrarListas(); // cerrar otros dropdowns
    renderEjemplos(ejemploInput.value);
  });
  ejemploInput?.addEventListener("input", ()=> renderEjemplos(ejemploInput.value));
  ejemploInput?.addEventListener("blur", ()=> setTimeout(()=>{ if(ejemploList) ejemploList.innerHTML=""; }, 200));

  // --- Notas iniciales
  actualizarNotaGenero(savedGenero);
  actualizarRecomendacionEvento(savedEvento);

  // --- Cerrar listas / resaltar / actualizar
  cerrarListas();
  updateBpmHints();
  actualizarResultado();

  // --- Mostrar/Ocultar bailable según versión + copiar
  versionRadios.forEach(r => r.addEventListener("change", ()=>{
    localStorage.setItem("versionTag", r.value);
    if (mixzCard) mixzCard.style.display = (r.value === "Mixz") ? "flex" : "none";
    if (r.value !== "Mixz" && bailableText) bailableText.value = ""; // opcional limpiar
    actualizarResultado();
  }));

  document.getElementById("btnCopyBailable")?.addEventListener("click", async ()=>{
    try {
      await navigator.clipboard.writeText((bailableText?.value || "").trim());
      const btn = document.getElementById("btnCopyBailable");
      const old = btn.textContent;
      btn.textContent = "¡Copiado!";
      setTimeout(()=> btn.textContent = old, 1200);
    } catch {
      bailableText?.select();
      document.execCommand("copy");
    }
  });

  // --- Listeners globales
  chkUsarBpm.addEventListener("change", ()=>{
    bpmInput.classList.toggle("off", !chkUsarBpm.checked);
    localStorage.setItem("usarBpm", chkUsarBpm.checked ? "1" : "0");
    updateBpmHints();
    actualizarResultado();
  });
  chkGrupoAlVivo?.addEventListener("change", ()=>{
    localStorage.setItem("grupoAlVivo", chkGrupoAlVivo.checked ? "1" : "0");
    actualizarResultado();
  });
  document.querySelectorAll('input[name="estado"], input[name="popularidad"]').forEach(input=>{
    input.addEventListener("change", ()=>{
      if (input.name==="estado")      localStorage.setItem("estadoTag", input.value);
      if (input.name==="popularidad") localStorage.setItem("popularidadTag", input.value);
      actualizarResultado();
    });
  });
  bpmInput.addEventListener("input", ()=>{
    localStorage.setItem("bpmTag", bpmInput.value ?? "");
    updateBpmHints();
    actualizarResultado();
  });
  
  // Eliminar emoji del nombre del género solo si es Rmxz
  function limpiarEmojiGenero(nombre){
    return nombre ? nombre.replace(/^[^\w\s]+/u, "").trim() : "";
  }

  // --- Construcción de textos y persistencia
  function actualizarResultado(){
    const estado = document.querySelector('input[name="estado"]:checked')?.value || "";
    const pop    = document.querySelector('input[name="popularidad"]:checked')?.value || "";
    const gen    = generoInput.value || "";
    const evt    = eventoInput.value || "";
    const fase   = faseInput.value || "";

    const usarBpm = chkUsarBpm?.checked ?? true;
    const bpmVal  = bpmInput.value;

    const version = document.querySelector('input[name="version"]:checked')?.value || "Original";
    const grupoTxt = chkGrupoAlVivo?.checked ? " Grupo Al Vivo" : "";

    const faseObj = TB_FaseSet.find(f=>f.Nombre===fase);
    const faseAbr = faseObj?.Abreviado || "";
    const sufFase = faseAbr ? ` ${faseAbr}` : "";

    const bpm = (usarBpm && bpmVal!=="") ? `BPM ${bpmVal}` : "";
    const partes = [estado, pop, (gen&&evt)?`${gen} – ${evt}`:(gen||evt), bpm, fase?`Set ${fase}`:"", version].filter(Boolean);

    const textoAlbum =
      (version==="Mixz" && gen) ? `Mixz ${limpiarEmojiGenero(gen)}${grupoTxt}${sufFase}` :
      (version==="Rmxz" && gen) ? `R ${limpiarEmojiGenero(gen)}${grupoTxt}${sufFase}` :
      (version==="Original" && gen) ? `${gen}${grupoTxt}${sufFase}`   :
      partes.join(" | ");

    resultado.value = partes.join(" | ");
    albumText.value = textoAlbum;

    // Persistencia
    localStorage.setItem("estadoTag", estado);
    localStorage.setItem("popularidadTag", pop);
    localStorage.setItem("generoTag", gen);
    localStorage.setItem("eventoTag", evt);
    localStorage.setItem("faseTag", fase);
    localStorage.setItem("bpmTag", bpmVal ?? "");
    localStorage.setItem("usarBpm", usarBpm ? "1" : "0");
    localStorage.setItem("versionTag", version);
    localStorage.setItem("grupoAlVivo", chkGrupoAlVivo?.checked ? "1" : "0");
    if (bailableText) localStorage.setItem("bailableText", bailableText.value ?? "");
  }

  // --- Nota dinámica por género con colores (WarmUp, OnFire, Closing)
  function actualizarNotaGenero(nombreGenero){
    if (!notaGenero) return;
    const gen = TB_Genero.find(
      g => g.Nombre.toLowerCase() === String(nombreGenero||"").toLowerCase()
    );
    if (gen && gen.Observacion && gen.Observacion.trim()){
      let obs = gen.Observacion;

      // 🎨 Colorear fases según palabras clave
      obs = obs
        .replace(/(WarmUp)/gi, '<span style="color:#ffffff;font-weight:600;">$1</span>')
        .replace(/(OnFire[🔥]*)/gi, '<span style="color:#ff2c2c;font-weight:600;">$1</span>')
        .replace(/(Closing)/gi, '<span style="color:#2196f3;font-weight:600;">$1</span>')
        .replace(/(Chill[🌙]*)/gi, '<span style="color:#8c9eff;font-weight:600;">$1</span>');

      notaGenero.innerHTML = obs;
      notaGenero.style.opacity = "1";
    } else {
      notaGenero.innerHTML = "(Sin información BPM para este género)";
      notaGenero.style.opacity = ".6";
    }
  }

  // --- Copiar (otros campos)
  const flashBtn=id=>{const b=document.getElementById(id);const t=b.textContent;b.textContent="¡Copiado!";setTimeout(()=>b.textContent=t,1200);};
  const fallbackCopy=id=>{const el=document.getElementById(id);el.select();document.execCommand("copy");};
  document.getElementById("btnCopyMain")?.addEventListener("click", async ()=>{
    try{ await navigator.clipboard.writeText(resultado.value.trim()); flashBtn("btnCopyMain"); }
    catch{ fallbackCopy("resultado"); flashBtn("btnCopyMain"); }
  });
  document.getElementById("btnCopyAlbum")?.addEventListener("click", async ()=>{
    try{ await navigator.clipboard.writeText(albumText.value.trim()); flashBtn("btnCopyAlbum"); }
    catch{ fallbackCopy("albumText"); flashBtn("btnCopyAlbum"); }
  });

  // --- Restablecer (fase por defecto "⭐")
  document.getElementById("btnReset")?.addEventListener("click", ()=>{
    if (!confirm("¿Seguro que deseas restablecer todos los valores?")) return;

    localStorage.clear();

    // radios por defecto
    const defEstado = "💾 Classic";
    const defPop    = "🔥🔥🔥 Peak Song";
    document.querySelector(`input[name="estado"][value="${CSS.escape(defEstado)}"]`)?.click();
    document.querySelector(`input[name="popularidad"][value="${CSS.escape(defPop)}"]`)?.click();
    document.querySelector(`input[name="version"][value="Original"]`)?.click();

    // inputs por defecto
    generoInput.value = "";
    eventoInput.value = "🎉 Fiesta Popular";
    faseInput.value   = "⭐";

    if (chkGrupoAlVivo) chkGrupoAlVivo.checked = false;

    chkUsarBpm.checked = true;
    bpmInput.value = "";
    bpmInput.classList.remove("off");

    // bailable
    if (bailableText) bailableText.value = "";
    if (mixzCard) mixzCard.style.display = "none";

    // notas
    actualizarNotaGenero("");
    actualizarRecomendacionEvento(eventoInput.value);

    // limpiar ejemplos
    if (ejemploInput) ejemploInput.value = "";
    if (ejemploList) ejemploList.innerHTML = "";

    cerrarListas();
    updateBpmHints();
    actualizarResultado();
  });

  // Inicializar panel de ejemplos con el género guardado (si existe)
  if (ejemploInput && savedGenero){
    ejemploInput.value = savedGenero.replace(/^[^\w\s]+/u,"").trim();
    renderEjemplos(ejemploInput.value);
  }
});
