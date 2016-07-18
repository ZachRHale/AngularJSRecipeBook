angular.module('recipeApp',[])
.controller('RecipeController', function($scope, dataService){
    $scope.ingredients = [''];
    

    $scope.add = function() {
        var ingredientsArray = $.map($scope.ingredients, function(value, index) {
            return [value];
        });


        var newRecipe = {title:$scope.title, calories:$scope.calories, ingredients:ingredientsArray};

        dataService.createRecipe(newRecipe);

        $scope.recipes.push(newRecipe);


        $scope.title = '';
        $scope.calories='';
        $scope.ingredients = [''];

        
    }

    $scope.addIngredient = function() {
        $scope.ingredients.push('');
    }

    $scope.openRecipe = function(theRecipe) {
        var theIngredients = '';
       theRecipe.ingredients.forEach(function(item, index){
            theIngredients += '<div>' + item.amount + ' ' + item.unit + ' of ' + item.ingredient + '</div>';
       });

        $("#theIngredients").html(theIngredients);
        $(".lightBox h2").html(theRecipe.title);
        $('.lightBox').fadeIn();
    }

    $scope.closeRecipe = function() {
        $('.lightBox').fadeOut();
    }

    dataService.getRecipes(function(response){
        console.log(response.data);
        $scope.recipes = response.data.recipes;
    });
})
.service('dataService', function($http) {
    this.helloWorld = function() {
        console.log("this is the data service method");
    };

    this.getRecipes = function(callback){
        $http.get('/api/recipes')
        .then(callback)
    }

    this.createRecipe = function(recipe){
        $http.post('/api/recipes', recipe);
    }
});
