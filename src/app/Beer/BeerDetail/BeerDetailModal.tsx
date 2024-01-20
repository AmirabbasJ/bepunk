import { openModal } from '@mantine/modals';

import type { BeerDetailProps } from './BeerDetail';
import { BeerDetail } from './BeerDetail';

const id = 'beer-detail-modal';

type Props = BeerDetailProps;
export const BeerDetailModal = BeerDetail;

export const openBeerDetailModal = (props: Props) =>
  openModal({
    modalId: id,
    children: <BeerDetailModal {...props} />,
    size: 'xl',
    centered: true,
  });
