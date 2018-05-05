function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial"))
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
