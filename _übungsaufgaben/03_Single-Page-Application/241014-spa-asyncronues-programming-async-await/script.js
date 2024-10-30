// Funktion zum Abrufen der Benutzerdaten
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Netzwerkantwort war nicht ok ' + response.statusText);
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    displayMessage('Fehler beim Abrufen der Benutzerdaten: ' + error.message, 'error');
  }
}

// Funktion zum Anzeigen der Benutzerdaten im DOM
function displayUsers(users) {
  const userList = document.getElementById('user-list');
  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';

    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Stadt:</strong> ${user.address.city}</p>
    `;

    userList.appendChild(userCard);
  });
}

// Funktion zum Verarbeiten des Formulars und Senden des POST-Requests
async function createPost(event) {
  event.preventDefault();

  const title = document.getElementById('title').value.trim();
  const body = document.getElementById('body').value.trim();

  if (title === '' || body === '') {
    displayMessage('Bitte fülle alle Felder aus.', 'error');
    return;
  }

  const postData = {
    title: title,
    body: body,
    userId: 1 // Beispielhaft eine userId angegeben
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error('Fehler beim Senden des Posts: ' + response.statusText);
    }

    const result = await response.json();
    displayMessage('Post erfolgreich erstellt! Post ID: ' + result.id, 'success');
    document.getElementById('post-form').reset();
  } catch (error) {
    displayMessage('Fehler beim Erstellen des Posts: ' + error.message, 'error');
  }
}

// Funktion zum Anzeigen von Nachrichten
function displayMessage(message, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.className = type;
  messageDiv.textContent = message;

  // Nachricht nach 5 Sekunden ausblenden
  setTimeout(() => {
    messageDiv.textContent = '';
    messageDiv.className = '';
  }, 5000);
}

// Event Listener für das Formular
document.getElementById('post-form').addEventListener('submit', createPost);

// Beim Laden der Seite Benutzerdaten abrufen
fetchUsers();