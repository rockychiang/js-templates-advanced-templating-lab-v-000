function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
