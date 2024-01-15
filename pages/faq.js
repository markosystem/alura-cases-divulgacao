import FAQScreen from '../src/components/screens/FAQScreen';
export default FAQScreen; 

export async function getStaticProps(){

    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json' ;
    const faq = await fetch(FAQ_API_URL)
        .then((respostaServidor) => {
            return respostaServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
        props: {
            qualquerCoisa: "que eu passar aqui vai embaixo!",
            faq,
        },
    };
}


// export default function Faq({faq}){

//     return (
//         <div>
//             <PageTitle>FAQ - Alura Cases Faq</PageTitle>
//             <h1>Página de Perguntas do FAQ</h1>
//             <Link href="/" passHref>
//                 Página Inicial
//             </Link>
//             <ul>
//                 {
//                     faq.map(({answer, question}) => (
//                         <li key={question}>
//                             <article>
//                                 <h2>{question}</h2>
//                                 <p>{answer}</p>
//                             </article>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }