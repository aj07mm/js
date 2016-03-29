// PREENCHE ID_PONTOREFERENCIA EM TRACKS
// SE ALGUM PONTO ESTIVER DENTRO DE UM RAIO DE 30M DO ONIBUS, ESTE PONTO SERÁ O id_pontoreferencia
// Author: Julio Marins 07/11/2015

//{ 
//	"_id" : ObjectId("55d2741170c009e464394398"), 
//	"id_linha" : 94, 
//	"id_rota" : 175, 
//	"receivedAt" : 1439855584, 
//	"id_onibus" : 309, 
//	"id_pontoreferencia" : null, 
//	"posicao" : [ -22.34401, -41.83204 ], 
//	"__v" : 0 
//}

CalcTrack = function(){
	this.transformSphericalToRectangular = function(x, y){
		//10 Meters = 0.00621371192 Mile
		//20 Meters = 0.01242742384 Mile
		//1 Mile = 1609
		//var radiusOfEath = 6371000; //6,371km
		var radiusOfEath = 3956; //miles
		var xf = radiusOfEath * Math.cos(x) * Math.cos(y);
		var yf = radiusOfEath * Math.cos(x) * Math.sin(y);
		return [xf, yf];
	};
	//erro esta aqui
	this.isInsideTheCircunference = function(track, stop, radius){
//		var trackCoordinates = this.transformSphericalToRectangular(track.posicao[0], track.posicao[1])
		var trackC1 = track.posicao[0];
		var trackC2 = track.posicao[1];

//		var stopCoordinates = this.transformSphericalToRectangular(stop.posicao[0], stop.posicao[1])
		var stopC1 = stop.posicao[0];
		var stopC2 = stop.posicao[1];
		// (xA – a)2 + (yA – b)2 = R2
		//http://mathforum.org/library/drmath/view/51879.html
		return Math.sqrt(Math.pow(trackC1-stopC1,2) + Math.pow(trackC2-stopC2,2)) <= radius;
	};
	this.checkTrackInEachStop = function(track, stops){
		var aux = 0;
		for (var i = 0;i<stops.length;i++){
			if(this.isInsideTheCircunference(track, stops[i], 0.01242742384)){ //20m from the center of the circunference
				var trackToUpdate = track;
				trackToUpdate.id_pontoreferencia = stops[i].id_pontoreferencia
				console.log('updated:' + trackToUpdate);
				tracks.update({ _id: track._id }, { id_pontoreferencia: stops[i].id_pontoreferencia }, function(err, doc){
					console.log('updated status:' + JSON.stringify(doc), 'Error: ' + err);
					mongoose.connection.close();
				});
				console.log('times: ' + aux++);
			}
		}
	}
	this.doTheMath = function(tracks, stops){
		for (var i = 0;i<tracks.length;i++){
			this.checkTrackInEachStop(tracks[i], stops);
		}
	}
};

mongoose.connect('mongodb://localhost:27017', {
  server: {
    socketOptions: {
		keepAlive: 1,
//      connectTimeoutMS: 30000,
//      poolSize: 5
    }
  }
});

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
});

//Schemas
var tracks = mongoose.model('tracks', mongoose.Schema({
    id_linha : Number,
    id_rota: Number,
    id_onibus: Number,
    id_pontoreferencia: Number,
    posicao: Array,
    receivedAt: Number
}));

var stops = mongoose.model('stops', mongoose.Schema({ 
	id_pontoreferencia: {
    	type: Number,
    	index: { unique: true }
    },
	nome: String,
	descricao: String,
	posicao: Array,
	linhas: Array
}));

tracks.find({ id_pontoreferencia: null }).limit(50).then(function (resTracks) {
	console.log('asdasd: ' + resTracks.length)
	stops.find({}).then(function (resStops) {
		var calcTrack = new CalcTrack();
		calcTrack.doTheMath(resTracks, resStops);
	})
});