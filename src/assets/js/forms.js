console.log("load forms.js");

export const func = {
    catchCommonErrors: (error, messages) => {
        console.log("entro catch interno si entro");
        console.log(error);
        if(!error.response){
            messages.errorMessageText = `Error de red. No hay conexión con el servidor. 
                                    Consulte a la administradora`
        }else{
            switch ( error.response.status ) {
                case 422:
                    console.log("error.response")
                    console.log(error.response)
                    messages.errorMessageText = error.response.data.message
                    messages.errorsArray = Object.values(error.response.data.errors)
                    break
            }
        }
    }
}