const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $view = document.querySelector('#view-more');
const url = 'https://dapi.kakao.com/v2/search/web';
const text = [];
let pageNum = 1;
let value = '';
const headers = {
  Authorization: "KakaoAK b3e73ba9a262729ab30d9e10007e1485"
}

function success(data) {
  const {
    documents
  } = data;
  const li = documents.map(doc => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_black">${doc.title}</a></li>`
  });
  text.push(...li);

  $result.innerHTML = `<ul class="list-group list-group-flush">${text.join('')}</ul>`
}

function error() {
  // eslint-disable-next-line no-alert
  alert('데이터를 가져올수 없습니다.')
}

function searchFetch() {
  fetch(`${url}?query=${value}&page=${pageNum}`, {
      headers
    })
    .then((res) => res.json())
    .then(success)
    .catch(error);
}

function search() {
  value = $text.value;

  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }

  pageNum = 1;
  searchFetch(value);

  return true;
}

function readText() {
  pageNum += 1;
  searchFetch();
}

$btn.addEventListener('click', search);
$view.addEventListener('click', readText);