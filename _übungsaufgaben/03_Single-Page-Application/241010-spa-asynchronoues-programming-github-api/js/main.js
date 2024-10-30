const button = document.querySelector("button");
const input = document.querySelector("input");
const section = document.querySelector("section");

let apiURL = "";

input.addEventListener("change", (e) => {
  e.preventDefault();
  apiURL = `https://api.github.com/users/${e.target.value}/repos`;
});

function fetchData() {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          console.log(`HTTP error! status: ${response.status}`);
          return {};
        }
        return response.json();
      })
      .then((data) => {
        section.innerHTML = "";
        data.forEach((repo) => {
          const repoElement = document.createElement("div");
          repoElement.innerHTML = `
                  <h2>${repo.name}</h2>
                  <p>Created at: ${repo.created_at}</p>
                  <p>${
                    repo.description
                      ? repo.description
                      : "No description available"
                  }</p>
              `;
          section.appendChild(repoElement);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
}

fetchData();
