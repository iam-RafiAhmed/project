const options = document.querySelectorAll(".option");
const detailBox = document.getElementById("optionDetails");


options.forEach(option => {
    option.addEventListener("click", (e) => {
         e.preventDefault();
        const cls = option.getAttribute("id");
        if (cls == "manageAccount") {
            let opt = document.getElementById(cls);
            options.forEach(o=> o.style.color = "#7F8899");
            opt.style.color = "#EC009B";
            detailBox.innerHTML = `<h3>Manage Account</h3>
            <p class="personalLine">Personal Profile</p> <a href="">Edit</a>
            <p>abcd@gmail.com</p>`
        }
        else if(cls == "profile"){
            let opt = document.getElementById(cls);
            options.forEach(o=> o.style.color = "#7F8899");
            opt.style.color = "#EC009B";
            detailBox.innerHTML = `<h2>My profile</h2>
            <div class="myProfile">
                <div>
                    <h3>My full name</h3>
                    <p>---</p>
                    <h3>Gender</h3>
                    <p>---</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>---</p>
                    <h3>Phone Number</h3>
                    <p>---</p>
                </div>
            </div>
            <div class="btnGrp">
                <button class="profileBtn">Change Password</button>
                <button class="profileBtn">Edit Profile</button>
            </div>`
        }
    })
})