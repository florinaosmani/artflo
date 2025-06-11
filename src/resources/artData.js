/* images are 3:2, 3 width 2 height */

import lilguy1 from '../resources/images/lilguy/lilguy1.jpg';
import lilguy2 from '../resources/images/lilguy/lilguy2.jpg';
import lilguy3 from '../resources/images/lilguy/lilguy3.jpg';
import lilguy4 from '../resources/images/lilguy/lilguy4.jpg';

import donewaiting1 from '../resources/images/donewaiting/donewaiting1.jpg';
import donewaiting2 from '../resources/images/donewaiting/donewaiting2.jpg';
import donewaiting3 from '../resources/images/donewaiting/donewaiting3.jpg';
import donewaiting4 from '../resources/images/donewaiting/donewaiting4.jpg';

export const artData = [
    {
        forSale: true,
        className: 'heyboy',
        title: {
            en: 'Boy in Cropped Yellow Sweater',
            de: 'Junge im kurzen, gelben Pullover'
        },
        pictures: [
            [
                lilguy1,
                {en: 'Painting of a boy in a cropped yellow sweater and blue jeans',
                de: 'Gemälde eines Jungen in einem kurzen, gelben Pullover und blauen Jeans'}
            ],
            [
                lilguy2,
                {en: 'Detail of the painting',
                de: 'Detail des Gemäldes'}
            ],
            [
                lilguy3,
                {en: 'Detail of the painting',
                de: 'Detail des Gemäldes'}
            ],
            [
                lilguy4,
                {en: 'Boy in cropped yellow sweater hanging on a wall',
                de: 'Junge im kurzen, gelben Pullover an einer Wand'}
            ],
        ],
        text: {
            en: 'A boy floating through life. He is a little bit lost, but he doesn\'t care. He is simply enjoying the moment and the journey in his cropped yellow sweater.',
            de: 'Ein Junge, der durch das Leben schwebt. Er ist ein bisschen verloren, aber es ist ihm egal. Er geniesst einfach den Moment und die Reise in seinem kurzen, gelben Pullover.'
        },
        details: {
            en: {
                size: '21cm x 29.7cm',
                medium: 'Oil on paper',
                price: '100 CHF'
            },
            de: {
                size: '21cm x 29.7cm',
                medium: 'Öl auf Papier',
                price: '100 CHF'
            }
        },
    },
    {
        forSale: true,
        className: 'heyother',
        title: {
            en: 'Title of the Art Piece',
            de: 'Titel des Kunstwerks'
        },
        pictures: [
            [
                donewaiting1,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                donewaiting2,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                donewaiting3,
                {en: 'alttext',
                de: 'alternativtext'}
            ],
            [
                donewaiting4,
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
