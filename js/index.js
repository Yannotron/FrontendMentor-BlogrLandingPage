document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

  
        });
      });
    }
    
    // select all dropdowns links
    const navitem = document.querySelectorAll('.navbar-item.has-dropdown');

    // applies a toggle function on click
    navitem.forEach(item => item.addEventListener('click', classToggle));
    // Adds a class hiding the container on click
    function classToggle() {

      //toggles visibility on mobile when dropdown word is clicked

        const child = this.children[1];
        child.classList.toggle('is-hidden');

      //toggles up and down arrow on mobile when dropdown word is clicked

        const navA = this.children[0];
        navA.children[0].classList.toggle('rotated');
    }

    



  });
    
    
    const hiddenContainer = document.querySelectorAll('.navbar-dropdown');

    // will be called whenever window size changes
    window.addEventListener('resize', function() {
      let viewport_width = window.innerWidth;
      if (viewport_width > 1023) {
        hiddenContainer.forEach(item => item.classList.remove('is-hidden'));
      }
      else {
        hiddenContainer.forEach(item => item.classList.add('is-hidden'));
      }

    });
