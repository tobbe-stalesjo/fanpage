class Char extends Domer {

    chars = [];

    constructor(name, level, voc, gender, world) {
        super()
        this._name = name;
        this._level = level
        this._voc = voc;
        this._gender = gender;
        this._world = world;
    }

    didMount() {
        console.log(this.chars)
    }

    addCharatar(c) {
        this.chars.push(c)
    }

    addChar() {
        this.route.set('/addChar')
    }

    getChars() {
        let result = ``;
        for (let char of this.chars) {
            result += `
            <div id="square">${char._name} </div>
            <div id="square">${char._level} </div>
            <div id="square">${char._voc} </div>    
            <div id="square">${char._gender} </div>    
            <div id="square">${char._world} </div>    
          `
        }
        return result;
    }

    removeChar() {
        //chars.pop()
        this.chars.splice( 0, 1)
    }


    render(html) {
        return html`
        <section>
            <div class="chars">
                ${this.getChars()}
            </div>
            <br>
            <div>
                <button click="addChar">Add New Charatar</button>
                <button click="removeChar">Remove Char</button>
            </div>
    </section>
        `
    }
}