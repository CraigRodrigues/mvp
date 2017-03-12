angular.module('app')
.controller('PodcastPlayerCtrl', function() {
  this.player = player = document.getElementById('audioPlayer');

  this.podcast;
  this.previous = () => {
    console.dir(player);
    player.clientHeight = 64;
  };
  this.next;
  this.skipBackwards = () => {
    player.currentTime -= 30;
  };
  this.skipForwards = () => {
    player.currentTime += 30;
  }
  this.changeSpeed = () => {
    const speed = {
      '0.5': 1,
      '1': 1.5,
      '1.5' : 2,
      '2' : 0.5
    }
    player.playbackRate = speed[player.playbackRate];
    console.log(player.playbackRate);
  };
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