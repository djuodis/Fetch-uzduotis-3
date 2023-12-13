fetch("https://party-wedding.glitch.me/v1/wedding")
  .then(res => {
    return res.json()
  })
  .then(data => {
    const table = document.createElement("table")
    const body = document.querySelector('body')

    if (Array.isArray(data)) {
        data.forEach(person => {
            if (person.name) {
                const row = table.insertRow()
                const nameCell = row.insertCell()
                const plusOneCell = row.insertCell()
                const attendingCell = row.insertCell()

                nameCell.innerText = person.name

                const plusOneSymbol = person.plusOne ? '+' : '-'
                plusOneCell.innerText = `Plus one? ${plusOneSymbol}`

                const attendingSymbol = person.attending ? '+' : '-'
                attendingCell.innerText = `Attending? ${attendingSymbol}`
            }
        })
    }

    body.appendChild(table)
})
