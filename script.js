// searching for meal list 

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value
    // console.log(searchText); 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => displayMeals(data.meals))

    //     .catch((error) => {
    //         alert("Invalid Meal Name. Please put a valid meal name.");
    //     })

    if (searchText === '') {
        alert("Please type your desire meal first.And give your eyes ease.");

    }
    else {
        fetch(url)
            .then(response => response.json())
            .then(data => displayMeals(data.meals))

            .catch((error) => {
                alert("We don't have such named meal for now. Please check spelling");
            })

    }

}
// displaying meal list
const displayMeals = meals => {
    // console.log(meals)
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.className = 'meal';

        const mealInfo = `
        <div onclick = "displayMealDetail('${meal.idMeal}')">
        <img src = "${meal.strMealThumb}">
        <h5>${meal.strMeal}</h5>
        </div>
    `

        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv);

    });

}



const displayMealDetail = mealName => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals));
}

//  ingredients of each meal
const renderMealInfo = ingredientItems => {

    ingredientItems.forEach(meal => {
        const mealDetail = document.getElementById("meal-details")
        mealDetail.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        <p>${meal.strIngredient1}</p>
        <p>${meal.strIngredient2}</p>
        <p>${meal.strIngredient3}</p>
        <p>${meal.strIngredient4}</p>
        <p>${meal.strIngredient5}</p>
        <p>${meal.strIngredient6}</p>
        <p>${meal.strIngredient7}</p>
        <p>${meal.strIngredient8}</p>
        <p>${meal.strIngredient9}</p>
        <p>${meal.strIngredient10}</p>
        
        `
    });
}
