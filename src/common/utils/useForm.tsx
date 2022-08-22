import { useState, useEffect } from "react";
import { notification } from "antd";
import { addDoc, collection } from 'firebase/firestore';
import { db } from './database/Firebase';


export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  
  
 


  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Felicitaciones",
      description: "Su mensaje fue enviado!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    addDoc(collection(db, 'registro'), {
      ...values
    })
      .then(() => {
        setErrors(false)
        alert('Estas inscrito a la lista de espera.👍')
      })
      .catch(error => {
        alert(error.message)
        setErrors(false)
      })

    setValues({})
  };


  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
