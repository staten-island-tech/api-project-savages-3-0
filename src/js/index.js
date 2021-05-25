import { DOMSelectors } from "./DOM";

const query = async function () {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan"
    );
    const data = await response.json();
    data.meals.forEach((recipe) => {
      console.log(recipe.meals);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="recipe-card">
      <div class="recipe-card-front">
        <img
          src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
          alt=""
          class="thumbnail"
        />
      </div>
      <div class="recipe-card-back">
        <h3 class="recipe-card-header">${recipe.strMeal}</h3>
        <div class="recipe-types">
          <li class="recipe-type">Vegan</li>
          <li class="recipe-type">Fantasy</li>
          <li class="recipe-type">Horror</li>
        </div>
      </div>
    </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
//query();
