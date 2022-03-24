// Application Meteo
// Stocker l'url et ville


let ville = "Tokyo";
recevoirTemperature(ville);

let changerDeVille =  document.querySelector('#changer').addEventListener('click', () => {
    let ville = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(ville)
});

function recevoirTemperature(ville){
    
    const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' + ville +'&appid=3f352febb5f4f1a89f1b50d6ebde1853&units=metric';
    
    // Envoyer requet AJAX

    let requete = new XMLHttpRequest();
    requete.open("GET", url);
    requete.responseType = "json";
    requete.send();

    // Reponse
    requete.onload = function () {
      if (requete.readyState === XMLHttpRequest.DONE) {
          if (requete.status === 200) {
            let reponse = requete.response; // on stock la reponse
            let temperature = reponse.main.temp;
            let ville = reponse.name
            document.querySelector("#temperature_label").textContent = temperature;
            document.querySelector("#ville").textContent = ville;

        } else {
            alert("Un probleme est intervenue , merci de revenir plus tard.");
        }
    }
};

}



