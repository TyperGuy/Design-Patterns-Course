import Middleware from "../middlewares/Middleware";
import chalk from "chalk";

export default class Provider{
  private middleware : Middleware;
  public setMiddleware(middleware : Middleware): void{
    this.middleware = middleware;
  }
  login(email : string, password : string):boolean{
    if(this.middleware.check(email,password)){
      console.log(chalk.green("Usuário autorizado"))
      return true;
    }
    return false
  }
}