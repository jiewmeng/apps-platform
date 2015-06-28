# Authentication module

## API

(module initializer)

```javascript
({
    tokenTtl: MILLISECONDS,
    facebook: { ... facebook app id/secret ... },
    github: { ... github app id/secret ... },
    google: { ... google app id/secret ... }
})
```

- `authenticateWith`
    - `facebook(accessToken): appJwt`
    - `google(accessToken): appJwt`
    - `github(accessToken): appJwt`

    > Creates a new user record if no corresponding user detected.

- `linkAccount(appToken, accountType, socialToken)`

    > Links user account with another social media login

- `logout(appToken)`
