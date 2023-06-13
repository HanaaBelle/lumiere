
<script>
    var cats = ['bill', 'jeff', 'pete', 'biggles', 'jasmin'];
    for(let i= 0; i < cats.length ; i++) {
        cats[i] = cats[i].charAt(0).toUpperCase() + cats[i].slice(1);
    };
    let info = 'My cats are called ';
    let para = document.querySelector('p');
    cats.forEach(cat => {
      if (cat.length == 4) {
        info += cat + ' ';
      }
    });
    para.textContent = info;
    </script>