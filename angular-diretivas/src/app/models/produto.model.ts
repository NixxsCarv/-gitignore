/** Exercício 8: campos básicos do produto. */
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

/** Exercício 10: o produto passa a ter a propriedade booleana promocao. */
export interface ProdutoPromocional extends Produto {
  promocao: boolean;
}
