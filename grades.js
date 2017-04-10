console.log("hihi");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var i = 0;
var arrayOfA = [];
var arrayOfB = [];
var arrayOfC = [];
var arrayOfD = [];
var arrayOfF = [];

for (i = 0; i < scores.length; i++){
	var score = scores[i]
	
	if (score > 90){
		arrayOfA.push(score);
	}

	if (score > 80 && score < 91){
		arrayOfB.push(score);
	}

	if (score > 70 && score < 81){
		arrayOfC.push(score);
	}

	if (score > 60 && score < 71){
		arrayOfD.push(score);
	}

	if (score < 61){
		arrayOfF.push(score);
	}	

}

var lowScore = Math.min.apply(null, scores);
var highScore= Math.max.apply(null, scores);

console.log("The student has " + arrayOfA.length + " A's");
console.log("The student has " + arrayOfB.length + " B's");
console.log("The student has " + arrayOfC.length + " C's");
console.log("The student has " + arrayOfD.length + " D's");
console.log("The student has " + arrayOfF.length + " F's");
console.log("The student's lowest score is " + lowScore);
console.log("The student's highest score is " + highScore);