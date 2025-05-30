/* images are 3:2, 3 width 2 height */

import image1 from './images/image.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

export const artData = [
    {
        forSale: true,
        className: 'hey',
        title: {
            en: 'Title of the Art Piece',
            de: 'Titel des Kunstwerks'
        },
        pictures: [
            [
                image1,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                image2,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                image3,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                image4,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
        ],
        text: {
            en: 'whatever i wanna say about it',
            de: 'was auch immer ich darüber sagen will'
        },
        details: {
            en: {
                size: 'whatever',
                medium: 'whatever',
                special:'whatever',
                price: 'lotsofmoney'
            },
            de: {
                size: 'was auch immer',
                medium: 'was auch immer',
                special:'was auch immer',
                price: 'viel Geld'
            }
        },
    },
    {
        forSale: false,
        className: 'hey',
        title: {
            en: 'Title of the Art Piece',
            de: 'Titel des Kunstwerks'
        },
        pictures: [
            [
                image1,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                image2,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                image3,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                image4,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
        ],
        text: {
            en: 'whatever i wanna say about it',
            de: 'was auch immer ich darüber sagen will'
        },
        details: {
            en: {
                size: 'whatever',
                medium: 'whatever',
                special:'whatever',
                price: 'lotsofmoney'
            },
            de: {
                size: 'was auch immer',
                medium: 'was auch immer',
                special:'was auch immer',
                price: 'viel Geld'
            }
        },
    },
];
