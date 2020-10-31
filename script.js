var ressources = 
{
  "catégorie": {
    "web front-end": {
      "technos": [
        "Angular",
        "Angular JS",
        "CreateJS",
        "Ember.JS",
        "HTML CSS JS",
        "jQuery",
        "Meteor JS",
        "ReactJS", 
        "React Native",
        "Vue.JS"
      ],
      "projet": [
        "Afficher un cybertruck, SANS GIF NI IMAGES",
        "Afficher un objet avec des animations, SANS GIF",
        "Créer une animation de neige/pluie qui tombe",
        "Créer un chronomètre",
        "Créer un clicker game",
        "Créer un pokedex",
        "Faire un calendrier responsive",
        "Faire une interface web inspiré d'un environnement de bureau",
        "Faire une interface web inspiré d'un environnement téléphone",
        "Recoder l'interface d'un site web populaire au choix (Netflix, Facebook, Twitter...)"
      ]
    },
    "web back-end": {
      "technos": [
        "Laravel",
        "NodeJS",
        "Django",
        "Flask",
        "PHP from Scratch",
        "Ulfius",
        "Beego",
        "Symfony", 
        "ASP.NET",
        "CakePHP"
      ],
      "projet": [
        "Créer une API d'envoi de mail",
        "Coder une librarie pour les back-end",
        "Créer un service de validation de format d'input (Numéro de téléphone, adresse, date...)",
        "Coder une API permettant de vérifier et de scaler l'état un serveur",
        "Coder un réseau social",
        "Coder un système de messagerie",
        "Créer une API pour scoper l'une des table de OpenDataSoft",
        "Créer un hebergeur d'image",
        "Coder un trombinoscope automatique grâce au données de messagerie d'entreprise (Slack/Rocket.Chat)"
      ]
    }
  }
}

jQuery(document).ready(function($) {
    for (var p in ressources['catégorie']) {
        $('#select').append("<option value=\""+ p + "\">" + p + "</option>")
    }              

    $( "button" ).click(function() {
        document.getElementById("result").innerHTML = ''
        document.getElementById("title-result").style.display = 'block'
        var challenge = ressources["catégorie"][ document.getElementById("select").value ]["projet"][Math.floor(Math.random()*ressources["catégorie"][document.getElementById("select").value]["projet"].length)]
        var tech = ressources["catégorie"][document.getElementById("select").value]["technos"][Math.floor(Math.random()*ressources["catégorie"][document.getElementById("select").value]["technos"].length)]

        $('#result').append(challenge + " en " + tech)
    });
});
