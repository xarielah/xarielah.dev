import LoadFromBottom from '../../animation/load-from-bottom';

interface PoppingCardProps {
  additionalDelay?: number;
}

const PoppingCard = ({ additionalDelay = 0 }: PoppingCardProps) => {
  return (
    <LoadFromBottom initialY={0}>
      <div className="h-[300px] w-[230px] lg:h-[400px] lg:w-[300px] rounded-xl mx-auto flex justify-center items-center">
        <LoadFromBottom delay={additionalDelay + 0.3} initialY={300}>
          <div className="lg:w-60 lg:h-60 w-44 h-44 rounded-full dark:bg-slate-100 bg-purple-700/80 shadow-xl shadow-slate-900/5 dark:shadow-gray-100/10 flex items-center justify-center mt-20">
            <LoadFromBottom delay={additionalDelay + 0.6}>
              <img src="/images/memoji.png" className="w-36 h-36  lg:w-48 lg:h-48" />
            </LoadFromBottom>
          </div>
        </LoadFromBottom>
      </div>
    </LoadFromBottom>
  );
};

export default PoppingCard;
