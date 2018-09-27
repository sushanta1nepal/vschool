const uuid = require('uuid/v4')

const bountyHunt = [
    {
        firtName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 100,
        Type: 'Jedi',
        id: uuid(),
    },
    {
        firtName: 'Annaken',
        lastName: 'Skywalker',
        living: false,
        bountyAmount: 100,
        Type: 'Jedi',
        id: uuid(),
    },
    {
        firtName: 'Hans',
        lastName: 'Solo',
        living: false,
        bountyAmount: 100,
        Type: 'Jedi',
        id: uuid(),
    },
    {
        firtName: 'Kylo',
        lastName: 'Ren',
        living: true,
        bountyAmount: 100,
        Type: 'Sith',
        id: uuid(),
    },
    {
        firtName: 'General',
        lastName: 'Hux',
        living: true,
        bountyAmount: 100,
        Type: 'Sith',
        id: uuid(),
    },
    {
        firtName: 'Darth',
        lastName: 'Dane',
        living: true,
        bountyAmount: 100,
        Type: 'Sith',
        id: uuid(),
    },
    {
        firtName: 'Sheev',
        lastName: 'Palpatine',
        living: false,
        bountyAmount: 100,
        Type: 'Sith',
        id: uuid(),
    },
]

module.exports = bountyHunt