import { Drink } from '../drinklist/drink';

export const drink: Drink = {
    'id': 1,
    'default': true,
    'dateCreated': '2017-07-20',
    'hidden': false,
    'favorite': true,
    'name': 'Gin',
    'ingredients': [
        {
            'ref': 1,
            'quantity': 2,
            'unit': 'oz'
        },
    ],
    'details': {
        'category': 'Testing',
        'color': 'Clear',
        'glassType': 'Highball',
        'ice': 'Cubes'
    },
    steps: 'Testing'
};