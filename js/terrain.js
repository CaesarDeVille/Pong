//Mise en place de la classe "terrain" 
class Terrain
{
    constructor($element)
    {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }

    tilt()
    {
        //ajout de la classe
        this.$element.addClass("tilt");
        let ici = this;

        setTimeout(
            function()
            {
                //on remove la classe
                ici.$element.removeClass("tilt");
            },200
        );
    }
}