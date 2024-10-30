async function fetchData() {
  const container = document.querySelector("#container");
  const url =
    "https://corsproxy.io/?" +
    encodeURIComponent("https://openwhyd.org/hot?format=json");

  const response = await fetch(url);
  const data = await response.json();
  console.log("Data: ", data);

  data.tracks.forEach((track) => {
    const li = document.createElement("li");
    const anchorTag = document.createElement("a");
    const trackId = `https://youtube.com/watch?v=${track.eId.substring(4)}`;

    anchorTag.href = `${trackId}`;
    anchorTag.textContent = track.name;
    anchorTag.setAttribute("target", "_blank");

    li.appendChild(anchorTag);
    container.appendChild(li);
  });

  // Alternative Lösung:

  // const listItems = data.tracks
  //   .map((track) => {
  //     const trackId = `https://youtube.com/watch?v=${track.eId.substring(4)}`;
  //     return `<li><a href="${trackId}" target="_blank">${track.name}</a></li>`;
  //   })
  //   .join("");
  
  // container.innerHTML = listItems;
}

fetchData();
