const items = [
  {
    year: '2022',
    projects: [
      {
        title: 'Ignews 2',
        description:
          'A blog for dev. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit non illo eos beatae rerum',
        url: 'https://github.com/FeAranha/ignews',
        problem:
          'cccccccccccc cccc cccccccc ccccccccccccccccccc ccccc ccccccccc cccc ccc ccccc ccccccccccc ccccccc cccccc Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit non illo eos beatae rerum.',
        task: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        solution:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit non illo eos beatae rerum, aperiam ad nulla vitae repellat aspernatur officia nostrum aliquid eum voluptatibus dolores fugit numquam delectus!',
        icon: 'PawPrint',
        active: false,
        slug: 'ignews-2',
      },
      {
        title: 'Project Name',
        description: 'desc project, etc lorem plorem',
        url: 'https://github.com/FeAranha/ignews',
        problem:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit non illo eos beatae rerum.',
        task: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        solution:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit non illo eos beatae rerum, aperiam ad nulla vitae repellat aspernatur officia nostrum aliquid eum voluptatibus dolores fugit numquam delectus!',
        icon: 'ShoppingBag',
        active: false,
        slug: 'project-name',
      },
      {
        title: 'Ignews 2 1',
        description: 'A blog for any lol lol ol',
        url: 'https://github.com/FeAranha/ignews',
        problem:
          'aaaaaa aa aaaa aaaaaaaaa aaaaa aaaaa aaaa aaaaa aaaaa aaaaa aaaa aaaaa sbbbbbbbb bbbbbbbbbbbbb bbbbbbbbbLorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit non illo eos beatae rerum.',
        task: 'Adipisicing elit, Lorem, ipsum dolor sit amet consectetur .',
        solution:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit non illo eos beatae rerum, aperiam ad nulla vitae repellat aspernatur officia nostrum aliquid eum voluptatibus dolores fugit numquam delectus!',
        icon: 'PawPrint',
        active: true,
        slug: 'ignews-2-1',
      },
    ],
  },
  {
    year: '2021',
    projects: [
      {
        title: 'Ignews',
        description:
          'Um blog utilizando CMS Prismic para criação de posts com agendamento ou imediato. É preciso fazer o login com uma conta social gitHub e fazer o pagamento da assinatura por meio da API Stripe.',
        url: 'https://ignews-beta-amber.vercel.app/',
        problem: 'Fixar os conhecimentos em Next12, Testes unitarios, Deploy.',
        task: [
          'Pagina com Posts parcialmente visível, full acesso após ser assinante.',
          'Realizar login por meio do Next Auth.',
          'Banco de dados não relacional Fauna para cadastro de usuários e suas assinaturas.',
          'Full-stack sendo o backend-end com API Route do Next12.',
          'Testes unitario com Jest.',
          'Deploy na vercel node16x.',
        ],
        solution:
          'Acompanhamento das aulas e documentação em notion, cumprimendos dos desafios e prazos, emitido o: ',
        icon: 'BookHeart',
        active: false,
        slug: 'ignews',
      },
    ],
  },
]

export default items
