// take the keyword in search 
// select the category in search
// return the secondary javascript page with the search items in cards
var requestURL = "https://www.loc.gov/maps/?q=civil war&fo=json"


var categories = ["maps", "audio", "photos", "manuscripts", "newspapers",]
var searchFormEl = document.querySelector('#search-form')
var searchInputEl = document.querySelector('#search-input')
var formatInputEl = document.querySelector('#format-input')



function handleSubmit() {
    event.preventDefault()

    var searchSelect = searchInputEl.value
    var categorySelect = formatInputEl.value

    console.log(searchSelect)
    console.log(categorySelect)

    if (searchSelect) {
        if (categorySelect) {
            document.location.replace('./search-results.html?q=' + searchSelect + "&format=" + form)
        }
    }

    else {
        return
    }

}


searchFormEl.addEventListener("submit", handleSubmit)

