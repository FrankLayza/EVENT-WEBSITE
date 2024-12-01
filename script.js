const form = document.getElementById("form");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx1m5xYgeK3bTLdD_pg7lgHKDXESbkI2usstkqkPXWU3r3BYaieMeqCdhDzdJ3a7dA_8g/exec";

emailjs.init("HX5hrsV_OTgDyxGAL");

const service_id = "service_lxhnfny";
const template_id = "template_7dm0d2h";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs
    .send(service_id, template_id, {
      first: document.getElementById("FirstName").value,
      last: document.getElementById("LastName").value,
      to_email: document.getElementById("Email").value,
      reply_to: "frankez478@gmail.com",
    })
    .then((res) => {
      console.log("Email sent successfully", res.status, res.text);
      alert("Registration Successful");
    })
    .catch((error) => {
      console.log("Error while sending email", error);
    });

  const formData = new FormData(form);
  fetch(scriptURL, { method: "POST", body: formData })
    .then((res) => {
      console.log("Data added to Google Sheet successfully");
    })
    .catch((error) => {
      console.error("Error while submitting to Google Sheets", error);
    });
});
