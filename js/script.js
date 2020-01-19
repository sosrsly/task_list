
// const tasks = [
//     {
//       _id: '5d2ca9e2e03d40b326596aa7',
//       completed: true,
//       body:
//         'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
//       title: 'Eu ea incididunt sunt consectetur fugiat non.',
//     },
//     {
//       _id: '5d2ca9e29c8a94095c1288e0',
//       completed: false,
//       body:
//         'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
//       title:
//         'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
//     },
//     {
//       _id: '5d2ca9e2e03d40b3232496aa7',
//       completed: true,
//       body:
//         'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
//       title: 'Eu ea incididunt sunt consectetur fugiat non.',
//     },
//     {
//       _id: '5d2ca9e29c8a94095564788e0',
//       completed: false,
//       body:
//         'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
//       title:
//         'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
//     },
//   ];



  const form = document.querySelector(".task-form");
  const taskBtn = form.querySelector("#form-button");
  const listBtn = form.querySelector("#task-button");
  const inputTitle = document.querySelector("[name = title]");
  const inputBody = form.querySelector("[name = body]");
  const listItem = document.querySelector(".list-items");

  // addItemsInTaskList(tasks);

  form.addEventListener("submit", (e) => {
      e.preventDefault();
      let titleValue = inputTitle.value;
      let bodyValue = inputBody.value;
      console.log(titleValue, bodyValue);
      let newElem = createNewElement(titleValue, bodyValue);
      listItem.prepend(newElem);
      form.reset();
  });

  listItem.addEventListener("click", ({target}) => {
    console.log(target);
    if (target.classList.contains("button")) {
      let answer = confirm("r u sure?");
      if (answer) {
        let parent = target.parentElement;
        parent.remove();
        checkContentsListItem();
      }
    }
  });

  function addItemsInTaskList(tasks) {
    let fragment = new DocumentFragment();
    tasks.forEach((item) => {
        fragment.append(listItemTemplate(item));
    });
    listItem.append(fragment);
  }

  function listItemTemplate({body, title:t, _id} = {}) {
    let list = document.createElement("li");
    list.className = "list";

    const title = document.createElement("div");
    title.className = "list__title";
    title.textContent = t;

    const descr = document.createElement("div");
    descr.className = "list__descr";
    descr.textContent = body;

    const button = document.createElement("button");
    button.className = "button button__color_red";
    button.textContent = "Test";

    const label = document.createElement("div");
    label.className = "list__label";

    list.append(title);
    list.append(descr);
    list.append(button);
    list.append(label);
    list.setAttribute("data-id", _id);
    return list;
  }

  function createNewElement(title, body) {
    const elemObj = {
      title,
      body,
      completed: false,
      _id: `fromForm-${Math.random()}`,
    };
    return listItemTemplate(elemObj);
  }

  function checkContentsListItem() {
    
  }
