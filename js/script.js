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

function getInput(){

    string = document.getElementById("SearchBar").value;
    stringArray = parseInput(string);
    
    restaurants = [
        {
            "name": "O'Begal",
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
        }
    ]
    indexArray = []
    for (let i = 0; i < stringArray.length; i++){
        let thisString = stringArray[i];
        for (let j = 0; j < restaurants.length; j++){
            if (thisString == restaurants[j].name){
                indexArray.push(j);
            }
        }
    }

    for (let i = 0; i < indexArray.length; i++){
        console.log(restaurants[i].name);
    }
}