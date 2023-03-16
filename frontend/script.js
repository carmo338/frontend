$(document).ready(function(){
  let _html=""

  listaproduto=async()=>{
      const url = "http://localhost:5000/produto";
      const response = await fetch(url,
      {
        method: "GET",
        headers:{
              "Content-type":"application/json",
                },
      //   body:JSON.stringify(_data)
      }
      )
      .then((response)=> response.json())
      .then((data)=>{
      
        let produto=data.produto;
        let i=1;
        produto.map((p)=>{
                  _html+=' <div class="card card-1"  >';
                  _html+= ' <div class="card-body"><h5 class="card-title">'+p.nome+'</h5></div>';      

                  _html+= ' <img src="/frontend/img/4844484_compressed_resized_resized.jpg" class="card-img-top" alt="...">';

                  _html+= ' <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="24px" fill="red"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>';

                  _html+= ' <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="24px" fill="green"> <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg>';

                  _html+= ' <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24"width="24px" fill="blue"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z" /></svg>';
                  _html +='  </div>';
                  if(i>0 && i<3){
                    $(".linha-1").html(_html);
                    i++;
                  }
                  if(i>2 && i<7){
                    $(".linha-2").html(_html);
                    i++;
                  }
                  if(i>4 && i<6){
                    $(".linha-3").html(_html);
                    i++;
                  }else{
                   
                  }
  
             


        })
    
       //   $("#like"+id).html(data.reacao);
          });

  };
  listaproduto();


  async function logar(){
    const logado = JSON.parse(sessionStorage.getItem('login')||0);
    const email=document.getElementById("email").value;
    const senha=document.getElementById("senha").value;
    
   
     const url = "http://localhost:5000/usuario";
     const _data={
       email:email,
       senha:senha
     }
   
      const response = await fetch(url,
       {
         method: "get",
         headers:{
           "Content-type":"application/json",
         },
         body:JSON.stringify(_data)
       }
      )
          .then((response) => response.json())
     
          .then((data) => {
                    if(data.usuario.length==0){
                     alert("Usuário ou senha incorretos!!!!")
                    }else{
                     $("#exampleModal").modal("hide");
                     sessionStorage.setItem("LOGIN",JSON.stringify(data.usuario));
                     const usuario=JSON.parse(sessionStorage.getItem('LOGIN')||0);
                     const nome = usuario[0].nome;
                     const id = usuario[0].id;
                     window.location.reload();
                    // $("#log-in").html("<h6>Usuário:"+ nome+ "</h6>");
                     
                    }
                
               })
               .catch((error) => {
               console.error('Error:', error);
               });
 }
 $('#acesso').click(function(){
   $('#exampleModal').modal('show')
 });
 
 $('#btn-logar').click(function(){
     logar();
 })
 $(function(){
   montarProdutos();
 const usuario=JSON.parse(sessionStorage.getItem('login')||0);
 if(usuario!==0){
    const id= usuario[0].id;
    const nome = usuario[0].nome;
    $("#log-in").append("<h6>Usuário: "+nome+"</h6>");
    $("#id").val(id);
    return id;
 }else{
 
  return 0;
 }
 })
 

 listausuario();


 
});


