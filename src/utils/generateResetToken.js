const crypto = require('crypto');

const generateResetToken = () => {
  // Generate a random token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash the token and set to resetPasswordToken field
  const hashedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set token expiration time (e.g., 10 minutes)
  const expireTime = Date.now() + 10 * 60 * 1000;

  return { resetToken, hashedToken, expireTime };
};

module.exports = generateResetToken;