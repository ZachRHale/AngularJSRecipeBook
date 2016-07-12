angular.module('recipeApp',[])
.controller('RecipeController', function($scope){
    $scope.ingredients = [''];
    $scope.recipes = [
        {
            title:'Pizza',
            calories:1234,
            ingredients:[
                {'amount': 30, 'unit': 'grams', 'ingredient' :'cheese'},
                {'amount': 10, 'unit': 'grams', 'ingredient' :'bread'},
                {'amount': 18, 'unit': 'ounces', 'ingredient' :'pep'}
                ]
        }, 
        {
            title:'Jelly',
            calories:1034,
            ingredients:[
                {'amount': 30, 'unit': 'grams', 'ingredient' :'cheese'},
                {'amount': 10, 'unit': 'grams', 'ingredient' :'bread'},
                {'amount': 18, 'unit': 'ounces', 'ingredient' :'beer'}
                ]
        }

    ];

    $scope.add = function() {
        var ingredientsArray = $.map($scope.ingredients, function(value, index) {
            return [value];
        });

        $scope.recipes.push({title:$scope.title, calories:$scope.calories, ingredients:ingredientsArray});
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

});
