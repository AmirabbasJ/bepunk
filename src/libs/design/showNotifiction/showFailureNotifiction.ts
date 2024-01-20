import type { NotificationData } from '@mantine/notifications';
import { showNotification } from '@mantine/notifications';

export const showFailureNotifiction = ({ ...props }: NotificationData) => {
  showNotification({
    color: 'red',
    ...props,
  });
};
