import { DOMSelectors } from "./DOM";

const query = async function () {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    const data = await response.json();
    console.log(data);

    data.meals.forEach((recipe) => {
      const recipeName = recipe.strMeal;
      const recipeImage = recipe.strMealThumb;
      const recipeRegion = recipe.strArea;
      const recipeCategory = recipe.strCategory;
      const recipeInstructions = recipe.strInstructions;
      const recipeLink = recipe.strSource;
      const recipeIngredients = Object.keys(recipe)
        .filter((k) => k.includes("strIngredient"))
        .map((k) => recipe[k]);
      const recipeMeasurements = Object.keys(recipe)
        .filter((k) => k.includes("strMeasure"))
        .map((k) => recipe[k]);
      const filteredIngredients = recipeIngredients.filter(Boolean); //remove empty ingredients & measurements. is not being used currently
      const filteredMeasuremeants = recipeMeasurements.filter(Boolean);

      //this is very bad code. very inefficient
      const recipeIngredient1 = `${recipe.strMeasure1} ${recipe.strIngredient1}`;
      const recipeIngredient2 = `${recipe.strMeasure2} ${recipe.strIngredient2}`;
      const recipeIngredient3 = `${recipe.strMeasure3} ${recipe.strIngredient3}`;
      const recipeIngredient4 = `${recipe.strMeasure4} ${recipe.strIngredient4}`;
      const recipeIngredient5 = `${recipe.strMeasure5} ${recipe.strIngredient5}`;
      const recipeIngredient6 = `${recipe.strMeasure6} ${recipe.strIngredient6}`;
      const recipeIngredient7 = `${recipe.strMeasure7} ${recipe.strIngredient7}`;
      const recipeIngredient8 = `${recipe.strMeasure8} ${recipe.strIngredient8}`;
      const recipeIngredient9 = `${recipe.strMeasure9} ${recipe.strIngredient9}`;
      const recipeIngredient10 = `${recipe.strMeasure10} ${recipe.strIngredient10}`;
      const recipeIngredient11 = `${recipe.strMeasure11} ${recipe.strIngredient11}`;
      const recipeIngredient12 = `${recipe.strMeasure12} ${recipe.strIngredient12}`;
      const recipeIngredient13 = `${recipe.strMeasure13} ${recipe.strIngredient13}`;
      const recipeIngredient14 = `${recipe.strMeasure14} ${recipe.strIngredient14}`;
      const recipeIngredient15 = `${recipe.strMeasure15} ${recipe.strIngredient15}`;
      const recipeIngredient16 = `${recipe.strMeasure16} ${recipe.strIngredient16}`;
      const recipeIngredient17 = `${recipe.strMeasure17} ${recipe.strIngredient17}`;
      const recipeIngredient18 = `${recipe.strMeasure18} ${recipe.strIngredient18}`;
      const recipeIngredient19 = `${recipe.strMeasure19} ${recipe.strIngredient19}`;
      const recipeIngredient20 = `${recipe.strMeasure20} ${recipe.strIngredient20}`;
      //need to figure out how to use a foreach to filter this, and need some way to filter out empty ingredients

      const openModalButtons = document.querySelectorAll("[data-modal-target]");
      const closeModalButtons = document.querySelectorAll(
        "[data-close-button]"
      );
      const overlay = document.getElementById("overlay");

      // Pop up window stuff
      openModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const modal = document.querySelector(button.dataset.modalTarget);
          openModal(modal);
        });
      });

      closeModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const modal = button.closest(".modal");
          closeModal(modal);
        });
      });

      overlay.addEventListener("click", () => {
        const modals = document.querySelectorAll(".modal.active");
        modals.forEach((modal) => {
          closeModal(modal);
        });
      });

      function openModal(modal) {
        if (modal == null) return;
        modal.classList.add("active");
        overlay.classList.add("active");
      }

      function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove("active");
        overlay.classList.remove("active");
      }

      //adding each recipe. only displays 10 ingredients at the moment, until we can figure out how to filter out the empty ones
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="recipe-card">
          <div class="recipe-card-front">
            <h3 class="recipe-card-header">${recipeName}</h3>
            <img
              src="${recipeImage}"
              alt=""
              class="thumbnail"
            />
            <button data-modal-target="#modal">View Recipe</button>
          </div>
        </div>
        <div class="modal" id="modal">
        <div class="modal-header">
          <div class="title">
            <p class="title-text">${recipeName}</p>
            <p class="recipelink">
            From <a href="${recipeLink}">${recipeLink}</a>
            </p>
          </div>
          
          <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="modal-body">
        <ul class="recipe-ingredients">
          <li>${recipeIngredient1}</li>
          <li>${recipeIngredient2}</li>
          <li>${recipeIngredient3}</li>
          <li>${recipeIngredient4}</li>
          <li>${recipeIngredient5}</li>
          <li>${recipeIngredient6}</li>
          <li>${recipeIngredient7}</li>
          <li>${recipeIngredient8}</li>
          <li>${recipeIngredient9}</li>
          <li>${recipeIngredient10}</li>
        </ul>
          <p>
          Category: ${recipeCategory}
          </p>
          <p>
          Cuisine: ${recipeRegion}
          </p>
          <p>
          ${recipeInstructions}
          </p>
        </div>
      </div>
        `
      );
    });
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
query();
