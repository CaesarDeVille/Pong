

let largeur= $(#"balle").widht();
let gauche=parseInt ($(#"balle").css("left"));
alert(gauche);

setInterval(function()(
    gauche=gauche+1;
    haut-haut+0.5;
    $(#"balle").css("left",gauche);
    $(#"balle").css("top",haut);
),10;