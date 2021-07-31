//console.log(document.location);
var resultContentEl = document.querySelector('#result-content');

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}


var search=getQueryVariable('q');
var format=getQueryVariable('format');

if(search && format)
{
    //console.log("ambos");
    var url = "https://www.loc.gov/"+format+"/?q="+search+"&fo=json"

        fetch(url)
          .then(function (response) {
            
            return response.json();
            
          })
          .then(function (data) {
            console.log(data.results);

            for (var i = 0; i < data.results.length; i++) {
                //Create a list element
                var listItem = document.createElement('div');
        
                //Set the text of the list element to the JSON response's .html_url property
                listItem.textContent = data.results[i].image_url;
        
                //Append the li element to the id associated with the ul element.
                resultContentEl.appendChild(listItem);
              }


          });
    






}
else if(search)
{
    console.log("q");
}
else if(format){

    console.log("format");
}
else{
    console.log("No hay parametros.");
}