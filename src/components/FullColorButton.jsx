import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdFileDownloadDone } from "react-icons/md";
import PropTypes from "prop-types";

export default function FullColorButton({
  loading: externalLoading = false,
  success: externalSuccess = false,
  onClick,
  ballClass = "",
  buttonClass = "",
  borderRadius = "rounded-full",
  color = "#E0FF58",
  bgColor = "#1F2229",
  hoverColor = "#e0ff58c9",
  width = "w-32",
  textColorBall = "text-black",
  ballBorder = "rounded-full",
  ballHeight = "h-9",
  spinnerColor = "border-black",
  textColor = "text-white",
  title = "Submit",
  ArrowIcon = FaArrowRight,
  SuccessIcon = MdFileDownloadDone,
  rotateIcon = true,
}) {
  const [hover, setHover] = useState(false);
  const [status, setStatus] = useState({
    loading: externalLoading,
    success: externalSuccess,
  });

  const handleClick = () => {
    if (onClick) onClick();

    setStatus({ loading: true, success: false });
    setHover(true);

    setTimeout(() => {
      setStatus({ loading: false, success: true });

      setTimeout(() => {
        setStatus({ loading: false, success: false });
        setHover(false);
      }, 1500);
    }, 2000);
  };

  return (
    <button
      onMouseEnter={() => !status.loading && setHover(true)}
      onMouseLeave={() => !status.loading && setHover(false)}
      onClick={handleClick}
      disabled={status.loading || status.success}
      className={`relative border ${buttonClass} border-neutral-400/10 ${width} overflow-hidden ${borderRadius} bg-opacity-100 py-2 pl-6 shadow-md transition-all duration-300 ease-in-out ${status.loading ? "cursor-not-allowed bg-opacity-70" : "bg-opacity-100"}`}
      style={{ backgroundColor: bgColor }}
    >
      <span
        className={`font-normal ${textColor} transition-all duration-300 ease-in-out ${hover ? "ml-32" : "ml-0"}`}
      >
        {title}
      </span>
      <span
        className={`absolute ${ballClass} left-[2.5px] top-1/2 flex ${ballHeight} ${hover ? "w-[121px]" : "w-9"} -translate-y-1/2 items-center justify-center ${ballBorder} transition-all duration-300 ease-in-out`}
        style={{
          backgroundColor: status.loading ? hoverColor : color,
        }}
      >
        {status.loading && !status.success && (
          <div
            className={`h-4 w-4 animate-spin rounded-full border-[2px] border-solid ${spinnerColor} border-t-transparent`}
          ></div>
        )}

        {status.success && (
          <span
            className={`flex ${textColorBall} items-center justify-center gap-1 text-sm`}
          >
            <SuccessIcon className="text-lg" />
            Done
          </span>
        )}

        {!status.loading && !status.success && (
          <ArrowIcon
            className={`text-md transition-all duration-300 ease-in-out ${hover && rotateIcon ? "-rotate-90" : ""} ${textColorBall}`}
          />
        )}
      </span>
    </button>
  );
}

FullColorButton.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool,
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  width: PropTypes.string,
  textColorBall: PropTypes.string,
  ballBorder: PropTypes.string,
  ballHeight: PropTypes.string,
  spinnerColor: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
  buttonClass: PropTypes.string,
  ballClass: PropTypes.string,
  ArrowIcon: PropTypes.elementType,
  SuccessIcon: PropTypes.elementType,
  rotateIcon: PropTypes.bool,
};
