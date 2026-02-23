# Brainstorm de millores

## Objectiu
Convertir Carto Guesser en un joc amb mes rejugabilitat, mes profunditat i diferents perfils de jugador (casual, competitiu, educatiu).

## 1) Sistema de pistes amb penalitzacio

### Proposta base
Cada ronda permet demanar pistes opcionals. Cada pista resta punts de la ronda.

| Pista | Efecte | Cost recomanat |
|---|---|---|
| Municipi | Mostra el municipi correcte | -200 |
| Comarca | Mostra la comarca | -120 |
| Ortofoto historica | Activa capa ortofoto al mapa | -100 |
| Any aproximat | Dona rang de 10 anys (si existeix any) | -100 |
| Direccio cardinal | "Mes al nord/sud/est/oest" respecte del teu clic | -60 |

### Regles
- Cost acumulatiu: si demanes 3 pistes, es resten totes.
- Puntuacio minima per ronda: 0 (mai negativa).
- Les pistes no es poden desfer.
- En imatges classificades com a "dificils", limitar el nombre de pistes.

## 2) Dificultat basada en la imatge

La dificultat no ha de ser un selector global de partida, sino una propietat de cada fotografia.

### Criteri
- **Facil**: monuments o llocs molt reconeixibles (ex: Sagrada Familia).
- **Mitja**: entorns coneguts pero menys evidents.
- **Dificil**: ermites, masies o paisatges rurals poc distintius.

### Impacte en gameplay
- Ajustar puntuacio esperada segons dificultat (mes recompensa en imatges dificils).
- Ajustar nombre/cost de pistes segons dificultat.
- Mostrar dificultat al final de ronda per contextualitzar el resultat.

## 3) Nous modes de joc

### Mode Municipi
- Objectiu: encertar el municipi correcte.
- Punts per encert binari + bonus per rapidesa.

### Mode Ubicacio exacta
- Objectiu actual: clic el mes proper possible.
- Punts per distancia.

### Mode Cronologia
- Objectiu doble: ubicacio + any de la foto.
- IMPORTANT: aquest mode nomes ha d'incloure imatges amb camp `any_foto` informat.
- Si una foto no te any, queda exclosa automaticament del pool.

### Mode Tematic
- Partides filtrades per coleccions:
  - Costa
  - Pirineu
  - Monuments
  - Altres categories futures

### Mode Ortofoto Historica
- Endevinar el municipi a partir d'una ortofoto antiga.
- Despres de respondre, mostrar comparativa visual:
  - ortofoto antiga
  - ortofoto actual
- Puntuar encert de municipi + bonus per rapidesa.

### Mode Mixt
- Rodes combinant aleatoriament modes compatibles.

### Mode Entrenament
- Sense limits ni classificacio.
- Feedback immediat i explicacions educatives.

## 4) Sistema de puntuacio recomanat

Puntuacio final de ronda = max(0, punts_distancia + punts_temps + bonus_dificultat + bonus - penalitzacions_pistes)

- punts_distancia: formula actual (o adaptada al mode)
- punts_temps: per exemple `max(0, 300 - 10 * abs(any_real - any_jugador))` (nomes en mode Cronologia)
- bonus_dificultat:
  - Facil: +0
  - Mitja: +75
  - Dificil: +150
- bonus:
  - +50 sense pistes
  - +50 resposta en menys de 15s

## 5) Progressio i motivacio

- Ratxes diaries (streak)
- Insignies: "Sense pistes", "Toponim expert", "Cronologista"
- Estadistiques personals:
  - Error mig en km
  - Error mig en anys
  - Percentatge d'encert de municipi
- Ranquing setmanal (opcional)

## 6) UX/UI

- Boton "Demanar pista" amb cost visible abans de confirmar.
- Selector de mode de joc amb descripcio curta de cada mode.
- Etiquetes de dificultat de cada imatge a pantalla de resultat.
- Pantalla de resultat separant clarament:
  - Punts guanyats
  - Punts perduts per pistes
- En mode Ortofoto Historica: slider comparatiu antiga/actual.

## 7) Dades i contingut

- Marcar cada foto amb camps extres a `figures.json`:
  - `municipi`
  - `comarca`
  - `dificultat_estimada` (`facil`, `mitja`, `dificil`)
  - `tema` (ex: `costa`, `pirineu`, `monuments`)
  - `rang_any` (si no hi ha any exacte)
- Validar completitud de metadades abans de publicar.
- Definir quines imatges tenen any fiable per habilitar Mode Cronologia.

## 8) Full de ruta (MVP -> V2)

### MVP (rapida implementacio)
- Dificultat per imatge (`dificultat_estimada`)
- Pistes: municipi + comarca + ortofoto
- Mode Municipi i Mode Ubicacio exacta
- Mode Tematic basic (costa, pirineu, monuments)

### V1
- Mode Cronologia (nomes amb imatges amb any)
- Puntuacio combinada (espai + temps + dificultat)
- Estadistiques basiques

### V2
- Mode Ortofoto Historica amb comparativa antiga/actual
- Insignies i ratxes
- Ranquing setmanal

## 9) Decisions a tancar

- Criteri objectiu per etiquetar `dificultat_estimada`
- Penalitzacions exactes de cada pista segons dificultat
- Pes relatiu de distancia vs any en mode Cronologia
- Com definir i mantenir els `temes` (taxonomia tancada o oberta)
- Si el ranquing ha de ser local o online
