console.log("assignment")

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

function conjunction (firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)

  const modSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }

  let HTMLRepresentation = `<h1>The Mod Squad</h1>`

  modSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`
  })

console.log(HTMLRepresentation)
