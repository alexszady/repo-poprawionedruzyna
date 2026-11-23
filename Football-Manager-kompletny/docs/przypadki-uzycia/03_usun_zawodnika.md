# Usuń zawodnika

- **Aktor główny:** Użytkownik aplikacji WWW.
- **Warunek wstępny:** Serwer działa, a użytkownik otworzył aplikację.
- **Scenariusz podstawowy:** Użytkownik wybiera odpowiednią sekcję; przeglądarka wysyła żądanie do API; serwer pobiera dane z SQLite; aplikacja prezentuje wynik.
- **Scenariusz alternatywny:** Gdy nie ma danych, aplikacja wyświetla informację o pustej liście. Gdy wystąpi błąd API, wyświetlany jest komunikat.
- **Warunek końcowy:** Dane są wyświetlone; operacja odczytu nie zmienia bazy.

Szczegóły specyficzne: **Usuń zawodnika** — przypadek dotyczy danych zawodników, meczów lub statystyk zgodnie z nazwą pliku.
