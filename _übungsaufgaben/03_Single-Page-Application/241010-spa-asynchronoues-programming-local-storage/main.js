// Zeige Entwickler Funktion

const displayDevelopers = () => {
  // Hol dir die Entwickler aus dem lokalen Speicher
  let developers = localStorage.getItem("developers");

  let developerList = document.getElementById("developer-list");
  developerList.innerHTML = "";

  // Wenn Entwickler vorhanden sind, zeige sie an
  if (developers !== null) {
    developers = JSON.parse(developers);

    developerList.innerHTML = developers
      .map((developer) => {
        // erstelle für jeden Entwickler eine Zeile in der Tabelle
        return `
          <tr>
            <td>${developer.firstName}</td>
            <td>${developer.lastName}</td>
            <td>${developer.programmingLanguages}</td>
          </tr>
        `;
      })
      .join("");
  }

// appendChild() Methode

// developers.forEach((developer) => {
//     let row = document.createElement("tr");

//     let firstNameCell = document.createElement("td");
//     firstNameCell.textContent = developer.firstName;
//     row.appendChild(firstNameCell);

//     let lastNameCell = document.createElement("td");
//     lastNameCell.textContent = developer.lastName;
//     row.appendChild(lastNameCell);

//     let programmingLanguagesCell = document.createElement("td");
//     programmingLanguagesCell.textContent = developer.programmingLanguages;
//     row.appendChild(programmingLanguagesCell);

//     developerList.appendChild(row);
// });
};

const addDeveloperToTable = () => {
  document.getElementById("send-form").addEventListener("click", (e) => {
    e.preventDefault();
    // Neuen Entwickler erstellen
    let newDeveloper = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      programmingLanguages: document.getElementById("programmingLanguage")
        .value,
    };
    // Entwickler in den lokalen Speicher speichern
    let developers = localStorage.getItem("developers");
    // Wenn keine Entwickler vorhanden sind, erstelle ein neues Array mit dem neuen Entwickler
    if (developers === null) {
      localStorage.setItem("developers", JSON.stringify([newDeveloper]));
    } 
    // Falls Entwickler vorhanden sind, füge den neuen Entwickler hinzu
    else {
      developers = JSON.parse(developers);
      developers.push(newDeveloper);
      localStorage.setItem("developers", JSON.stringify(developers));
    }
    document.getElementById("form").reset();
    displayDevelopers();
  });
};

const clearLocalStorage = () => {
  document.getElementById("reset-form").addEventListener("click", () => {
    localStorage.removeItem("developers");
    displayDevelopers();
  });
};

displayDevelopers();
addDeveloperToTable();
clearLocalStorage();
