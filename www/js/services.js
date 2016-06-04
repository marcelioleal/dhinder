angular.module('dhinder.services', [])
  .factory("User", function(){
    var o = {
      favorites: []
    };

    o.addToFavorites = function(man) {
      if(!man) return false;
      o.favorites.unshift(man);
    }

    o.removeFromFavorites = function(man, index) {
      if(!man) return false;

      o.favorites.splice(index, 1);
    }

    return o;
  });
