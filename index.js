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
  const name = document.getElementById("name").innerText
  const description = document.getElementById("description").innerText
  const ingredientList = document.getElementsByName("ingredients")
  let ingredients = []
  
  for(let i = 0; i < ingredientList.length; i++) {
    ingredients.push(ingredientList[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  
  document.getElementById("main").innerHTML = template(recipe)
}

function createRecipe() {
  var recipe = getRecipeVals()
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  const ingredientList = document.getElementsByName("ingredients")
  let ingredients = []
  for(let i = 0; i < ingredientList.length; i++) {
    if( ingredientList[i].value !== "" ) {
      ingredients.push(ingredientList[i].value)
    }
  }
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})