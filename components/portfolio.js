import { LitElement, html, css } from 'https://unpkg.com/lit@2.0.0-rc.1/index.js?module';
import { classMap } from 'https://unpkg.com/lit@2.0.0-rc.1/directives/class-map.js?module';

class PortfolioItem extends LitElement {
    connectedCallback() {
        this.logo = this.getAttribute("logo")
        this.link = this.getAttribute("link") || null
        this.title = this.getAttribute("title")
        super.connectedCallback()
    }

    showMore() {

    }

    static get styles() {
        return css`
            :host {
                height: auto;
                width: 100%;
                border-left: solid 0.5px var(--black);
                border-right: solid 0.5px var(--black);
       
                padding: 30px;
                box-sizing: border-box;
                position:relative;
            }

            .content:hover > .fill-grey {
                filter:none;
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

            .fill-grey  {
                filter: grayscale(100%);
                transition: 0.2s ease;
            }
            
            .fill-grey:hover {
                filter: none;
            }
            

            #more-info {
                display: grid;
                justify-content: center;
                align-items: center;
                justify-items: center;
                grid-template-columns: 105px 35px;
                width: 150px;
                position: absolute;
                left: 15px;
                bottom: -5px;
                cursor: pointer;
                transition: 0.2s ease;
            }

            #more-info:hover {
               color: var(--blue);
            }

            #more-info span {
                font-size: calc(var(--text-size) - 3px);
            }

            #more-info img {
                height: 35px;
                width: 35px;
            }
        `;
    }
    render() {
        return html`
                   <img class="entry-logo fill-grey" src="${this.logo}"></img>
                   ${this.link ? html`<a class="link" href="${this.link}" target="_blank">${this.title}</a>` : null}
                   <slot name="content"></slot>
                   <section @click=${this.showMore} id="more-info">
                        <span>More info...</span>
                        <img src="/images/more.png"></img>
                   </section>
                   `;
    }
}

customElements.define('portfolio-item', PortfolioItem);