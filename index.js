function superbowlWin(records) {
  const win = records.find(r => r.result === "W");

  if(win) {
    return win.year;
  } else {
    return win;
  }
}