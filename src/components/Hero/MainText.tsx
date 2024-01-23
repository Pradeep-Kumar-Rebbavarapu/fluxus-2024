import Image from "next/image";
import main_text from '../../../public/images/Hero/hero_text.png'
export default function MainText() {
  return (
    <div>
        <Image src={main_text} alt="main_text" placeholder="blur" />
    </div>
  )
}
