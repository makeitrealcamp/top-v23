import React from 'react'

const Form: React.FC = () => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }


  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" onChange={handleChange} />
      <select name="country" onChange={handleChange}>
        <option value="argentina">Argentina</option>
        <option value="chile">Chile</option>
        <option value="peru">Colombia</option>
      </select>
      <textarea name="description" onChange={handleChange} id="" cols={30} rows={10} />
    </form>
  )
}

export default Form
