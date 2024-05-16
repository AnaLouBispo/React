export const Lista = () => {
    const lista = [
        {
            nome: "New Project",
            resposavel: "Ana Bea",
            valor: 1000
        },
        {
            nome: "New Project",
            resposavel: "Ana Bea",
            valor: 1000
        },
        {
            nome: "New Project",
            resposavel: "Ana Bea",
            valor: 1000
        },
        {
            nome: "New Project",
            resposavel: "Ana Bea",
            valor: 1000
        }
    ]
    console.log(lista);
  return (
    <main className="Lista">
      <section className="content-list">  
        <h1>Lista</h1>
        <img src="http://lorempixel.com.br/300/250/?1" alt="img" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur <br />
          commodi asperiores esse molestiae nobis molestias error quisquam iure <br />
          voluptates beatae distinctio perferendis optio provident voluptatum, <br />
          omnis libero sint eius excepturi? <br />
        </p>
      </section>
        <section className="list-names"> 
            <h1>Lista nomes</h1>
            {lista.map((item,index) =>{
              return(
                <div key={index} className="listagem">
                <strong>Nome: </strong> <span> {item.nome} </span>
                <br />
                <strong>Responsavel: </strong> <span> {item.resposavel} </span>
                <br />
                <strong>Valor: </strong> <span>{item.valor}</span>
            </div>
              )
            })}
        </section>

  

    </main>
  );
};
