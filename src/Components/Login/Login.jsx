import React from "react";
import { useForm } from "react-hook-form";
import styles from './Login.module.scss'

const Login = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors , isValid },
  } = useForm({
      mode:"onBlur"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <div className={styles.wrapper}>
        <div>
      <h1 className={styles.formHeader}>React Hook Form</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h4>First Name:</h4>
          
          <input {...register("firstName", { 
              required: 'Required input filed', 
              minLength:{
                  value:3,
                  message:'min 3 simbols'
              }
              })} />
            
        </label>
      
<div className={styles.error}>
    {errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}
</div>

<label>
          <h4>Last Name:</h4>
          
          <input {...register("lastName", { 
              required: 'Required input filed', 
              minLength:{
                  value:3,
                  message:'min 3 simbols'
              }
              })} />
        
        </label>

<div className={styles.error}>
    {errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}
</div>
<label>
          
          <h4>Email:</h4>
          <input {...register("email", { 
              required: 'Required input filed', 
              minLength:{
                  value:'@',
                  message:'Required input filed :@:'
              }
              })} />
              
        </label>
<div className={styles.error}>
    {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
</div>
        <input type="Submit" disabled={isValid} className={styles.submit}/>
      </form>
      </div>
    </div>
  );
};

export default Login;
