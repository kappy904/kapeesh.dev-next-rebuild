import styles from "./ClientLogos.module.css";
import { Clientlogo } from "../Portfolio/Portfolio.types";

export default function ClientLogos({ clientLogos }: Clientlogo): JSX.Element {
  return (
    <div
      className={`${styles.clientWrapper} relative flex flex-wrap justify-center w-16 h-16 p-2 relative bg-cover-wrapper md:mb-20`}
    >
      {clientLogos?.[0].fields?.list.map((logo) => (
        <div
          key={logo.sys.id}
          className={`${logo.metadata?.tags[0]?.sys.id} w-32 h-32 bg-purple p-4 relative bg-contain drop-shadow-xl`}
          style={{ backgroundImage: `url(${logo.fields.file.url})` }}
        />
      ))}
    </div>
  );
}
