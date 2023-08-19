fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let tbody = document.getElementById("todoBody");

    data.results.forEach((item) => {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${item.title}</td><td>${item.priority}</td><td>${item.isDone}</td>`;
      tbody.appendChild(row);
    });
  })
  .catch((error) => console.error("Error:", error));
