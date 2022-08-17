import chalk from 'chalk';
import Middleware from "./Middleware";
import Database from '../servers/DataBase';

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if(email.indexOf('@')===-1) {
      console.log(chalk.red('Email invalido'));
      return false
    }
    if(!Database.filter(item => item.email === email && item.password === password).length){
      console.log(chalk.red('Email ou palavra passe errados'))
    }
    return this.checkNext(email, password);
  }
  
}