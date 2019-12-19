
/* Carrega la informació a les pàgines just després d'haver carregat tots els components*/
$(function(){

    // Carrega alumnes:
	$("#alumnes").html(Mustache.render(plantilla_alumnes,alumnes));


    // Carrega notícies del New York Times: 
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({'api-key': "901d9787e65c4f7da26142813f026c6d"});
	$.get(url,function(dades) {
		console.log(JSON.stringify(dades));
	    $("#noticies").html(Mustache.render(plantilla_noticies,dades.response.docs));
	});

    //Consulta un full de càlcul públic de Google:
	var url2= "https://sheets.googleapis.com/v4/spreadsheets/1WKbc1SW17vvsBCtrG6t4TqyaG2WMsCyXueprSGuK-So/values/";
	url2 += "Vendes2016_3!A1:B7?majorDimension=ROWS&key=AIzaSyBtvEk6A3rXLirsHxL5UhrU8DyHA-IWwOI"; 
	$.get(url2,function(dades){
		var taulavendes="<table>";
		for (i=0;i<dades.values[0].length;i++){
			taulavendes+="<tr class='h"+i+"'>"
			for (j=0;j<dades.values.length;j++){
				taulavendes+="<td class='v"+j+"'>"+dades.values[j][i]+"</td>";
			}
			taulavendes+="</tr>"
		}
		taulavendes+="</table>";
		$("#vendes").html(taulavendes);
		console.log(JSON.stringify(dades));
	});
});



