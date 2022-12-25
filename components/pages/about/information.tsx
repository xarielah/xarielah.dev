import GeneralContainer from '../../layout/general-container';
import RestictWidth from '../../layout/restrict-width';
import ProfileTags from './profile-tags';

const Information = () => {
    return (
        <section>
            <RestictWidth className='mx-auto'>
                <img
                    src='/images/me.jpg'
                    className='rounded-full w-[12em] mx-auto h-[12em] ring-2 p-1 ring-gray-200 shadow-md'
                    alt='my-avatar'
                />
                <h4 className='text-center my-3 font-medium text-xl'>
                    @xarielah
                </h4>
                <ProfileTags />
                <article className='my-10'>
                    <h5 className='text-center paragraph-title'>Heading</h5>
                    <p className='paragraph'>
                        Track work across the enterprise through an open,
                        collaborative platform. Link issues across Jira and
                        ingest data from other software development tools, so
                        your IT support and operations teams have richer
                        contextual information to rapidly respond to requests,
                        incidents, and changes.
                    </p>
                    <div className='inline-flex justify-center items-center w-full'>
                        <hr className='my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700' />
                        <div className='absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-800'>
                            <svg
                                aria-hidden='true'
                                className='w-5 h-5 text-gray-700 dark:text-gray-300'
                                viewBox='0 0 24 27'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                                    fill='currentColor'
                                />
                            </svg>
                        </div>
                    </div>
                    <p className='text-gray-500 dark:text-gray-400'>
                        Deliver great service experiences fast - without the
                        complexity of traditional ITSM solutions.Accelerate
                        critical development work, eliminate toil.
                    </p>
                </article>
            </RestictWidth>
        </section>
    );
};

export default Information;

// <GeneralContainer className="mt-14">
//   <img
//     src="/images/me.jpg"
//     className="rounded-full w-[18em] mx-auto lg:mx-0 h-[18em] border-2 border-stone-300 shadow-xl"
//     alt="my-avatar"
//   />
//   <div className="w-full justify-between flex space-x-14 flex-col lg:flex-row xl:space-y-0">
//     <div className="flex flex-col justify-center">
//       <div className="info-container relative">
//         <h2 className="info-title">Hi There, Nice Meeting You!</h2>
//         <p>
//           My name is Ariel, I'm {getAge()}, born in Fabruary @ Northern of
//           Israel.
//           <br />I am a Self-Taught Web-Developer. Anything I know is what I
//           have learned with my bare hands, great motivation, hugh amount of
//           passion and the great resources the internet has to offer these
//           days.
//         </p>
//       </div>

//       <div className="info-container">
//         <h2 className="info-title">A Little More...</h2>
//         <p>
//           I am a{" "}
//           <span className="text-teal-700 font-medium">Vegeterian</span>,
//           which means that I do not consume meat nor chicken as part as my
//           diet <b>(A little secret? I'm 80% Pizza!)</b>. I'm also an{" "}
//           <span className="text-orange-700 font-medium">Animal Lover</span>,
//           my heart can't help it!. And as well I do love music much! I{" "}
//           <span className="font-medium text-purple-700">Play Guitar</span>{" "}
//           in my spare time for fun <b>(also self-taught :wink_face:)</b>.
//         </p>
//       </div>
//       <div className="info-container">
//         <h2 className="info-title">What do I do currently?</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Accusantium, vel quo. Nobis, temporibus. Delectus repellat
//           voluptatum optio eveniet, tempore sed deserunt sint quae et.
//           Aperiam veritatis voluptas possimus facilis at? Molestiae
//           distinctio vero dolores sunt obcaecati? Expedita, temporibus
//           reprehenderit. Nemo eaque sapiente ipsum excepturi et molestiae
//           nostrum! Odio inventore enim beatae qui, ea deleniti corrupti
//           facere ratione suscipit soluta. Ducimus!
//         </p>
//       </div>
//     </div>
//   </div>
// </GeneralContainer>
