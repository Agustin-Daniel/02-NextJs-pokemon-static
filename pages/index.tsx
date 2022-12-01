import { NextPage } from "next";
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next'
import { pokeApi } from "../api";

const HomePage: NextPage = () => {
	return (
		<Layout title="Listado de pokemos">
			<ul>
				
			</ul>
		</Layout>
	);
};


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await  pokeApi.get('/pokemon?limit=151');

	
	

	return {
		props: {
			pokemons: data.results
		}
	}
}


export default HomePage;
