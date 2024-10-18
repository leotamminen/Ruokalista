// Define the URL
const apiUrl =
  "https://www.unica.fi/api/restaurant/menu/day?date=2024-9-24&language=fi&onlyPublishedMenu=true&restaurantPageId=297238";

// Assari=  https://www.unica.fi/api/restaurant/menu/day?date=${date}&language=fi&onlyPublishedMenu=true&restaurantPageId=297238
// Kulma=   https://www.unica.fi/api/restaurant/menu/day?date=${date}&language=fi&onlyPublishedMenu=true&restaurantPageId=315929
// Galilei= https://www.unica.fi/api/restaurant/menu/day?date=${date}&language=fi&onlyPublishedMenu=true&restaurantPageId=299771

// karkafeerna api
// Aurum=   ??
// Kåren=   ??

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
          console.log(meal.Name); // Log each meal name
        });
      }
    });
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

// Call the function
fetchMenuData();
