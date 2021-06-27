import { LitElement, html, css } from 'https://unpkg.com/lit@2.0.0-rc.1/index.js?module';

class SkillItem extends LitElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.maxStars = 5
        this.starLevel = Number(this.getAttribute("stars"))
        this.title = this.getAttribute("title")
        this.logo = this.getAttribute("logo")
        this.stars = []

        while (this.stars.length < this.maxStars) {
            this.stars.push(
                html`<svg version="1.1" class="skill-star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 487.222 487.222;" xml:space="preserve">
                            <path fill="${this.stars.length < this.starLevel ? '#f1c40f': '#778ca3'}" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                            c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                            c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                            c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                            c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                            C22.602,0.567,25.338,0.567,26.285,2.486z"></path>
                    </svg>`
            )
        }
        super.connectedCallback()
    }


    static get styles() {
        return css`
            :host {
                display: grid;
                grid-template-columns: 1fr;
                justify-content: center;
                gap: 10px 0;
                width: auto;
                justify-items: center;
            }

            #title {
                font-family: 'newsflash';
                font-size: clamp(16px, 4vw, 24px);
            }

            #skill-logo {
                display:block;
                width: 60px;
                height: auto;
            }

  
            
            #stars {
                display:grid;
                grid-template-columns: repeat(5, 15px);
                justify-content:center;
                align-content:center;
            }

        `;
    }
    
    render() {
        return html`    
                        <img id="skill-logo" src="${this.logo}"></img>
                        <span id="title">${this.title}</span>
                        <section id="stars">
                            ${this.stars}
                        </section>
                   `;
    }
}

customElements.define('skill-item', SkillItem);