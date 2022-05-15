import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./Portfolio.module.css";
import { Portfolio } from "./Portfolio.types";

export interface Props {
  portfolioCollection: Portfolio;
}

export default function PortfolioCollection({
  portfolioCollection,
}: Props): JSX.Element {
  return (
    <div className={`${styles.portfolioWrapper}`}>
      {portfolioCollection?.map((portfolio) => (
        <div
          key={portfolio.sys.id}
          className="flex container mx-auto justify-center items-center mb-20 md:mb-32"
        >
          <div className="flex-auto mx-8">
            {portfolio?.fields.video && (
              <i
                className={`${styles.circleLarge} bg-purple relative overflow-hidden block bg-cover mx-auto mb-4 md:mb-2`}
              >
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  width="100%"
                  controls
                  height="100%"
                  className={`${styles.videoPlayer} absolute  object-cover`}
                  loop
                  poster={portfolio.fields.videoCover.fields.file.url}
                >
                  <source
                    src={portfolio.fields.video.fields.file.url}
                    type="video/mp4"
                  />
                </video>
              </i>
            )}
            {!portfolio?.fields.video && (
              <i
                className={`${styles.circleLarge} bg-center bg-purple relative overflow-hidden rounded-full block bg-cover mx-auto mb-4 md:mb-2`}
                style={{
                  backgroundImage: `url(${portfolio?.fields.media?.[0].fields.file.url})`,
                }}
              />
            )}
          </div>
          <div className="px-3">
            <h2 className="font-secondary tracking-tighter leading-5 md:text-3xl text-2xl leading-none mb-4 font-extrabold text-blue md:leading-8">
              {portfolio?.fields.title}
            </h2>
            <div className="font-light font-primary leading-6 text-base tracking-wider mb-6">
              <ReactMarkdown>{portfolio?.fields.description}</ReactMarkdown>
            </div>
            <p className="font-bold font-primary mb-2 text-blue">
              My top learnings
            </p>
            <ul className="font-light font-primary leading-6 text-base tracking-wider list-disc pl-5 mb-6">
              <ReactMarkdown>{portfolio?.fields.learnings}</ReactMarkdown>
            </ul>
            <p className="font-bold font-primary mb-2 text-blue">Awards</p>
            {portfolio?.fields.awards && (
              <ul className="font-light font-primary leading-6 text-base tracking-wider  tracking-wider list-disc pl-5 mb-6">
                <ReactMarkdown>{portfolio?.fields.awards}</ReactMarkdown>
              </ul>
            )}
            <a
              className="font-bold font-primary mb-2 text-blue"
              href="mailto:kapeeshmanilal@gmail.com"
            >
              Ask me about this project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
