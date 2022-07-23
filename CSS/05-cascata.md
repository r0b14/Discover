# A cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo. -> programação estruturada

É levado em consideração 3 fatores:
1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline ( dentro do html ) > tag style ( dentro do html ) > tag link (vem de fora)

### Especificidade

É um calculo matemático, onde, cada tipo de selector e origem do estilo, possuem valores a serem considerados.