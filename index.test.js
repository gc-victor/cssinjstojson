const assert = require('assert').strict;
const toJSON = require('./');

const expected = toJSON(`
    .className {
        padding: 1em;  
    }
    padding: 1em;
    :hover {
        padding: 1em;
    }
    @font-face {
      font-family: myFirstFont;
      src: url(sansation_light.woff);
    }
    @media (min-width: 1px) {
        margin: 1em;
        :hover {
            padding: 1em;
        }
        :focus {
            margin: 1em;
        }
    }
    @media (min-width: 2px) {
        margin: 1em;
        background: red;
        :hover {
            padding: 1em;
        }
        :focus {
            margin: 1em;
        }
    }
`);

const json = {
    '.className': {
        padding: '1em'
    },
    padding: '1em',
    ':hover': {
        padding: '1em'
    },
    '@font-face': {
        'font-family': 'myFirstFont',
        src: 'url(sansation_light.woff)'
    },
    '@media (min-width: 1px)': {
        margin: '1em',
        ':hover': {
            padding: '1em'
        },
        ':focus': {
            margin: '1em'
        }
    },
    '@media (min-width: 2px)': {
        margin: '1em',
        background: 'red',
        ':hover': {
            padding: '1em'
        },
        ':focus': {
            margin: '1em'
        }
    }
};

try {
    assert.deepStrictEqual(expected, json);
    console.log('Test passed successfully!!');
} catch (e) {
    console.error(e);
}
