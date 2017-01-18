const checkBoxes = document.querySelectorAll('.list input[type="checkbox"]');

let last;

function holdChecked(e) {

  let inBetween = false;

  if (e.shiftKey && this.checked) {
      checkBoxes.forEach(checkbox => {
        if (checkbox === this || checkbox === last) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          checkbox.checked = true;
        }
      })
  }

  last = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click',holdChecked));
