class Recipe {
    constructor(title, calories){
        this.title = title;
        this.calories = calories;
    }

}

angular.module('recipeApp',[])
.controller('RecipeController', function(){
    var recipeList = this;
    recipeList.recipes = [
        {
            title:'Pizza',
            calories:1234
        }, 
        {
            title:'Jelly',
            calories:1034
        }

    ];
    

    recipeList.add = function() {
        recipeList.recipes.push({title:recipeList.title, calories:recipeList.calories});
        recipeList.title = '';
        recipeList.calories='';
    }

    recipeList.print = function(theRecipe) {
        console.log(theRecipe.title);
    }

})