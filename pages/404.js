import Link from "../src/components/Link";

 export default function NotFound(){
    return (
        <div>
            <h1>A página solicitada não foi encontrada!</h1>
            <Link href="/" passHref>
                Página Inicial
            </Link>
        </div>
    )
}