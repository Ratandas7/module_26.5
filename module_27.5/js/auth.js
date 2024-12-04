const handleRegister = (event) => {
    event.preventDefault();
    // console.log("Hello");
    const username = getValue("username");
    const firstname = getValue("firstname");
    const lastname = getValue("lastname");
    const email = getValue("email");
    const phone = getValue("phone");
    const street = getValue("street");
    const number = getValue("number");
    const city = getValue("city");
    const zipcode = getValue("zipcode");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
    // console.log({username, firstname, lastname, email, phone, street, number, city, zipcode, password, confirm_password});
    const info = {username, firstname, lastname, email, phone, street, number, city, zipcode, password, confirm_password};
    if (password ==  confirm_password) {
        document.getElementById("error").innerText = "";
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            console.log(info);
            fetch("https://fakestoreapi.com/users/", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
        else{
            document.getElementById("error").innerText = "Password must contain eight characters, at least one letter, one number and one special character";
        }
    }
    else{
        document.getElementById("error").innerText = "Password and confirm password does not match";
    }
};

const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value ? value : null;
};


const handleLogin = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const password = getValue("password");
    console.log(username, password);
    if ((username, password)) {
        fetch("https://fakestoreapi.com/auth/login/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.token && data.id) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("id", data.id);
                    window.location.href = "index.html";
                }
            });
    }
};