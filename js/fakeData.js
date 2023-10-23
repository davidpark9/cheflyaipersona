

const cookingExperience = {
  _firstName: "David",
  _lastName: "Park",
  _mealsGenre: ["American Cuisine", "Asian Cuisine", "Italian Cuisine"],
  _stressRange: [0, 1, 2, 3, 4, 5],
  _meals: [
    {
      cuisine: "americanCuisine",
      items: ["hamburger", "hotdog", "fried chicken"],
    },
    {
      cuisine: "asianCuisine",
      items: ["california roll", "miso ramyun", "leek dumpling"],
    },
    {
      cuisine: "italianCuisine",
      items: ["margherita pizza", "gnocchi pesto", "veggie lasagna"],
    },
  ],
  _machines: [
    "Oven",
    "Counter-Stove",
    "Microwave",
    "Refrigerator",
    "Air Fryer",
    "Toaster",
    "Sink",
    "Rice Cooker",
  ],
  _ingredients: [],
  _timer: 0,
  _steps: [
    {
      stepNumber: 1,
      instructions: " ",
    },
  ],
  _savedMeals: [],

  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return `Missing a First or Last Name`;
    }
  },

  set fullNameChange({ newFirstName, newLastName }) {
    if (newFirstName !== undefined && typeof newFirstName === "string") {
      this._firstName = newFirstName;
    }
    if (newLastName !== undefined && typeof newLastName === "string") {
      this._lastName = newLastName;
    }
  },

  get mealChoices() {
    const mealString = this._mealsGenre.join(", ");
    return `${this.fullName}'s meal choices: ${mealString}`;
  },

  addMeal({ cuisine, newMealItem }) {
    if (typeof newMealItem === "string" && this._meals[cuisine]) {
      this._meals[cuisine].push(newMealItem);
    }
  },

  addSavedMeal({ prevMeals, addMealItem }) {
    const cuisineObject = this._meals.find(
      (meal) => meal.cuisine.toLowerCase() === prevMeals.toLowerCase()
    );

    if (cuisineObject && typeof addMealItem === "string") {
      cuisineObject.items.push(addMealItem);
      this._savedMeals.push(`${prevMeals}: ${addMealItem}`);
    }
  },

  set setTimer(minutes) {
    if (typeof minutes === "number" && minutes >= 0) {
      this._timer = minutes;
    }
  },

  startTimer() {
    console.log(`Cooking timer started for ${this._timer} minutes.`);
  },

  addStep({ stepNumber, instructions }) {
    const existingStepIndex = this._steps.findIndex(
      (step) => step.stepNumber === stepNumber
    );
    if (existingStepIndex !== -1) {
      this._steps[existingStepIndex] = {
        stepNumber,
        instructions,
      };
    } else {
      this._steps.push({
        stepNumber,
        instructions,
      });
    }
  },
};

cookingExperience.addSavedMeal({
  prevMeals: "americanCuisine",
  addMealItem: "potatoes",
});

console.log(cookingExperience._savedMeals);