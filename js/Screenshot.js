class Screenhot extends Domer {

    previewImgSrc = ''

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



    imageClick(evt) {
        let imgId = evt.target.getAttribute('data-img')
        console.log(imgId);
        this.previewImgSrc = this._images[imgId - 1]
    }

    render(html) {
        return html`
        <section>
        <br>
        <br>
                ${this.previewImgSrc ? 
                `<img id="previewImg" src="${this.previewImgSrc}" alt="bild1">` 
                : ''}
            <div class="pictures" click="imageClick">
                <img id="myImg" data-img="1" src="${this._images[0]}" alt="Screenshot">
                <img id="myImg" data-img="2" src="${this._images[1]}" alt="Screenshot">
                <img id="myImg" data-img="3" src="${this._images[2]}" alt="Screenshot">
                <img id="myImg" data-img="4" src="${this._images[3]}" alt="Screenshot">
                <img id="myImg" data-img="5" src="${this._images[4]}" alt="Screenshot">
                <img id="myImg" data-img="6" src="${this._images[5]}" alt="Screenshot">
                <img id="myImg" data-img="7" src="${this._images[6]}" alt="Screenshot">
                <img id="myImg" data-img="8" src="${this._images[7]}" alt="Screenshot">
                <img id="myImg" data-img="9" src="${this._images[8]}" alt="Screenshot">
            </div>
            
        </section>
        `
    }
}