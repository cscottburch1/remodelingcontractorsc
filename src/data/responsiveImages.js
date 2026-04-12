import logoPng from '../assets/images/Burch Contracting Logo.png';
import logo160 from '../assets/images/responsive/burch-logo-160.webp';
import logo320 from '../assets/images/responsive/burch-logo-320.webp';
import hero960 from '../assets/images/screened porch simpsonville sc_enhanced.webp';
import hero640 from '../assets/images/responsive/hero-screened-640.webp';
import hero320Avif from '../assets/images/responsive/hero-screened-320.avif';
import hero640Avif from '../assets/images/responsive/hero-screened-640.avif';
import hero960Avif from '../assets/images/responsive/hero-screened-960.avif';
import hero1200Avif from '../assets/images/responsive/hero-screened-1200.avif';
import garage900 from '../assets/images/garage-2-car-dark-gray.webp';
import garage768 from '../assets/images/responsive/garage-768.webp';
import garage480 from '../assets/images/responsive/garage-480.webp';
import addition900 from '../assets/images/room-addition-fountain-inn.webp';
import addition768 from '../assets/images/responsive/addition-768.webp';
import addition480 from '../assets/images/responsive/addition-480.webp';
import screenedPorch900 from '../assets/images/custom-screened-porch-aluminum-frame.webp';
import screenedPorch768 from '../assets/images/responsive/screened-porch-768.webp';
import screenedPorch480 from '../assets/images/responsive/screened-porch-480.webp';
import deck900 from '../assets/images/custom-deck-greenville-sc.webp';
import deck768 from '../assets/images/responsive/deck-768.webp';
import deck480 from '../assets/images/responsive/deck-480.webp';
import adu960 from '../assets/images/adu-cottage-light-gray.webp';
import adu768 from '../assets/images/responsive/adu-768.webp';
import adu480 from '../assets/images/responsive/adu-480.webp';

function makeImageSet(defaultSrc, sources, sizes) {
  return {
    defaultSrc,
    srcSet: sources.map(({ src, width }) => `${src} ${width}w`).join(', '),
    sizes,
  };
}

export const logoImageSet = {
  fallbackSrc: logoPng,
  webpSrcSet: `${logo160} 160w, ${logo320} 320w`,
  sizes: '(max-width: 759px) 106px, 156px',
};

export const heroImageSet = {
  defaultSrc: hero960,
  webpSrcSet: `${hero640} 640w, ${hero960} 960w, ${hero960} 1200w`,
  avifSrcSet: `${hero320Avif} 320w, ${hero640Avif} 640w, ${hero960Avif} 960w, ${hero1200Avif} 1200w`,
  sizes: '(max-width: 759px) calc(100vw - 2rem), (max-width: 1199px) 50vw, 610px',
};

export const garageImageSet = makeImageSet(
  garage900,
  [
    { src: garage480, width: 480 },
    { src: garage768, width: 768 },
    { src: garage900, width: 900 },
  ],
  '(max-width: 759px) calc(100vw - 2rem), (max-width: 899px) calc(50vw - 1.7rem), 31vw'
);

export const additionImageSet = makeImageSet(
  addition900,
  [
    { src: addition480, width: 480 },
    { src: addition768, width: 768 },
    { src: addition900, width: 900 },
  ],
  '(max-width: 759px) calc(100vw - 2rem), (max-width: 899px) calc(50vw - 1.7rem), 31vw'
);

export const screenedPorchImageSet = makeImageSet(
  screenedPorch900,
  [
    { src: screenedPorch480, width: 480 },
    { src: screenedPorch768, width: 768 },
    { src: screenedPorch900, width: 900 },
  ],
  '(max-width: 759px) calc(100vw - 2rem), (max-width: 899px) calc(50vw - 1.7rem), 31vw'
);

export const deckImageSet = makeImageSet(
  deck900,
  [
    { src: deck480, width: 480 },
    { src: deck768, width: 768 },
    { src: deck900, width: 900 },
  ],
  '(max-width: 759px) calc(100vw - 2rem), (max-width: 899px) calc(50vw - 1.7rem), 31vw'
);

export const aduImageSet = makeImageSet(
  adu960,
  [
    { src: adu480, width: 480 },
    { src: adu768, width: 768 },
    { src: adu960, width: 960 },
  ],
  '(max-width: 759px) calc(100vw - 2rem), (max-width: 899px) calc(50vw - 1.7rem), 31vw'
);

export const detailImageSizes = '(max-width: 759px) calc(100vw - 2rem), (max-width: 899px) calc(50vw - 1.7rem), 42vw';
