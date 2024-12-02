import { useState } from "react";

export const AirPodsPro2Gen = () => {
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
        width="108"
        height="61"
        viewBox="0 0 108 61"
        fill="none"
        className="h-[34px]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: "fill 0.3s ease" }}
      >
        <g clipPath="url(#clip0_418_36)">
          <mask
            id="mask0_418_36"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="50"
            height="61"
          >
            <path d="M0.380127 0H49.3965V61H0.380127V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_418_36)">
            <path
              d="M34.5127 28.8219V5.62423C34.5581 4.84229 35.0859 4.50548 35.4943 4.36838C37.7567 3.85724 43.4917 3.14977 47.9442 7.5757C47.9627 7.5994 47.9761 7.62309 47.998 7.64848C49.0552 8.87386 49.3275 10.6273 49.3964 11.5463V22.9218C49.3292 23.8205 49.0653 25.5096 48.0703 26.7299C43.5455 31.3556 37.6407 30.5635 35.4187 30.0472C35.022 29.8966 34.5564 29.5581 34.5144 28.8236"
              fill={pcolor}
              style={{ transition: "fill 0.3s ease" }}
            />
            <path
              d="M19.0759 0.0490828C19.0759 0.0490828 9.6767 -0.873339 4.69976 5.22649C-0.277181 11.328 0.344726 19.5723 0.475831 21.5508C0.606936 23.5294 1.59022 27.7827 3.58705 32.2678L14.7209 58.6152C15.8336 61.1608 19.3045 61.5822 22.2022 60.2925C23.9991 59.492 28.2465 57.0987 26.806 53.4378L18.3952 33.3477L18.3145 33.1564C18.3061 33.1395 18.296 33.1242 18.2893 33.1073L18.1212 32.6977L16.7496 29.4346C16.7093 29.333 16.674 29.2247 16.6488 29.1096L16.6051 29.0013C16.516 28.8151 16.1748 28.0162 16.4471 27.1564C16.5731 26.757 16.8875 26.1985 17.6623 25.799C17.9934 25.6281 18.3985 25.7601 18.5666 26.0935C18.7364 26.427 18.6053 26.8349 18.2741 27.0041C17.4455 27.4306 17.6775 28.133 17.817 28.4157C17.8237 28.4292 17.8321 28.4495 17.8388 28.4631L19.5331 32.5894C19.5549 32.6419 19.5667 32.6943 19.5751 32.7485C22.5367 32.9635 29.1811 32.8162 33.0823 27.8537V6.59404C33.0823 6.59404 29.376 1.07306 19.0759 0.0490828Z"
              fill={pcolor}
              style={{ transition: "fill 0.3s ease" }}
            />
            <path
              d="M12.7745 33.6049C13.0889 33.0075 13.625 32.625 14.3243 32.5031C16.0034 32.2103 17.022 33.6523 17.3178 34.4478L22.72 47.3786C22.7587 47.4649 23.2259 48.5668 22.7234 49.4046C22.4141 49.9191 21.8258 50.2085 20.9753 50.2593C20.893 50.2644 20.8156 50.2678 20.7366 50.2678C18.1347 50.2678 17.1245 47.6308 17.1195 47.6139C17.096 47.5547 14.6302 41.6461 13.3393 38.7417C12.3879 36.6024 12.1829 34.7305 12.7745 33.6066"
              fill="#F5F5F7"
            />
          </g>
          <mask
            id="mask1_418_36"
            maskUnits="userSpaceOnUse"
            x="58"
            y="0"
            width="50"
            height="61"
          >
            <path d="M107.38 0H58.3655V61H107.38V0Z" fill="white" />
          </mask>
          <g mask="url(#mask1_418_36)">
            <path
              d="M73.2475 28.8219V5.62423C73.2021 4.84229 72.6744 4.50548 72.2659 4.36838C70.0035 3.85724 64.2685 3.14977 59.816 7.5757C59.7975 7.5994 59.7841 7.62309 59.7622 7.64848C58.705 8.87386 58.4327 10.6273 58.3638 11.5463V22.9218C58.431 23.8205 58.6949 25.5096 59.6899 26.7299C64.2147 31.3556 70.1195 30.5635 72.3416 30.0472C72.7382 29.8966 73.2038 29.5581 73.2458 28.8236"
              fill={pcolor}
              style={{ transition: "fill 0.3s ease" }}
            />
            <path
              d="M88.6841 0.0490828C88.6841 0.0490828 98.0833 -0.873339 103.06 5.22649C108.037 11.3263 107.415 19.5706 107.284 21.5491C107.153 23.5277 106.17 27.781 104.173 32.2661L93.0391 58.6135C91.9264 61.1591 88.4555 61.5805 85.5578 60.2908C83.7609 59.4903 79.5135 57.0971 80.954 53.4361L89.3648 33.346L89.4455 33.1547C89.4539 33.1378 89.464 33.1226 89.4707 33.1056L89.6388 32.696L91.0104 29.4329C91.0507 29.3313 91.086 29.223 91.1112 29.1079L91.1549 28.9996C91.244 28.8134 91.5852 28.0145 91.3129 27.1547C91.1869 26.7553 90.8725 26.1968 90.0977 25.7973C89.7666 25.6264 89.3615 25.7584 89.1934 26.0918C89.0236 26.4253 89.1547 26.8332 89.4859 27.0024C90.3145 27.4289 90.0825 28.1313 89.943 28.414C89.9363 28.4275 89.9279 28.4478 89.9212 28.4614L88.2269 32.5877C88.2051 32.6402 88.1933 32.6927 88.1849 32.7468C85.2233 32.9618 78.5789 32.8145 74.6777 27.8521V6.59405C74.6777 6.59405 78.3856 1.07306 88.6841 0.0490828Z"
              fill={pcolor}
              style={{ transition: "fill 0.3s ease" }}
            />
            <path
              d="M94.9872 33.6049C94.6729 33.0075 94.1367 32.6249 93.4375 32.5031C91.7584 32.2103 90.7398 33.6523 90.444 34.4478L85.0418 47.3786C85.0031 47.4649 84.5358 48.5668 85.0384 49.4046C85.3477 49.9191 85.936 50.2085 86.7865 50.2593C86.8688 50.2644 86.9461 50.2677 87.0251 50.2677C89.6271 50.2677 90.6373 47.6308 90.6423 47.6139C90.6658 47.5546 93.1316 41.6461 94.4225 38.7417C95.3738 36.6024 95.5789 34.7304 94.9872 33.6066"
              fill="#F5F5F7"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_418_36">
            <rect
              width="107"
              height="61"
              fill="white"
              transform="translate(0.380127)"
            />
          </clipPath>
        </defs>
      </svg>
      <p className="leading-[18px] pt-[3px]">AirPods Pro 2nd Gen</p>
    </a>
  );
};