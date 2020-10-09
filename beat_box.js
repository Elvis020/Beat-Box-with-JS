
let beats = {
  65: {
    "beat": new Beat("./assets/Piano_Chord_331.mp3"),
    "button": new Button(" rgb(11, 255, 125)", 65)
  },
  83: {
    "beat": new Beat("./assets/Piano_Chord_209.mp3"),
    "button": new Button(" rgb(11, 255, 125)", 83)
  },
  68: {
    "beat": new Beat("./assets/Piano_Chord_208.mp3"),
    "button": new Button(" rgb(11, 255, 125)",68)
  },
  70: {
    "beat": new Beat("./assets/Drum_Sticks_Hit_3.mp3"),
    "button": new Button(" rgb(238, 222, 3)",70)
  },
  71: {
    "beat": new Beat("./assets/Drum_Snare_Roll.mp3"),
    "button": new Button(" rgb(238, 222, 3)",71)
  },
  72: {
    "beat": new Beat("./assets/PREL_Musical_57.mp3"),
    "button": new Button(" rgb(238, 222, 3)",72)
  },
  74: {
    "beat": new Beat("./assets/Cymbal_Suspended_2.mp3"),
    "button": new Button(" rgb(238, 222, 3)",74)
  },
  75: {
    "beat": new Beat("./assets/Musical_Compos_33.mp3"),
    "button": new Button("rgb(216, 11, 182)", 75)
  },
  76: {
    "beat": new Beat("./assets/Musical_Orches_4.mp3"),
    "button": new Button("rgb(216, 11, 182)", 76)
  }
}


const triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if(keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
    }
}


// Getting the keydown input from the user
document.addEventListener('keydown', triggerBeat)






