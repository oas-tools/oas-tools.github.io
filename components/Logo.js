import Logo from "../public/img/oaslogo.png";
import Image from "next/image";

export default ({ size = 35}) => (
    <Image className="oaslogo" src={Logo} height={size} width={size}></Image>
);
  