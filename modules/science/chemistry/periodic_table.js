<!DOCTYPE html>
<html>
  <head>
    <title>Site - Aurora das Histórias</title>
    <style> //Style of button
      #elementButton {
        background-color: #F0F0F0;
        border: solid;
        font-size: 10px;
        text-align: center;
      }
      #elementButton:hover {
      	background-color: #5065F0;
      }
    </style>
    <style> //Style of header
    	#mainHeader {
        	text-align: center;
        }
    </style>
    <style> //Style of header
    	#secHeader {
        	text-align: center;
        }
    </style>
  </head>
  <body>
    
    <h1 id="mainHeader">Tabela periódica de elementos</h1>
    <h2 id="secHeader">Elementos mundanos</h2>
    
    <button id="elementButton" onclick="printElement(this.textContent)">Hidrogênio</button>
    <button id="elementButton" onclick="printElement(this.textContent)">Hélio</button>
    
    <p id="clickedElement"></p>
    
    <script>
    function printElement(elemento) {
    	document.getElementById("clickedElement").innerHTML = elemento;
    }
    </script>
  </body>
</html>
