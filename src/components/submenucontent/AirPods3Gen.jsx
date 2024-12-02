import { useState } from "react";

export const AirPods3Gen = () => {
  const [colors, setColors] = useState({
    pcolor: "#6E6E73",
    scolor: "#BCBCBB",
  });

  const { pcolor } = colors;

  return (
    <a
      href=""
      onMouseOver={() => setColors({ pcolor: "#FFD952", scolor: "#8B7500" })}
      onMouseLeave={() => setColors({ pcolor: "#6E6E73", scolor: "#BCBCBB" })}
      className="hover:text-[#FFCC00] transition-colors duration-300 flex flex-col justify-center items-center text-center"
    >
      <svg
        width="84"
        height="63"
        viewBox="0 0 84 63"
        fill="none"
        className="h-[36px]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: "fill 0.3s ease" }}
      >
        <g clipPath="url(#clip0_418_31)">
          <path
            d="M35.5208 11.7923C34.8544 10.655 29.7698 4.06626 21.3566 1.07108C12.9435 -1.9241 6.68293 3.22893 6.68293 3.22893C2.12902 6.4788 0.900184 11.7417 0.900184 11.7417C0.364222 13.3902 0.0891892 16.2406 0.847293 19.1189C1.6054 21.9972 2.66322 23.48 4.30283 25.6065C5.30071 26.9008 6.95796 28.3312 8.10217 29.2523C8.12332 27.2235 8.01225 24.0295 7.21713 22.231C7.08314 21.9292 7.22242 21.5786 7.52742 21.4477C7.83066 21.3152 8.18679 21.453 8.31902 21.7548C9.0066 23.309 9.2358 25.6832 9.29398 27.6649C9.33629 28.415 9.36097 29.2645 9.36097 30.2274V56.8212C9.36097 56.8212 9.34334 59.1064 9.6078 60.0135C9.87225 60.9206 10.2954 61.7056 11.4413 62.3319C12.307 62.8081 14.5355 63.1082 16.7322 62.9616C17.4409 62.9145 18.3348 62.8866 18.9325 62.7157C21.3813 62.0179 21.8573 60.0641 21.9279 59.2268C21.9984 58.3895 21.9808 56.8561 21.9808 56.8561C21.9808 56.8561 21.9737 55.3402 21.9649 53.1178L21.9102 36.1358C21.9102 35.766 21.9102 35.5567 21.9102 35.5567C21.9102 34.1594 21.9402 32.9086 21.9878 31.787C22.083 28.4167 22.3757 24.1708 23.2272 22.6758C23.3912 22.3897 23.7579 22.2885 24.047 22.449C24.3362 22.6095 24.4384 22.9741 24.2762 23.2602C23.2924 24.9889 23.1303 32.2004 23.1514 35.5741C24.5583 35.5357 26.9225 35.2933 28.9659 34.2082C31.5434 32.8406 36.0515 29.7024 37.7017 23.3474C39.195 17.5978 36.189 12.9262 35.5226 11.7888L35.5208 11.7923ZM12.337 20.8477V13.3135C12.337 12.4709 12.3617 11.5342 13.0757 10.7056C13.6681 10.0165 14.6095 9.54202 15.6867 9.54202C17.039 9.54202 18.1303 10.2189 18.6751 11.2341C18.9325 11.7138 19.0435 12.2703 19.0435 13.1477V21.2925C19.0435 21.9972 19.0259 22.8223 18.6909 23.4957C18.5076 23.8655 18.2167 24.3348 17.411 24.7674C16.6635 25.1703 15.8842 25.2035 15.6867 25.2035C14.9639 25.2035 13.557 24.9139 12.8024 23.7103C12.2911 22.8939 12.337 21.7199 12.337 20.8477ZM21.0992 60.4933C20.8172 61.4823 20.1296 61.751 19.6571 61.751H11.6476C11.6476 61.751 11.1822 61.7545 10.8102 61.4213C10.4382 61.0881 10.112 60.5543 10.1931 60.0013C10.2636 59.5268 10.7908 59.5792 10.7679 59.5792L20.5263 59.5757C20.5739 59.5774 21.3831 59.5042 21.101 60.4915L21.0992 60.4933Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M82.8124 11.7226C82.8124 11.7226 81.58 6.46834 77.0261 3.22196C77.0261 3.22196 70.7674 -1.92061 62.3542 1.06934C53.941 4.05929 48.8564 10.6375 48.19 11.7714C47.5236 12.9088 44.5176 17.5734 46.0109 23.3125C47.6593 29.6588 52.1709 32.7918 54.7467 34.1559C56.2805 34.9705 57.9166 35.3683 59.3182 35.5148C59.7907 35.5654 60.1945 35.5741 60.5577 35.5776C61.284 35.5881 61.9152 35.5113 61.9152 35.5113C62.5781 35.4433 63.0541 35.3439 63.0541 35.3439C63.0541 35.3439 66.5396 34.7804 69.5826 33.2034C72.9764 31.4468 74.3816 30.2676 74.3816 30.2676L74.7853 29.9658C74.7853 29.9658 75.591 29.3779 76.7617 28.3295C77.6661 27.5166 78.6534 26.4996 79.4115 25.5646C80.7232 23.9458 82.1072 21.9606 82.8653 19.0875C83.6252 16.2145 83.3484 13.3676 82.8142 11.7208M58.2481 31.0979C58.0912 31.3718 57.8514 31.5916 57.5728 31.7416C57.1427 31.9754 56.4357 32.2248 55.5418 32.0608C54.0203 31.7835 52.1868 30.5903 50.1681 27.8254C49.075 26.3269 48.0049 24.0312 48.0084 22.4072C48.0084 21.6379 48.2076 20.9959 48.4597 20.5354C48.5585 20.3522 49.0574 19.4957 50.2598 19.5254C51.4833 19.5533 52.1938 19.965 52.9854 20.4831C55.6811 22.2397 57.6751 25.814 58.2534 27.5149C58.7717 29.0465 58.8123 30.1123 58.2481 31.0979ZM77.7455 13.8176L74.1154 16.4412C72.6168 17.4181 70.4712 17.7932 68.5759 15.5411C67.8707 14.702 67.5093 13.2385 67.8425 12.0348C68.1122 11.0562 68.6993 10.2921 69.6514 9.60308L73.0858 7.08936C74.3622 6.10899 75.5346 6.06887 76.6647 6.58173C77.3294 6.88526 78.1086 7.45918 78.5441 8.13427C79.8822 10.2154 79.7994 12.4552 77.7455 13.8159"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M74.2281 56.8492V31.9213C73.4436 32.4586 72.109 33.3011 70.1115 34.3338C66.9503 35.9684 63.4014 36.551 63.3079 36.5667C63.3079 36.5667 62.7808 36.6801 62.072 36.7516C62.072 36.7516 62.0368 36.7568 61.9698 36.7621C62.065 37.2313 62.139 37.7215 62.139 38.0687C62.139 38.967 62.0773 49.4528 62.0773 49.4528C62.0773 49.4528 62.1232 50.9303 62.0315 51.5513C61.9416 52.1741 61.6101 53.5313 61.6101 53.5313V56.8823C61.6101 56.8823 61.5925 58.4122 61.663 59.246C61.7335 60.0781 62.2078 62.0249 64.6584 62.7192C65.2561 62.8866 66.1482 62.9163 66.8587 62.9616C69.0536 63.1099 71.2803 62.8081 72.1478 62.3371C73.2937 61.7126 73.7151 60.9311 73.9795 60.0275C74.244 59.1239 74.2264 56.8492 74.2264 56.8492M72.7772 61.423C72.4034 61.758 71.9397 61.7527 71.9397 61.7527H63.9303C63.456 61.7527 62.7684 61.4824 62.4863 60.495C62.2043 59.5077 63.0135 59.5827 63.0611 59.5774L72.8195 59.5827C72.7965 59.5844 73.3255 59.5303 73.396 60.0048C73.4753 60.5578 73.1509 61.0899 72.7772 61.4248"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
        </g>
        <defs>
          <clipPath id="clip0_418_31">
            <rect
              width="83"
              height="63"
              fill="white"
              transform="translate(0.380127)"
            />
          </clipPath>
        </defs>
      </svg>
      <p className=" leading-[18px] pt-[3px]">AirPods 3nd Gen</p>
    </a>
  );
};
