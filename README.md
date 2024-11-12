# Projeto (Desafio 03 - AWS REACT)
LINK DO DEPLOY FEITO PELA AWS EC2: https://ec2-15-228-161-57.sa-east-1.compute.amazonaws.com
## React + TypeScript + Vite

- Instale as dependências do projeto pelo terminal:
```
npm i
```
- Inicie o projeto com esse comando pelo terminal:
```
npm run dev
```

## Resumo do Projeto

  É uma plataforma onde o usuário poderá visualizar/editar os dados de portifólio, podendo fazer autenticação com Firebase/GitHub e consumir os dados do usuário existente no GitHub utilizando suas APIs públicas.
  A tela inicial permite procurar por um usuário (que já foi logado ao menos uma vez) ou logar no site com a conta do GitHub. Ao buscar por um usuário que exista no site (Local Storage), será exibido o portifólio, a foto de perfil, e-mail, dados do usuário, bio e link do GitHub, cujas informações são resgatadas das APIs do mesmo. Quando uma das informações não vem no retorno da API, o campo simplesmente não é exibido.

  Quando o usuário estiver logado, o botão de edição no topo da página será exibido e funcionará da seguinte forma:
- Ao ser clicado, irá habilitar (simultaneamente) a edição do nome do usuário, do link para o LinkedIn, dos cards de experiências profissionais (adição, edição e exclusão) e das redes sociais no final da página;
- Seu ícone irá alterar para o ícone de salvamento e, ao ser clicado novamente, todos os dados que estavam em edição serão salvos e o modo de edição é encerrado;
- Ambos os ícones de habilitar e desabilitar edição são fixos na tela, de forma flutuante;
---
- O ícones de Edição/Exclusão dos cards irão aparecer somente com o hover, quando o usuário passar o mouse em cima do card;
- O botão de edição de cada card, abrirá o modal de edição de card de experiência;
- O botão de exclusão de cada card remove imediatamente o card da lista.
- Virá preenchido os modais de links quando o dado existir, e permite o salvamento da informação.
- Enquanto os campos obrigatórios estiverem vazios, o botão de salvar ficará desabilitado.

---
Agradeço aos intrutores e colegas do PB por tirarem dúvidas e pelas ajudas mútuas durante o percurso do projeto ❤️
---
feito por [Ewellyn Maria](https://github.com/ewemf) 😊
