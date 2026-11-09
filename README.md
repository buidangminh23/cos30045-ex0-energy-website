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

## Generative AI Reflection

- **Tool:** Claude Opus 5.5 (Anthropic), used through Claude Code in November 2026.
- **What I used it for:** drafting the HTML, CSS and JavaScript for the three pages, and the D3 code by following the steps of the Exercise 4.2 brief.
- **What I changed or checked:** I ran the pages with a local server, opened and closed each FAQ item, checked the new paragraph and rectangle in the DOM with the developer tools, and checked that the bar chart loads its data. I used `lightgreen` instead of the `green` in the brief so the heading stays readable on the brown header.
- **What I learned:** `d3.select` changes the first matching element, `d3.selectAll` changes every match, and an appended SVG shape is in the DOM but stays invisible until it has a position, a size and a fill.
- **Limitations:** the website was built after the Week 4 exercises, so its commit dates are later than the other Demonstration 2 repositories. Each commit that contains generated code says so in the commit message, and each HTML and JavaScript file starts with a comment marking the GenAI use.
