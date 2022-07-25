import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    const { name, value: inputValue, checked, type } = e.target

    const value = type === 'checkbox' ? checked : inputValue

    setForm({
      ...form,
      [name]: value
    })
  }

  return [form, handleChange]
}

export default useForm
