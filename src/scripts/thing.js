// const container = document.querySelector("#favoriteThing")

// const listThingOnDom = () => {
//     container.innerHTML = ""
//     debugger
//     things.forEach(element => {
//     container.innerHTML += `
//         <section>
//             <h1>${element.thing}</h1>
//             <div>${element.location}</div>            
//         </section>
//     `
// })
// }
// let newButton = document.createElement("button")
// newButton.textContent = "Save to Wishlist";

// listThingOnDom(
//     document.querySelector("#saveEntry")newButton.addEventlistener("click", event => {
//         const thing = document.querySelector("#thing").value
//         const location = document.querySelector("#location").value
//     })
// )

// let newThingEntry = {
//     name: thing,
//     address: location
// }

// things.push(newThingEntry)



// const container = document.querySelector("#thingLocation")

// document.querySelector("#saveEntry").addEventListener("click", event => {
//     /*
//         Collect the user put by selecting the input fields, one
//         at a time, and accessing the `value` property
//     */
//     const thing = document.querySelector("#thing").value
//     const location = document.querySelector("#location").value


//     console.log("Thing", thing.value)
//     console.log("location", location.value)
//     // Once you have collected all the values, update the DOM
//     // with some HTML
//     container.innerHTML += `
//         <section>
//             <h1>"I can purhase${thing} at ${location}."</h1>
//         </section>
//     `
// })