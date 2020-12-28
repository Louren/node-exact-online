# node-exact-online
Node.js wrapper for the [Exact Online API](https://developers.exactonline.com)

### Disclaimer

This module is a work in progress. Not all methods are available yet. Feel free to add them and send in a pull request

# Install

```bash
npm install exact-online
```
# Usage 

Create a client
```javascript
var exactOnline = require('exact-online');
var client = exactOnline.createClient({
	clientId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // OAuth Client ID
  clientSecret: 'xxxxxxxxxxxx', // OAuth Client Secret
  env: 'production', // Environment (production/development)
  debug: false, // Enable debug logging
  redirectUri: 'https://example.com/oauth/redirect'
});
```
The client can be used to call methods on the Exact Online API
```javascript
// Get current user
client.sys.me(function(userData) {
  console.log(userData); 
});
```

# Support
Found a bug? Have a great idea? Feel free to create an issue or a pull request!

# License

The MIT License (MIT)

Copyright (c) 2015 Aan Zee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

