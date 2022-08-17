export interface proyectosinterface 
    {
      idproyectos:number;
      titulo_proyecto:string;
      link_proyecto:string;
      foto_proyecto:string;
      descripcion_proyecto:string;
      tecnologias:string;
      year_proyecto:number;
      orden_proyectos:number;
      usuariopr: {
        idusuario: number,
        nombre: string
        }

    }
