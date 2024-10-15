import FullColorButton from "./components/FullColorButton";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function FullButtons() {
  return (
    <div className="flex flex-col gap-5">
      <FullColorButton />
      <FullColorButton
        color="#FF0000"
        bgColor="#000000"
        hoverColor="#ff0000ce"
        borderRadius="rounded-lg"
        textColorBall="text-white"
        ballBorder="rounded-[6px]"
        ballHeight="h-[35px]"
        spinnerColor="border-white"
        title="Delete"
        ArrowIcon={IoIosArrowForward}
      />
      <FullColorButton
        color="#e2e2e2"
        bgColor="#f0f0f0"
        hoverColor="#d8d8d8a9"
        textColor="text-black"
        title="Send"
        buttonClass="border-1 border-neutral-500/10"
        ballClass="border-1"
        ArrowIcon={MdOutlineKeyboardDoubleArrowRight}
      />
      <FullColorButton
        color="#ceeb4c"
        bgColor="#000000"
        hoverColor="#b0bb14ce"
        borderRadius="rounded-none"
        textColorBall="text-black"
        ballBorder="rounded-none"
        ballHeight="h-[35px]"
        spinnerColor="border-black"
        title="Buy"
        ArrowIcon={MdOutlineAttachMoney}
        rotateIcon={false}
      />
    </div>
  );
}
