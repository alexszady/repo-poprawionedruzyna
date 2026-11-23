# Diagram sekwencji — Przeglądaj statystyki

```mermaid
sequenceDiagram
    actor U as Użytkownik
    participant B as Przeglądarka
    participant S as Express API
    database D as SQLite
    U->>B: Przeglądaj statystyki
    B->>S: GET /api/stats
    S->>S: Walidacja żądania
    S->>D: Wykonaj zapytanie SQL
    D-->>S: Wynik operacji
    S-->>B: Odpowiedź JSON / 204
    B-->>U: Odświeżony widok i potwierdzenie
```
