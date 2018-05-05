function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
  Handlebars.registerHelper('displayIngredient', function() {
    
  })
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
