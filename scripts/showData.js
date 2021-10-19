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


async function getData(url){

    let res = await fetch(url);

    let data = await res.json();

    // console.log(data.meals);

    return data.meals;
}

function append( data, container){

    console.log(data);

    data.forEach(({strMeal, strMealThumb }) => {

        let div = document.createElement('div');

        let name = document.createElement('p');
        name.innerText = strMeal;

        let img = document.createElement('img');
        img.src = strMealThumb;

        div.append(img,name);

        container.append(div);

    });
}

export {search,getData,append}