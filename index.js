fetch("./books.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  const bgImage = document.createElement("div");
  const capt = document.createElement("div");
  const sp1 = document.createElement("span");
  const sp2 = document.createElement("span");
  const hr = document.createElement("hr");
  const btnOurBooks = document.createElement("button");
  const br = document.createElement("br");

  btnOurBooks.className = "btn";
  btnOurBooks.innerText = "try our books";
  sp1.className = "border";
  sp2.className = "border";
  sp1.innerText = "discover the  ";
  sp2.innerText = "great minds";

  bgImage.className = "bgimg-1";
  capt.className = "caption";
  hr.className = "hr2";

  btnOurBooks.onclick = function () {
    location.href = "#header";
  };

  capt.appendChild(sp1);
  capt.appendChild(br);
  capt.appendChild(sp2);
  capt.appendChild(hr);
  capt.appendChild(btnOurBooks);
  bgImage.appendChild(capt);
  let fragment = new DocumentFragment();

  fragment.appendChild(bgImage);

  const header = document.createElement("header");
  header.setAttribute("id", "header");
  const heading = document.createElement("h1");
  const container = document.createElement("div");

  container.className = "container";
  heading.setAttribute("id", "heading");
  heading.innerHTML = "Book Catalog";

  header.append(heading);
  fragment.append(header);

  let grandCartCont = document.createElement("div");
  grandCartCont.className = "grand-cart-container";

  let cartContainer = document.createElement("div");
  cartContainer.className = "cart-container";

  //Cart show/hide toggle button
  let btnToggleCart = document.createElement("button");
  let btnOrder = document.createElement("button");
  let itemCount = 0;
  btnToggleCart.textContent = `Show Cart of ${itemCount} items`;
  btnOrder.textContent = "Confirm order";
  btnToggleCart.style.cssText = `position: absolute; top: 25%; left: 0; width: 100px`;
  // btnOrder.style.cssText = `position: absolute; top: 25%; left: 0; width: 100px`;
  btnOrder.style.cssText = `position:absolute;  width: 115px; left: 15%;
  bottom: 10px;`;

  let cart = document.createElement("div");
  let babyCart = document.createElement("div");

  //Total price p tag
  let totalPrice = document.createElement("p");
  let hrCart = document.createElement("hr");
  let unorderedList = document.createElement("ul");
  let listItem1 = document.createElement("li");
  let listItem2 = document.createElement("li");
  let listItem3 = document.createElement("li");
  listItem1.textContent = "Image";
  listItem2.textContent = "Name";
  listItem3.textContent = "Price";
  unorderedList.appendChild(listItem1);
  unorderedList.appendChild(listItem2);
  unorderedList.appendChild(listItem3);

  let clearAll = document.createElement("button");
  clearAll.innerText = "Clear All";
  clearAll.onclick = () => {
    testTable.innerHTML = "";
    itemCount = 0;
    specialPriceTag = 0;
    totalPrice.textContent = `Total: ${specialPriceTag}$`;
    btnToggleCart.textContent = `Show Cart of ${itemCount} items`;
  };

  let specialPriceTag = 0;
  let val = 0;
  totalPrice.innerText = `Total: ${specialPriceTag}$`;
  let total = document.createElement("p");
  cart.appendChild(totalPrice);
  cart.appendChild(hrCart);
  cart.appendChild(unorderedList);

  cart.className = "cart-content";
  babyCart.className = "baby-cart-content";
  let agent_1;

  babyCart.setAttribute("id", agent_1);

  cart.style.cssText = `display: none;`;
  clearAll.style.cssText = `position:absolute;  width: 75px; left: 55%;
  bottom: 10px;`;
  cart.appendChild(clearAll);
  cart.appendChild(btnOrder);

  //Table

  let testTable = document.createElement("table");

  //TOGGLE CART BUTTON

  btnToggleCart.onclick = function () {
    if (cart.style.display === "block") {
      cart.style.display = "none";
    } else {
      cart.style.display = "block";
    }
  };

  //REDIRECT TO ORDER PAGE

  btnOrder.onclick = function () {
    location.href = "OrderForm.html";
  };

  //Cart append elements
  cart.appendChild(babyCart);
  cartContainer.appendChild(cart);

  grandCartCont.appendChild(cartContainer);

  grandCartCont.appendChild(btnToggleCart);

  header.append(grandCartCont);

  let detailedInformationContainer = document.createElement("div");
  detailedInformationContainer.className = "detailed-information-container";
  let disableShowMore = true;

  // IMPLEMENT DRAG AND DROP
  cartContainer.addEventListener("dragover", allowDrop);
  // grandCartCont.addEventListener("dragover", allowDrop);
  function allowDrop(ev) {
    ev.preventDefault();
  }
  // babyCart.addEventListener("dragover", allowDrop);
  // // grandCartCont.addEventListener("dragover", allowDrop);
  // function allowDrop(ev) {
  //   ev.preventDefault();
  // }

  cartContainer.addEventListener("drop", drop);
  // babyCart.addEventListener("drop", drop);
  // grandCartCont.addEventListener("drop", drop);

  function drop(ev) {
    let title2 = document.createElement("div");
    let author2 = document.createElement("p");
    let bookName2 = document.createElement("p");
    let image2 = document.createElement("img");
    let price2 = document.createElement("p");
    let btnX2 = document.createElement("button");

    price2.className = "elm-p";
    bookName2.className = "elm-t";
    author2.className = "elm-a";
    image2.className = "elm-img";
    image2.src = data[+agent_1].imageLink;

    author2.innerHTML = data[+agent_1].author;
    price2.innerHTML = data[+agent_1].price + "$";
    bookName2.innerHTML = data[+agent_1].title;
    btnX2.innerText = "X";

    if (cart.textContent.includes(price2.textContent)) {
    } else {
      let middleRow2 = document.createElement("tr");
      middleRow2.style.cssText = `display: flex; align-items: center;`;

      let titleTD2 = document.createElement("td");
      let imageTD2 = document.createElement("td");
      let priceTD2 = document.createElement("td");
      let btnXTD2 = document.createElement("td");

      imageTD2.appendChild(image2);
      btnXTD2.appendChild(btnX2);
      title2.appendChild(bookName2);
      title2.appendChild(author2);
      titleTD2.appendChild(title2);
      priceTD2.appendChild(price2);

      middleRow2.appendChild(imageTD2);
      middleRow2.appendChild(titleTD2);
      middleRow2.appendChild(priceTD2);
      middleRow2.appendChild(btnXTD2);

      testTable.appendChild(middleRow2);

      let empArr = [];
      const collection = document.getElementsByClassName("elm-p");
      itemCount = collection.length;
      btnToggleCart.textContent = `Show Cart of ${itemCount} items`;

      for (let i = 0; i < collection.length; i++) {
        empArr.push(collection[i].textContent.replace("$", ""));
      }

      let sumArr = empArr.map(Number);

      total.textContent = sumArr.reduce((p, c) => p + c);

      specialPriceTag = sumArr.reduce((p, c) => p + c);
      totalPrice.textContent = `Total: ${specialPriceTag}$`;

      btnX2.onclick = () => {
        val = parseInt(total.textContent) - parseInt(price2.textContent);
        total.textContent = val.toString();
        totalPrice.textContent = `Total: ${
          specialPriceTag - parseInt(price2.textContent)
        }`;
        totalPrice.textContent = `Total: ${val.toString()}$`;

        middleRow2.remove();
        const collection = document.getElementsByClassName("elm-p");
        itemCount = collection.length;
        btnToggleCart.textContent = `Show Cart of ${itemCount} items`;
      };
    }

    ev.preventDefault();
  }

  //BIG LOOP STARTS HERE

  for (var i = 0; i < data.length; i++) {
    const wrapper = document.createElement("div");
    const info = document.createElement("div");

    const card = document.createElement("div");

    const overlay = document.createElement("div");
    const text = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h4");
    const author = document.createElement("h5");
    const price = document.createElement("span");

    const slideUpPrice = document.createElement("p");
    const slideUpTitle = document.createElement("p");
    const slideUpAuthor = document.createElement("p");
    const btnAddToCart = document.createElement("button");

    let imagSrc = data[i].imageLink;
    slideUpPrice.className = "slide-up-price";
    slideUpTitle.className = "slide-up-title";
    slideUpAuthor.className = "slide-up-author";
    btnAddToCart.className = "btn-add-to-cart";
    slideUpPrice.innerHTML = data[i].price + "$";
    slideUpTitle.innerHTML = data[i].title;
    slideUpAuthor.innerHTML = data[i].author;
    btnAddToCart.innerHTML = "add to cart";

    image.setAttribute("id", `${i}`);

    let detailedInformation = document.createElement("div");
    let btnInfoX = document.createElement("button");
    detailedInformation.className = "detailed-information";
    btnInfoX.className = "btn-info-x";
    btnInfoX.textContent = "X";

    btnInfoX.addEventListener("click", hideDetails);
    function hideDetails() {
      disableShowMore = true;
      detailedInformation.style.display = "none";
    }
    const descriptionPopUp = document.createElement("p");
    const disPhoto = document.createElement("img");
    disPhoto.src = data[i].imageLink;
    descriptionPopUp.innerText = data[i].description;
    detailedInformation.appendChild(btnInfoX);
    detailedInformation.appendChild(disPhoto);
    detailedInformation.appendChild(descriptionPopUp);
    detailedInformationContainer.appendChild(detailedInformation);
    fragment.appendChild(detailedInformationContainer);
    /////////////////////////////////////

    const btnShowMore = document.createElement("button");
    btnShowMore.className = "btn-show-more";
    btnShowMore.innerHTML = "Show more";
    btnShowMore.addEventListener("click", showDetails);
    function showDetails() {
      if (disableShowMore) {
        disableShowMore = false;
        detailedInformation.style.display = "block";
      }
    }
    babyCart.append(testTable);
    btnAddToCart.addEventListener("click", addBookToBasket);
    function addBookToBasket() {
      let elmInfo = document.createElement("div");
      let elmP = document.createElement("div");
      let elmT = document.createElement("div");
      let elmA = document.createElement("div");
      let elmImage = document.createElement("img");
      elmInfo.className = "elm-info";
      elmP.className = "elm-p";
      elmT.className = "elm-t";
      elmA.className = "elm-a";
      elmImage.className = "elm-img";
      let btnX = document.createElement("button");

      btnX.className = "btn-x";
      btnX.innerHTML = "X";
      elmP.innerHTML = slideUpPrice.textContent;
      elmT.innerHTML = slideUpTitle.textContent;
      elmA.innerHTML = slideUpAuthor.textContent;
      elmImage.src = imagSrc;
      elmImage.style.cssText = `background-color: red;`;
      if (cart.textContent.includes(slideUpPrice.textContent)) {
      } else {
        let middleRow = document.createElement("tr");
        middleRow.style.cssText = `display: flex; align-items: center;`;

        let titleTD = document.createElement("td");
        let btnXTD = document.createElement("td");
        let imageTD = document.createElement("td");
        let priceTD = document.createElement("td");

        imageTD.style.cssText = `align-self: stretch;`;
        imageTD.appendChild(elmImage);
        priceTD.appendChild(elmP);
        btnXTD.appendChild(btnX);
        titleTD.appendChild(elmT);
        titleTD.appendChild(elmA);
        middleRow.appendChild(imageTD);
        middleRow.appendChild(titleTD);
        middleRow.appendChild(priceTD);
        middleRow.appendChild(btnXTD);
        testTable.appendChild(middleRow);

        let empArr = [];
        const collection = document.getElementsByClassName("elm-p");
        itemCount = collection.length;
        btnToggleCart.textContent = `Show Cart of ${itemCount} items`;

        for (let i = 0; i < collection.length; i++) {
          empArr.push(collection[i].textContent.replace("$", ""));
        }

        let sumArr = empArr.map(Number);

        total.textContent = sumArr.reduce((p, c) => p + c);

        specialPriceTag = sumArr.reduce((p, c) => p + c);
        totalPrice.textContent = `Total: ${specialPriceTag}$`;
        console.log(typeof specialPriceTag);
        // titleAll.textContent += slideUpTitle.textContent;
        btnX.onclick = function () {
          val = parseInt(total.textContent) - parseInt(elmP.textContent);
          total.textContent = val.toString();
          totalPrice.textContent = `Total: ${
            specialPriceTag - parseInt(elmP.textContent)
          }`;
          totalPrice.textContent = `Total: ${val.toString()}$`;

          middleRow.remove();
          const collection = document.getElementsByClassName("elm-p");
          itemCount = collection.length;
          btnToggleCart.textContent = `Show Cart of ${itemCount} items`;
        };
      }
    }

    wrapper.className = "wrapper";
    info.className = "info";
    card.className = "card";

    overlay.className = "overlay";
    text.className = "text";
    title.className = "title";
    author.className = "author";
    title.innerHTML = data[i].title;
    author.innerHTML = data[i].author;
    price.innerHTML = data[i].price;
    image.src = data[i].imageLink;

    card.appendChild(image);
    info.appendChild(title);
    info.appendChild(author);
    info.appendChild(price);

    text.appendChild(slideUpPrice);
    text.appendChild(slideUpTitle);
    text.appendChild(slideUpAuthor);
    text.appendChild(btnAddToCart);
    text.appendChild(btnShowMore);

    overlay.appendChild(text);

    card.appendChild(overlay);
    card.appendChild(info);

    wrapper.appendChild(card);
    container.appendChild(wrapper);
  }
  document.body.addEventListener("dragstart", drag);
  function drag(ev) {
    // grandCartCont.innerText = "drap here";
    // btnToggleCart.innerText = "drap here";
    agent_1 = ev.target.id;
    ev.dataTransfer.setData("text", ev.target.id);
  }
  fragment.append(container);
  document.body.appendChild(fragment);
}
