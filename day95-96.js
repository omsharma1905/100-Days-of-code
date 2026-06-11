// Creating an index on a single field
db.users.createIndex({ email: 1 })

// Creating a compound index
db.orders.createIndex({ userId: 1, date: -1 })

// Text index for searching
db.blogs.createIndex({ title: "text", content: "text" })

// Using explain to analyze query
db.users.find({ email: "john@example.com" }).explain("executionStats")

// Embedded schema example
{
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  }
}

// Referenced schema example
// In users collection
{
  _id: ObjectId("userId123"),
  name: "Jane"
}
// In orders collection
{
  userId: ObjectId("userId123"),
  product: "Phone",
  quantity: 2
}