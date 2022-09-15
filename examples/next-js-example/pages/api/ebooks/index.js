import books from '../../../shared/books'

export default async function handler(req, res) {
  const { method } = req
  const { title } = req.body

  switch (method) {
    case 'GET': {
      return res.status(200).json({ success: true, books })
    }
    case 'POST': {
      const book = {
        title,
      }
      books.push(book)
      return res.status(201).json({ success: true, book })
    }
    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}
