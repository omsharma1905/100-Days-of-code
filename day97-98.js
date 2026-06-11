// Sample: Total orders by user
db.orders.aggregate([
    { $group: { _id: "$userId", totalAmount: { $sum: "$amount" } } }
  ])
  
  // Filter orders above $100 and sort
  db.orders.aggregate([
    { $match: { amount: { $gt: 100 } } },
    { $sort: { amount: -1 } }
  ])
  
  // Monthly sales report
  db.orders.aggregate([
    {
      $group: {
        _id: { $month: "$orderDate" },
        totalSales: { $sum: "$amount" },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ])
  
  // Projecting only required fields
  db.users.aggregate([
    {
      $project: {
        name: 1,
        email: 1,
        _id: 0
      }
    }
  ])  