class fomulario extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <footer>
                <img src="./IMAGE/Logo.png" alt="clebi">
                <h4>Guilherme</h4>
            </footer>
            <input></input>
            <article>
                <div>sign up</div>
                <div>login</div>
            </article>
        `
    this.id = `main`
    this.style.display = `flex`
    }
}
customElements.define("meu-formulario", fomulario)