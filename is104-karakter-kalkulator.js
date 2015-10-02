/** This code will calculate the grade of a student through several criteria.
It is based on the Team Based Learning process, including iRat, tRat, IcA and Peer evaluation,
which account for 40% of the result.
The remaining 60% are decided by the final oral exam which is evaluated by the teacher and sensor.
**/

// iRat = Individual Readiness Assurance Test
var iRat_max = prompt("Please enter the maximum score of your iRat test.");
var iRat_achieved = prompt("Please enter the achieved score of your iRat test");
var iRat_score = 0;

// tRat = Team Readiness Assurance Test
var tRat_max = prompt("Please enter the maximum score of your tRat test.");
var tRat_achieved = prompt("Please enter the achieved score of your tRat test.");
var tRat_score = 0;

// IcA = In class Activity
// x = teachers evaluation (60%)
// y = students evaluation (40%)
var ica_max = prompt("Please enter the maximum score of your In class Activity test.");
var ica_xAchieved = prompt("Please enter the achieved score of your In class Activity test, made by your TEACHER.");
var ica_yAchieved = prompt("Please enter the achieved score of your In class Activity test, made by your STUDENT.");
var ica_score = 0;

// peer = Peer evaluation
var peer_max = prompt("Please enter the maximum score of your peer evaluation test.");
var peer_achieved = prompt("Please enter the achieved score of your peer evaluation test.");
var peer_score = 0;

// Oral exam evaluation made by teacher and sensor.
var oral_max = prompt("Please enter the maximum score of your oral exam test.");
var oral_achieved = prompt("Please enter the achieved score of your oral exam test.");
var oral_score = 0;

// The avarage sum of iRat, tRat, IcA, Peer evaluation and final oral exam percentages.
var total_score = 0;

// Calculate the percentage of achieved iRat score.
function calculateIrat(iRat_score) {
iRat_score = (iRat_achieved / iRat_max) * 100;
return iRat_score;
}

// Calculate the percentage of achieved tRat score.
function calculateTrat(tRat_score) {
tRat_score = (tRat_achieved / tRat_max) * 100;
return tRat_score;
}

// Calculate the percentage of achieved IcA score.
function calculateIca(ica_score) {
ica_score = (ica_xAchieved * 0.60) + (ica_yAchieved * 0.40);
ica_score = (ica_score / ica_max) * 100;
return ica_score;
}

// Calculate the percentage of achieved peer score.
function calculatePeer(peer_score) {
peer_score = (peer_achieved / peer_max) * 100;
return peer_score;
}

//Calculate the percentage of achieved oral exam score.
function calculateOral(oral_score) {
oral_score = (oral_achieved / oral_max) * 100;
return oral_score;
}

/**
First calculate the 40% scores (iRat 5%, tRat 5%, IcA 25% and Peer 5%), then add the oral exam score (which accounts for the remaining 60%) in order to find the total score.
**/
function calculateTotal(total_score) {
total_score = ((calculateIca(ica_score) * 5) + calculateIrat(iRat_score) + calculatePeer(peer_score) + calculateTrat(tRat_score)) / 8;

total_score = (total_score * 0.40) + (calculateOral(oral_score) * 0.60);
return total_score;
}

//Give the user visible feedback on the data entered in order to eliminate possible typing errors.
console.log("You entered the following data: ")
console.log("iRat Max Score: " + iRat_max)
console.log("iRat Achieved Score: " + iRat_achieved)
console.log("tRat Max Score: " + tRat_max)
console.log("tRat Achieved Score: " + tRat_achieved)
console.log("IcA Max Score: " + ica_max)
console.log("IcA Teacher Score: " + ica_xAchieved)
console.log("IcA Student Score: " + ica_yAchieved)
console.log("Peer Evaluation Max Score: " + peer_max)
console.log("Peer Evaluation Achieved Score: " + peer_achieved)
console.log("Oral Exam Max Score: " + oral_max)
console.log("Oral Exam Achieved Score: " + oral_achieved)

//Using Total Score, we now calculate the grade under our defined criteria and give user visible feedback on the result.
if (calculateTotal(total_score) < 30) {
	console.log("Unfortunately your final grade is F.")
	}
	else if (calculateTotal(total_score) < 45) {
	console.log("Your final grade is E.")
	}
	else if (calculateTotal(total_score) < 60) {
	console.log("Good job. Your final grade is D.")
	}
	else if (calculateTotal(total_score) < 75) {
	console.log("Excellent work. Your final grade is C.")
	}
	else if (calculateTotal(total_score) < 90) {
	console.log("Fantastic! Your final grade is B!")
	}
	else {
	console.log("Are you even human? Your final grade is A!!!")
	}
