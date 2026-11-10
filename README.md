# Appliance Energy Consumption website (Exercises 0.2, 4.2 and 4.7)

COS30045 Data Visualisation, Bui Dang Minh (105716425)

Live site: https://buidangminh23.github.io/cos30045-ex0-energy-website/

A three-page website (Home, Televisions, About Us) built for Exercise 0.2 and reused in Week 4:

- **Exercise 0.2:** shared navigation with the power logo linking to Home, hover and active styles, a JavaScript FAQ accordion on the Home page, one external CSS file and a footer with the current year.
- **Exercise 4.2:** `assets/js/main.js` uses D3 to change the style of the headings, append a paragraph to the `.container` div and append a rectangle to an empty `svg` on the Home page. Each step is a separate commit.
- **Exercise 4.7 (last step):** the D3 bar chart from the Exercise 4.3-4.7 repository is added to the Televisions page (`assets/js/bar-chart.js`).

## Files

- `index.html`, `televisions.html`, `about.html` - the three pages
- `assets/css/style.css` - styles for all pages
- `assets/js/site.js` - FAQ accordion and footer year
- `assets/js/main.js` - Exercise 4.2 D3 code
- `assets/js/bar-chart.js` - Exercise 4.7 bar chart
- `assets/data/tvBrandCount.csv` - brand counts exported from the 2026 TV Data KNIME workflow
- `assets/img/power-icon.png` - power logo provided with Exercise 0.2

## Run locally

Open the folder in VS Code and start Live Server, or run `python -m http.server` in the folder and open http://localhost:8000. The Televisions page must be served by a server so that `d3.csv` can load the data file.
