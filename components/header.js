class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header fixed-top"> 
            <nav class="nav">
                <a href="../home/index.html" class="logo">
                    <img src="../../assets/logo-white-mns.svg" alt="Logotipo Mount New Systems">
                </a>
                <button class="hamburguer"></button>
                <ul class="nav-list">
                    <div class="text-center">
                        <li>
                            <a href="../home/index.html">Home</a>
                        </li>
                        <li>
                            <a href="../servicos/index.html">Serviços</a>
                        </li>
                        <li>
                            <a href="../sobre/index.html">Sobre</a>
                        </li>
                    </div>
                    <div class="text-end">
                        <li>
                            <a href="../carrinho/index.html" id="cart">
                            <i class="fa-solid fa-cart-shopping"></i>
                                <span id="cart-count">0</span>
                            </a>
                        </li>
                        <li>
                            <a href="../login/index.html" id="login">
                            <i class="fa-solid fa-user"></i>
                                <span id="login-link"></span>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('main-header', Header);
