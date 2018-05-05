function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient);
  });
  
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function displayEditForm() {
  const name = document.getElementById("nameHeader").innerText
  const description = document.getElementById("recipeDescription").innerText
  const ingredientsNodes = document.getElementsByName("ingredientsList")
  let ingredients = []
  
  for(let i = 0; i < ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})