import { GoEye, GoEyeClosed } from 'react-icons/go';
import { ImLink } from 'react-icons/im';

export const svg = {
  showIm: () => <GoEye className='imported' />,
  hideIm: () => <GoEyeClosed className='imported' />,
  copyIm: () => <ImLink className='imported copy' />,
  show() {
    return (
      <svg
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>
      </svg>
    );
  },
  hide() {
    return (
      <svg
        viewBox="0 0 16 14"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.822.854a.5.5 0 1 0-.707-.708l-2.11 2.11C10.89 1.483 9.565.926 8.06.926c-5.06 0-8.06 6-8.06 6s1.162 2.323 3.258 4.078l-2.064 2.065a.5.5 0 1 0 .707.707L14.822.854zM4.86 9.403L6.292 7.97A1.999 1.999 0 0 1 6 6.925c0-1.11.89-2 2-2 .384 0 .741.106 1.045.292l1.433-1.433A3.98 3.98 0 0 0 8 2.925c-2.2 0-4 1.8-4 4 0 .938.321 1.798.859 2.478zm7.005-3.514l1.993-1.992A14.873 14.873 0 0 1 16 6.925s-3 6-7.94 6a6.609 6.609 0 0 1-2.661-.57l1.565-1.566c.33.089.678.136 1.036.136 2.22 0 4-1.78 4-4 0-.358-.047-.705-.136-1.036zM9.338 8.415l.152-.151a1.996 1.996 0 0 1-.152.151z"/>
      </svg>
    );
  },
  copy() {
    return (
      <svg
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.879 9.934c-0.208 0-0.416-0.079-0.575-0.238-1.486-1.486-1.486-3.905 0-5.392l3-3c0.72-0.72 1.678-1.117 2.696-1.117s1.976 0.397 2.696 1.117c1.486 1.487 1.486 3.905 0 5.392l-1.371 1.371c-0.317 0.317-0.832 0.317-1.149 0s-0.317-0.832 0-1.149l1.371-1.371c0.853-0.853 0.853-2.241 0-3.094-0.413-0.413-0.963-0.641-1.547-0.641s-1.134 0.228-1.547 0.641l-3 3c-0.853 0.853-0.853 2.241 0 3.094 0.317 0.317 0.317 0.832 0 1.149-0.159 0.159-0.367 0.238-0.575 0.238z"/>
        <path d="M4 15.813c-1.018 0-1.976-0.397-2.696-1.117-1.486-1.486-1.486-3.905 0-5.392l1.371-1.371c0.317-0.317 0.832-0.317 1.149 0s0.317 0.832 0 1.149l-1.371 1.371c-0.853 0.853-0.853 2.241 0 3.094 0.413 0.413 0.962 0.641 1.547 0.641s1.134-0.228 1.547-0.641l3-3c0.853-0.853 0.853-2.241 0-3.094-0.317-0.317-0.317-0.832 0-1.149s0.832-0.317 1.149 0c1.486 1.486 1.486 3.905 0 5.392l-3 3c-0.72 0.72-1.678 1.117-2.696 1.117z"/>
      </svg>
    );
  },
  check() {
    return (
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.123,46.143C-0.083,45.806 -0.026,45.371 0.262,45.1C0.549,44.829 0.988,44.796 1.312,45.022C8.904,50.297 27.386,63.14 31.786,66.198C32.336,66.58 33.081,66.511 33.552,66.035C39.972,59.54 82.607,16.406 98.579,0.247C98.88,-0.057 99.362,-0.084 99.694,0.186C100.025,0.455 100.098,0.932 99.861,1.288C85.175,23.383 41.06,89.75 34.525,99.581C34.348,99.848 34.047,100.006 33.727,100C33.407,99.994 33.112,99.826 32.944,99.553C28.591,92.468 6.977,57.295 0.123,46.143Z"/>
      </svg>
    );
  },
  ghostSq() {
    return (
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M39.848,99.705C39.716,99.896 39.498,100.007 39.267,100C39.037,99.992 38.826,99.867 38.707,99.667C37.09,96.947 32.335,88.946 31.104,86.875C30.934,86.589 30.585,86.468 30.277,86.588C28.189,87.401 20.545,90.378 17.925,91.399C17.721,91.478 17.491,91.453 17.307,91.331C17.124,91.209 17.011,91.006 17.003,90.784L15.008,36.109C15.01,35.92 15.007,35.73 15,35.541C15.195,15.879 30.79,0 50.001,0C69.33,0 85,16.077 85,35.908L82.998,90.784C82.99,91.006 82.877,91.209 82.694,91.331C82.51,91.453 82.28,91.478 82.076,91.399C79.456,90.378 71.812,87.401 69.724,86.588C69.416,86.468 69.067,86.589 68.897,86.875C67.666,88.946 62.911,96.947 61.294,99.667C61.175,99.867 60.964,99.992 60.734,100C60.503,100.007 60.285,99.896 60.153,99.705C58.257,96.937 52.398,88.389 50.559,85.706C50.432,85.521 50.223,85.411 50.001,85.411C49.778,85.411 49.569,85.521 49.442,85.706C47.603,88.389 41.744,96.937 39.848,99.705ZM35.355,27.286C40.039,27.286 43.841,31.124 43.841,35.852C43.841,40.58 40.039,44.418 35.355,44.418C30.672,44.418 26.869,40.58 26.869,35.852C26.869,31.124 30.672,27.286 35.355,27.286ZM64.646,27.286C69.329,27.286 73.132,31.124 73.132,35.852C73.132,40.58 69.329,44.418 64.646,44.418C59.962,44.418 56.16,40.58 56.16,35.852C56.16,31.124 59.962,27.286 64.646,27.286Z"/>
        <rect x="0" y="0" width="100" height="100"/>
      </svg>
    );
  },
  ghost() {
    return (
      <svg
        viewBox="0 0 70 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24.848,99.705C24.716,99.896 24.498,100.007 24.267,100C24.037,99.992 23.826,99.867 23.707,99.667C22.09,96.947 17.335,88.946 16.104,86.875C15.934,86.589 15.585,86.468 15.277,86.588C13.189,87.401 5.545,90.378 2.925,91.399C2.721,91.478 2.491,91.453 2.307,91.331C2.124,91.209 2.011,91.006 2.003,90.784L0.008,36.109C0.01,35.92 0.007,35.73 0,35.541C0.195,15.879 15.79,-0 35.001,-0C54.33,-0 70,16.077 70,35.908L67.998,90.784C67.99,91.006 67.877,91.209 67.694,91.331C67.51,91.453 67.28,91.478 67.076,91.399C64.456,90.378 56.812,87.401 54.724,86.588C54.416,86.468 54.067,86.589 53.897,86.875C52.666,88.946 47.911,96.947 46.294,99.667C46.175,99.867 45.964,99.992 45.734,100C45.503,100.007 45.285,99.896 45.153,99.705C43.257,96.937 37.398,88.389 35.559,85.706C35.432,85.521 35.223,85.411 35.001,85.411C34.778,85.411 34.569,85.521 34.442,85.706C32.603,88.389 26.744,96.937 24.848,99.705ZM20.355,27.286C25.039,27.286 28.841,31.124 28.841,35.852C28.841,40.58 25.039,44.418 20.355,44.418C15.672,44.418 11.869,40.58 11.869,35.852C11.869,31.124 15.672,27.286 20.355,27.286ZM49.646,27.286C54.329,27.286 58.132,31.124 58.132,35.852C58.132,40.58 54.329,44.418 49.646,44.418C44.962,44.418 41.16,40.58 41.16,35.852C41.16,31.124 44.962,27.286 49.646,27.286Z"/>
      </svg>
    );
  },
  crown() {
    return (
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M67.966,34.811C67.471,35.01 66.908,34.787 66.682,34.302C64.496,29.63 54.071,7.34 50.91,0.582C50.744,0.227 50.39,0 50,0C49.61,-0 49.256,0.227 49.09,0.582C45.929,7.34 35.504,29.63 33.318,34.302C33.092,34.787 32.529,35.01 32.034,34.811C27.569,33.012 7.399,24.886 1.38,22.461C1.039,22.324 0.651,22.385 0.367,22.619C0.084,22.854 -0.05,23.226 0.017,23.589C2.056,34.538 12.684,91.615 14.091,99.173C14.18,99.653 14.596,100 15.08,100C22.53,100 77.47,100 84.92,100C85.404,100 85.82,99.653 85.909,99.173C87.316,91.615 97.944,34.538 99.983,23.589C100.05,23.226 99.916,22.854 99.633,22.619C99.349,22.385 98.961,22.324 98.62,22.461C92.601,24.886 72.431,33.012 67.966,34.811ZM50,46.371C56.986,46.371 62.657,52.083 62.657,59.119C62.657,66.155 56.986,71.868 50,71.868C43.014,71.868 37.343,66.155 37.343,59.119C37.343,52.083 43.014,46.371 50,46.371Z"/>
      </svg>
    );
  },
  chat() {
    return (
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M33.6,75.656C33.942,75.656 34.261,75.833 34.444,76.125C36.281,79.047 46.182,94.801 49.155,99.531C49.339,99.823 49.658,100 50,100C50.342,100 50.661,99.823 50.845,99.531C53.818,94.801 63.719,79.047 65.556,76.125C65.739,75.833 66.058,75.656 66.4,75.656C70.306,75.656 93.839,75.656 99,75.656C99.552,75.656 100,75.205 100,74.648C100,66.34 100,9.316 100,1.009C100,0.452 99.552,-0 99,0C89.219,0 10.781,0 1,0C0.448,-0 0,0.452 0,1.009C0,9.316 0,66.34 0,74.648C0,75.205 0.448,75.656 1,75.656C6.161,75.656 29.694,75.656 33.6,75.656ZM21.328,27.741C26.847,27.741 31.328,32.261 31.328,37.828C31.328,43.396 26.847,47.916 21.328,47.916C15.809,47.916 11.328,43.396 11.328,37.828C11.328,32.261 15.809,27.741 21.328,27.741ZM50,27.741C55.519,27.741 60,32.261 60,37.828C60,43.396 55.519,47.916 50,47.916C44.481,47.916 40,43.396 40,37.828C40,32.261 44.481,27.741 50,27.741ZM78.672,27.741C84.191,27.741 88.672,32.261 88.672,37.828C88.672,43.396 84.191,47.916 78.672,47.916C73.153,47.916 68.672,43.396 68.672,37.828C68.672,32.261 73.153,27.741 78.672,27.741Z"/>
      </svg>
    );
  },
  minusSq() {
    return (
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100,1C100,0.735 99.895,0.48 99.707,0.293C99.52,0.105 99.265,-0 99,0L1,0C0.735,-0 0.48,0.105 0.293,0.293C0.105,0.48 -0,0.735 0,1L0,99C-0,99.265 0.105,99.52 0.293,99.707C0.48,99.895 0.735,100 1,100L99,100C99.265,100 99.52,99.895 99.707,99.707C99.895,99.52 100,99.265 100,99L100,1ZM86.5,42.5C81.291,42.5 18.709,42.5 13.5,42.5C12.948,42.5 12.5,42.948 12.5,43.5C12.5,46.227 12.5,53.773 12.5,56.5C12.5,57.052 12.948,57.5 13.5,57.5C18.709,57.5 81.291,57.5 86.5,57.5C87.052,57.5 87.5,57.052 87.5,56.5C87.5,53.773 87.5,46.227 87.5,43.5C87.5,42.948 87.052,42.5 86.5,42.5Z"/>
      </svg>
    );
  },
  plusSq() {
    return (
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100,1C100,0.735 99.895,0.48 99.707,0.293C99.52,0.105 99.265,-0 99,0L1,0C0.735,-0 0.48,0.105 0.293,0.293C0.105,0.48 -0,0.735 0,1L0,99C-0,99.265 0.105,99.52 0.293,99.707C0.48,99.895 0.735,100 1,100L99,100C99.265,100 99.52,99.895 99.707,99.707C99.895,99.52 100,99.265 100,99L100,1ZM57.5,42.5L57.5,13.5C57.5,12.948 57.052,12.5 56.5,12.5C53.773,12.5 46.227,12.5 43.5,12.5C42.948,12.5 42.5,12.948 42.5,13.5C42.5,18.709 42.5,42.5 42.5,42.5L13.5,42.5C12.948,42.5 12.5,42.948 12.5,43.5C12.5,46.227 12.5,53.773 12.5,56.5C12.5,57.052 12.948,57.5 13.5,57.5C18.709,57.5 42.5,57.5 42.5,57.5L42.5,86.5C42.5,87.052 42.948,87.5 43.5,87.5C46.227,87.5 53.773,87.5 56.5,87.5C57.052,87.5 57.5,87.052 57.5,86.5C57.5,81.291 57.5,57.5 57.5,57.5L86.5,57.5C87.052,57.5 87.5,57.052 87.5,56.5C87.5,53.773 87.5,46.227 87.5,43.5C87.5,42.948 87.052,42.5 86.5,42.5C81.291,42.5 57.5,42.5 57.5,42.5Z"/>
      </svg>
    );
  },
  minus() {
    return (
      <svg
        viewBox="0 0 75 75"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M74,30C68.791,30 6.209,30 1,30C0.448,30 -0,30.448 0,31C0,33.727 0,41.273 0,44C-0,44.552 0.448,45 1,45C6.209,45 68.791,45 74,45C74.552,45 75,44.552 75,44C75,41.273 75,33.727 75,31C75,30.448 74.552,30 74,30Z"/>
        <rect x="0" y="0" width="75" height="75"/>
      </svg>
    );
  },
  plus() {
    return (
      <svg
        viewBox="0 0 75 75"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M45,30L45,1C45,0.448 44.552,-0 44,0C41.273,0 33.727,0 31,0C30.448,-0 30,0.448 30,1C30,6.209 30,30 30,30L1,30C0.448,30 -0,30.448 0,31C0,33.727 0,41.273 0,44C-0,44.552 0.448,45 1,45C6.209,45 30,45 30,45L30,74C30,74.552 30.448,75 31,75C33.727,75 41.273,75 44,75C44.552,75 45,74.552 45,74C45,68.791 45,45 45,45L74,45C74.552,45 75,44.552 75,44C75,41.273 75,33.727 75,31C75,30.448 74.552,30 74,30C68.791,30 45,30 45,30Z"/>
      </svg>
    );
  },
  skullSq: () => (
    <svg
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64.625,97.716C63.157,99.179 61.169,100 59.097,100L42.133,100C40.069,100 38.088,99.185 36.621,97.732C33.892,95.027 29.416,90.592 27.154,88.351C26.256,87.462 25.752,86.252 25.752,84.988L25.752,84.988C25.752,83.738 25.225,82.546 24.302,81.703C21.214,78.887 13.995,72.303 10.588,69.195C9.462,68.169 9.031,66.585 9.48,65.13C10.018,63.389 10.731,61.08 11.196,59.576C11.507,58.569 11.533,57.495 11.272,56.474C10.052,51.713 6.364,37.311 4.688,30.767C4.159,28.699 4.673,26.502 6.066,24.885C10.668,19.539 21.175,7.336 25.536,2.27C26.777,0.829 28.585,0 30.486,0L69.109,0C70.986,-0 72.772,0.808 74.012,2.217C78.436,7.245 89.209,19.489 93.888,24.807C95.287,26.397 95.828,28.567 95.34,30.628C93.821,37.035 90.519,50.963 89.455,55.451C89.233,56.386 89.251,57.361 89.506,58.287C89.991,60.047 90.828,63.079 91.407,65.18C91.798,66.599 91.364,68.118 90.282,69.116C87.005,72.136 80.029,78.567 76.941,81.414C75.969,82.31 75.416,83.572 75.416,84.894L75.416,84.895C75.416,86.218 74.889,87.487 73.951,88.422C71.685,90.68 67.312,95.038 64.625,97.716ZM54.256,77.632C54.762,77.632 55.244,77.414 55.578,77.034C55.912,76.653 56.066,76.148 56,75.646C55.671,73.118 55.121,68.895 54.919,67.345C54.868,66.96 54.692,66.603 54.418,66.328C53.742,65.652 52.396,64.307 51.45,63.36C51.173,63.083 50.796,62.927 50.404,62.927C50.011,62.927 49.635,63.083 49.357,63.36C48.411,64.307 47.066,65.652 46.389,66.328C46.115,66.603 45.939,66.96 45.889,67.345C45.687,68.895 45.136,73.118 44.807,75.646C44.742,76.148 44.896,76.653 45.23,77.034C45.564,77.414 46.045,77.632 46.551,77.632L54.256,77.632ZM69.334,41.186C68.892,40.744 68.292,40.496 67.667,40.496C67.042,40.496 66.442,40.744 66,41.187C63.887,43.3 60.266,46.923 58.153,49.037C57.233,49.957 57.233,51.45 58.153,52.37C60.267,54.484 63.89,58.107 66.004,60.221C66.446,60.663 67.045,60.911 67.671,60.911C68.296,60.911 68.895,60.663 69.337,60.221C71.451,58.107 75.074,54.484 77.187,52.37C77.63,51.928 77.878,51.329 77.878,50.704C77.878,50.078 77.629,49.479 77.187,49.037C75.073,46.923 71.448,43.3 69.334,41.186ZM33.545,41.186C33.103,40.744 32.503,40.496 31.878,40.496C31.253,40.496 30.654,40.744 30.212,41.187C28.099,43.3 24.477,46.923 22.364,49.037C21.444,49.957 21.444,51.45 22.364,52.37C24.478,54.484 28.101,58.107 30.215,60.221C30.657,60.663 31.257,60.911 31.882,60.911C32.507,60.911 33.107,60.663 33.549,60.221C35.662,58.107 39.285,54.484 41.399,52.37C41.841,51.928 42.089,51.329 42.089,50.704C42.089,50.078 41.841,49.479 41.399,49.037C39.284,46.923 35.66,43.3 33.545,41.186Z"/>
      <rect x="0" y="0" width="100" height="100"/>
    </svg>
  ),
  skull() {
    return (
      <svg
        viewBox="0 0 92 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M60.141,97.716C58.673,99.179 56.685,100 54.613,100L37.65,100C35.585,100 33.604,99.185 32.137,97.732C29.408,95.027 24.932,90.592 22.67,88.351C21.772,87.462 21.268,86.252 21.268,84.988L21.268,84.988C21.268,83.738 20.741,82.546 19.818,81.703C16.73,78.887 9.511,72.303 6.104,69.195C4.978,68.169 4.547,66.585 4.996,65.13C5.534,63.389 6.247,61.08 6.712,59.576C7.023,58.569 7.049,57.495 6.788,56.474C5.568,51.713 1.88,37.311 0.204,30.767C-0.325,28.699 0.189,26.502 1.582,24.885C6.184,19.539 16.691,7.336 21.053,2.27C22.293,0.829 24.101,0 26.002,0L64.625,0C66.502,-0 68.288,0.808 69.528,2.217C73.952,7.245 84.725,19.489 89.404,24.807C90.803,26.397 91.345,28.567 90.856,30.628C89.337,37.035 86.035,50.963 84.971,55.451C84.749,56.386 84.767,57.361 85.022,58.287C85.507,60.047 86.344,63.079 86.923,65.18C87.314,66.599 86.88,68.118 85.798,69.116C82.521,72.136 75.545,78.567 72.457,81.414C71.485,82.31 70.932,83.572 70.932,84.894L70.932,84.895C70.932,86.218 70.405,87.487 69.467,88.422C67.202,90.68 62.828,95.038 60.141,97.716ZM49.772,77.632C50.278,77.632 50.76,77.414 51.094,77.034C51.428,76.653 51.582,76.148 51.516,75.646C51.187,73.118 50.637,68.895 50.435,67.345C50.384,66.96 50.209,66.603 49.934,66.328C49.258,65.652 47.912,64.307 46.966,63.36C46.689,63.083 46.312,62.927 45.92,62.927C45.527,62.927 45.151,63.083 44.873,63.36C43.927,64.307 42.582,65.652 41.905,66.328C41.631,66.603 41.455,66.96 41.405,67.345C41.203,68.895 40.653,73.118 40.323,75.646C40.258,76.148 40.412,76.653 40.746,77.034C41.08,77.414 41.561,77.632 42.068,77.632L49.772,77.632ZM64.85,41.186C64.408,40.744 63.808,40.496 63.183,40.496C62.558,40.496 61.958,40.744 61.516,41.187C59.403,43.3 55.782,46.923 53.669,49.037C52.749,49.957 52.749,51.45 53.669,52.37C55.783,54.484 59.406,58.107 61.52,60.221C61.962,60.663 62.561,60.911 63.187,60.911C63.812,60.911 64.411,60.663 64.853,60.221C66.967,58.107 70.59,54.484 72.704,52.37C73.146,51.928 73.394,51.329 73.394,50.704C73.394,50.078 73.145,49.479 72.703,49.037C70.589,46.923 66.964,43.3 64.85,41.186ZM29.061,41.186C28.619,40.744 28.02,40.496 27.394,40.496C26.769,40.496 26.17,40.744 25.728,41.187C23.615,43.3 19.993,46.923 17.88,49.037C16.96,49.957 16.96,51.45 17.881,52.37C19.994,54.484 23.617,58.107 25.731,60.221C26.173,60.663 26.773,60.911 27.398,60.911C28.023,60.911 28.623,60.663 29.065,60.221C31.178,58.107 34.801,54.484 36.915,52.37C37.357,51.928 37.605,51.329 37.605,50.704C37.605,50.078 37.357,49.479 36.915,49.037C34.8,46.923 31.176,43.3 29.061,41.186Z"/>
      </svg>
    );
  },
  hourglass: () => (
    <svg
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100"/>
      <path d="M28,8.5C28,8.224 27.776,8 27.5,8C26.3,8 23.284,8 22.309,8C22.12,8 21.946,7.893 21.862,7.724C21.304,6.609 19.211,2.423 18.362,0.724C18.284,0.569 18.293,0.385 18.384,0.237C18.475,0.09 18.636,-0 18.809,0C25.69,0 74.31,0 81.191,0C81.364,-0 81.525,0.09 81.616,0.237C81.707,0.385 81.716,0.569 81.638,0.724C80.789,2.423 78.696,6.609 78.138,7.724C78.054,7.893 77.88,8 77.691,8C76.716,8 73.7,8 72.5,8C72.224,8 72,8.224 72,8.5C72,12.405 72,37.947 72,41.043C72,41.232 71.894,41.404 71.726,41.489C69.947,42.39 60.053,47.402 58.274,48.303C58.106,48.388 58,48.561 58,48.749C58,49.346 58,50.654 58,51.251C58,51.439 58.106,51.612 58.274,51.697C60.053,52.598 69.947,57.61 71.726,58.511C71.894,58.596 72,58.768 72,58.957C72,62.053 72,87.595 72,91.5C72,91.776 72.224,92 72.5,92C73.7,92 76.716,92 77.691,92C77.88,92 78.054,92.107 78.138,92.276C78.696,93.391 80.789,97.577 81.638,99.276C81.716,99.431 81.707,99.615 81.616,99.763C81.525,99.91 81.364,100 81.191,100C74.31,100 25.69,100 18.809,100C18.636,100 18.475,99.91 18.384,99.763C18.293,99.615 18.284,99.431 18.362,99.276C19.211,97.577 21.304,93.391 21.862,92.276C21.946,92.107 22.12,92 22.309,92C23.284,92 26.3,92 27.5,92C27.776,92 28,91.776 28,91.5C28,87.595 28,62.053 28,58.957C28,58.768 28.106,58.596 28.274,58.511C30.053,57.61 39.947,52.598 41.726,51.697C41.894,51.612 42,51.439 42,51.251C42,50.654 42,49.346 42,48.749C42,48.561 41.894,48.388 41.726,48.303C39.947,47.402 30.053,42.39 28.274,41.489C28.106,41.404 28,41.232 28,41.043C28,37.947 28,12.405 28,8.5ZM67.726,39.031C67.894,38.946 68,38.774 68,38.585C68,35.628 68,12.228 68,8.5C68,8.224 67.776,8 67.5,8C63.483,8 36.517,8 32.5,8C32.224,8 32,8.224 32,8.5C32,12.228 32,35.628 32,38.585C32,38.774 32.106,38.946 32.274,39.031C34.053,39.933 43.947,44.944 45.726,45.845C45.894,45.931 46,46.103 46,46.291C46,47.566 46,52.434 46,53.709C46,53.897 45.894,54.069 45.726,54.155C43.947,55.056 34.053,60.067 32.274,60.969C32.106,61.054 32,61.226 32,61.415C32,64.372 32,87.772 32,91.5C32,91.776 32.224,92 32.5,92C36.517,92 63.483,92 67.5,92C67.776,92 68,91.776 68,91.5C68,87.772 68,64.372 68,61.415C68,61.226 67.894,61.054 67.726,60.969C65.947,60.067 56.053,55.056 54.274,54.155C54.106,54.069 54,53.897 54,53.709C54,52.434 54,47.566 54,46.291C54,46.103 54.106,45.931 54.274,45.845C56.053,44.944 65.947,39.933 67.726,39.031Z" className="glass"/>
      <path d="M52,71.693C52,71.881 52.106,72.054 52.274,72.139C54.053,73.04 63.947,78.054 65.726,78.955C65.894,79.041 66,79.213 66,79.401C66,80.918 66,87.608 66,89.5C66,89.633 65.947,89.76 65.854,89.854C65.76,89.947 65.633,90 65.5,90C61.763,90 38.237,90 34.5,90C34.367,90 34.24,89.947 34.146,89.854C34.053,89.76 34,89.633 34,89.5C34,87.608 34,80.918 34,79.401C34,79.213 34.106,79.041 34.274,78.955C36.053,78.054 45.947,73.04 47.726,72.139C47.894,72.054 48,71.881 48,71.693C48,68.894 48,47.845 48,45.046C48,44.858 47.894,44.686 47.726,44.6C45.947,43.699 36.053,38.685 34.274,37.784C34.106,37.699 34,37.526 34,37.338C34,35.947 34,30.232 34,28.5C34,28.367 34.053,28.24 34.146,28.146C34.24,28.053 34.367,28 34.5,28C38.237,28 61.763,28 65.5,28C65.633,28 65.76,28.053 65.854,28.146C65.947,28.24 66,28.367 66,28.5C66,30.232 66,35.947 66,37.338C66,37.526 65.894,37.699 65.726,37.784C63.947,38.685 54.053,43.699 52.274,44.6C52.106,44.686 52,44.858 52,45.046C52,47.845 52,68.894 52,71.693Z" className="sand"/>
    </svg>
  ),
  hg: () => (
    <svg
      viewBox="0 0 60 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.174,8.5C9.174,8.224 8.962,8 8.701,8C7.564,8 4.709,8 3.787,8C3.607,8 3.443,7.893 3.363,7.724C2.836,6.609 0.854,2.423 0.05,0.724C-0.023,0.569 -0.016,0.385 0.071,0.237C0.157,0.09 0.309,-0 0.473,0C6.987,0 53.013,0 59.527,0C59.691,-0 59.843,0.09 59.929,0.237C60.016,0.385 60.023,0.569 59.95,0.724C59.146,2.423 57.164,6.609 56.637,7.724C56.557,7.893 56.393,8 56.213,8C55.291,8 52.436,8 51.299,8C51.038,8 50.826,8.224 50.826,8.5C50.826,12.405 50.826,37.947 50.826,41.043C50.826,41.232 50.726,41.404 50.567,41.489C48.883,42.39 39.517,47.402 37.833,48.303C37.673,48.388 37.573,48.561 37.573,48.749C37.573,49.346 37.573,50.654 37.573,51.251C37.573,51.439 37.673,51.612 37.833,51.697C39.517,52.598 48.883,57.61 50.567,58.511C50.726,58.596 50.826,58.768 50.826,58.957C50.826,62.053 50.826,87.595 50.826,91.5C50.826,91.776 51.038,92 51.299,92C52.436,92 55.291,92 56.213,92C56.393,92 56.557,92.107 56.637,92.276C57.164,93.391 59.146,97.577 59.95,99.276C60.023,99.431 60.016,99.615 59.929,99.763C59.843,99.91 59.691,100 59.527,100C53.013,100 6.987,100 0.473,100C0.309,100 0.157,99.91 0.071,99.763C-0.016,99.615 -0.023,99.431 0.05,99.276C0.854,97.577 2.836,93.391 3.363,92.276C3.443,92.107 3.607,92 3.787,92C4.709,92 7.564,92 8.701,92C8.962,92 9.174,91.776 9.174,91.5C9.174,87.595 9.174,62.053 9.174,58.957C9.174,58.768 9.274,58.596 9.433,58.511C11.117,57.61 20.483,52.598 22.167,51.697C22.327,51.612 22.427,51.439 22.427,51.251C22.427,50.654 22.427,49.346 22.427,48.749C22.427,48.561 22.327,48.388 22.167,48.303C20.483,47.402 11.117,42.39 9.433,41.489C9.274,41.404 9.174,41.232 9.174,41.043C9.174,37.947 9.174,12.405 9.174,8.5ZM46.78,39.031C46.939,38.946 47.04,38.774 47.04,38.585C47.04,35.628 47.04,12.228 47.04,8.5C47.04,8.224 46.828,8 46.566,8C42.764,8 17.236,8 13.434,8C13.172,8 12.96,8.224 12.96,8.5C12.96,12.228 12.96,35.628 12.96,38.585C12.96,38.774 13.061,38.946 13.22,39.031C14.904,39.933 24.27,44.944 25.954,45.845C26.113,45.931 26.213,46.103 26.213,46.291C26.213,47.566 26.213,52.434 26.213,53.709C26.213,53.897 26.113,54.069 25.954,54.155C24.27,55.056 14.904,60.067 13.22,60.969C13.061,61.054 12.96,61.226 12.96,61.415C12.96,64.372 12.96,87.772 12.96,91.5C12.96,91.776 13.172,92 13.434,92C17.236,92 42.764,92 46.566,92C46.828,92 47.04,91.776 47.04,91.5C47.04,87.772 47.04,64.372 47.04,61.415C47.04,61.226 46.939,61.054 46.78,60.969C45.096,60.067 35.73,55.056 34.046,54.155C33.887,54.069 33.787,53.897 33.787,53.709C33.787,52.434 33.787,47.566 33.787,46.291C33.787,46.103 33.887,45.931 34.046,45.845C35.73,44.944 45.096,39.933 46.78,39.031Z" className="glass"/>
      <path d="M31.893,71.693C31.893,71.881 31.994,72.054 32.153,72.139C33.837,73.04 43.203,78.054 44.887,78.955C45.046,79.041 45.146,79.213 45.146,79.401C45.146,80.918 45.146,87.608 45.146,89.5C45.146,89.633 45.096,89.76 45.008,89.854C44.919,89.947 44.798,90 44.673,90C41.135,90 18.865,90 15.327,90C15.202,90 15.081,89.947 14.992,89.854C14.904,89.76 14.854,89.633 14.854,89.5C14.854,87.608 14.854,80.918 14.854,79.401C14.854,79.213 14.954,79.041 15.113,78.955C16.797,78.054 26.163,73.04 27.847,72.139C28.006,72.054 28.107,71.881 28.107,71.693C28.107,68.894 28.107,47.845 28.107,45.046C28.107,44.858 28.006,44.686 27.847,44.6C26.163,43.699 16.797,38.685 15.113,37.784C14.954,37.699 14.854,37.526 14.854,37.338C14.854,35.947 14.854,30.232 14.854,28.5C14.854,28.367 14.904,28.24 14.992,28.146C15.081,28.053 15.202,28 15.327,28C18.865,28 41.135,28 44.673,28C44.798,28 44.919,28.053 45.008,28.146C45.096,28.24 45.146,28.367 45.146,28.5C45.146,30.232 45.146,35.947 45.146,37.338C45.146,37.526 45.046,37.699 44.887,37.784C43.203,38.685 33.837,43.699 32.153,44.6C31.994,44.686 31.893,44.858 31.893,45.046C31.893,47.845 31.893,68.894 31.893,71.693Z" className="sand"/>
    </svg>
  ),
  rSq: () => (
    <svg
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" className='background'/>
      <path d="M24.895,88.101L24.895,11.899L49.008,11.899C54.089,11.899 58.49,12.838 62.213,14.717C65.937,16.596 68.842,19.223 70.93,22.598C73.017,25.973 74.061,29.958 74.061,34.551C74.061,39.631 72.791,44.067 70.251,47.86C67.711,51.653 64.284,54.349 59.969,55.95L75.105,88.101L60.491,88.101L47.234,57.829L37.943,57.829L37.943,88.101L24.895,88.101ZM37.943,46.346L49.008,46.346C52.697,46.346 55.585,45.337 57.672,43.319C59.76,41.301 60.804,38.517 60.804,34.968C60.804,31.419 59.743,28.601 57.62,26.513C55.498,24.425 52.627,23.381 49.008,23.381L37.943,23.381L37.943,46.346Z" className='letter'/>
    </svg>
  )
};