import Link from 'next/link';
import AnimationLayout from '../../layout/animation-layout';

interface SuccessInquiryProps {
  name: string;
}

const SuccessInquiry = ({ name }: SuccessInquiryProps) => {
  return (
    <AnimationLayout>
      <div className="px-5 flex flex-col space-y-6 md:text-center">
        <h1 className="text-7xl font-bold text-purple-600 dark:text-blue-400 text-left md:text-center">
          Success!
        </h1>
        <p className="font-light text-2xl max-w-3xl mx-auto">
          <span className="font-medium">Thank you {name} for sending me a contact message!</span>{' '}
          <br />
          <br />
          I'm usually a quick responder but you can contact my via my{' '}
          <span className="font-normal text-purple-700 dark:text-blue-600">LinkedIn</span> icon at
          the bottom as well.
        </p>
        <p className="dark:text-gray-400">You can also...</p>
        <div>
          <Link href="/">
            <button className="classic-btn w-max mx-auto">Go Home</button>
          </Link>
        </div>
      </div>
    </AnimationLayout>
  );
};

export default SuccessInquiry;
