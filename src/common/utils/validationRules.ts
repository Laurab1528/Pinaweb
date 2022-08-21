import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (values.name==="") {
    errors.name = "Es requerido un nombre valido, no dejar en blanco";
  }
  if (values.email==="") {
    errors.email = "Es requerido un email valido, no dejar en blanco";
  } /*else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Es requerido un email valido, no usar caracteres no especificados";
  }*/
  if (values.message==="") {
    errors.message = "Es requerido un mensaje valido, no dejar en blanco";
  }
  return errors;
}
