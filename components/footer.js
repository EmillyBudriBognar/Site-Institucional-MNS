class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">
            <div class="sec aboutus">
                <h3>Sobre Nós</h3>
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
                <h3>Suporte</h3>
                <ul>
                    <li><a href="#"><p>FAQ</p></a></li>
                    <li><a href="#"><p>Política de Privacidade</p></a></li>
                    <li><a href="#"><p>Ajuda</p></a></li>
                    <li><a href="#"><p>Contato</p></a></li>
                </ul>
            </div>
            <div class="sec quicklinks">
                <h3>Links</h3>
                <ul>
                    <li><a href="../home/index.html"><p>Home</p></a></li>
                    <li><a href="../servicos/index.html"><p>Serviços</p></a></li>
                    <li><a href="../sobre/index.html"><p>Sobre</p></a></li>
                </ul>
            </div>
            <div class="sec contact">
                <h3>Contate-nos</h3>
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
