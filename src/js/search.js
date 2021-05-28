import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParams}`
        );
        const data = await response.json();
        data.meals.forEach((meal) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="recipe-card">
            <div class="recipe-card-front">
              <h3 class="recipe-card-header">${meal.strMeal}</h3>
              <img
                src="${meal.strMealThumb}"
                alt=""
                class="thumbnail"
              />
            </div>
            <div class="recipe-card-back">
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
    searchQuery();
  });
};
listen();
