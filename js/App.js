class App extends Domer {

    char = new Char();
    quest = new Quest();
    hunting = new Hunting();
    screenshot = new Screenhot();
    addChar = new AddChar(this);
    knight = new Knight();
    paladin = new Paladin();
    druid = new Druid();
    sorcerer = new Sorcerer();
    showDropdown = false;

    toggleDropdown() {
       this.showDropdown = !this.showDropdown
    }

    get dropdown() {
        return this.showDropdown ? `
                    <div class="dropdown-container">
                        <a href="/knight">Knight</a>
                        <a href="/paladin">Paladin</a>
                        <a href="/druid">Druid</a>
                        <a href="/sorcerer">Sorcerer</a>
                    </div>
                        ` : ''
    }


    render(html, route) {
        return html`

        <section>
            <div class="topnav">                                                
                <img src="/image/Header.jpg" alt="header" class="header">            
            </div>
        
        
            <div class="sidenav">
                <a href="/char">Charater</a>
                <a href="/quest">Quest</a>
                <button click="toggleDropdown" class="dropdown-btn">Hunting Places
                <i class="fa fa-caret-down"></i>
                </button>
                   ${this.dropdown}
                <a href="/screenshot">Screenshot</a>
            </div>


            <div class="main">
                ${route(`/char`) ? this.char : ""}
                ${route(`/addChar`) ? this.addChar : ""}
                ${route("/quest") ? this.quest : ""}
                ${route("/hunting") ? this.hunting : ""}
                ${route("/screenshot") ? this.screenshot : ""}
                ${route("/knight") ? this.knight : ""}
                ${route("/paladin") ? this.paladin : ""}
                ${route("/druid") ? this.druid : ""}
                ${route("/sorcerer") ? this.sorcerer : ""}
            </div>
        </section>
        `
    }
}

new App();