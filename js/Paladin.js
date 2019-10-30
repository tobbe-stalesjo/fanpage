class Paladin extends Domer {

    

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
              <td>Krailos Giant Spiders</td>                <!--Kan man lägga in en href på dessa?-->
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
              <td>Oramond West</td>
              <td>Oramond</td>
              <td>180</td>
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
              <td>300</td>
        </tr>
        <tr>
              <td>Lower Spikes</td>
              <td>Kazordoon</td>
              <td>350</td>
        </tr>
    </table>
            </section>
        `
  }
}