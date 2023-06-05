import { useRef, useState } from "react"

const FormSearch = ({setIdLocation}) => {

    const idLocationValue = useRef()

    const [inputIsEmpty, setInputIsEmpty] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      const inputValue = idLocationValue.current.value.trim()
      idLocationValue.current.value = '' 
        
      if(inputValue === '') {
        setInputIsEmpty(true)
        setTimeout(() => {
          setInputIsEmpty(false)  
        }, 3000)
      } else {
        setIdLocation(inputValue)
      }
    }
  return (
    <>
      <form className="btn" onSubmit={handleSubmit}>
        <input placeholder="Enter id location" type="text" ref={idLocationValue} />
        <button className="input__btn">Search</button>
      </form>
      {
        inputIsEmpty && <h3>This field is required 👀</h3>
      }
    </>
  )
}

export default FormSearch