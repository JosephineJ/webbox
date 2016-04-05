var recipe = {
  title: "Moussaka",
  servings: 4,
  ingredients: ["eggplants","potatoes","courgettes"]
};
print(recipe["title"]);
print("Serves: " + recipe["servings"]);
print("Ingredients: ");
for (var i = 0; i < recipe["ingredients"].length; i += 1){
  print(recipe["ingredients"][i]);
}