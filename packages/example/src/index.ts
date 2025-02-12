import { gql, createClient } from '@urql/core';
import { Pokemon, PokemonFields } from './Pokemon';

const PokemonsQuery = gql`
  query Pokemons {
    pokemons {
      id
      name
      __typename
      fleeRate
    }
  }
` as typeof import('./index.generated').PokemonsDocument;

const client = createClient({
  url: '',
});

client
  .query(PokemonsQuery, {})
  .toPromise()
  .then(result => {
    result.data?.pokemons;
  });

const PokemonQuery = gql`
  query Pokemon($id: ID!) {
    pokemon(id: $id) {
      id
      fleeRate
      __typename
    }
  }
` as typeof import('./index.generated').PokemonDocument;

client
  .query(PokemonQuery, { id: '' })
  .toPromise()
  .then(result => {
    result.data?.pokemon;
  });
