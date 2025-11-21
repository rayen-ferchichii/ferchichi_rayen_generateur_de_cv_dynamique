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
function ajouterinfoperso(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let numtel = document.getElementById("numtel").value;
    let adresse = document.getElementById("adresse").value;
    let codepostal = document.getElementById("codepostal").value;
    let ville = document.getElementById("ville").value;
    let date_naiss = document.getElementById("date_naiss").value;
    let lieu_naiss = document.getElementById("lieu_naiss").value;
    const sexe = document.querySelector('input[name="sexe"]:checked');
    let genre = sexe ? sexe.value : "";
    let nationalite = document.getElementById("nationalite").value;
    const etatCivil = document.querySelector('input[name="etatcivil"]:checked');
    let valeur_etatcivil = etatCivil ? etatCivil.value : "";
    let github = document.getElementById("github").value;

    document.getElementById("cv_nom_complet").textContent = prenom + " " + nom;
    document.getElementById("cv_nom_prenom").textContent = prenom + " " + nom;
    document.getElementById("cv_email").textContent = email;
    document.getElementById("cv_telephone").textContent = numtel;
    document.getElementById("cv_adresse").textContent = adresse + " " + codepostal + " " + ville;
    document.getElementById("cv_date_naissance").textContent = date_naiss;
    document.getElementById("cv_lieu_naissance").textContent = lieu_naiss;
    document.getElementById("cv_nationalite").textContent = nationalite;
    document.getElementById("cv_etat_civil").textContent = valeur_etatcivil;
    document.getElementById("cv_sexe").textContent = genre;
    
    if (github) {
        document.getElementById("cv_github").innerHTML = `<a href="${github}" target="_blank">${github}</a>`;
    } else {
        document.getElementById("cv_github").textContent = "";
    }
};

function ajoutertitrepro(){
    let titreprof = document.getElementById("titre").value;
    let description_titre = document.getElementById("description_titre").value;
    
    document.getElementById("cv_titre_pro").textContent = titreprof || "Remplissez le formulaire pour voir l'aperçu ici";
    document.getElementById("cv_titre").textContent = titreprof;
    document.getElementById("cv_description").textContent = description_titre;
};