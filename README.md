## Como Testar

Primeiro deve instatar os pacotes Express e Puppeteer

No diretório do arquivo deve rodar um node api.js para iniciar o servidor na porta 3000

Após isso teste com o Postman ou em seu próprio navegador com este exemplo?

"http://localhost:3000/api/search?q=${encodeURIComponent(query)}&rlz=1C1CHBF_pt-BRBR912BR912&oq=tes&aqs=chrome.0.69i59j69i57j69i59j69i60l3j69i65l2.1001j0j7&sourceid=chrome&ie=UTF-8"

Insesir em ${encodeURIComponent(query)} o texto de sua pesquisa.
