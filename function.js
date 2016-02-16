(function(){
var quizApp = angular.module('quizApp',[]);
/* for chrome debug as chrome not support the cross orgin data
quizApp.controller('QuizController',['$scope','$http',function($scope,$http){
	$http.get('data.json').success(function(data){
		$scope.questions = data;
		$scope.activeQuestion = -1;

	});
}]);
*/
quizApp.controller('QuizController',['$scope','$sce',function($scope,$sce){
	$scope.questions = [{
	"question":"What is 5 *6?",
	"answers": [
		{"id":0,"text":"20"},
		{"id":1,"text":"30"},
		{"id":2,"text":"40"},
		{"id":3,"text":"50"}
	],
	"correct":1
},

{
	"question":"What is 2 *6?",
	"answers": [
		{"id":0,"text":"10"},
		{"id":1,"text":"11"},
		{"id":2,"text":"12"},
		{"id":3,"text":"15"}
	],
	"correct":2
},
{
	"question":"What is 5 *9?",
	"answers": [
		{"id":0,"text":"35"},
		{"id":1,"text":"25"},
		{"id":2,"text":"15"},
		{"id":3,"text":"45"}
	],
	"correct":3
},
{
	"question":"What is 5 *0?",
	"answers": [
		{"id":0,"text":"0"},
		{"id":1,"text":"5"},
		{"id":2,"text":"15"},
		{"id":3,"text":"10"}
	],
	"correct":0
},
{
	"question":"What is 3 *6?",
	"answers": [
		{"id":0,"text":"8"},
		{"id":1,"text":"18"},
		{"id":2,"text":"28"},
		{"id":3,"text":"38"}
	],
	"correct":1
}
];
$scope.activeQuestion = -1;
$scope.score = 0;

$scope.length = $scope.questions.length;


$scope.selectAnswer = function(qIndex,aIndex){
	
var questionState = $scope.questions[qIndex].questionState;
	if (questionState != "answered"){
		
		$scope.questions[qIndex].selectedAnswer = aIndex;
		
		var correctAns = $scope.questions[qIndex].correct;
		 
		 $scope.questions[qIndex].correctAns = correctAns;
		
		if(aIndex === correctAns){
			$scope.questions[qIndex].correctness = 'correct';
			$scope.score +=1;

		}else{
			$scope.questions[qIndex].correctness = 'incorrect';
		}
		$scope.questions[qIndex].questionState = 'answered';		
	}

};
$scope.isSelected = function(qIndex,aIndex){

	return $scope.questions[qIndex].selectedAnswer ===aIndex;
}
$scope.isCorrect = function(qIndex,aIndex){
	return $scope.questions[qIndex].correctAns  === aIndex;
}

$scope.onContinue = function(){
	return $scope.activeQuestion += 1;
}
$scope.createShareLinks = function(score){
	
	var emailLink = '<a class="btn email" href="mailto:ymengg@gmail.com">Email a Friend</a>';

	return $sce.trustAsHtml(emailLink);

}

}])
})();