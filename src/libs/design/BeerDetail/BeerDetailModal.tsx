import { openModal } from '@mantine/modals';

import type { Beer } from '@/domain';

import { BeerDetail } from './BeerDetail';

interface Props {
  beer: Beer;
}
const id = 'beer-detail-modal';

export const BeerDetailModal = ({ beer }: Props) => {
  return <BeerDetail beer={beer} />;
};

export const openBeerDetailModal = (beer: Beer) =>
  openModal({
    modalId: id,
    children: <BeerDetailModal beer={beer} />,
    size: 'xl',
    centered: true,
  });
