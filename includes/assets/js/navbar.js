class navBar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = '
			<table border="1", style="width:100%,margin:auto,textAlign:center,border:1px,borderSpacing:1px,borderStyle:solid">
				<th><a hrfe="./modules/home.html">Home</a></th>
				<th><a hrfe="./modules/workd.html">Cenário</a></th>
				<th><a hrfe="./modules/rules.html">Regras do Sistema</a></th>
				<th><a hrfe="./modules/campaign.html">Gerenciamento de Campanha</a></th>
				<th style="width:30%"></th>
				<th><a hrfe="./modules/config/login.html">Login</a></th>
			</table>
		';
	}
}
customElements.define('my-navbar',navBar);
