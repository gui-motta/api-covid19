const url = "https://api.covid19api.com/dayone/country/brazil"

window.onload = function(){
  callAPI(url, callBack);
}

function callAPI(url, callBack){
    var obj = new XMLHttpRequest();
    obj.open("GET", url, true);
    obj.responseType = "json";
    obj.onload = function(){
      if (obj.status === 200) {
        callBack(obj.response);
      }else {
        alert("Problema ao acessar servidor!")
      }
    }
    obj.send();
}

function callBack(resp){
  for (var i = 0; i < resp.length; i++) {
    let data = new Date(resp[i].Date);
    let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth()+1)) + "/" + data.getFullYear();

    document.getElementById('content').innerHTML +=
    "<article>" +
    "<p> Cidade: " + resp[i].City + "</p>" +
    "<p> UF: " + resp[i].Province + "</p>" +
    "<p> Casos Confirmados: " + resp[i].Confirmed + "</p>" +
    "<p> Número de Mortes: " + resp[i].Death + "</p>" +
    "<p> Recuperados: " + resp[i].Recovered + "</p>" +
    "<p> Ativos: " + resp[i].Active + "</p>" +
    "<p> Data: " + dataFormatada + "</p>" +
    "</article>";

  }
}
