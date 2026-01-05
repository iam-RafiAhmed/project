const options = document.querySelectorAll(".option");
const detailBox = document.getElementById("optionDetails");
const email = detailBox.dataset.email;


options.forEach(option => {
    option.addEventListener("click", (e) => {

        const id = option.id;

        if (id == "logout") return;

        e.preventDefault();
        if (id == "profile") {
            let opt = document.getElementById(id);
            options.forEach(o => o.style.color = "#7F8899");
            opt.style.color = "#EC009B";
            detailBox.innerHTML = `<h2>My profile</h2>
            <div class="myProfile">
                <div>
                <div>
                    <h3>My full name</h3>
                    <p>---</p>
                    <h3>Gender</h3>
                    <p>---</p>
                </div>
                <div>
                    <h3>My address</h3>
                    <p>---</p>
                </div>
            </div>
                <div>
                    <h3>Email</h3>
                    <p>${email}</p>
                    <h3>Phone Number</h3>
                    <p>---</p>
                </div>
            </div>
            <div class="btnGrp">
                <a href="../view/changePassword.php"><button class="profileBtn">Change Password</button></a>
                <a href="../view/editProfile.php"><button class="profileBtn">Edit Profile</button></a>
            </div>`
        }
        else if (id == "orders") {
            let opt = document.getElementById(id);
            options.forEach(o => o.style.color = "#7F8899");
            opt.style.color = "#EC009B";
            detailBox.innerHTML = `
            <div>
                <h2>My Orders</h2>              
            </div>`
        }
        else if (id == "wishlist") {
            let opt = document.getElementById(id);
            options.forEach(o => o.style.color = "#7F8899");
            opt.style.color = "#EC009B";
            detailBox.innerHTML = `
            <div>
                <h2>My Wishlist</h2>              
            </div>`
        }
    })
})