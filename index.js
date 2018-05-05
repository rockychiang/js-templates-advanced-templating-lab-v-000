function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this.ingredient)
  })
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
