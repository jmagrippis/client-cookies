#Client Cookies

A modest package to easily set, get and delete cookies in Javacript.

Written on EcmaScript 2015, compiled to regular ES5.


### Usage
```javascript
import Cookies from 'client-cookies';

Cookies.set('language', 'javascript');

Cookies.get('language'); // Returns 'javascript'

Cookies.delete('language'); // Removes 'language' cookie

Cookies.get('language'); // Returns an empty string ''
```

### Testing
Simply run:

```bash
npm test
```