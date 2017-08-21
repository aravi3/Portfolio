document.addEventListener("DOMContentLoaded", () => {
  let emailLink = document.getElementById("email-link");
  
  emailLink.addEventListener("click", () => {
    window.location.href = "mailto:ar2au@virginia.edu";
  });
});