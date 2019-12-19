function transition(newPage,type) {
    var toPage = $(newPage),
        fromPage = $("#pages .current"),
		direction = "";

	//Depenent de la pàgina final i inicial decideix si la transició ha d'anar
	//cap a la dreta, o cap a l'esquerra (reverse)
	if (toPage.attr("id") < fromPage.attr("id")){
		direction = " reverse";
		console.log("TO "+toPage.attr("id") + " FROM " + fromPage.attr("id"));
	}

    //prevent reload current page.
	// Necessari per a solucionar el problema de tornar a seleccionar la pàgina actual
    if (toPage.hasClass("current") || toPage === fromPage) {
        return;
    }

	//canvia les classes de la pàgina inicial i final per tal que faci l'efecte 
	// de transició especificat
    toPage
        .addClass("current "+type + " in" + direction)
        .one("webkitAnimationEnd", function(){
            fromPage.removeClass("current " + type + " out" + direction);
            toPage.removeClass(type + " in" + direction);
        });
    fromPage.addClass(type + " out"+ direction);
}

// afegim el gestor d'events click a tots els botons de la barra de navegació
// de forma que al fer click vagi a la pàgina especificada en el seu atribut href
// utilitzant una transició de tipus push. Altres efectes podrien ser fade ...
$("#nav-bar a").bind('click', function(e) {
    e.preventDefault();
    var nextPage = $(e.target.hash);
    transition(nextPage, "push");
});





