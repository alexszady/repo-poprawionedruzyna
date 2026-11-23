# Diagram sekwencji — Przeglądaj zawodników

```mermaid
sequenceDiagram
    actor U as Użytkownik
    participant B as Przeglądarka
    participant S as Express API
    database D as SQLite
    U->>B: Przeglądaj zawodników
    B->>S: GET /api/players
    S->>S: Walidacja żądania
    S->>D: Wykonaj zapytanie SQL
    D-->>S: Wynik operacji
    S-->>B: Odpowiedź JSON / 204
    B-->>U: Odświeżony widok i potwierdzenie
```
