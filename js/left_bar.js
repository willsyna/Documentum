var leftbar = document.querySelector(".left-bar")
var div = document.querySelector(".html")
var links = document.querySelectorAll(".link")

fetch("./data/lista.json").then(function (resposta) {
    return resposta.json();
}).then(function (dados) {
    mostrarLinks(dados)
})

function mostrarLinks(dados) {
    if(!dados) {
        return
    }
    var ul = document.createElement('ul')
    
    dados.forEach(function (item, i) {
        var li = document.createElement('li')
        var a = document.createElement('a')
        
        a.href = "#article" + (i + 1);
        a.setAttribute("data-arquivo", "article" + (i + 1))
        a.innerText = item.titulo
        
        li.appendChild(a)
        ul.appendChild(li)
        
        a.onclick = function() {
            fetch("./pages/" + a.getAttribute("data-arquivo") + ".html").then(function(resposta) {
                return resposta.text()
            }).then(function(dados) {
                mostrarTexto(dados)
            })
        }
        
        var div = document.querySelector(".html")
        
        
        function mostrarTexto(dados) {
            div.innerHTML = dados;
        }
        
    })
    
    leftbar.appendChild(ul)
    
}