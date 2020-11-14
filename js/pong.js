//on cree un nouvel objet par les HTML/ CSS
let terrain = new Terrain($("#terrain"));

let balle = new Balle($("#balle"));

let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));
raquetteDroite.changeDirection();

//boucle pour modifier les positions raquette, balles toutes les millis 
//les if sont là pour créer du rebond
setInterval(function()
{
    //on reprend les classes pour les faire agir
    balle.bouger();

    raquetteGauche.bouger();
    
    raquetteDroite.bouger();
}, 10);