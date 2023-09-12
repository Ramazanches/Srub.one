

document.addEventListener("DOMContentLoaded", () => {

'use strict';

	const body = document.body,
				header = document.querySelector('header'),
				nav = document.querySelector('.header__nav'),
				navHeight = nav.offsetHeight + 'px',
				icon = document.querySelector('.menu__icon'),
				menuBody = document.querySelector('.menu__list'),
				gallery = document.querySelector('#gallery'),
				social = document.querySelector('.section-1__social-md'),
				socialBody = document.querySelector('.section-1__social');

	social.onclick = () => { toggleActive(social, socialBody) }

	function exec (func) {
	  let wait = 0;
	  let queue= [];  
	  if (wait)  queue.push (func);
	  else try { 
	    func () 
	  } 
	  catch (err) { 
	    console.log(err) 
	  }
	} 

	const setHeightByWindow = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);		
	}

	document.querySelector('#form').onsubmit = async (e) => {
		e.preventDefault();
		let response = await fetch('mail.php', {
		  method: 'POST',
		  body: new FormData(formElem)
		});
		let result = await response.json();
		alert(result.message);
	};	
 
	function scrollTransform() {
		if (nav) {
			pageYOffset >= 90 ? 
			nav.classList.add('active') : 
			nav.classList.remove('active');			
		}
	}

  function createNode(el, cls, content, attr, val, attr2, val2) {
  	let elem = document.createElement(el);
  	if (cls) elem.className = cls;
  	if (attr) elem.setAttribute(attr, val) 
  	if (attr2) elem.setAttribute(attr2, val2)   	
  	if (content) elem.append(content)
  	return elem;
  }

	function toggleActive(i, obj) {
		i.classList.toggle('_active');			
		body.classList.toggle('_lock');
		obj.classList.toggle('_active');							
	}

	function bindWidth() {
		const getterElem = document.querySelectorAll('[data-bind]');
		if (getterElem.length > 0) {
			getterElem.forEach( el => {
				const setterElem = document.querySelector(el.dataset.bind);
				el.style.width = `${parseFloat(getComputedStyle(setterElem).width)}px`;
			})			
		}
	}

	function initSlider() {
	  const swiper = new Swiper("#swiper", {
	    grabCursor: true,
	    keyboard: true,
	    effect: 'cards',
	    pagination: {
	      el: ".swiper-pagination",
	      clickable: true,
	      dynamicBullets: true,
	    },
		  navigation: {
	      nextEl: ".swiper-button-next",
	      prevEl: ".swiper-button-prev",
	    },
		   breakpoints: {
		   	0: {
					effect: "creative",
					creativeEffect: {
						prev: {
							shadow: true,
							translate: ["-20%", 0, -1],
						},
						next: {
							translate: ["100%", 0, 0],
						},
					},
		   	},
	      768: {
	        effect: 'cards',
	      }
	    },
	  });		
	}

	function insertIcons() {

	  const iconsArr = [
	  	{
	  		el: document.querySelectorAll('.gallery__link'),
	  		icon: '<svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>' 
	  	},
	  	{
	  		el: document.querySelectorAll('.swiper-button-prev'),
	  		icon: '<svg version="1.1" id="Capa_1" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" xml:space="preserve"><g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441 L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082 c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647 c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>' 
	  	},
	  	{
	  		el: document.querySelectorAll('.swiper-button-next'),
	  		icon: '<svg version="1.1" id="Capa_1" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" xml:space="preserve"><g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441 L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082 c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647 c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>' 
	  	},
	  ];  	

		iconsArr.forEach(arr => {
				arr.el.forEach(el => {
					if (el) el.insertAdjacentHTML('beforeend', arr.icon);				
				})				
		})
	}	

	const dB = {
		path: 'img/Проекты',
		labels: {
			date: 'Год',
			area: 'Место производства',
			service: 'Вид услуги',
			type: 'Тип рубки',
			size: 'Размер сруба',
			button: 'Посмотреть',
		},
		menu: {
			menuList: document.querySelector('.menu__list'),
			itemClass: 'menu__item',
			linkClass: 'menu__link',

			items: [
				{ text: 'ГЛАВНАЯ', goto: '#section_1' },
				{ text: 'УСЛУГИ', goto: '#section_2' },
				{ text: 'ПРОЕКТЫ', goto: '#section_3' },
				{ text: 'КОНТАКТЫ', goto: '#footer' },
			],

			generate() {
				this.items.forEach( item => {
					let link = createNode('a', this.linkClass, item.text, 'data-goto', item.goto, 'href', '#');
					this.menuList.append(createNode('li', this.itemClass, link));
				})
			},
		},
		section_1: {
			wrapper: document.querySelector('.section-1__wrapper'),
			listClassName: 'section-1__list',
			title: { 
				titleText: 'Дома и бани ручной рубки', 
				titleClass: 'section-1__title', 
			},
			text: {
				listClassName: 'section-1__list',
				itemClassName: 'section-1__item',
				itemContent: ['в лапу', 'в нижнюю чашу', 'в верхнюю чашу', 'в диком стиле'],
			},
			generate() {

				let titleClass = this.title.titleClass,
						titleText = this.title.titleText,
						itemClass = this.text.itemClassName,
						itemContent = this.text.itemContent,
						listClass = this.listClassName;

				this.wrapper.append(createNode('h1', titleClass, titleText));

				const list = createNode('ul', listClass)

				for (let i = 0; i < itemContent.length; i++) {
					let text = itemContent[i];
					let item = createNode('li', itemClass, text);		
					list.append(item);			
				}

				this.wrapper.append(list);

			},
		},
		projects: [
			{
				id: 0,
				folder: '/сруб1/',
				title: 'Сруб',
				description: 'Производство и укладка сруба',
				location: 'Белорецкий район',
				date: '2016',
				service: 'Укладка сруба',
				cabinType: 'Дикая',
				sortType: '3',
				size: '6х8',
				images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',],
			},
			{
				id: 1,
				folder: '/сруб2/',
				title: 'Сруб',
				description: 'Производство и укладка сруба',
				location: 'Бурзянский район',
				date: '2018',
				service: 'Укладка сруба',
				cabinType: 'В лапу',
				sortType: '2',
				size: '7х9',
				images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', ],		
			},
			{
				id: 2,
				folder: '/сруб1/',
				title: 'Сруб',
				description: 'Производство и укладка сруба',
				location: 'Шаранский район',
				date: '2015',
				service: 'Укладка сруба',
				cabinType: 'В чашу',
				sortType: '1',
				size: '6х7',
				images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',],
			},
			{
				id: 3,
				folder: '/сруб2/',
				title: 'Крыша',
				description: 'Укладка сруба + кровельные работы (Осоргино)',
				location: 'Кугарчинский район',
				date: '2017',
				service: 'Кровля крыши',
				cabinType: 'В лапу',
				sortType: '4',
				size: '7х9',
				images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', ],
			},
			{
				id: 4,
				folder: '/сруб1/',
				title: 'Сруб',
				description: 'Производство и укладка сруба',
				location: 'Архангельский район',
				date: '2016',
				service: 'Укладка сруба',
				cabinType: 'Дикая',
				sortType: '3',
				size: '6х6',
				images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',],
			},
			{
				id: 5,
				folder: '/сруб2/',
				title: 'Сруб',
				description: 'Производство и укладка сруба',
				location: 'Белебеевский район',
				date: '2019',
				service: 'Укладка сруба',
				cabinType: 'В чашу',
				sortType: '1',
				size: '7х7',
				images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', ],
			},
		],
		banners: {
			left: document.querySelector('#section_2').firstElementChild.lastElementChild,
			right: document.querySelector('#section_2').lastElementChild.lastElementChild,

			title: 'section-2__title',
			thumb: 'section-2__title__thumb',
			image: 'section-2__title__image',
			path: './img/icons/',

      left_title: 'Доставка сруба',
			left_image: 'truck.ico',
			left_container: 'section-2__text',
			left_content: `Доставка сруба от производственной площадки до Вашего участка осуществляется КАМАЗами — длинномерами с полуприцепом длиной 13,6 метров. Грузоподъемность — 20 тонн. 
        В садовые участки, куда не может проехать КАМАЗ, сруб перегружаем и завозим на манипуляторе — вездеходе (срубы размерами до 6х8, 7х7 метров).`,
      
      right_title: 'Монтаж сруба',
      right_image: 'townhouse.ico',
			right_container: 'section-2__list',        
      right__content: [
				'Разгрузка и монтаж сруба осуществляется Краном-манипулятором.',
				'Сборку осуществляет бригада, имеющая многолетний опыт сборки срубов разных размеров и конфигураций.',
				'Сборку осуществляет бригада, которая рубила сруб!',
				'Для сборки сруба используются специальные когти (ножницы) для охвата бревна.',
				'Стоимость монтажа (сборки) сруба зависит от размеров сруба (в среднем составляет 30% от стоимости сруба).',
      	],
      generate() {
				//Путь иконки
      	const left_path = this.path+this.left_image;
      	//Генерация иконки
      	const left_icon = createNode('img', this.image, '', 'src', left_path, 'alt', left_path)
      	const left_thumb = createNode('div', this.thumb, left_icon)  

      	this.left.append(createNode('div', this.title, this.left_title));
      	this.left.firstElementChild.append(left_thumb);      	
      	this.left.append(createNode('div', this.left_container, this.left_content))
      	this.left.firstElementChild.append(left_thumb); //section-2__title + section-2__title__thumb

				this.right.append(createNode('div', this.title, this.right_title))
				//Путь иконки				
      	const right_path = this.path+this.right_image;
      	//Генерация иконки
      	const right_icon = createNode('img', this.image, '', 'src', right_path, 'alt', right_path)
      	const right_thumb = createNode('div', this.thumb, right_icon)

				//section-2__title + section-2__title__thumb
      	this.right.firstElementChild.append(right_thumb); 
      	let list = createNode('ul', this.right_container);
      	this.right__content.forEach( content => {
      	list.append(createNode('li', 'section-2__item', content));
      	})

				this.right.append(list) 
      }
		}

  };

	function generateGallery() {
		for (let i = 0; i < dB.projects.length; i++) {
			const p = dB.projects[i];
			const template = `
			<div class="gallery__item" id="link" data-sort='${p.sortType}' data-modal="modal-${dB.projects[i].id + 1}" style="background: url(${dB.path + p.folder + p.images[0]})  0 0 / cover no-repeat;"
			data-id="${dB.projects[i].id}">
        <div class="gallery__text">
          <div class="gallery__description">
            <h2 class="gallery__description__title">${p.title + ' ' + p.size}</h2>
            <p class="gallery__description__text">${p.description}</p></div>
          <div class="gallery__link">${dB.labels.button}</div>
        </div>
      </div>`;
      if (gallery) gallery.insertAdjacentHTML('beforeend', template);
		}
	}		

	function generateSlider() {
		for (let i = 0; i < dB.projects.length; i++) {
			const p = dB.projects[i];
			const sliderTemplate = `
				<div id="modal-${p.id + 1}" class="section-3__modal modal__section-3">
		      <div class="modal__wrapper">
		        <a href="" onclick="event.preventDefault()" class="modal__close close-modal">X</a>
		        <!-- Слайдер -->
		        <div class="modal__slider slider__modal swiper" id="swiper">
		          <div class="slider__wrapper swiper-wrapper"><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[0]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[1]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[2]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[3]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[4]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[5]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[6]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[7]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[8]}" alt="" class="slider__img"></div><div class="slider__item swiper-slide"><img src="${dB.path + p.folder + p.images[9]}" alt="" class="slider__img"></div>
		          </div>
		          <div class="swiper-button-prev"></div>
		          <div class="swiper-button-next"></div>
		          <div class="swiper-pagination"></div>
		        </div>
		        <!-- Контент -->
		        <div class="modal__content content__modal">
			  			<div class="content__value">
		            <span>${dB.labels.date}:</span>
		            <a href="">${p.date}</a>
		          </div>
		          <div class="content__value">
		            <span>${dB.labels.area}:</span>
		            <a href="">${p.location}</a>
		          </div>
		          <div class="content__value">
		            <span>${dB.labels.service}:</span>
		            <a href="">${p.service}</a>
		          </div>
		          <div class="content__value">
		            <span>${dB.labels.type}:</span>
		            <a href="">${p.cabinType}</a>
		          </div>
		          <div class="content__value">
		            <span>${dB.labels.size}:</span>
		            <a href="">${p.size}</a>
		          </div>
		        </div>
		      </div>
		    </div>`;

	    if (gallery) gallery.insertAdjacentHTML('beforeend', sliderTemplate); 
		}
	}

	function sortGallery() {
		document.querySelector('#category').addEventListener('click', function(e) {
		document.querySelectorAll('.gallery__item').forEach( item => {			
				if (item.dataset.sort !== e.target.dataset.sort) {
					item.style.display = "none";
				}
				else {
					item.style.display = "block"
				}
				if (e.target.dataset.sort === '5') item.style.display = "block";
			})
		})		
	}


	function popupToggler() {
		const	lockPadding = document.querySelectorAll('.lock-padding'),
					links = document.querySelectorAll('#link'),
					closeIcon = document.querySelectorAll('.close-modal'),
					timeout = 800; 	
			let unlock = true;

		if (links.length > 0) {
			links.forEach( link => {
				link.addEventListener('click', function (e) {
					popupOpen(document.getElementById(link.dataset.modal));
					e.preventDefault();						
				});
			})
		}

		if (closeIcon.length > 0) {
			closeIcon.forEach( close => {
				close.addEventListener('click', function (e) {
					popupClose(close.closest('.modal__section-3'));
					e.preventDefault();
				})			
			})
		}

		function popupOpen(currentPopup) {
			const popupActive = document.querySelector('.modal__section-3.open');
			if (currentPopup && unlock) {
				if (popupActive) popupClose(popupActive, false); //doUnlock=false блокируем скроллинг окна под окном }
				else bodyLock(); 
				currentPopup.classList.add('open');
				currentPopup.addEventListener('click', function (e) {
					if (!e.target.closest('.modal__wrapper')) {
						popupClose(e.target.closest('.modal__section-3'));
					}
				});
			}
		}

		function popupClose(popupActive, doUnlock = true) {
			if (unlock) {
				popupActive.classList.remove('open'); //При открытии нового окна закрываем открытое (родительское)
				if (doUnlock) {
					bodyUnLock(); 
				}	
			}
		}

		function bodyLock() {
			const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
			lockPaddingToggle(lockPadding, lockPaddingValue);
			body.classList.add('lock');
			body.style.paddingRight = lockPaddingValue;
			preventDbClick();
		}

		function lockPaddingToggle(items, val) {
			if (items.length > 0) {
				items.forEach(item => {
					item.style.paddingRight = val;
				})			
			}
		}

		function bodyUnLock() {
			setTimeout(function () {
				lockPaddingToggle(lockPadding, '0px');
				body.style.paddingRight = '0px';			
				body.classList.remove('lock');
			}, timeout);
			preventDbClick();
		}


		function preventDbClick() {
			unlock = false;		//Прерываем двойное нажатие на попап-кнопку
			setTimeout(function () {
				unlock = true;
			}, timeout);
		};

		document.addEventListener('keydown', function (e) {
			if (e.which === 27) {
				popupClose(popupActive);
			}
		});

		(function () {
			if (!Element.prototype.closest) {
				Element.prototype.closest = function (css) {
					var node = this;
					while (node) {
						if (node.matches(css)) return node;
						else node = node.parentElement;
					}
					return null;
				};
			}
		})();

		(function () {
			if (!Element.prototype.matches) {
				Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMathesSelector ||
				Element.prototype.mozMathesSelector ||
				Element.prototype.msMathesSelector;
			}
		}) 
	}

	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iOS/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/Windows/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows());
		}
	};
		
	function menuToggler() {
		const menuLinks = document.querySelectorAll('[data-goto]');
		if (isMobile.any()) body.classList.add('_touch');
		else body.classList.add('_pc'); 
		if (icon) { icon.onclick = () => { toggleActive(icon, menuBody); } }
		if (menuLinks.length > 0) {
			menuLinks.forEach(menuLink => {
				if (menuLink) menuLink.addEventListener('click', onMenuLinkClick);
			})
		}

		function onMenuLinkClick(e) {
			const	data = e.target.dataset.goto,
						dataNode = document.querySelector(data);
			if (data && dataNode) {
				const gotoBlockValue = dataNode.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			toggleActive(icon, menuBody);

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
			}
		} 
  }



	window.addEventListener('resize', bindWidth, setHeightByWindow)

	window.addEventListener('scroll', scrollTransform);

  window.addEventListener('load', () => {
		
			exec( () => {
		 		dB.banners.generate();
				dB.menu.generate();
				dB.section_1.generate(); 				
		  	generateGallery();
		  	sortGallery();
				generateSlider();  	
		  	popupToggler();
		  	initSlider();
		  	bindWidth();			
			})

	  	setTimeout( () => { 
				exec( () => {
			  	menuToggler();  		
		  		insertIcons(); 
		  	});
	  	});  		


  	
  });


});