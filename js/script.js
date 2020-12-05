var restaurants = [
    {
        "name": "O'Bagel",
        "address": "600 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Bagel"
        ]
    },
    {
        "name": "Jefferson’s Coffee",
        "address": "534 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Coffee"
        ]
    },
    {
        "name": "Ayame Hibachi & Sushi",
        "address": "526 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Sushi", "Takeout"
        ]
    },
    {
        "name": "Benny Tudino’s",
        "address": "622 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Pizza", "Takeout", "Cash Only"
        ]
    },
    {
        "name": "The Madison Bar & Grill",
        "address": "1316 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Bar", "Takeout", "Grill"
        ]
    },
    {
        "name": "Bin 14",
        "address": "1314 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Wine", "Takeout", "Bar", "Dine"
        ]
    },
    {
        "name": "Apulia",
        "address": "1319 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Pizza", "Takeout", "Lunch", "Dine"
        ]
    },
    {
        "name": "Stingray Lounge",
        "address": "1210 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Cocktail", "Takeout", "Bar", "Dine", "Outdoor"
        ]
    },
    {
        "name": "Green Garden",
        "address": "1202 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Chinese", "Takeout", "Comfort", "Dine"
        ]
    },
    {
        "name": "The Brick",
        "address": "1122 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Pizza", "Takeout", "Comfort", "Dine"
        ]
    },
    {
        "name": "Yeung II",
        "address": "1120 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Chinese", "Takeout"
        ]
    },
    {
        "name": "Napoli’s Pizza",
        "address": "1118 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Pizza", "Takeout", "Dine", "Outdoor"
        ]
    },
    {
        "name": "M & P Biancamano",
        "address": "1116 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Deli", "Takeout", "Italian"
        ]
    },
    {
        "name": "Alfalfa",
        "address": "1110 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Takeout", "Cafe", "Coffee"
        ]
    },
    {
        "name": "Augustino’s",
        "address": "1104 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Italian", "Takeout", "Fish", "Dine"
        ]
    },
    {
        "name": "Sirenetta Seafood & Raw Bar",
        "address": "1039 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Seafood", "Takeout", "Bar", "Dine","Fish","Raw"
        ]
    },
    {
        "name": "Jungle Juice 10th Street",
        "address": "1016 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Juice", "Takeout", "Acai", "Cafe"
        ]
    },
    {
        "name": "Asia Sushi & Chinese",
        "address": "926 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Asian", "Takeout", "Sushi", "Chinese"
        ]
    },
    {
        "name": "Amanda’s",
        "address": "908 Washington St, Hoboken, NJ 07030",
        "categories": [
            "American", "Takeout", "Early"
        ]
    },
    {
        "name": "Bagels On the Hudson",
        "address": "802 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Breakfast", "Takeout", "Bagel"
        ]
    },
    {
        "name": "8th Street Taven",
        "address": "800 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Grill", "Takeout", "Bar"
        ]
    },
    {
        "name": "Margherita’s",
        "address": "740 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Cocktail", "Takeout", "Pizza", "Italian"
        ]
    },
    {
        "name": "Pita Pit",
        "address": "732 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Sandwich", "Takeout", "Deli"
        ]
    },
    {
        "name": "Hoboken Hot Bagels",
        "address": "634 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Bagel", "Takeout"
        ]
    },
    {
        "name": "Kung Fu Tea",
        "address": "536 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Tea", "Coffee", "Cafe"
        ]
    },
    {
        "name": "Grimaldi’s Pizzeria",
        "address": "411 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Pizza", "Takeout", "Dine"
        ]
    },
    {
        "name": "The Cuban",
        "address": "333 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Cuban", "Bar", "Comfort"
        ]
    },
    {
        "name": "Mamoun’s Falafel",
        "address": "300 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Middle Eastern", "Takeout"
        ]
    },
    {
        "name": "Tally-Ho",
        "address": "526 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Bar", "Takeout", "Comfort"
        ]
    },
    {
        "name": "La Bouche",
        "address": "526 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Breakfast", "Takeout", "Brunch", "Coffee"
        ]
    },
    {
        "name": "The Brass Rail",
        "address": "135 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Bar", "Takeout", "American", "Dine"
        ]
    },
    {
        "name": "honeygrow",
        "address": "120 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Salads", "Light", "Healthy", "Locally Sourced"
        ]
    },
    {
        "name": "Johnny Rockets",
        "address": "134 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Retro", "Takeout", "American", "Dine"
        ]
    },
    {
        "name": "Cluck U Chicken",
        "address": "112 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Chicken", "Fast Food"
        ]
    },
    {
        "name": "Empanadas Cafe",
        "address": "123 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Cafe", "South American", "Coffee"
        ]
    },
    {
        "name": "La Isla",
        "address": "104 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Cuban", "Comfort", "BYOB"
        ]
    },
    {
        "name": "Carlo’s Bakery",
        "address": "95 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Bakery", "Takeout"
        ]
    },
    {
        "name": "Bluestone Lane",
        "address": "409 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Cafe", "Coffee"
        ]
    }
];

//Set Nav Buttons
document.getElementById("goHome").addEventListener('click', function(){
    window.location.href = "/index.html";
});
document.getElementById("goRestaurants").addEventListener('click', function(){
    window.location.href = "/restaurant.html";
});
document.getElementById("goSearch").addEventListener('click', function(){
    window.location.href = "/search.html";
});

//Returns: Array of strings
//Purpose: Parse the individual words in the given string
//"Hello World" --> {"Hello", "World"}
function parseInput(str){
    var stringArray = str.split(/(\s+)/);
    stringArray = stringArray.filter(isSpace);
    return stringArray;
}

function isSpace(str){
    return str != " ";
}

function checkInJSON(str, index){
    if (str == restaurants[index].name){
        return true;
    }

    for (var i = 0; i < restaurants[index].categories.length; i++){
        if (str == restaurants[index].categories[i]){
            return true;
        }
    }
    return false;
}

function getInput(){
    var string = document.getElementById("SearchBar").value;
    var stringArray = parseInput(string);
    
    var indexArray = [];
    for (var i = 0; i < stringArray.length; i++){
        var thisString = stringArray[i];
        for (var j = 0; j < restaurants.length; j++){
            if (checkInJSON(thisString, j)){
                indexArray.push(j);
            }
        }
    }


    var SearchResults = document.getElementById("SearchResults");
    while(SearchResults.hasChildNodes()){
        SearchResults.removeChild(SearchResults.firstChild);
    }
    
    for (i = 0; i < indexArray.length; i++){
        var elmName = restaurants[indexArray[i]].name;
        var elmAddress = restaurants[indexArray[i]].address;

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = SearchResults.insertRow(0);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add some text to the new cells:
        cell1.innerHTML = elmName;
        cell2.innerHTML = elmAddress;
    }
}

function loadAllRestaurants(){
    var SearchResults = document.getElementById("SearchResults");
    while(SearchResults.hasChildNodes()){
        SearchResults.removeChild(SearchResults.firstChild);
    }
    for (var i = 0; i < restaurants.length; i++){
        var elmName = restaurants[i].name;
        var elmAddress = restaurants[i].address;

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = SearchResults.insertRow(0);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add some text to the new cells:
        cell1.innerHTML = elmName;
        cell2.innerHTML = elmAddress;
    }
}

function collapseNav(){
    var navButton = document.getElementById("navButton");
    var sidebar = document.getElementById("nav");

    navButton.style.display = "block";
    sidebar.style.display = "none";

    expanded = false;
}

function expandNav(){
    var navButton = document.getElementById("navButton");
    var sidebar = document.getElementById("nav");

    navButton.style.display = "none";
    sidebar.style.display = "block";

    expanded = true;
}

var inMobile = false;
var expanded = true;
window.onresize = checkWindowState;


function checkWindowState() {
    var main = document.getElementById("main");
    var title = document.getElementById("mainTitle");
    if (window.innerWidth < 900){
        inMobile = true;
        main.style.marginLeft = "5%";
        main.style.marginRight = "5%";
        title.style.fontSize = "25px";
    }
    else {
        inMobile = false;
        main.style.marginLeft = "25%";
        main.style.marginRight = "25%";
        title.style.fontSize = "2.76vw";
    }

    if (inMobile){
        collapseNav();
    }
    else {
        expandNav();
    }
}
function updateNav() {
    if ((inMobile===true) && (expanded===true)){
        if (event.clientX > 200){
            collapseNav();
        }
    }
}

window.addEventListener("click", function(){
    updateNav();
});

document.addEventListener("DOMContentLoaded", function(){
    checkWindowState();
});