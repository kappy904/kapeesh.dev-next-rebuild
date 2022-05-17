import Link from "next/link";
import styles from "./Hello.module.css";
import Header from "../Header/Header";

export default function Hello(): JSX.Element {
  return (
    <div className="modal z-50  fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-white opacity-95" />

      <Link href="/home">
        <div className="cursor-pointer modal-container fixed w-full h-full z-50  overflow-hidden flex justify-center items-center">
          <Header title="ElzanneBrettBeccaTimFreyElzanneBrettBeccaTimFreyElzanneBrettBeccaTimFreyElzanneBrettBeccaTimFrey" />
          <div className="flex justify-center items-center relative">
            <div className={styles.logoWrapper}>
              <i className={`${styles.strip} ${styles.stripOrange}`} />
              <i className={`${styles.strip} ${styles.stripPurple}`} />
              <i className={`${styles.strip} ${styles.stripBlue}`} />
            </div>
            <h4 className={`${styles.heading}  bold text-2xl`}>
              <span>👋</span> hello sourcegraph
            </h4>
            <br />

            <p
              className={`${styles.button} bg-blue  text-white font-bold py-2 px-4 ml-2 rounded-full`}
            >
              ENTER
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
