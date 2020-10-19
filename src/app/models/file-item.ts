export class FileItem {
  public archivo: File;
  public nombreArchivo: string;
  public type: string;
  public size: number;
  public lastModified: number;
  public url: string;
  public estaSubiendo: boolean;
  public progreso: number;

  constructor(archivo: File) {
    this.archivo = archivo;
    this.nombreArchivo = archivo.name;
    this.type = archivo.type;
    this.size = archivo.size;
    this.lastModified = archivo.lastModified;

    this.estaSubiendo = false;
    this.progreso = 0;
  }
}
