import { useState } from "react"

const Form = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const key = e.target.name
    setForm({ ...form, [key]: e.target.value })
  }

  const handleValidate = (e) => {
    const { name, value } = e.target

    if (name === 'nombre') {
      // validar que este lleno
      if (value === '') {
        setErrors({
          ...errors,
          nombre: {
            message: 'Este campo es requerido',
          }
        })
      } else if (value.length < 3) {
        setErrors({
          ...errors,
          nombre: {
            message: 'Este campo es demasiado corto',
          }
        })
      } else {
        setErrors({
          ...errors,
          nombre: null
        })
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (errors) {
      alert('Verifique que toda la info este ok')
      return
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          onBlur={handleValidate}
          required
        />
        <input
          type="text"
          name="apellido"
          onChange={handleChange}
          onBlur={handleValidate}
          required
        />
        <input type="email" name="correo"
          onBlur={handleValidate}
          required
        />
        <input type="password" name="contrasena" required/>

        <button type="submit">
          Enviar
        </button>
      </form>
      <ul>
        {
          Object.keys(errors).map((item, idx) => {
            if (errors[item]?.message) {
              return (
                <li key={idx}>
                  <strong>{item}</strong>
                  <p>{errors[item].message}</p>
                </li>
              )
            }

            return null

          })
        }
      </ul>
    </>
  )
}

export default Form
