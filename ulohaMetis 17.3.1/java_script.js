fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(json => {
                let data = document.getElementById("data")
                let tabulka = document.createElement("table");
                let header = document.createElement("tr");
                header.innerHTML = "<th>postID</th>   <th>id</th>     <th>name</th>   <th>email</th>  <th>body</th>"
                tabulka.append(header)


                for (const posts of json) {
                    let riadok = document.createElement("tr");
                    let postID = document.createElement("td");
                    let id = document.createElement("td");
                    let name = document.createElement("td");
                    let email = document.createElement("td");
                    let body = document.createElement("td");
                    postID.innerText = posts.postId;
                    id.innerText = posts.id;
                    name.innerText = posts.name;
                    email.innerText = posts.email;
                    body.innerText = posts.body;
                    console.log(postID)

                    riadok.append(postID, id, name, email, body);
                    tabulka.append(riadok);
                }
                tabulka.classList.add("w3-striped");

                data.append(tabulka);
            })