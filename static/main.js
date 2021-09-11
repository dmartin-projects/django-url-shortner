const shorter_btn = document.getElementById("shorter_btn");
const url = document.getElementById("url_data");
const shorter_url = document.getElementById("shorter_url");
let csrftoken = getCookie("csrftoken");

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// searching for cookie csrftoken

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
//================================================

shorter_btn.addEventListener("click", (e) => {
  e.preventDefault();

  postData("/create", { url: url.value }).then((data) => {
    // JSON data parsed by `response.json()` call
    shorter_url.innerText = "link-to/" + data.data;
    shorter_url.href = "http://localhost:8000/" + data.data;
  });
});
