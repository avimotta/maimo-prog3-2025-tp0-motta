const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    const container = document.getElementById("recipe-container");

    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await response.json();

    container.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}" />
        <p><strong>Tiempo de preparación:</strong> ${recipe.prepTimeMinutes} minutos</p>
        <p><strong>Ingredientes:</strong></p>
        <ul>
            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}
        </ul>
        <p><strong>Instrucciones:</strong></p>
        <p>${recipe.instructions}</p>
    `;
};

main();
 
