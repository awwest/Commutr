angular.module('app.services', [])

.factory('ServerReq', ['$http', function($http) {
  return {
    getReq: function(route) {
      return $http.get(route, {
        cache: true
      })
      .success(function(data) {
        return data;
      });
    },

    postReq: function(route, data) {
      return $http.post(route, data)
      .success(function(serverData) {
        return serverData;
      });
    }
  };
}])

.factory('CustomPromises', ['$q', function($q) {
  return {
    p_geoloc: function() {
      var deferred = $q.defer();
      navigator.geolocation.getCurrentPosition(function(position) {
        deferred.resolve(position);
      },
      function(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    }
  };
}])

.factory('GoogleOAuth', ['ServerReq', '$window', '$rootScope', function(ServerReq, $window, $rootscope){
  // var loginScreen;

  var OAuth = {
    loginFlow : function(url){
      var renderLogin = function(event){
        //initiate JS flow 
        //* (if this redirects to new page, TODO verify whether window will close effectively) !!!
        console.log('Rendering');
        gapi.auth.signIn({'clientid' : '26641085233-p4d6rtvqnmqht8teh82iesfvvapairf5.apps.googleusercontent.com', 'callback' : function(auth){
          console.log('AuthCallback');

          if (auth['status']['signed_in']){
            //signed in
            console.log(auth);

            //ServerReq.postReq('api/v1/user', {data: auth['code']});

            $rootScope.token = auth;
          }else{
            //signin failed
            console.log('Signin Failed');
          }
        }});
        loginScreen.close();
      };
      


        //open new InAppBrowser window to contain OAuth flow

        var loginScreen = $window.open(url, '_blank','location=no');
        loginScreen.addEventListener('loadstart', renderLogin);



        //Listen for window to begin loading
      
    }
  };

  return OAuth;

}]);
