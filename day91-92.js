// Insert a single document into the users collection
db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com"
})

// Insert multiple documents into the users collection
db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
])

// Retrieve all documents from the users collection
db.users.find()

// Retrieve documents where age is greater than 25
db.users.find({
  age: { $gt: 25 }
})

// Update Alice's age to 26
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)

// Delete the document where name is Charlie
db.users.deleteOne({
  name: "Charlie"
})
