const express = require('express')
const app = express()
const puppeteer = require('puppeteer')
require("dotenv").config()


app.post('/pdf', async (req, res) => {
    try {
        const browser = await puppeteer.launch({
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/google-chrome-stable',
            headless: true, // Executa o navegador em modo headless
            args: ['--no-sandbox', '--disable-setuid-sandbox'], // Argumentos recomendados para ambientes como Render
        });
        const page = await browser.newPage()
        await page.setContent('<p>deu certo</p>')
        const pdf = await page.pdf({format: 'A4', path: 'catalogo.pdf'})
    
        await page.close()
        await browser.close()
        
        res.send(pdf)
    }catch (err){
        console.error("Erro ao carregar os produtos:", error);
        res.status(500).json({ message: "Erro interno do servidor." })
    }
})
    // const pup = async () => {
    // }
    // pup()

app.listen(3031, () => {
    console.log('Server Teste');
    
})