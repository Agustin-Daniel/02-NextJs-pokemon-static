import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../components/content/layouts";
import pokeApi from '../../api/PokeApi';


interface Props {
	pokemon: any;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {



	return (
		<Layout title="Algun pokemon">
			<h1>Temp</h1>
		</Layout>
	);
};


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

	const pokemons151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );


	return {
		paths: pokemons151.map( id => ({
			params: { id }
		})),
		// paths: [
		// 	{
		// 		params: { id: '1' }
		// 	},
		// 	{
		// 		params: { id: '1' }
		// 	},
		// 	{
		// 		params: { id: '1' }
		// 	}
		// ],
		fallback: false
	}
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

	const { id } = params as { id: string };

	const { data } = await  pokeApi.get<>('/pokemon?limit=151', {
		headers: {
			'accept-encoding': '*'
		}
	});


	return {
		props: {
			pokemon: '',
		}
	}
}


export default PokemonPage;
