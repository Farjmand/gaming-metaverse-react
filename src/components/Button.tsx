
interface Props{
    children: string
}
const Button = ({children}:Props) => {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
    <button className="btn btn-primary" type="button">{children}</button>
    <button className="btn btn-primary" type="button">Button</button>
  </div>
  )
}

export default Button