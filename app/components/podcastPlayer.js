angular.module('app')
.controller('PodcastPlayerCtrl', function() {

})
.directive('podcastPlayer', function() {
  return {
    scope: {},
    controller: 'PodcastPlayerCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/podcast-player.html'
  };
});