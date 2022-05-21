import appStore from "./store";
import {html, LitElement} from "lit";
import '../style/style.scss';

class Main extends LitElement {

    appStore = appStore;

    render() {
        this.style
        return html `
            <h1>Hello from Lit</h1>
            <button class="button is-primary">Show me</button>
        `
    }
}

customElements.define('vw-app-main',Main);