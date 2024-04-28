class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">
            <div class="sec aboutus">
                <h2>Sobre Nós</h2>
                <p>
                    A Mount New Systems é líder na criação
                    de sistemas "de outro mundo",
                    que transcendem o convencional.
                    Com nossa equipe dedicada e focada na
                    vanguarda da tecnologia,
                    estamos moldando o futuro com soluções
                    verdadeiramente revolucionárias.
                </p>
                <ul class="sci">
                    <li><a href="#"><i class="fa-brands fa-facebook-f" style="color: #faf5ff;"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-x-twitter" style="color: #faf5ff;"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram" style="color: #faf5ff;"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin-in" style="color: #faf5ff;"></i></a></li>
                </ul>
            </div>
            <div class="sec quicklinks">
                <h2>Suporte</h2>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div class="sec quicklinks">
                <h2>Links</h2>
                <ul>
                    <li><a href="../home/index.html">Home</a></li>
                    <li><a href="../servicos/index.html">Serviços</a></li>
                    <li><a href="../sobre/index.html">Sobre</a></li>
                </ul>
            </div>
            <div class="sec contact">
                <h2>Contate-nos</h2>
                <ul class="info">
                    <li>
                        <span><i class="fa-solid fa-phone" style="color: #21063b;"></i></span>
                        <p><a href="tel:(11) 9876-54321">(11) 9876-54321</a></p>
                    </li>
                    <li>
                        <span><i class="fa-regular fa-envelope" style="color: #21063b;"></i></span>
                        <p><a href="mailto:mns@contact.com">mns@contact.com</a></p>
                    </li>
                </ul>
            </div>
    </footer>
    </div>
        <div class="copyrightText">
        <p>@ MNS 2024 --- 2024. All rights reserved.</p>
    </div>
        `;
    }
}

customElements.define('main-footer', Footer);
