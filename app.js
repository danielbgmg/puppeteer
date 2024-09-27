const express = require('express')
const app = express()
const puppeteer = require('puppeteer')
require("dotenv").config()


app.post('/pdf', async (req, res) => {
    // const pup = async () => {
    // }
    // pup()
    const browser = await puppeteer.launch({
        args: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"
        ],
        executablePath: 
        process.env.NODE_ENV === 'production' 
            ? process.env.PUPPETTER.EXECUTABLE_PATH
            : puppeteer.executablePath()
    })
    const page = await browser.newPage()
    await page.setContent('<p>deu certo</p>')
    const pdf = await page.pdf({format: 'A4', path: 'catalogo.pdf'})

    await page.close()
    await browser.close()
    
    res.send(pdf)
})

app.listen(3031, () => {
    console.log('Server Teste');
    
})