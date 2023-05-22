import react from 'react'
import {useField} from 'formik'

const FormInput =({label,name,placeholder})=>{
  const [field,meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);
  return(
    <div className ="input-block">
      <label htmlFor={name} className="input-label">{label}</label>
      <input
      autoComplete="off"
      name={name}
      id={name}
      placeholder={placeholder}
      {...field}
      />
      <p>{isError && meta.error}</p>
    </div>
  )
}

export default FormInput;