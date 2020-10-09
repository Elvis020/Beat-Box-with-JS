class Beat{

    constructor(audioSrc){
        this.audio = new Audio(audioSrc);
        console.log(this.audio);
        // this.audio.play();
    }

    play = () =>{
        this.audio.currentTime = 0;
        this.audio.play();
    }

}

class Button{
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;

    }





    setButtonColorHTML = () => {

    }

    select = () => {

    }

    deSelect = () => {

    }
}