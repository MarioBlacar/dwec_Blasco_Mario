// for(let contador=0;contador<document.getElementsByTagName('li').length;contador++){

//     let buscador = document.getElementsByTagName('li')[contador];
//     switch (buscador.textContent){
//         case "Google":
//             buscador.innerHTML = `<a href = 'https://google.com'>google</a>`;
//             break;
//         case "DuckDuckGo":
//             buscador.innerHTML = `<a href = 'https://duckduckgo.com'>DuckDuckGo</a>`;
//             break;
//         case "Bing":
//             buscador.innerHTML = `<a href = 'https://www.bing.com'>Bing</a>`;
//             break;
//         case "Ecosia":
//             buscador.innerHTML = `<a href = 'https://www.ecosia.org/'>Ecosia</a>`;
//             break;
//         case "WolframAlpha":
//             buscador.innerHTML = `<a href = 'https://www.wolframalpha.com'>WolframAlpha</a>`;
//             break;
//     }
// }

const urls = {
    google: "https://google.com",
    DuckDuckGo: "https://DuckDuckGo.com",
    Bing: "https://Bing.com",
    Ecosia: "https://Ecosia.com",
    WolframAlpha: "https://WolframAlpha.com"
}

let lis = document.getElementsByTagName('li');

Array.from(lis).forEach(li => {
    li.innerHTML = `<a href="${urls[li.textContent.toLowerCase()]}">${li.textContent}</a>`
});