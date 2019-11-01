class AddChar extends Domer {

  _name = "";
  _level = 0;
  _voc = null;
  _world = "";

  constructor(app) {
    super()
    this.app = app;
  }

  onStoreClick() {

    let gender = document.querySelector('input[name="_gender"]:checked').value                 // Fått hjälp av Johan med att få denna att fungera. Bug i Domer

    let newChar = new Char(this._name, this._level, this._voc, gender, this._world);            // Lägger till din nya char i en lista som sen visas på Chars
    this.app.char.addCharatar(newChar);
    console.log(this.app.char.chars)

    this.route.set('/char')                                                                     // Skickar tillbaka dig till Char sidan igen.

  }

  isDisabled() {
    if (this._name == "" || this._level == 0 || this._voc == null || this._world == "") {         // Kollar så att man fyller i alla fälten annars kan man inte klicka på knappen
      return "disabled";
    }
    else {
      return "";
    }
  }

  render(html) {
    return html`
        <section class="addChar">
          <h1>Adding a new charatar</h1>
          <div class="addCharLeft">
            <label for="_name">Name:</label>
            <br>    
            <br>     
            <label for="_level">Level:</label>
            <br>
            <br> 
            <label for="_voc">Vocation:</label>
            <br>
            <br> 
            <label for="_gender">Gender:</label>
            <br>
            <br> 
            <label for="_world">World:</label>
            <br>
            <br> 
            <br> 
            <button click="onStoreClick" ${this.isDisabled()} type="button">Add Charatar</button> 
          </div>
          
          
          <div class="addCharRight">
            <input type="text" bind="_name" placeholder="Name">
            <br>
            <br> 
            <input type="text" bind="_level" placeholder="Level">
            <br>
            <br> 
            <select name="Vocation" bind="_voc">                            
              <option value="Knight">Knight</option>
              <option value="Paladin">Paladin</option>
              <option value="Druid">Druid</option>
              <option value="Sorcerer">Sorcerer</option>
            </select>                                                        
            <br>
            <br> 
            <label for="_maleGender">Male:</label>
            <input id="_maleGender" name="_gender" type="radio" checked value="Male">
            <label for="_femaleGender">Female:</label>
            <input id="_femaleGender" name="_gender" type="radio" value="Female">
            <br>
            <br> 
            <input type="text" bind="_world" placeholder="World">
          </div>
        </section>
        `
  }
}
