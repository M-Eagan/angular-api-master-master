"use strict"; {
    angular.module('app')
        .controller('movieListController', function ($http) {
            const $ctrl = this;
            $ctrl.getThings = function () {
                return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4f4565d06d2dff19a79a1c507b52ff3d&language=en-US&page=1")
                    .then(function(response){

                        console.log(response)
                           $ctrl.newReleases = response.data.results;
                    });
                }
                $ctrl.getThings();
            });
    }
    