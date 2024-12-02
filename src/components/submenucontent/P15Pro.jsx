import { useState } from "react";

export const P15Pro = () => {
  const [colors, setColors] = useState({
    pcolor: "#6E6E73",
    scolor: "#1D1D1F",
  });
  const { pcolor, scolor } = colors;
  return (
    <a
      href=""
      onMouseOver={() => setColors({ pcolor: "#FFD952", scolor: "#8B7500" })}
      onMouseLeave={() => setColors({ pcolor: "#6E6E73", scolor: "#1D1D1F" })}
      className="hover:text-[#FFCC00] hover:fill-[#FFCC00] transition-colors duration-300 flex flex-col justify-center items-center"
    >
      <svg
        width="97"
        height="128"
        viewBox="0 0 97 128"
        fill="none"
        className="h-[70px]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: "fill 0.3s ease" }}
      >
        <g clipPath="url(#clip0_697_16)">
          <path
            d="M50.0133 0.265991H8.85902C3.96695 0.265991 0 4.11887 0 8.87228V119.344C0 124.098 3.96695 127.951 8.85902 127.951H50.0171C54.9092 127.951 58.8761 124.098 58.8761 119.344V8.87228C58.8761 4.11887 54.9092 0.265991 50.0171 0.265991H50.0133Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M26.5085 4.25186H11.3983C7.19313 4.25186 3.78418 7.65422 3.78418 11.8512V28.2355C3.78418 32.4325 7.19313 35.8348 11.3983 35.8348H26.5085C30.7137 35.8348 34.1226 32.4325 34.1226 28.2355V11.8512C34.1226 7.65422 30.7137 4.25186 26.5085 4.25186Z"
            fill="#F5F5F7"
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M12.1254 18.9566C15.4181 18.9566 18.0873 16.2739 18.0873 12.9645C18.0873 9.6552 15.4181 6.97244 12.1254 6.97244C8.83279 6.97244 6.16357 9.6552 6.16357 12.9645C6.16357 16.2739 8.83279 18.9566 12.1254 18.9566Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M25.5835 13.2495C23.9731 13.2495 22.6635 11.9348 22.6635 10.3162C22.6635 8.6975 23.9731 7.38281 25.5835 7.38281C27.1938 7.38281 28.5035 8.6975 28.5035 10.3162C28.5035 11.9348 27.1938 13.2495 25.5835 13.2495ZM25.5835 8.14655C24.3919 8.14655 23.4249 9.11927 23.4249 10.3162C23.4249 11.5131 24.3919 12.4858 25.5835 12.4858C26.7751 12.4858 27.7421 11.5131 27.7421 10.3162C27.7421 9.11927 26.7751 8.14655 25.5835 8.14655Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M29.9729 28.3989C30.3808 28.3989 30.7115 28.0654 30.7115 27.6541C30.7115 27.2428 30.3808 26.9094 29.9729 26.9094C29.565 26.9094 29.2344 27.2428 29.2344 27.6541C29.2344 28.0654 29.565 28.3989 29.9729 28.3989Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M25.3245 26.2292C28.6172 26.2292 31.2864 23.5465 31.2864 20.2371C31.2864 16.9278 28.6172 14.245 25.3245 14.245C22.0319 14.245 19.3627 16.9278 19.3627 20.2371C19.3627 23.5465 22.0319 26.2292 25.3245 26.2292Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M12.1254 33.4335C15.4181 33.4335 18.0873 30.7507 18.0873 27.4414C18.0873 24.132 15.4181 21.4492 12.1254 21.4492C8.83279 21.4492 6.16357 24.132 6.16357 27.4414C6.16357 30.7507 8.83279 33.4335 12.1254 33.4335Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M25.6938 32.7647C26.8944 32.7647 27.8677 31.7865 27.8677 30.5799C27.8677 29.3732 26.8944 28.3951 25.6938 28.3951C24.4933 28.3951 23.52 29.3732 23.52 30.5799C23.52 31.7865 24.4933 32.7647 25.6938 32.7647Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M88.377 9.97797H48.3305C43.0383 9.97797 38.7482 14.2598 38.7482 19.5418V119.53C38.7482 124.812 43.0383 129.094 48.3305 129.094H88.377C93.6692 129.094 97.9593 124.812 97.9593 119.53V19.5418C97.9593 14.2598 93.6692 9.97797 88.377 9.97797Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M88.377 11.1179C93.0368 11.1179 96.8172 14.891 96.8172 19.5418V119.53C96.8172 124.181 93.0368 127.954 88.377 127.954H48.3306C43.6707 127.954 39.8903 124.181 39.8903 119.53V19.5418C39.8903 14.891 43.6707 11.1179 48.3306 11.1179H88.377ZM88.377 8.83807H48.3306C42.4182 8.83807 37.6061 13.6409 37.6061 19.5418V119.53C37.6061 125.431 42.4182 130.234 48.3306 130.234H88.377C94.2893 130.234 99.1015 125.431 99.1015 119.53V19.5418C99.1015 13.6409 94.2893 8.83807 88.377 8.83807Z"
            fill="#F5F5F7"
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M88.3922 13.6219H48.46C45.2115 13.6219 42.5781 16.2502 42.5781 19.4924V119.363C42.5781 122.606 45.2115 125.234 48.46 125.234H88.3922C91.6407 125.234 94.2742 122.606 94.2742 119.363V19.4924C94.2742 16.2502 91.6407 13.6219 88.3922 13.6219Z"
            fill="#F5F5F7"
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M73.8606 11.9728H62.7821C62.6475 11.9728 62.5385 12.0817 62.5385 12.216V12.3262C62.5385 12.4605 62.6475 12.5694 62.7821 12.5694H73.8606C73.9952 12.5694 74.1043 12.4605 74.1043 12.3262V12.216C74.1043 12.0817 73.9952 11.9728 73.8606 11.9728Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M73.7236 16.1449H62.9991C61.7691 16.1449 60.772 17.1401 60.772 18.3677C60.772 19.5953 61.7691 20.5905 62.9991 20.5905H73.7236C74.9536 20.5905 75.9507 19.5953 75.9507 18.3677C75.9507 17.1401 74.9536 16.1449 73.7236 16.1449Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M73.6704 19.4164C74.2507 19.4164 74.7211 18.9469 74.7211 18.3677C74.7211 17.7885 74.2507 17.319 73.6704 17.319C73.0901 17.319 72.6196 17.7885 72.6196 18.3677C72.6196 18.9469 73.0901 19.4164 73.6704 19.4164Z"
            fill="#F5F5F7"
            style={{ transition: "fill 0.3s ease" }}
          />
        </g>
        <defs>
          <clipPath id="clip0_697_16">
            <rect width="97" height="128" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p>iPhone 15 Pro</p>
    </a>
  );
};