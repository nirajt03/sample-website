function login() {
  let username = $("#Username").val();
  let password = $("#Password").val();

  //console.log( "username : "+ username );
  //console.log( "password : "+ password );

  if (
    (username == "admin" && password == "password123") ||
    (username == "user" && password == "password123")
  ) {
    alert("Successfully logged in Puralsight application");
    window.location.href = "./SearchPage.html";
  } else {
    //debugger;
    $("#sign_in_fail").css("display", "block");
    setTimeout(function () {
      $("#sign_in_fail").css("display", "none");
    }, 3500);
  }
}

//console.log("ready!");
