document.querySelector("#b1").addEventListener("click", (e) => {
  const options = {
    headers: {
      Authorization: "Potato",
      Accept: "text/plain",
    },
  };
  fetch("https://example.org", options);
});

document.querySelector("#b2").addEventListener("click", (e) => {
  const options = {
    headers: {
      Authorization: "Tomato",
    },
  };
  fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/phantasmagoria",
    options
  );
});

document.querySelector("#b3").addEventListener("click", (e) => {
  const options = {
    headers: {
      Authorization: "Aubergine",
    },
    method: "POST",
  };
  fetch("https://cat-fact.herokuapp.com/user/me", options);
});
i = document.createElement("i");
i.innerText = "🐧";
document.body.prepend(i);
i.style.opacity = 0;
i.addEventListener(
  "mouseenter",
  (e) =>
    e.target.animate(
      [{ opacity: 0 }, { opacity: 1 }, { opacity: 1 }, { opacity: 0 }],
      { duration: 2000 }
    ) && console.log("You found the penguin!")
);
