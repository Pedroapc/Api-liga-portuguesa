async function getArticles() {
  var selected = '';
  var ele = document.getElementsByName('btnradio');
            
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){
        selected = ele[i].getAttribute("value")
      }
      
  }
  const urlBase = "http://localhost:8080/api/";
    
    const listaArticles = document.getElementById("articles");
    let texto = "";
    let myHeaders = new Headers();
    let url = urlBase + selected;
    
    console.log("URL: " + url);

    const token = localStorage.token;
    console.log(token)

    //const myInit = { method: "GET", headers: myHeaders };
    const myInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        listaArticles.innerHTML = "NÃ£o posso mostrar artigos de momento!";
      } else {
        articles = await response.json();
        listaArticles.innerHTML = "";
        for(const article of articles){
            texto += `
            
            <h1 style="width: 100%; text-align: center; class="card-title">${article.titulo}</h1>
                      
                      <a style="width: 100%; text-align: center;border-color: #04AA6D; background-color: #04AA6D" href="${article.url}" class="btn btn-primary ">Notícia</a>
                    
            
            `;
        }
        
        listaArticles.innerHTML = texto;
      }
    });

  }

  async function getStandings() {
    
    const urlBase = "http://localhost:8080/api/classificacao";
      
      const listaArticles = document.getElementById("articles");
      let texto = "";
      let myHeaders = new Headers();
      let url = urlBase
      
      console.log("URL: " + url);
  
      const token = localStorage.token;
      console.log(token)
  
      //const myInit = { method: "GET", headers: myHeaders };
      const myInit = {
        method: "GET",  
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      };
      const myRequest = new Request(url, myInit);
    
      await fetch(myRequest).then(async function (response) {
        if (!response.ok) {
          listaArticles.innerHTML = "NÃ£o posso mostrar artigos de momento!";
        } else {
          articles = await response.json();
          listaArticles.innerHTML = "";
          for(const article of articles){
              texto += `
             
                      
                        <h1 style="width: 100%; text-align: center; background-color: rgb(200, 200, 200); class="card-title">${article.posicao}</h1>
                        
                        
              
              
              `;
          }
          
          listaArticles.innerHTML = texto;
        }
      });
  
    }