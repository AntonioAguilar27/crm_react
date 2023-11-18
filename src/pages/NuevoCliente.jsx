import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../data/Clientes";

export  async function action({request}){
  
   const formData = await request.formData();
   const datos = Object.fromEntries(formData)
   const email = formData.get('email')

  // validacion
  const errores = [];
  if(Object.values (datos).includes('')) {
    errores.push('todos los campos son obligatorios') 
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)){
    errores.push('el amail no es valido')
  }
  // Retornar datos si hay errores 
  if(Object.keys(errores).length){
    return errores;
  }
  await agregarCliente(datos);
  return redirect('/')
}

function NuevoCliente() {

    const errores = useActionData();
    const navigate = useNavigate();

    console.log(errores);

  return (
    <>
         <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
         <p className="mt-3">LLena todos los campos!</p>

         <div className='flex justify-end'>
            <button 
            className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
            onClick={() => navigate('/')}
            >Volver
            </button>
         </div>

         <div className="bg-white shadow rounded-xl md:w3/4 mx-auto px-5 py-10 mt-20">
            {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error> )}
            <Form
                method='post'
            >
                <Formulario/>

                <input 
                    type="submit"
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                    value="Registrar cliente"
                />
            </Form>
        </div>
    </>
  )
}

export default NuevoCliente