import { LitElement, html, css } from 'lit-element';

export class LitDocker extends LitElement {
  static get properties() {
    return {
      
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <h1>Lit Container</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam assumenda molestiae maxime cumque, ducimus reiciendis illum quod dolor obcaecati.</p>
    `;
  }
}
