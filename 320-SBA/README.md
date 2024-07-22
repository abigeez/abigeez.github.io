My name is Abigail and this is my 320 React SBA, which is a weather app a weather app that uses an external API to retrieve data about cities weather conditions around the world. 

The technologies I used are HTML, CSS, Javascript and React. I used HTML boilerplate to set the root of where it serves as the entry point for the React app I've created. I used CSS styling such as flexbox methods, changing the color of the background, shaping the components and elements and spacing and borders around the elements to make everything come together.

 I used javascript inside the JSX language typically in "{}" curly brackets such as methods to be able to import variables or to manipulate the BOM to create alert messages or  the DOM and using object-key values to organize the data I was receiving from the external API I used to retrieve data for my weather app.
I used AJAX to link to an external API to retrieve live, current data that was dynamic and would change upon entry, such as filling it out in the search box and waiting for the click event handler to be able to search the API with the specific, designated keywords/parameters  I used such as "city" or "temperature." Additionally, I used react hooks such as: useState to manage the data when my component updates, useRef to keep the data input value of the searchbar throughout renders so that it can maintain those values until changed to another location and useEffect for fetching and maintaing the data entered in the parameter such as the location.
Lastly, I used error handling functions such as try and catch, fragments to store what UI appears dependent on what request is input into the search bar, if statements for possible errors such as misspelled cities or no entry at all. 

Usage instructions:
Type in any city (only city not state or country) in search bar to fetch live data about the weather conditions. Use search icon to submit. Attempt typing in a blank ("") and see what error message pops up. As well attempt to enter a city that doesn't exist or misspell a city to see what error message will pop up. Try to change to different cities that may have different weather conditions such as rainy weather like in a rainforest area or a desert like in Phoenix and see what different icons and data pop up as relative to that information.


deploy link: https://golden-unicorn-285935.netlify.app/


