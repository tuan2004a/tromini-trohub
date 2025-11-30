import Joi from "joi";

export const phoneSchema = Joi.string().required().pattern(/^[0-9]{10,15}$/).messages({
    'string.pattern.base': 'Số điện thoại không hợp lệ',
    'string.required' : 'Số điện thoại không được để trống',
})

export const hashedPasswordSchema = Joi.string().required().min(5).max(128).messages({
    'string.max': 'Mật khẩu không được vượt quá 128 ký tự',
    'string.min': 'Mật khẩu phải có ít nhất 5 ký tự',
    'string.required': 'Mật khẩu không được để trống',
});

export const emailSchema = Joi.string().email({ tlds: { allow: true } }).messages({
    "string.email": "Vui lòng cung cấp địa chỉ email hợp lệ",
});

