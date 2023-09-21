import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

type Props = {
  label: string;
  onClick: Function;
  icon?: any;
};

const ButtonOutline = ({ label, onClick, icon = null }: Props) => {
  const router = useRouter();
  const goToLink = (link: string) => {
    router.push(link);
  };
  return (
    <div
      className={twMerge(
        "inline-flex justify-center items-center w-full min-w-[280px] text-white py-2 text-primary text-xl font-semibold border-4 border-white hover:border-blue rounded-lg outline-none focus:outline-none transition-all duration-300 cursor-pointer transform hover:scale-105",
        icon ? "space-x-2" : "space-x-0"
      )}
      onClick={() => {
        goToLink("/bookacall");
      }}
    >
      {icon}
      <div className=" text-white">{label}</div>
    </div>
  );
};

export default ButtonOutline;
