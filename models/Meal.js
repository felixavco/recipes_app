export default class Meal {
  constructor(
    id,
    steps,
    title,
    isVegan,
    duration,
    imageUrl,
    complexity,
    categoryIds,
    ingredients,
    isGlutenFree,
    isVegetarian,
    affordability,
    isLactoseFree,
  ) {
    this.id = id;
    this.steps = steps;
    this.title = title;
    this.isVegan = isVegan;
    this.duration = duration;
    this.imageUrl = imageUrl;
    this.complexity = complexity;
    this.categoryIds = categoryIds;
    this.ingredients = ingredients;
    this.isGlutenFree = isGlutenFree;
    this.isVegetarian = isVegetarian;
    this.affordability = affordability;
    this.isLactoseFree = isLactoseFree;
  }
}