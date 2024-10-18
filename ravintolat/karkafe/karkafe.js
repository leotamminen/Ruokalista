const cheerio = require("cheerio");
const fetch = require("node-fetch");

// This gets all the meals. not just aurums.
// File is not used. Saved if need it later

// Aurum and Kåren use this. URL for Kårkaféerna:
const apiUrl = `https://www.karkafeerna.fi/fi/lounas/`;

// Function to fetch menu data
async function fetchMenuData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the response as text
    const responseText = await response.text();

    // Load the response HTML into cheerio
    const $ = cheerio.load(responseText);

    let meals = [];
    $(".meal").each((index, element) => {
      let mealName = $(element).find(".food").text().trim();

      // add extracted meal names to meals
      meals.push(mealName);
    });

    // print meal names
    console.log("Meals Fetched from API:");

    meals.forEach((mealName) => {
      console.log(mealName);
    });
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

fetchMenuData();
