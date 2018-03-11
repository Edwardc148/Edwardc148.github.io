let projects = document.getElementsByClassName('proj');

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener('mouseenter', (e) => {
    // console.log(projects[i]);
    e.target.getElementsByClassName('pic-view')[0].style += ";display:block";
    // e.target.getElementsByClassName('view-proj')[0].style += ";display:block";
    e.target.style += ";background: rgba(0,0,0,0.8)";
  });

  projects[i].addEventListener('mouseleave', (e) => {
    e.target.getElementsByClassName('pic-view')[0].style -= ";display:block;";
    // e.target.getElementsByClassName('view-proj')[0].style -= ";display:block";
    e.target.style -= ";background: rgba(0,0,0,0.8)";
  });
}
