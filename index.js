function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this.name)
  })
  
  function createRecipe(){
    
  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
