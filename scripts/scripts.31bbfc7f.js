"use strict";angular.module("actPracticeApp",["ngAnimate","ngSanitize"]),angular.module("actPracticeApp").controller("MainCtrl",["$scope","$http",function(a,b){a.correct=[],b.get("questions/math.json").success(function(b){a.questions=b,a.totalQuestions=angular.copy(b.length)}),a.questionClicked=function(b,c){var d=b.expected===c;d?a.correct.push(b):(b.selected=null,a.questions.push(b)),a.questions.splice(a.questions.indexOf(b),1)}}]);