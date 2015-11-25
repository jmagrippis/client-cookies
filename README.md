#Client Cookies

A modest package to easily set, get and delete cookies in Javacript.

Written on EcmaScript 2015, compiled to regular ES5.


### Usage
```javascript
import Cookies from 'client-cookies';

Cookies.set('language', 'javascript'); // Sets the 'language' cookie, expires at end of session

Cookies.get('language'); // Returns 'javascript'

Cookies.delete('language'); // Removes 'language' cookie

Cookies.get('language'); // Returns an empty string ''
```

#### Set Options
You may pass an Object as the third parameter of the set method.

The available tweakable options are:

| Name       | Type                       | Default | Description
|------------|----------------------------|---------|--------
| `expires`  | `Number`, `Date`, `String` | `''`    | When the property is not passed along, the set cookie will expire at the end of the session. When it is passed along, then the value's type will be evaluated. If it's a number, the cookie will expire that number of days later. If it's a Date instance, the cookie's expiry will be set for that date. Lastly, if it's a string, the code will try to parse a Date instance from it, and set the expiry for then; if it's not parsable, it will be the same as if the expires property had not be set at all, so the cookie will expire at the end of the session.

### Examples

```javascript
Cookies.get('set expiry', 'two days later', {expires: 2}); // Will expire two days later
```

### Testing
Simply run:

```bash
npm test
```