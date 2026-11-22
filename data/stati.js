// ============================================================
//  STATI — etichette, colori e regione degli stati di RULERS
//  regione: la riga della linea del tempo (nomi di REGIONAL_PERIODS)
//  Usato da index.html (pannello sovrani, linea del tempo) e ripasso.html
// ============================================================
var STATO_INFO = {
  egitto:         { label:"Egitto",               colore:"#f1c40f", regione:"Egitto" },
  ittiti:         { label:"Ittiti",               colore:"#a0522d", regione:"Anatolia" },
  assiria:        { label:"Assiria",              colore:"#c07030", regione:"Alta Mesopotamia" },
  babilonia:      { label:"Babilonia",            colore:"#8e44ad", regione:"Bassa Mesopotamia" },
  mitanni:        { label:"Mittani",              colore:"#16a085", regione:"Alta Mesopotamia" },
  ugarit:         { label:"Ugarit",               colore:"#c8a000", regione:"Siria e Levante" },
  elam:           { label:"Elam",                 colore:"#e74c3c", regione:"Bassa Mesopotamia" },
  karkemish:      { label:"Karkemish",            colore:"#795548", regione:"Siria e Levante" },
  urartu:         { label:"Urartu",               colore:"#9b59b6", regione:"Alta Mesopotamia" },
  tiro:           { label:"Tiro",                 colore:"#e67e22", regione:"Siria e Levante" },
  biblo:          { label:"Biblo",                colore:"#f39c12", regione:"Siria e Levante" },
  damasco:        { label:"Damasco",              colore:"#27ae60", regione:"Siria e Levante" },
  samal:          { label:"Sam'al",               colore:"#2ecc71", regione:"Siria e Levante" },
  israele_unito:  { label:"Israele unito",        colore:"#3498db", regione:"Siria e Levante" },
  israele:        { label:"Israele (Nord)",       colore:"#2980b9", regione:"Siria e Levante" },
  giuda:          { label:"Giuda (Sud)",          colore:"#1abc9c", regione:"Siria e Levante" },
  moab:           { label:"Moab",                 colore:"#95a5a6", regione:"Siria e Levante" },
  edom:           { label:"Edom",                 colore:"#7f8c8d", regione:"Siria e Levante" },
  akkad:          { label:"Akkad",                colore:"#c0392b", regione:"Bassa Mesopotamia" },
  ur:             { label:"Ur III",               colore:"#b07cc6", regione:"Bassa Mesopotamia" },
  hyksos:         { label:"Hyksos",               colore:"#c9a227", regione:"Egitto" },
  patina:         { label:"Patina (Kunulua)",     colore:"#8d6e63", regione:"Siria e Levante" },
  amurru:         { label:"Amurru",               colore:"#b8a040", regione:"Siria e Levante" },
  anatolia_occ:   { label:"Anatolia occidentale", colore:"#b5651d", regione:"Anatolia" },
  persiana:       { label:"Persia achemenide",    colore:"#1abc9c", regione:"Persia" }
};

// Parentela da mostrare nella scheda di un sovrano: il testo libero, se c'è,
// altrimenti "Figlio di <padre>".
function rulerKin(r) {
  if (r.parentela) return r.parentela;
  if (r.padre) return "Figlio di " + r.padre;
  return "";
}
