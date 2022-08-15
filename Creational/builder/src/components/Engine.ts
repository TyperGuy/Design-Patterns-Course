export default class Engine{
  constructor(private _power : number){
  }
  get power() : number{ return this._power;}
  set power( power: number) { this._power = power;}

}