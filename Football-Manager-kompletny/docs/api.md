# Dokumentacja API REST

Adres bazowy: `http://localhost:3000`. Żądania z body wysyłają `Content-Type: application/json`.

| Metoda | Endpoint | Opis | Sukces |
|---|---|---|---|
| GET | `/api/players` | Lista zawodników | 200 JSON |
| POST | `/api/players` | Dodanie zawodnika | 201 JSON |
| PUT | `/api/players/:id` | Aktualizacja zawodnika | 200 JSON |
| DELETE | `/api/players/:id` | Usunięcie zawodnika | 204 |
| GET | `/api/matches` | Lista meczów | 200 JSON |
| POST | `/api/matches` | Dodanie meczu | 201 JSON |
| PUT | `/api/matches/:id` | Aktualizacja meczu | 200 JSON |
| DELETE | `/api/matches/:id` | Usunięcie meczu | 204 |
| GET | `/api/stats` | Statystyki zbiorcze | 200 JSON |

## Przykłady
Dodanie zawodnika:
```json
{"name":"Jan Kowalski","number":12,"position":"Napastnik","goals":2,"assists":1,"appearances":4}
```
Dodanie meczu:
```json
{"opponent":"FC Przykład","match_date":"2026-12-10","match_time":"18:00","location":"Stadion Miejski","result":"-"}
```

Błędy zwracają JSON w formacie `{"error":"opis"}`. Najważniejsze kody: 400 — nieprawidłowe dane, 404 — nie znaleziono rekordu lub endpointu, 409 — konflikt unikalnego numeru koszulki.
