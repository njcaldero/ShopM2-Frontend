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
          name: 'Turno',
          url: '/login',
          icon: 'icon-cursor'
        },
        {
          name: 'Asesor',
          url: '/register',
          icon: 'icon-puzzle'
        },

        {
          name: 'Recuperar Turno',
          url: '/404',
          icon: 'icon-ban'
        }
      ]
    },

  ];
