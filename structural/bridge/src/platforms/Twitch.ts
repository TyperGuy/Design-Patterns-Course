import  IPLatform  from "./IPlatform";

export default class Twitch implements IPLatform{

  constructor(){
    this.configureRMTP();
    console.log("Twitch : Transmissão Iniciada")
  }
  configureRMTP(): void {
    this.authToken();
    console.log("Twitch : Configurando Broadcast")
  }
  authToken(): void {
    console.log("Autorizando Aplicação")
  }

}