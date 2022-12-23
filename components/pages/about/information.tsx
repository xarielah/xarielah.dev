import GeneralContainer from '../../layout/general-container';
import SocialLinks from './social-icons';

const Information = () => {
    return (
        <GeneralContainer>
            <img
                src='/images/me.jpg'
                className='rounded-full w-[18em] mx-auto lg:mx-0 h-[18em] border-2 border-stone-300 shadow-xl'
                alt='my-avatar'
            />
            <div className='w-full justify-between flex space-x-14 flex-col lg:flex-row xl:space-y-0'>
                <div className='space-y-5 flex flex-col justify-center'>
                    <div className='flex items-center relative flex-col-reverse lg:flex-row justify-center lg:justify-end'>
                        <div className='absolute w-full z-[-1] right-0'>
                            <h2 className='text-3xl text-center font-bold mt-9 lg:mt-0'>
                                Ariel - @xarielah
                            </h2>
                        </div>
                        <SocialLinks />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium, vel quo. Nobis, temporibus. Delectus
                        repellat voluptatum optio eveniet, tempore sed deserunt
                        sint quae et. Aperiam veritatis voluptas possimus
                        facilis at? Molestiae distinctio vero dolores sunt
                        obcaecati? Expedita, temporibus reprehenderit. Nemo
                        eaque sapiente ipsum excepturi et molestiae nostrum!
                        Odio inventore enim beatae qui, ea deleniti corrupti
                        facere ratione suscipit soluta. Ducimus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium, vel quo. Nobis, temporibus. Delectus
                        repellat voluptatum optio eveniet, tempore sed deserunt
                        sint quae et. Aperiam veritatis voluptas possimus
                        facilis at? Molestiae distinctio vero dolores sunt
                        obcaecati? Expedita, temporibus reprehenderit. Nemo
                        eaque sapiente ipsum excepturi et molestiae nostrum!
                        Odio inventore enim beatae qui, ea deleniti corrupti
                        facere ratione suscipit soluta. Ducimus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium, vel quo. Nobis, temporibus. Delectus
                        repellat voluptatum optio eveniet, tempore sed deserunt
                        sint quae et. Aperiam veritatis voluptas possimus
                        facilis at? Molestiae distinctio vero dolores sunt
                        obcaecati? Expedita, temporibus reprehenderit. Nemo
                        eaque sapiente ipsum excepturi et molestiae nostrum!
                        Odio inventore enim beatae qui, ea deleniti corrupti
                        facere ratione suscipit soluta. Ducimus!
                    </p>
                </div>
            </div>
        </GeneralContainer>
    );
};

export default Information;
