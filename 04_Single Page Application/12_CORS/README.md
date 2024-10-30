## HTTP-Header

- Aus welchen Teilen bestehen HTTP-Requests?
    - Methode
    - URL
    - Header
    - Body

- Was waren nochmal Header?
    - Header liefern zusätzliche Informationen für Requests und Responses
    - Beschreiben oft den Request/die Response; Metadaten
    - Zum Beispiel: content-type, content-length
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#message_body_information

## CORS und SOP

- Verwandte Terminologie: "Origin"
    - Welche Teile hat eine URL?
        - Protokoll, Domain, Port, Ressource-Pfad, etc...
    - Die "Origin" ist die Kombination aus Protokoll, Domain und Port einer URL
    - In http://ddg.gg:80 ist die Origin die Kombination aus http, ddg.gg und 80

- Deine Webseite ist: http://ddg.gg:80/
    - Gleiche Origin: http://ddg.gg:80/            - gleiches Protokoll, Domain, Port
    - Gleiche Origin: http://ddg.gg:80/style.css   - gleiches Protokoll, Domain, Port
    - Gleiche Origin: http://ddg.gg:80/login       - gleiches Protokoll, Domain, Port

    - Nicht gleiche Origin: http://AAA.gg:80/login   - andere Domain
    - Nicht gleiche Origin: http://ddg.de:80/login   - andere Domain
    - Nicht gleiche Origin: http://ddg.gg:21/login   - anderer Port
    - Nicht gleiche Origin: https://ddg.gg:80/login  - anderes Protokoll

### SOP - Same Origin Policy

- Skripte auf einer Origin können nur auf Daten von der gleichen Origin zugreifen
- Das ist die SOP; eine Richtlinie, die Browser befolgen
- SOP wurde eingeführt, um Cross-Site Request Forgery-Angriffe (CSRF) zu verhindern

- CSRF vereinfachtes Beispiel:
    - Du besuchst `mybank.com` und loggst dich ein
    - Nun vertraut `mybank.com` den Requests, die von deinem Browser kommen
    - Du besuchst `evil-hacker.com`
        - Ein Skript auf `evil-hacker.com` sendet eine Anfrage, um Geld zu überweisen
            - `fetch("mybank.com/sendmoney?to=evilhacker")`
    - Nun sieht `mybank.com` eine Anfrage von deinem Browser
        - Sie vertrauen darauf, dass sie von dir kommt, und überweisen das Geld
        - Verdammt, böser Hacker!
        - CORS verhindert das

- Manchmal musst du trotzdem Daten von anderen Services, also anderen Origins, abrufen
- CORS ist ein Mechanismus, der es erlaubt, Ressourcen über Origins hinweg zu teilen
- CORS erlaubt es, die SOP zu umgehen, aber auf eine kontrollierte und sichere Weise

### CORS - Cross-Origin Resource Sharing

- Es erlaubt uns, Anfragen von einer Origin zu einer anderen zu senden
- CORS muss vom Service, den du anfragst, aktiviert sein
    - Also muss `mybank.com` Anfragen von `evil-hacker.com` erlauben

- Bei CORS-Anfragen macht dein Browser tatsächlich zwei Anfragen:
    - Eine "preflight" Anfrage, um CORS zu verifizieren
        - *"Hey mybank.com, erlaubst du Anfragen von evil-hacker.com?"*
    - Dann die eigentliche Anfrage selbst

- LEHRER: Gehe zu example.com und führe in den Devtools `fetch("https://google.com")` aus

- Beachte, dass dies nur für Browser gilt

### Proxies

- Die SOP und CORS sind Features des Browsers
- Wenn du die Anfragen über einen Zwischenschritt-Server leitest, kannst du CORS umgehen
    - LEHRER: Zeige https://corsproxy.io/
    - Browser bei `evil-hacker.com` fragt `corsproxy.io/?target=mybank.com` an
    - Ein Server bei `corsproxy.io` macht dann die Anfrage an `mybank.com`

- Hier agiert `cors-bypass.com` als ein "Proxy"-Server
    - Proxies stehen zwischen zwei Punkten und leiten den Traffic weiter

- Warum gibt das **nicht** `evil-hacker.com` Zugriff auf `mybank.com`?
    - Weil `mybank.com` die Anfragen nicht als von dir kommend erkennt
    - Es gibt ein weiteres Sicherheitsfeature im Browser, das das verhindert
    - Es heißt First-Party-Cookies
    - Ich hoffe wirklich, dass `mybank.com` First-Party-Cookies verwendet :)
    - Es ist entscheidend dafür, dass CORS tatsächlich funktioniert und diese Angriffe verhindert
    - Du wirst mehr über Cookies im Backend lernen

- Randnotiz 1
    - Wenn du ChatGPT und Copilot fragst, wie man CORS mit einem Proxy umgeht
    - Dann erwähnen sie oft nicht den Cookie-Schutz
    - KI-Antworten sind nicht immer perfekt :)

- Randnotiz 2
    - CORS und First-Party-Cookies können _nicht_ alles schützen
    - Wenn du `evil-hacker.com` dein Bank-Login gibst
    - Können sie es trotzdem direkt verwenden, um sich einzuloggen

- Es ist trotzdem gut, das Wort "Proxy" zu kennen
    - Lass uns Copilot Chat fragen, welche Anwendungsfälle Proxies haben

## Zusammenfassung

- HTTP-Requests und -Responses enthalten Header
- Header können zusätzliche Informationen liefern
- Header können den Request/die Response beschreiben
- CORS/SOP ist ein Sicherheitsfeature im Browser
- Proxies leiten Daten zwischen zwei Kontaktpunkten weiter