const container = document.querySelector("#addressList")

const listAddressOnDom = () => {
    container.innerHTML = ""
    debugger
    addressBook.forEach(element => {
    container.innerHTML += `
        <section>
            <h1>${element.name}</h1>
            <div>${element.address}</div>            
        </section>
    `
})
}

listAddressOnDom(

    document.querySelector("#saveEntry").addEventlistener("click", event => {
        const personName = document.querySelector("#fullName").value
        const personAddress = document.querySelector("#address").value
    })
)

let newAddressBookEntry = {
    name: personName,
    address: personAddress
}

addressBook.push(newAddressBookEntry)



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