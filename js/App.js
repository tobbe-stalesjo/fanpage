class App extends Domer {

    char = new Char();
    quest = new Quest();
    hunting = new Hunting();
    screenshot = new Screenhot();
    addChar = new AddChar();




    render(html, route) {
        return html`

        <section>
            <div class="topnav">                                                
                <img src="/image/Header.jpg" alt="header" class="header">            
            </div>
        
        
            <div class="sidenav">
                <a href="/char">Charater</a>
                <a href="/quest">Quest</a>
                <a href="/hunting">Hunting Places</a>
                <a href="/screenshot">Screenshot</a>
            </div>


            <div class="main">
                ${route(`/char`) ? this.char : ""}
                ${route(`/addChar`) ? this.addChar : ""}
                ${route("/quest") ? this.quest : ""}
                ${route("/hunting") ? this.hunting : ""}
                ${route("/screenshot") ? this.screenshot : ""}
            </div>
        </section>
        `
    }
}

new App();