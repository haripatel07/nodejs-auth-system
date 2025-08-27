const express = require('express');
const { registerUser, loginUser, getUserProfile, forgotPassword, resetPassword, getAdminContent } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

// Private routes
router.route('/profile').get(protect, getUserProfile);

// Private Admin routes
router.route('/admin').get(protect, authorize('admin'), getAdminContent);

module.exports = router;