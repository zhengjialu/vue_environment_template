/**
 * 目前只处理了三级菜单
 */

const routeLink = [
  {
    title: '测试1',
    key: '1',
    path: '/hello',
  },
  {
    title: '测试2',
    key: '2',
    path: '/hello',
  },
  {
    title: '测试3',
    key: '3',
    path: '/hello',
    children: [
      {
        title: '测试3-1',
        key: '3-1',
        path: '/hello',
        children: [
          {
            title: '测试3-1-1',
            key: '3-1-1',
            path: '/hello',
          },
        ],
      },
    ],
  },
]

export default routeLink
