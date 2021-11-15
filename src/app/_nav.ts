import { INavData } from '@coreui/angular';

export const navItems: INavData[] =
  [
    {
      divider: true
    },
    {
      title: true,
      name: 'ShopM2',
    },
    {
      name: 'Products',
      url: '/products',
      icon: 'icon-bell'
    },
    {
      name: 'My Orders',
      url: '/orders',
      icon: 'icon-cursor'
    }



  ];
