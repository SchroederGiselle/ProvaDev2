import { Categoria } from './Categoria';

export interface Tarefa {
    TarefaId: number;
    Titulo: string;
    Descricao: string;
    categoriaId: number;
    CriadoEm: string;
    Categoria: string;
    CategoriaId: string;
    Status: string;

}
