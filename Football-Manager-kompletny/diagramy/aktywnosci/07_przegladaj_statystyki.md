# Przeglądaj statystyki i ranking

```mermaid
flowchart TD
  A((Start))
  N1["Otwórz dashboard lub ranking"]
  N2["Wyślij GET /api/stats lub GET /api/players"]
  N3["Oblicz / posortuj statystyki"]
  N4["Wyświetl wyniki"]
  Z((Koniec))
  A --> N1
  N1 --> N2
  N2 --> N3
  N3 --> N4
  N4 --> Z
```
