import { inter, roboto } from "@/app/ui/fonts";
import HomeLogo from "@/app/ui/home-logo";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/module-css/login.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <div className="flex shrink-0 h-20 items-center justify-between px-8 gap-8 rounded-lg bg-blue-500 p-4 md:h-52">
        <HomeLogo />
        <div className="text-center">
          <h3
            className={`${inter.className} antialiased hidden md:block md:text-5xl mb-3 font-bold text-white`}
          >
            Customer Dashboard
          </h3>
          <p
            className={`${roboto.className} font-normal text-xl text-gray-300 uppercase tracking-wider flex`}
          >
            customer tracking system
          </p>
        </div>
      </div>
      <div className="p-10 w-[480px] flex flex-col gap-2 mt-10">
        <h1 className="text-4xl">
          Welcome to <b className="font-semibold text-red-500">CTS</b>{" "}
        </h1>
        <h3 className="font-light text-2xl">
          Verification required to acccess your Dashboard
        </h3>
        <code className="text-blue-500 text-lg uppercase">
          powered by blockChain.
        </code>
        <Link href={"/auth/login"} className={styles.loginBtn}>
          <span>Log in</span>
          <ChevronRightIcon className="w-5 h-5 md:w-6" />
        </Link>
      </div>
    </main>
  );
}
