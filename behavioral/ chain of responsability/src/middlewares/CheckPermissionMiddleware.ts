import chalk  from "chalk";
import Middleware from "./Middleware";
import Database  from "../servers/Database";
import PermissionType from "../servers/PermissionType";
export default class CheckPermissionMiddleware extends Middleware{
  public check(email: string, password: string): boolean {
    const users = Database.filter(users => users.email === email);
    if(!users.length){
      console.log(chalk.red("Email invalido"));
      return false;
    }
    if(users[0].permission===PermissionType.ADMIN){
      console.log(chalk.green("Seja bem vindo Administrador"))
      return true;
    }

    console.log(chalk.green("Seja bem vindo User Fulano"))

    return this.checkNext(email,password);
  }

}