export class Usuario {
  constructor(
    public id?: number,
    public nombre?: string,
    public apellido?: string,
    public correo?: string,
    public contrasena?: string,
    public tipo?: string
  ) {}
}
