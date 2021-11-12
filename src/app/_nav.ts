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
      name: 'Menu',
      url: '/pages',
      icon: 'icon-star',
      children: [
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
      ]
    },

  ];
