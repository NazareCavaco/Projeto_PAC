# Brain Teaser

![Logótipo Brain Teaser](logo.png)

Projeto académico de uma aplicação de quizzes, acompanhado por um website de divulgação. O **Brain Teaser** tem como objetivo desafiar conhecimentos através de perguntas sobre diferentes temas, permitir consultar pontuações e incentivar os utilizadores a sugerir novas perguntas.

Desenvolvido no âmbito da unidade curricular de **Programação de Aplicação do Lado do Cliente**, do curso de **Tecnologias Web e Dispositivos Móveis**, na Escola Superior de Tecnologia e Gestão de Beja, em junho de 2024.

## Conteúdo deste repositório

Esta versão reúne:

- Código do website de divulgação, em HTML, CSS e JavaScript.
- Imagens da interface da aplicação móvel.
- Relatório do projeto em PDF.
- Apresentação em PowerPoint.
- Vídeo de demonstração em formato MKV.
- Um ficheiro de texto com uma ligação externa para materiais do projeto.

**O código-fonte Android, os ficheiros Gradle e um APK não estão incluídos nesta versão.** As informações sobre a aplicação móvel apresentadas abaixo baseiam-se no relatório. O website pode ser aberto diretamente com os ficheiros disponíveis.

## Aplicação móvel

Segundo a documentação do projeto, a aplicação foi desenvolvida em Kotlin, com Android Studio, Jetpack Compose e Room Database.

As funcionalidades descritas incluem:

- Introdução do nome do jogador.
- Consulta das instruções de jogo.
- Escolha de temas e participação em quizzes.
- Seleção de respostas e apresentação dos resultados.
- Consulta de pontuações.
- Sugestão de novas perguntas.

O relatório descreve também a organização da persistência de dados em entidades, DAOs e uma classe de base de dados, bem como a utilização de um repositório para acesso às perguntas.

## Website de divulgação

O website apresenta o projeto através de cinco páginas:

| Página | Conteúdo |
| --- | --- |
| `index.html` | Logótipo e apresentação inicial, com o botão «Jogar Agora!!». |
| `about.html` | Apresentação do projeto e da equipa. |
| `galeria.html` | Capturas de ecrã da aplicação: início, escolha do tema e sugestão de perguntas. |
| `contactos.html` | Formulário com nome, email e mensagem, com campos obrigatórios. |
| `links.html` | Ligações para recursos do Bootstrap. |

A interface utiliza uma barra de navegação recolhível, cartões, grelha de colunas e componentes do Bootstrap.

## Tecnologias e ferramentas

| Componente | Tecnologias |
| --- | --- |
| Website incluído | HTML5, CSS3, JavaScript e Bootstrap 5.3.3. |
| Aplicação móvel descrita no relatório | Kotlin, Android Studio, Jetpack Compose e Room Database. |
| Prototipagem descrita no relatório | Adobe XD. |
| Colaboração | GitHub. |

## Como executar o website

1. Descarrega e extrai o ZIP do repositório.
2. Abre a pasta `Website_PAC_25911_25251`.
3. Abre o ficheiro `index.html` num navegador.

Não é necessário instalar pacotes, compilar código ou configurar uma base de dados para consultar o website.

**É necessária uma ligação à Internet para carregar o Bootstrap a partir do CDN usado nas páginas.** Existe uma cópia local em `bootstrap-5.3.3-dist/`, mas os ficheiros HTML atuais não a utilizam. Para funcionamento offline, é necessário alterar as referências de CSS e JavaScript para essa pasta.

### Servidor local opcional

Com Python 3 instalado, abre um terminal na pasta `Website_PAC_25911_25251` e executa:

```bash
python -m http.server 8000
```

Se o teu sistema utilizar o comando `python3`, substitui `python` por `python3`.

Abre [http://localhost:8000](http://localhost:8000) no navegador. Para parar o servidor, utiliza `Ctrl + C`.

### Aplicação Android

Para compilar ou executar a aplicação móvel no Android Studio, é necessário obter o projeto Android completo. Esta versão do repositório permite consultar a documentação, as imagens e o vídeo de demonstração, mas não permite compilar a aplicação.

## Organização dos ficheiros

| Caminho | Descrição |
| --- | --- |
| `Website_PAC_25911_25251/` | Código e recursos do website. |
| `Website_PAC_25911_25251/imagens/` | Logótipo e capturas de ecrã. |
| `Website_PAC_25911_25251/style.css` | Estilos personalizados. |
| `Website_PAC_25911_25251/validation.js` | Validação dos campos do formulário. |
| `Website_PAC_25911_25251/script.js` | Código de interação que necessita de revisão da integração com as páginas. |
| `Website_PAC_25911_25251/bootstrap-5.3.3-dist/` | Cópia local do Bootstrap. |
| `Relatorio_PPTX_25911_25251/` | Relatório PDF e apresentação PowerPoint. |
| `ScreenCast (1).mkv` | Vídeo de demonstração. |
| `Projeto_pac_25911_25251.txt` | Ligação externa para materiais do projeto. |

## Estado atual

- O botão **«Jogar Agora!!»** apresenta um popover com a mensagem «Download iniciado!», mas não contém uma ligação de transferência nem inicia a aplicação.
- O formulário inclui validação no navegador, mas não tem um serviço de envio ou armazenamento de mensagens configurado.
- Na galeria, `script.js` é carregado no cabeçalho e tenta aceder a `contactForm`, que não existe nessa página. Essa operação causa um erro e interrompe a execução do script. As imagens da galeria estão também definidas diretamente no HTML.
- O mesmo script contém referências a elementos ausentes e uma lógica de deslocamento para secções que não corresponde às ligações entre páginas. A integração deve ser revista antes de ativar essas interações.

## Possíveis melhorias

- Disponibilizar o projeto Android completo e instruções de compilação.
- Associar o botão inicial a uma versão descarregável da aplicação.
- Implementar o envio de mensagens do formulário.
- Separar o JavaScript por funcionalidade e verificar a existência dos elementos antes de lhes aceder.
- Melhorar os textos alternativos das imagens e rever a acessibilidade da navegação.
- Documentar versões e adicionar testes às funcionalidades da aplicação.

## Autores

- **Afonso Pamplona**
- **Nazaré Cavaco**

Projeto desenvolvido em equipa no âmbito académico.
