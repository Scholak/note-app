import nodemailer from 'nodemailer'

export const transport = nodemailer.createTransport({
	host: process.env.MAIL_URL,
	port: Number(process.env.MAIL_PORT),
	auth: {
		user: process.env.MAIL_AUTH_USER,
		pass: process.env.MAIL_AUTH_PASSWORD,
	},
})
