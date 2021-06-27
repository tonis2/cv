import { LitElement, html, css } from 'https://unpkg.com/lit@2.0.0-rc.1/index.js?module';

class PortfolioItem extends LitElement {
    constructor() {
        super()
        this.open = false
    }

    connectedCallback() {
        this.logo = this.getAttribute("logo")
        this.link = this.getAttribute("link") || null
        this.title = this.getAttribute("title")
        super.connectedCallback()
    }

    showMore() {
        this.open = !this.open
        this.requestUpdate()
    }

    openImage(event) {
        window.dispatchEvent(new CustomEvent('open-image', { detail: event.currentTarget.src }))
    }

    firstUpdated() {
        const slots = this.querySelector("[slot='extra-content']")
        if (slots) {
            for (let child of slots.assignedSlot.assignedNodes()[0].children) {
                child.onclick = this.openImage.bind(this)
            }
        } else {
            this.shadowRoot.querySelector("#more-info").remove()
        }
    }

    static get styles() {
        return css`
            :host {
                height: auto;
                width: 100%;
                border-left: solid 0.5px var(--black);
                border-right: solid 0.5px var(--black);
                border-bottom: solid 0.5px var(--black);
                padding: 30px 30px 10px 30px;
                box-sizing: border-box;
                position:relative;
            }

            .entry-logo {
                width: clamp(120px, 10vw, 200px);
                height: auto;
                float: right;
                padding: 20px 0 10px 20px;
            }

            .link {
                outline: none;
                color: var(--black);
                font-size: calc(var(--text-size) + 4px);
                position: absolute;
                left: 20px;
                top: 0;
                font-family: ebGarmond;
                font-weight: bold;
                transition: 0.2s ease;
            }

            .link:hover {
                color: var(--blue);
            }

            ::slotted([slot='content']) {
                font-family: manrope;
                text-align: justify;
                font-size: var(--text-size);
                float:none;
                display:block!important;
            }

            ::slotted([slot='extra-content']) {
                justify-content: center;
                display:grid!important;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                width: 100%;
                height: auto;
            }
            
            #more-info {
                display: grid;
                justify-content: center;
                align-items: center;
                justify-items: center;
                grid-template-columns: 105px 35px;
                width: auto;
                margin: 0 auto;
                cursor: pointer;
                transition: 0.2s ease;
                margin-top: 15px;
                font-family: 'manrope';
            }

            #more-info:hover {
               color: var(--blue);
            }

            #more-info span {
                display:block;
                width: 140px;
                font-size: calc(var(--text-size) - 3px);
            }

            #more-info img {
                height: 25px;
                width: 25px;
            }

            @media only screen and (max-width: 800px) {
                ::slotted([slot='extra-content']) {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        `;
    }
    
    render() {
        return html`
                <img class="entry-logo" src="${this.logo}"></img>
                <a class="link" href="${this.link}" target="_blank">${this.title}</a>
                <slot name="content"></slot>
                <slot name="extra-content" style="display: ${this.open ? 'grid': 'none'};"></slot>
                <section @click=${this.showMore.bind(this)} id="more-info">
                    <span>${!this.open ? "Show gallery..." : "Hide gallery.."}</span>
                    <img src="/images/more.png"></img>
                </section>
                   `;
    }
}

customElements.define('portfolio-item', PortfolioItem);