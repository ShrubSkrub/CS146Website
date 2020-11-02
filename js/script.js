restaurants = [
    {
        "name": "O'Begal",
        "address": "600 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Bagel", "Takeout"
        ]
    },
    {
        "name": "Jefferson’s Coffee",
        "address": "534 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Coffee", "Takeout"
        ]
    },
    {
        "name": "Ayame Hibachi & Sushi",
        "address": "526 Washington St, Hoboken, NJ 07030",
        "categories": [
            "Sushi", "Takeout"
        ]
    }
]


//Returns: Array of strings
//Purpose: Parse the individual words in the given string
//"Hello World" --> {"Hello", "World"}
function parseInput(str){
    var stringArray = str.split(/(\s+)/);
    stringArray = stringArray.filter(isSpace);
    return stringArray
}

function isSpace(str){
    return str != " ";
}

function checkInJSON(str, index){
    if (str == restaurants[index].name){
        return true;
    }

    for (let i = 0; i < restaurants[index].categories.length; i++){
        if (str == restaurants[index].categories[i]){
            return true;
        }
    }
    return false;
}

function getInput(){

    string = document.getElementById("SearchBar").value;
    stringArray = parseInput(string);
    
    indexArray = []
    for (let i = 0; i < stringArray.length; i++){
        let thisString = stringArray[i];
        for (let j = 0; j < restaurants.length; j++){
            if (checkInJSON(thisString, j)){
                indexArray.push(j);
            }
        }
    }


    SearchResults = document.getElementById("SearchResults");
    while(SearchResults.hasChildNodes()){
        SearchResults.removeChild(SearchResults.firstChild);
    }
    
    for (let i = 0; i < indexArray.length; i++){
        elmName = restaurants[indexArray[i]].name;
        elmAddress = restaurants[indexArray[i]].address;

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
    console.log(1);
    SearchResults = document.getElementById("SearchResults");
    while(SearchResults.hasChildNodes()){
        SearchResults.removeChild(SearchResults.firstChild);
    }
    for (let i = 0; i < restaurants.length; i++){
        elmName = restaurants[i].name;
        elmAddress = restaurants[i].address;

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