const btn = document.getElementById('btnID');

// ✅ Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'Show ˅';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Hide ^';
  } else {
    btn.textContent = initialText;
  }
});

/**
 * ✅ If you need to change the button's inner HTML use:
 *  - `innerHTML` instead of `textContent`
 */

