import localFont from 'next/font/local';

export const font = localFont({
  src: [
    {
      path: '../../../../public/fonts/Roboto-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
