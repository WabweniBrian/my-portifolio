/* eslint-disable no-unreachable */

interface TooltipProps {
  position?: "top" | "bottom" | "left" | "right";
  content: string;
  hidden?: boolean;
}

const Tooltip = ({ position, content, hidden }: TooltipProps) => {
  const getPostion = () => {
    switch (position) {
      case "bottom":
        return "top-full left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-top-[0.33rem]";
        break;
      case "top":
        return "bottom-full mt-4 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-bottom-[0.33rem]";
        break;
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:-right-1";
        break;
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:-left-1";
        break;

      default:
        return "bottom-full mt-4 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-bottom-[0.33rem]";
        break;
    }
  };

  return (
    <div
      className={` text-sm  w-fit ${content.length > 8 && "!w-[120px]"} ${
        hidden && "md:!hidden"
      }  !text-white  absolute z-[999] px-4 py-[3px] rounded bg-hover-bg before:absolute before:w-[0.65rem] before:h-[0.65rem] before:bg-hover-bg before:rotate-45 hidden group-hover:flex-center-center ${getPostion()}`}
    >
      <span className="flex-shrink-0 capitalize"> {content}</span>
    </div>
  );
};

export default Tooltip;
