# Tracks anzeigen mit Openwhyd API

Diese Übung gibt dir praktische Erfahrung im Umgang mit Cross-Origin Resource Sharing (CORS) Problemen, die häufig auftreten, wenn Daten von APIs abgerufen werden, die keine CORS-Header enthalten.

## Was du tun wirst

In dieser Übung wirst du Daten von der [Openwhyd API Endpoint](https://openwhyd.org/hot?format=json) abrufen. Openwhyd ist eine Plattform, die Musiktracks aus verschiedenen Quellen kuratiert, die Dokumentation findest du [hier](https://openwhyd.github.io/openwhyd/API). Anschließend verwendest du JavaScript, um diese Tracks auf einer Webseite mit anklickbaren Links zu jedem Track darzustellen.

Die Openwhyd API enthält keine CORS-Header, daher musst du einen CORS-Proxy verwenden, um darauf zuzugreifen, [corsproxy](https://corsproxy.io/).

Da du mit Daten von externen APIs arbeitest und den DOM änderst, um diese Daten anzuzeigen, ist dies eine großartige Gelegenheit, dein Verständnis von asynchronem JavaScript und DOM-Manipulation zu festigen.

## Aufgaben

### Aufgabe 1 - Daten von Openwhyd API abrufen

Du musst eine GET-Anfrage senden, um Track-Daten von der Openwhyd API abzurufen. Denke daran, den corsproxy zu verwenden, um CORS-Probleme zu vermeiden.

### Aufgabe 2 - Die abgerufenen Daten analysieren

Die Antwort von der API wird ein JSON-String sein, den du in ein Objekt umwandeln musst, mit dem du arbeiten kannst. Jeder Track hat eine `eId` Eigenschaft, die die eindeutige Kennung für diesen Track auf seiner Quellplattform enthält.

### Aufgabe 3 - Die Track-URLs formatieren

Die `eId` Eigenschaft der Tracks muss in die korrekte URL übersetzt werden. Für YouTube-Tracks kann die Kennung `/yt/xxx` in `https://youtube.com/watch?v=xxx` übersetzt werden.

### Aufgabe 4 - Tracks auf der Webseite anzeigen

Erstelle für jeden Track einen anklickbaren Link, der den Track in einem neuen Tab öffnet, wenn er angeklickt wird. Dazu musst du DOM-Manipulationstechniken verwenden.

> Tipp: Setze das `target` Attribut des `a` Tags auf `_blank`, um die Tracks in neuen Tabs zu öffnen

Beispielausgabe:

![demo](./demo.png)

## Bonus

Versuche, Tracks/Videos von anderen Plattformen wie SoundCloud & Vimeo anzuzeigen. Denke daran, die URL-Formatierung basierend auf der Plattform, von der der Track stammt, anzupassen.

## Viel Spaß beim Programmieren!
