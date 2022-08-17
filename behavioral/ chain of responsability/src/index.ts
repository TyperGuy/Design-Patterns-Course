import Provider from './servers/Provider';
import CheckUserMiddleware from './middlewares/CheckUserMiddleware';
import CheckPermissionMiddleware from './middlewares/CheckPermissionMiddleware';
import Database from './servers/DataBase';

const provider = new Provider();

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
provider.setMiddleware(middleware);
provider.login(Database[0].email,Database[0].password)