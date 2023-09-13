"use strict";
class fomulario extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
                <img src="./IMAGE/Logo.png" alt="clebi" class="i">
                <h4>Guilherme</h4>
            </footer>
            <input></input>
            <article>
                <div class="a">sign up</div>
                <div class="a">login</div>
            </article>
        `;
        this.id = `main`;
        this.style.display = `flex`;
    }
}
customElements.define("meu-formulario", fomulario);
