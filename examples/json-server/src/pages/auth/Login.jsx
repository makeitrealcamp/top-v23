import useForm from "../../hooks/useForm"

const LoginPage = () => {
  const [form, handleChange] = useForm({})

  return(
    <div>
      <form>
        <input type="email" name="email" placeholder="example@lo.com" onChange={handleChange}/>
        <br />
        <input type="password" name="password" placeholder="" onChange={handleChange}/>
        <br />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
