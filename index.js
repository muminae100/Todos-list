function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json() 
        )
        .then(json => {      
            
            document.querySelector("#loader").className = "loader";      
            var total = 0;
            json.forEach(element => {
                total += element.id;
                document.getElementById("list-of-todos").innerHTML += `
                <tr>
                    <td>
                        ${element.id}
                    </td>
                    <td>
                        ${element.title}
                    </td>
                    <td>
                        ${element.completed}
                    </td>
td button onclick=deleteTode(id)|"
                </tr>`
            });
            document.getElementsByClassName("total")[0].innerHTML = `Total of IDS: <h2>${total}</h2>`
        })
}

function deleteTode(id){

}