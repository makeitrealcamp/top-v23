const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jack Doe' },
]



export default function handler(req, res) {

  if (req.method === 'GET') {
    return res.status(200).json(users)
  }

  if (req.method === 'POST') {
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    return res.status(201).json(user)
  }

  return res.status(405).json({ message: 'Method not allowed' })
}
