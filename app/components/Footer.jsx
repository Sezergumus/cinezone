import React from "react";
import Link from "next/link";

export default function Footer(props) {
  return (
    <div
      className={`footer w-full ${props.page !== "checkout" ? "mt-24" : ""}`}
    >
      <div className="footer-container">
        {props.page !== "checkout" ? (
          <div className="footer-upper bg-[#404040] w-full">
            <p className="text-white text-center py-8">No upcoming events</p>
          </div>
        ) : null}
        <div className="footer-middle bg-[#4C4C4C] w-full">
          <div className="footer-middle-container flex flex-col gap-8 py-4">
            <div className="footer-links flex w-full gap-4 text-white justify-center items-center">
              <Link href="/">FAQs</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Policies</Link>
            </div>
            <div className="footer-social flex w-full gap-2 items-center justify-center">
              <Link href="/">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.1654 12.0743C24.1654 5.40402 18.7531 0 12.0827 0C5.40777 0 0 5.40402 0 12.0743C0 18.0994 4.41699 23.0952 10.1948 24V15.5653H7.12654V12.0751H10.1948V9.41345C10.1948 6.38808 11.9959 4.71729 14.7568 4.71729C16.0791 4.71729 17.4633 4.95274 17.4633 4.95274V7.92378H15.9371C14.4388 7.92378 13.9706 8.85577 13.9706 9.8104V12.0743H17.3213L16.7829 15.5646H13.9706V23.9992C19.7439 23.0944 24.1654 18.0987 24.1654 12.0736V12.0743Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.23407 0.072C8.51497 0.0133309 8.92325 0 12.1848 0C15.4471 0 15.8547 0.0139963 17.1349 0.072C18.4138 0.130004 19.2871 0.333338 20.051 0.63C20.8521 0.931429 21.5779 1.40372 22.1777 2.014C22.7885 2.61338 23.2612 3.33868 23.5627 4.13933C23.8596 4.90267 24.0624 5.77534 24.1211 7.05266C24.1799 8.33267 24.1932 8.74067 24.1932 12C24.1932 15.2593 24.1792 15.6673 24.1211 16.9474C24.0631 18.2246 23.8596 19.0973 23.5627 19.8607C23.2559 20.6494 22.8449 21.3193 22.1777 21.986C21.578 22.5963 20.8521 23.0687 20.051 23.37C19.2871 23.6666 18.4138 23.8693 17.1357 23.928C15.8547 23.9867 15.4464 24 12.1848 24C8.92325 24 8.51497 23.986 7.23407 23.928C5.95586 23.87 5.08258 23.6666 4.31872 23.37C3.5295 23.0633 2.85904 22.6526 2.19192 21.986C1.5811 21.3866 1.10845 20.6613 0.806951 19.8607C0.510083 19.0973 0.307273 18.2246 0.248564 16.9474C0.189854 15.6673 0.176514 15.26 0.176514 12C0.176514 8.74 0.19052 8.33267 0.248564 7.05334C0.306608 5.77534 0.510083 4.90267 0.806951 4.13933C1.10859 3.33874 1.5812 2.61347 2.19192 2.014C2.7917 1.40361 3.51751 0.931287 4.31872 0.63C5.08258 0.333338 5.95586 0.130669 7.23407 0.072ZM17.0375 2.232C15.7713 2.17466 15.3911 2.162 12.1848 2.162C8.97862 2.162 8.59836 2.17466 7.33215 2.232C6.16134 2.28533 5.52556 2.48066 5.10259 2.64533C4.54221 2.86267 4.14193 3.12266 3.72164 3.54266C3.30202 3.96266 3.04117 4.36267 2.82369 4.92266C2.6589 5.34534 2.46344 5.98067 2.41006 7.15067C2.35269 8.416 2.34001 8.796 2.34001 12C2.34001 15.204 2.35269 15.584 2.41006 16.8493C2.46344 18.0193 2.6589 18.6547 2.82369 19.0774C3.01606 19.5986 3.3229 20.0701 3.72164 20.4574C4.10907 20.8558 4.58096 21.1624 5.10259 21.3547C5.52556 21.5194 6.16134 21.7147 7.33215 21.768C8.59836 21.8254 8.97796 21.838 12.1848 21.838C15.3917 21.838 15.7713 21.8254 17.0375 21.768C18.2083 21.7147 18.8441 21.5194 19.2671 21.3547C19.8275 21.1373 20.2278 20.8774 20.6481 20.4574C21.0468 20.0702 21.3536 19.5986 21.546 19.0774C21.7108 18.6547 21.9062 18.0193 21.9596 16.8493C22.0171 15.584 22.0297 15.204 22.0297 12C22.0297 8.796 22.0171 8.416 21.9596 7.15067C21.9062 5.98067 21.7108 5.34534 21.546 4.92266C21.3285 4.36267 21.0684 3.96266 20.6481 3.54266C20.2278 3.12334 19.8275 2.86267 19.2671 2.64533C18.8441 2.48066 18.2083 2.28533 17.0375 2.232ZM10.6516 15.6992C11.1377 15.9004 11.6587 16.004 12.1848 16.004C13.2476 16.004 14.2667 15.5821 15.018 14.8312C15.7696 14.0804 16.1917 13.0619 16.1917 12C16.1917 10.9381 15.7696 9.91964 15.018 9.16874C14.2667 8.41785 13.2476 7.99599 12.1848 7.99599C11.6587 7.99599 11.1377 8.09956 10.6516 8.30078C10.1654 8.502 9.72372 8.79693 9.35166 9.16874C8.97959 9.54055 8.68445 9.98193 8.48309 10.4677C8.28174 10.9535 8.1781 11.4742 8.1781 12C8.1781 12.5258 8.28174 13.0465 8.48309 13.5323C8.68445 14.0181 8.97959 14.4595 9.35166 14.8312C9.72372 15.203 10.1654 15.498 10.6516 15.6992ZM7.82042 7.63856C8.97795 6.48183 10.5479 5.83199 12.1848 5.83199C13.8219 5.83199 15.3918 6.48183 16.5493 7.63856C17.7068 8.79528 18.3571 10.3642 18.3571 12C18.3571 13.6358 17.7068 15.2047 16.5493 16.3615C15.3918 17.5181 13.8219 18.168 12.1848 18.168C10.5479 18.168 8.97795 17.5181 7.82042 16.3615C6.66289 15.2047 6.0126 13.6358 6.0126 12C6.0126 10.3642 6.66289 8.79528 7.82042 7.63856ZM19.7258 6.75096C19.9993 6.47752 20.153 6.10668 20.153 5.72C20.153 5.3333 19.9993 4.96246 19.7258 4.68903C19.4521 4.41561 19.081 4.262 18.694 4.262C18.3071 4.262 17.936 4.41561 17.6624 4.68903C17.3887 4.96246 17.235 5.3333 17.235 5.72C17.235 6.10668 17.3887 6.47752 17.6624 6.75096C17.936 7.02439 18.3071 7.178 18.694 7.178C19.081 7.178 19.4521 7.02439 19.7258 6.75096Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4421 0H1.97724C0.998564 0 0.204346 0.775 0.204346 1.72933V22.2683C0.204346 23.224 0.998564 24 1.97724 24H22.4421C23.4215 24 24.221 23.224 24.221 22.2683V1.72933C24.221 0.775 23.4215 0 22.4421 0ZM7.32729 20.4513H3.76348V8.99833H7.32729V20.4513ZM5.54539 7.43233C4.40359 7.43233 3.48062 6.50767 3.48062 5.36767C3.48062 4.22933 4.40359 3.30467 5.54539 3.30467C6.68451 3.30467 7.60982 4.22933 7.60982 5.36767C7.60982 6.50767 6.68451 7.43233 5.54539 7.43233ZM20.6685 20.4513H17.1104V14.882C17.1104 13.5533 17.0844 11.845 15.2588 11.845C13.4048 11.845 13.1223 13.292 13.1223 14.7857V20.4517H9.56151V8.99833H12.9789V10.5623H13.0276C13.5032 9.66233 14.6654 8.71267 16.3986 8.71267C20.0031 8.71267 20.6689 11.084 20.6689 14.169L20.6685 20.4513Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="31"
                  height="24"
                  viewBox="0 0 31 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.7221 2.85952C29.5985 3.33564 28.3957 3.66321 27.1279 3.81176C28.4215 3.06159 29.4105 1.87497 29.882 0.461361C28.6687 1.14418 27.3265 1.63875 25.8993 1.91834C24.7614 0.740946 23.1347 0 21.3295 0C17.8689 0 15.0642 2.71003 15.0642 6.05029C15.0642 6.53103 15.1244 6.99239 15.2284 7.42976C10.0228 7.19446 5.40808 4.77693 2.32175 1.1248C1.77952 2.0143 1.47117 3.04775 1.47117 4.17255C1.47117 6.27728 2.5795 8.12272 4.25489 9.20784C3.23056 9.17924 2.26638 8.90519 1.42153 8.45398V8.52687C1.42153 11.4621 3.579 13.9091 6.44291 14.4664C5.92072 14.6002 5.36322 14.6777 4.79712 14.6777C4.39522 14.6777 4.01145 14.6399 3.62865 14.5716C4.43436 16.9744 6.74075 18.7239 9.4901 18.7765C7.35267 20.3958 4.64342 21.361 1.72415 21.361C1.22678 21.361 0.730375 21.3379 0.232056 21.2798C3.01672 22.9961 6.30353 24 9.85382 24C21.3734 24 27.6683 14.7774 27.6683 6.79031C27.6683 6.53564 27.6683 6.27636 27.6482 6.01615C28.8768 5.17001 29.9403 4.09781 30.7804 2.88258L30.7221 2.85952Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-lower bg-[#555555] w-full">
          <p className="text-white text-center py-4">© 2023 Cinezone Company</p>
        </div>
      </div>
    </div>
  );
}
