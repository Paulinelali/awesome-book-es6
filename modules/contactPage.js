const pageWrapper = document.getElementById('main');

const contactPage = () => {
  const contact = `
    <div class="contact-page-wrapper">
        <h2 class="page-title">Contact information</h2>
        <p>Do you have any have any question or you just want to say "Hello"? You can reach out to us!</p>
        <ul class="padded-ul">
            <li>Our e-mail: ayomide.s.e.p@gmail.com</li>
            <li>Our phone number: +2347030656411</li>
            <li>Our address: 40 Berckley street, Obalende Lagos, Nigeria</li>
        </ul>
    </div>`;
  pageWrapper.innerHTML = contact;
};

export default contactPage;