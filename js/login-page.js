let users = JSON.parse(localStorage.getItem("users"));

$("#signup").on("click", () => {
  window.location.href = "index.html";
});

$("#signIn").on("click", () => {
  let valid = false;
  let user_id;
  if (users != null) {
    let email = $("#email").val();
    let password = $("#password").val();
    for (let user of users) {
      if (user["Email"] == email && user["Password"] == password) {
        valid = true;
        user_id = user["user_id"];
        break;
      }
    }
  }

  if (valid) {
    sessionStorage.setItem("user_id", user_id);
    window.location.href = "main_page.html";
  } else {
    $("#error").show();
  }
});
