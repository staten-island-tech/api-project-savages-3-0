const query = async function () {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan"
    );
    const data = await response.json();
    console.log(data);
    const apiTest = data;
    document.getElementById("test").innerText = apiTest;
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
query();
