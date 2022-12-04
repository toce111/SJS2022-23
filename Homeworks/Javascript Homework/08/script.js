fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log(res);
        if (res.ok){
            return res.json();
        } else {
            console.log("You have something wrong in the API. Check again.")
        }
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
        console.log(res);
        if (res.ok) {
            return res.json();
        } else {
            console.log("You have something wrong in the API. Check again.")
        }
    }).then(data => {
        for(i = 0; i < 100; i++) {
            document.write(JSON.stringify(data[i]) + "<br> <br>");
        }
    }).catch(error => {
        console.log(error);
    }); 