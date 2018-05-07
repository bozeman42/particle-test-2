var app = angular.module('app',[]);

app.controller('MainController',function($http,$interval){
  var self = this;
  self.data = [];
  self.dataMax = () => {
    return Math.max(...self.data);
  }
  self.dataMin = () => {
    return Math.min(...self.data);
  }
  self.dataAve = () => {
    let result;
    if (self.data.length >= 1) {
      result = self.data.reduce((a,b) => {
        return a + b;
      },0) / self.data.length;
    } else {
      result = 0;
    }
    return result;
  }
  $interval(() => {
    $http.get('/devices/reading')
    .then(response => {
      self.reading = response.data.value;
      self.data = [...self.data,response.data.value];
    })
  }, 1000)
})

