import useForm from "../../hooks/useForm"

const RegisterPage = () => {
  const [form, handleChange] = useForm({})

  return(
    <div>
      <form>
        <input type="email" name="name" placeholder="your name" onChange={handleChange} />
        <br />
        <input type="email" name="email" placeholder="example@lo.com" onChange={handleChange} />
        <br />
        <input type="password" name="password" placeholder="" onChange={handleChange}/>
        <br />

        <button type="submit">
          Create account
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
