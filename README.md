# Ruokalista

Displays today's meal menu from Unica's restaurant API.
At this point uses [karkafeerna.fi/fi/lounas](https://www.karkafeerna.fi/fi/lounas/) to fetch meal data for Aurum and Kåren. (Kårkaféerna restaurants)
Unica restaurants like Assari, Kulma, and Galilei are sourced from Unica's API.

- All restaurants can be found in the ravintolat/ directory.
- Needs optimization especially with unica API via proxy. Sometimes slow and can give errors.
- Error handling needs to be added in the future.

## Usage

The page is intentionally designed to be very very plain and simple, because it is used for text-to-speech purposes. I use this in my personal iPhone shortcuts.
The simple structure makes the usage easy.

To view the menu for a specific restaurant, navigate to the corresponding URL.
For example, [Assari](https://leotamminen.github.io/Ruokalista/ravintolat/assari/) `https://leotamminen.github.io/Ruokalista/ravintolat/assari/`
Simply change the endpoint with different restaurants.
