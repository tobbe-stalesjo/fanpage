class Knight extends Hunting {


    constructor() {
        super();
    }



    render(html) {  
        return html`
            <section>
            <table>
            <tr>
              <th>Spawn</th>
              <th>Location</th>
              <th>Level</th>
            </tr>
            <tr>
              <td>Carlin Cults</td>
              <td>Carlin</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
            </section>
        `
    }
}