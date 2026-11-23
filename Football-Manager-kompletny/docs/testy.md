# Plan testów i protokół wyników

**Środowisko do uzupełnienia po uruchomieniu:** system operacyjny: ______; Node.js: ______; przeglądarka: ______; data: ______.

| ID | Test | Kroki / dane | Oczekiwany rezultat | Wynik rzeczywisty | Status |
|---|---|---|---|---|---|
| T-01 | Uruchomienie | `npm install`, `npm start`, wejście na localhost:3000 | Widoczny dashboard bez błędu serwera | Do wykonania | ☐ |
| T-02 | Lista zawodników | Otwórz Zawodnicy | Tabela pokazuje dane z bazy | Do wykonania | ☐ |
| T-03 | Dodanie zawodnika | Dodaj gracza z numerem 22 | Nowy wiersz pojawia się na liście | Do wykonania | ☐ |
| T-04 | Walidacja zawodnika | Spróbuj dodać pustą nazwę lub numer 0 | Formularz/API zwraca komunikat błędu | Do wykonania | ☐ |
| T-05 | Unikalny numer | Dodaj dwóch graczy z tym samym numerem | Drugi zapis zostaje odrzucony | Do wykonania | ☐ |
| T-06 | Usuwanie zawodnika | Usuń dodanego gracza | Rekord znika z listy | Do wykonania | ☐ |
| T-07 | Dodanie meczu | Dodaj przeciwnika i poprawną datę | Mecz pojawia się w terminarzu | Do wykonania | ☐ |
| T-08 | Walidacja meczu | Wyślij datę w złym formacie | API zwraca 400 | Do wykonania | ☐ |
| T-09 | Usuwanie meczu | Usuń dodany mecz | Mecz znika z terminarza | Do wykonania | ☐ |
| T-10 | Ranking | Dodaj graczy z różną liczbą goli | Ranking sortuje malejąco | Do wykonania | ☐ |
| T-11 | Statystyki | Dodaj/usuń zawodnika i mecz | Dashboard odzwierciedla aktualne dane | Do wykonania | ☐ |
| T-12 | Trwałość | Zapisz rekord, zrestartuj serwer | Rekord pozostaje w SQLite | Do wykonania | ☐ |

**Uwaga:** nie zaznaczaj testów jako zaliczonych, dopóki nie zostaną wykonane ręcznie.
