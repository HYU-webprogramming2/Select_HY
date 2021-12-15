export const questions = [
  {
    number: 1,
    quest: '새내기 첫 식사! 그런데... 점심 메뉴를 어떻게 정하지..!!',
    answers: [{contents: '네이버 앱 추천을 사용한다', value: ['computer']}, {
      contents: '선배들에게 물어본다',
      value: []
    }, {contents: '밥이 중요한게 아니다, 거른다', value: ['philosophy']}],
    image: require('../assets/imgs/1.png')
  },
  {
    number: 2,
    quest: '밥 먹고 공강 시간에... 도서관이나 가볼까? 어느 코너로 갈까?',
    answers: [{contents: '경영경제 코너', value: ['business']}, {
      contents: '공학코너',
      value: ['electrical', 'math', 'mechanic']
    }, {
      contents: '인문학 코너',
      value: ['philosophy', 'language', 'history']
    }, {contents: '도서관에 가느니 친구들 불러서 농구/축구/족구 등등 할래!', value: ['physical']}, {
      contents: 'PC방',
      value: ['computer']
    }, {contents: '코인노래방', value: ['music']}],
    image: require('../assets/imgs/2.png')
  },
  {
    number: 3,
    quest: '내 친구가 수업이 이해가 안된다고 한다... 어떻게 도와줄까??',
    answers: [{contents: '친절하게 설명한다', value: ['education']}, {
      contents: '잘 설명되어있는 구글/유튜브 주소를 넘겨준다',
      value: ['computer']
    }, {contents: '나도 이해를 못해 같이 해보자고 한다', value: ['math']}],
    image: require('../assets/imgs/3.png')
  },
  {
    number: 4,
    quest: '학교를 가는길에 버스에서 ...',
    answers: [{contents: '지나가는 자동차를 본다', value: ['engineering']}, {
      contents: '독특한 건물을 본다',
      value: ['architecture']
    }, {contents: '사람들 입은 옷을 본다', value: ['life']}, {contents: '핸드폰으로 게임한다', value: ['computer']}],
    image: require('../assets/imgs/4.png')
  },
  {
    number: 5,
    quest: '다큐멘터리에서 실험당하는 동물을 보며 나는...',
    answers: [{contents: '흥미롭다', value: ['engineering']}, {
      contents: '불쌍하다, 왜 저러한 운명에 처해야했는지 생각해본다',
      value: ['philosophy']
    }, {contents: '관찰레포트를 적어야하는 기분이 든다', value: ['math', 'medical']}],
    image: require('../assets/imgs/5.png')
  },
  {
    number: 6,
    quest: '으악! 😣 한양대역 2번출구 육교를 건너다 다리가 삐걱거리는 것을 느꼈다! 나는..',
    answers: [{contents: '얼른 내려가서 신속하게 신고한다', value: []}, {
      contents: '다시 건너도 삐그덕거릴까? 한번 다시 건너본다',
      value: ['engineering', 'mechanic']
    }],
    image: require('../assets/imgs/6.png')
  },
  {
    number: 7,
    quest: 'Excuse me! 갑자기 외국인 학생이 도서관 가는 길을 물어본다...',
    answers: [{contents: '유창한 외국어로 가는 길을 설명해준다', value: ['language']}, {
      contents: '손짓발짓을 섞어가며 가는 길을 설명하려고 노력한다',
      value: ['politic']
    }, {contents: '지도 앱을 켜고 최적의 경로를 보여준다', value: ['computer']}],
    image: require('../assets/imgs/7.png')
  },
  {
    number: 8,
    quest: '"저희 그러면 이제 역할 나눌까요...?" 팀플 역할 나누는 시간, 내 역할은...',
    answers: [{contents: '제가 ⭐️발표⭐️하겠습니다', value: ['business']}, {
      contents: '발표 싫어... 꼼꼼한 자료 조사',
      value: ['politic']
    }, {contents: '시선을 사로잡는 PPT 만들기', value: ['life']}],
    image: require('../assets/imgs/8.png')
  },
  {
    number: 9,
    quest: '이제는 공부해야 한다... 기말고사 시즌 나의 도서관 자리는?',
    answers: [{
      contents: '자유롭게 이야기하며 공부할 수 있는 그룹스터디룸',
      value: ['politic', 'education']
    }, {contents: '마음껏 타자칠 수 있는 Creative Zone', value: ['computer']}, {
      contents: '과학책들로 둘러싸인 과학기술실',
      value: ['architecture']
    }, {contents: '조용히 공부할 수 있는 열람실', value: ['medical']}, {
      contents: '난 도서관 말고 연습실 간다...',
      value: ['music', 'physical']
    }],
    image: require('../assets/imgs/9.png')
  },
  {
    number: 10,
    quest: '친구들과 밥 먹고 계산하는 시간, 나는...',
    answers: [{contents: '정확히 1939원씩 내면 돼', value: ['business']}, {
      contents: '카카오 정산하기 쓸게~',
      value: ['architecture', 'electrical', 'engineering', 'mechanic', 'computer']
    }, {contents: '가위바위보 진 사람이 내자', value: []}],
    image: require('../assets/imgs/10.png')
  },
  {
    number: 11,
    quest: '이 과목 재밌겠다! 수강편람 조회 중 내 눈에 들어온 교양 과목은...',
    answers: [{
      contents: '새로운 언어를 배워보고 싶어! \'기초프랑스어\', \'기초스페인어\'',
      value: ['language']
    }, {contents: '인체의 신비 \'뇌과학의이해\', \'기초법의학\'', value: ['medical']}, {
      contents: '법 모르면 손해 \'생활법률\', \'대중문화와법\'',
      value: 'politic'
    }, {
      contents: '역사를 잊은 민족에게 미래는 없다 \'영화로보는서양의역사\', \'한국근현대사\'',
      value: ['history']
    }, {
      contents: '나도 건축학개론...?😏 \'주거학개론\'',
      value: ['architecture']
    }, {contents: 'CC 탄생 국룰 교양 \'교양댄스스포츠\', \'대학합창\'', value: ['music', 'physical']}, {
      contents: '한양대 교양 명강 \'분석과비판\'',
      value: ['philosophy']
    }],
    image: require('../assets/imgs/11.png')
  },
  {
    number: 12,
    quest: '봄학기 나의 개강룩은?.',
    answers: [{contents: '누가 봐도 새내기! 신경 써서 고른 코트에 예쁜 바지', value: ['music']}, {
      contents: '교수님의 사랑을 받을 발표자 정석 슬랙스에 단정 셔츠',
      value: ['politic', 'business']
    }, {contents: '편한 게 최고... 후드에 백팩', value: ['electrical', 'computer']}, {
      contents: '그래프 그리기 좋은 체크남방',
      value: ['architecture', 'medical']
    }, {contents: '실험복에 고글 ganzi', value: ['math', 'engineering']}],
    image: require('../assets/imgs/12.png')
  },
  {
    number: 13,
    quest: '"안녕하세요~ 인상이 좋으셔서 그러는데..." 왕십리 거리에서 이상한 사람에게 붙잡힌 나는...',
    answers: [{contents: '무시하고 가던 길 가기', value: []},
      {contents: '논리적인 반박으로 혼 탈탈 털기', value: ['philosophy']}],
    image: require('../assets/imgs/13.png')
  },
  {
    number: 14,
    quest: '드디어 한양대에 입학한 아기사자! 우리 과 건물은...',
    answers: [{contents: '캠퍼스 로망 충족 야경이 보이는 언덕 위 건물', value: ['language', 'philosophy', 'history', 'math']},
      {contents: '수업 1분 전에 지하철역에서 뛰어가도 지각 안 하는 애지문 바로 앞 건물', value: ['politic']},
      {contents: '갈 때마다 눈이 즐거운 예쁜 건물', value: ['education', 'business']},
      {contents: '최첨단 H-반짝반짝 유리건물', value: ['engineering', 'computer']}],
    image: require('../assets/imgs/14.png')
  },
  {
    number: 15,
    quest: '화려했던 고등학교 시절...⭐️ 학교에서 내 포지션은?',
    answers: [{contents: '안 친한 사람이 없는 우리 반 인싸 반장', value: ['business']},
      {contents: '무슨 문제든 주면 셔츠 걷고 풀어주는 수학천재', value: ['math']},
      {contents: '따스한 햇볕이 내리쬐는 도서관 창가에 책 들고 앉아있던 첫사랑 선배', value: ['history']},
      {contents: '매일 점심 먹고 운동장에 출석하는 축구선수', value: ['physical']},
      {contents: '힘들 때마다 옆에서 조언하고 위로해주는 따뜻한 친구', value: ['선생님의 사랑을 듬뿍 받는 전교 1등']}],
    image: require('../assets/imgs/15.png')
  },
]
