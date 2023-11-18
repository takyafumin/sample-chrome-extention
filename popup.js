document.getElementById("btn").addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: onRun,
  });
});

document.getElementById("btn-set-google-search-keyword").addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setGoogleSearchKeyword,
  });
});

function onRun() {
  document.body.style.backgroundColor = "#fcc"
}

const setGoogleSearchKeyword = () => {
  const input = document.getElementById('APjFqb');
  input.value = 'Search Keyword Set!!';
}

