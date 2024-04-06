const folders = [
  {
    'id': 14,
    'created_at': '2023-06-04T20:59:39.293024+00:00',
    'name': '⭐️ 즐겨찾기',
    'user_id': 1,
    'favorite': true,
    'link': {
      'count': 0,
    },
  },
  {
    'id': 24,
    'created_at': '2023-06-18T13:33:09.993192+00:00',
    'name': '신규 폴더1',
    'user_id': 1,
    'favorite': false,
    'link': {
      'count': 0,
    },
  },
  {
    'id': 307,
    'created_at': '2024-01-12T15:08:12.873779+00:00',
    'name': '새로운폴더스',
    'user_id': 1,
    'favorite': false,
    'link': {
      'count': 0,
    },
  },
  {
    'id': 433,
    'created_at': '2024-01-14T12:01:27.040783+00:00',
    'name': '유담이와 아이들',
    'user_id': 1,
    'favorite': false,
    'link': {
      'count': 0,
    },
  },
  {
    'id': 441,
    'created_at': '2024-01-14T12:40:56.383949+00:00',
    'name': '안 없어져',
    'user_id': 1,
    'favorite': false,
    'link': {
      'count': 0,
    },
  },
  {
    'id': 457,
    'created_at': '2024-01-14T13:47:32.813674+00:00',
    'name': '또',
    'user_id': 1,
    'favorite': false,
    'link': {
      'count': 0,
    },
  },
  {
    'id': 480,
    'created_at': '2024-01-15T11:03:07.802566+00:00',
    'name': '추가',
    'user_id': 1,
    'favorite': false,
    'link': {
      'count': 0,
    },
  },
  {
    'id': 513,
    'created_at': '2024-01-18T15:55:27.603912+00:00',
    'name': 'string2',
    'user_id': 1,
    'favorite': false,
    'link': {
      'count': 0,
    },
  },
];

const links = [
  {
    'id': 192,
    'created_at': '2023-06-30T08:07:41.588529+00:00',
    'updated_at': null,
    'url': 'https://bootcamp-api.codeit.kr/docs',
    'title': null,
    'description': null,
    'image_source': null,
    'folder_id': null,
  },
  {
    'id': 189,
    'created_at': '2023-06-30T06:55:56.9917+00:00',
    'updated_at': null,
    'url': 'https://www.google.com/',
    'title': 'Google',
    'description':
      "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
    'image_source': null,
    'folder_id': null,
  },
  {
    'id': 188,
    'created_at': '2023-06-30T05:15:37.191878+00:00',
    'updated_at': null,
    'url':
      'https://jasonwatmore.com/next-js-13-mongodb-user-registration-and-login-tutorial-with-example-app',
    'title':
      "Next.js 13 + MongoDB - User Registration and Login Tutorial with Example App | Jason Watmore's Blog",
    'description':
      "In this tutorial we'll go through an example of how to build a simple user registration, login and user management (CRUD) application with Next.js and MongoDB.",
    'image_source': 'https://jasonwatmore.com/_content/images/jason.jpg',
    'folder_id': null,
  },
];

// fetch('https://bootcamp-api.codeit.kr/api/users/1/folders')
//   .then((response) => response.json())
//   .then((result) => {});

export { folders, links };
