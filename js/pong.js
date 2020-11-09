//Déclaration de variables
let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));

//alert(gauche);

class Terrain{
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
}
//fichier Balle.js
class Balle{
constructor($element){
    this.$element=$element;
    this.haut=parseInt($("#balle").css("top"));
    this.gauche=parseInt($("#balle").css("left"));
    this.vitesseX=2;
    this.vitesseY=0.5;
    }
    majHTML(){
        this.$element.css("left", balle.gauche);
        this.$element.css("top", balle.haut);

    }
}

let terrain=new Terrain($("terrain"));
let balle=new Balle($("#balle"));
//console.log(terrain);

//boucle afin de modifier la position de la balle toutes les 10 millisecondes
//let i=0;
setInterval(function()
{
    balle.gauche = balle.gauche+balle.vitesseX;
    balle.haut = balle.haut+vitesseY
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche<0){
        balle.gauche=0
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut=0;
    }

    if(balle.haut>terrain.hauteur){
        balle.haut=terrain.hauteur
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut<0){
        balle.haut=0
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut=0;
    }

    balle.majHTML();
    
}, 10);