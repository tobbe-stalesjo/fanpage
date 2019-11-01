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

     let gender = ''                                                                            // Tanken är att den ska veta vad man har klicka i på gender men jag får det inte att fungera än

     if (this._gender) {
       gender = 'Male'
     } else {
       gender = 'Female'
     }

    let newChar = new Char(this._name, this._level, this._voc, gender, this._world);            // Lägger till din nya char i en lista som sen visas på Chars
    this.app.char.addCharatar(newChar);
    console.log(this.app.char.chars)

    this.route.set('/char')                                                                     // Skickar tillbaka dig till Char sidan igen.

  
  isDisabled() {
    if (this._name == "" || this._level == 0 || this._voc == null || this._gender == null || this._world == "") {         // Kollar så att man fyller i alla fälten annars kan man inte klicka på knappen
      return "disabled";
    }
    else {
      return "";
    }
  }

}
