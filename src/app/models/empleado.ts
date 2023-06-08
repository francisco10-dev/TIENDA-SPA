export class Empleado{
    constructor(
        public idEmpleado:number,
        public cedula:string,
        public nombre:string,
        public fechaNac:Date,
        public fechaIngreso:Date,
        public email:string,
        public tipoEmpleado:string
    ){}
}