import GeneralContainer from "../../layout/general-container";
import SocialLinks from "./social-icons";

const Information = () => {
  const getAge = (): number => {
    const dateOfBirth = new Date("02/21/1997");
    const today = new Date();

    const ms = today.getTime() - dateOfBirth.getTime();
    const date = new Date(ms);

    return Math.abs(date.getUTCFullYear() - 1970);
  };

  return (
    <GeneralContainer className="mt-14">
      <img
        src="/images/me.jpg"
        className="rounded-full w-[18em] mx-auto lg:mx-0 h-[18em] border-2 border-stone-300 shadow-xl"
        alt="my-avatar"
      />
      <div className="w-full justify-between flex space-x-14 flex-col lg:flex-row xl:space-y-0">
        <div className="flex flex-col justify-center">
          <div className="info-container relative">
            <h2 className="info-title">Hi There, Nice Meeting You!</h2>
            {/* <SocialLinks className="absolute -top-8 right-0" /> */}
            <p>
              My name is Ariel, I'm {getAge()}, born in Fabruary @ Northern of
              Israel.
              <br />I am a Self-Taught Web-Developer. Anything I know is what I
              have learned with my bare hands, great motivation, hugh amount of
              passion and the great resources the internet has to offer these
              days.
            </p>
          </div>

          <div className="info-container">
            <h2 className="info-title">A Little More...</h2>
            <p>
              I am a{" "}
              <span className="text-teal-700 font-medium">Vegeterian</span>,
              which means that I do not consume meat nor chicken as part as my
              diet <b>(A little secret? I'm 80% Pizza!)</b>. I'm also an{" "}
              <span className="text-orange-700 font-medium">Animal Lover</span>,
              my heart can't help it!. And as well I do love music much! I{" "}
              <span className="font-medium text-purple-700">Play Guitar</span>{" "}
              in my spare time for fun <b>(also self-taught :wink_face:)</b>.
            </p>
          </div>
          <div className="info-container">
            <h2 className="info-title">What do I do currently?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, vel quo. Nobis, temporibus. Delectus repellat
              voluptatum optio eveniet, tempore sed deserunt sint quae et.
              Aperiam veritatis voluptas possimus facilis at? Molestiae
              distinctio vero dolores sunt obcaecati? Expedita, temporibus
              reprehenderit. Nemo eaque sapiente ipsum excepturi et molestiae
              nostrum! Odio inventore enim beatae qui, ea deleniti corrupti
              facere ratione suscipit soluta. Ducimus!
            </p>
          </div>
        </div>
      </div>
    </GeneralContainer>
  );
};

export default Information;
