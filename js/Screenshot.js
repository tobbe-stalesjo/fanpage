class Screenhot extends Domer {


    _images = [
        "/image/Dumpi_Boss (2).png",
        "/image/Dumpi_Boss.png",
        "/image/Dumpi_DeathPvE.png",
        "/image/Dumpi_LevelUp.png",
        "/image/Dumpi_Lowh.png",
        "/image/Nosaye_LevelUp.png",
        "/image/Ruji_LevelUp.png",
        "/image/Ruji_Low.png",
        "/image/Tudak_LevelUp.png",
    ];

    constructor() {
        super()
    }


       // Kommer behöva en metod som gör att bilden kommer upp när jag klickar på den
       // https://www.w3schools.com/howto/howto_css_modal_images.asp

    render(html) {
        return html`
        <section>
        <br>
        <br>
            <div class="pictures">
                <img id="myImg" src="${this._images[0]}" alt="Screenshot" height="250" width="33%">
                <img id="myImg" src="${this._images[1]}" alt="Screenshot" height="250" width="33%">
                <img id="myImg" src="${this._images[2]}" alt="Screenshot" height="250" width="33%">
                <img id="myImg" src="${this._images[3]}" alt="Screenshot" height="250" width="33%">
                <img id="myImg" src="${this._images[4]}" alt="Screenshot" height="250" width="33%">
                <img id="myImg" src="${this._images[5]}" alt="Screenshot" height="250" width="33%">
                <img id="myImg" src="${this._images[6]}" alt="Screenshot" height="250" width="33%">
                <img id="myImg" src="${this._images[7]}" alt="Screenshot" height="250" width="33%">
                <img id="myImg" src="${this._images[8]}" alt="Screenshot" height="250" width="33%">
            </div>

            <!-- Ska göra så att man kan klicka på bilden och att den öppnas och blir större -->
            <div id="myModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="img01">
                <div id="caption"></div>
            </div>
        </section>
        `
    }
}