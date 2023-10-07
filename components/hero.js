import Image from 'next/image';
import Container from './container';
import heroImg from '../public/img/hero.png';

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Get value from your documentation
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Stop wasting time wondering around tons of documentation of your
              organization, find the information you need immediately just as if
              you were talking with a co-worker.
              {/* Say goodbye to the hassle of navigating through endless documentation in your organization. Discover the information you need instantly, as simple as having a chat with a colleague! */}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={'object-cover'}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
