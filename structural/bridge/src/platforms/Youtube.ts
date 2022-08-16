import IPLatform  from "./IPlatform";

export default class Youtube implements IPLatform{

  constructor(){
    this.configureRMTP();
    console.log("Youtube : Transmissão Iniciada")
  }
  configureRMTP(): void {
    this.authToken();
    console.log("Youtube : Configurando Broadcast")
  }
  authToken(): void {
    console.log("Autorizando Aplicação")
  }

}