console.log('HEy')

const gunna = ['https://api.lyrics.ovh/v1/gunna/sold_out_dates', 'https://api.lyrics.ovh/v1/nav/young_wheezy', 'https://api.lyrics.ovh/v1/gunna/rockstar_bikers_&_chains', 'https://api.lyrics.ovh/v1/gunna/who_you_foolin', 'https://api.lyrics.ovh/v1/gunna/top_off']
// const doja = ['https://api.lyrics.ovh/v1/doja_cat/mooo!', 'https://api.lyrics.ovh/v1/doja_cat/kiss_me_more', 'https://api.lyrics.ovh/v1/doja_cat/say_so', 'https://api.lyrics.ovh/v1/doja_cat/get_into_it_(yuh)', 'https://api.lyrics.ovh/v1/doja_cat/roll_with_us']
// const nickel = ['https://api.lyrics.ovh/v1/nickelback/rockstar', 'https://api.lyrics.ovh/v1/nickelback/photograph', 'https://api.lyrics.ovh/v1/nickelback/burn_it_to_the_ground', 'https://api.lyrics.ovh/v1/nickelback/animals', 'https://api.lyrics.ovh/v1/nickelback/how_you_remind_me']
const billie = ['https://api.lyrics.ovh/v1/billie_eilish/ocean_eyes', 'https://api.lyrics.ovh/v1/billie_eilish/when_the_partys_over', 'https://api.lyrics.ovh/v1/billie_eilish/my_future', 'https://api.lyrics.ovh/v1/billie_eilish/everything_i_wanted', 'https://api.lyrics.ovh/v1/billie_eilish/idontwannabeyouanymore']


function TestsFunction() {
  document.body.innerHTML =""
  var T = document.getElementById("TestsDiv"),
      displayValue = "";
  if (T.style.display == "")
      displayValue = "none";

  T.style.display = displayValue;
}
  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}































//var button = document.getElementById('gunna')
//var print = document.getElementById('glyrics')
// for (let i = 0; 1 < 6; i++)
//button.addEventListener('click', () => {
  //print.innerText = ''
  


  // Promise.all([
  //   fetch('https://api.lyrics.ovh/v1/gunna/sold_out_dates'),
  //   fetch('https://api.lyrics.ovh/v1/nav/young_wheezy'),
  //   fetch('https://api.lyrics.ovh/v1/gunna/rockstar_bikers_&_chains'),
  //   fetch('https://api.lyrics.ovh/v1/gunna/who_you_foolin'),
  //   fetch('https://api.lyrics.ovh/v1/gunna/top_off'),
  // ]).then((res) => {
  //   return Promise.all(res.map(function (response) {
  //     return (response)
  //   }))
  //   }).then((resjson) => {
      







  //   })
    
    //     const bar = resjson.lyrics
    //     print.innerText = bar
    //   }).then
    // button.addEventListener('click', () => {
    //   print.innerText = ''
    //   fetch(gunna[1])
    //     .then((res) => {
    //       return res.json()
    //     }).then((resjson) => {
    //       console.log(resjson.lyrics)
    //       const bar = resjson.lyrics
    //       print.innerText = bar
    //     })