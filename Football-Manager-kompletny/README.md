# Football Manager — system zarządzania drużyną piłkarską

Aplikacja internetowa do ewidencji zawodników, prezentowania statystyk, prowadzenia terminarza spotkań i wyświetlania tabeli strzelców.

## Technologie
HTML5, CSS3, JavaScript, Node.js 18+, Express.js i SQLite (`better-sqlite3`).

## Uruchomienie
```bash
npm install
npm start
```
Otwórz `http://localhost:3000`. Baza `database.db` oraz tabele tworzą się automatycznie. Przykładowi zawodnicy są dodawani tylko wtedy, gdy tabela zawodników jest pusta.

## Funkcje interfejsu
- Dashboard: liczba zawodników, gole, asysty i mecze.
- Zawodnicy: wyświetlanie, dodawanie i usuwanie.
- Terminarz: wyświetlanie, dodawanie i usuwanie meczów.
- Strzelcy: ranking według liczby goli.

Backend udostępnia ponadto endpointy `PUT` do aktualizacji zawodnika i meczu, ale aktualny interfejs WWW nie ma formularzy edycji.

## API
| Metoda | Endpoint | Działanie |
|---|---|---|
| GET | `/api/players` | Lista zawodników |
| POST | `/api/players` | Dodanie zawodnika |
| PUT | `/api/players/:id` | Aktualizacja zawodnika (API) |
| DELETE | `/api/players/:id` | Usunięcie zawodnika |
| GET | `/api/matches` | Lista meczów |
| POST | `/api/matches` | Dodanie meczu |
| PUT | `/api/matches/:id` | Aktualizacja meczu (API) |
| DELETE | `/api/matches/:id` | Usunięcie meczu |
| GET | `/api/stats` | Statystyki zbiorcze |

## Dokumentacja i diagramy
- `docs/wymagania.md` — wymagania funkcjonalne i niefunkcjonalne.
- `docs/aktorzy.md` — aktorzy i ograniczenia ról.
- `docs/przypadki-uzycia/` — scenariusze przypadków użycia.
- `docs/architektura.md`, `docs/instalacja.md`, `docs/instrukcja-uzytkownika.md`, `docs/api.md`, `docs/testy.md`.
- `diagramy/` — diagram przypadków użycia, aktywności, sekwencji, klas/modułów i ERD.

## Struktura
`server.js` — backend i API; `index.html`, `style.css`, `script.js` — frontend; `database.db` — lokalna baza generowana przy uruchomieniu.

Nie dodawaj do repozytorium `node_modules/` ani lokalnego pliku `database.db`. Szczegóły: `INSTRUKCJA-ODDANIA.md`.
