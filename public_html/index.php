<?php
session_start();
?>

<html>
	<head>
		<title>Aurora das Histórias</title>
		<script src "./modules.navbar.js"></script>
	</head>
	<body>
		<h1>Página inicial do Site Aurora das Histórias</h1>
		<p></p>
		<my-navbar></my-navbar>
		<table border="1", style="width:100%,margin:auto,textAlign:center,border:1px,borderSpacing:1px,borderStyle:solid">
			<th><a hrfe="./modules/home.html">Home</a></th>
			<th><a hrfe="./modules/workd.html">Cenário</a></th>
			<th><a hrfe="./modules/rules.html">Regras do Sistema</a></th>
			<th><a hrfe="./modules/campaign.html">Gerenciamento de Campanha</a></th>
			<th style="width:30%"></th>
			<th><a hrfe="./modules/config/login.html">Login</a></th>
		</table>
	</body>
</html>
