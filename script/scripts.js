console.log("Hello from scripts.js")

//Works!! 1) Select the section with an id of container without using querySelector.
const gettingContainer = document.getElementById("container")
console.log(gettingContainer)
// //Works!!2) Select the section with an id of container using querySelector.
// const gettingContainerByQuerySelector = document.querySelector("#container")
// console.log(gettingContainerByQuerySelector.children)
// // Works!!3) Select all of the list items with a class of "second".
// const allListItemsOfClassSecond = document.querySelectorAll("li.second")
// console.log(allListItemsOfClassSecond)
// //Works!!4) Select a list item with a class of third, but only the list item inside of the ol tag.
// const ol = document.querySelector("ol")
// console.log(ol.lastElementChild)
// //Works!! 5) Give the section with an id of container the text "Hello!".
// const containerText = document.querySelector("#container")
// containerText.textContent = "Hello!"
// // Works!!6) Add the class main to the div with a class of footer.
// const footer = document.querySelector("div.footer")
// footer.className = "footer main"
// console.log(footer)
// // 7) Remove the class main on the div with a class of footer.
// footer.className = "footer"
// console.log(footer)
// //Works!!  8) Create a new li element.
// const newListElement = document.createElement("li")
// //Works!!  9) Give the li the text "four".
// newListElement.innerText = "four"
// console.log(newListElement)
// //Works!!  10) Append the li to the ul element.
// const listOne = document.querySelector("ul")
// console.log(listOne)
// listOne.append(newListElement)
// //Works!! 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
// const listOl = document.querySelector("ol")
// const olItems = listOl.children
// const listItemsArray = Array.from(olItems)
// listItemsArray.forEach((element) => {
//     let colorGreen = "green"
//     console.log(typeof (colorGreen))
//     element.style.color = colorGreen
// })
// // works!!l13) Remove the div with a class of footer.
// let removeFooter = document.querySelector(".footer")
// removeFooter.remove()

