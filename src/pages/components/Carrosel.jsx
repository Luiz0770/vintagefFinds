import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/769767224911069236/1171093154284458004/pexels-the-cactusena-18877432.jpg?ex=655b6c7d&is=6548f77d&hm=d457da57a99fb2049dd485b9d53b7583fa928581753816161a4cad703a8c9354&" height={600} 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/769767224911069236/1171093155387555860/pexels-chris-f-18845898.jpg?ex=655b6c7e&is=6548f77e&hm=16b26181c317ca58df745604c7012b1662488066dcd636bb17d58cb1a04d632a&" height={600}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/769767224911069236/1171093158243860491/acima-veja-objetos-vintage-natureza-morta.jpg?ex=655b6c7e&is=6548f77e&hm=e632f22c497966f29ddab7f4c26003788f23ce20f74bb7e3883714077a1bdc99&" height={600}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;