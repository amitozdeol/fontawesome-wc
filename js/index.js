class FaIcon extends HTMLElement{
    constructor(){
        super();
        this.getSVG();
    }

    async getSVG(){
        const type = this.getAttribute('type');
        const icon = this.getAttribute('icon');
        const res = await fetch(`public/fa-svgs/${type}/${icon}.svg`);
        const svg = await res.text();
        this.innerHTML=svg;
    }
}

window.customElements.define('fa-icon', FaIcon);
