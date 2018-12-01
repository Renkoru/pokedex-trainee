import json

import requests

max_id = 152
# max_id = 2

def get_pokemons():
    result = []

    for i in range(1, max_id):
        url = f'https://pokeapi.co/api/v2/pokemon/{i}/'

        print(f'Make a request to {url}')
        response = requests.get(url)
        result.append(response.json())

    return result

def format_pokemons(pokemons):
    def formatter(pokemon):
        return {
            'id': pokemon['id'],
            'name': pokemon['name'],
            'weight': pokemon['weight'],
        }

    return list(map(formatter, pokemons))

print('Get a Pokemons json')
pokemons = get_pokemons()
print('Format data')
pokemons = format_pokemons(pokemons)

print('Write data to file')
with open('output.json', 'w') as outfile:
    json.dump(pokemons, outfile, indent=2)
