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


    render(html) {
        return html`
        <section>
        <br>
        <br>
        <div class="pictures">
            <img src="${this._images[0]}" alt="Screenshot" height="250" width="33%">
            <img src="${this._images[1]}" alt="Screenshot" height="250" width="33%">
            <img src="${this._images[2]}" alt="Screenshot" height="250" width="33%">
            <img src="${this._images[3]}" alt="Screenshot" height="250" width="33%">
            <img src="${this._images[4]}" alt="Screenshot" height="250" width="33%">
            <img src="${this._images[5]}" alt="Screenshot" height="250" width="33%">
            <img src="${this._images[6]}" alt="Screenshot" height="250" width="33%">
            <img src="${this._images[7]}" alt="Screenshot" height="250" width="33%">
            <img src="${this._images[8]}" alt="Screenshot" height="250" width="33%">
        </div>
        </section>
        `
    }
}