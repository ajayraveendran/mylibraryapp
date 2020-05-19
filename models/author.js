

let authors = [
  {
    "id": "10001",
    "first_name": "Jennifer",
    "last_name": "Robbins",
  },
  {
    "id": "10002",
    "first_name": "Evan",
    "last_name": "Hahn",
  }
]

const create = author => {
  authors.push(author)
  return authors
}

module.exports = {
  authors,
  create
}