export const WHATSAPP = "5521979090667";
export const PHONE_DISPLAY = "(21) 97909-0667";
export const EMAIL = "contato@rpaifutevoleipersonal.com.br";
export const INSTAGRAM = "https://www.instagram.com/ct.rpai_futevolei_personal/";
export const INSTAGRAM_HANDLE = "@ct.rpai_futevolei_personal";

export function wa(text: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(text)}`;
}

export const WA = {
  trial: wa("Olá, gostaria de fazer uma aula experimental no CT Rui Pai!"),
  class: wa("Olá, quero agendar uma aula de futevôlei no CT Rui Pai."),
  personal: wa("Olá, quero informações do personal de futevôlei."),
  gympass: wa("Olá, tenho Gympass (Wellhub) e quero treinar no CT Rui Pai."),
  hours: wa("Olá, quero consultar horários e nivelamento das aulas."),
};

export const NAV = [
  { href: "#ct", label: "O CT" },
  { href: "#aulas", label: "Aulas" },
  { href: "#metodo", label: "Método" },
  { href: "#rui", label: "Rui" },
  { href: "#avaliacoes", label: "Alunos" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#onde", label: "Onde" },
];

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rui+Pai+Futevôlei+Personal+Recreio+dos+Bandeirantes";

export const GOOGLE_RATING = {
  value: "5.0",
  label: "Excelente",
  count: 19,
};

export const STATS = [
  { value: "11", label: "quadras", detail: "7 na praia · 4 na praça" },
  { value: "12+", label: "anos", detail: "de ensino no Recreio" },
  { value: "7", label: "dias", detail: "horário livre, tipo academia" },
  { value: "19", label: "avaliações", detail: "Excelente no Google" },
];

export const OFFERS = [
  {
    id: "futevolei",
    kicker: "Principal",
    title: "Futevôlei",
    price: "169,90",
    blurb:
      "Aulas divididas por nível, com turmas exclusivas para meninas e crianças. Professores com mais de 20 anos no esporte — e personal para quem quer ir além.",
    freqs: ["2× / semana", "3× / semana", "5× / semana"],
    href: WA.class,
  },
  {
    id: "personal",
    kicker: "1 a 1",
    title: "Personal",
    price: "199,90",
    blurb:
      "O mesmo treinamento que profissionais e jogadores de futebol usam no CT, adaptado para o seu nível.",
    freqs: ["1× / semana", "2× / semana", "3× / semana"],
    href: WA.personal,
  },
  {
    id: "clubinho",
    kicker: "Fim de semana",
    title: "Clubinho / Funcional",
    price: "69,90",
    blurb:
      "Aulas exclusivas de sábado, domingo e feriado. Funcional na areia para postura, mobilidade, sono e cabeça — e o Clubinho para jogar.",
    freqs: ["Sábados", "Domingos", "Feriados"],
    href: WA.class,
  },
];

export const METHOD = [
  {
    n: "01",
    title: "Nivelamento",
    text: "Você chega, a gente vê o toque, o deslocamento e o que o corpo já sabe. Iniciante treina com iniciante. Ninguém é jogado no fundo da quadra.",
  },
  {
    n: "02",
    title: "Fundamento",
    text: "Chapa, peito, ombro, recepção. O gesto certo reduz lesão e faz a bola parar de escapar. É técnica, não “vai batendo”.",
  },
  {
    n: "03",
    title: "Jogo real",
    text: "Dinâmica de ponto, cobertura, tempo de bola. O treino imita o game — porque é no game que o fundamento precisa aparecer.",
  },
];

export const INFRA = [
  {
    title: "11 quadras",
    text: "Sete no Posto 11 da praia, quatro na Praça Mozart Firmeza. Sempre tem onde entrar.",
  },
  {
    title: "Redinha e futmesa",
    text: "Enquanto espera a aula, treina toque na redinha ou joga futmesa.",
  },
  {
    title: "Horário livre",
    text: "Escolhe o dia, a hora e o local. Todos os dias — como academia, na areia.",
  },
  {
    title: "Água gelada",
    text: "Disponível para todo atleta. Sol de Recreio não é detalhe.",
  },
  {
    title: "Chuveiro de água doce",
    text: "Na praia, para sair da aula sem levar o sal embora no carro.",
  },
  {
    title: "Churrasqueira dos alunos",
    text: "Uso liberado para quem treina aqui. O CT também é ponto de encontro.",
  },
  {
    title: "Padaria na frente",
    text: "Alfa Belle em parceria — pão, refeição e café colado na praça.",
  },
  {
    title: "Quiosque",
    text: "Assiste o game, pede algo, espera a próxima. A aula não começa na hora marcada e acaba no vazio.",
  },
];

export const REVIEWS = [
  {
    name: "Arnaldo Linhares",
    date: "29/06/2023",
    text: "Excelente CT. Ambiente maravilhoso, professores dedicados e atentos. Várias quadras. O Ruy está sempre alerta em relação a todos os participantes. Vale a pena experimentar!!",
  },
  {
    name: "Jhonatan Gama",
    date: "02/07/2023",
    text: "Esse ct é Braboooo Ct Rpai vc é uma máquina paii",
  },
  {
    name: "Julio Fontenelle",
    date: "29/06/2023",
    text: "Melhor CT do Brasil 🇧🇷",
  },
  {
    name: "Luis Fernando Gomes dos Santos",
    date: "29/06/2023",
    text: "Muito boa estrutura, equipe atenciosa e treinamento top. Me senti em casa",
  },
  {
    name: "Gustavo Mello",
    date: "29/06/2023",
    text: "Melhor ct do RJ!",
  },
  {
    name: "Jss Ar condicionado",
    date: "02/07/2023",
    text: "O melhor CT d futevôlei",
  },
  {
    name: "Fabio Dutra",
    date: "29/06/2023",
    text: "Complexo esportivo de qualidade!!!",
  },
  {
    name: "Victor hugo Almeida",
    date: "29/06/2023",
    text: "Melhor do rio !",
  },
];

export const VIDEOS = [
  {
    id: "_5UwBPpcgOw",
    title: "Fundamento da chapa",
    duration: "3:44",
  },
  {
    id: "hJi8oNX-ThU",
    title: "Como não errar no futmesa",
    duration: "14:04",
  },
  {
    id: "Y2JMg9HIdM0",
    title: "Recepção na hora do jogo",
    duration: "5:11",
  },
  {
    id: "qqtnsdYIs9Y",
    title: "Três motivos de errar o ombro",
    duration: "6:35",
  },
];

export const FAQ = [
  {
    q: "Posso fazer uma aula experimental em qualquer modalidade?",
    a: "Pode. Chama no WhatsApp e a gente agenda. A maioria das pessoas que chega nunca tinha jogado futevôlei.",
  },
  {
    q: "Nunca pratiquei. Dá para começar?",
    a: "Dá. Temos turmas de iniciante e nivelamento. O primeiro passo é o toque — não o game fechado.",
  },
  {
    q: "Quais são os horários?",
    a: "Cada modalidade tem grade própria, e algumas têm níveis diferentes. Consulte no WhatsApp o dia, a hora e o local (praia ou praça).",
  },
  {
    q: "Posso variar dias e horários?",
    a: "Sim. Os alunos escolhem o dia e o horário em que querem treinar.",
  },
  {
    q: "Quanto custa?",
    a: "Futevôlei a partir de R$ 169,90, personal a partir de R$ 199,90, Clubinho/funcional a partir de R$ 69,90. Day use aos sábados: R$ 10, para aluno e não aluno. Planos e frequências saem no WhatsApp.",
  },
  {
    q: "Aceitam Gympass / Wellhub?",
    a: "Sim, a partir do plano Silver+. Reserve a aula no app (reservas abrem 24h antes), faça o check-in na arena. Se não vier, cancele antes do início.",
  },
  {
    q: "Quais formas de pagamento?",
    a: "Dinheiro, Pix, débito ou crédito.",
  },
  {
    q: "O plano semestral ou anual consome o limite do cartão?",
    a: "Não. A cobrança é mês a mês, sem comprometer o limite de uma vez.",
  },
  {
    q: "Tem multa se eu cancelar o plano semestral ou anual?",
    a: "Sim. Cancelamento antecipado cobra 20% das mensalidades restantes, calculado sobre o valor do plano mensal sem o desconto da promoção.",
  },
  {
    q: "Tem idade mínima?",
    a: "Sim, por atividade. Temos turmas de crianças — confirme o limite da modalidade no WhatsApp.",
  },
];

export const PLACES = [
  {
    name: "Praia · Posto 11",
    address: "Av. Lúcio Costa, 17.600 — Recreio dos Bandeirantes",
    detail: "Sete quadras na areia, chuveiro de água doce, o mar como fundo de quadra.",
    map: "https://www.google.com/maps/search/?api=1&query=Posto+11+Praia+do+Recreio+Avenida+Lucio+Costa+17600",
  },
  {
    name: "Praça Mozart Firmeza",
    address: "Recreio dos Bandeirantes — Rio de Janeiro",
    detail: "Quatro quadras na praça, padaria Alfa Belle na frente, treino fora da areia quando o tempo aperta.",
    map: "https://www.google.com/maps/search/?api=1&query=Praca+Mozart+Firmeza+Recreio+dos+Bandeirantes",
  },
];
