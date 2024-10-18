const cheerio = require("cheerio");
const fetch = require("node-fetch");

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

    // aurum section is where is img alt="Aurum"
    // this part only gets meals under aurum
    const aurumSection = $("div.lunch-item-left img[alt='Aurum']")
      .closest("div.lunch-item")
      .find(".meals .meal");

    let meals = [];

    // Extract the meal names from the aurum section
    aurumSection.each((index, element) => {
      let mealName = $(element).find(".food").text().trim();
      meals.push(mealName);
    });

    // print meal names
    console.log("Meals under Aurum:");
    meals.forEach((mealName) => {
      console.log(mealName);
    });
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

fetchMenuData();
