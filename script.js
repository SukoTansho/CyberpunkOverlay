function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setStreamerInfo(rectangleId, characterName, streamerName) {
  var rectangle = document.getElementById(rectangleId);
  if (rectangle) {
    var characterElement = rectangle.querySelector(".character-name");
    var streamerElement = rectangle.querySelector(".streamer-name");

    if (characterElement) {
      characterElement.textContent = characterName;
    }

    if (streamerElement) {
      streamerElement.textContent = streamerName;
    }
  }
}

function addGlitchClass(element) {
  var glitchClass = "cyber-glitch-2";
  element.classList.remove(glitchClass);

  setTimeout(function () {
    element.classList.add(glitchClass);
    setTimeout(function () {
      addGlitchClass(element);
    }, 4000);
  }, getRandomInt(20000, 90000));
}

///TODO: get config somewhere
setStreamerInfo("rectangle1", "Spielleiter", "Mhaire");
setStreamerInfo("rectangle2", "Mike Mana", "Tostspender");
setStreamerInfo("rectangle3", "Miles", "PancakeCosplay");
setStreamerInfo("rectangle4", "Bloom", "Haselnuuuss");
setStreamerInfo("rectangle5", "Franky D.", "BurritoOfDoom");

document.addEventListener("DOMContentLoaded", function () {
  var streamerPlates = document.querySelectorAll(".streamer-plate");

  streamerPlates.forEach(function (plate) {
    addGlitchClass(plate);
  });
});
