// Get the date from command-line arguments or use today's date as default
const args = process.argv.slice(2);
const date = args[0] || new Date().toISOString().split("T")[0]; // Default to today

console.log(date);

// Define the URL
const apiUrl = `https://www.unica.fi/api/restaurant/menu/day?date=${date}&language=fi&onlyPublishedMenu=true&restaurantPageId=297238`;

// Function to fetch menu data
async function fetchMenuData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Extract and log all meal names
    const setMenus = data.LunchMenu.SetMenus; // Access SetMenus
    setMenus.forEach((setMenu) => {
      if (setMenu.Meals && setMenu.Meals.length) {
        // Check if Meals exist
        setMenu.Meals.forEach((meal) => {
          // Log each meal name
          console.log(meal.Name);
        });
      }
    });
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

fetchMenuData();
