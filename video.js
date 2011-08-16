Video = Backbone.Model.extend({
    defaults: {
    	id : "Unassigned",
		title : "Unassigned",
		description : "Unassigned",
		videoMp4Url : "Unassigned",
		videoMp4Details : 'type\'video\/mp4; codecs="avc1.42E01E, mp4a.40.2"\'',
		videoOgvUrl : "Unassigned",
		videoOgvDetails : 'type=\'video/webm; codecs="vp8, vorbis"\'',
		videoWebMUrl : "Unassigned",
		videoWebMDetails : 'type=\'video/ogg; codecs="theora, vorbis"\'',
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