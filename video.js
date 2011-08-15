Video = Backbone.Model.extend({
    defaults: {
    	id : "Unassigned",
		title : "Unassigned",
		description : "Unassigned",
		videoMp4Url : "Unassigned",
		videoOgvUrl : "Unassigned",
		videoWebMUrl : "Unassigned",
		thumbnailSmallUrl : "Unassigned",
		thumbnailLargeUrl : "Unassigned",
		template : "videoTemplate"
    },
    initialize : function (){
    	this.set({"selector":"video[id=\""+this.get("id")+"\"]"});
    	this.set({ "url" : "http://www.ferris.edu/admissions/video/#!/" + this.get("id") });
    	this.set({ "fieldHtml": this.render() });
    },
	render : function(){
		var objTemplate = templateFactory.getTemplate( this.get("template") );
		return( objTemplate.render( this.toJSON() ) );
	}
});