const welcomeFunction = function () {
  alert(
    "Hello there human! So You want to play 'Pick the number'. I will set up the game but first give me your name."
  );
};

const nameFunction = function () {
  let person = prompt("Enter your name", "Gamer");
  if (person === "Gamer") {
    alert("Oh, You're so orginal :-/");
    return person;
  } else {
    alert("Pleased to meet You, " + person + " :-)");
    return person;
  }
};

const takeNRfunction = function (person) {
  alert(
    person +
      ", Before we can start I need you to pick the lowest - highest number in the range (for example 1 till 25)."
  );
  let min = prompt("Enter the lowest number:", "1");
  let max = prompt("Now pick the highest number", "25");
  if (max < 10) {
    alert(
      max +
        " Really!? You want to play ease-mode. That's okay, I'll win anyway."
    );
  }
  const secretNr = Math.floor(Math.random() * (max - min) + min);
  alert(
    "Okay, we are playing with range between " +
      min +
      " and " +
      max +
      ". Good luck!"
  );
  return secretNr;
};

let calculateNRfunction = function (person, secretNr) {
  //alert(person + " check " + secretNr);
  for (let i = 0; i < 5; i++) {
    let guess = prompt("This is your " + i + " attempt out of 5");
    if (guess == secretNr) {
      // double     :-/
      alert(
        "Congratulatious " +
          person +
          ", you won the game in " +
          i +
          " attempts!"
      );
      return guess;
    } else {
      const randomTauntnr = Math.floor(Math.random() * (1 - 20) + 20);
      //alert(randomTauntnr + " generated")
      if (randomTauntnr > 18) {
        alert(
          "My calculations tell me that you have " +
            (secretNr - 5) +
            " % change to defeat me."
        );
      } else if (randomTauntnr > 16) {
        alert("I WILL CRUSH YOU!!!, sry *ahum* I let myself go.");
      } else if (randomTauntnr > 14) {
        alert("Ah, you where so close - not - ");
      } else if (randomTauntnr > 12) {
        alert("I like tigers in pyjama's.");
      } else if (randomTauntnr > 10) {
        alert("I almost pitty You for trying to win from me.");
      } else if (randomTauntnr > 8) {
        alert("I have a library of over 20 taunts to choose from.");
      } else if (randomTauntnr > 6) {
        alert(
          "Hey " + person + ". You know you can't win this game from me, right?"
        );
      } else if (randomTauntnr > 4) {
        alert("Psssst. Do you like scary movies?");
      } else if (randomTauntnr > 2) {
        alert(person +
          ", Do you need a hint? Ah, nevermind. You'd probably won't get it anyway."
        );
      } else {
        alert("*LICKING A LOLLYPOP WHILE WATCHING YOU.*");
      }
    }
  }

  let guess = alert(
    "Game over " +
      person +
      ". All is lost now and there is no hope for mankind. The correct number was: " +
      secretNr
  );
  return person;
};

let restartGame = function (person) {
  let playerchoice = prompt(
    "Do you want to play again, " + person + " ?",
    "yes"
  );
  if (playerchoice === "yes") {
    alert("Okay, We'll start over :-)");
  } else {
    alert("Bye " + person + " have a good day!");
    System.exit(0);
  }
};

function guessNumbers() {
  const welcomeMsg = welcomeFunction();
  const getName = nameFunction();
  const getSmall = takeNRfunction(getName);
  const calculateNr = calculateNRfunction(getName, getSmall);
  const startOver = restartGame(getName);
  guessNumbers();
}

guessNumbers();
