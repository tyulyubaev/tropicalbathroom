const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#service').value = link.dataset.service;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#quote-form');
function enquiry() {
  if (!form.reportValidity()) return null;
  const data = new FormData(form);
  const phone = String(data.get('phone')).replace(/\D/g, '');
  if (phone.length < 10 || phone.length > 15) {
    document.querySelector('#form-status').textContent = 'Please enter a contact number with 10–15 digits.';
    document.querySelector('#phone').focus();
    return null;
  }
  document.querySelector('#form-status').textContent = '';
  return `Hello Tropical Bathroom, I’d like to discuss a bathroom project.\n\nName: ${data.get('name')}\nPostcode: ${data.get('postcode')}\nPhone: ${data.get('phone')}\nProject: ${data.get('service')}\nDetails: ${data.get('details') || 'To be discussed'}\n\nI can send photos of my current bathroom.`;
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const text = enquiry();
  if (text) window.location.href = `https://wa.me/447380268355?text=${encodeURIComponent(text)}`;
});
document.querySelector('#email-quote').addEventListener('click', () => {
  const text = enquiry();
  if (text) window.location.href = `mailto:quote@tropicalbathroom.com?subject=${encodeURIComponent('Bathroom renovation enquiry')}&body=${encodeURIComponent(text)}`;
});
