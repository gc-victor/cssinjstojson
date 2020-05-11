# cssinjstojson

Converts CSS in JS to JSON in 200 B.

All the credit of this library is for Aram Kocharyan ([aramk](https://github.com/aramk)) and his library [CSSJSON](https://github.com/aramk/CSSJSON).

## Example:

CSS in JS

```
toJSON(`
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
        :hover {
            padding: 1em;
        }
        :focus {
            margin: 1em;
        }
    }
`)
``` 

To JSON

```
{
    ".className": {
        "padding": "1em"
    },
    "padding": "1em",
    ":hover": {
        "padding": "1em"
    },
    "@font-face": {
        "font-family": "myFirstFont",
        "src": "url(sansation_light.woff)"
    },
    "@media (min-width: 1px)": {
        "margin": "1em",
        ":hover": {
            "padding": "1em"
        },
        ":focus": {
            "margin": "1em"
        }
    },
    "@media (min-width: 2px)": {
        "margin": "1em",
        "background": "red",
        ":hover": {
            "padding": "1em"
        },
        ":focus": {
            "margin": "1em"
        }
    }
}
``` 

## Compatible Versioning

### Summary

Given a version number MAJOR.MINOR, increment the:

- MAJOR version when you make backwards-incompatible updates of any kind
- MINOR version when you make 100% backwards-compatible updates

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR format.

[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)](https://github.com/staltz/comver)

## Contribute

First off, thanks for taking the time to contribute!
Now, take a moment to be sure your contributions make sense to everyone else.

### Reporting Issues

Found a problem? Want a new feature? First of all, see if your issue or idea has [already been reported](../../issues).
If it hasn't, just open a [new clear and descriptive issue](../../issues/new).

### Commit message conventions

We are following *AngularJS Git Commit Message Conventions*. This leads to more readable messages that are easy to follow when looking through the project history.

- [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)
- [Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope and do avoid unrelated commits.

-   Fork it!
-   Clone your fork: `git clone http://github.com/<your-username>/react-form-core`
-   Navigate to the newly cloned directory: `cd react-form-core`
-   Create a new branch for the new feature: `git checkout -b my-new-feature`
-   Install the tools necessary for development: `npm install`
-   Make your changes.
-   `npm run build` to verify your change doesn't increase output size.
-   `npm test` to make sure your change doesn't break anything.
-   Commit your changes: `git commit -am 'Add some feature'`
-   Push to the branch: `git push origin my-new-feature`
-   Submit a pull request with full remarks documenting your changes.

## License

[MIT License](https://github.com/gc-victor/cssinjstojson/blob/master/LICENSE)