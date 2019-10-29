class Screenhot extends Domer {


    _images = [
        "/image/Isiki_A.png",
        "/image/Isiki_SkillUp.png",
        "/image/Nepozar.png"
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
        </div>
        </section>
        `
    }
}