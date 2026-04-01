const DefaultTransactionIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="dollar">
      <defs>
        <linearGradient
          id="a"
          x1="8.501"
          x2="23.499"
          y1="28.988"
          y2="3.012"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3cacb6"></stop>
          <stop offset="1" stopColor="#8ccead"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm0,28c-7.168,0-13-5.832-13-13S8.832,3,16,3s13,5.832,13,13-5.832,13-13,13Zm-2.5-16c0,1.103,.897,2,2,2h1c2.206,0,4,1.794,4,4,0,1.858-1.28,3.411-3,3.858v1.142c0,.552-.448,1-1,1s-1-.448-1-1v-1h-3c-.552,0-1-.448-1-1s.448-1,1-1h4c1.103,0,2-.897,2-2s-.897-2-2-2h-1c-2.206,0-4-1.794-4-4s1.794-4,4-4v-1c0-.552,.448-1,1-1s1,.448,1,1v1h2c.552,0,1,.448,1,1s-.448,1-1,1h-4c-1.103,0-2,.897-2,2Z"
      ></path>
    </svg>
  );
};

export default DefaultTransactionIcon;
