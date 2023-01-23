import Link from 'next/link';

interface ISuccessRequest {
  userEmail: string;
}

const SuccessRequest = ({ userEmail = '' }: ISuccessRequest) => {
  return (
    <section className="flex flex-col space-y-8 items-center">
      <div>
        <h2 className="text-5xl font-light text-center md:block hidden dark:text-gray-400 italic md:text-3xl">
          just wanted to say...
        </h2>
        <h1 className="text-5xl text-center dark:text-blue-500 font-bold md:text-8xl">
          Thanks again!
        </h1>
      </div>
      <p className="bg-slate-100 dark:bg-slate-600/20 px-2">
        An email was sent to:{' '}
        <span className="text-purple-600 font-bold dark:text-blue-500">{userEmail}</span>
      </p>
      <p className="px-4 text-xl md:max-w-3xl md:text-3xl font-light">
        I wanted to thank you for your interest in my CV again, you're awesome, this made my day.
        <br />
        <br />
        And say, if you're a recruiter, I would really like to hear from you, but if you're just a
        wondering developer interested, I'm open for any collabs of any type! 🚀
        <br />
        <br />
      </p>
      <Link href="/">
        <button className="classic-btn mx-auto">Home</button>
      </Link>
    </section>
  );
};

export default SuccessRequest;
