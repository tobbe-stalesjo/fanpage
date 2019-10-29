class Screenhot extends Domer {


    _images = [
        "/image/Isiki_A.png",
        "/image/Isiki_SkillUp.png",
        "/image/Nepozar.png"
    ];

    constructor() {
        super()
    }

    addScreenshot() {

    }


    render(html) {
        return html`
        <section>
        <p>Här kommer vi att lägga upp massa bilder och man ska även kunnat ladda upp bilder själv.</p>
        <br>
        <br>
        <div class="pictures">
            <img src="${this._images}" alt="Screenshot" height="200" width="200">
        </div>
        <br>
        <br>
        <label for="addScreenshot">Add a Screenshot:</label>
        <br>
        <br>
        <input type="file" name="pitcure" accept="image/" bind="addScreenshot">
        </section>
        `
    }
}