type Product = {
    title: string;
    img: string;
    harga: number;
    link: string;
    badge?: string;
  };
  
  type CategoryProducts = {
    [key: string]: Product[];
  };
  
  type Products = {
    [key: string]: CategoryProducts;
  };
  
  const products: Products = {
    futsal: {
      bola: [
        { title: 'Proteam Bola Futsal Warrior', img: '/sample/futsal/b1.png', harga: 5000, link: 'proteamfutsalwarrior1', badge: 'Best Seller' },
        { title: 'Proteam Bola Futsal Warrior', img: '/sample/futsal/b2.png', harga: 5000, link: 'proteamfutsalwarrior2', badge: 'New Arrivals' },
        { title: 'Bola Futsal Nike Flight', img: '/sample/futsal/b3.png', harga: 5000, link: 'nikeflight', badge: 'Best Seller' },
        { title: 'Proteam Bola Futsal Warrior', img: '/sample/futsal/b4.png', harga: 5000, link: 'proteamfutsalwarrior3', badge: 'Best Seller' },
      ],
      rompi: [
        { title: 'Rompi Futsal Ortus Hijau Toska', img: '/sample/futsal/rompi.png', harga: 5000, link: '#' },
        { title: 'Rompi Futsal Adidas Hitam', img: '/sample/futsal/rompi2.png', harga: 5000, link: '#' },
        { title: 'Rompi Futsal Adidas Hijau Toska', img: '/sample/futsal/rompi3.png', harga: 5000, link: '#' },
        { title: 'Rompi Futsal Adidas Hijau Muda', img: '/sample/futsal/rompi4.png', harga: 5000, link: '#' },
      ],
      lapangan: [
        { title: 'Lapangan Futsal Ortus Hijau Toska', img: '/sample/futsal/lap1.jpg', harga: 5000, link: '#' },
        { title: 'Lapangan Futsal Adidas Hitam', img: '/sample/futsal/lap2.jpg', harga: 5000, link: '#' },
      ],
    },
    volly: {
      bola: [
        { title: 'Basketball Nike Elite', img: '/sample/volly/b1.png', harga: 7000, link: 'nikeelite', badge: 'Best Seller' },
        { title: 'Basketball Spalding TF-1000', img: '/sample/volly/b2.png', harga: 8000, link: 'spaldingtf1000', badge: 'New Arrivals' },
        { title: 'Basketball Wilson Evolution', img: '/sample/volly/b3.png', harga: 7500, link: 'wilsonevolution', badge: 'Best Seller' },
        { title: 'Basketball Molten GG7X', img: '/sample/volly/b4.png', harga: 7200, link: 'moltengg7x', badge: 'Best Seller' },
      ],
      jersey: [
        { title: 'Basketball Jersey Nike', img: '/sample/volly/jersey1.png', harga: 6000, link: '#' },
        { title: 'Basketball Jersey Adidas', img: '/sample/volly/jersey2.png', harga: 6200, link: '#' },
        { title: 'Basketball Jersey Puma', img: '/sample/volly/jersey3.png', harga: 6300, link: '#' },
        { title: 'Basketball Jersey Puma', img: '/sample/volly/jersey4.png', harga: 6300, link: '#' },
      ],
      lapangan: [
        { title: 'Lapangan Basket Ortus Green', img: '/sample/volly/lap1.jpg', harga: 6000, link: '#' },
        { title: 'Lapangan Basket Adidas Court', img: '/sample/volly/lap2.jpg', harga: 6200, link: '#' },
      ],
    },
    badminton: {
      raket: [
        ],
      shuttlecock: [
       ],
      lapangan: [
      ],
    },
  };
  
  export default products;
  