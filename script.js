function toggleMode() {
    const html = document.documentElement /* 'document' is the website in object format */ /* 'documentElement' is the html */

    //  if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //  } else {
    //    html.classList.add('light')
    //  }

    html.classList.toggle('light')

    // get the img tag
    const img = document.querySelector("#profile img")

    // replace the image
    if(html.classList.contains('light')) {
        // if it has light mode, add the light image
        img.setAttribute('src', './assets/assets/avatar-light.png')

        // change image alt to light
        img.setAttribute('alt', 'Foto de Alisson de frente para um espelho segurando um celular em um terno de padrão profissional')
    } else {
        // If you don't have light mode, keep the image normal
        img.setAttribute('src', './assets/assets/avatar.png')

        // Revert to original alt text, as the DOM does not persist previous states
        img.setAttribute('alt', 'Foto de Alisson com gesto profissional, camisa preta, fone de ouvido e fundo borrado')
    }
}