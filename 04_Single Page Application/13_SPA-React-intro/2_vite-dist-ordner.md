# Dist Ordner und live Server
`npm run build` erzeugt einen Dist Ordner mit einer optimierten Version der Website oder App für den Browser, die man anschließend deployen bzw. veröffentlichen kann.

## Dist Ordner mit live server öffnen


Wenn du im **dist-Ordner** deiner Vite-React-App die `index.html` per Rechtsklick mit **"Open with Live Server"** in VSCode öffnest und nur eine **weiße Seite** siehst, liegt das daran, dass der Live Server nicht richtig mit den **gebauten Dateien** (wie JS und CSS) umgehen kann. Vite erwartet, dass die Seite von einem **richtigen Server** ausgeführt wird, damit alle Pfade und Skripte korrekt geladen werden.

### Warum geht es nicht?
1. **Pfadprobleme**: Die HTML-Datei kann die gebauten JS- und CSS-Dateien nicht finden, da die Pfade nicht korrekt für den Live Server sind.
2. **Vite braucht einen Server**: Vite benutzt moderne JavaScript-Module, die ohne einen Server nicht richtig funktionieren.

### Lösung:
1. Erstelle zuerst den Build:  
   ```bash
   npm run build
   ```
2. Starte einen einfachen Server, z. B. mit dem Tool **serve**:
   ```bash
   npm install -g serve
   serve -s dist
   ```
3. Öffne dann deine Seite im Browser unter:  
   `http://localhost:3000`

**Fazit**:  
**Live Server** in VSCode ist nicht für Vite-Builds geeignet. Nutze stattdessen einen einfachen Server wie `serve`, um deine gebaute App korrekt zu sehen. 🎉

### Unterschied zwischen **Local** und **Network** 
**...beim `serve`-Befehl**


#### 1. **Local (http://localhost:3000)**:
- **Localhost** bezieht sich auf deinen **eigenen Computer**. Wenn du diese Adresse aufrufst, kannst nur **du** die Anwendung sehen, weil sie auf deinem Rechner läuft.
- Diese Adresse ist **nur** von deinem Gerät erreichbar und nicht von anderen Geräten in deinem Netzwerk.

#### 2. **Network (http://192.168.2.130:3000)**:
- Die **Network-Adresse** bezieht sich auf deine **interne IP-Adresse** in deinem lokalen Netzwerk (z. B. zu Hause oder im Büro).
- Mit dieser Adresse können **andere Geräte** in deinem Netzwerk (wie Smartphones, Tablets oder andere Computer) auf deine Anwendung zugreifen, solange sie sich im **gleichen Netzwerk** befinden.

#### Beispiel:
- **Localhost**: Du testest die App nur auf deinem eigenen Computer.
- **Network**: Du möchtest deine App auf einem anderen Gerät (z. B. Smartphone) im selben WLAN anschauen. Du kannst dann diese IP-Adresse (`192.168.x.x`) auf dem Gerät im Browser öffnen, um die Seite zu sehen.