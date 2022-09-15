import books from '../../../shared/books'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req
  const { title } = req.body

  switch (method) {
    case 'GET': {
      /* Get a model by its ID */
      const book = books.find((book) => book.id === parseInt(id))
      if (!book) {
        return res.status(404).json({ success: false })
      }
      return res.status(200).json({ success: true, book })
    }

    case 'PUT': {
      const book = books.find((book) => book.id === parseInt(id))
      if (!book) {
        return res.status(404).json({ success: false })
      }

      if (title) {
        book.title = title
      }

      return res.status(200).json({ success: true, book })
    }


    case 'DELETE': {
       /* Delete a model by its ID */
      const book = books.find((book) => book.id === parseInt(id))
      if (!book) {
        return res.status(404).json({ success: false })
      }

      return res.status(200).json({ success: true, book })
    }

    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}
