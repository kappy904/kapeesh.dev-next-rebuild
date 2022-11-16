import Zoom from "react-reveal/Zoom";
import styles from "./ClientLogos.module.css";
import { Clientlogo } from "../Portfolio/Portfolio.types";

export default function ClientLogos({ clientLogos }: Clientlogo): JSX.Element {
  return (
    <div
      className={`${styles.clientWrapper} relative flex flex-wrap justify-center w-16 h-16 rounded-full p-2 relative bg-cover-wrapper mb-4`}
    >
      {clientLogos?.[0].fields?.list.map((logo) => (
        <div key={logo.metadata?.tags[0]?.sys.id}>
          {logo.metadata?.tags[0]?.sys.id === "clientSmall" && (
            <Zoom>
              <div
                className={`${logo.metadata?.tags[0]?.sys.id} w-32 h-32 bg-purple rounded-full p-4 relative bg-cover`}
                style={{ backgroundImage: `url(${logo.fields.file.url})` }}
              />
            </Zoom>
          )}
          {logo.metadata?.tags[0]?.sys.id === "clientLarge" && (
            <Zoom>
              <div
                className={`${logo.metadata?.tags[0]?.sys.id}  w-32 h-32 bg-purple rounded-full p-6 relative bg-cover`}
                style={{ backgroundImage: `url(${logo.fields.file.url})` }}
              />
            </Zoom>
          )}
          {logo.metadata?.tags === null && (
            <Zoom>
              <div
                className="w-16 h-16 bg-purple rounded-full p-2 relative bg-cover"
                style={{ backgroundImage: `url(${logo.fields.file.url})` }}
              />
            </Zoom>
          )}
        </div>
      ))}
    </div>
  );
}
