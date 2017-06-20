var filtreExposition = document.getElementById("filtreExposition");
filtreExposition.addEventListener("click", function() {
    var realisationsElts = document.getElementById("realisations");
    var notExpositionElts = realisationsElts.querySelectorAll("div:not(.exposition)"); 
    for (i = 0; i < notExpositionElts.length; i++) {
        notExpositionElts[i].style.display = "none";
    }
    var texteRealisationsElts = document.querySelectorAll(".texteRealisation");
    for (j = 0; j < texteRealisationsElts.length; j++) {
        texteRealisationsElts[j].style.display = "block";
    }
    filtreExposition.style.color = "rgba(253,0,141,0.8)";
    filtreExposition.style.textDecoration = "underline";
});