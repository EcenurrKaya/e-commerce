const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'Email zaten kayıtlı' });

        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Kayıt başarılı' });
    } catch (error) {
        res.status(500).json({ error: 'Sunucu hatası' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Kullanıcı bulunamadı' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Geçersiz şifre' });

        const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
        res.json({ message: 'Giriş başarılı', token });
    } catch (error) {
        res.status(500).json({ error: 'Sunucu hatası' });
    }
};
