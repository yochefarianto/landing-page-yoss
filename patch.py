with open('/Users/yosss/Downloads/Landing-page-yos-new/main.js', 'r') as f:
    content = f.read()

old_code = """  if (eggTrigger) {
    eggTrigger.addEventListener('click', () => {
      modal.classList.add('flex-active');
      initFlappyGame();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('flex-active');
      if (flappyLoopId) {
        cancelAnimationFrame(flappyLoopId);
        flappyLoopId = null;
      }
    });
  }"""

new_code = """  if (eggTrigger) {
    eggTrigger.addEventListener('click', () => {
      modal.classList.add('flex-active');
      document.querySelectorAll('.tilt-shift-overlay, .dreamy-overlay').forEach(el => el.style.display = 'none');
      initFlappyGame();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('flex-active');
      document.querySelectorAll('.tilt-shift-overlay, .dreamy-overlay').forEach(el => el.style.display = 'block');
      if (flappyLoopId) {
        cancelAnimationFrame(flappyLoopId);
        flappyLoopId = null;
      }
    });
  }"""

if old_code in content:
    content = content.replace(old_code, new_code)
    with open('/Users/yosss/Downloads/Landing-page-yos-new/main.js', 'w') as f:
        f.write(content)
    print("Success")
else:
    print("Code not found")
