// Toggle & Responsive Navigation
// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
      // Toggle nav and burger class
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
  });
};

navSlide();


// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// model html
const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
"--scroll-padding",
navigationHeight + "px"
);



// pesan
// function handleKeyPressMessage(e, inputId) {
//   if (e.key === 'Enter') {
//     sendMessageMessage(inputId);
//   }
// }

// async function sendMessageMessage(inputId) {
//   const token = '6051274456:AAEl9jNDwK8c6Yz8AlA0b_AUYusIT-mQSU8';
//   const chatId = '1360476366';
//   const text = document.getElementById(inputId).value;

//   if (text.trim() !== '') {
//     const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`);
    
//     if (response.ok) {
//       console.log('Pesan berhasil dikirim');
//       document.getElementById(inputId).value = '';
//     } else {
//       console.log('Gagal mengirim pesan');
//     }
//   }
// }

// pesan
// pesan
function handleKeyPressMessage(e, inputId, portfolioName) {
  if (e.key === 'Enter') {
    sendMessageMessage(inputId, portfolioName);
  }
}

async function sendMessageMessage(inputId, portfolioName) {
  const token = '6051274456:AAEl9jNDwK8c6Yz8AlA0b_AUYusIT-mQSU8';
  const chatId = '1360476366';
  const text = document.getElementById(inputId).value;

  // Menambahkan nama portofolio ke pesan
  const message = `Ingin bicara dengan ${portfolioName}: ${text}`;

  if (text.trim() !== '') {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`);
    
    if (response.ok) {
      console.log('Pesan berhasil dikirim');
      document.getElementById(inputId).value = '';
    } else {
      console.log('Gagal mengirim pesan');
    }
  }
}




// untuk rating 
async function sendMessageRating() {
  const token = '6051274456:AAEl9jNDwK8c6Yz8AlA0b_AUYusIT-mQSU8';
  const chatId = '1360476366';
  const name = document.querySelector('input[name="name"]').value;
  const rate = document.querySelector('input[name="rate"]:checked').nextElementSibling.getAttribute('title');
  
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${name} rated their day as ${rate}`);
  
  if (response.ok) {
    alert('Pesan berhasil dikirim');
    document.getElementById('myForm').reset();
  } else {
    alert('Gagal mengirim pesan');
  }
}
