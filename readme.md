# Website Institucional: Pastoral da Caridade (ACD) 💻❤️

> 🎓 **Projeto de Extensão em Criação de Sistemas**[cite: 1]
> * **Instituição:** Universidade Nove de Julho[cite: 1]
> * **Curso:** Tecnólogo em Análise e Desenvolvimento de Sistemas[cite: 1]
> * **Disciplina:** Projeto de Extensão em Criação de Sistemas[cite: 1]
> * **Professor(a) Orientador(a):** Daniel Ferreira de Barros Junior[cite: 1]
> * **Ano / Semestre:** 2026 / 1[cite: 1]

---

## 👥 Desenvolvedores e Atribuições

* **Breno Sodré Bertunes** — Section Apadrinhamento, Documentação[cite: 1]
* **Leonardo Silva Melo** — Section Hero, Sobre Nós[cite: 1]
* **Tiago Oliveira Melo** — Header, Section Momentos[cite: 1]
* **Carlos Eduardo Menezes Restrepo** — Gravação do Vídeo, Section Sobre nós[cite: 1]
* **Matheus Diniz Carvalho Silva** — Section Momentos[cite: 1]
* **Manuela Carolina Felicio** — Documentação[cite: 1]
* **Gabriel Domingos Bessa Bezerra** — Banner[cite: 1]
* **Renan Oliveira Nascimento** — Section Doações[cite: 1]

---

## 📝 1. Introdução

Essa documentação apresenta as especificações técnicas e funcionais do website institucional desenvolvido para a Pastoral da Caridade (ACD), sediada na Igreja Verbo Encarnado, no Bairro Guacuri, São Paulo - SP.[cite: 1]

A Pastoral da Caridade nasceu em 2001 a partir do sonho de amor ao próximo do jovem seminarista Alfeu Castilho Baptista.[cite: 1] Após o seu falecimento precoce em dezembro do mesmo ano, sua mãe, Marina, assumiu o compromisso de manter vivo o seu legado.[cite: 1] Atualmente, com mais de 23 anos de história, a ONG atende mais de 100 famílias e 300 crianças, promovendo ações mensais de segurança alimentar, apadrinhamento e eventos comunitários.[cite: 1]

O site foi concebido como uma plataforma digital informativa e de engajamento para centralizar a captação de doações, divulgar os resultados das ações comunitárias e facilitar o processo de apadrinhamento de crianças em situação de vulnerabilidade.[cite: 1]

---

## 🎯 2. Objetivos do Projeto

* **Dar visibilidade ao legado e história:** Apresentar a trajetória da instituição iniciada por Alfeu Castilho Baptista.[cite: 1]
* **Facilitar a captação de recursos:** Organizar de forma clara quais itens de necessidades básicas são aceitos e onde entregá-los.[cite: 1]
* **Estimular o Apadrinhamento:** Criar uma jornada simples, intuitiva e direta (via WhatsApp) para que novos padrinhos possam apoiar o desenvolvimento de crianças da comunidade.[cite: 1]
* **Prestar contas à comunidade:** Exibir com transparência as fotos e relatos dos momentos promovidos pela Pastoral através de uma galeria interativa.[cite: 1]

---

## 🏗️ 3. Arquitetura e Estrutura de Arquivos

O projeto adota uma arquitetura limpa de front-end, dividida em três arquivos principais:

* `index.html`: Responsável por toda a estrutura semântica do site, contendo seções bem definidas para fácil indexação e acessibilidade.[cite: 1]
* `style.css`: Representa a identidade visual, onde há animações fluidas e as regras de responsividade para dispositivos móveis.[cite: 1]
* `index.js`: Controla o comportamento dinâmico do menu mobile, a animação interativa de bonecos no menu de navegação e também o efeito de digitação automática (*typewriter*) na página inicial.[cite: 1]

---

## ⚡ 4. Funcionalidades do Site

### 4.1. Cabeçalho Dinâmico e Navegação
* **Menu Mobile:** Em telas menores (até 768px), o menu tradicional se transforma em um menu interativo acionado pelo ícone das três barras, otimizando o espaço da tela.[cite: 1]
* **Animação de Bonecos Interativos:** Ao passar o mouse sobre os itens do menu no computador (*desktop*), pequenas figuras humanas em formato SVG surgem nas laterais do texto e levantam os braços, simbolizando a união e a comunidade.[cite: 1]

### 4.2. Seção Hero (Página Inicial)
* **Efeito Typewriter:** O título principal intercala dinamicamente as palavras "Solidariedade", "Fé" e "Compaixão" simulando uma máquina de escrever.[cite: 1]
* **Chamadas para Ação (CTA):** Botões destacados direcionam o usuário instantaneamente para "Quero ajudar" (Sobre Nós) ou "Conheça o nosso trabalho" (Doações).[cite: 1]

### 4.3. Seção Sobre Nós e Linha do Tempo
* **Histórico Narrativo:** Apresentação da fundação da Pastoral em formato de cartões visuais (*cards*).[cite: 1]
* **Painel Estatístico:** Exibição rápida de metas alcançadas (Ex: 100+ famílias atendidas, 300+ crianças beneficiadas, 23+ anos de história).[cite: 1]
* **Timeline Interativa:** Linha do tempo vertical que se adapta para o modelo horizontal/linear no celular, contando os marcos de 2001 até os dias de hoje.[cite: 1]

### 4.4. Módulo de Apadrinhamento
* **Guia de Passos:** Explicação didática de 4 etapas para se tornar um padrinho.[cite: 1]
* **Lista de Benefícios:** Alinhamento transparente sobre o que o padrinho recebe (relatórios, fotos, cartas).[cite: 1]
* **Integração com WhatsApp:** Botão direto que direciona o usuário para o suporte da Pastoral via API do WhatsApp, criando um canal de atendimento humanizado e rápido.[cite: 1]

### 4.5. Central de Doações
* **Filtro de Itens Aceitos:** Lista detalhada de alimentos, produtos de higiene e limpeza necessários.[cite: 1]
* **Pontos de Coleta:** Quadro informativo com horários e endereços da Igreja Verbo Encarnado e do Salão Paroquial.[cite: 1]

### 4.6. Galeria "Nossos Momentos"
* **Grid de Imagens Responsivo:** Exibição de fotos reais com descrições detalhadas em formato de *cards* que se expandem sutilmente ao passar o mouse, reforçando a conexão emocional com o usuário.[cite: 1]

---

## 🛠️ 5. Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).[cite: 1]
* **CSS3:** Estilização baseada em layouts modernos com Flexbox e CSS Grid, variáveis de transição (`cubic-bezier`) e animações customizadas (`@keyframes`).[cite: 1]
* **JavaScript (Vanilla JS):** Lógica pura para manipulação do DOM, controle de opacidade, translações CSS e uso de temporizadores como `setTimeout` e `clearTimeout`.[cite: 1]
* **FontAwesome Kits & Tabler Icons:** Bibliotecas externas utilizadas para renderização de ícones vetoriais modernos e leves.[cite: 1]
* **Google Fonts / Fontes do Sistema:** Uso prioritário da família Arial e Segoe UI para garantir carregamento estável e excelente legibilidade.[cite: 1]

---

## 📱 6. Responsividade e Design System

O projeto foi inteiramente desenhado sob os conceitos de design responsivo.[cite: 1] A experiência do usuário permanece intacta tanto em computadores de alta resolução quanto em smartphones através de dois *breakpoints* principais:

* `@media (max-width: 900px)`: Ajusta o layout de duas colunas da seção "Sobre Nós" para uma única coluna e também reduz o grid de estatísticas.[cite: 1]
* `@media (max-width: 768px)`: Modifica a linha do tempo para alinhamento à esquerda, oculta o menu horizontal em favor do menu hambúrguer e redimensiona os títulos principais para melhor leitura em telas mobile.[cite: 1]

---

## 📋 7. Requisitos do Sistema

### 7.1. Requisitos Funcionais

| ID | Descrição do Requisito |
| :---: | :--- |
| **RF01** | Apresentar informações institucionais da Pastoral da Caridade.[cite: 1] |
| **RF02** | Exibir a história e trajetória da instituição.[cite: 1] |
| **RF03** | Permitir contato via WhatsApp institucional.[cite: 1] |
| **RF04** | Exibir informações sobre doações e coleta.[cite: 1] |
| **RF05** | Apresentar seção de apadrinhamento com orientações.[cite: 1] |
| **RF06** | Disponibilizar galeria de eventos comunitários.[cite: 1] |
| **RF07** | Possuir menu de navegação interativo.[cite: 1] |
| **RF08** | Adaptar layout para dispositivos móveis automaticamente.[cite: 1] |
| **RF09** | Exibir indicadores estatísticos das ações da ONG.[cite: 1] |
| **RF10** | Apresentar animações e elementos visuais interativos.[cite: 1] |

### 7.2. Requisitos Não Funcionais

| ID | Descrição do Requisito |
| :---: | :--- |
| **RNF01** | Responsividade para diferentes telas.[cite: 1] |
| **RNF02** | Carregamento otimizado das páginas.[cite: 1] |
| **RNF03** | Compatibilidade com navegadores modernos.[cite: 1] |
| **RNF04** | Uso de semântica HTML5.[cite: 1] |
| **RNF05** | Interface intuitiva e fácil navegação.[cite: 1] |
| **RNF06** | Consistência visual em todo o sistema.[cite: 1] |
| **RNF07** | Animações leves que não afetam o desempenho.[cite: 1] |
| **RNF08** | Legibilidade adequada em mobile e desktop.[cite: 1] |

---

## 🔄 8. Histórico de Desenvolvimento (Versões)

| Versão | Descrição do Incremento |
| :---: | :--- |
| **v0.1** | Estruturação da primeira parte essencial do projeto.[cite: 1] |
| **v0.2** | Implementação e estilização do novo cabeçalho dinâmico.[cite: 1] |
| **v0.3** | Criação e estilização da Section Hero principal.[cite: 1] |
| **v0.4** | Desenvolvimento completo da página / seção de Doações.[cite: 1] |
| **v0.5** | Inclusão da seção "Sobre Nós".[cite: 1] |
| **v0.6** | Ajustes finos e finalização da área Hero.[cite: 1] |
| **v0.7** | Implementação da galeria de memórias comunitárias e refinamento de doações.[cite: 1] |
| **v0.8** | Integração das seções faltantes (Apadrinhamento, Benefícios e Rodapé Institucional).[cite: 1] |
| **v0.9** | Número do Whatsapp incrementado na seção de Apadrinhamento.[cite: 1] |
| **v1.0** | Adaptação do site para outros dispositivos.[cite: 1] |

---

## 🏁 9. Conclusão

O desenvolvimento do Website teve êxito de alinhar a tecnologia à uma causa com impacto social.[cite: 1] Ao transpor a história de Alfeu Castilho para um meio digital, podemos concentrar as principais ideias de solidariedade da ONG em um Website dinâmico.[cite: 1]

Nosso Front-End se mostrou capaz de entregar uma experiência de usuário (UX) completa, ponto indicado pelo efeito *typewriter* na tela inicial, assim como a animação dos bonecos interativos em formato SVG.[cite: 1] O Website vai além de um portfólio visual, servindo também como um facilitador e uma porta de entrada para processos como o apadrinhamento e a captação de recursos.[cite: 1]

A escolha das cores do Website se baseia na medalha de São Bento, e representa otimismo, confiança e paixão.[cite: 1]

O histórico de desenvolvimento do Website demonstra o processo gradual das implementações feitas de forma colaborativa entre os membros do grupo, tendo cada membro sua respectiva relevância para a versão final.[cite: 1] Juntos, conseguimos transmitir um legado vivo para o meio digital e perpetuar uma causa que muda vidas.[cite: 1]




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
