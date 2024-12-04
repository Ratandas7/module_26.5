
const loadAllUsers = () => {
    fetch('https://fakestoreapi.com/users')
        .then((res) => res.json())
        // .then((data) => console.log(data));
        .then((data) => displayAllUsers(data));
};
const displayAllUsers = (users) => {
    // console.log(users);
    users?.forEach((user) => {
        const parent = document.getElementById("table-body");
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.name.firstname}</td>
            <td>${user.name.lastname}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td class="user-detail"><a target="_blank" href="singleUser.html?userId=${user.id}">details</a></td>
        `;
        parent.appendChild(tr);
    });
};

const loadSingleUser = () => {
    const param = new URLSearchParams(window.location.search).get("userId");
    // console.log(param);
    fetch(`https://fakestoreapi.com/users/${param}`)
        .then((res) => res.json())
        // .then((data) => console.log(data));
        .then((data) => displaySingleUser(data));
}

const displaySingleUser = (user) => {
    const parent = document.getElementById("single-user-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="user-info1">
            <h1>Hi, ${user.username}</h1>
            <hr>
            <p>${user.email}</p>
        </div>
        <div class="user-info2">
            <p>First Name: ${user.name.firstname}</p>
            <p>Last Name: ${user.name.lastname}</p>
            <p>Phone: ${user.phone}</p>
            <h4>Address</h4>
            <hr>
            <p>Street: ${user.address.street}</p>
            <p>Number: ${user.address.number}</p>
            <p>City: ${user.address.city}</p>
            <p>Zipcode: ${user.address.zipcode}</p>
            <h4>Geolocation</h4>
            <hr>
            <p>Lat: ${user.address.geolocation.lat}</p>
            <p>Long: ${user.address.geolocation.long}</p>
        </div>
    `;
    parent.appendChild(div);
}






loadSingleUser();
loadAllUsers();

