jQuery(document).ready(function(){
	Cufon.now();
/*
	$("#main").tabs({
		show: function(event, ui) {
		}
	});
*/
	$("#motion").tabs({
		//fx: { opacity: "toggle" },
		show: function(event, ui) { Cufon.refresh("#motion>ul>li>a"); }
	}).append("<div class=\"clear\"></div>");
	$("#photography").tabs().append("<div class=\"clear\"></div>");
	$("#theatre").tabs().append("<div class=\"clear\"></div>");
	$("#art").tabs().append("<div class=\"clear\"></div>");
	$(".gallery").tabs({
		//fx: { opacity: "toggle" }
	});
	Cufon.refresh();
	setupZoom();
});

Cufon.replace("h1", {
	color: "-linear-gradient(#B20033, #910023)",
	//color: "-linear-gradient(#BC4029, #A72F29)",
	//color: "-linear-gradient(#9E2A2A, #872422)",
	textShadow: "#56132F 1px 1px"
});
Cufon.replace("h2");
Cufon.replace(".title");
Cufon.replace("#main>ul>li>a");
Cufon.replace("#motion>ul>h3");
Cufon.replace("#photography>ul>h3");
Cufon.replace("#art>ul>h3");
Cufon.replace("#theatre>ul>h3");
Cufon.replace("#contact h3");
