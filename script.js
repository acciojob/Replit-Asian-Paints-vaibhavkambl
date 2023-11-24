//your JS code here. If required.
function changeColor() {
      const blockId = document.getElementById('block_id').value;
      const color = document.getElementById('colour_id').value;

      const block = document.getElementById(blockId);
      if (block) {
        block.style.backgroundColor = color;
      }
    }

    function resetColors() {
      const gridItems = document.querySelectorAll('.grid-item');
      gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
      });
    }