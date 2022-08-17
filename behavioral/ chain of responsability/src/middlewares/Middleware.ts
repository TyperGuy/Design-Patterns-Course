export default abstract class Middleware {
  public next : Middleware |null = null;
  public linkWith (next : Middleware):Middleware{
    this.next = next;
    return this.next;
  }
  public abstract check(email : string,password : string):boolean;
  protected checkNext(email : string,password : string):boolean{
    if(this.next===null)
      return true
    return this.next.check(email,password)
  }
}