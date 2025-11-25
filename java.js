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

function ajouterformation(){
    const fieldsets = document.querySelectorAll("fieldset");
    const formationsList = document.getElementById("liste_formation");
    formationsList.innerHTML = "";
    
    fieldsets.forEach(fieldset => {
        const legend = fieldset.querySelector("legend");
        if (legend && legend.textContent === "Formation") {
            let formation = fieldset.querySelector("#formation").value;
            let etablissement = fieldset.querySelector("#etablissement").value;
            let villeFormation = fieldset.querySelector("#ville_formation").value;
            let dateDebut = fieldset.querySelector("#date_debut").value;
            let dateFin = fieldset.querySelector("#date_fin").value;
            let description = fieldset.querySelector("#description_formation").value;

            if (formation || etablissement) {
                const formationDiv = document.createElement("div");
                formationDiv.className = "item_liste";

                let contenu = "";
                if (formation) contenu += "<h4>" + formation + "</h4>";
                if (etablissement) {
                    contenu += "<p>" + etablissement;
                    if (villeFormation) contenu += ", " + villeFormation;
                    contenu += "</p>";
                }
                if (dateDebut || dateFin) {
                    contenu += "<p><em>" + dateDebut + " - " + dateFin + "</em></p>";
                }
                if (description) contenu += "<p>" + description + "</p>";

                formationDiv.innerHTML = contenu;
                formationsList.appendChild(formationDiv);
            }
        }
    });
};

function ajouterexperience() {
    const fieldsets = document.querySelectorAll("fieldset");
    const experiencesList = document.getElementById("liste_experience");
    experiencesList.innerHTML = "";
    
    fieldsets.forEach(fieldset => {
        const legend = fieldset.querySelector("legend");
        if (legend && legend.textContent === "Expérience professionnelle") {
            let poste = fieldset.querySelector("#poste").value;
            let entreprise = fieldset.querySelector("#entreprise").value;
            let villeExperience = fieldset.querySelector("#ville_experience").value;
            let dateDebut = fieldset.querySelector("#date_debut_experience").value;
            let dateFin = fieldset.querySelector("#date_fin_experience").value;
            let description = fieldset.querySelector("#description_experience").value;

            if (poste || entreprise) {
                const experienceDiv = document.createElement("div");
                experienceDiv.className = "item_liste";

                let contenu = "";
                if (poste) contenu += "<h4>" + poste + "</h4>";
                if (entreprise) {
                    contenu += "<p>" + entreprise;
                    if (villeExperience) contenu += ", " + villeExperience;
                    contenu += "</p>";
                }
                if (dateDebut || dateFin) contenu += "<p><em>" + dateDebut + " - " + dateFin + "</em></p>";
                if (description) contenu += "<p>" + description + "</p>";

                experienceDiv.innerHTML = contenu;
                experiencesList.appendChild(experienceDiv);
            }
        }
    });
}

function ajoutercompetence() {
    const fieldsets = document.querySelectorAll("fieldset");
    const competencesList = document.getElementById("liste_competence");
    competencesList.innerHTML = "";
    
    fieldsets.forEach(fieldset => {
        const legend = fieldset.querySelector("legend");
        if (legend && legend.textContent === "Compétences") {
            let competence = fieldset.querySelector("#competence").value;
            let niveau = fieldset.querySelector("#niveau").value;
            let certification = fieldset.querySelector("#certification").value;

            if (competence || certification) {
                const competenceDiv = document.createElement("div");
                competenceDiv.className = "item_liste";

                let contenu = "";
                if (competence) contenu += "<p><strong>" + competence + "</strong>";
                if (niveau) contenu += " - " + niveau;
                if (certification) contenu += "<br><em>Certification: " + certification + "</em>";
                contenu += "</p>";

                competenceDiv.innerHTML = contenu;
                competencesList.appendChild(competenceDiv);
            }
        }
    });
}

function ajouterlangue() {
    const fieldsets = document.querySelectorAll("fieldset");
    const languesList = document.getElementById("liste_langue");
    languesList.innerHTML = "";
    
    fieldsets.forEach(fieldset => {
        const legend = fieldset.querySelector("legend");
        if (legend && legend.textContent === "Langues") {
            let langue = fieldset.querySelector("#langue").value;
            let niveau = fieldset.querySelector("#niveau_langue").value;

            if (langue) {
                const langueDiv = document.createElement("div");
                langueDiv.className = "item_liste";

                let contenu = "<p><strong>" + langue + "</strong>";
                if (niveau) {
                    contenu += " - " + niveau;
                } else {
                    contenu += " - Niveau non spécifié";
                }
                contenu += "</p>";

                langueDiv.innerHTML = contenu;
                languesList.appendChild(langueDiv);
            }
        }
    });
}

function ajoutersoftskills() {
    const softSkillsCheckboxes = document.querySelectorAll('input[name="soft_skills"]:checked');
    const softSkillsList = document.getElementById("cv_soft_skills");
    softSkillsList.innerHTML = "";

    softSkillsCheckboxes.forEach(checkbox => {
        const skillTag = document.createElement("span");
        skillTag.className = "skill-tag";
        skillTag.textContent = checkbox.value;
        softSkillsList.appendChild(skillTag);
    });
}

function ajoutercentresinteret() {
    const fieldsets = document.querySelectorAll("fieldset");
    const centresInteretList = document.getElementById("cv_centres_interet");
    centresInteretList.innerHTML = "";

    fieldsets.forEach(fieldset => {
        const legend = fieldset.querySelector("legend");
        if (legend && legend.textContent === "Centres d'intérêt") {
            let interet = fieldset.querySelector("#interet").value;

            if (interet) {
                const interestTag = document.createElement("span");
                interestTag.className = "interest-tag";
                interestTag.textContent = interet;
                centresInteretList.appendChild(interestTag);
            }
        }
    })
}