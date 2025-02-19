import Cards from "./Cards";
import Bubble from "./Bubble";

//images
import heroFood from "./assets/hero_food.png";
import menuRamen from "./assets/menu_ramen.png";
import menuSushi from "./assets/menu_sushi.png";
import menuOnigiri from "./assets/menu_onigiri.png";
import menuDrink from "./assets/menu_drink.png";
import reviewTalk from "./assets/review_talk.png";

//icons
import { FaTiktok, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const App = () => {
  return (
    <div className="">
      <section className="hero relative" id="hero">
        <div className="responsive-container min-h-dvh z-20 flex flex-row items-center lg:flex-col">
          <div className="w-1/2 lg:w-4/5 sm:w-full">
            <h1 className="text-title mx-auto">
              Haku Tento: Authentic Japanese Street Food
            </h1>
            <p className="text-desc mt-2 mx-auto lg:mt-4">
              Indulge in the genuine taste of Japan's bustling street markets.
              Our dishes are crafted with traditional recipes and the freshest
              ingredients, bringing you an unforgettable culinary experience
              straight from the heart of Japan.
            </p>

            <div className="mx-auto mt-6 flex justify-center gap-8 sm:flex-col sm:gap-2 ">
              <button className="button-full">
                <a href="#menu" className="relative z-10">
                  See Menu
                </a>
              </button>
              <button className="button-outline">
                <a href="#" className="relative z-10">
                  Order Now
                </a>
              </button>
            </div>
          </div>

          <img src={heroFood} className="w-[40%] mt-12 mx-auto sm:w-3/4" />
        </div>
      </section>

      <section className="menu relative" id="menu">
        <div className="responsive-container min-h-dvh">
          <h1 className="text-title">The Menu</h1>
          <p className="text-desc w-2/3 mt-2 mx-auto lg:mt-4 sm:min-w-full sm:mt-2">
            Discover the authentic flavors of Japan with our carefully crafted
            street food dishes!
          </p>

          <div className=" mt-20 flex justify-between md:flex-wrap md:gap-y-12 sm:mt-12">
            <Cards image={menuRamen} food={`Ramen`} variety={5} />
            <Cards image={menuSushi} food={`Sushi`} variety={6} />
            <Cards image={menuOnigiri} food={`Onigiri`} variety={3} />
            <Cards image={menuDrink} food={`Drinks`} variety={7} />
          </div>

          <button className="button-full block mt-16 mx-auto lg:mt-12">
            <a href="#" className="relative z-10">
              See More
            </a>
          </button>
        </div>
      </section>

      <section className="testimonials relative" id="testimonials">
        <div className="responsive-container min-h-dvh">
          <h1 className="text-title ">Testimonials</h1>
          <p className="text-desc mt-2">
            Let's hear what other has said about us!
          </p>
          <div className="relative mt-20 flex items-center lg:h-dvh lg:mt-12 md:min-h-[950px]">
            <Bubble
              text={`"Haku Tento delivers an authentic Japanese street food experience that is hard to find outside of Japan. The takoyaki is perfectly crispy on the outside and tender on the inside, and the matcha desserts are a must-try! Highly recommend this place."`}
              author={`Nina S.`}
            />
            <Bubble
              text={`"The food at Haku Tento is simply outstanding. The ramen is rich and flavorful, and the sushi is incredibly fresh. It's like a trip to Japan without leaving the city. I'll definitely be coming back!"`}
              author={`Rizky P.`}
            />
            <Bubble
              text={`"Haku Tento truly captures the essence of Japanese street food. The tempura is light and crispy, and the variety of dishes ensures there's something for everyone. A fantastic spot for anyone craving authentic Japanese cuisine."`}
              author={`Lisa T.`}
            />
            <Bubble
              text={`"From the moment you step into Haku Tento, you can feel the passion for authenticity. The sashimi salad was fresh and beautifully presented, and the staff were friendly and attentive. This is my go-to place for Japanese food!"`}
              author={`Andi W.`}
            />
            <img
              src={reviewTalk}
              className="w-1/2 mx-auto md:w-[60%] sm:min-w-[80%]"
            />
          </div>
        </div>
      </section>

      <section className="footer bg-secondary relative">
        <div className="responsive-container pb-4">
          <div className=" flex justify-between md:flex-col">
            <div className="flex flex-col w-1/4 md:w-1/2 sm:min-w-full">
              <h1 className="text-title text-left text-primary">Haku Tento</h1>
              <p className="text-desc mt-4 text-left text-primary md:mt-2">
                Jl. Kemang Raya No. 10, Bangka, Mampang Prapatan, Jakarta
                Selatan, DKI Jakarta
              </p>
            </div>

            <hr className="hidden my-12 border-primary md:block" />

            <div className="flex flex-row gap-24 lg:gap-16 md:justify-between sm:flex-col">
              <div className="text-desc text-primary text-left flex flex-col gap-4 sm:text-center">
                <h2 className="text-subtitle text-center text-primary">
                  Website Menu
                </h2>
                <a href="#hero">Hero</a>
                <a href="#menu">Menu</a>
                <a href="#testimonials">Testimonials</a>
              </div>

              <div className=" flex flex-col gap-4 text-left sm:text-center">
                <h2 className="text-subtitle text-center text-primary">
                  Socials
                </h2>
                <a href="#">
                  <FaInstagram className="text-icon" />
                  <p className="text-desc inline text-primary">@Haku_TentoID</p>
                </a>
                <a href="#">
                  <FaTwitter className="text-icon" />{" "}
                  <p className="text-desc inline text-primary">@Haku_Tento</p>
                </a>
                <a href="#">
                  <FaTiktok className="text-icon" />{" "}
                  <p className="text-desc inline text-primary">Haku_TentoID</p>
                </a>
              </div>

              <div className="text-desc text-primary text-left flex flex-col gap-4 sm:text-center">
                <h2 className="text-subtitle text-center text-primary">
                  Contact Us
                </h2>
                <a href="#">
                  <FaPhone className="text-icon" />
                  <p className="text-desc inline text-primary">
                    +(62) 823-4324-4343
                  </p>{" "}
                </a>
                <a href="#">
                  <FaMailBulk className="text-icon" />
                  <p className="text-desc inline text-primary">
                    HakuTento@gmail.com
                  </p>{" "}
                </a>
              </div>
            </div>
          </div>

          <hr className=" mt-12 mb-4 border-primary" />
          <p className="text-desc text-white">
            Copyright &copy; 2024 Haku Tento. All Right Reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
