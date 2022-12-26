import GeneralContainer from '../../layout/general-container';
import RestictWidth from '../../layout/restrict-width';
import ProfileTags from './profile-tags';

const Information = () => {
  return (
    <section>
      <RestictWidth className="mx-auto">
        <img
          src="/images/me.jpg"
          className="rounded-full w-[12em] mx-auto h-[12em] ring-2 p-1 ring-gray-200 shadow-md"
          alt="my-avatar"
        />
        <h4 className="text-center my-3 font-medium text-xl">@xarielah</h4>
        <ProfileTags />
        <article className="my-10">
          <h5 className="text-center paragraph-title">Heading</h5>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate qui, obcaecati
            libero perspiciatis ipsum hic, incidunt, et dicta praesentium suscipit asperiores.
            Ratione sapiente doloribus nam libero nesciunt ducimus fugit odit!
          </p>
          <div className="inline-flex justify-center items-center w-full">
            <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
            <div className="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-800">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta rerum, necessitatibus
            nam aspernatur consectetur dolores maxime corporis harum nobis in repellendus quasi,
            nihil distinctio earum beatae laborum maiores pariatur inventore.
          </p>
        </article>
      </RestictWidth>
    </section>
  );
};

export default Information;
