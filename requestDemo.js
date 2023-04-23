let menu = document.querySelector("#navBarRes")

const linkChange = (self) => {
  document.querySelectorAll(".link").forEach((el) => {
    el.classList.remove("active")
  })
  self.classList.add("active")
  menu.style.top = "-300px"
  menuBar.style.transform = "rotate(0deg)"
}

const menuBar = document.querySelector("#menuBar")

menuBar.addEventListener("click", () => {
  if (!menu.style.top || menu.style.top === "-300px") {
    menu.style.top = "80px"
    menuBar.style.transform = "rotate(90deg)"
  } else {
    menu.style.top = "-300px"
    menuBar.style.transform = "rotate(0deg)"
  }
})

const myNav = document.querySelector("#navBar")

window.onscroll = () => {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
        myNav.classList.add("nav-colored");
    } 
    else {
        myNav.classList.remove("nav-colored");
    }
};

const data = localStorage.getItem('dataStored');
let columns;

const syncData = () => {
  const data = JSON.parse(localStorage.getItem('dataStored'));
  if (data) {
    const table = document.getElementById("dataTable")
    table.innerHTML = ""

    data.forEach((obj) => {
      let tr = document.createElement("tr")
      let tdId = document.createElement("td")
      let tdName = document.createElement("td")
      let tdPrice = document.createElement("td")

      tdId.innerHTML = obj.id
      tdName.innerHTML = obj.name
      tdPrice.innerHTML = `$${Number(obj.price).toLocaleString()}`

      tr.appendChild(tdId)
      tr.appendChild(tdName)
      tr.appendChild(tdPrice)

      table.appendChild(tr)
    })
    
  }

  columns = document.getElementsByTagName("tr")[1].parentNode.children.length;
  document.getElementById("id").value = `ID: ${columns+1}`
}

const submitForm = (event) => {
  event.preventDefault()

  const name = document.getElementById("name")
  const price = document.getElementById("price")

  const dataObj = new Object
  dataObj.name = name.value
  dataObj.id = columns+1
  dataObj.price = price.value

  if (!data) {
    const arr = [dataObj]
    window.localStorage.setItem("dataStored", JSON.stringify(arr));
  } else {
    let parsedData = JSON.parse(data)
    parsedData.push(dataObj)
    window.localStorage.setItem("dataStored", JSON.stringify(parsedData));
  }

  name.value = ""
  price.value = ""

  name.classList.remove("typing")
  price.classList.remove("typing")

  syncData()

  swal("Data Added", "Your Data has been successfully added to the Data Storage", "success");
}

const check = (self) => {
  self.classList.add("typing")
}

const addInitialData = () => {
  const data = JSON.parse(localStorage.getItem('dataStored'));
  if (!data) {
    let arr = [{
      id: 1,
      name: "Amazon",
      price: "59000"
    }, {
      id: 2,
      name: "Google",
      price: "67000"
    }, {
      id: 3,
      name: "Facebook",
      price: "45607"
    }, {
      id: 4,
      name: "Microsoft",
      price: "37499"
    }, {
      id: 5,
      name: "Paystack",
      price: "2290"
      }]
    
    arr = JSON.stringify(arr)

    window.localStorage.setItem("dataStored", arr);
  }
}

addInitialData()
syncData()