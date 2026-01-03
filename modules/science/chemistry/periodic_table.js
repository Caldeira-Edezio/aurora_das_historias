<!DOCTYPE html>
<html>
  <head>
    <title>Site - Aurora das Histórias</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/Caldeira-Edezio/aurora_das_historias@0adcf5b932dffb162bf304bae846ee87e1c71075/settings/stylesheet.css">
  </head>
  <body>
    
    <h1 class="header mainHeader">Tabela periódica de elementos</h1>
    <h2 class="header secHeader">Elementos mundanos</h2>
    
    <button class="elementButton" onclick="printElement(this.textContent)">Hidrogênio</button>
    <button class="elementButton" onclick="printElement(this.textContent)">Hélio</button>
    
    <p id="clickedElement"></p>
    
    <script>
    function printElement(elemento) {
    	document.getElementById("clickedElement").innerHTML = elemento;
    }
    </script>
  </body>
</html>
