import { Produto, ProdutoPromocional } from '../models/produto.model';

const PRODUTOS_BASE: Produto[] = [
  { id: 1, nome: 'Teclado mecânico', preco: 249.9, quantidade: 12 },
  { id: 2, nome: 'Mouse sem fio', preco: 89.5, quantidade: 3 },
  { id: 3, nome: 'Monitor 24 polegadas', preco: 899, quantidade: 0 },
  { id: 4, nome: 'Headset gamer', preco: 219.99, quantidade: 5 },
  { id: 5, nome: 'Webcam Full HD', preco: 175, quantidade: 8 },
  { id: 6, nome: 'Cadeira ergonômica', preco: 1299.9, quantidade: 2 },
];

/** Exercícios 8 e 9: lista de produtos (cópia nova a cada chamada). */
export function criarProdutos(): Produto[] {
  return PRODUTOS_BASE.map((produto) => ({ ...produto }));
}

/** Exercícios 10, 11 e 14: os mesmos produtos, agora com a propriedade promocao. */
export function criarProdutosPromocionais(): ProdutoPromocional[] {
  return PRODUTOS_BASE.map((produto, indice) => ({ ...produto, promocao: indice % 3 === 1 }));
}
