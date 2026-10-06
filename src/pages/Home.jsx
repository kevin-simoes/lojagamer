import Gamecard from "../components/Gamecard"
import ImagemJogo from "../assets/imagem.jpg"

const Home = () => {

  const games = [
    { id: 1, titulo: "Jogo 1", preco: "R$ 100,00", imagem: ImagemJogo },
    { id: 2, titulo: "Jogo 2", preco: "R$ 200,00", imagem: ImagemJogo },
    { id: 3, titulo: "Jogo 3", preco: "R$ 400,00", imagem: ImagemJogo },
    { id: 4, titulo: "Jogo 4", preco: "R$ 600,00", imagem: ImagemJogo },
  ];
  return (
    <main className="pc[5%] mt-10 mb-16 grow">
      <h2 className="titulo text 3xl">JOGOS EM DESTAQUE</h2>

      {/* é aqui que os card ficam lado a lado */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {games.map((jogo) => (
          <Gamecard
            key={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco}
            imagem={jogo.imagem}
          />
        ))}
      </section>

    </main>
  )
}

export default Home