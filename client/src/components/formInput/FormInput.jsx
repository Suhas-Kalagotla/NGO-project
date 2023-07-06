import react from 'react'
import {useField} from 'formik'
import "./input.css"
const FormInput =({label,name,placeholder,type})=>{
  const [field,meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);
  return(
    <div className ="input-block">
      <label htmlFor={name} className="input-label">{label}</label>
      <input
      type={type}
      className={`${isError && "fail"}`}
      autoComplete="off"
      name={name}
      id={name}
      placeholder={placeholder}
      {...field}
      />
      <p className={`${isError && "fail-text"}`}>{isError && meta.error}</p>
    </div>
  )
}

export default FormInput;