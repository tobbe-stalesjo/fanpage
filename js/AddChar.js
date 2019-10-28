class AddChar extends Domer {

  _name = "";
  _level = 0;
  _voc = null;
  _gender = null;
  _world = "";

  constructor(app) {
    super()
    this.app = app;
  }

  onStoreClick() {

    let gender = ''

    if (this._gender) {
      gender = 'Male'
    } else {
      gender = 'Female'
    }

    let newChar = new Char(this._name, this._level, this._voc, gender, this._world);
    this.app.char.addCharatar(newChar);
    console.log(this.app.char.chars)

    this.route.set('/char')

  }

  isDisabled() {
    if (this._name == "" || this._level == 0 || this._voc == null || this._gender == null || this._world == "") {         // Kollar så att man fyller i alla fälten annars kan man inte klicka på knappen
      return "disabled";
    }
    else {
      return "";
    }
  }

  render(html) {
    return html`
        <section>
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
        <label for="_gender">Male:</label>
        <input name="gender" type="radio" bind="_gender">
        <label for="_gender">Female:</label>
        <input name="gender" type="radio" bind="_gender">
        <br>
        <br> 
        <input type="text" bind="_world" placeholder="World">
        <br>
        <br> 
        <button click="onStoreClick" ${this.isDisabled()} type="button">Add Charatar</button> 
        </div>
        </section>
        `
  }
}
