import Fade from "react-reveal/Fade";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Fade>
      <div className="flex md:flex-row flex-col container-lg mx-auto max-w-5xl">
        <div className="flex container justify-center mx-auto mb-10 flex md:flex-row items-center px-3">
          <div
            className={`${styles.gradient} flex text-center pl-3 justify-center items-center block shadow-2xl`}
          >
            <a href="mailto:kapeeshmanilal@gmail.com" className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="139"
                viewBox="0 0 137 139"
                className={`m-auto ${styles.smallSvg}`}
              >
                <path
                  fill="#FFF"
                  d="M13.1341304,139 L123.86587,139 C131.122058,138.991795 137,133.116433 137,125.871644 L137,55.6654188 C137,54.5700988 136.513942,53.5310356 135.674674,52.8256498 L117.343478,37.3630335 L117.343478,10.4075302 C117.343478,4.65960999 112.676533,0 106.919565,0 L30.8101087,0 C25.0531405,0 20.3861957,4.65960999 20.3861957,10.4075302 L20.3861957,36.7980533 L1.32532609,52.8256498 C0.486058444,53.5310356 0,54.5700988 0,55.6654188 L0,125.871644 C0,133.116433 5.87794235,138.991795 13.1341304,139 Z M124.301707,132 L13.6834146,132 C10.5421463,131.9919 8,129.47476 8,126.372515 L8,64 L50.402439,93.6214347 L20.3041463,116.366465 C18.6607625,117.583687 18.327706,119.886112 19.5602439,121.509075 C20.7927818,123.132038 23.1241771,123.460956 24.767561,122.243734 L56.7702439,98.0587727 L67.184878,105.405359 C68.4729427,106.30636 70.1965695,106.30636 71.4846341,105.405359 L81.8992683,98.0587727 L113.916829,122.199654 C115.560213,123.416877 117.891608,123.087959 119.124146,121.464996 C120.356684,119.842033 120.023628,117.539608 118.380244,116.322385 L88.3414634,93.6214347 L130,64.5289542 L130,126.387208 C129.991824,129.483717 127.452056,131.991926 124.316585,132 L124.301707,132 Z M127,55.7190161 L117,63 L117,47 L127,55.7190161 Z M30.9609871,8 L107.024134,8 C108.667659,8 110,9.32271061 110,10.9543568 L110,68.180249 L68.9925603,97 L28,68.180249 L28,10.9395851 C28.0081394,9.31945596 29.3290624,8.00808059 30.9609871,8 Z M21,63 L11,55.2727273 L21,46 L21,63 Z M68.9998121,78 L69.9472753,78 C71.9912967,78 73.6483035,76.3429832 73.6483035,74.2989494 C73.6483035,72.2549156 71.9912967,70.5978988 69.9472753,70.5978988 L68.9998121,70.5978988 C55.9671315,70.5978988 45.4020564,60.0327596 45.4020564,47 C45.4020564,33.9672404 55.9671315,23.4021012 68.9998121,23.4021012 C82.0324927,23.4021012 92.5975678,33.9672404 92.5975678,47 L92.5975678,53.3213945 C92.4668059,55.5026254 90.6597561,57.2045988 88.4746224,57.2045988 C86.2894887,57.2045988 84.4824389,55.5026254 84.351677,53.3213945 L84.351677,47 C84.3984234,39.8224492 79.479358,33.5648299 72.4937876,31.9153952 C65.5082171,30.2659606 58.3096686,33.6623658 55.1409807,40.102763 C51.9722928,46.5431602 53.6742342,54.3186768 59.2436772,58.8464079 C64.8131201,63.3741391 72.7722882,63.4527124 78.4300319,59.0358166 C80.9972179,63.6262087 86.3479094,65.8944422 91.4319746,64.5475231 C96.5160398,63.2006041 100.041886,58.5807136 100,53.3213945 L100,47 C100,29.8791728 86.1205355,16 68.9998121,16 C51.8790886,16 38,29.8791728 38,47 C38,64.1208272 51.8790886,78 68.9998121,78 Z M68.0001169,55 C64.7644662,55 61.8474186,53.0508911 60.6091887,50.0615396 C59.3709588,47.0721882 60.0553948,43.6312959 62.3433453,41.3433453 C64.6312959,39.0553948 68.0721882,38.3709588 71.0615396,39.6091887 C74.0508911,40.8474186 76,43.7644662 76,47.0001169 C76,51.4183303 72.4183303,55 68.0001169,55 Z"
                />
              </svg>
              <p
                className={`${styles.forceWhite} text-xl font-secondary text-white`}
              >
                Email me
              </p>
            </a>
          </div>
          <div
            className={`${styles.gradient} flex text-center pl-3 mx-auto md:pl-0 justify-center items-center block shadow-2xl`}
          >
            <a
              href="downloads/KapeeshManilal_PassionatePeople_Resume.pdf"
              download
              className="text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124"
                height="125"
                viewBox="0 0 124 125"
                className={`m-auto ${styles.smallSvg}`}
              >
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M92.0059145,48 C93.7174414,61.3089353 95.4172239,74.5246262 97.118276,87.7515147 C97.5043641,87.7782008 97.7498354,87.82948 97.9879001,87.8063521 C100.680148,87.544305 103.369434,87.2502346 106.063269,87.0061876 C108.898567,86.7492684 111.737675,86.5335819 114.575724,86.3070117 C116.396972,86.1615462 118.218856,86.0233018 120.041374,85.8960457 C120.390535,85.8716619 120.755568,85.8643363 121.09362,85.9375923 C121.532188,86.032825 121.841461,85.9103829 122.122377,85.5923474 C122.401389,85.2765095 122.728014,84.8700435 123.181924,85.1325092 C123.671279,85.4153819 124.05705,85.9123713 123.993037,86.5016632 C123.943096,86.9620247 123.735504,87.4409094 123.48178,87.8390033 C120.945491,91.8191048 118.378835,95.7802644 115.8326,99.7541914 C108.457989,111.264588 101.095968,122.782938 93.7150079,134.289463 C89.2599168,141.234756 84.7836643,148.166969 80.3025448,155.095937 C79.7382784,155.968416 79.0894725,156.787731 78.4730435,157.626826 C78.1764677,158.03078 77.7902737,158.117013 77.3701159,157.835292 C76.8166418,157.464198 76.2708915,157.079813 75.7419645,156.675336 C69.3359062,151.777965 62.9242401,146.88771 56.5321482,141.972549 C44.5551627,132.763017 32.6073798,123.516126 20.6130421,114.328781 C14.1267824,109.360561 7.56942064,104.483074 1.04411831,99.5648771 C0.98804083,99.5225979 0.921276888,99.4909932 0.874192968,99.4409698 C0.541431328,99.0865156 -0.139433903,98.9788293 0.0253069152,98.2700255 C0.198300645,97.5249076 0.93016464,96.8228015 1.69027899,96.7471385 C3.75181405,96.5420218 5.81641751,96.3665214 7.87879903,96.168835 C10.6062806,95.9074158 13.3323867,95.6331245 16.0598683,95.3702402 C17.6685513,95.2151469 19.2780807,95.0682163 20.8878217,94.9231695 C23.3023275,94.7057039 25.7174681,94.4964012 28.1316564,94.2765286 C28.8534688,94.2108075 29.5732709,94.1216446 30.3074626,94.0416909 C28.2418011,80.1980917 26.197195,66.4942021 24.1434897,52.729824 C25.1633591,52.6356378 26.0294916,52.5373701 26.8983751,52.4786607 C30.3014316,52.2484276 33.7049113,52.0234272 37.1092375,51.8108802 C39.600453,51.6552636 42.0944195,51.5408796 44.5846827,51.3733328 C47.0028917,51.2105998 49.4170801,50.9909366 51.83476,50.8205641 C53.4484159,50.7069127 55.0658808,50.6474707 56.6802774,50.5426101 C58.3977295,50.4310517 60.1133829,50.2904002 61.8304118,50.1703651 C63.4079877,50.0600625 64.9867274,49.968074 66.5639858,49.8542132 C68.9117276,49.684678 71.2583056,49.4988171 73.6059416,49.3279214 C75.1131561,49.2182468 76.6221693,49.1325373 78.1290664,49.0191998 C80.3365087,48.8531181 82.5422581,48.6673619 84.7494888,48.4989778 C86.2209407,48.3867915 87.6936622,48.2889425 89.1660663,48.1874306 C90.0724054,48.1249538 90.9791676,48.0676048 92.0059145,48 Z M58.5940007,62.2915071 C55.5629601,63.977127 53.3517087,66.316818 52.3884458,69.7350462 C51.6972115,72.188284 51.705676,74.6130566 52.2857076,77.0516432 C52.9657264,79.9101957 54.3087291,82.4620151 56.12966,84.7715665 C56.7053535,85.5017193 57.3028432,86.2150231 57.9255148,86.9791875 C57.4110833,87.3497581 56.9695525,87.6908169 56.5053791,87.9985967 C53.6439465,89.8961356 51.4264525,92.3802455 49.6535577,95.2814959 C48.3440957,97.4244423 47.674975,99.7548193 47.7328512,102.238615 C47.77073,103.863747 47.9335663,105.506146 48.2471769,107.100928 C49.1774282,111.831485 50.6494091,116.408204 52.5500124,120.845946 C52.988898,121.870483 53.4967695,122.866868 53.9945894,123.865557 C54.30164,124.481535 54.8291916,124.806373 55.5269859,124.774768 C56.1924033,124.744733 56.8606776,124.695337 57.5182654,124.594872 C59.0450541,124.361604 60.559146,124.033313 62.0914366,123.850278 C64.879757,123.517277 67.6756954,123.242986 70.4717396,122.979264 C73.547748,122.689275 76.629999,122.46417 79.7048435,122.162879 C82.0797776,121.930134 84.4437078,121.585203 86.8200174,121.370877 C87.6257344,121.298144 87.9310921,120.931027 88.0388032,120.22463 C88.2951725,118.541836 88.5820141,116.863542 88.8283318,115.179282 C89.4283608,111.077157 89.8416412,106.967707 89.4351324,102.812837 C89.1767528,100.173634 88.7441098,97.5728379 87.9548986,95.0369256 C87.3890451,93.2189217 86.5448146,91.5457554 85.2259358,90.1356826 C82.9173424,87.667689 80.2987357,85.6611033 76.9563064,84.7484386 C76.0774771,84.5083683 75.1875381,84.3080656 74.2490339,84.0761581 C74.2612017,83.9574834 74.2525255,83.9157275 74.269772,83.8940647 C74.3989618,83.7310178 74.5285748,83.5678663 74.6667582,83.4122497 C77.1716228,80.5896972 78.4336835,77.2862716 78.2980394,73.5477055 C78.1757271,70.1736402 76.8653128,67.1802966 74.760397,64.5443375 C72.902328,62.2175186 70.4116415,60.8711785 67.4684203,60.5445616 C64.3583422,60.1994213 61.3529068,60.7571085 58.5940007,62.2915071 Z M67.894387,63.7977568 C70.2674392,64.3006899 72.0605109,65.5590688 73.2983115,67.64235 C74.7314539,70.0543997 75.480582,72.6154046 75.2731507,75.4185664 C75.1543762,77.0245423 74.5721687,78.5006008 73.597581,79.7543771 C72.3334803,81.3804369 70.9226081,82.8958263 69.5673055,84.4524294 C69.3146975,84.7425992 69.0063078,84.9860113 68.7581538,85.2794239 C68.0382951,86.1299541 68.3777571,87.2641687 69.4391987,87.618565 C70.5045641,87.9742165 71.5552948,88.3784041 72.6341284,88.6878209 C73.9186965,89.0563387 75.2159905,89.3954629 76.5259042,89.6602141 C78.9507082,90.1503856 80.7494005,91.5371128 82.1577274,93.446334 C84.2598251,96.2959396 85.2954969,99.5687707 85.9071859,103.000494 C86.394904,105.737651 86.2356188,108.47167 85.9714514,111.213011 C85.8313611,112.666999 85.796365,114.131342 85.6377161,115.582923 C85.4953987,116.886386 85.6080225,118.238489 84.9107522,119.593103 C83.5078337,119.708795 82.1107479,119.839758 80.7110108,119.936412 C77.339616,120.169154 73.9673729,120.388194 70.5950236,120.607965 C69.0836173,120.706502 67.5645755,120.732862 66.0612289,120.900123 C63.8943354,121.141233 61.7369863,121.46927 59.5792131,121.783603 C58.5395115,121.935069 57.5079756,122.140091 56.4190673,122.33026 C56.1739888,121.566028 55.9648607,120.871775 55.7291144,120.186204 C54.7553751,117.35344 53.6525744,114.556868 52.8329239,111.681635 C52.1775428,109.382766 51.7737093,107.002306 51.4240667,104.63419 C51.1262819,102.617227 51.7103982,100.704973 52.648187,98.9017148 C53.5726667,97.1241719 54.8035079,95.5666324 56.1415637,94.0899499 L56.5089967,93.6891184 L57.1944229,92.94583 C58.2231383,91.8317399 59.2697629,90.736117 60.541075,89.8570777 C61.1304937,89.4496474 61.6021984,88.8473411 62.0426187,88.2707672 C62.3078466,87.9234839 62.4714798,87.4681453 62.5674539,87.0368655 C62.6660792,86.5929287 62.4725403,86.219913 61.9690209,86.0831964 C60.8071512,85.7679217 59.8828306,85.0695895 59.0856623,84.223871 C56.697021,81.690063 55.0870954,78.7444314 54.5624724,75.3027704 C54.1725313,72.7450082 54.4757246,70.2579579 56.1517185,68.1581493 C58.1495703,65.6551993 60.7437341,64.0767341 64.0016567,63.660831 C65.3097676,63.4937793 66.603562,63.5241143 67.894387,63.7977568 Z M90.6741349,40 C90.7916791,40.9559209 90.892401,41.7745175 91,42.6494411 C68.4982761,45.1019562 46.06236,47.5471575 23.5573562,50 C23.1484379,48.9875338 23.1671646,47.9129552 23,46.7170989 C23.9569642,46.5939656 24.8101382,46.4645009 25.6673326,46.3773906 C29.4411252,45.9939088 33.2153411,45.6153393 36.9908265,45.2493232 C39.6477906,44.9918129 42.307823,44.7686883 44.9647872,44.5096498 C47.5508651,44.2575976 50.1338748,43.9711597 52.7197411,43.7149594 C55.9701394,43.3929351 59.2230769,43.0965636 62.4731578,42.7699546 C65.687584,42.447057 68.8986246,42.0870448 72.1132624,41.7679679 C74.7701207,41.5042354 77.4314227,41.2890796 80.0885985,41.0291678 C82.3601319,40.8071347 84.6277508,40.5428565 86.8987553,40.3155838 C88.1181043,40.193542 89.3409447,40.1100341 90.6741349,40 Z M90.5111337,33.0078417 C90.6832189,34.3007924 90.8323735,35.422356 91,36.681693 C90.0361744,36.8129364 89.1093985,36.9580962 88.1779517,37.0624701 C84.8509007,37.4354325 81.5227882,37.7989745 78.1942511,38.1573782 C75.8810271,38.4065907 73.5656799,38.6334298 71.2529867,38.8849975 C68.3109777,39.2051842 65.3713042,39.5483868 62.429189,39.8664325 C60.0812508,40.1202482 57.7301277,40.3422701 55.3821894,40.59448 C52.4046169,40.9143456 49.4293798,41.2579764 46.4518073,41.5771997 L39.4037461,42.3016075 L39.4037461,42.3016075 C36.4608878,42.6176193 33.5204712,42.9563257 30.5780375,43.2767266 C28.2995278,43.5247616 26.0199565,43.7617704 23.7399606,43.996103 C23.5714848,44.0134451 23.3967457,43.9688053 23.1151035,43.9427921 C22.7470471,41.3381569 22.381751,38.7538612 22,36.0518104 C23.2146815,35.9827631 24.2943275,35.8984076 25.3754598,35.8646868 C27.6701058,35.7931774 29.9657073,35.7586002 32.2603533,35.6891247 C34.7315432,35.6141897 37.2024146,35.525017 39.6727552,35.4268521 C43.0591495,35.2923972 46.4449069,35.1470232 49.8307704,34.9999364 C53.0038895,34.86227 56.1767962,34.7182877 59.349703,34.5734489 C62.4168745,34.4333204 65.484046,34.2930848 68.5508991,34.1449275 C71.3705057,34.0087598 74.1896877,33.861566 77.0089759,33.7200458 C79.8638276,33.5765987 82.7192102,33.4435354 85.5732126,33.2872423 C86.8400186,33.2177668 88.1039582,33.0970144 89.3700211,33.0113743 C89.7151469,32.9880374 90.0630328,33.0078417 90.5111337,33.0078417 Z"
                  transform="translate(0 -33)"
                />
              </svg>
              <p
                className={`${styles.forceWhite} text-xl font-secondary text-white`}
              >
                Download CV
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-5 md:flex-row justify-center px-3">
          <div className="flex flex-col md:mr-24">
            <div className="flex flex-row items-center mb-10">
              <a href="https://github.com/kappy904">
                <i className="icon-github mr-6 text-3xl md:text-6xl" />
              </a>
              <a
                href="https://github.com/kappy904"
                className="font-bold font-primary text-xl tracking-widest"
              >
                Github
              </a>
            </div>
            <div className="flex flex-row items-center mb-10">
              <a href="https://www.linkedin.com/in/kapeesh-m-53323913/">
                <i className="icon-linkedin mr-6 text-3xl md:text-6xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/kapeesh-m-53323913/"
                className="font-bold font-primary text-xl tracking-widest"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center mb-10">
              <a href="https://stackoverflow.com/users/5846771/kapeesh-manilal">
                <i className="icon-stackoverflow mr-6 text-3xl md:text-6xl" />
              </a>
              <a
                href="https://stackoverflow.com/users/5846771/kapeesh-manilal"
                className="font-bold font-primary text-xl tracking-widest"
              >
                Stack Overflow
              </a>
            </div>
            <div className="flex flex-row items-center mb-10">
              <a href="https://codepen.io/KapeeshKappyKap">
                <i className="icon-terminal mr-6 text-3xl md:text-6xl" />
              </a>
              <a
                href="https://codepen.io/KapeeshKappyKap"
                className="font-bold font-primary text-xl tracking-widest"
              >
                CodePen
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
