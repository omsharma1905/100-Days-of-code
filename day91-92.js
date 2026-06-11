db.users.insertOne({ name: "Alice", age: 25, email: "alice@example.com" })

db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
])

db.users.find()

db.users.find({ age: { $gt: 25 } })

db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })

db.users.deleteOne({ name: "Charlie" })