# Instalacja i uruchomienie

## Wymagania
- Node.js 18 lub nowszy oraz npm.
- System Windows, Linux lub macOS.

## Uruchomienie
1. Otwórz terminal w katalogu projektu.
2. Wykonaj `npm install`.
3. Wykonaj `npm start`.
4. Otwórz `http://localhost:3000`.

Przy pierwszym uruchomieniu serwer utworzy `database.db`, tabele i przykładowych zawodników (tylko jeśli tabela zawodników jest pusta). Nie dodaje automatycznie przykładowych meczów.

## Zatrzymanie
Zatrzymaj serwer skrótem `Ctrl+C`. Plik bazy pozostaje na dysku. Aby rozpocząć z pustą bazą, zatrzymaj serwer i usuń `database.db` — operacja usuwa lokalne dane.

## Typowe problemy
- `npm` nie jest rozpoznawany: zainstaluj Node.js LTS i uruchom ponownie terminal.
- Port 3000 jest zajęty: uruchom z innym portem, np. PowerShell: `$env:PORT=3001; npm start`; następnie otwórz `http://localhost:3001`.
- Błąd instalacji `better-sqlite3`: sprawdź wersję Node.js i narzędzia kompilacji wymagane przez system.
