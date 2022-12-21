const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
} = require('graphql');

const CurrenciesType = new GraphQLObjectType({
    name: 'Currencies',
    fields: {
        code: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        symbol: {
            type: GraphQLString,
        },
    },
});

const LanguagesType = new GraphQLObjectType({
    name: 'Languages',
    fields: {
        iso639_1: {
            type: GraphQLString,
        },
        iso639_2: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        nativeName: {
            type: GraphQLString,
        },
    },
});

const TranslationsType = new GraphQLObjectType({
    name: 'Translations',
    fields: {
        de: { type: GraphQLString },
        es: { type: GraphQLString },
        fr: { type: GraphQLString },
        ja: { type: GraphQLString },
        it: { type: GraphQLString },
        br: { type: GraphQLString },
        pt: { type: GraphQLString },
    },
});

const CountriesType = new GraphQLObjectType({
    name: 'Countries',
    fields: () => ({
        name: { type: GraphQLString },
        capital: { type: GraphQLString },
        region: { type: GraphQLString },
        subregion: { type: GraphQLString },
        population: { type: GraphQLInt },
        area: { type: GraphQLInt },
        timezones: { type: GraphQLList(GraphQLString) },
        borders: { type: GraphQLList(GraphQLString) },
        nativeName: { type: GraphQLString },
        currencies: { type: GraphQLList(CurrenciesType) },
        languages: { type: GraphQLList(LanguagesType) },
        translations: { type: TranslationsType },
        flag: { type: GraphQLString },
    }),
});

//Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        countries: {
            type: new GraphQLList(CountriesType),
            args: { name: { type: GraphQLString } },
            resolve(parent, args) {
                console.log('Args are =', args);
                return axios
                    .get(`https://restcountries.com/v2/name/${args.name}`)
                    .then((res) => res.data);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
