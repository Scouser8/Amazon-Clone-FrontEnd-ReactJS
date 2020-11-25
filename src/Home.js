import React from "react";
import "./Home.css";
import Product from "./Product";
import img1 from "./imgs/PS4.jpg";
import img2 from "./imgs/oneplus.jpg";
import img3 from "./imgs/Acer.jpg";
import img4 from "./imgs/iphone.jpg";
import img5 from "./imgs/spirderman.jpg";
import img6 from "./imgs/kitchen.jpg";
import img7 from "./imgs/sanitizer.jpg";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220__.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="Newest Flagship Sony Play Station 4 1TB HDD Only on Playstation PS4 Console Slim Bundle - Included 3X Games (The Last of Us, God of War, Horizon Zero Dawn) 1TB Hard Drive Incredible Games -Jet Black"
            image={img1}
            price={489.81}
            rating={5}
          />
          <Product
            id={2}
            title="OnePlus 8 Pro Onyx Black,​ 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 120Hz Fluid Display,Quad Camera, Wireless Charge, with Alexa Built-in"
            image={img2}
            price={899.99}
            rating={4}
          />
          <Product
            id={3}
            title='Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6" Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD'
            image={img3}
            price={1188.09}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={4}
            title="Apple iPhone 11 Pro Max [64GB, Space Gray] + Carrier Subscription [Cricket Wireless]"
            image={img4}
            price={1099}
            rating={5}
          />
          <Product
            id={5}
            title="Marvel's Spider-Man: Miles Morales Ultimate Launch Edition – PlayStation 5"
            image={img5}
            price={69.88}
            rating={3}
          />
          <Product
            id={6}
            title="Mueller Austria Ultra-Stick 500 Watt 9-Speed Immersion Multi-Purpose Hand Blender Heavy Duty Copper Motor Brushed 304 Stainless Steel With Whisk, Milk Frother Attachments"
            image={img6}
            price={34.97}
            rating={4}
          />
          <Product
            id={7}
            title="Germ-X Hand Sanitizer, Original, 32 Fl Oz (Pack of 4), 128 Fl Oz"
            image={img7}
            price={24.6}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
