function search() {

    container.innerHTML = null;

    let query = document.getElementById('query').value;

    let response = getData(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`);

    response    
        .then((res) => {

            append(res,container);

        })
        .catch((err) => {

            console.log(err)

        });
}

export {search}