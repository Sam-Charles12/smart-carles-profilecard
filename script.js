const updateTime = () => {
  const timeSpan = document.querySelector('[data-testid="test-user-time"]');
  if (!timeSpan) {
    return;
  }
  timeSpan.textContent = Date.now().toString();
};

updateTime();
setInterval(updateTime, 1000);
