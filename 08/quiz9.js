const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

const changeLog = (text) => {
  $log.innerHTML = text;
}

const fetchUrl = () => {
  const url = $url.value;

  if (!url.trim()) {
    // eslint-disable-next-line no-alert
    alert('url을 입력하시오');
    $url.value = '';
  } else {
    fetch(url)
      .then(res => {
        res.text().then(text => changeLog(text));
      })
      .catch(err => {
        $log.value = err;
      })
  }
}

const enterPress = (e) => {
  if (e.keyCode === 13) {
    fetchUrl();
  }
}

$url.addEventListener('keypress', enterPress);
$btn.addEventListener('click', fetchUrl);