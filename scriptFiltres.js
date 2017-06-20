function filtrerSommaire(filtre, realisationChoix) {
    var filtreElt = document.getElementById(filtre);
    filtreElt.addEventListener("click", function() {
        var realisationsElts = document.getElementById("realisations");
        var integraleRealisationElts = realisationsElts.querySelectorAll(".realisations, .realisation, .exposition, .dessin, .installation, .sculpture, .livret");
        for (i = 0; i < integraleRealisationElts.length; i ++) {
            integraleRealisationElts[i].style.display = "block";
        }
        var excludedElts = realisationsElts.querySelectorAll("div:not(." + realisationChoix + ")"); //regarder la fin de cette ligne à tête reposée
        for (i = 0; i < excludedElts.length; i++) {
            excludedElts[i].style.display = "none";
        }
        var texteRealisationsElts = document.querySelectorAll(".texteRealisation");
        for (j = 0; j < texteRealisationsElts.length; j++) {
            texteRealisationsElts[j].style.display = "block";
        }
    });
}

filtrerSommaire("filtreExposition", "exposition");
filtrerSommaire("filtreDessin", "dessin");
filtrerSommaire("filtreInstallation", "installation");
filtrerSommaire("filtreSculpture", "sculpture");
filtrerSommaire("filtreLivret", "livret");

//gestionnaire d'evt pour afficher tout à nouveau
var filtreToutElt = document.getElementById("filtreTout");
filtreToutElt.addEventListener("click", function() {
    var realisationsElts = document.getElementById("realisations");
    var integraleRealisationElts = realisationsElts.querySelectorAll(".realisations, .realisation, .exposition, .dessin, .installation, .sculpture, .livret");
    for (i = 0; i < integraleRealisationElts.length; i ++) {
        integraleRealisationElts[i].style.display = "block";
    }
});