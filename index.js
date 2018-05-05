function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(this.ingredient)
  })
  
  function displayEditForm(){
    
  }
  
  function createRecipe(){
    
  }
  
  function updateRecipe(){
    
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })