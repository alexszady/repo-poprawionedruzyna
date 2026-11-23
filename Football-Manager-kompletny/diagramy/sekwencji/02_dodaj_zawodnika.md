# Diagram sekwencji — Dodaj zawodnika

```mermaid
sequenceDiagram
    actor U as Użytkownik
    participant B as Przeglądarka
    participant S as Express API
    database D as SQLite
    U->>B: Dodaj zawodnika
    B->>S: POST /api/players + dane
    S->>S: Walidacja żądania
    S->>D: Wykonaj zapytanie SQL
    D-->>S: Wynik operacji
    S-->>B: Odpowiedź JSON / 204
    B-->>U: Odświeżony widok i potwierdzenie
```
