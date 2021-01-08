import { LitElement, html, css } from 'lit-element';
import { APP_API } from './app-api.js';

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
    `;
  }

  firstUpdated() {
    APP_API.getStuff().then((msg) => console.log(msg));
    APP_API.postStuff();
  }
  
}
