export class Todo {
    id: number;
    texto: string;
    completado: boolean;
    constructor(texto: string) {
        this.texto = texto;
        this.id = Math.ceil(Math.random() * 1000);
        this.completado = false;
    }
}
