(function(){
'use strict';

var SECS = ['Qué es ITIL','SVS','Prácticas','Certificaciones'];
var SECSUB = ['Qué es y su historia','Sistema de Valor del Servicio','Incidentes, problemas, cambios y mesa de servicio','Certificaciones e ISO/IEC/IEEE 29119'];
var SECINTRO = [
  'Definición de ITIL y ITSM, origen en los años 80, las versiones y quién lo administra hoy.',
  'Cómo los componentes del SVS trabajan juntos para crear valor, y las 4 dimensiones.',
  'Las prácticas clave: gestión de incidentes, de problemas, de cambios y la mesa de servicio.',
  'Los niveles de certificación de ITIL y su relación con la norma de pruebas de software ISO 29119.'
];

var Q = [
  {sec:0,slide:2,tema:'Definición',type:'mc',q:'Según la exposición, ¿qué significan las siglas ITIL?',
   opts:['Information Technology Infrastructure Library','International Tech Internet Law','Integrated Training for IT Leaders','Internal Technology Installation List'],a:0,
   why:'ITIL es Information Technology Infrastructure Library: un marco de buenas prácticas para gestionar servicios de TI.'},
  {sec:0,slide:2,tema:'Alcance',type:'tf',q:'Verdadero o falso: ITIL es obligatoria, toda empresa debe aplicarla.',
   opts:['Verdadero','Falso'],a:1,
   why:'No es obligatoria. Es una guía que cada organización adapta a su caso.'},
  {sec:0,slide:3,tema:'ITSM',type:'mc',q:'¿Cuál es la mejor definición de ITSM (IT Service Management)?',
   opts:['Ver la tecnología como un servicio que se le presta a las personas','Un lenguaje de programación para servidores','Una marca de computadores','Un tipo de red interna'],a:0,
   why:'ITSM es ver la TI como un servicio: alguien debe encargarse de que funcione, de arreglarlo si falla y de mejorarlo.'},
  {sec:0,slide:4,tema:'Origen',type:'mc',q:'¿En qué país y década se originó ITIL?',
   opts:['Reino Unido, años 80','Estados Unidos, años 2000','Japón, años 70','Colombia, años 90'],a:0,
   why:'La CCTA, una agencia del gobierno británico, documentó las mejores prácticas de TI en los años 80.'},
  {sec:0,slide:4,tema:'Origen',type:'mc',q:'¿Qué problema motivó la creación de ITIL?',
   opts:['El gobierno gastaba mucho en TI y cada oficina trabajaba a su manera','El gobierno no tenía computadores','Los servidores se quedaban sin energía','No había personal de TI'],a:0,
   why:'Se gastaba mucho en TI y cada oficina trabajaba distinto. Por eso se estandarizó lo que mejor funcionaba.'},
  {sec:0,slide:5,tema:'Versiones',type:'order',q:'Ordena cronológicamente las versiones de ITIL, de la más antigua a la más reciente.',
   items:['Versión 1 (años 80-90)','Versión 2 (2001)','Versión 3 (2007)','Versión 4 (2019)'],
   why:'La v1 eran unos 30 libros sueltos, la v2 los ordenó, la v3 trajo el ciclo de vida y la v4 la hizo flexible.'},
  {sec:0,slide:6,tema:'Ciclo de vida',type:'mc',q:'¿Qué enfoque introdujo ITIL v3 (2007)?',
   opts:['El ciclo de vida del servicio','El Sistema de Valor del Servicio','Solo soporte técnico','Certificación para empresas'],a:0,
   why:'La v3 ve el servicio como un producto, desde la idea hasta su mejora. Se actualizó en 2011.'},
  {sec:0,slide:7,tema:'ITIL 4',type:'mc',q:'¿Con qué enfoques es compatible ITIL 4 (2019)?',
   opts:['Ágil, DevOps y Lean','Solo con cascada (waterfall)','Únicamente con ISO/IEC 20000','Con ninguna otra metodología'],a:0,
   why:'ITIL 4 se lleva bien con Ágil, DevOps y Lean, y se centra en co-crear valor con el cliente.'},
  {sec:0,slide:8,tema:'Administración',type:'order',q:'Ordena a los administradores de ITIL, del origen a la actualidad.',
   items:['CCTA','AXELOS','PeopleCert'],
   why:'Nació en la CCTA, pasó por AXELOS y hoy lo administra PeopleCert.'},
  {sec:0,slide:8,tema:'Administración',type:'mc',q:'¿En qué año PeopleCert adquirió AXELOS?',
   opts:['2021','2007','2019','2001'],a:0,
   why:'PeopleCert compró AXELOS en 2021 y hoy administra ITIL y sus certificaciones.'},
  {sec:1,tema:'SVS',type:'mc',q:'¿Qué muestra el Sistema de Valor del Servicio (SVS)?',
   opts:['Cómo todos los componentes trabajan juntos para crear valor','Solo la lista de certificaciones','El precio de cada servicio','El historial de versiones de ITIL'],a:0,
   why:'El SVS muestra cómo todos los componentes de ITIL trabajan juntos para crear valor.'},
  {sec:1,tema:'SVS',type:'mc',q:'¿Cuál de estas cosas NO es un componente del SVS?',
   opts:['Servidores físicos','Principios rectores','Cadena de valor del servicio','Mejora continua'],a:0,
   why:'El SVS incluye principios rectores, gobernanza, cadena de valor del servicio, prácticas y mejora continua.'},
  {sec:1,tema:'Dimensiones',type:'mc',q:'¿Cuáles son las 4 dimensiones de ITIL 4?',
   opts:['Organizaciones y personas, información y tecnología, socios y proveedores, flujos de valor y procesos','Estrategia, diseño, transición y operación','Planear, hacer, verificar y actuar','Incidentes, problemas, cambios y mesa de servicio'],a:0,
   why:'Las 4 dimensiones son: organizaciones y personas, información y tecnología, socios y proveedores, y flujos de valor y procesos.'},
  {sec:1,tema:'Dimensiones',type:'tf',q:'Verdadero o falso: Las 4 dimensiones reemplazan al SVS.',
   opts:['Verdadero','Falso'],a:1,
   why:'No lo reemplazan: el SVS se complementa con las 4 dimensiones.'},
  {sec:2,tema:'Incidentes',type:'mc',q:'¿Cuál es el objetivo de la gestión de incidentes?',
   opts:['Restablecer el servicio lo más rápido posible','Encontrar y eliminar la causa raíz','Controlar modificaciones para reducir riesgos','Ser el punto único de contacto con los usuarios'],a:0,
   why:'La gestión de incidentes busca restablecer el servicio lo más rápido posible.'},
  {sec:2,tema:'Problemas',type:'mc',q:'Un mismo error se repite cada semana. ¿Qué práctica busca su causa raíz para eliminarlo?',
   opts:['Gestión de problemas','Gestión de incidentes','Gestión de cambios','Mesa de servicio'],a:0,
   why:'La gestión de problemas encuentra y elimina la causa raíz para que el error no vuelva.'},
  {sec:2,tema:'Cambios',type:'tf',q:'Verdadero o falso: La gestión de cambios controla las modificaciones para reducir riesgos.',
   opts:['Verdadero','Falso'],a:0,
   why:'Correcto: su fin es controlar las modificaciones para reducir riesgos.'},
  {sec:2,tema:'Mesa de servicio',type:'mc',q:'¿Qué es la mesa de servicio?',
   opts:['El punto único de contacto entre usuarios y TI','Un mueble de la oficina de TI','La práctica que elimina la causa raíz','Una certificación de ITIL'],a:0,
   why:'La mesa de servicio es el punto único de contacto entre los usuarios y el área de TI.'},
  {sec:2,tema:'Incidentes',type:'mc',q:'Se cae el correo y hay que ponerlo en marcha cuanto antes. ¿Qué práctica actúa primero?',
   opts:['Gestión de incidentes','Gestión de problemas','Gestión de cambios','Ninguna, se espera a que vuelva solo'],a:0,
   why:'Primero se restablece el servicio (incidentes). Luego, si se repite, entra problemas para hallar la causa raíz.'},
  {sec:3,tema:'ITIL',type:'mc',q:'¿Cuál es el primer nivel de certificación de ITIL?',
   opts:['Foundation','Master','Leader','Strategist'],a:0,
   why:'Las certificaciones ITIL son Foundation, Specialist, Strategist, Leader y Master. Foundation es la base.'},
  {sec:3,tema:'ISO 29119',type:'mc',q:'¿Qué es la ISO/IEC/IEEE 29119?',
   opts:['El estándar internacional de pruebas de software','Una certificación de ITIL','Un marco para gestionar servicios de TI','Una versión de ITIL 4'],a:0,
   why:'ISO/IEC/IEEE 29119 es el estándar internacional de pruebas de software.'},
  {sec:3,tema:'ISO 29119',type:'mc',q:'¿Cuántas partes tiene la ISO 29119?',
   opts:['5','3','7','10'],a:0,
   why:'Tiene 5 partes: conceptos, procesos, documentación, técnicas y keyword-driven.'},
  {sec:3,tema:'Diferencia',type:'mc',q:'¿Cuál es la diferencia principal entre ITIL e ISO 29119?',
   opts:['ITIL es un marco flexible para gestionar servicios de TI; ISO 29119 es una norma formal para probar software','ITIL es una norma formal de pruebas; ISO 29119 es un marco flexible de servicios','Las dos certifican empresas','No hay ninguna diferencia'],a:0,
   why:'ITIL gestiona servicios de TI y es flexible. ISO 29119 define cómo probar software y es una norma formal.'},
  {sec:3,tema:'Relación',type:'mc',q:'¿Cómo se complementan ITIL e ISO 29119?',
   opts:['La gestión de cambios y despliegues de ITIL exige que lo liberado esté probado, y 29119 aporta el cómo','ISO 29119 reemplaza a la gestión de cambios','ITIL define las pruebas y 29119 los incidentes','Se complementan al certificar empresas'],a:0,
   why:'ITIL exige que lo liberado esté probado y la ISO 29119 aporta el cómo hacerlo.'}
];

var app = document.getElementById('app');
var state = null;
var timerId = null;
var timedPref = false;

function h(tag, props){
  var e = document.createElement(tag);
  props = props || {};
  Object.keys(props).forEach(function(k){
    var v = props[k];
    if(k === 'class') e.className = v;
    else if(k === 'text') e.textContent = v;
    else if(k.indexOf('on') === 0) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  });
  for(var i = 2; i < arguments.length; i++){
    var kids = [].concat(arguments[i]);
    kids.forEach(function(c){
      if(c === null || c === undefined || c === false) return;
      e.append(c.nodeType ? c : document.createTextNode(c));
    });
  }
  return e;
}
function shuffle(a){
  a = a.slice();
  for(var i = a.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function shuffleNot(a){
  var s, n = 0;
  do { s = shuffle(a); n++; } while(n < 20 && s.every(function(x, i){ return x === a[i]; }));
  return s;
}
function getBest(){
  try { var v = localStorage.getItem('itilquiz-best'); return v ? parseInt(v, 10) || 0 : 0; } catch(e){ return 0; }
}
function setBest(n){
  try { localStorage.setItem('itilquiz-best', String(n)); } catch(e){}
}
var NAME_KEY = 'itilquiz-name', PLAYS_KEY = 'itilquiz-plays';
function getName(){ try { return localStorage.getItem(NAME_KEY) || ''; } catch(e){ return ''; } }
function setName(n){ try { localStorage.setItem(NAME_KEY, n); } catch(e){} }
var memPlays = [];
function dedupe(a){
  var seen = {}, out = [];
  a.forEach(function(p){ if(p && !seen[p.id]){ seen[p.id] = 1; out.push(p); } });
  return out;
}
function getPlays(){
  var st = [];
  try { var v = JSON.parse(localStorage.getItem(PLAYS_KEY) || '[]'); if(Array.isArray(v)) st = v; } catch(e){}
  return dedupe(st.concat(memPlays));
}
function savePlay(p){
  memPlays.push(p);
  var a = getPlays();
  if(a.length > 300) a = a.slice(a.length - 300);
  try { localStorage.setItem(PLAYS_KEY, JSON.stringify(a)); } catch(e){}
}
function clearPlays(){ memPlays = []; try { localStorage.removeItem(PLAYS_KEY); } catch(e){} }
function fmtDate(t){
  try { return new Date(t).toLocaleString('es', {day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'}); } catch(e){ return ''; }
}
/* ---------- base de datos compartida (solo la ve el dueño) ---------- */
var DB = null, UID = null, ADMIN = false, remote = [], screen = 'start', boardHi = null;
var cloudNote = 'Conectando con la base de datos…', cloudErr = '';
function initCloud(){
  try {
    if(!window.claude || !window.claude.use) return;
    Promise.all([window.claude.use('db'), window.claude.use('user')]).then(function(r){
      var U = r[1];
      if(!r[0] || !U){ cloudNote = 'Sin base de datos: abre la página con tu sesión de claude.ai. Se guardó solo en este dispositivo.'; setStat(); return; }
      return Promise.all([U.id(), U.canEdit()]).then(function(v){
        if(!v[0]){ cloudNote = 'Sin sesión de claude.ai: se guardó solo en este dispositivo.'; setStat(); return; }
        DB = r[0];
        cloudNote = 'ok'; setStat(); UID = v[0]; ADMIN = !!v[1];
        if(ADMIN){
          DB.collection('scores').onSnapshot(function(snap){
            remote = [];
            snap.docs.forEach(function(d){
              var x = d.data() || {};
              (x.plays || []).forEach(function(p){ remote.push({uid:d.id, name:p.name || x.name, score:p.score, ok:p.ok, total:p.total, timed:p.timed, t:p.t, id:p.id}); });
            });
            if(screen === 'board') renderBoard(boardHi);
          }, function(e){ cloudErr = 'No se pudo leer la base: ' + ((e && e.code) || 'error'); if(screen === 'board') renderBoard(boardHi); });
        }
        if(screen === 'start' && !document.getElementById('pname').value.trim()) renderStart();
      });
    }).catch(function(e){ cloudNote = 'No se pudo conectar con la base: ' + ((e && e.code) || 'error'); setStat(); });
  } catch(e){ cloudNote = 'No se pudo conectar con la base.'; }
}
function setStat(){ var el = document.getElementById('savestat'); if(el) el.textContent = statText(); }
function statText(){ return cloudNote === 'ok' ? (lastSave || 'Guardando en la base…') : cloudNote; }
var lastSave = '';
function saveRemote(p){
  if(!DB || !UID){ setStat(); return; }
  var ref = DB.doc('scores/' + UID);
  ref.get().then(function(snap){
    var d = snap.exists ? snap.data() : {};
    var plays = (d.plays || []).concat([{id:p.id, name:p.name, score:p.score, ok:p.ok, total:p.total, timed:p.timed, t:p.t}]).slice(-50);
    return ref.set({name:p.name, plays:plays});
  }).then(function(){ lastSave = 'Guardado en la base de datos ✓'; setStat(); }).catch(function(e){ lastSave = 'No se pudo guardar en la base (' + ((e && e.code) || 'error') + '). Quedó solo en este dispositivo.'; setStat(); });
}
function clearTimer(){ if(timerId){ clearInterval(timerId); timerId = null; } }
function focusEl(el){ if(el){ try { el.focus({preventScroll:false}); } catch(e){ el.focus(); } } }

/* ---------- start ---------- */
function renderStart(){
  clearTimer();
  window.scrollTo(0, 0);
  var chk = h('input', {type:'checkbox', id:'timed'});
  chk.checked = timedPref;
  chk.addEventListener('change', function(){ timedPref = chk.checked; });
  var best = getBest();
  var nameIn = h('input', {class:'input', id:'pname', type:'text', maxlength:'24', autocomplete:'nickname', placeholder:'Escribe tu nombre'});
  nameIn.value = getName();
  var startBtn = h('button', {class:'btn full', type:'button', text:'Empezar'});
  function sync(){ startBtn.disabled = !nameIn.value.trim(); }
  function go1(){ var n = nameIn.value.trim(); if(!n) return; setName(n); startGame(); }
  nameIn.addEventListener('input', sync);
  nameIn.addEventListener('keydown', function(e){ if(e.key === 'Enter') go1(); });
  startBtn.addEventListener('click', go1);
  sync();
  screen = 'start';
  var nPlays = ADMIN ? dedupe(remote.concat(getPlays())).length : getPlays().length;
  var title = h('h1', {text:'¿Quedó claro ITIL?', tabindex:'-1'});
  app.replaceChildren(
    h('div', {class:'stack'},
      title,
      h('p', {class:'lead', text:'24 preguntas sobre ITIL: historia, SVS, prácticas y certificaciones. Al final ves qué parte se entendió mejor y cuál toca repasar.'}),
      h('div', {class:'kinds'},
        h('span', {class:'kind', text:'Opción múltiple'}),
        h('span', {class:'kind', text:'Verdadero o falso'}),
        h('span', {class:'kind', text:'Ordenar'})
      ),
      h('label', {class:'checkrow', for:'timed'}, chk,
        h('span', {}, 'Con cronómetro', h('small', {text:'20 segundos por pregunta (45 en las de ordenar). Responder rápido da puntos extra.'}))
      ),
      h('div', {class:'field'}, h('label', {for:'pname', text:'¿Cómo te llamas?'}), nameIn),
      startBtn,
      (nPlays || ADMIN) ? h('button', {class:'btn ghost full', type:'button', text:(ADMIN ? 'Ver todos los jugadores' : 'Ver mis puntajes') + ' (' + nPlays + ')', onclick:function(){ renderBoard(null); }}) : null,
      best ? h('p', {class:'best', text:'Tu mejor puntaje en este dispositivo: ' + best}) : null
    )
  );
}

function startGame(){
  screen = 'game';
  state = {name:getName(), i:0, score:0, streak:0, res:[], timed:timedPref, locked:false, total:0, t0:0, onTimeout:null};
  go();
}

/* ---------- section intro ---------- */
function go(){
  var q = Q[state.i];
  if(state.i === 0 || Q[state.i - 1].sec !== q.sec) renderIntro(q.sec);
  else showQ();
}
function renderIntro(s){
  clearTimer();
  window.scrollTo(0, 0);
  var n = Q.filter(function(q){ return q.sec === s; }).length;
  var title = h('h2', {text:SECS[s], tabindex:'-1'});
  var btn = h('button', {class:'btn full', type:'button', text:'Empezar esta parte', onclick:showQ});
  app.replaceChildren(
    h('div', {id:'hd'}, header()),
    h('section', {class:'card stack'},
      h('span', {class:'slideref', text:SECSUB[s]}),
      title,
      h('p', {class:'lead', text:SECINTRO[s]}),
      h('p', {class:'best', text:n + ' preguntas en esta parte'}),
      btn
    )
  );
  focusEl(title);
}

/* ---------- header ---------- */
function header(){
  var segs = h('div', {class:'segs'});
  SECS.forEach(function(name, s){
    var idxs = [];
    Q.forEach(function(q, i){ if(q.sec === s) idxs.push(i); });
    var cells = h('div', {class:'cells'});
    idxs.forEach(function(i){
      var c = 'cell';
      if(i < state.res.length) c += state.res[i].ok ? ' ok' : ' bad';
      else if(i === state.i) c += ' cur';
      cells.append(h('span', {class:c}));
    });
    var seg = h('div', {class:'seg'}, cells, h('span', {class:'seglabel', text:name}));
    seg.style.flex = String(idxs.length);
    segs.append(seg);
  });
  var meta = h('div', {class:'meta'},
    h('span', {text:'Pregunta ' + Math.min(state.i + 1, Q.length) + ' de ' + Q.length}),
    state.streak >= 2 ? h('span', {class:'streak', text:'Racha de ' + state.streak}) : null,
    h('span', {text:state.score + ' puntos'})
  );
  return h('div', {class:'prog'}, segs, meta);
}
function refreshHeader(){
  var hd = document.getElementById('hd');
  if(hd) hd.replaceChildren(header());
}

/* ---------- question ---------- */
function showQ(){
  clearTimer();
  window.scrollTo(0, 0);
  var q = Q[state.i];
  state.locked = false;

  var ui = (q.type === 'order') ? orderUI(q) : choiceUI(q);
  state.onTimeout = ui.onTimeout;

  var heading = h('h2', {text:q.q, tabindex:'-1', id:'qh'});
  var card = h('section', {class:'card', 'aria-labelledby':'qh'},
    h('div', {class:'refs'}, q.slide ? h('span', {class:'slideref', text:'Diapositiva ' + q.slide}) : null, h('span', {class:'slideref', text:q.tema})),
    heading,
    q.type === 'order' ? h('p', {class:'hint', text:'Toca los elementos en el orden correcto. Toca uno ya puesto para quitarlo.'}) : null,
    ui.el
  );
  var fb = h('div', {id:'fb', 'aria-live':'polite'});

  var kids = [h('div', {id:'hd'}, header())];
  if(state.timed){
    kids.push(h('div', {class:'tbar', 'aria-hidden':'true'}, h('i', {id:'tfill'})));
  }
  kids.push(card, fb);
  app.replaceChildren.apply(app, kids);
  focusEl(heading);
  startTimer(q);
}

function startTimer(q){
  if(!state.timed) return;
  state.total = (q.type === 'order' ? 45 : 20) * 1000;
  state.t0 = Date.now();
  var fill = document.getElementById('tfill');
  timerId = setInterval(function(){
    var left = Math.max(0, state.total - (Date.now() - state.t0));
    if(fill) fill.style.width = (left / state.total * 100) + '%';
    if(left <= 0){
      clearTimer();
      if(!state.locked && state.onTimeout) state.onTimeout();
    }
  }, 100);
}

function choiceUI(q){
  var opts = q.opts.map(function(t, k){ return {t:t, ok:k === q.a}; });
  if(q.type === 'mc') opts = shuffle(opts);
  var list = h('div', {class:'opts', role:'group', 'aria-label':'Opciones de respuesta'});
  var btns = opts.map(function(o, n){
    var letter = q.type === 'tf' ? (n === 0 ? 'V' : 'F') : 'ABCD'.charAt(n);
    var b = h('button', {class:'opt', type:'button'}, h('span', {class:'optl'}, h('span', {class:'letter', 'aria-hidden':'true', text:letter}), h('span', {text:o.t})), h('span', {class:'mark', 'aria-hidden':'true'}));
    b.addEventListener('click', function(){ pick(o, b); });
    list.append(b);
    return {o:o, b:b};
  });
  function reveal(chosen){
    list.classList.add('done');
    btns.forEach(function(x){
      x.b.disabled = true;
      if(x.o.ok) x.b.classList.add('ok');
      else if(x.b === chosen) x.b.classList.add('bad');
    });
  }
  function pick(o, b){
    if(state.locked) return;
    reveal(b);
    finish(o.ok, false, o.ok ? null : 'Respuesta correcta: ' + q.opts[q.a]);
  }
  return {
    el:list,
    onTimeout:function(){ reveal(null); finish(false, true, 'Respuesta correcta: ' + q.opts[q.a]); }
  };
}

function orderUI(q){
  var pool_items = shuffleNot(q.items);
  var placed = [];
  var slots = h('ol', {class:'slots', 'aria-label':'Tu orden'});
  var pool = h('div', {class:'pool', role:'group', 'aria-label':'Elementos por ordenar'});
  var check = h('button', {class:'btn full', type:'button', text:'Comprobar'});
  check.disabled = true;
  var wrap = h('div', {}, slots, pool, h('div', {class:'orderact'}, check));

  function draw(){
    slots.replaceChildren();
    pool.replaceChildren();
    q.items.forEach(function(_, k){
      var it = placed[k];
      var li = h('li', {class:'slot' + (it ? ' filled' : '')});
      if(it){
        li.append(h('button', {class:'chip placed', type:'button', text:it,
          'aria-label':it + ', posición ' + (k + 1) + '. Toca para quitar',
          onclick:function(){ if(state.locked) return; placed.splice(k, 1); draw(); }}));
      } else {
        li.append(h('span', {class:'ph', text:'Posición ' + (k + 1)}));
      }
      slots.append(li);
    });
    pool_items.forEach(function(it){
      if(placed.indexOf(it) !== -1) return;
      pool.append(h('button', {class:'chip', type:'button', text:it,
        onclick:function(){ if(state.locked) return; placed.push(it); draw(); }}));
    });
    check.disabled = placed.length !== q.items.length;
  }
  function lock(){
    wrap.querySelectorAll('button').forEach(function(b){ b.disabled = true; });
    check.hidden = true;
    var lis = slots.querySelectorAll('.slot');
    q.items.forEach(function(it, k){
      if(!lis[k]) return;
      lis[k].classList.add(placed[k] === it ? 'ok' : 'bad');
    });
  }
  check.addEventListener('click', function(){
    if(state.locked || placed.length !== q.items.length) return;
    var ok = placed.every(function(x, k){ return x === q.items[k]; });
    lock();
    finish(ok, false, ok ? null : 'Orden correcto: ' + q.items.join(' → '));
  });
  draw();
  return {
    el:wrap,
    onTimeout:function(){
      // fill unplaced slots only for display of result, then lock
      lock();
      finish(false, true, 'Orden correcto: ' + q.items.join(' → '));
    }
  };
}

/* ---------- feedback ---------- */
function finish(ok, timedOut, extra){
  if(state.locked) return;
  state.locked = true;
  clearTimer();
  var q = Q[state.i];
  var pts = 0;
  if(ok){
    pts = 100 + Math.min(state.streak, 5) * 10;
    if(state.timed){
      var left = Math.max(0, state.total - (Date.now() - state.t0));
      pts += Math.round(50 * left / state.total);
    }
    state.streak++;
  } else {
    state.streak = 0;
  }
  state.score += pts;
  state.res.push({ok:ok, q:q});
  refreshHeader();

  var last = state.i === Q.length - 1;
  var next = h('button', {class:'btn full', type:'button', text:last ? 'Ver resultados' : 'Siguiente pregunta',
    onclick:function(){
      if(last){ renderResults(); }
      else { state.i++; go(); }
    }});
  var title = ok ? '¡Correcto! +' + pts : (timedOut ? 'Se acabó el tiempo' : 'Esta no');
  var fb = document.getElementById('fb');
  fb.replaceChildren(
    h('div', {class:'fb ' + (ok ? 'good' : 'miss')},
      h('strong', {text:title}),
      extra ? h('p', {text:extra}) : null,
      h('p', {text:q.why}),
      next
    )
  );
  focusEl(next);
}

/* ---------- board ---------- */
function renderBoard(hiId){
  clearTimer();
  window.scrollTo(0, 0);
  screen = 'board'; boardHi = hiId;
  var ids = {}; remote.forEach(function(r){ ids[r.id] = 1; });
  var plays = (ADMIN ? remote.concat(getPlays().filter(function(l){ return !ids[l.id]; })) : getPlays()).slice().sort(function(a, b){ return b.score - a.score || b.t - a.t; });
  var names = {};
  plays.forEach(function(p){ names[(p.uid || p.name).toLowerCase()] = 1; });
  var title = h('h2', {text:ADMIN ? 'Todos los jugadores' : 'Mis puntajes', tabindex:'-1'});
  var list = h('ol', {class:'plist'});
  plays.forEach(function(p, k){
    var cls = 'prow' + (p.id === hiId ? ' me' : '') + (k === 0 ? ' top1' : '');
    list.append(h('li', {class:cls},
      h('span', {class:'pos', text:String(k + 1)}),
      h('div', {},
        h('div', {class:'pname', text:p.name}),
        h('div', {class:'psub', text:p.ok + ' de ' + p.total + ' correctas' + (p.timed ? ' · cronómetro' : '') + ' · ' + fmtDate(p.t)})
      ),
      h('span', {class:'pscore', text:p.score + ' pts'})
    ));
  });
  var clr = h('button', {class:'btn danger', type:'button', text:'Borrar historial', onclick:function(){
    if(confirm('¿Borrar todos los puntajes guardados en este dispositivo?')){ clearPlays(); renderStart(); }
  }});
  app.replaceChildren(
    h('div', {class:'stack'},
      title,
      h('p', {class:'best', text:plays.length ? (Object.keys(names).length + ' jugador(es) · ' + plays.length + ' partida(s)' + (ADMIN ? ' de todos los jugadores' : ' guardadas en este dispositivo')) : 'Todavía no hay partidas guardadas.'}),
      cloudErr && ADMIN ? h('p', {class:'best', text:cloudErr}) : null,
      plays.length ? list : null,
      h('div', {class:'actions'},
        h('button', {class:'btn', type:'button', text:'Jugar', onclick:renderStart}),
        (plays.length && !ADMIN) ? clr : null
      )
    )
  );
  focusEl(title);
}

/* ---------- results ---------- */
function renderResults(){
  clearTimer();
  window.scrollTo(0, 0);
  var total = Q.length;
  var okN = state.res.filter(function(r){ return r.ok; }).length;
  var prev = getBest();
  var playId = Date.now();
  var play = {id:playId, name:state.name, score:state.score, ok:okN, total:total, timed:state.timed, t:playId};
  savePlay(play);
  saveRemote(play);
  var isBest = state.score > prev;
  if(isBest) setBest(state.score);

  var stats = SECS.map(function(name, s){
    var rs = state.res.filter(function(r){ return r.q.sec === s; });
    var o = rs.filter(function(r){ return r.ok; }).length;
    return {name:name, sub:SECSUB[s], o:o, n:rs.length};
  });
  var worst = stats.slice().sort(function(a, b){ return (a.o / a.n) - (b.o / b.n); })[0];

  var ratio = okN / total;
  var verdict = ratio >= 0.85 ? 'ITIL quedó clarísimo.' : (ratio >= 0.6 ? 'Se entendió lo principal.' : 'Toca repasar un poco.');
  var advice = (worst.o < worst.n)
    ? 'La parte que menos se entendió fue «' + worst.name + '» (' + worst.sub.toLowerCase() + ').'
    : 'Las tres partes de la exposición quedaron claras.';

  var rows = h('div', {class:'rows'});
  stats.forEach(function(s){
    var pct = Math.round(s.o / s.n * 100);
    var fill = h('i');
    fill.style.width = '0%';
    rows.append(h('div', {class:'row'},
      h('div', {class:'top'},
        h('span', {}, h('strong', {text:s.name}), ' ', h('span', {class:'sub', text:s.sub})),
        h('strong', {text:s.o + ' de ' + s.n})
      ),
      h('div', {class:'track', role:'img', 'aria-label':s.name + ': ' + pct + '% correcto'}, fill)
    ));
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ fill.style.width = pct + '%'; }); });
  });

  var missed = state.res.filter(function(r){ return !r.ok; });
  var missedBox = null;
  if(missed.length){
    missedBox = h('details', {},
      h('summary', {text:'Repasar lo que fallaste (' + missed.length + ')'}),
      missed.map(function(r){
        var q = r.q;
        var ans = q.type === 'order' ? q.items.join(' → ') : q.opts[q.a];
        return h('div', {class:'miss-item'},
          h('p', {class:'q', text:q.q}),
          h('p', {class:'a', text:'Respuesta: ' + ans}),
          h('p', {class:'w', text:q.why + (q.slide ? ' (Diapositiva ' + q.slide + ')' : '')})
        );
      })
    );
  }

  var title = h('h2', {text:verdict, tabindex:'-1'});
  app.replaceChildren(
    h('div', {class:'stack'},
      h('div', {},
        h('p', {class:'who'}, 'Jugador: ', h('strong', {text:state.name})),
        h('p', {class:'who', id:'savestat', text:statText()}),
        h('div', {class:'score'}, String(okN), h('small', {text:'de ' + total + ' correctas'})),
        h('p', {class:'best', text:state.score + ' puntos' + (state.timed ? ' con cronómetro' : '')}),
        isBest && state.score > 0 ? h('span', {class:'badge', text:'Nuevo récord'}) : null
      ),
      title,
      h('p', {class:'lead', text:advice}),
      h('h3', {text:'Cómo te fue en cada parte'}),
      rows,
      missedBox,
      h('a', {class:'btn full', target:'_blank', rel:'noopener noreferrer', text:'Enviar mi resultado al formulario',
        href:'https://docs.google.com/forms/d/e/1FAIpQLScn1GQmyihOECwK0yBxpJ1Yc5ETdQedlryeMcucP4oszoUi2A/viewform?usp=pp_url&entry.1692733594=' + encodeURIComponent(state.name) + '&entry.1097000086=' + state.score}),
      h('p', {class:'best', text:'Se abre el formulario con tu nombre y puntaje ya escritos. Toca «Enviar» ahí para registrarlo.'}),
      h('div', {class:'actions'},
        h('button', {class:'btn', type:'button', text:'Jugar otra vez', onclick:startGame}),
        h('button', {class:'btn ghost', type:'button', text:'Ver todos los puntajes', onclick:function(){ renderBoard(playId); }}),
        h('button', {class:'btn ghost', type:'button', text:'Volver al inicio', onclick:renderStart})
      )
    )
  );
  focusEl(title);
}

renderStart();
initCloud();
})();
