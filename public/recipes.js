angular.module('recipeApp',[])
.controller('RecipeController', function($scope, dataService){
    $scope.ingredients = [''];
    $scope.instructions = [''];
    

    $scope.add = function() {
        var ingredientsArray = $.map($scope.ingredients, function(value, index) {
            return [value];
        });

        var instructionsArray = $.map($scope.instructions, function(value, index) {
            return [value];
        });


        var newRecipe = {title:$scope.title, calories:$scope.calories, ingredients:ingredientsArray, instructions:instructionsArray};

        dataService.createRecipe(newRecipe);

        $scope.recipes.push(newRecipe);

        $scope.title = '';
        $scope.calories='';
        $scope.ingredients = [''];
        $scope.instructions = [''];

        
    }

    $scope.addIngredient = function() {
        $scope.ingredients.push('');
    }

    $scope.addInstruction = function() {
        $scope.instructions.push('');
    }

    $scope.openRecipe = function(theRecipe) {
        var theIngredients = '';
        var theInstructions = '';
        
       theRecipe.ingredients.forEach(function(item, index){
            theIngredients += '<div>' + item.amount + ' ' + item.unit + ' of ' + item.ingredient + '</div>';
       });

       theRecipe.instructions.forEach(function(item, index){
            theInstructions += '<div>' + (index + 1) + '. ' + item + '</div>';
       });

        $("#theIngredients").html(theIngredients);
        $("#theInstructions").html(theInstructions);
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
