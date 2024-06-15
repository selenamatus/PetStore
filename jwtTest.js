const jwt = require('jsonwebtoken');

// Your JWT secret key
const secretKey = 'bd38d956924875c76a31c08594216e3ea3119007c362f5f9f7414aa1226c41e60284716bf262c6c154fedbe307ccfe5df380c3cdd8932350bd0247da56625f20';

// Create a payload
const payload = {
  id: '12345',
  username: 'testuser'
};

// Generate a token
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
console.log('Generated Token:', token);

// Verify the token
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('Token verification failed:', err.message);
  } else {
    console.log('Token is valid. Decoded payload:', decoded);
  }
});
