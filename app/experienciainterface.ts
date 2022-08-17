export interface experienciainterface 
    {
      idexperiencia:number;
      titulo_puesto:string;
      empresa:string;
      logo_empresa:string;
      descripcion_tareas:string;
      year_inicio:number;
      year_cierre:number;
      orden_experiencia:number;
      usuarioex: {
        idusuario: number,
        nombre: string
        }

    }

  