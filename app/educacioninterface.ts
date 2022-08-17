export interface educacioninterface 
    {
      ideducacion:number;
      institucion:string;
      titulo:string;
      logo_institucion:string;
      completado:number; 
      fecha_finalizacion_titulo:Date;
      orden_titulo:number;
      usuarioed: {
        idusuario: number,
        nombre: string
        }

    }