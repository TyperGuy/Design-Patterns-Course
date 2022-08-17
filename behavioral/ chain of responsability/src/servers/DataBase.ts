import PermissionType from "./PermissionType";

interface DataBaseItem{
  email: string,
  password: string,
  permission: PermissionType,
}

const DataBase: DataBaseItem[] = [
  {
    email: "ray.developper@gmail.com",
    password: "tony1234",
    permission: PermissionType.ADMIN
  },
  {
    email: "abigaela.juliana@gmail.com",
    password: "aby1234",
    permission: PermissionType.USER
  }
];

export default DataBase;