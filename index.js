function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this.name)
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
