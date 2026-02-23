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
| Any aproximat | Dona rang de 10 anys | -100 |
| Direccio cardinal | "Mes al nord/sud/est/oest" respecte del teu clic | -60 |

### Regles
- Cost acumulatiu: si demanes 3 pistes, es resten totes.
- Puntuacio minima per ronda: 0 (mai negativa).
- Les pistes no es poden desfer.
- En mode dificil, limitar a 1 pista maxima.

## 2) Nivells de dificultat

### Facil
- Zoom inicial mes proper a Catalunya.
- Tolerancia de distancia mes alta.
- Fins a 3 pistes per ronda.
- Puntuacio bonus per encertar municipi.

### Mitja
- Configuracio actual + 2 pistes max.
- Penalitzacio normal.

### Dificil
- Sense ortofoto per defecte.
- Nomes 1 pista o cap.
- Corba de puntuacio mes estricta.
- Temps limitat per ronda (ex: 45s).

## 3) Nous modes de joc

### Mode Municipi
- Objectiu: encertar el municipi correcte.
- Punts per encert binari + bonus per rapidesa.

### Mode Ubicacio exacta
- Objectiu actual: clic el mes proper possible.
- Punts per distancia.

### Mode Cronologia
- Objectiu doble: ubicacio + any de la foto.
- Subpuntuacions:
  - Punts espai (distancia)
  - Punts temps (error d'any)

### Mode Mixt
- 10 rondes combinant aleatoriament: municipi, ubicacio exacta i cronologia.

### Mode Entrenament
- Sense limits ni classificacio.
- Feedback immediat i explicacions educatives.

## 4) Sistema de puntuacio recomanat

Puntuacio final de ronda = max(0, punts_distancia + punts_temps + bonus - penalitzacions_pistes)

- punts_distancia: formula actual (ajustada per dificultat)
- punts_temps: per exemple `max(0, 300 - 10 * abs(any_real - any_jugador))`
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
- Etiquetes de dificultat al selector de mode.
- Pantalla de resultat separant clarament:
  - Punts guanyats
  - Punts perduts per pistes
- Tooltips explicant com es calcula cada puntuacio.

## 7) Dades i contingut

- Marcar cada foto amb camps extres a `figures.json`:
  - `municipi`
  - `comarca`
  - `dificultat_estimada`
  - `rang_any` (si no hi ha any exacte)
- Validar completitud de metadades abans de publicar.

## 8) Full de ruta (MVP -> V2)

### MVP (rapida implementacio)
- Pistes: municipi + comarca + ortofoto
- 3 nivells de dificultat
- Mode Municipi i Mode Ubicacio exacta

### V1
- Mode Cronologia
- Puntuacio combinada (espai + temps)
- Estadistiques basiques

### V2
- Insignies i ratxes
- Ranquing setmanal
- Reptes tematics (ex: "Pirineu", "Costa", "Barcelona 1900-1950")

## 9) Decisions a tancar

- Penalitzacions exactes de cada pista
- Si el mode dificil permet pistes o no
- Pes relatiu de distancia vs any en mode Cronologia
- Si el ranquing ha de ser local o online
