const recipe = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    if (!id) return;

    const container = document.getElementById("recipe-container");

    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await response.json();

    container.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}" />
        <div class="columns">
            <div class="column">
                <p><strong>Prep time</strong> ${recipe.prepTimeMinutes} minutes</p>
                <p><strong>Cooking time</strong> ${recipe.cookTimeMinutes} minutes</p>
                <p><strong>Servings</strong> ${recipe.servings} portions</p>
                <p><strong>Difficulty</strong> ${recipe.difficulty}</p>
            </div>
            <div class="column">
                <p><strong>Cuisine</strong> ${recipe.cuisine}</p>
                <p><strong>Calories</strong> ${recipe.caloriesPerServing}</p>
                <p><strong>Tags</strong> ${recipe.tags}</p>
            </div>
        </div>
        <p><strong>Ingredients</strong></p>
        <ul>
            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}
        </ul>
        <p><strong>Instructions</strong></p>
        <p>${recipe.instructions}</p>
    `;
};

recipe();
