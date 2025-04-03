​​const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    const $content = document.querySelector('.content');

    const response = await fetch(`https://dummyjson.com/recipe/${id}`);
    const recipe = await response.json();


    $content.innerHTML = `
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
 
