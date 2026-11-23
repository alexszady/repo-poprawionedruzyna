# Usuń zawodnika

```mermaid
flowchart TD
  A((Start))
  N1["Kliknij Usuń"]
  N2["Potwierdź usunięcie"]
  N3["Wyślij DELETE /api/players/id"]
  N4["Usuń rekord z SQLite"]
  N5["Odśwież listę"]
  Z((Koniec))
  A --> N1
  N1 --> N2
  N2 --> N3
  N3 --> N4
  N4 --> N5
  N5 --> Z
```
