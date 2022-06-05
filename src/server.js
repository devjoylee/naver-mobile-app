import { createServer } from 'miragejs';

let users = [
  {
    id: 'joylee',
    password: '1234',
    name: 'Joy',
    profile: 'https://ziclife.com/wp-content/uploads/2020/08/cute-avatar-image-48.jpg',
  },
];

createServer({
  routes() {
    this.namespace = 'api';

    this.post('/users', (s, req) => {
      const user = JSON.parse(req.requestBody);
      users.push(user);
      return user;
    });

    this.get('/users', () => {
      return { users };
    });

    this.get('/webtoons', () => {
      return {
        webtoons: [
          {
            id: 0,
            title: '외모지상주의',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F641253%2Fthumbnail%2Ftitle_thumbnail_20150323150624_t220x202.jpg%22&type=f220_138&service=navermain',
            author: '박태준',
          },
          {
            id: 1,
            title: '관계의 종말',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F752803%2Fthumbnail%2Fthumbnail_IMAG19_b796561c-fe2d-4594-a4df-e7b22dd1a8b3.jpg%22&type=f220_138&service=navermain',
            author: '김용키',
          },
          {
            id: 2,
            title: '이두나',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F731130%2Fthumbnail%2Fthumbnail_IMAG19_b53ffd0d-3f3d-4a9a-a6a7-0a1dd0313d19.jpg%22&type=f220_138&service=navermain',
            author: '민송이',
          },
          {
            id: 3,
            title: '기기괴괴',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F557672%2Fthumbnail%2Fthumbnail_IMAG19_f4e1a72f-f868-43ce-aea0-0486d1d3ee31.jpg%22&type=f220_138&service=navermain',
            author: '오성대',
          },
          {
            id: 4,
            title: '선의의 경쟁',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748069%2Fthumbnail%2Fthumbnail_IMAG19_9854a59c-e436-4677-99f7-b92b0f135f6e.jpg%22&type=f220_138&service=navermain',
            author: '송채윤/심재영',
          },
          {
            id: 5,
            title: '데드퀸',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F753478%2Fthumbnail%2Fthumbnail_IMAG19_6bd89b70-deff-4849-aeef-41eb5af000a1.jpg%22&type=f220_138&service=navermain',
            author: '김규삼',
          },
          {
            id: 6,
            title: '갓 오브 하이스쿨',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F318995%2Fthumbnail%2Ftitle_thumbnail_20150323150655_t220x202.jpg%22&type=f220_138&service=navermain',
            author: '박용제',
          },
          {
            id: 7,
            title: '1 초',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F725586%2Fthumbnail%2Fthumbnail_IMAG19_7d4c905d-0988-4016-bb4b-b9c0e2f93c60.jpg%22&type=f220_138&service=navermain',
            author: '시나',
          },
        ],
      };
    });

    this.get('/recommend', () => {
      return {
        webtoons: [
          {
            id: 8,
            title: '데드퀸',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F753478%2Fthumbnail%2Fthumbnail_IMAG19_6bd89b70-deff-4849-aeef-41eb5af000a1.jpg%22&type=f220_138&service=navermain',
            author: '김규삼',
          },
          {
            id: 9,
            title: '갓 오브 하이스쿨',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F318995%2Fthumbnail%2Ftitle_thumbnail_20150323150655_t220x202.jpg%22&type=f220_138&service=navermain',
            author: '박용제',
          },
          {
            id: 10,
            title: '1 초',
            image:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F725586%2Fthumbnail%2Fthumbnail_IMAG19_7d4c905d-0988-4016-bb4b-b9c0e2f93c60.jpg%22&type=f220_138&service=navermain',
            author: '시나',
          },
        ],
      };
    });
  },
});
