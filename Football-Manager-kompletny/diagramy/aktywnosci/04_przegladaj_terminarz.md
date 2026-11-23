# Przeglądaj terminarz

```mermaid
flowchart TD
  A((Start))
  N1["Otwórz sekcję Terminarz"]
  N2["Wyślij GET /api/matches"]
  N3["Pobierz mecze z SQLite"]
  N4["Wyświetl terminarz"]
  Z((Koniec))
  A --> N1
  N1 --> N2
  N2 --> N3
  N3 --> N4
  N4 --> Z
```
