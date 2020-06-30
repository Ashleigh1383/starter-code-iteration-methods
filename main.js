// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

// Kata 1
const activeUser = users.filter(user => user.isActive === true)
const Heading1 = document.createElement('h1')
Heading1.append('Kata 1')
main.append(Heading1)
main.append(JSON.stringify(activeUser))


// Kata 2
const userEmails = users.map(user => user.email)
const Heading2 = document.createElement('h1')
Heading2.append('Kata 2')
main.append(Heading2)
main.append(JSON.stringify(userEmails))

// Kata 3
const userCompany = users.some(user => user.company === "OVATION")
const Heading3 = document.createElement('h1')
Heading3.append('Kata 3')
main.append(Heading3)
main.append(JSON.stringify(userCompany))

// Kata 4
const overAge38 = users.find(user => user.age > 38)
const Heading4 = document.createElement('h1')
Heading4.append('Kata 4')
main.append(Heading4)
main.append(JSON.stringify(overAge38))


// Kata 5
const activeOverAge38 = users
.filter(user => user.isActive === true)
.find(user => user.age > 38)
const Heading5 = document.createElement('h1')
Heading5.append('Kata 5')
main.append(Heading5)
main.append(JSON.stringify(activeOverAge38))


// Kata 6
const userBalanceZenco = users
.filter(user => user.company === "ZENCO")
.map(user => user.balance)
const Heading6 = document.createElement('h1')
Heading6.append('Kata 6')
main.append(Heading6)
main.append(JSON.stringify(userBalanceZenco))

// Kata 7
const userAgeOfFugiat = users
.filter(user => user.tags.includes("fugiat"))
.map(user => user.age)
const Heading7 = document.createElement('h1')
Heading7.append('Kata 7')
main.append(Heading7)
main.append(JSON.stringify(userAgeOfFugiat))

