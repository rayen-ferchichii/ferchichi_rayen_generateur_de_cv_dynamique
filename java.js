document.addEventListener("DOMContentLoaded", function(){
     evenementsformulaire();
     evenementsboutons();
});
function evenementsformulaire() {
    const champs = document.querySelectorAll("input, textarea, select");
    champs.forEach(champ => {                                           
        champ.addEventListener("input", changerapercu); 
        champ.addEventListener("change", changerapercu);               
     });
}
function evenementsboutons(){
    const boutons = document.querySelectorAll("button");
    boutons.forEach(bouton => {
        bouton.addEventListener("click", function(e) {
            const fieldsetavant = this.previousElementSibling;
            dupliquerfieldset(fieldsetavant);
        });
    });
}
function dupliquerfieldset(fieldsetavant){
    const copie = fieldsetavant.cloneNode(true);
    const champs = copie.querySelectorAll("input,textarea,select");
    
    champs.forEach(champ => {
        if(champ.type != "radio" && champ.type != "checkbox"){
            champ.value = "";
        }
        else if (champ.type === "radio" || champ.type === "checkbox") {
            champ.checked = false;
        }
    });
    const bouton = fieldsetavant.nextElementSibling;
    const formulaire = fieldsetavant.parentNode;
    formulaire.insertBefore(copie, bouton);
    evenementsformulaire();
}
function changerapercu() {
    ajouterinfoperso();
    ajoutertitrepro();
    ajouterformation();
    ajouterexperience();
    ajoutercompetence();
    ajouterlangue();
    ajoutersoftskills();
    ajoutercentresinteret();
}