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

    // kåren section is in the div where img alt="Kåren"
    // only gets meals under kåren
    const karenSection = $("div.lunch-item-left img[alt='Kåren']")
      .closest("div.lunch-item")
      .find(".meals .meal");

    let meals = [];

    // meal names
    karenSection.each((index, element) => {
      let mealName = $(element).find(".food").text().trim();
      meals.push(mealName);
    });

    // print meal names
    console.log("Meals under Kåren:");
    meals.forEach((mealName) => {
      console.log(mealName);
    });
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

fetchMenuData();
