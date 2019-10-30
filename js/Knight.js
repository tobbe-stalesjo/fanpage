class Knight extends Domer {


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
              <th>Level 0-100</th>
            </tr>
            <tr>
            <td>Coryms</td>
            <td>Port Hope</td>
            <td>40</td>
          </tr>
            <tr>
              <td>Carlin Cults</td>
              <td>Carlin</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Yielothax</td>
              <td>Farmine</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Krailos Nightmares</td>
              <td>Krailos</td>
              <td>80</td>
            </tr>
          </table>
          <br>
          <br>
          <table>
          <tr>
              <th>Spawn</th>
              <th>Location</th>
              <th>Level 100-200</th>
          </tr>
          <tr>
              <td>Wyrms</td>
              <td>Darashia</td>
              <td>130</td>
          </tr>
          <tr>
              <td>Minotaur Cults</td>
              <td>Thais</td>
              <td>130</td>
          </tr>
          <tr>
              <td>Barkless</td>
              <td>Ab'Dendriel</td>
              <td>130</td>
          </tr>
          <tr>
              <td>Edron Hero Cave</td>
              <td>Edron</td>
              <td>150</td>
          </tr>
          <tr>
              <td>Glooth Tower</td>
              <td>Oramond</td>
              <td>170</td>
          </tr>
        </table>
        <br>
        <br>
        <table>
        <tr>
              <th>Spawn</th>
              <th>Location</th>
              <th>Level 200-300</th>
        </tr>
        <tr>
              <td>Banuta</td>
              <td>Port Hope</td>
              <td>200</td>
        </tr>
        <tr>
              <td>Walls</td>
              <td>Farmine</td>
              <td>200</td>
        </tr>
        <tr>
              <td>Asuras Palace</td>
              <td>Port Hope</td>
              <td>200</td>
        </tr>
      </table>
      <br>
      <br>
      <table>
        <tr>
              <th>Spawn</th>
              <th>Location</th>
              <th>Level 300-400</th>
        </tr>
        <tr>
              <td>Asura Mirrors</td>
              <td>Port Hope</td>
              <td>350</td>
        </tr>
    </table>
            </section>
        `
  }
}