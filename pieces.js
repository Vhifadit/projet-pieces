//recuperation des pieces depuis le fichier json
const reponse=await fetch("pieces-autos.json")
const pieces=await reponse.json()
/*manipulation  du DOM pour la creation 
 des elements html afin d'afficher les fiches produits 
*/
let article=pieces[0]
let imageElement=document.createElement("img")
    imageElement.src=article.image
let nomElement=document.createElement("h2")
    nomElement.innerText=article.nom
let prixElement=document.createElement("p")
    prixElement.innerText=`Prix:${article.prix} € (${article.prix <35?"€":"€€€"} )`
let categorieElement=document.createElement("p")
    categorieElement.innerText=article.categorie ??"Aucune Categorie"
let descriptionElement=document.createElement("p")
    descriptionElement.innerText=article.description ??"Pas de description pour le moment."
let disponibiliteElement=document.createElement("p")
    disponibiliteElement.innerText=`(${article.disponibilite?"En stock":"Rupture de stock"})`
/*rattachement de ses elements creer a la pages html */
let SectionFiches=document.querySelector(".fiches")
SectionFiches.appendChild(imageElement)
SectionFiches.appendChild(nomElement)
SectionFiches.appendChild(prixElement)
SectionFiches.appendChild(categorieElement)
SectionFiches.appendChild(descriptionElement)
SectionFiches.appendChild(disponibiliteElement)