'use strict';

angular.module('actPracticeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.correct = [],

    $http.get('questions/math.json').success(function (data) {
      $scope.questions = data;
      $scope.totalQuestions = angular.copy(data.length);
    })

    $scope.questionClicked = function(question, selection) {
      var correct = question.expected === selection;

      if (correct) {
        $scope.correct.push(question);
      } else {
        question.selected = null;
        $scope.questions.push(question);
      }

      $scope.questions.splice($scope.questions.indexOf(question), 1);
    }
  });
