import Image from "next/image";
import * as React from "react";

export interface ITechnologiesProps {}

export function Technologies(props: ITechnologiesProps) {
  return (
    <div>
      <Image
        className="bg-white rounded-lg text-center"
        src="/java.svg"
        alt="java"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/javascript.svg"
        alt="javascript"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/java.svg"
        alt="java"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/mongodb_1.svg"
        alt="mongodb"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/java.svg"
        alt="java"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/mysql-official.svg"
        alt="mysql"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/expressjs.svg"
        alt="expressjs"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/nextjs.svg"
        alt="nextjs"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/nodejs.svg"
        alt="nodejs"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/reactjs.svg"
        alt="reactjs"
        width={50}
        height={50}
      />
      <Image
        className="bg-white rounded-lg text-center"
        src="/typescript.svg"
        alt="typescript"
        width={50}
        height={50}
      />
    </div>
  );
}
