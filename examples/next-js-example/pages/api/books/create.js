import books from '../../../shared/books'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const book = req.body
  book.id = books.length + 1
  books.push(book)

  return res.status(201).json(book)
}
