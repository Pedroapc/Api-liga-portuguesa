API LIGA PORTUGUESA

Instruções de utilização: 

 - Utilizar o comando npm install na consola do Visual Studio Code
 - Utilizar o comando node server.js na consola do Visual Studio Code
 - Aceder ao website http://localhost:8080/

Restrições:

 - Um utilizador sem login efetuado consegue apenas ver as imagens do carrossel
 - Um utilizador com login efetuado tem acesso a todas as abas

 AVISO: Se o login for efetuado e de seguida se fizer refresh à página a sessão irá aparecer como terminada pois volta a aparecer apenas o botão de Login e Registar. No entanto ainda será possível aceder aos conteúdos todos. Isto acontece porque a sessão não foi realmente terminada como podemos verificar no "Local Storage" na Aba "Security" das Devtools do browser. Para terminar a sessão corretamente é necessário fazer logout utilizando o botão programado para o efeito.

Registo de utilizador:

 - Após inserir os dados de registo e pressionar submeter irá ser enviado um link para a consola do Visual Studio Code.
 - Pressionar ctrl+LMB para aceder ao link. (Terá este aspeto: https://ethereal.email/message/YbXri.Yh9UxpLAUCYbXrjBd0XQjLzMzXAAAAAaMAVovXQgJT0GVV7VRXV8w)
 - Copiar o link que está a seguir à mensagem: "Link to activate:". (Terá este aspeto: http://localhost:8080/api/auth/confirm/eyJhbGciOiJIUzI1NiJ9.eHB0b0BnbWFpbC5jb20.avtEpwOEvAHILL3LkgHUFmtcGZtkF7COstA3tE98coM)
 - Aceder no browser ao link copiado no passo anterior.
 - Na Janela do browser deverá aparecer que o utilizador foi registado e pode então proceder ao login na página http://localhost:8080/

Acessibilidade:

 - Os botões não funcionam todos em simultâneo, o que quer dizer que só se pode aceder às noticias de um clube especifico de cada vez ou à classificação.
 - Todos os dados carregados pelos botões irão aparecer por baixo da imagem do carrossel.
 - Cada notícia tem um botão que leva à notícia inteira no seu site original.
 - A classificação tem na primeira linha um índice dos valores que cada coluna tem nas linhas seguintes sendo equivalentes ao seguinte: 
        Temporada Regular - Posição e Nome da Equipa
        P - Pontos
        J - Jogos
        V - Vitórias
        E - Empates
        D - Derrotas
        GM - Golos Marcados
        GS - Golos Sofridos
        DG - Diferença de Golos
        Forma - Resultados dos Últimos 10 Jogos

    Por exemplo:    Temporada Regular   P   J   V   E   D   GM  GS DG   Forma
    <br/>
                    1 Sporting CP       38  14  12  2   0   24  5  19   E V V V V V V V V V

Utilizador Previamente Criado:
    Poderá ser útil caso apareça algum problema no registo do utilizador os dados de um utilizador para poder efetuar o login.
    Assim, estes são os dados do único utilizador criado até ao momento.
        E-mail: xpto@gmail.com
        Password: xpto
