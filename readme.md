# Website Institucional: Pastoral da Caridade (ACD) 

# https://www.youtube.com/watch?v=mtoiJJHQgKo

> 🎓 **Projeto de Extensão em Criação de Sistemas**
> * **Instituição:** Universidade Nove de Julho
> * **Curso:** Tecnólogo em Análise e Desenvolvimento de Sistemas
> * **Disciplina:** Projeto de Extensão em Criação de Sistemas
> * **Professor(a) Orientador(a):** Daniel Ferreira de Barros Junior
> * **Ano / Semestre:** 2026 / 1

---

## 👥 Desenvolvedores e Atribuições

* **Breno Sodré Bertunes** — Section Apadrinhamento, Documentação
* **Leonardo Silva Melo** — Section Hero, Sobre Nós
* **Tiago Oliveira Melo** — Header, Section Momentos
* **Carlos Eduardo Menezes Restrepo** — Gravação do Vídeo, Section Sobre nós
* **Matheus Diniz Carvalho Silva** — Section Momentos
* **Manuela Carolina Felicio** — Documentação, protótipo no Figma
* **Gabriel Domingos Bessa Bezerra** — Banner
* **Renan Oliveira Nascimento** — Section Doações


---

## 📝 1. Introdução

Essa documentação apresenta as especificações técnicas e funcionais do website institucional desenvolvido para a Pastoral da Caridade (ACD), sediada na Igreja Verbo Encarnado, no Bairro Guacuri, São Paulo - SP.

A Pastoral da Caridade nasceu em 2001 a partir do sonho de amor ao próximo do jovem seminarista Alfeu Castilho Baptista. Após o seu falecimento precoce em dezembro do mesmo ano, sua mãe, Marina, assumiu o compromisso de manter vivo o seu legado. Atualmente, com mais de 23 anos de história, a ONG atende mais de 100 famílias e 300 crianças, promovendo ações mensais de segurança alimentar, apadrinhamento e eventos comunitários.

O site foi concebido como uma plataforma digital informativa e de engajamento para centralizar a captação de doações, divulgar os resultados das ações comunitárias e facilitar o processo de apadrinhamento de crianças em situação de vulnerabilidade.

---

## 🎯 2. Objetivos do Projeto

* **Dar visibilidade ao legado e história:** Apresentar a trajetória da instituição iniciada por Alfeu Castilho Baptista.
* **Facilitar a captação de recursos:** Organizar de forma clara quais itens de necessidades básicas são aceitos e onde entregá-los.
* **Estimular o Apadrinhamento:** Criar uma jornada simples, intuitiva e direta (via WhatsApp) para que novos padrinhos possam apoiar o desenvolvimento de crianças da comunidade.
* **Prestar contas à comunidade:** Exibir com transparência as fotos e relatos dos momentos promovidos pela Pastoral através de uma galeria interativa.

---

## 🏗️ 3. Arquitetura e Estrutura de Arquivos

O projeto adota uma arquitetura limpa de front-end, dividida em três arquivos principais:

* `index.html`: Responsável por toda a estrutura semântica do site, contendo seções bem definidas para fácil indexação e acessibilidade.
* `style.css`: Representa a identidade visual, onde há animações fluidas e as regras de responsividade para dispositivos móveis.
* `index.js`: Controla o comportamento dinâmico do menu mobile, a animação interativa de bonecos no menu de navegação e também o efeito de digitação automática (*typewriter*) na página inicial.

---

## ⚡ 4. Funcionalidades do Site

### 4.1. Cabeçalho Dinâmico e Navegação
* **Menu Mobile:** Em telas menores (até 768px), o menu tradicional se transforma em um menu interativo acionado pelo ícone das três barras, otimizando o espaço da tela.
* **Animação de Bonecos Interativos:** Ao passar o mouse sobre os itens do menu no computador (*desktop*), pequenas figuras humanas em formato SVG surgem nas laterais do texto e levantam os braços, simbolizando a união e a comunidade.

### 4.2. Seção Hero (Página Inicial)
* **Efeito Typewriter:** O título principal intercala dinamicamente as palavras "Solidariedade", "Fé" e "Compaixão" simulando uma máquina de escrever.
* **Chamadas para Ação (CTA):** Botões destacados direcionam o usuário instantaneamente para "Quero ajudar" (Sobre Nós) ou "Conheça o nosso trabalho" (Doações).

### 4.3. Seção Sobre Nós e Linha do Tempo
* **Histórico Narrativo:** Apresentação da fundação da Pastoral em formato de cartões visuais (*cards*).
* **Painel Estatístico:** Exibição rápida de metas alcançadas (Ex: 100+ famílias atendidas, 300+ crianças beneficiadas, 23+ anos de história).
* **Timeline Interativa:** Linha do tempo vertical que se adapta para o modelo horizontal/linear no celular, contando os marcos de 2001 até os dias de hoje.

### 4.4. Módulo de Apadrinhamento
* **Guia de Passos:** Explicação didática de 4 etapas para se tornar um padrinho.
* **Lista de Benefícios:** Alinhamento transparente sobre o que o padrinho recebe (relatórios, fotos, cartas).
* **Integração com WhatsApp:** Botão direto que direciona o usuário para o suporte da Pastoral via API do WhatsApp, criando um canal de atendimento humanizado e rápido.

### 4.5. Central de Doações
* **Filtro de Itens Aceitos:** Lista detalhada de alimentos, produtos de higiene e limpeza necessários.
* **Pontos de Coleta:** Quadro informativo com horários e endereços da Igreja Verbo Encarnado e do Salão Paroquial.

### 4.6. Galeria "Nossos Momentos"
* **Grid de Imagens Responsivo:** Exibição de fotos reais com descrições detalhadas em formato de *cards* que se expandem sutilmente ao passar o mouse, reforçando a conexão emocional com o usuário.

---

## 🛠️ 5. Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **CSS3:** Estilização baseada em layouts modernos com Flexbox e CSS Grid, variáveis de transição (`cubic-bezier`) e animações customizadas (`@keyframes`).
* **JavaScript (Vanilla JS):** Lógica pura para manipulação do DOM, controle de opacidade, translações CSS e uso de temporizadores como `setTimeout` e `clearTimeout`.
* **FontAwesome Kits & Tabler Icons:** Bibliotecas externas utilizadas para renderização de ícones vetoriais modernos e leves.
* **Google Fonts / Fontes do Sistema:** Uso prioritário da família Arial e Segoe UI para garantir carregamento estável e excelente legibilidade.

---

## 📱 6. Responsividade e Design System

O projeto foi inteiramente desenhado sob os conceitos de design responsivo. A experiência do usuário permanece intacta tanto em computadores de alta resolução quanto em smartphones através de dois *breakpoints* principais:

* `@media (max-width: 900px)`: Ajusta o layout de duas colunas da seção "Sobre Nós" para uma única coluna e também reduz o grid de estatísticas.
* `@media (max-width: 768px)`: Modifica a linha do tempo para alinhamento à esquerda, oculta o menu horizontal em favor do menu hambúrguer e redimensiona os títulos principais para melhor leitura em telas mobile.

---

## 📋 7. Requisitos do Sistema

### 7.1. Requisitos Funcionais

| ID | Descrição do Requisito |
| :---: | :--- |
| **RF01** | Apresentar informações institucionais da Pastoral da Caridade. |
| **RF02** | Exibir a história e trajetória da instituição. |
| **RF03** | Permitir contato via WhatsApp institucional. |
| **RF04** | Exibir informações sobre doações e coleta. |
| **RF05** | Apresentar seção de apadrinhamento com orientações. |
| **RF06** | Disponibilizar galeria de eventos comunitários.|
| **RF07** | Possuir menu de navegação interativo. |
| **RF08** | Adaptar layout para dispositivos móveis automaticamente. |
| **RF09** | Exibir indicadores estatísticos das ações da ONG. |
| **RF10** | Apresentar animações e elementos visuais interativos. |

### 7.2. Requisitos Não Funcionais

| ID | Descrição do Requisito |
| :---: | :--- |
| **RNF01** | Responsividade para diferentes telas. |
| **RNF02** | Carregamento otimizado das páginas. |
| **RNF03** | Compatibilidade com navegadores modernos. |
| **RNF04** | Uso de semântica HTML5. |
| **RNF05** | Interface intuitiva e fácil navegação. |
| **RNF06** | Consistência visual em todo o sistema. |
| **RNF07** | Animações leves que não afetam o desempenho. |
| **RNF08** | Legibilidade adequada em mobile e desktop. |

---

## 🔄 8. Histórico de Desenvolvimento (Versões)

| Versão | Descrição do Incremento |
| :---: | :--- |
| **v0.1** | Estruturação da primeira parte essencial do projeto. |
| **v0.2** | Implementação e estilização do novo cabeçalho dinâmico. |
| **v0.3** | Criação e estilização da Section Hero principal. |
| **v0.4** | Desenvolvimento completo da página / seção de Doações. |
| **v0.5** | Inclusão da seção "Sobre Nós". |
| **v0.6** | Ajustes finos e finalização da área Hero.] |
| **v0.7** | Implementação da galeria de memórias comunitárias e refinamento de doações. |
| **v0.8** | Integração das seções faltantes (Apadrinhamento, Benefícios e Rodapé Institucional). |
| **v0.9** | Número do Whatsapp incrementado na seção de Apadrinhamento. |
| **v1.0** | Adaptação do site para outros dispositivos. |

---

## 🏁 9. Conclusão

O desenvolvimento do Website teve êxito de alinhar a tecnologia à uma causa com impacto social. Ao transpor a história de Alfeu Castilho para um meio digital, podemos concentrar as principais ideias de solidariedade da ONG em um Website dinâmico.

Nosso Front-End se mostrou capaz de entregar uma experiência de usuário (UX) completa, ponto indicado pelo efeito *typewriter* na tela inicial, assim como a animação dos bonecos interativos em formato SVG. O Website vai além de um portfólio visual, servindo também como um facilitador e uma porta de entrada para processos como o apadrinhamento e a captação de recursos.

A escolha das cores do Website se baseia na medalha de São Bento, e representa otimismo, confiança e paixão.

O histórico de desenvolvimento do Website demonstra o processo gradual das implementações feitas de forma colaborativa entre os membros do grupo, tendo cada membro sua respectiva relevância para a versão final. Juntos, conseguimos transmitir um legado vivo para o meio digital e perpetuar uma causa que muda vidas.




7. Histórico de Desenvolvimento (Versões)

Versão
Descrição do Incremento
v0.1
Estruturação da primeira parte essencial do projeto.
v0.2
Implementação e estilização do novo cabeçalho dinâmico.
v0.3
Criação e estilização da Section Hero principal.
v0.4
Desenvolvimento completo da página / seção de Doações.
v0.5
Inclusão da seção "Sobre Nós".
v0.6
Ajustes finos e finalização da área Hero.
v0.7
Implementação da galeria de memórias comunitárias e refinamento de doações.
v0.8
Integração das seções faltantes (Apadrinhamento, Benefícios e Rodapé Institucional).
v0.9
Número do Whatsapp incrementado na seção de Apadrinhamento.
v1.0
Adaptação do site para outros dispositivos.




8. Conclusão

O desenvolvimento do Website teve êxito de alinhar a tecnologia à uma causa com impacto social. Ao transpor a história de Alfeu Castilho para um meio digital, podemos concentrar as principais ideias de solidariedade da ONG em um Website dinâmico.
Nosso Front-End se mostrou capaz de entregar uma experiência de usuário (UX) completa, ponto indicado pelo efeito typewriter na tela inicial, assim como a animação dos bonecos interativos em formato SVG. O Website vai além de um portfólio visual, servindo também como um facilitador e uma porta de entrada para processos como o apadrinhamento e a captação de recursos.
A escolha das cores do Website se baseia na medalha de São Bento, e representa otimismo, confiança e paixão.
O histórico de desenvolvimento do Website demonstra o processo gradual das implementações feitas de forma colaborativa entre os membros do grupo, tendo cada membro sua respectiva relevância para a versão final. Juntos, conseguimos transmitir um legado vivo para o meio digital e perpetuar uma causa que muda vidas.
