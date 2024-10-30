document.querySelector("button").addEventListener("click", (e) => {
  const ul = document.querySelector("ul");

  fetch("data.txt")
    .then((response) => response.text())
    .then((text) => {
      const data = text.split("\n");
      data.sort();

      const elements = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i] != data[i + 1]) {
          elements.push(`<li>${data[i]}</li>`);
        }
      }

      ul.innerHTML = elements.join("");
    });
});
