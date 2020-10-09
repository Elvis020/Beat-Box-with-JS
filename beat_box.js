
// // Utils.js

// class Beat {
//   constructor(audioSrc) {
//     this.audio = new Audio(audioSrc);
//     console.log(this.audio);
//     // this.audio.play();
//   }

//   play = () => {
//     this.audio.currentTime = 0;
//     this.audio.play();
//   };
// }

// class Button {
//   constructor(color, keyCode) {}

//   setButtonColorHTML = () => {};

//   select = () => {};

//   deSelect = () => {};
// }





let beats = {
  65: {
    "beat": new Beat("./assets/Piano_Chord_331.mp3"),
    "button": new Button("#00ffee",65)
  },
  83: {
    "beat": new Beat("./assets/Piano_Chord_209.mp3"),
    "button": new Button("#00ffee",83)
  },
  68: {
    "beat": new Beat("./assets/Piano_Chord_208.mp3"),
    "button": new Button("#00ffee",68)
  },
  70: {
    "beat": new Beat("./assets/Drum_Sticks_Hit_3.mp3"),
    "button": new Button("#00ffee",70)
  },
  71: {
    "beat": new Beat("./assets/Drum_Snare_Roll.mp3"),
    "button": new Button("#00ffee",71)
  },
  72: {
    "beat": new Beat("./assets/PREL_Musical_57.mp3"),
    "button": new Button("#00ffee",72)
  },
  74: {
    "beat": new Beat("./assets/Cymbal_Suspended_2.mp3"),
    "button": new Button("#00ffee",74)
  },
  75: {
    "beat": new Beat("./assets/Musical_Compos_33.mp3"),
    "button": new Button("#00ffee",75)
  },
  76: {
    "beat": new Beat("./assets/Musical_Orches_4.mp3"),
    "button": new Button("#00ffee",76)
  }
}


const triggerBeat = (event) => {
    const keyCode = event.keyCode;
    console.log(keyCode);
    if(keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
    }
}


// Getting the keydown input from the user
document.addEventListener('keydown', triggerBeat)



// Utils.js

// class Beat {
//   constructor(audioSrc) {
//     this.audio = new Audio(audioSrc);
//     console.log(this.audio);
//     // this.audio.play();
//   }

//   play = () => {
//     this.audio.currentTime = 0;
//     this.audio.play();
//   };
// }

// class Button {
//   constructor(color, keyCode) {}

//   setButtonColorHTML = () => {};

//   select = () => {};

//   deSelect = () => {};
// }





