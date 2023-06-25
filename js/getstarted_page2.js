let users = JSON.parse(localStorage.getItem("users")) ?? [];
let user_id = localStorage.getItem("user_id") ?? 0;
console.log(user_id);
let email = localStorage.getItem("Email");
$("#email").val(email);
$("#btn").on("click", function () {
  console.log(user_id);
  let emailid = $("#email").val();
  let password = $("#pass").val();
  let obj = {};
  obj.Email = emailid;
  obj.Password = password;
  obj.favMovie = [];
  obj.favTv = [];
  obj.user_id = user_id;

  users.push(obj);
  localStorage.setItem("user_id", user_id + 1);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "choose_plan.html";
});
