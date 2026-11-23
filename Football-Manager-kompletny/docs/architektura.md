# Architektura systemu

Aplikacja ma architekturę klient–serwer. Przeglądarka pobiera `index.html`, `style.css` i `script.js` z serwera Express. Skrypt frontendowy wywołuje endpointy `/api/*` przez HTTP i wymienia JSON. Serwer waliduje dane, wykonuje zapytania SQL przez `better-sqlite3` i zwraca odpowiedź. Dane są trwale przechowywane w `database.db`.

## Warstwy
- **Prezentacja:** HTML5 i CSS3; cztery widoki: Przegląd, Zawodnicy, Terminarz, Klasyfikacja strzelców.
- **Logika klienta:** `script.js`; pobieranie danych, obsługa formularzy, renderowanie tabel i potwierdzenia usuwania.
- **API / logika serwera:** `server.js`; walidacja, kody HTTP, operacje CRUD.
- **Dane:** SQLite; tabele `players` i `matches`.

## Struktura
```text
Football-Manager-kompletny/
├── index.html, style.css, script.js
├── server.js, package.json
├── database.db (generowana lokalnie)
├── docs/
├── diagramy/
└── tests/
```
