# Wymagania systemu Football Manager

## Cel i zakres
Aplikacja służy do ewidencji kadry drużyny piłkarskiej, zapisywania terminarza spotkań oraz prezentowania podstawowych statystyk i rankingu strzelców. System obejmuje interfejs WWW, API REST i lokalną bazę SQLite. Nie obejmuje logowania, uprawnień, transferów, treningów ani automatycznego pobierania wyników.

## Wymagania funkcjonalne
| ID | Wymaganie | Interfejs / API |
|---|---|---|
| WF-01 | System wyświetla liczbę zawodników, gole, asysty i liczbę meczów. | WWW / API |
| WF-02 | System wyświetla listę zawodników z numerem, pozycją i statystykami. | WWW |
| WF-03 | Użytkownik może dodać zawodnika z wymaganymi danymi. | WWW / POST API |
| WF-04 | Użytkownik może usunąć zawodnika. | WWW / DELETE API |
| WF-05 | Klient API może zaktualizować dane zawodnika. | PUT API |
| WF-06 | System wyświetla terminarz spotkań z datą, godziną, miejscem i wynikiem. | WWW |
| WF-07 | Użytkownik może dodać mecz do terminarza. | WWW / POST API |
| WF-08 | Użytkownik może usunąć mecz. | WWW / DELETE API |
| WF-09 | Klient API może zaktualizować dane meczu. | PUT API |
| WF-10 | System prezentuje ranking strzelców malejąco według liczby goli. | WWW |
| WF-11 | System waliduje dane wejściowe i zwraca komunikat błędu dla niepoprawnych danych. | WWW / API |
| WF-12 | System zapisuje dane w bazie SQLite i odczytuje je po ponownym uruchomieniu. | API / baza |

## Wymagania niefunkcjonalne
| ID | Wymaganie |
|---|---|
| WNF-01 | Aplikacja działa w nowoczesnej przeglądarce obsługującej HTML5, CSS i JavaScript. |
| WNF-02 | Serwer wymaga Node.js w wersji 18 lub nowszej. |
| WNF-03 | Dane są przechowywane lokalnie w SQLite. |
| WNF-04 | API przesyła i odbiera dane w formacie JSON. |
| WNF-05 | Interfejs dostosowuje układ do mniejszych ekranów. |
| WNF-06 | Dane tekstowe wyświetlane w tabelach są kodowane przed wstawieniem do HTML. |
| WNF-07 | Baza danych nie jest dołączana do repozytorium. |

## Reguły walidacji
- Numer koszulki jest liczbą całkowitą od 1 do 99 i jest unikalny.
- Pozycja należy do: Bramkarz, Obrońca, Pomocnik, Napastnik.
- Gole, asysty i występy są nieujemnymi liczbami całkowitymi.
- Nazwa zawodnika i przeciwnika nie mogą być puste.
- Data meczu musi mieć format RRRR-MM-DD; godzina, jeśli podana, ma format GG:MM.
- Brak uwierzytelniania oznacza, że aplikacja nie rozróżnia ról użytkowników.
