var haversine = function(pointA, pointB){
	var R = 6367;// km 
	//var R = 3956;// mi
	var lat1 = pointA[0];
	var lon1 = pointA[1];
	var lat2 = pointB[0];
	var lon2 = pointB[1];

	var dlon = lon2 - lon1;
	var dlat = lat2 - lat1;
	a = Math.pow((Math.sin(dlat/2)),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow((Math.sin(dlon/2)),2)
	c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)) 
	d = R * c
	//The great circle distance d will be in the same units as R.
	return d
}

var candelaria = [-22.900880, -43.177315];
var barcas = [-22.902876, -43.172959];
console.log(haversine(candelaria, barcas));