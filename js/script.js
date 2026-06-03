

var recipes = [
  {
    image: "sambosa.jfif",
    rate: 4.8,
    reviews: 234,
    prepTime: 30,
    cookTime: 20,
    Servings: 4,
    level: "Intermediate",
    nationality: "Greek",
    name: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb.",
    ingredient: [
      "3 eggplants",
      "500g ground lamb",
      "400g tomatoes",
      "1 onion",
      "3 garlic cloves",
      "500ml béchamel sauce",
      "100g parmesan cheese"
    ],
    instruction: [
      "Prepare eggplants.",
      "Cook lamb mixture.",
      "Layer ingredients.",
      "Bake until golden."
    ],
      nutrition:[{icon:"fa-solid fa-fire" , name:"Calories" , number:"580 kcal" , background:"oklch(95.4% .038 75.164)" , color:"orangered"},
       {icon:"fa-solid fa-dumbbell" , name:"Protein" , number:"36g", background:"rgb(206, 215, 243)" , color:"rgb(0, 47, 255)"},
        {icon:"fa-solid fa-wheat-awn" , name:"Carbohydrates" , number:"32g" , background:"rgb(244, 246, 203)" , color:" orange"},
        {icon:"fa-solid fa-droplet" , name:"Fat" , number:"32g" , background:"rgb(254, 203, 203)" , color:"red"},
         {icon:"fa-solid fa-seedling" , name:"Fiber" , number:"8g" , background:"rgb(204, 247, 204)" , color:"green"},
         {icon:"fa-solid fa-cube" , name:"Sodium" , number:"820mg" , background:"rgb(243, 222, 248)" , color:"rgb(204, 0, 255)"}
    ],
    chefTips: [
      "Salt eggplant before cooking.",
      "Let it rest before serving."
    ],
    isExtented: false
  },

{
    image:"Beef Lasagna.jfif",
    rate:4.9,
    reviews:412,
    prepTime:35,
    cookTime:60,
    Servings:6,
    level:"Intermediate",
    nationality:"Italian",
    name:"Beef Lasagna",
    description:"Classic Italian pasta layered with rich beef .",
    ingredient:[
        "12 lasagna sheets",
        "500g ground beef",
        "1 onion, diced",
        "2 garlic cloves, minced",
        "800g tomato sauce",
        "500ml béchamel sauce",
        "150g mozzarella cheese",
        "50g parmesan cheese",
        "Olive oil"
    ],
    instruction:[
        "Cook lasagna sheets according to package instructions.",
        "Sauté onion and garlic in olive oil.",
        "Add ground beef and cook until browned.",
        "Stir in tomato sauce and simmer for 25 minutes.",
        "Layer pasta, meat sauce, and béchamel in a baking dish.",
        "Repeat layers and top with cheeses.",
        "Bake at 180°C for 45 minutes.",
        "Allow to rest for 10 minutes before serving."
    ],
    nutrition:[
        {icon:"fa-solid fa-fire",name:"Calories",number:"650 kcal" , background:"oklch(95.4% .038 75.164)" , color:"orangered"},
        {icon:"fa-solid fa-dumbbell",name:"Protein",number:"42g" , background:"rgb(206, 215, 243)" , color:"rgb(0, 47, 255)"},
        {icon:"fa-solid fa-wheat-awn",name:"Carbohydrates",number:"48g" , background:"rgb(244, 246, 203)" , color:" orange"},
        {icon:"fa-solid fa-droplet",name:"Fat",number:"31g" , background:"rgb(254, 203, 203)" , color:"red"},
        {icon:"fa-solid fa-seedling",name:"Fiber",number:"5g" , background:"rgb(204, 247, 204)" , color:"green"},
        {icon:"fa-solid fa-cube",name:"Sodium",number:"920mg" , background:"rgb(243, 222, 248)" , color:"rgb(204, 0, 255)"}
    ],
    chefTips:[
        "Use fresh mozzarella for better flavor.",
        "Let lasagna rest before cutting.",
        "Add fresh basil to the sauce.",
        "Prepare a day ahead for deeper flavor."
    ],
    isExtented:true
},

{
    image:"Seafood Paella.jfif",
    rate:4.8,
    reviews:321,
    prepTime:50,
    cookTime:60,
    Servings:5,
    level:"Advanced",
    nationality:"Spanish",
    name:"Seafood Paella",
    description:"Traditional Spanish saffron rice dish loaded with fresh seafood.",
    ingredient:[
        "2 cups paella rice",
        "300g shrimp",
        "200g mussels",
        "200g squid",
        "1 onion",
        "1 bell pepper",
        "4 cups seafood stock",
        "Saffron",
        "Olive oil"
    ],
    instruction:[
        "Sauté onion and pepper until softened.",
        "Add squid and cook briefly.",
        "Stir in rice and saffron.",
        "Pour in seafood stock and simmer.",
        "Arrange shrimp and mussels on top.",
        "Cook without stirring until rice is tender.",
        "Rest for 10 minutes before serving."
    ],
    nutrition:[
        {icon:"fa-solid fa-fire",name:"Calories",number:"530 kcal" , background:"oklch(95.4% .038 75.164)" , color:"orangered"},
        {icon:"fa-solid fa-dumbbell",name:"Protein",number:"36g" , background:"rgb(206, 215, 243)" , color:"rgb(0, 47, 255)"},
        {icon:"fa-solid fa-wheat-awn",name:"Carbohydrates",number:"52g" , background:"rgb(244, 246, 203)" , color:" orange"},
        {icon:"fa-solid fa-droplet",name:"Fat",number:"15g" , background:"rgb(254, 203, 203)" , color:"red"},
        {icon:"fa-solid fa-seedling",name:"Fiber",number:"4g" , background:"rgb(204, 247, 204)" , color:"green"},
        {icon:"fa-solid fa-cube",name:"Sodium",number:"760mg" , background:"rgb(243, 222, 248)" , color:"rgb(204, 0, 255)"}
    ],
    chefTips:[
        "Never stir the rice once stock is added.",
        "Use authentic saffron.",
        "Fresh seafood gives the best result.",
        "Let the rice develop a crispy bottom layer."
    ],
    isExtented:true
},

{
    image:"Butter Chicken.jfif",
    rate:4.8,
    reviews:398,
    prepTime:30,
    cookTime:25,
    Servings:4,
    level:"Beginner",
    nationality:"Indian",
    name:"Butter Chicken",
    description:"Creamy and mildly spiced Indian chicken curry.",
    ingredient:[
        "500g chicken breast",
        "200ml cream",
        "400g tomato puree",
        "2 tbsp butter",
        "1 onion",
        "2 garlic cloves",
        "Garam masala",
        "Paprika",
        "Salt"
    ],
    instruction:[
        "Marinate chicken with spices.",
        "Cook onion and garlic in butter.",
        "Add tomato puree and simmer.",
        "Cook chicken separately until golden.",
        "Combine chicken with sauce.",
        "Add cream and simmer for 15 minutes.",
        "Serve with rice or naan bread."
    ],
    nutrition:[
        {icon:"fa-solid fa-fire",name:"Calories",number:"610 kcal" , background:"oklch(95.4% .038 75.164)" , color:"orangered"},
        {icon:"fa-solid fa-dumbbell",name:"Protein",number:"39g" , background:"rgb(206, 215, 243)" , color:"rgb(0, 47, 255)"},
        {icon:"fa-solid fa-wheat-awn",name:"Carbohydrates",number:"18g" , background:"rgb(244, 246, 203)" , color:" orange"},
        {icon:"fa-solid fa-droplet",name:"Fat",number:"42g" , background:"rgb(254, 203, 203)" , color:"red"},
        {icon:"fa-solid fa-seedling",name:"Fiber",number:"3g" , background:"rgb(204, 247, 204)" , color:"green"},
        {icon:"fa-solid fa-cube",name:"Sodium",number:"690mg" , background:"rgb(243, 222, 248)" , color:"rgb(204, 0, 255)"}
    ],
    chefTips:[
        "Marinate overnight for best flavor.",
        "Use heavy cream for richness.",
        "Adjust spice level to taste.",
        "Serve with basmati rice."
    ],
    isExtented:false
},

{
    image:"Beef Wellington.jfif",
    rate:4.9,
    reviews:187,
    prepTime:60,
    cookTime:50,
    Servings:6,
    level:"Advanced",
    nationality:"British",
    name:"Beef Wellington",
    description:"Tender beef fillet wrapped in pastry and baked until golden.",
    ingredient:[
        "1kg beef tenderloin",
        "500g puff pastry",
        "300g mushrooms",
        "8 slices prosciutto",
        "2 egg yolks",
        "Mustard",
        "Olive oil"
    ],
    instruction:[
        "Sear beef on all sides.",
        "Prepare mushroom duxelles.",
        "Brush beef with mustard.",
        "Wrap with prosciutto and mushrooms.",
        "Cover with puff pastry.",
        "Brush with egg yolk.",
        "Bake at 200°C until golden.",
        "Rest before slicing."
    ],
    nutrition:[
        {icon:"fa-solid fa-fire",name:"Calories",number:"740 kcal" , background:"oklch(95.4% .038 75.164)" , color:"orangered"},
        {icon:"fa-solid fa-dumbbell",name:"Protein",number:"47g" , background:"rgb(206, 215, 243)" , color:"rgb(0, 47, 255)"},
        {icon:"fa-solid fa-wheat-awn",name:"Carbohydrates",number:"28g" , background:"rgb(244, 246, 203)" , color:" orange"},
        {icon:"fa-solid fa-droplet",name:"Fat",number:"49g" , background:"rgb(254, 203, 203)" , color:"red"},
        {icon:"fa-solid fa-seedling",name:"Fiber",number:"2g", background:"rgb(204, 247, 204)" , color:"green"},
        {icon:"fa-solid fa-cube",name:"Sodium",number:"880mg", background:"rgb(243, 222, 248)" , color:"rgb(204, 0, 255)"}
    ],
    chefTips:[
        "Chill before baking.",
        "Use a meat thermometer.",
        "Avoid overcooking the beef.",
        "Rest before slicing."
    ],
    isExtented:true
},

{
    image:"Tonkotsu Ramen.jfif",
    rate:4.7,
    reviews:264,
    prepTime:50,
    cookTime:90,
    Servings:4,
    level:"Advanced",
    nationality:"Japanese",
    name:"Tonkotsu Ramen",
    description:"Rich Japanese noodle soup with creamy pork broth.",
    ingredient:[
        "Ramen noodles",
        "1kg pork bones",
        "2 boiled eggs",
        "Green onions",
        "Soy sauce",
        "Garlic",
        "Ginger",
        "Mushrooms"
    ],
    instruction:[
        "Boil pork bones and clean them.",
        "Simmer bones for several hours.",
        "Season broth with soy sauce.",
        "Cook ramen noodles separately.",
        "Prepare toppings.",
        "Assemble noodles and broth in bowls.",
        "Add eggs and vegetables.",
        "Serve immediately."
    ],
    nutrition:[
        {icon:"fa-solid fa-fire",name:"Calories",number:"690 kcal", background:"oklch(95.4% .038 75.164)" , color:"orangered"},
        {icon:"fa-solid fa-dumbbell",name:"Protein",number:"43g" , background:"rgb(206, 215, 243)" , color:"rgb(0, 47, 255)"},
        {icon:"fa-solid fa-wheat-awn",name:"Carbohydrates",number:"58g" , background:"rgb(244, 246, 203)" , color:" orange"},
        {icon:"fa-solid fa-droplet",name:"Fat",number:"29g", background:"rgb(254, 203, 203)" , color:"red"},
        {icon:"fa-solid fa-seedling",name:"Fiber",number:"4g", background:"rgb(204, 247, 204)" , color:"green"},
        {icon:"fa-solid fa-cube",name:"Sodium",number:"1100mg", background:"rgb(243, 222, 248)" , color:"rgb(204, 0, 255)"}
    ],
    chefTips:[
        "Simmer broth slowly.",
        "Cook noodles just before serving.",
        "Use fresh toppings.",
        "Balance salt carefully."
    ],
    isExtented:true
},

{
    image:"Chicken Taginee.jfif",
    rate:4.8,
    reviews:226,
    prepTime:25,
    cookTime:30,
    Servings:5,
    level:"Intermediate",
    nationality:"Moroccan",
    name:"Chicken Tagine",
    description:"Slow-cooked Moroccan chicken with olives and preserved lemon.",
    ingredient:[
        "1kg chicken thighs",
        "1 onion",
        "2 preserved lemons",
        "100g olives",
        "Garlic",
        "Ginger",
        "Turmeric",
        "Olive oil"
    ],
    instruction:[
        "Brown chicken pieces.",
        "Cook onion and garlic.",
        "Add spices and mix well.",
        "Add chicken back to the pot.",
        "Pour in a little water.",
        "Add olives and preserved lemon.",
        "Simmer until tender.",
        "Serve with bread or couscous."
    ],
    nutrition:[
        {icon:"fa-solid fa-fire",name:"Calories",number:"550 kcal", background:"oklch(95.4% .038 75.164)" , color:"orangered"},
        {icon:"fa-solid fa-dumbbell",name:"Protein",number:"38g" , background:"rgb(206, 215, 243)" , color:"rgb(0, 47, 255)"},
        {icon:"fa-solid fa-wheat-awn",name:"Carbohydrates",number:"14g", background:"rgb(244, 246, 203)" , color:" orange"},
        {icon:"fa-solid fa-droplet",name:"Fat",number:"36g", background:"rgb(254, 203, 203)" , color:"red"},
        {icon:"fa-solid fa-seedling",name:"Fiber",number:"3g", background:"rgb(204, 247, 204)" , color:"green"},
        {icon:"fa-solid fa-cube",name:"Sodium",number:"850mg", background:"rgb(243, 222, 248)" , color:"rgb(204, 0, 255)"}
    ],
    chefTips:[
        "Use preserved lemons.",
        "Cook slowly for tender meat.",
        "Serve with couscous.",
        "Add fresh herbs before serving."
    ],
    isExtented:false
}
];


//   elements //
var random;
var prevNum ;
var recipeImg= document.getElementById("recipe-img")
var rating = document.getElementById("rating")
var reviews = document.getElementById("reviews")
var prepTime = document.getElementById("prepTime")
var cookTime = document.getElementById("cookTime")
var serving = document.getElementById("serving")
var level = document.getElementById("level")
var nationality = document.getElementById("nationality")
var mealName = document.getElementById("mealName")
var recipeDesc = document.getElementById("recipeDesc")
var ingredients = document.getElementById("ingredients")
var instructions = document.getElementById("instructions")
var nutrition = document.getElementById("nutritionContent")
var tips = document.getElementById("tips")
var isExtend = document.getElementById("isExtended")








//  functions    //
function newRecipe() {
    do{
         randomNum =Math.floor(Math.random()* recipes.length)
    }while(randomNum == prevNum);
    prevNum=randomNum

    recipeImg.src=`./image/${recipes[randomNum].image}`
    rating.innerHTML=recipes[randomNum].rate
    reviews.innerHTML=recipes[randomNum].reviews
    prepTime.innerHTML=recipes[randomNum].prepTime
    cookTime.innerHTML=recipes[randomNum].cookTime
    serving.innerHTML=recipes[randomNum].Servings
    level.innerHTML=recipes[randomNum].level
    nationality.innerHTML=recipes[randomNum].nationality
    mealName.innerHTML=recipes[randomNum].name;
    recipeDesc.innerHTML=recipes[randomNum].description;
    displayIngredients()
    displayInstructions()
    displayNutration()
    displayTips()
    displayAlert()
   

}




function displayIngredients(){
    var cartona="";
    for(var i=0; i< recipes[randomNum].ingredient.length ; i++ ){
    cartona +=` <div class="ingredient-item">
                  <span>${i+1}</span>
                  <p>${recipes[randomNum].ingredient[i]}</p>
                </div>`
ingredients.innerHTML=cartona
}
}


function displayInstructions(){
    var instru="";
    for(var i=0; i< recipes[randomNum].instruction.length ; i++ ){
    instru +=` <div class="step-item">
                  <span>${i+1}</span>
                  <p>${recipes[randomNum].instruction[i]}</p>
                </div>`
instructions.innerHTML=instru
}
}

function displayNutration(){
    var nutr="";
    for(var i=0; i< recipes[randomNum].nutrition.length ; i++ ){
    nutr +=` <div class="nutrition-item">
                  <div><span class="nutrition-icon" style="background-color:${recipes[randomNum].nutrition[i].background}"><i class="${recipes[randomNum].nutrition[i].icon} "style="color: ${recipes[randomNum].nutrition[i].color}"></i></span>
                  <span class="nutration-name">${recipes[randomNum].nutrition[i].name}</span>
                </div>
                  <h5>${recipes[randomNum].nutrition[i].number}</h5>
                </div>`
nutrition.innerHTML=nutr
}
}

function displayTips(){
    var tip="";
    for(var i=0; i< recipes[randomNum].chefTips.length ; i++ ){
    tip +=`  <div class="tip-item">
                  <div class="tip-icon"><i class="fa-solid fa-check"></i></div>
                  
                  <p>
                   ${recipes[randomNum].chefTips[i]}
                  </p>
                </div>`
tips.innerHTML=tip
}
}

function displayAlert(){
    var cartona=""
    if(recipes[randomNum].isExtented === true){
        cartona=`<div class="alert-box mt-2 d-flex gap-3  align-items-center">

            <i class="fa-solid fa-triangle-exclamation"></i>

            <div>
              <h6 class="">
                Extended Preparation Time
              </h6>

              <p class="m-0 ">
                This recipe requires more than 60 minutes to prepare.
                Plan accordingly!
              </p>
            </div>

          </div>`
        

    }else{
        cartona=""
    }

    isExtend.innerHTML=cartona
   
}


newRecipe()