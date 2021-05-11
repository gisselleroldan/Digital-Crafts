for (let index = 1; index <= 43; index++) {
  fetch(
    `https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=50`
  )
    .then((response) => response.json())
    .then((characterData) => {
      characterData.forEach((character) => {
        // check if allegiance is  not empty []
        if (character.allegiances.length > 0) {
          // loops through each character's allegiance
          character.allegiances.forEach((houseApiUrl) => {
            // make fetch call for each allegiance
            fetch(houseApiUrl)
              .then((response) => response.json())
              .then((allegianceData) => {
                // console.log(`${character.name} - `, allegianceData.name);
                let ul = document.getElementById("character-names");
                let li = document.createElement("li");
                li.innerText = `${character.name} - ${allegianceData.name}`;
                ul.append(li);
                li.addEventListener("click", () => {
                  alert(
                    `Region name: ${allegianceData.region}\nFounded: ${allegianceData.founded} \nCoat of Arms: ${allegianceData.coatOfArms}`
                  );
                });
              });
          });
        }
      });
    });
}
