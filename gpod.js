var app = angular.module('gpodApp', []);

app.controller('gpodCtrl', function($scope, $http) {
	
  /*var enc = $.base64.encode("this is a test");
  alert("e=" + enc);
  var dec = $.base64.decode("dGhpcyBpcyBhIHRlc3Q=");
  alert("d=" + dec);*/
  
//  var authdata = $.base64.encode('fc20850:Deerbrook1');
//  $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
   $http.post('https://gpodder.net/api/2/auth/fc20850/login.json', {})
       .then(function (response) {
           alert(response);
       });
	   
	/*
  $http.get("https://gpodder.net/api/2/tags/2.json")
  .then(function(response) {
      $scope.tags = response.data;
	  alert("s=" + $scope.tags.length);
  });
		*/	
});
