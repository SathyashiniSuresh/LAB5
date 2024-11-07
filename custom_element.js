alert("Thya was here!");

class Centre extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`
    }
}

customElements.define ('x-center', Centre);

class Year extends HTMLElement { 
    connectedCallback (){ 
        this.innerHTML = new Date ().getFullYear();
    }
}

customElements.define("x-year", Year); 

class XRed extends HTMLElement {
    connectedCallback (){
        this.innerHTML = `<div style="color:red">${this.innerHTML}</div>`
    
    }
}

customElements.define ("x-red",XRed);

