// Comparison operators
db.users.find({ age: { $gt: 25 } })
db.products.find({ price: { $lt: 1000 } })

// Logical operators
db.users.find({ $or: [{ age: { $lt: 20 } }, { name: "Bob" }] })

// Projection: include only name and email
db.users.find({}, { name: 1, email: 1, _id: 0 })

// Sort and limit
db.products.find().sort({ price: -1 }).limit(5)

// Skip for pagination
db.products.find().skip(5).limit(5)

// Query nested fields
db.orders.find({ "customer.name": "Alice" })

// Query arrays
db.books.find({ genres: "fiction" }) 
db.books.find({ genres: { $all: ["fiction", "mystery"] } })