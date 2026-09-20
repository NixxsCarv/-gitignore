# Lista de Exercícios – Diretivas e controle de fluxo no Angular

Projeto Angular (v21) com a resolução dos 14 exercícios e do desafio final.
Cada exercício é um componente independente, em `src/app/exercicios/`,, e todos aparecem na mesma página, um após o outro.

| Etapa | Exercícios | Pasta |
|-------|------------|-------|
| 1 – Condições e eventos | 1 a 4 | `ex01-mensagem` … `ex04-estoque` |
| 2 – Repetições e listas | 5 a 7 | `ex05-lista-nomes` … `ex07-cores-alternadas` |
| 3 – Objetos e estilos dinâmicos | 8 a 11 | `ex08-produtos` … `ex11-disponiveis` |
| 4 – Interação e integração | 12 a 14 | `ex12-cadastro` … `ex14-sintaxe-moderna` |
| Desafio final | Painel de projetos | `desafio-projetos` |

Convenções seguidas:

- Componentes configurados com módulos (`CommonModule` e `FormsModule` no array `imports`).
- Exercícios 1 a 13 com `*ngIf`, `*ngFor`, `ngClass` e `ngStyle`; exercício 14 e desafio final com `@if`, `@else`, `@for` e `@empty`.
- Lógica no arquivo `.ts` e apresentação no `.html`. Dados em arrays, sem API.
- Cada componente é independente: tem a própria interface (quando precisa) e os próprios dados em arrays.

## Como executar no GitHub Codespaces

```bash
npm install
npm start
```

O Codespaces mostra uma notificação para abrir a porta 4200 no navegador.

## Como enviar (commit e push)

```bash
git add .
git commit -m "Resolve lista de exercícios de diretivas do Angular"
git push
```

Dica: faça um commit por etapa (por exemplo, `git commit -m "Etapa 1: exercícios 1 a 4"`) para deixar o histórico organizado.

## Observações

- Nos exercícios 6, 13, 14 e no desafio há botões extras de "Limpar" (e "Restaurar") apenas para permitir testar as mensagens de lista vazia.
- No exercício 14 foram convertidos os exercícios 2, 11 e 13. Ao final da seção há a descrição de duas diferenças entre as sintaxes.
