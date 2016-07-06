function dummyController(){

}

angular.module('recipeApp',[])
.controller('RecipeController', function(){
    this.recipes = [
        {
            title:'Pizza',
            calories:1234,
            ingredients:['cheese','meat', 'pep']
        }, 
        {
            title:'Jelly',
            calories:1034,
            ingredients:['gelatin', 'fruits']
        }

    ];
    

    this.add = function() {
        this.recipes.push({title:this.title, calories:this.calories});
        this.title = '';
        this.calories='';
    }

    this.openRecipe = function(theRecipe) {
        var theIngredients = '';
       theRecipe.ingredients.forEach(function(item, index){
            theIngredients += '<div>' + item + '</div>';
       });

        $("#theContents").html(theIngredients);
        $(".lightBox h2").html(theRecipe.title);
        $('.lightBox').fadeIn();
    }

    this.closeRecipe = function() {
        $('.lightBox').fadeOut();
    }

})
.component('showRecipe', {
      template: '<div><h2>{{$ctrl.recipes.title}}</h2></div>',
      controller:dummyController, 
      bindings: {
          recipe: '='
      }
    });
