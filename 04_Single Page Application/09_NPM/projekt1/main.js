// ich kann jetzt ein Objekt aus der Luxon Library importieren
import { DateTime } from "luxon";

// Und mit diesem importiertem Objekt kann ich jetzt weiter arbeiten. 
console.log(DateTime.now().minus({weeks:1}).toISO()); // 2024-10-01T09:25:51.442+02:00