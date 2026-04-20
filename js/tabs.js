const text = document.getElementById("text");
const btnIo = document.getElementById("btn");

let tabCount = 0;

const addTab = () => {
  tabCount++;
  const starWidget = `
  <div id="star-widget">
    <span class="star" data-v="1">★</span>
    <span class="star" data-v="2">★</span>
    <span class="star" data-v="3">★</span>
    <span class="star" data-v="4">★</span>
    <span class="star" data-v="5">★</span>
</div>
<p class="rating-text">قيمنا</p>`;

  const tabId = `tab${tabCount}`;
  const activeClass = tabCount === 1 ? "active" : "";

  const tabButton = `
    <li class="nav-item" role="presentation">
      <button class="nav-link ${activeClass}" 
              id="${tabId}-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#${tabId}" 
              type="button" 
              role="tab">
         ${text.value.slice(0, 20)}
      </button>
    </li>
  `;

  document.getElementById("myTab").insertAdjacentHTML("beforeend", tabButton);

  const tabContent = `
    <div class="tab-pane fade ${activeClass ? "show active" : ""}" 
         id="${tabId}" 
         role="tabpanel">
      <h4>${text.value.trim().split(/\s+/).slice(0, 2).join(" ")}</h4>
      <p>${text.value}</p>
      ${starWidget}
    </div>
  `;

  document
    .getElementById("myTabContent")
    .insertAdjacentHTML("beforeend", tabContent);

  // Activate the newly added tab
  const triggerEl = document.querySelector(`#${tabId}-tab`);
  const tab = new bootstrap.Tab(triggerEl);
  tab.show();
  text.value = "";
};

btnIo.addEventListener("click", addTab);
