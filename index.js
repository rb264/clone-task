function displayCurrentDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = currentDate.toLocaleDateString('en-US', options);
  document.getElementById('current-date').innerText = dateString;
}

