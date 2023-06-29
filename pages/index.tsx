import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kapeesh.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My professional portfolio"
          key="desc"
        />
        <meta property="og:title" content="Kapeesh.dev | Portfolio" />
        <meta
          property="og:description"
          content="I'm a Senior FrontEnd Engineer and JavaScript Developer Consultant.
            I pride myself in creating performant software solutions, leadership
            and knowledge sharing for Product, Software and E-Commerce
            companies."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/D4E03AQGCkFhJSwr3Og/profile-displayphoto-shrink_400_400/0/1667496899170?e=1693440000&v=beta&t=nagi5F3hh7y6ndxNmmGfjqvqy_2sdi75RHzO4giKLwM"
        />
      </Head>
      <div className="container flex md:flex-row flex-col md:flex-row-reverse justify-center md:pt-40 pt-20 py-2 px-5 gap-3 max-w-screen-xl">
        <div className="md:w-1/3 w-full">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQGCkFhJSwr3Og/profile-displayphoto-shrink_400_400/0/1667496899170?e=1693440000&v=beta&t=nagi5F3hh7y6ndxNmmGfjqvqy_2sdi75RHzO4giKLwM"
            alt="Kapeesh Manilal"
            width={200}
            height={300}
            className="object-cover shadow-2xl rounded-full mx-auto"
          />
        </div>
        <div className="md:w-2/3 w-full">
          <h1 className="text-4xl block font-secondary text-blue">
            Kapeesh Manilal
          </h1>
          <p>
            <strong className="font-medium uppercase">
              Currently working @ Passionate People
            </strong>
          </p>
          <p className="my-5">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm a Senior FrontEnd Engineer and JavaScript Developer Consultant.
            I pride myself in creating performant software solutions, leadership
            and knowledge sharing for Product, Software and E-Commerce
            companies. My framework of choice is React as I firmly believe in
            its methodologies, best practices and thriving community. In our
            ever changing technological landscape I am always learning.
          </p>
          <div className="flex md:flex-row flex-col">
            <strong className="uppercase font-bold leading-9">
              Front-end:
            </strong>
            <div className="flex flex-wrap justify-start my-1">
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                HTML5
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                CSS3
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                JavaScript/Typescript
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                NgXs
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                RxJs
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                SASS
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                GSAP.js
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <strong className="uppercase font-bold leading-9">Back-end:</strong>
            <div className="flex flex-wrap justify-start my-1">
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                NodeJS
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                NextJS
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                MySQL
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Firebase
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Kubernetes
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                GraphQL
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <strong className="uppercase font-bold leading-9">CI/CD:</strong>
            <div className="flex flex-wrap justify-start my-1">
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Netlify
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Jenkins
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Circle CI
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Azure DevOps
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Pantheon
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Vercel
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <strong className="uppercase font-bold leading-9">
              Frameworks:
            </strong>
            <div className="flex flex-wrap justify-start my-1">
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                React / NextJS
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Angular / Scully
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Svelte / SvelteKit
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <strong className="uppercase font-bold leading-9">Testing:</strong>
            <div className="flex flex-wrap justify-start my-1">
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Jest
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Testing library
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Enzyme
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Storybook
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Jasmine
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                BrowserStack
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <strong className="uppercase font-bold leading-9">
              Analytics:
            </strong>
            <div className="flex flex-wrap justify-start my-1">
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                GA
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                GTM
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                MixPanel
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <strong className="uppercase font-bold leading-9">
              Cloud Services:
            </strong>
            <div className="flex flex-wrap justify-start my-1">
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                GitHub
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                Bitbucket
              </span>
              <span className="bg-blue p-1 text-white text-xs py-1 px-3 rounded-full md:mx-1 mr-2 my-1">
                GitLab
              </span>
            </div>
          </div>
          <hr className="my-5" />
          <a
            className="custom-button md:my-10 mb-10"
            href="mailto:kapeeshmanilal@gmail.com"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </>
  );
}
