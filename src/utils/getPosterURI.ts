export const getPosterURI = (poster?: string, w = 300, h = 450) =>
  `https://www.themoviedb.org/t/p/w${w}_and_h${h}_bestv2${poster}`;
