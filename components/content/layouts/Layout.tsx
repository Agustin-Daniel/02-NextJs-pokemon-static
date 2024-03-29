import Head from "next/head"
import { FC, PropsWithChildren } from "react";
import { Navbar } from '../ui';


interface Props {
	title?: string;
}


const origin = (typeof window ==='undefined') ? '' : window.location.origin



export const Layout: FC<PropsWithChildren & Props> = ({ children, title }) => {





	return (
			<>
				<Head>
					<title>{ title || "Pokemon App"}</title>

					{/* <meta property="og:title" content={`Informacion sobre ${title}`} />
					<meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
					<meta property="og:image" content={`${origin}/img/banner.png`} /> */}

					<meta name="author" content="AgentFont" />
					{/* <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
					<meta name="keywords" content={`${title}, pokemon, pokedex`} /> */}
				</Head>

				<Navbar />

				<main style={{
					padding: '0px 20px'
				}}>
					{ children }
				</main>

			</>
		);
}
