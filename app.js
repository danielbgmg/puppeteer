const express = require('express')
const app = express()
const puppeteer = require('puppeteer')


app.post('/pdf', async (req, res) => {
    // const pup = async () => {
    // }
    // pup()
    const browser = await puppeteer.launch()
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