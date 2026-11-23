# Aktorzy i granice systemu

## Aktorzy
1. **Użytkownik aplikacji WWW** — przegląda statystyki, zawodników, terminarz i ranking; dodaje oraz usuwa zawodników i mecze.
2. **Klient REST API** — zewnętrzny program lub narzędzie wysyłające żądania HTTP. Może wykonywać operacje odczytu, dodawania, aktualizacji i usuwania udostępnione przez API.

## Ograniczenia
- System nie posiada logowania ani autoryzacji. Nie ma podstaw do rozdzielania ról administratora i zwykłego użytkownika.
- Edycja zawodnika i meczu jest dostępna przez endpointy PUT, ale nie ma formularzy edycji w interfejsie WWW.
- Baza SQLite jest lokalnym plikiem tworzonym automatycznie przy starcie serwera.
