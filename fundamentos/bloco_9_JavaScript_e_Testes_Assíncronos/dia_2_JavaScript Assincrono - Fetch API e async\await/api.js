const url = `https://api.coincap.io/v2/assets` 
function cyptoFunction() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
       const arrayCrip = data.data;
       arrayCrip.filter((_, i) =>  )
    })
}
window.onload = () => cyptoFunction();