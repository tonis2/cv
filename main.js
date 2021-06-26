import "./components/svg.js"
import "./components/portfolio.js"

document.querySelector(".date").innerHTML = new Date().toISOString().split("T")[0]
window.addEventListener("open-image", (e) => {
    document.body.insertAdjacentHTML("afterbegin", `<section id="modal-window">
                                                        <img id="modal-image" src="${e.detail}"></img>
                                                        <img id="modal-close" src="images/close.svg"></img>
                                                    </section>`)

    const modal = document.querySelector("#modal-window")
    modal.onclick = () => { modal.remove() }
}, false);