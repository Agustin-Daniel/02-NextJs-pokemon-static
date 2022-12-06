import { Container, Text, Image, Grid, Card } from "@nextui-org/react"
import { Layout } from "../../components/content/layouts"
import NoFavorites from "../../components/content/ui/NoFavorites"
import { useEffect } from 'react';
import { useState } from 'react';
import { localFavorites } from "../../utils";
import FavoritePokemons from "../../components/content/pokemon/FavoritePokemons";


const FavoritesPage = () => {

  
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);


  useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons);
	}, []);
  

  return (
    <Layout title="Pokemons - Favoritos">


      {
        favoritePokemons.length === 0
        ? (<NoFavorites />)
        : (
          <FavoritePokemons pokemons={ favoritePokemons } />)
      }


      


    </Layout>
  )
}

export default FavoritesPage