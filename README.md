# Estrutura do Projeto

    Criei uma estrutura onde o index.tsx (arquivo raiz), já é o login do sistema, criei uma pasta separada para conter as outras duas paginas.
    Dentro dessa pasta consta o arquivo _layout.tsx responsável por ordenar as páginas em Stack (pilha)
    Após feito o login, usando o router redirecionei para a página de listagem onde não é possível retornar para a tela de login sem fazer o "logout"

# Componentes

    Criei Componentes separados onde cada um é responsável por executar apenas uma função, onde é passado as informações por props, um bom exemplo é :
    Na tela de login foi utilizado o componente "Image Button" que recebe como props o "source" que diz ao componente onde fica localizada a imagem dele. Este componente também é responsável por efetuar o login na aplicação, por isso também recebe uma função para executar

    Esta função apenas verifica se o usuário é "fulano" e a senha é "123", por boa pratica foi utilizada a prop "secureTextEntry" no input de senha para não fica visível.

# Componentes 2 (Listas):

    Foi criado um helper para converter os dados brutos para dados formatados com Secções, para ser usado em conjunto com o SectionList.
    O Helper percorre todos os dados e verifica o país destino e origem para ser os títulos e todos os passageiros que estiveram em um ou outro. (pode ser que alguns países só existam no destino ou origem, por isso é necessário percorrer em ambos).

# ActionSheet:

    Foi criado um component separado que recebe como props as opções de ações a serem realizadas, dentro ele procura  a palavra "Logout" para executar a ação de ir para tela de login e se tive "About" ele ira redirecionar para a tela de "About" que tem informações sobre mim, como nome e github (com link funcional que abre o  meu github no navegador)
    Após usar o "Logout" o router retira  todas as paginas da pilha usando o "router.dismissAll();" para não ser possível voltar a uma pagina interna sem estar "logado".
