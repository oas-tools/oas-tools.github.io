import ISASVG from "../public/img/isa.svg";
import Image from "next/image";

const ISA = ({ height = 30 }) => (
    <Image className="isalogo" src={ISASVG} height={height} width={70}></Image>
);

export default ({ locale = "en-US" }) => {
  switch (locale) {
    case "es-ES":
      return (
        <a
          href="https://isa.us.es"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center no-underline text-current font-semibold"
        >
          <span className="mr-2" style={{height:30}}>Desarrollado por</span>
          <span className="mr-2">
            <ISA />
          </span>
        </a>
      );
    default:
      return (
        <a
          href="https://isa.us.es"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center no-underline text-current font-semibold"
        >
          <span className="mr-2" style={{height:30}}>Powered by</span>
          <span className="mr-2">
            <ISA />
          </span>
        </a>
      );
  }
}