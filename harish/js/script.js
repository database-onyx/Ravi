function msg() {
    var cname = document.getElementById("name-fill").value,
        cmail = document.getElementById("mail-fill").value;
    if (cname != '' && cmail != '') {
        alert("Thanks for your response towards us!");
    } else {
        alert("Thanks , but Need your name and email to connect with you !!")
    }
}
var a = 1,
    b = 2;
console(a + b);
// scrollbar 

// $(window).scroll(function() {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });

//mail visiblity function
var lets = document.getElementById("lets"),
    mail = document.getElementById("mail");

function mailId() {
    mail.style.visibility = "visible";
}


// addons
// const cookieBox = document.querySelector(".wrapper"),
//     buttons = document.querySelectorAll(".button"),
//     message = document.getElementById("message");

// const executeCodes = () => {

//     if (document.cookie.includes("codinglab")) return;
//     cookieBox.classList.add("show");

//     buttons.forEach((button) => {
//         button.addEventListener("click", () => {
//             cookieBox.classList.remove("show");


//             if (button.id == "acceptBtn") {

//                 document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
//             }
//         });
//     });
// };

// message.addEventListener("click", executeCodes);