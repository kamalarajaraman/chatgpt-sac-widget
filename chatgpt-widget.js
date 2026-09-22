class ChatGPTWidget extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
            <style>
                .container {
                    font-family: Arial;
                    padding: 20px;
                }

                input {
                    width: 70%;
                    padding: 10px;
                }

                button {
                    padding: 10px 20px;
                    margin-left: 5px;
                }

                #response {
                    margin-top: 20px;
                }
            </style>

            <div class="container">
                <h2>ChatGPT Assistant</h2>

                <input
                    id="question"
                    type="text"
                    placeholder="Ask something..."
                />

                <button id="send">Send</button>

                <div id="response"></div>
            </div>
        `;

        shadow.getElementById("send")
            .addEventListener("click", () => {

                const question =
                    shadow.getElementById("question").value;

                shadow.getElementById("response").innerText =
                    "You asked: " + question;
            });
    }
}

customElements.define(
    "chatgpt-widget",
    ChatGPTWidget
);
