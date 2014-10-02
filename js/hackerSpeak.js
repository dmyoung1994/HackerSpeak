(function ( $ ) {
	
	var verbs 	  = ["Building", "Scaling", "Hashing", "Importing", "Compiling", "Replicating",
				   	 "Optimizing", "Composing", "Migrating", "Engineering", "Visualizing", 
				     "Layering", "Spinning Up", "Shipping", "Hacking", "Staging", "Testing", 
				     "Reconfiguring", "Socializing"];
				   
	var nounsSing = ["Data", "Pointer", "Nested", "Bit", "Stack", "Web Scale", "Deployment",
				    "Framework", "Pivot", "Agile", "Cloud", "Realtime", "Big Data",
				    "Responsive", "Vertical", "Social"];
				    
	var nounsPlur = ["Tables", "Nodes", "Containers", "Traces", "Databases", "Technologies",
					"Servers", "Feeds", "Updates"];

	$.fn.hackerSpeak = function () {
		var randVerb = Math.floor(Math.random() * 10) % verbs.length;
		var randNounSing = Math.floor(Math.random() * 10) % nounsSing.length;
		var randNounPlur = Math.floor(Math.random() * 10) % nounsPlur.length;
		var phrase = verbs[randVerb] + " " + nounsSing[randNounSing] + " " + nounsPlur[randNounPlur] + "...";
		return this.each( function () {
			$(this).html(phrase);
		});
	}
	
}(jQuery))