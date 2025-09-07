const createElement = (tag, className, text = '') => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

const appendChildren = (parent, children) => {
  children.forEach(child => parent.appendChild(child));
};

export const POPUPS_CONFIG = {
  'main-menu': {
    buildContent(body) {
      const ul = createElement('ul', 'popup__links');
      
      const menuItems = [
        { id: 'about-me', text: 'About me' },
        { id: 'project', text: 'Projects' },
        { id: 'about-school', text: 'School' },
        { id: 'price', text: 'Prices' }
      ];

      menuItems.forEach(item => {
        const li = createElement('li', 'popup__links-li', item.text);
        li.id = item.id;
        ul.appendChild(li);
      });

      const contactsLi = createElement('li', 'popup__links-li popup__image-list-item popup__image-list-item_contacts');
      contactsLi.id = 'contacts';
      
      const icons = [
        { src: './images/contacts-mail.png', class: 'active' },
        { src: './images/contacts-phone.png' },
        { src: './images/contacts-location.png' }
      ];

      icons.forEach(icon => {
        const img = createElement('img', 'popup__icons popup__contacts-menu-icon');
        img.src = icon.src;
        if (icon.class) img.classList.add(icon.class);
        contactsLi.appendChild(img);
      });

      ul.appendChild(contactsLi);
      body.appendChild(ul);
    },
    triggers: [
      { selector: '.main-title__hamburger-menu-icon' }
    ]
  },

  'links-menu': {
    buildContent(body) {
      const socialUl = createElement('ul', 'popup__links');
      
      const socialLinks = [
        { href: 'https://www.instagram.com/konstantinartfencing/', src: './images/insta.svg', alt: 'Instagram icon' },
        { href: 'https://vk.com/viganorth', src: './images/vk.png', alt: 'VKontakte icon' }
      ];

      socialLinks.forEach(link => {
        const li = createElement('li', 'popup__icons');
        const a = createElement('a');
        a.href = link.href;
        a.target = '_blank';
        const img = createElement('img');
        img.src = link.src;
        img.alt = link.alt;
        a.appendChild(img);
        li.appendChild(a);
        socialUl.appendChild(li);
      });

      body.appendChild(socialUl);

      // Навигация
      const nav = createElement('nav', 'navbar');
      
      const title = createElement('h4', 'navbar__title', 'Contacts');
      const hr = createElement('hr', 'hr');
      
      const navUl = createElement('ul', 'navbar__links');
      
      const navItems = [
        { 
          href: 'https://www.instagram.com/konstantinartfencing/',
          text: 'Instagram',
          description: 'Personal blog'
        },
        {
          href: 'https://vk.com/viganorth',
          text: 'VKontakte',
          description: 'More photos in albums'
        },
        {
          href: 'https://t.me/KonstantinRehabilitation',
          text: 'Telegram',
          description: 'Write me'
        }
      ];

      navItems.forEach(item => {
        const li = createElement('li', 'navbar__link');
        const a = createElement('a', 'nav-translate', item.text);
        a.href = item.href;
        a.target = '_blank';
        const p = createElement('p', 'nav-translate', item.description);
        appendChildren(li, [a, p]);
        navUl.appendChild(li);
      });

      appendChildren(nav, [title, hr, navUl]);
      body.appendChild(nav);
    },
    triggers: [
      { selector: '.popup__image-list-item_contacts' }
    ]
  },

  'about-me': {
    buildContent(body) {
      const div = createElement('div', 'about-trainer__text');
      const h3 = createElement('h3', '', 'About me');
      
      const paragraphs = [
        'Hello, my name is Konstantin Zelenov and I am happy to share my story with you. I devoted the last 20 years of my life to fencing, honing my skills as an athlete, stuntman, theater and film actor.',
        'I have twice become world champion in artistic fencing. Several times I was the champion of Russia and a multiple winner of competitions in artistic fencing.',
        'Whether you dream of climbing the championship podium or just want to experience the thrill of this ancient art form. I am here to help you every step of the way. Contact me today to start an exciting adventure in the world of swordsmanship. Lets create something extraordinary together!'
      ];

      const pElements = paragraphs.map(text => 
        createElement('p', 'about-trainer__text-p', text)
      );

      appendChildren(div, [h3, ...pElements]);
      body.appendChild(div);
    },
    triggers: [
      { selector: '#about-me', parentPopup: 'main-menu' }
    ]
  },

  'about-projects': {
    buildContent(body) {
      const section = createElement('section', 'projects-content');
      const h2 = createElement('h2', '', 'My Projects');
      
      const projects = [
        {
          title: 'Artistic Fencing Performances',
          description: 'Choreographed fight scenes for theater and film productions'
        },
        {
          title: 'Stunt Coordination',
          description: 'Safety-focused fight scene direction for action movies'
        },
        {
          title: 'Historical Martial Arts',
          description: 'Reconstruction of medieval and renaissance combat techniques'
        }
      ];

      const ul = createElement('ul', 'projects-list');
      
      projects.forEach(project => {
        const li = createElement('li', 'project-item');
        const h3 = createElement('h3', '', project.title);
        const p = createElement('p', '', project.description);
        
        appendChildren(li, [h3, p]);
        ul.appendChild(li);
      });

      appendChildren(section, [h2, ul]);
      body.appendChild(section);
    },
    triggers: [
      { selector: '#project', parentPopup: 'main-menu' }
    ]
  },

  'about-school': {
    buildContent(body) {
      const section = createElement('section', 'video-content');
      section.id = 'about-school';
      
      const div = createElement('div', 'video-content__description');
      const h2 = createElement('h2', '', 'About School');
      
      const text = 'Welcome to our fencing school. Our fencing lessons will not only teach you the basics of technique such as attack, defense and movement, but will also help you develop flexibility, coordination and strength. Each student will receive attention and support in order to achieve maximum results in their development as a swordsman.';
      
      const p = createElement('p', 'video-content__description-text', text);

      appendChildren(div, [h2, p]);
      section.appendChild(div);
      body.appendChild(section);
    },
    triggers: [
      { selector: '#about-school', parentPopup: 'main-menu' }
    ]
  },

  'prices': {
    buildContent(body) {
      const section = createElement('section', 'price');
      const h2 = createElement('h2', 'price__header', 'Price list');
      
      const ul = createElement('ul', 'check-box__list');
      
      const priceOptions = [
        { id: 'personal', label: 'Personal training' },
        { id: 'split', label: 'Split training' },
        { id: 'group', label: 'Group training' },
        { id: 'video', label: 'Shooting video' }
      ];

      priceOptions.forEach(option => {
        const li = createElement('li', 'check-box__list-item');
        const label = createElement('label');
        const input = createElement('input', 'checkbox');
        input.type = 'checkbox';
        input.id = option.id;
        input.name = 'option';
        label.appendChild(input);
        label.append(` ${option.label}`);
        li.appendChild(label);
        ul.appendChild(li);
      });

      const descUl = createElement('ul', 'description-price__list');
      
      const descItems = [
        { id: 'duration', label: 'Duration:' },
        { id: 'prices', label: 'Price:' },
        { id: 'description', label: 'Description:' }
      ];

      descItems.forEach(item => {
        const li = createElement('li', 'description-price__list-item');
        const label = createElement('label', 'description-price__list-label', item.label);
        const input = createElement('input');
        input.type = 'text';
        input.id = item.id;
        input.name = item.id;
        label.appendChild(input);
        li.appendChild(label);
        descUl.appendChild(li);
      });

      const button = createElement('button', 'priceButton', 'Next');
      button.type = 'button';

      appendChildren(section, [h2, ul, descUl, button]);
      body.appendChild(section);
    },
    triggers: [
      { selector: '#price', parentPopup: 'main-menu' }
    ]
  },

  'form': {
    buildContent(body) {
      const form = createElement('form', 'form');
      form.action = 'http://localhost:3000/users';
      form.method = 'post';
      
      const fieldset = createElement('fieldset', 'form__fieldset');
      const legend = createElement('legend', 'form__legend', 'Contact me');
      
      const ul = createElement('ul', 'form__list');
      
      const formFields = [
        { type: 'text', id: 'name', label: 'Name:', placeholder: 'Your name', required: true },
        { type: 'email', id: 'mail', label: 'Email:', placeholder: 'example@gmail.com', required: true },
        { 
          type: 'select', 
          id: 'train', 
          label: 'Lessons:', 
          options: [
            { value: 'SW', text: 'Sword' },
            { value: 'SP', text: 'Spear' },
            { value: 'RP', text: 'Rapier' },
            { value: 'SaS', text: 'Sword and Shield' },
            { value: 'DS', text: 'Double Sword' },
            { value: 'SF', text: 'Staff' }
          ]
        },
        { type: 'textarea', id: 'msg', label: 'Message:' }
      ];

      formFields.forEach(field => {
        const li = createElement('li', 'form__list-item');
        const label = createElement('label', 'form__label', field.label);
        label.htmlFor = field.id;
        
        let input;
        if (field.type === 'select') {
          input = createElement('select', 'form__select');
          input.id = field.id;
          input.name = 'user_' + field.id;
          
          field.options.forEach(option => {
            const opt = createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            input.appendChild(opt);
          });
        } 
        else if (field.type === 'textarea') {
          input = createElement('textarea', 'form__textarea');
          input.id = field.id;
          input.name = 'user_' + field.id;
        }
        else {
          input = createElement('input', 'form__input');
          input.type = field.type;
          input.id = field.id;
          input.name = 'user_' + field.id;
          if (field.placeholder) input.placeholder = field.placeholder;
          if (field.required) input.required = true;
        }
        
        li.appendChild(label);
        li.appendChild(input);
        ul.appendChild(li);
      });

      // Кнопка отправки
      const submitLi = createElement('li', 'form__list-item');
      const submitButton = createElement('button', 'form__button', 'Send your message');
      submitButton.type = 'submit';
      submitLi.appendChild(submitButton);
      ul.appendChild(submitLi);

      appendChildren(fieldset, [legend, ul]);
      form.appendChild(fieldset);
      body.appendChild(form);
    },
    triggers: [
      { selector: '.priceButton', parentPopup: 'prices' }
    ]
  }
};