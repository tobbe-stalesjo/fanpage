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
            <div id="square">${char.name} </div>
            <div id="square">${char.level} </div>
            <div id="square">${char.voc} </div>    
            <div id="square">${char.gender} </div>    
            <div id="square">${char.world} </div>    
          `
        }
        return result;
    }


    render(html) {
        return html`
        <section>
        <button click="addChar">Add New Charatar</button>
        <p>Funkar det att komma till sidan Char</p>
        </section>
        <section class="chars">
        ${this.getChars()}
        </section>
        `
    }
}